import React from 'react';
import { PanelBody } from '@wordpress/components';
import SpacingControlPanel from './SpacingControlPanel';

export default function BorderPanel({ attributes, setAttributes }) {
  return (
    <PanelBody title="Border" initialOpen={true}>
      <SpacingControlPanel
        attributes={attributes}
        setAttributes={setAttributes}
        attributePrefix="border"
        colorPrefix="borderColor"
        controls={{
          top: true,
          right: true,
          bottom: true,
          left: true,
        }}
        groupedObject={true}
      />
      <SpacingControlPanel
        label="Border Radius"
        attributes={attributes}
        setAttributes={setAttributes}
        attributePrefix="borderRadius"
        mode="corners"
        controls={{
          TopLeft: true,
          TopRight: true,
          BottomRight: true,
          BottomLeft: true,
        }}
        unit="px"
        groupedObject={true}
      />
 
    </PanelBody>
  );
}
