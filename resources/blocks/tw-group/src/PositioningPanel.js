import React from 'react';
import { PanelBody, ButtonGroup, IconButton } from '@wordpress/components';
import SpacingControlPanel from './SpacingControlPanel';

const POSITION_OPTIONS = [
  {
    value: 'static',
    label: 'Static',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="8" width="10" height="4" fill="#555"/></svg>
    ),
  },
  {
    value: 'relative',
    label: 'Relative',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="8" width="10" height="4" fill="#555"/><path d="M5 8v-2h10v2" stroke="#007cba" strokeWidth="1.5"/></svg>
    ),
  },
  {
    value: 'absolute',
    label: 'Absolute',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20"><rect x="3" y="6" width="14" height="8" fill="#555"/><rect x="7" y="9" width="6" height="2" fill="#fff"/></svg>
    ),
  },
  {
    value: 'fixed',
    label: 'Fixed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="8" width="10" height="4" fill="#555"/><rect x="2" y="2" width="16" height="16" stroke="#007cba" strokeWidth="1.5" fill="none"/></svg>
    ),
  },
];

export default function PositioningPanel({ attributes, setAttributes }) {
  const position = attributes.position || 'static';
  return (
    <PanelBody
      title="Positioning"
      initialOpen={!!attributes.panelState?.positioning}
      onToggle={() => setAttributes({
        panelState: {
          ...attributes.panelState,
          positioning: !attributes.panelState?.positioning
        }
      })}
    >
      <div style={{ marginBottom: 16 }}>
        <ButtonGroup>
          {POSITION_OPTIONS.map(opt => (
            <IconButton
              key={opt.value}
              icon={opt.icon}
              label={opt.label}
              isPressed={position === opt.value}
              onClick={() => setAttributes({ position: opt.value })}
            />
          ))}
        </ButtonGroup>
      </div>
      {position !== 'static' && (
        <SpacingControlPanel
          label="Position Offsets"
          attributes={attributes}
          setAttributes={setAttributes}
          attributePrefix="positionOffsets"
          controls={{
            top: true,
            right: true,
            bottom: true,
            left: true,
          }}
          unit="px"
          useSpacingPresetsFromTheme={true}
          groupedObject={true}
        />
      )}
    </PanelBody>
  );
}
