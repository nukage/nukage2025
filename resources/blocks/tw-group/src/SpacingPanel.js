import React from 'react';
import { PanelBody } from '@wordpress/components';
import SpacingControlPanel from './SpacingControlPanel';

export default function SpacingPanel({ attributes, setAttributes }) {
  return (
    <PanelBody
      title="Spacing"
      initialOpen={!!attributes.panelState?.spacing}
      onToggle={() => setAttributes({
        panelState: {
          ...attributes.panelState,
          spacing: !attributes.panelState?.spacing
        }
      })}
    >
      <SpacingControlPanel
        label="Margin"
        attributes={attributes}
        setAttributes={setAttributes}
        attributePrefix="margin"
        unit="px"
        groupedObject={true}
      />
      <SpacingControlPanel
        label="Padding"
        attributes={attributes}
        setAttributes={setAttributes}
        attributePrefix="padding"
        unit="px"
        groupedObject={true}
      />
    </PanelBody>
  );
}
