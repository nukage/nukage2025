import React, { useRef, useState } from 'react';
import { PanelBody, Button, Popover, ColorPalette } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';

export default function ColorPanel({ attributes, setAttributes }) {
  const palette = useSetting('color.palette') || [];
  const [showPopover, setShowPopover] = useState(null); // 'text' or 'background' or null
  const textButtonRef = useRef();
  const bgButtonRef = useRef();

  return (
    <PanelBody title="Colors" initialOpen={true}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button
            ref={textButtonRef}
            variant="secondary"
            style={{ width: '100%', justifyContent: 'flex-start' }}
            onClick={() => setShowPopover('text')}
          >
            <span style={{ width: 18, height: 18, borderRadius: '50%', background: attributes.textColor || '#fff', border: '1px solid #ccc', display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }} />
            Text
          </Button>
          {showPopover === 'text' && (
            <Popover anchorRef={textButtonRef.current} onClose={() => setShowPopover(null)}>
              <ColorPalette
                colors={palette}
                value={attributes.textColor || ''}
                onChange={color => { setAttributes({ textColor: color }); setShowPopover(null); }}
                clearable
              />
            </Popover>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button
            ref={bgButtonRef}
            variant="secondary"
            style={{ width: '100%', justifyContent: 'flex-start' }}
            onClick={() => setShowPopover('background')}
          >
            <span style={{ width: 18, height: 18, borderRadius: '50%', background: attributes.backgroundColor || '#fff', border: '1px solid #ccc', display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }} />
            Background
          </Button>
          {showPopover === 'background' && (
            <Popover anchorRef={bgButtonRef.current} onClose={() => setShowPopover(null)}>
              <ColorPalette
                colors={palette}
                value={attributes.backgroundColor || ''}
                onChange={color => { setAttributes({ backgroundColor: color }); setShowPopover(null); }}
                clearable
              />
            </Popover>
          )}
        </div>
      </div>
    </PanelBody>
  );
}
