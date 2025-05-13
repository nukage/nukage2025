<?php
add_action('template_redirect', function () {
    if (is_single() && has_term('members', 'member-status')) {
        if (!is_user_logged_in()) {
            wp_redirect(home_url('/my-account')); // redirect non-logged in users
            exit;
        }

        $user = wp_get_current_user();
        $contact = FluentCrm\App\Models\Subscriber::where('user_id', $user->ID)->first();
        $tags = $contact->tags;
        // Check if the collection is empty or does not contain the desired tag with 'slug' of 'member-tier-2'
        $found = false;

        foreach ($tags as $tag) {

            // Ensure $tag->attributes is not null before checking the slug
            if ($tag instanceof FluentCrm\App\Models\Tag && isset($tag['attributes']['slug']) && $tag['attributes']['slug'] === 'member-tier-2') {
                $found = true;
                break;
            }
        }

        if ($tags->isEmpty() || !$found) {
            // Redirect to /sorry-members if the tag is not found
            wp_redirect(home_url('/sorry-members'));
            exit; // Always call exit after wp_redirect to ensure the script stops executing
        }
    }
});

// function exclude_member_posts_in_query_loop($query)
// {
//     // Ensure we are modifying the main query and not the admin query


//     // Check if we are in a full-site-editing context and have a query loop block

//     // Exclude posts with 'member-tier-2' tag from the Query Loop Block
//     $query->set('tax_query', array(
//         array(
//             'taxonomy' => 'post_tag', // Ensure we are querying the post_tag taxonomy
//             'field'    => 'slug',
//             'terms'    => 'member-tier-2', // Tag to exclude
//             'operator' => 'NOT IN',
//         ),
//     ));
// }

// add_action('pre_get_posts', 'exclude_member_posts_in_query_loop');


// add_action('pre_get_posts', function ($query) {
//     if (is_main_query() && !is_admin()) {
//         $query->set('tag__not_in', array(82)); // Replace with term IDs
//     }
// });
