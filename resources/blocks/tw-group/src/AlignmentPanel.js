import React from 'react';
import { PanelBody, ToolbarGroup, ToolbarButton } from '@wordpress/components';

const ALIGNMENTS = [
  { icon: 'editor-alignleft', label: 'Align left', value: 'alignleft' },
  { icon: 'editor-aligncenter', label: 'Align center', value: 'aligncenter' },
  { icon: 'editor-alignright', label: 'Align right', value: 'alignright' },
  { icon: 'editor-alignwide', label: 'Wide width', value: 'alignwide' },
  { icon: 'editor-alignfull', label: 'Full width', value: 'alignfull' },
];

export default function AlignmentPanel({ attributes, setAttributes }) {
  const { align = '' } = attributes;
  return (
    <PanelBody title="Alignment" initialOpen={false}>
      <ToolbarGroup>
        {ALIGNMENTS.map(alignment => (
          <ToolbarButton
            key={alignment.value}
            icon={alignment.icon}
            label={alignment.label}
            isPressed={align === alignment.value}
            onClick={() => setAttributes({ align: align === alignment.value ? '' : alignment.value })}
          />
        ))}
      </ToolbarGroup>
    </PanelBody>
  );
}
