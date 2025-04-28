import React, { useEffect } from 'react';
import { PanelBody, SelectControl, Button, ToolbarGroup, ToolbarButton, DropdownMenu, MenuItem, MenuGroup } from '@wordpress/components';
import { useSetting } from '@wordpress/block-editor';
import { FontSizePicker } from '@wordpress/block-editor';

const FONT_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const LETTER_CASES = [
  { label: 'ab', value: 'none' },
  { label: 'AB', value: 'uppercase' },
  { label: 'ab', style: { fontStyle: 'italic' }, value: 'italic' },
  { label: 'Ab', value: 'capitalize' },
];
const DECORATIONS = [
  { icon: 'editor-underline', value: 'underline', label: 'Underline' },
  { icon: 'editor-strikethrough', value: 'line-through', label: 'Strikethrough' },
];

export default function TypographyPanel({ attributes, setAttributes }) {
  const fontFamilies = useSetting('typography.fontFamilies');
  const fontSizes = useSetting('typography.fontSizes');
  const fontWeightsObj = useSetting('custom.fontWeight');
  const lineHeightsObj = useSetting('custom.lineHeight');
  const letterSpacingsObj = useSetting('custom.letterSpacing');

  const safeFontFamilies = Array.isArray(fontFamilies?.theme)
    ? fontFamilies.theme
    : Array.isArray(fontFamilies)
      ? fontFamilies
      : [];
  const safeFontSizes = Array.isArray(fontSizes) ? fontSizes : [];
  const safeAppearance = fontWeightsObj
    ? Object.entries(fontWeightsObj).map(([slug, value]) => ({
        slug,
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value,
      }))
    : [];
  const safeLineHeights = lineHeightsObj
    ? Object.entries(lineHeightsObj).map(([slug, value]) => ({
        slug,
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value: String(value)
      }))
    : [];
  const safeLetterSpacings = letterSpacingsObj
    ? Object.entries(letterSpacingsObj).map(([slug, value]) => ({
        slug,
        name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value: String(value)
      }))
    : [];

  const ALL_CONTROLS = [
    { key: 'fontFamily', label: 'Font' },
    { key: 'fontSize', label: 'Font size' },
    { key: 'fontAppearance', label: 'Appearance' },
    { key: 'lineHeight', label: 'Line height' },
    { key: 'letterSpacing', label: 'Letter spacing' },
    { key: 'textDecoration', label: 'Decoration' },
    { key: 'letterCase', label: 'Letter case' },
  ];

  // Persist visible controls in block attributes
  const visible = attributes.typographyVisible || ['fontSize'];
  const setVisible = (newVisible) => setAttributes({ typographyVisible: newVisible });

  const toggleControl = (key) => {
    setVisible(visible.includes(key) ? visible.filter(k => k !== key) : [...visible, key]);
  };

  const checkIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <polyline
        points="4 11 8 15 16 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  // Helper: all keys for reset
  const ALL_KEYS = ALL_CONTROLS.map(c => c.key);

  // Reset all typography controls to default
  const resetAll = () => {
    setAttributes({
      typographyVisible: ['fontSize'],
      fontFamily: undefined,
      fontSize: undefined,
      fontAppearance: undefined,
      lineHeight: undefined,
      letterSpacing: undefined,
      textDecoration: undefined,
      letterCase: undefined,
    });
  };

  // On mount: open all panels for typography values that are set (not undefined/empty)
  useEffect(() => {
    const modified = [];
    if (attributes.fontFamily) modified.push('fontFamily');
    if (attributes.fontSize) modified.push('fontSize');
    if (attributes.fontAppearance) modified.push('fontAppearance');
    if (attributes.lineHeight) modified.push('lineHeight');
    if (attributes.letterSpacing) modified.push('letterSpacing');
    if (attributes.textDecoration) modified.push('textDecoration');
    if (attributes.letterCase) modified.push('letterCase');
    if (modified.length > 0) {
      setVisible(Array.from(new Set([...visible, ...modified])));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // All section label styles
  const sectionLabelStyle = { fontWeight: 500, fontSize: 11, marginBottom: 2, textTransform: 'uppercase' };

  return (
    <div className="tw-typography-section" style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>Typography</span>
        <DropdownMenu
          icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"></path></svg>
          )}
          label="Typography settings"
          popoverProps={{ placement: 'bottom-end' }}
        >
          {({ onClose }) => (
            <>
              {ALL_CONTROLS.map(ctrl => {
                const hasValue = attributes[ctrl.key] !== undefined && attributes[ctrl.key] !== '';
                return hasValue ? (
                  <MenuItem
                    key={ctrl.key + '-reset'}
                    isDestructive
                    onClick={() => setAttributes({ [ctrl.key]: '' })}
                    style={{ color: '#d63638' }}
                  >
                    Reset {ctrl.label}
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={ctrl.key}
                    icon={visible.includes(ctrl.key) ? checkIcon : null}
                    isSelected={visible.includes(ctrl.key)}
                    role="menuitemcheckbox"
                    onClick={() => {
                      toggleControl(ctrl.key);
                    }}
                  >
                    {ctrl.label}
                  </MenuItem>
                );
              })}
              <div style={{ borderTop: '1px solid #eee', margin: '8px 0 0 0' }} />
              <MenuItem
                key="reset-all"
                isDestructive
                onClick={() => {
                  resetAll();
                  onClose();
                }}
                style={{ color: '#007cba' }}
              >
                Reset all
              </MenuItem>
            </>
          )}
        </DropdownMenu>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {visible.includes('fontFamily') && (
          <SelectControl
            label="Font"
            value={attributes.fontFamily || ''}
            options={[
              { label: 'Default', value: '' },
              ...safeFontFamilies.map(f => ({ label: f.name, value: f.slug }))
            ]}
            onChange={fontFamily => setAttributes({ fontFamily })}
          />
        )}
        {visible.includes('fontSize') && (
          <div>
            <FontSizePicker
              value={attributes.fontSize || ''}
              fontSizes={safeFontSizes}
              fallbackFontSize={undefined}
              disableCustomFontSizes={true}
              onChange={fontSize => setAttributes({ fontSize })}
            />
          </div>
        )}
        {visible.includes('fontAppearance') && (
          <SelectControl
            label="Appearance"
            value={attributes.fontAppearance || ''}
            options={[
              { label: 'Default', value: '' },
              ...safeAppearance.map(a => ({ label: a.name, value: a.slug }))
            ]}
            onChange={fontAppearance => setAttributes({ fontAppearance })}
          />
        )}
        <div style={{ display: 'flex', gap: 8 }}>
          {visible.includes('lineHeight') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={sectionLabelStyle}>LINE HEIGHT</span>
              <SelectControl
                value={attributes.lineHeight ?? ''}
                options={[
                  { label: 'Default', value: '' },
                  ...safeLineHeights.map(lh => ({ label: lh.name + ' (' + lh.value + ')', value: lh.value }))
                ]}
                onChange={lineHeight => setAttributes({ lineHeight })}
              />
            </div>
          )}
          {visible.includes('letterSpacing') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={sectionLabelStyle}>LETTER SPACING</span>
              <SelectControl
                value={attributes.letterSpacing ?? ''}
                options={[
                  { label: 'Default', value: '' },
                  ...safeLetterSpacings.map(ls => ({ label: ls.name + ' (' + ls.value + ')', value: ls.value }))
                ]}
                onChange={letterSpacing => setAttributes({ letterSpacing })}
              />
            </div>
          )}
        </div>
        {visible.includes('textDecoration') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={sectionLabelStyle}>TEXT DECORATION</span>
            <ToolbarGroup>
              {DECORATIONS.map(dec => (
                <ToolbarButton
                  key={dec.value}
                  icon={dec.icon}
                  label={dec.label}
                  isPressed={attributes.textDecoration === dec.value}
                  onClick={() => setAttributes({ textDecoration: attributes.textDecoration === dec.value ? '' : dec.value })}
                />
              ))}
            </ToolbarGroup>
          </div>
        )}
        {visible.includes('letterCase') && (
          <div>
            <span style={sectionLabelStyle}>LETTER CASE</span>
            <ToolbarGroup>
              {LETTER_CASES.map(lc => (
                <ToolbarButton
                  key={lc.value}
                  label={lc.label}
                  isPressed={attributes.letterCase === lc.value}
                  onClick={() => setAttributes({ letterCase: attributes.letterCase === lc.value ? '' : lc.value })}
                  style={lc.style}
                >
                  {lc.label}
                </ToolbarButton>
              ))}
            </ToolbarGroup>
          </div>
        )}
      </div>
    </div>
  );
}
