// Maps WP theme.json spacing preset slugs to Tailwind spacing keys
// Example: { 'var(--wp--preset--spacing--60)': '6', ... }
// This should be generated from your theme.json and Tailwind config for full accuracy.
// For now, let's hardcode a common mapping as an example:

export const themeSpacingMap = {
    'var(--wp--preset--spacing--0)': '0',
    'var(--wp--preset--spacing--10)': '1',
    'var(--wp--preset--spacing--20)': '2',
    'var(--wp--preset--spacing--30)': '3',
    'var(--wp--preset--spacing--40)': '4',
    'var(--wp--preset--spacing--50)': '5',
    'var(--wp--preset--spacing--60)': '6',
    'var(--wp--preset--spacing--80)': '8',
    'var(--wp--preset--spacing--100)': '10',
    'var(--wp--preset--spacing--120)': '12',
    'var(--wp--preset--spacing--160)': '16',
    'var(--wp--preset--spacing--200)': '20',
    // Add more as needed
};
