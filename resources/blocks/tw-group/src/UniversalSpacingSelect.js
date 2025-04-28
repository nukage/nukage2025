import React from 'react';
import { SelectControl } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';

// Utility to fetch spacing presets from theme.json, with 'Default' at the top
function getSpacingPresets() {
  const spacingSizes = useSetting('spacing.spacingSizes') || [];
  return [
    { slug: '', name: 'Default (none)', value: '' },
    ...spacingSizes.map((preset) => ({
      slug: preset.slug,
      name: preset.name,
      value: preset.size,
    })),
  ];
}

export default function UniversalSpacingSelect({ label = 'Spacing', value, onChange, allowNone = true }) {
  const options = getSpacingPresets().map(opt => ({ label: opt.name, value: opt.value }));
  if (!allowNone) {
    // Remove the default/none option if not allowed
    return (
      <SelectControl
        label={label}
        value={value}
        options={options.filter(opt => opt.value !== '')}
        onChange={onChange}
      />
    );
  }
  return (
    <SelectControl
      label={label}
      value={value}
      options={options}
      onChange={onChange}
    />
  );
}
