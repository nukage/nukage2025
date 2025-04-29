import React, { useRef, useEffect } from 'react';
import { Button, Popover, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';
import './spacing-control-panel.css';

const SIDES = ['Top', 'Right', 'Bottom', 'Left'];
const CORNERS = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'];

function getSpacingPresets(useSpacingPresetsFromTheme) {
  // If useSpacingPresetsFromTheme is true, always use theme.json spacing scale
  // Otherwise, fallback to default logic
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
  useSpacingPresetsFromTheme = false,
  groupedObject = false,
}) {
  // Use linked state from within the grouped object attribute
  const group = attributes[attributePrefix] || {};
  const linked = group.linked !== undefined ? group.linked : true;
  const setLinked = (val) => setAttributes({
    [attributePrefix]: {
      ...group,
      linked: val
    }
  });
  const SIDES_OR_CORNERS = mode === 'corners' ? CORNERS : SIDES;
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
  const spacingPresets = getSpacingPresets(useSpacingPresetsFromTheme);
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
      const slug = getValue(side);
      if (typeof slug === 'string' && slug.startsWith('custom:')) {
        setCustomMode((prev) => ({ ...prev, [side]: true }));
        setCustomValues((prev) => ({ ...prev, [side]: slug.replace('custom:', '') }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);

  // Helper to get/set values depending on groupedObject
  const getValue = (side) => {
    if (groupedObject) {
      // Border: side is top/right/bottom/left, value is a string (width or preset)
      if (attributePrefix === 'border') {
        return group[side.toLowerCase()] || '';
      }
      // BorderRadius: side is TopLeft/TopRight/BottomRight/BottomLeft, value is a string
      if (attributePrefix === 'borderRadius') {
        return group[side.charAt(0).toLowerCase() + side.slice(1)] || '';
      }
      // Spacing: side is top/right/bottom/left, value is a string
      return group[side.toLowerCase()] || '';
    }
    return attributes[`${attributePrefix}${side}`] || '';
  };

  const setValue = (side, value) => {
    if (groupedObject) {
      if (attributePrefix === 'border') {
        setAttributes({
          [attributePrefix]: {
            ...group,
            [side.toLowerCase()]: value,
          },
        });
        return;
      }
      if (attributePrefix === 'borderRadius') {
        setAttributes({
          [attributePrefix]: {
            ...group,
            [side.charAt(0).toLowerCase() + side.slice(1)]: value,
          },
        });
        return;
      }
      setAttributes({
        [attributePrefix]: {
          ...group,
          [side.toLowerCase()]: value,
        },
      });
      return;
    }
    setAttributes({ [`${attributePrefix}${side}`]: value });
  };

  // Helper to get/set color for border sides
  const getColor = (side) => {
    if (groupedObject && attributePrefix === 'border') {
      return group[`color${side}`] || '';
    }
    return '';
  };
  const setColor = (side, color) => {
    if (groupedObject && attributePrefix === 'border') {
      setAttributes({
        [attributePrefix]: {
          ...group,
          [`color${side}`]: color,
        },
      });
    }
  };

  const getSlug = (side) => getValue(side);
  const setSlug = (side, slug) => {
    if (linked) {
      SIDES_OR_CORNERS.forEach((s) => setValue(s, slug));
    } else {
      setValue(side, slug);
    }
    setShowPopover(false);
    if (typeof slug === 'string' && slug.startsWith('custom:')) {
      setCustomMode((prev) => ({ ...prev, [side]: true }));
      setCustomValues((prev) => ({ ...prev, [side]: slug.replace('custom:', '') }));
    }
  };
  const reset = () => {
    SIDES_OR_CORNERS.forEach((s) => {
      setValue(s, '');
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
  const clearColor = (side) => setColor(side, '');

  const enterCustomMode = (side) => {
    setCustomMode((prev) => ({ ...prev, [side]: true }));
    setShowPopover(false);
  };
  const exitCustomMode = (side) => {
    setCustomMode((prev) => ({ ...prev, [side]: false }));
    setCustomValues((prev) => ({ ...prev, [side]: '' }));
    setValue(side, '');
  };
  const handleCustomChange = (side, value) => {
    setCustomValues((prev) => ({ ...prev, [side]: value }));
    setValue(side, value ? `custom:${value}` : '');
  };

  const getButtonRef = (side) => (el) => {
    buttonRefs.current[side] = el;
  };
  const getColorButtonRef = (side) => (el) => {
    colorButtonRefs.current[side] = el;
  };

  // Helper to render a single side/corner control (for DRYness)
  const renderControl = (side) => {
    // Border: custom controls for width, color
    if (groupedObject && attributePrefix === 'border') {
      return (
        <div key={side} className="tw-spacing-corner-control">
          <div className="tw-spacing-corner-label">{side.charAt(0).toUpperCase() + side.slice(1)}</div>
          <div className="tw-spacing-corner-row">
            {customMode[side] ? (
              <>
                <UnitControl
                  value={customValues[side]}
                  onChange={value => handleCustomChange(side, value)}
                  __next40pxDefaultSize
                  className="tw-spacing-unit-input"
                />
                <Button isDestructive onClick={() => exitCustomMode(side)} size="small"
                  className="tw-spacing-reset-btn">
                  ×
                </Button>
              </>
            ) : (
              <Button
                ref={getButtonRef(side)}
                onClick={() => {
                  setPopoverSide(side);
                  setShowPopover(true);
                }}
                variant="secondary"
                className="tw-spacing-select-btn"
              >
                {typeof getSlug(side) === 'string' && getSlug(side) ? spacingPresets.find(p => p.slug === getSlug(side))?.name || getSlug(side) : 'Select'}
              </Button>
            )}
            <ColorControlBox color={getColor(side)} onClick={() => { setColorPopoverSide(side); setShowColorPopover(true); }} ref={getColorButtonRef(side)} />
          </div>
          {/* Popovers for border controls */}
          {showColorPopover && colorPopoverSide === side && (
            <Popover anchorRef={colorButtonRefs.current[side]} onClose={() => setShowColorPopover(false)}>
              <ColorPalette
                colors={colorPalette}
                value={getColor(side)}
                onChange={(color) => setColor(side, color)}
                clearable
              />
            </Popover>
          )}
          {showPopover && popoverSide === side && buttonRefs.current[side] && (
            <Popover anchorRef={buttonRefs.current[side]} onClose={() => setShowPopover(false)}>
              <div className="tw-spacing-popover-content">
                {spacingPresets.map((preset) => (
                  <Button
                    key={preset.slug}
                    isPressed={typeof getSlug(side) === 'string' && getSlug(side) === preset.slug}
                    onClick={() => setSlug(side, preset.slug)}
                    className="tw-spacing-popover-btn"
                  >
                    {preset.name}
                  </Button>
                ))}
                <Button
                  onClick={() => enterCustomMode(side)}
                  variant="secondary"
                  className="tw-spacing-popover-btn"
                >
                  Custom…
                </Button>
              </div>
            </Popover>
          )}
        </div>
      );
    }
    // BorderRadius: use default control (string)
    if (groupedObject && attributePrefix === 'borderRadius') {
      return (
        <div key={side} className="tw-spacing-corner-control">
          <div className="tw-spacing-corner-label">{side.replace(/([A-Z])/g, ' $1').trim()}</div>
          <div className="tw-spacing-corner-row">
            {customMode[side] ? (
              <>
                <UnitControl
                  value={customValues[side]}
                  onChange={value => handleCustomChange(side, value)}
                  __next40pxDefaultSize
                  className="tw-spacing-unit-input"
                />
                <Button isDestructive onClick={() => exitCustomMode(side)} size="small"
                  className="tw-spacing-reset-btn">
                  ×
                </Button>
              </>
            ) : (
              <Button
                ref={getButtonRef(side)}
                onClick={() => {
                  setPopoverSide(side);
                  setShowPopover(true);
                }}
                variant="secondary"
                className="tw-spacing-select-btn"
              >
                {typeof getSlug(side) === 'string' && getSlug(side) ? spacingPresets.find(p => p.slug === getSlug(side))?.name || getSlug(side) : 'Select'}
              </Button>
            )}
          </div>
          {showPopover && popoverSide === side && buttonRefs.current[side] && (
            <Popover anchorRef={buttonRefs.current[side]} onClose={() => setShowPopover(false)}>
              <div className="tw-spacing-popover-content">
                {spacingPresets.map((preset) => (
                  <Button
                    key={preset.slug}
                    isPressed={typeof getSlug(side) === 'string' && getSlug(side) === preset.slug}
                    onClick={() => setSlug(side, preset.slug)}
                    className="tw-spacing-popover-btn"
                  >
                    {preset.name}
                  </Button>
                ))}
                <Button
                  onClick={() => enterCustomMode(side)}
                  variant="secondary"
                  className="tw-spacing-popover-btn"
                >
                  Custom…
                </Button>
              </div>
            </Popover>
          )}
        </div>
      );
    }
    // Spacing: use default control (string)
    return (
      <div key={side} className={`tw-spacing-${side.toLowerCase()}`}>
        <div className="tw-spacing-corner-label">{side.replace(/([A-Z])/g, ' $1').trim()}</div>
        <div className="tw-spacing-corner-row">
          {colorPrefix && (
            <ColorControlBox color={getColor(side)} onClick={() => { setColorPopoverSide(side); setShowColorPopover(true); }} ref={getColorButtonRef(side)} />
          )}
          {customMode[side] ? (
            <>
              <UnitControl
                value={customValues[side]}
                onChange={value => handleCustomChange(side, value)}
                __next40pxDefaultSize
                className="tw-spacing-unit-input"
              />
              <Button isDestructive onClick={() => exitCustomMode(side)} size="small"
                className="tw-spacing-reset-btn">
                ×
              </Button>
            </>
          ) : (
            <Button
              ref={getButtonRef(side)}
              onClick={() => {
                setPopoverSide(side);
                setShowPopover(true);
              }}
              variant="secondary"
              className="tw-spacing-select-btn"
            >
              {typeof getSlug(side) === 'string' && getSlug(side) ? spacingPresets.find(p => p.slug === getSlug(side))?.name || getSlug(side) : 'Select'}
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
        {showPopover && popoverSide === side && buttonRefs.current[side] && (
          <Popover anchorRef={buttonRefs.current[side]} onClose={() => setShowPopover(false)}>
            <div className="tw-spacing-popover-content">
              {spacingPresets.map((preset) => (
                <Button
                  key={preset.slug}
                  isPressed={typeof getSlug(side) === 'string' && getSlug(side) === preset.slug}
                  onClick={() => setSlug(side, preset.slug)}
                  className="tw-spacing-popover-btn"
                >
                  {preset.name}
                </Button>
              ))}
              <Button
                onClick={() => enterCustomMode(side)}
                variant="secondary"
                className="tw-spacing-popover-btn"
              >
                Custom…
              </Button>
            </div>
          </Popover>
        )}
      </div>
    );
  };

  // Helper to render border controls in a margin/padding-like layout
  const renderBorderLayout = () => (
    <div className="tw-spacing-border-layout">
      {/* Top */}
      <div className="tw-spacing-border-layout-item">
        {renderControl('Top')}
      </div>
      {/* Left */}
      <div className="tw-spacing-border-layout-item">
        {renderControl('Left')}
      </div>
      {/* Right */}
      <div className="tw-spacing-border-layout-item">
        {renderControl('Right')}
      </div>
      {/* Bottom */}
      <div className="tw-spacing-border-layout-item">
        {renderControl('Bottom')}
      </div>
    </div>
  );

  return (
    <div className="tw-spacing-section">
      {(showLabel !== false && label) && (
        <div className="tw-spacing-component-label-row">
          <div className="tw-spacing-component-label">{label}</div>
          {linked !== undefined && (
            <Button
              isPressed={linked}
              onClick={() => setLinked(!linked)}
              icon={linked ? 'admin-links' : 'editor-unlink'}
              label={linked ? 'Linked' : 'Unlinked'}
              className="tw-spacing-link-btn"
            />
          )}
          <Button onClick={reset} variant="secondary" size="small" className="tw-spacing-reset-btn">Reset</Button>
        </div>
      )}
      {groupedObject && attributePrefix === 'border'
        ? renderBorderLayout()
        : linked
          ? renderControl('Top')
          : mode === 'corners'
            ? <div className="tw-spacing-corners-grid">{CORNERS.map(corner => renderControl(corner))}</div>
            : <div className="tw-spacing-control-grid">{SIDES.map(side => renderControl(side))}</div>
      }
    </div>
  );
}
