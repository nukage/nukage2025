import React from 'react';
import { __ } from '@wordpress/i18n';
import { ButtonGroup, IconButton } from '@wordpress/components';

// SVG Icons
const BlockIcon = (
  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false"><path d="M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"></path></svg>
);

const FlexIcon = (
  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false"><path d="M4 6.5h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4V16h5a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 9 8H4V6.5Zm16 0h-5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5V16h-5a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 15 8h5V6.5Z"></path></svg>
);

const GridIcon = (
  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden="true" focusable="false"><path d="m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z" fillRule="evenodd" clipRule="evenodd"></path></svg>
);

const OPTIONS = [
  {
    value: 'block',
    label: __('Block', 'tw-group'),
    icon: BlockIcon,
  },
  {
    value: 'flex',
    label: __('Flex', 'tw-group'),
    icon: FlexIcon,
  },
  {
    value: 'grid',
    label: __('Grid', 'tw-group'),
    icon: GridIcon,
  },
];

export default function ContainerType({ value, onChange }) {
  return (
    <div>
      <span style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>{__('Container Type', 'tw-group')}</span>
      <ButtonGroup>
        {OPTIONS.map(option => (
          <IconButton
            key={option.value}
            icon={option.icon}
            label={option.label}
            isPressed={value === option.value}
            onClick={() => onChange(option.value)}
            style={{ border: value === option.value ? '2px solid #007cba' : undefined }}
          />
        ))}
      </ButtonGroup>
    </div>
  );
}
