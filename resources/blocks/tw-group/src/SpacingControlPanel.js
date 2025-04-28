import React, { useRef, useEffect } from 'react';
import { Button, Popover, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';

const SIDES = ['Top', 'Right', 'Bottom', 'Left'];
const CORNERS = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'];

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
  mode = 'sides', // 'sides' (default) or 'corners'
}) {
  // Use attribute for linked state
  const linked = attributes.spacingLinked !== undefined ? attributes.spacingLinked : true;
  const SIDES_OR_CORNERS = mode === 'corners' ? CORNERS : SIDES;
  const setLinked = (val) => setAttributes({ spacingLinked: val });
  const [showPopover, setShowPopover] = React.useState(false);
  const [popoverSide, setPopoverSide] = React.useState('Top');
  const [showColorPopover, setShowColorPopover] = React.useState(false);
  const [colorPopoverSide, setColorPopoverSide] = React.useState('Top');
  const buttonRefs = useRef({});
  const colorButtonRefs = useRef({});
  const customInputRefs = useRef(
    mode === 'corners'
      ? { TopLeft: null, TopRight: null, BottomRight: null, BottomLeft: null }
      : { Top: null, Right: null, Bottom: null, Left: null }
  );
  const spacingPresets = getSpacingPresets();
  const colorPalette = getColorPalette();

  const [customMode, setCustomMode] = React.useState(
    mode === 'corners'
      ? { TopLeft: false, TopRight: false, BottomRight: false, BottomLeft: false }
      : { Top: false, Right: false, Bottom: false, Left: false }
  );
  const [customValues, setCustomValues] = React.useState(
    mode === 'corners'
      ? { TopLeft: '', TopRight: '', BottomRight: '', BottomLeft: '' }
      : { Top: '', Right: '', Bottom: '', Left: '' }
  );

  useEffect(() => {
    SIDES_OR_CORNERS.forEach((side) => {
      if (customMode[side] && customInputRefs.current[side]) {
        customInputRefs.current[side].focus();
      }
    });
  }, [customMode]);

  useEffect(() => {
    // On mount or attribute change, sync customMode and customValues to show number box if value is custom
    SIDES_OR_CORNERS.forEach((side) => {
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
      SIDES_OR_CORNERS.forEach((s) => setAttributes({ [`${attributePrefix}${s}`]: slug }));
    } else {
      setAttributes({ [`${attributePrefix}${side}`]: slug });
    }
    setShowPopover(false);
  };
  const reset = () => {
    SIDES_OR_CORNERS.forEach((s) => {
      setAttributes({ [`${attributePrefix}${s}`]: '' });
    });
    setCustomMode(
      mode === 'corners'
        ? { TopLeft: false, TopRight: false, BottomRight: false, BottomLeft: false }
        : { Top: false, Right: false, Bottom: false, Left: false }
    );
    setCustomValues(
      mode === 'corners'
        ? { TopLeft: '', TopRight: '', BottomRight: '', BottomLeft: '' }
        : { Top: '', Right: '', Bottom: '', Left: '' }
    );
  };
  const getColor = (side) => attributes[`${colorPrefix}${side}`] || '';
  const setColor = (side, color) => {
    if (linked) {
      SIDES_OR_CORNERS.forEach((s) => setAttributes({ [`${colorPrefix}${s}`]: color }));
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

  // Helper to render a single side/corner control (for DRYness)
  const renderSpacingControl = (side, labelOverride) => (
    <div key={side} className={`tw-spacing-${side.toLowerCase()}`}>
      <div style={{ fontSize: 12, marginBottom: 2 }}>{labelOverride || side.replace(/([A-Z])/g, ' $1').trim()}</div>
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
  );

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
        renderSpacingControl('Top')
      ) : (
        mode === 'corners'
          ? <div className="tw-spacing-corners-grid">{CORNERS.map(corner => renderSpacingControl(corner))}</div>
          : <div className="tw-spacing-control-grid">{SIDES.map(side => renderSpacingControl(side))}</div>
      )}
    </div>
  );
}
