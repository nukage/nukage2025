import React, { useRef, useState, useEffect } from 'react';
import { Button, Popover, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';

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

export default function SingleSpacingSelect({ label = 'Spacing', value, onChange, allowNone = true }) {
  const buttonRef = useRef();
  const [showPopover, setShowPopover] = useState(false);
  const [customMode, setCustomMode] = useState(value && value.startsWith('custom:'));
  const [customValue, setCustomValue] = useState(customMode ? value.replace('custom:', '') : '');
  const spacingPresets = getSpacingPresets();

  useEffect(() => {
    if (value && value.startsWith('custom:')) {
      setCustomMode(true);
      setCustomValue(value.replace('custom:', ''));
    } else {
      setCustomMode(false);
      setCustomValue('');
    }
  }, [value]);

  const handlePreset = (slug) => {
    onChange(slug);
    setShowPopover(false);
  };
  const handleCustom = () => {
    setCustomMode(true);
    setShowPopover(false);
  };
  const handleCustomChange = (val) => {
    setCustomValue(val);
    onChange(val ? `custom:${val}` : '');
  };
  const handleExitCustom = () => {
    setCustomMode(false);
    setCustomValue('');
    onChange('');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {label && <span style={{ fontWeight: 600 }}>{label}</span>}
      {customMode ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <UnitControl
            value={customValue}
            onChange={handleCustomChange}
            __next40pxDefaultSize
            style={{ width: 120 }}
          />
          <Button isDestructive onClick={handleExitCustom} size="small">×</Button>
        </div>
      ) : (
        <Button
          ref={buttonRef}
          onClick={() => setShowPopover(true)}
          variant="secondary"
        >
          {value
            ? spacingPresets.find(p => p.slug === value)?.name || value
            : 'Select'}
        </Button>
      )}
      {showPopover && (
        <Popover anchorRef={buttonRef.current} onClose={() => setShowPopover(false)}>
          <div style={{ padding: 8, minWidth: 180 }}>
            {spacingPresets.map((preset) => (
              <Button
                key={preset.slug}
                isPressed={value === preset.slug}
                onClick={() => handlePreset(preset.slug)}
                style={{ marginBottom: 4, width: '100%' }}
              >
                {preset.name}
              </Button>
            ))}
            <Button
              key="custom"
              isPressed={value && value.startsWith('custom:')}
              onClick={handleCustom}
              style={{ marginBottom: 4, width: '100%' }}
            >
              Custom…
            </Button>
          </div>
        </Popover>
      )}
    </div>
  );
}
