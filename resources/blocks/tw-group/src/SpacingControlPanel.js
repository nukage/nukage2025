import React, { useRef, useEffect } from 'react';
import { Button, Popover, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';

const SIDES = ['Top', 'Right', 'Bottom', 'Left'];

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

function getColorPalette() {
  const palette = useSetting('color.palette') || [];
  return palette.map((c) => ({
    color: c.color,
    name: c.name,
    slug: c.slug,
  }));
}

function ColorControlBox({ color, onClick }) {
  return (
    <Button
      className="tw-color-control-box"
      style={{
        width: 24,
        height: 24,
        padding: 0,
        border: '1px solid #ccc',
        background: color ? color : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
      aria-label={color ? `Color: ${color}` : 'No color selected'}
    >
      {!color && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#bbb" strokeWidth="2" /><line x1="4" y1="12" x2="12" y2="4" stroke="#bbb" strokeWidth="2" /></svg>
      )}
    </Button>
  );
}

export default function SpacingControlPanel({
  label,
  attributePrefix,
  colorPrefix,
  attributes,
  setAttributes,
  step = 1,
  unit = 'px',
  showLabel = true,
}) {
  // Use attribute for linked state
  const linked = attributes.spacingLinked !== undefined ? attributes.spacingLinked : true;
  const setLinked = (val) => setAttributes({ spacingLinked: val });
  const [showPopover, setShowPopover] = React.useState(false);
  const [popoverSide, setPopoverSide] = React.useState('Top');
  const [showColorPopover, setShowColorPopover] = React.useState(false);
  const [colorPopoverSide, setColorPopoverSide] = React.useState('Top');
  const buttonRefs = useRef({});
  const colorButtonRefs = useRef({});
  const customInputRefs = useRef({ Top: null, Right: null, Bottom: null, Left: null });
  const spacingPresets = getSpacingPresets();
  const colorPalette = getColorPalette();

  const [customMode, setCustomMode] = React.useState({ Top: false, Right: false, Bottom: false, Left: false });
  const [customValues, setCustomValues] = React.useState({ Top: '', Right: '', Bottom: '', Left: '' });

  useEffect(() => {
    SIDES.forEach((side) => {
      if (customMode[side] && customInputRefs.current[side]) {
        customInputRefs.current[side].focus();
      }
    });
  }, [customMode]);

  useEffect(() => {
    // On mount or attribute change, sync customMode and customValues to show number box if value is custom
    SIDES.forEach((side) => {
      const slug = getSlug(side);
      if (slug && slug.startsWith('custom:')) {
        setCustomMode((prev) => ({ ...prev, [side]: true }));
        setCustomValues((prev) => ({ ...prev, [side]: slug.replace('custom:', '') }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);

  const getSlug = (side) => attributes[`${attributePrefix}${side}`] || '';
  const setSlug = (side, slug) => {
    if (linked) {
      SIDES.forEach((s) => setAttributes({ [`${attributePrefix}${s}`]: slug }));
    } else {
      setAttributes({ [`${attributePrefix}${side}`]: slug });
    }
    setShowPopover(false);
  };
  const reset = () => {
    SIDES.forEach((s) => {
      setAttributes({ [`${attributePrefix}${s}`]: '' });
    });
    setCustomMode({ Top: false, Right: false, Bottom: false, Left: false });
    setCustomValues({ Top: '', Right: '', Bottom: '', Left: '' });
  };
  const getColor = (side) => attributes[`${colorPrefix}${side}`] || '';
  const setColor = (side, color) => {
    if (linked) {
      SIDES.forEach((s) => setAttributes({ [`${colorPrefix}${s}`]: color }));
    } else {
      setAttributes({ [`${colorPrefix}${side}`]: color });
    }
    setShowColorPopover(false);
  };
  const clearColor = (side) => setColor(side, '');

  const enterCustomMode = (side) => {
    setCustomMode((prev) => ({ ...prev, [side]: true }));
    setShowPopover(false);
  };
  const exitCustomMode = (side) => {
    setCustomMode((prev) => ({ ...prev, [side]: false }));
    setCustomValues((prev) => ({ ...prev, [side]: '' }));
    setSlug(side, '');
  };
  const handleCustomChange = (side, value) => {
    setCustomValues((prev) => ({ ...prev, [side]: value }));
    setSlug(side, value ? `custom:${value}` : '');
  };

  return (
    <div className="tw-spacing-section">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        {showLabel && <span style={{ fontWeight: 600 }}>{label}</span>}
        <Button
          isPressed={linked}
          onClick={() => setLinked(!linked)}
          icon={linked ? 'admin-links' : 'editor-unlink'}
          label={linked ? 'Individual' : 'Linked'}
          style={{ minWidth: 24, minHeight: 24, width: 24, height: 24, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        />
        <Button onClick={reset} variant="secondary" size="small">Reset</Button>
      </div>
      {linked ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {colorPrefix && (
            <ColorControlBox color={getColor('Top')} onClick={() => { setColorPopoverSide('Top'); setShowColorPopover(true); }} ref={el => colorButtonRefs.current['Top'] = el} />
          )}
          {customMode['Top'] ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <UnitControl
                value={customValues['Top']}
                onChange={value => handleCustomChange('Top', value)}
                __next40pxDefaultSize
                style={{ width: 120 }}
              />
              <Button isDestructive onClick={() => exitCustomMode('Top')} size="small">×</Button>
            </div>
          ) : (
            <Button
              ref={(el) => (buttonRefs.current['Top'] = el)}
              onClick={() => {
                setPopoverSide('Top');
                setShowPopover(true);
              }}
              variant="secondary"
            >
              {getSlug('Top') ? spacingPresets.find(p => p.slug === getSlug('Top'))?.name || getSlug('Top') : 'Select'}
            </Button>
          )}
          {colorPrefix && showColorPopover && colorPopoverSide === 'Top' && (
            <Popover anchorRef={colorButtonRefs.current['Top']} onClose={() => setShowColorPopover(false)}>
              <ColorPalette
                colors={colorPalette}
                value={getColor('Top')}
                onChange={(color) => setColor('Top', color)}
                clearable
              />
            </Popover>
          )}
          {showPopover && popoverSide === 'Top' && (
            <Popover anchorRef={buttonRefs.current['Top']} onClose={() => setShowPopover(false)}>
              <div style={{ padding: 8, minWidth: 180 }}>
                {spacingPresets.map((preset) => (
                  <Button
                    key={preset.slug}
                    isPressed={getSlug('Top') === preset.slug}
                    onClick={() => setSlug('Top', preset.slug)}
                    style={{ marginBottom: 4, width: '100%' }}
                  >
                    {preset.name}
                  </Button>
                ))}
                <Button
                  key="custom"
                  isPressed={getSlug('Top').startsWith('custom:')}
                  onClick={() => enterCustomMode('Top')}
                  style={{ marginBottom: 4, width: '100%' }}
                >
                  Custom…
                </Button>
              </div>
            </Popover>
          )}
        </div>
      ) : (
        <div className="tw-spacing-control-grid">
          {SIDES.map((side) => (
            <div key={side} className={`tw-spacing-${side.toLowerCase()}`}>
              <div style={{ fontSize: 12, marginBottom: 2 }}>{side}</div>
              <div className="tw-spacing-side-row">
                {colorPrefix && (
                  <ColorControlBox color={getColor(side)} onClick={() => { setColorPopoverSide(side); setShowColorPopover(true); }} ref={el => colorButtonRefs.current[side] = el} />
                )}
                {customMode[side] ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <UnitControl
                      value={customValues[side]}
                      onChange={value => handleCustomChange(side, value)}
                      __next40pxDefaultSize
                      style={{ width: 120 }}
                    />
                    <Button isDestructive onClick={() => exitCustomMode(side)} size="small">×</Button>
                  </div>
                ) : (
                  <Button
                    ref={el => (buttonRefs.current[side] = el)}
                    onClick={() => {
                      setPopoverSide(side);
                      setShowPopover(true);
                    }}
                    variant="secondary"
                    style={{ width: '100%' }}
                  >
                    {getSlug(side) ? spacingPresets.find(p => p.slug === getSlug(side))?.name || getSlug(side) : 'Select'}
                  </Button>
                )}
              </div>
              {colorPrefix && showColorPopover && colorPopoverSide === side && (
                <Popover anchorRef={colorButtonRefs.current[side]} onClose={() => setShowColorPopover(false)}>
                  <ColorPalette
                    colors={colorPalette}
                    value={getColor(side)}
                    onChange={(color) => setColor(side, color)}
                    clearable
                  />
                </Popover>
              )}
              {showPopover && popoverSide === side && (
                <Popover anchorRef={buttonRefs.current[side]} onClose={() => setShowPopover(false)}>
                  <div style={{ padding: 8, minWidth: 180 }}>
                    {spacingPresets.map((preset) => (
                      <Button
                        key={preset.slug}
                        isPressed={getSlug(side) === preset.slug}
                        onClick={() => setSlug(side, preset.slug)}
                        style={{ marginBottom: 4, width: '100%' }}
                      >
                        {preset.name}
                      </Button>
                    ))}
                    <Button
                      key="custom"
                      isPressed={getSlug(side).startsWith('custom:')}
                      onClick={() => enterCustomMode(side)}
                      style={{ marginBottom: 4, width: '100%' }}
                    >
                      Custom…
                    </Button>
                  </div>
                </Popover>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
