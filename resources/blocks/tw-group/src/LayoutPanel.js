import { PanelBody, ButtonGroup, IconButton, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ContainerType from './ContainerType';
import SingleSpacingSelect from './SingleSpacingSelect';

export default function LayoutPanel({ attributes, setAttributes }) {
  const {
    containerType = 'block',
    flexDirection = 'row',
    flexJustify = 'start',
    flexWrap = 'nowrap',
    gap = '',
  } = attributes || {};

  return (
    <PanelBody title={__('Layout', 'tw-group')} initialOpen={true}>
      <ContainerType value={containerType} onChange={val => setAttributes({ containerType: val })} />
      {containerType === 'flex' && (
        <>
          <div style={{ marginTop: 16 }}>
            <span style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Justify</span>
            <ButtonGroup>
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="10" width="4" height="4" fill={flexJustify === 'start' ? '#007cba' : '#ccc'} /></svg>}
                label="Start"
                isPressed={flexJustify === 'start'}
                onClick={() => setAttributes({ flexJustify: 'start' })}
                style={{ border: flexJustify === 'start' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="10" y="10" width="4" height="4" fill={flexJustify === 'center' ? '#007cba' : '#ccc'} /></svg>}
                label="Center"
                isPressed={flexJustify === 'center'}
                onClick={() => setAttributes({ flexJustify: 'center' })}
                style={{ border: flexJustify === 'center' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="16" y="10" width="4" height="4" fill={flexJustify === 'end' ? '#007cba' : '#ccc'} /></svg>}
                label="End"
                isPressed={flexJustify === 'end'}
                onClick={() => setAttributes({ flexJustify: 'end' })}
                style={{ border: flexJustify === 'end' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="10" width="4" height="4" fill={flexJustify === 'space-between' ? '#007cba' : '#ccc'} /><rect x="16" y="10" width="4" height="4" fill={flexJustify === 'space-between' ? '#007cba' : '#ccc'} /></svg>}
                label="Space Between"
                isPressed={flexJustify === 'space-between'}
                onClick={() => setAttributes({ flexJustify: 'space-between' })}
                style={{ border: flexJustify === 'space-between' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="6" y="10" width="4" height="4" fill={flexJustify === 'space-around' ? '#007cba' : '#ccc'} /><rect x="14" y="10" width="4" height="4" fill={flexJustify === 'space-around' ? '#007cba' : '#ccc'} /></svg>}
                label="Space Around"
                isPressed={flexJustify === 'space-around'}
                onClick={() => setAttributes({ flexJustify: 'space-around' })}
                style={{ border: flexJustify === 'space-around' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="8" y="10" width="4" height="4" fill={flexJustify === 'space-evenly' ? '#007cba' : '#ccc'} /><rect x="12" y="10" width="4" height="4" fill={flexJustify === 'space-evenly' ? '#007cba' : '#ccc'} /></svg>}
                label="Space Evenly"
                isPressed={flexJustify === 'space-evenly'}
                onClick={() => setAttributes({ flexJustify: 'space-evenly' })}
                style={{ border: flexJustify === 'space-evenly' ? '2px solid #007cba' : undefined }}
              />
            </ButtonGroup>
          </div>
          <div style={{ marginTop: 16 }}>
            <span style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Flex Direction</span>
            <ButtonGroup>
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="4" fill={flexDirection === 'row' ? '#007cba' : '#ccc'} /><polygon points="20,12 16,8 16,16" fill="#fff"/></svg>}
                label="Row"
                isPressed={flexDirection === 'row'}
                onClick={() => setAttributes({ flexDirection: 'row' })}
                style={{ border: flexDirection === 'row' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="4" fill={flexDirection === 'row-reverse' ? '#007cba' : '#ccc'} /><polygon points="4,12 8,8 8,16" fill="#fff"/></svg>}
                label="Row Reverse"
                isPressed={flexDirection === 'row-reverse'}
                onClick={() => setAttributes({ flexDirection: 'row-reverse' })}
                style={{ border: flexDirection === 'row-reverse' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="10" y="4" width="4" height="12" fill={flexDirection === 'column' ? '#007cba' : '#ccc'} /><polygon points="12,20 8,14 16,14" fill="#fff"/></svg>}
                label="Column"
                isPressed={flexDirection === 'column'}
                onClick={() => setAttributes({ flexDirection: 'column' })}
                style={{ border: flexDirection === 'column' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="10" y="8" width="4" height="12" fill={flexDirection === 'column-reverse' ? '#007cba' : '#ccc'} /><polygon points="12,4 8,10 16,10" fill="#fff"/></svg>}
                label="Column Reverse"
                isPressed={flexDirection === 'column-reverse'}
                onClick={() => setAttributes({ flexDirection: 'column-reverse' })}
                style={{ border: flexDirection === 'column-reverse' ? '2px solid #007cba' : undefined }}
              />
            </ButtonGroup>
          </div>
          <div style={{ marginTop: 16 }}>
            <span style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Flex Wrap</span>
            <ButtonGroup>
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="4" fill={flexWrap === 'nowrap' ? '#007cba' : '#ccc'} /><text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" dy=".3em">1</text></svg>}
                label="No Wrap"
                isPressed={flexWrap === 'nowrap'}
                onClick={() => setAttributes({ flexWrap: 'nowrap' })}
                style={{ border: flexWrap === 'nowrap' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="4" fill={flexWrap === 'wrap' ? '#007cba' : '#ccc'} /><rect x="4" y="13" width="16" height="4" fill={flexWrap === 'wrap' ? '#007cba' : '#ccc'} /></svg>}
                label="Wrap"
                isPressed={flexWrap === 'wrap'}
                onClick={() => setAttributes({ flexWrap: 'wrap' })}
                style={{ border: flexWrap === 'wrap' ? '2px solid #007cba' : undefined }}
              />
              <IconButton
                icon={<svg width="24" height="24" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="4" fill={flexWrap === 'wrap-reverse' ? '#007cba' : '#ccc'} /><rect x="4" y="13" width="16" height="4" fill={flexWrap === 'wrap-reverse' ? '#007cba' : '#ccc'} /><polygon points="4,13 8,17 8,9" fill="#fff"/></svg>}
                label="Wrap Reverse"
                isPressed={flexWrap === 'wrap-reverse'}
                onClick={() => setAttributes({ flexWrap: 'wrap-reverse' })}
                style={{ border: flexWrap === 'wrap-reverse' ? '2px solid #007cba' : undefined }}
              />
            </ButtonGroup>
          </div>
        </>
      )}
      {(containerType === 'flex' || containerType === 'grid') && (
        <div style={{ marginTop: 16 }}>
          <SingleSpacingSelect
            label="Gap"
            value={gap ?? ''}
            onChange={gap => setAttributes({ gap })}
            allowNone={true}
          />
        </div>
      )}
    </PanelBody>
  );
}
