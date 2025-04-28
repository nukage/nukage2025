/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AlignmentPanel.js":
/*!*******************************!*\
  !*** ./src/AlignmentPanel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlignmentPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ALIGNMENTS = [{
  icon: 'editor-alignleft',
  label: 'Align left',
  value: 'alignleft'
}, {
  icon: 'editor-aligncenter',
  label: 'Align center',
  value: 'aligncenter'
}, {
  icon: 'editor-alignright',
  label: 'Align right',
  value: 'alignright'
}, {
  icon: 'editor-alignwide',
  label: 'Wide width',
  value: 'alignwide'
}, {
  icon: 'editor-alignfull',
  label: 'Full width',
  value: 'alignfull'
}];
function AlignmentPanel({
  attributes,
  setAttributes
}) {
  const {
    align = ''
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Alignment",
    initialOpen: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
      children: ALIGNMENTS.map(alignment => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
        icon: alignment.icon,
        label: alignment.label,
        isPressed: align === alignment.value,
        onClick: () => setAttributes({
          align: align === alignment.value ? '' : alignment.value
        })
      }, alignment.value))
    })
  });
}

/***/ }),

/***/ "./src/ColorPanel.js":
/*!***************************!*\
  !*** ./src/ColorPanel.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ColorPanel({
  attributes,
  setAttributes
}) {
  const palette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette') || [];
  const [showPopover, setShowPopover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 'text' or 'background' or null
  const textButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const bgButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Colors",
    initialOpen: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          ref: textButtonRef,
          variant: "secondary",
          style: {
            width: '100%',
            justifyContent: 'flex-start'
          },
          onClick: () => setShowPopover('text'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            style: {
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: attributes.textColor || '#fff',
              border: '1px solid #ccc',
              display: 'inline-block',
              marginRight: 6,
              verticalAlign: 'middle'
            }
          }), "Text"]
        }), showPopover === 'text' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          anchorRef: textButtonRef.current,
          onClose: () => setShowPopover(null),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
            colors: palette,
            value: attributes.textColor || '',
            onChange: color => {
              setAttributes({
                textColor: color
              });
              setShowPopover(null);
            },
            clearable: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          ref: bgButtonRef,
          variant: "secondary",
          style: {
            width: '100%',
            justifyContent: 'flex-start'
          },
          onClick: () => setShowPopover('background'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            style: {
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: attributes.backgroundColor || '#fff',
              border: '1px solid #ccc',
              display: 'inline-block',
              marginRight: 6,
              verticalAlign: 'middle'
            }
          }), "Background"]
        }), showPopover === 'background' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          anchorRef: bgButtonRef.current,
          onClose: () => setShowPopover(null),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
            colors: palette,
            value: attributes.backgroundColor || '',
            onChange: color => {
              setAttributes({
                backgroundColor: color
              });
              setShowPopover(null);
            },
            clearable: true
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/SpacingControlPanel.js":
/*!************************************!*\
  !*** ./src/SpacingControlPanel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpacingControlPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const SIDES = ['Top', 'Right', 'Bottom', 'Left'];
function getSpacingPresets() {
  const spacingSizes = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('spacing.spacingSizes') || [];
  return [{
    slug: '',
    name: 'Default (none)',
    value: ''
  }, ...spacingSizes.map(preset => ({
    slug: preset.slug,
    name: preset.name,
    value: preset.size
  }))];
}
function getColorPalette() {
  const palette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette') || [];
  return palette.map(c => ({
    color: c.color,
    name: c.name,
    slug: c.slug
  }));
}
function ColorControlBox({
  color,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "tw-color-control-box",
    style: {
      width: 24,
      height: 24,
      padding: 0,
      border: '1px solid #ccc',
      background: color ? color : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    onClick: onClick,
    "aria-label": color ? `Color: ${color}` : 'No color selected',
    children: !color && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
        cx: "8",
        cy: "8",
        r: "6",
        stroke: "#bbb",
        strokeWidth: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
        x1: "4",
        y1: "12",
        x2: "12",
        y2: "4",
        stroke: "#bbb",
        strokeWidth: "2"
      })]
    })
  });
}
function SpacingControlPanel({
  label,
  attributePrefix,
  colorPrefix,
  attributes,
  setAttributes,
  step = 1,
  unit = 'px',
  showLabel = true
}) {
  // Use attribute for linked state
  const linked = attributes.spacingLinked !== undefined ? attributes.spacingLinked : true;
  const setLinked = val => setAttributes({
    spacingLinked: val
  });
  const [showPopover, setShowPopover] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [popoverSide, setPopoverSide] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('Top');
  const [showColorPopover, setShowColorPopover] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [colorPopoverSide, setColorPopoverSide] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('Top');
  const buttonRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const colorButtonRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const customInputRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    Top: null,
    Right: null,
    Bottom: null,
    Left: null
  });
  const spacingPresets = getSpacingPresets();
  const colorPalette = getColorPalette();
  const [customMode, setCustomMode] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    Top: false,
    Right: false,
    Bottom: false,
    Left: false
  });
  const [customValues, setCustomValues] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    Top: '',
    Right: '',
    Bottom: '',
    Left: ''
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    SIDES.forEach(side => {
      if (customMode[side] && customInputRefs.current[side]) {
        customInputRefs.current[side].focus();
      }
    });
  }, [customMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // On mount or attribute change, sync customMode and customValues to show number box if value is custom
    SIDES.forEach(side => {
      const slug = getSlug(side);
      if (slug && slug.startsWith('custom:')) {
        setCustomMode(prev => ({
          ...prev,
          [side]: true
        }));
        setCustomValues(prev => ({
          ...prev,
          [side]: slug.replace('custom:', '')
        }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);
  const getSlug = side => attributes[`${attributePrefix}${side}`] || '';
  const setSlug = (side, slug) => {
    if (linked) {
      SIDES.forEach(s => setAttributes({
        [`${attributePrefix}${s}`]: slug
      }));
    } else {
      setAttributes({
        [`${attributePrefix}${side}`]: slug
      });
    }
    setShowPopover(false);
  };
  const reset = () => {
    SIDES.forEach(s => {
      setAttributes({
        [`${attributePrefix}${s}`]: ''
      });
    });
    setCustomMode({
      Top: false,
      Right: false,
      Bottom: false,
      Left: false
    });
    setCustomValues({
      Top: '',
      Right: '',
      Bottom: '',
      Left: ''
    });
  };
  const getColor = side => attributes[`${colorPrefix}${side}`] || '';
  const setColor = (side, color) => {
    if (linked) {
      SIDES.forEach(s => setAttributes({
        [`${colorPrefix}${s}`]: color
      }));
    } else {
      setAttributes({
        [`${colorPrefix}${side}`]: color
      });
    }
    setShowColorPopover(false);
  };
  const clearColor = side => setColor(side, '');
  const enterCustomMode = side => {
    setCustomMode(prev => ({
      ...prev,
      [side]: true
    }));
    setShowPopover(false);
  };
  const exitCustomMode = side => {
    setCustomMode(prev => ({
      ...prev,
      [side]: false
    }));
    setCustomValues(prev => ({
      ...prev,
      [side]: ''
    }));
    setSlug(side, '');
  };
  const handleCustomChange = (side, value) => {
    setCustomValues(prev => ({
      ...prev,
      [side]: value
    }));
    setSlug(side, value ? `custom:${value}` : '');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "tw-spacing-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8
      },
      children: [showLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: {
          fontWeight: 600
        },
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPressed: linked,
        onClick: () => setLinked(!linked),
        icon: linked ? 'admin-links' : 'editor-unlink',
        label: linked ? 'Individual' : 'Linked',
        style: {
          minWidth: 24,
          minHeight: 24,
          width: 24,
          height: 24,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: reset,
        variant: "secondary",
        size: "small",
        children: "Reset"
      })]
    }), linked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      },
      children: [colorPrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorControlBox, {
        color: getColor('Top'),
        onClick: () => {
          setColorPopoverSide('Top');
          setShowColorPopover(true);
        },
        ref: el => colorButtonRefs.current['Top'] = el
      }), customMode['Top'] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
          value: customValues['Top'],
          onChange: value => handleCustomChange('Top', value),
          __next40pxDefaultSize: true,
          style: {
            width: 120
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isDestructive: true,
          onClick: () => exitCustomMode('Top'),
          size: "small",
          children: "\xD7"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        ref: el => buttonRefs.current['Top'] = el,
        onClick: () => {
          setPopoverSide('Top');
          setShowPopover(true);
        },
        variant: "secondary",
        children: getSlug('Top') ? spacingPresets.find(p => p.slug === getSlug('Top'))?.name || getSlug('Top') : 'Select'
      }), colorPrefix && showColorPopover && colorPopoverSide === 'Top' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        anchorRef: colorButtonRefs.current['Top'],
        onClose: () => setShowColorPopover(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          colors: colorPalette,
          value: getColor('Top'),
          onChange: color => setColor('Top', color),
          clearable: true
        })
      }), showPopover && popoverSide === 'Top' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        anchorRef: buttonRefs.current['Top'],
        onClose: () => setShowPopover(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            padding: 8,
            minWidth: 180
          },
          children: [spacingPresets.map(preset => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isPressed: getSlug('Top') === preset.slug,
            onClick: () => setSlug('Top', preset.slug),
            style: {
              marginBottom: 4,
              width: '100%'
            },
            children: preset.name
          }, preset.slug)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isPressed: getSlug('Top').startsWith('custom:'),
            onClick: () => enterCustomMode('Top'),
            style: {
              marginBottom: 4,
              width: '100%'
            },
            children: "Custom\u2026"
          }, "custom")]
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "tw-spacing-control-grid",
      children: SIDES.map(side => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `tw-spacing-${side.toLowerCase()}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          style: {
            fontSize: 12,
            marginBottom: 2
          },
          children: side
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tw-spacing-side-row",
          children: [colorPrefix && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorControlBox, {
            color: getColor(side),
            onClick: () => {
              setColorPopoverSide(side);
              setShowColorPopover(true);
            },
            ref: el => colorButtonRefs.current[side] = el
          }), customMode[side] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: 4
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              value: customValues[side],
              onChange: value => handleCustomChange(side, value),
              __next40pxDefaultSize: true,
              style: {
                width: 120
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              isDestructive: true,
              onClick: () => exitCustomMode(side),
              size: "small",
              children: "\xD7"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            ref: el => buttonRefs.current[side] = el,
            onClick: () => {
              setPopoverSide(side);
              setShowPopover(true);
            },
            variant: "secondary",
            style: {
              width: '100%'
            },
            children: getSlug(side) ? spacingPresets.find(p => p.slug === getSlug(side))?.name || getSlug(side) : 'Select'
          })]
        }), colorPrefix && showColorPopover && colorPopoverSide === side && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          anchorRef: colorButtonRefs.current[side],
          onClose: () => setShowColorPopover(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
            colors: colorPalette,
            value: getColor(side),
            onChange: color => setColor(side, color),
            clearable: true
          })
        }), showPopover && popoverSide === side && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          anchorRef: buttonRefs.current[side],
          onClose: () => setShowPopover(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              padding: 8,
              minWidth: 180
            },
            children: [spacingPresets.map(preset => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              isPressed: getSlug(side) === preset.slug,
              onClick: () => setSlug(side, preset.slug),
              style: {
                marginBottom: 4,
                width: '100%'
              },
              children: preset.name
            }, preset.slug)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              isPressed: getSlug(side).startsWith('custom:'),
              onClick: () => enterCustomMode(side),
              style: {
                marginBottom: 4,
                width: '100%'
              },
              children: "Custom\u2026"
            }, "custom")]
          })
        })]
      }, side))
    })]
  });
}

/***/ }),

/***/ "./src/TypographyPanel.js":
/*!********************************!*\
  !*** ./src/TypographyPanel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypographyPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const FONT_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
const LETTER_CASES = [{
  label: 'ab',
  value: 'none'
}, {
  label: 'AB',
  value: 'uppercase'
}, {
  label: 'ab',
  style: {
    fontStyle: 'italic'
  },
  value: 'italic'
}, {
  label: 'Ab',
  value: 'capitalize'
}];
const DECORATIONS = [{
  icon: 'editor-underline',
  value: 'underline',
  label: 'Underline'
}, {
  icon: 'editor-strikethrough',
  value: 'line-through',
  label: 'Strikethrough'
}];
function TypographyPanel({
  attributes,
  setAttributes
}) {
  var _attributes$lineHeigh, _attributes$letterSpa;
  const fontFamilies = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('typography.fontFamilies');
  const fontSizes = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('typography.fontSizes');
  const fontWeightsObj = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('custom.fontWeight');
  const lineHeightsObj = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('custom.lineHeight');
  const letterSpacingsObj = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('custom.letterSpacing');
  const safeFontFamilies = Array.isArray(fontFamilies?.theme) ? fontFamilies.theme : Array.isArray(fontFamilies) ? fontFamilies : [];
  const safeFontSizes = Array.isArray(fontSizes) ? fontSizes : [];
  const safeAppearance = fontWeightsObj ? Object.entries(fontWeightsObj).map(([slug, value]) => ({
    slug,
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value
  })) : [];
  const safeLineHeights = lineHeightsObj ? Object.entries(lineHeightsObj).map(([slug, value]) => ({
    slug,
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: String(value)
  })) : [];
  const safeLetterSpacings = letterSpacingsObj ? Object.entries(letterSpacingsObj).map(([slug, value]) => ({
    slug,
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: String(value)
  })) : [];
  const ALL_CONTROLS = [{
    key: 'fontFamily',
    label: 'Font'
  }, {
    key: 'fontSize',
    label: 'Font size'
  }, {
    key: 'fontAppearance',
    label: 'Appearance'
  }, {
    key: 'lineHeight',
    label: 'Line height'
  }, {
    key: 'letterSpacing',
    label: 'Letter spacing'
  }, {
    key: 'textDecoration',
    label: 'Decoration'
  }, {
    key: 'letterCase',
    label: 'Letter case'
  }];

  // Persist visible controls in block attributes
  const visible = attributes.typographyVisible || ['fontSize'];
  const setVisible = newVisible => setAttributes({
    typographyVisible: newVisible
  });
  const toggleControl = key => {
    setVisible(visible.includes(key) ? visible.filter(k => k !== key) : [...visible, key]);
  };
  const checkIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
      points: "4 11 8 15 16 6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    })
  });

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
      letterCase: undefined
    });
  };

  // On mount: open all panels for typography values that are set (not undefined/empty)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  const sectionLabelStyle = {
    fontWeight: 500,
    fontSize: 11,
    marginBottom: 2,
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "tw-typography-section",
    style: {
      marginBottom: 24
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        style: {
          fontWeight: 600,
          fontSize: 14
        },
        children: "Typography"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {
        icon: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          "aria-hidden": "true",
          focusable: "false",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
          })
        }),
        label: "Typography settings",
        popoverProps: {
          placement: 'bottom-end'
        },
        children: ({
          onClose
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [ALL_CONTROLS.map(ctrl => {
            const hasValue = attributes[ctrl.key] !== undefined && attributes[ctrl.key] !== '';
            return hasValue ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
              isDestructive: true,
              onClick: () => setAttributes({
                [ctrl.key]: ''
              }),
              style: {
                color: '#d63638'
              },
              children: ["Reset ", ctrl.label]
            }, ctrl.key + '-reset') : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
              icon: visible.includes(ctrl.key) ? checkIcon : null,
              isSelected: visible.includes(ctrl.key),
              role: "menuitemcheckbox",
              onClick: () => {
                toggleControl(ctrl.key);
              },
              children: ctrl.label
            }, ctrl.key);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: {
              borderTop: '1px solid #eee',
              margin: '8px 0 0 0'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
            isDestructive: true,
            onClick: () => {
              resetAll();
              onClose();
            },
            style: {
              color: '#007cba'
            },
            children: "Reset all"
          }, "reset-all")]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      },
      children: [visible.includes('fontFamily') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: "Font",
        value: attributes.fontFamily || '',
        options: [{
          label: 'Default',
          value: ''
        }, ...safeFontFamilies.map(f => ({
          label: f.name,
          value: f.slug
        }))],
        onChange: fontFamily => setAttributes({
          fontFamily
        })
      }), visible.includes('fontSize') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
          value: attributes.fontSize || '',
          fontSizes: safeFontSizes,
          fallbackFontSize: undefined,
          disableCustomFontSizes: true,
          onChange: fontSize => setAttributes({
            fontSize
          })
        })
      }), visible.includes('fontAppearance') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: "Appearance",
        value: attributes.fontAppearance || '',
        options: [{
          label: 'Default',
          value: ''
        }, ...safeAppearance.map(a => ({
          label: a.name,
          value: a.slug
        }))],
        onChange: fontAppearance => setAttributes({
          fontAppearance
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: 8
        },
        children: [visible.includes('lineHeight') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            style: sectionLabelStyle,
            children: "LINE HEIGHT"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            value: (_attributes$lineHeigh = attributes.lineHeight) !== null && _attributes$lineHeigh !== void 0 ? _attributes$lineHeigh : '',
            options: [{
              label: 'Default',
              value: ''
            }, ...safeLineHeights.map(lh => ({
              label: lh.name + ' (' + lh.value + ')',
              value: lh.value
            }))],
            onChange: lineHeight => setAttributes({
              lineHeight
            })
          })]
        }), visible.includes('letterSpacing') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            style: sectionLabelStyle,
            children: "LETTER SPACING"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            value: (_attributes$letterSpa = attributes.letterSpacing) !== null && _attributes$letterSpa !== void 0 ? _attributes$letterSpa : '',
            options: [{
              label: 'Default',
              value: ''
            }, ...safeLetterSpacings.map(ls => ({
              label: ls.name + ' (' + ls.value + ')',
              value: ls.value
            }))],
            onChange: letterSpacing => setAttributes({
              letterSpacing
            })
          })]
        })]
      }), visible.includes('textDecoration') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          style: sectionLabelStyle,
          children: "TEXT DECORATION"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
          children: DECORATIONS.map(dec => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
            icon: dec.icon,
            label: dec.label,
            isPressed: attributes.textDecoration === dec.value,
            onClick: () => setAttributes({
              textDecoration: attributes.textDecoration === dec.value ? '' : dec.value
            })
          }, dec.value))
        })]
      }), visible.includes('letterCase') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          style: sectionLabelStyle,
          children: "LETTER CASE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
          children: LETTER_CASES.map(lc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
            label: lc.label,
            isPressed: attributes.letterCase === lc.value,
            onClick: () => setAttributes({
              letterCase: attributes.letterCase === lc.value ? '' : lc.value
            }),
            style: lc.style,
            children: lc.label
          }, lc.value))
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SpacingControlPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpacingControlPanel */ "./src/SpacingControlPanel.js");
/* harmony import */ var _ColorPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorPanel */ "./src/ColorPanel.js");
/* harmony import */ var _AlignmentPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AlignmentPanel */ "./src/AlignmentPanel.js");
/* harmony import */ var _TypographyPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TypographyPanel */ "./src/TypographyPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.com/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.com/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */







// Helper to convert CSS string to object for editor style prop

function cssStringToObject(cssString) {
  const styleObj = {};
  if (!cssString || typeof cssString !== 'string') return styleObj;
  cssString.split(';').forEach(rule => {
    const [property, value] = rule.split(':').map(s => s && s.trim());
    if (property && value) {
      // Convert kebab-case to camelCase
      const camelProp = property.replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelProp] = value;
    }
  });
  return styleObj;
}
const SIDES = ['Top', 'Right', 'Bottom', 'Left'];

// Utility to fetch spacing presets from theme.json, with 'Default' at the top
function getSpacingPresets() {
  const spacingSizes = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('spacing.spacingSizes') || [];
  return [{
    slug: '',
    name: 'Default (none)',
    value: ''
  }, ...spacingSizes.map(preset => ({
    slug: preset.slug,
    name: preset.name,
    value: preset.size
  }))];
}

// Utility to fetch color palette from theme.json
function getColorPalette() {
  const palette = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('color.palette') || [];
  return palette.map(c => ({
    color: c.color,
    name: c.name,
    slug: c.slug
  }));
}
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    label = '',
    className = '',
    align = 'none'
  } = attributes || {};

  // More robust empty check
  const block = wp.data.select('core/block-editor').getBlock(clientId);
  const showEmptyStyles = block && Array.isArray(block.innerBlocks) && block.innerBlocks.length === 0 && !className;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: className + (showEmptyStyles ? ' is-empty' : '')
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Typography",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TypographyPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ColorPanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Border",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SpacingControlPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Border",
          attributePrefix: "borderWidth",
          colorPrefix: "borderColor",
          attributes: attributes,
          setAttributes: setAttributes,
          showLabel: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Spacing",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SpacingControlPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Margin",
            attributePrefix: "margin",
            colorPrefix: undefined,
            attributes: attributes,
            setAttributes: setAttributes,
            step: 1,
            unit: "px"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SpacingControlPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Padding",
            attributePrefix: "padding",
            colorPrefix: undefined,
            attributes: attributes,
            setAttributes: setAttributes,
            step: 1,
            unit: "px"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockAlignmentControl, {
        value: attributes.align,
        onChange: align => setAttributes({
          align
        }),
        controls: ['wide', 'full']
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {})
    })]
  });
}

/***/ }),

/***/ "./src/gutenbergToStyleBlocks.js":
/*!***************************************!*\
  !*** ./src/gutenbergToStyleBlocks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gutenbergToStyleBlocks)
/* harmony export */ });
/* harmony import */ var _themeSpacingMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeSpacingMap */ "./src/themeSpacingMap.js");
// Converts standard Gutenberg block attributes into style blocks for styleBuilder.js



// Dynamic mapping: parse theme.json CSS variable slugs to Tailwind classes
function mapSpacingToTailwind(side, value) {
  // Match pattern: var(--wp--preset--spacing--SLUG)
  const match = value && value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/);
  if (match) {
    const slug = match[1];
    // Map side to Tailwind shorthand
    const sideMap = {
      top: 't',
      bottom: 'b',
      left: 'l',
      right: 'r',
      block: 'y',
      inline: 'x',
      all: ''
    };
    const tailwindSide = sideMap[side] || '';
    // Use 'p' for padding, 'm' for margin (side[0])
    return `${side[0]}${tailwindSide}-${slug}`;
  }
  // If value is a custom value (e.g., 32px), use bracket notation
  if (value && typeof value === 'string' && value.match(/^[0-9.]+(px|rem|em|%)$/)) {
    const sideMap = {
      top: 't',
      bottom: 'b',
      left: 'l',
      right: 'r',
      block: 'y',
      inline: 'x',
      all: ''
    };
    const tailwindSide = sideMap[side] || '';
    return `${side[0]}${tailwindSide}-[${value}]`;
  }
  return '';
}
function gutenbergToStyleBlocks(attributes = {}) {
  const styleBlocks = [];

  // Colors
  if (attributes.backgroundColor || attributes.textColor) {
    styleBlocks.push({
      acf_fc_layout: 'colors',
      background_color: attributes.backgroundColor ? 'custom' : 'default',
      background_custom: attributes.backgroundColor || undefined,
      text_color: attributes.textColor ? 'custom' : 'default',
      text_custom: attributes.textColor || undefined
    });
  }

  // Typography
  if (attributes.fontSize || attributes.fontWeight || attributes.fontFamily || attributes.lineHeight || attributes.fontStyle || attributes.textTransform) {
    styleBlocks.push({
      acf_fc_layout: 'typography',
      font_size: attributes.fontSize || undefined,
      font_weight: attributes.fontWeight || undefined,
      font_family: attributes.fontFamily || undefined,
      line_height: attributes.lineHeight || undefined,
      font_case: attributes.textTransform || undefined
    });
  }

  // Spacing (Padding/Margin)
  if (attributes.style && attributes.style.spacing) {
    const spacing = attributes.style.spacing;
    // Padding
    if (spacing.padding) {
      const padding = spacing.padding;
      const paddingClasses = Object.entries(padding).map(([side, value]) => mapSpacingToTailwind(side, value)).join(' ');
      styleBlocks.push({
        acf_fc_layout: 'class_list',
        class_list: paddingClasses
      });
      // For custom values, also output style
      Object.entries(padding).forEach(([side, value]) => {
        if (!value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/) && value) {
          styleBlocks.push({
            acf_fc_layout: 'spacing',
            spacing_type: 'Padding',
            spacing_side: [side],
            spacing_options: 'custom',
            spacing_custom: value
          });
        }
      });
    }
    // Margin
    if (spacing.margin) {
      const margin = spacing.margin;
      const marginClasses = Object.entries(margin).map(([side, value]) => mapSpacingToTailwind(side, value)).join(' ');
      styleBlocks.push({
        acf_fc_layout: 'class_list',
        class_list: marginClasses
      });
      Object.entries(margin).forEach(([side, value]) => {
        if (!value.match(/^var\(--wp--preset--spacing--([a-zA-Z0-9_-]+)\)$/) && value) {
          styleBlocks.push({
            acf_fc_layout: 'spacing',
            spacing_type: 'Margin',
            spacing_side: [side],
            spacing_options: 'custom',
            spacing_custom: value
          });
        }
      });
    }
  }

  // Min/Max/Width/Height
  if (attributes.minHeight || attributes.minWidth || attributes.maxHeight || attributes.maxWidth || attributes.width || attributes.height) {
    styleBlocks.push({
      acf_fc_layout: 'size',
      w: attributes.width || undefined,
      h: attributes.height || undefined,
      'min-w': attributes.minWidth || undefined,
      'min-h': attributes.minHeight || undefined,
      'max-w': attributes.maxWidth || undefined,
      'max-h': attributes.maxHeight || undefined
    });
  }

  // Display
  if (attributes.display) {
    styleBlocks.push({
      acf_fc_layout: 'display',
      display: attributes.display
    });
  }

  // Border, shadow, etc. can be added similarly as needed.

  return styleBlocks;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _styleBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleBuilder */ "./src/styleBuilder.js");
/* harmony import */ var _gutenbergToStyleBlocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenbergToStyleBlocks */ "./src/gutenbergToStyleBlocks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */





// Custom SVG icon as a React element (matches core/group)

const customGroupIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
    d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"
  })
});

// Add block transforms from core/group
const transforms = {
  from: [{
    type: 'block',
    blocks: ['core/group'],
    transform: (attributes, innerBlocks) => [wp.blocks.createBlock(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
      ...attributes
    }, innerBlocks)]
  }],
  to: [{
    type: 'block',
    blocks: ['core/group'],
    transform: (attributes, innerBlocks) => [wp.blocks.createBlock('core/group', {
      ...attributes
    }, innerBlocks)]
  }]
};

// Helper to convert CSS string to object for style prop
function cssStringToObject(cssString) {
  const styleObj = {};
  if (!cssString || typeof cssString !== 'string') return styleObj;
  cssString.split(';').forEach(rule => {
    const [property, value] = rule.split(':').map(s => s && s.trim());
    if (property && value) {
      // Convert kebab-case to camelCase
      const camelProp = property.replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelProp] = value;
    }
  });
  return styleObj;
}

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_3__,
  icon: customGroupIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: ({
    attributes
  }) => {
    // Map Gutenberg attributes to style blocks
    const styleBlocks = (0,_gutenbergToStyleBlocks__WEBPACK_IMPORTED_MODULE_5__["default"])(attributes);
    // Generate Tailwind classes and styles
    const {
      classes,
      style,
      attributes: extraAttrs
    } = (0,_styleBuilder__WEBPACK_IMPORTED_MODULE_4__["default"])(styleBlocks);
    const {
      lineHeight,
      letterSpacing
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...wp.blockEditor.useBlockProps.save({
        // className: classes,
        // style: cssStringToObject(style), // convert string to object for save
        ...extraAttrs
        // ...(lineHeight ? { 'data-line-height': lineHeight } : {}),
        // ...(letterSpacing ? { 'data-letter-spacing': letterSpacing } : {}),
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(wp.blockEditor.InnerBlocks.Content, {})
    });
  },
  transforms
});

/***/ }),

/***/ "./src/styleBuilder.js":
/*!*****************************!*\
  !*** ./src/styleBuilder.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ styleBuilder)
/* harmony export */ });
// Direct translation of PHP style_builder to JS
// Accepts an array of style blocks and returns { classes, style, attributes }

function styleBuilder(styleBlocks = []) {
  let builderClasses = '';
  let builderWpClasses = '';
  let builderStyle = '';
  let attributes = {};
  for (const styleBlock of styleBlocks) {
    if (styleBlock.acf_fc_layout === 'class_list') {
      if (styleBlock.extract === 'No') {
        builderWpClasses += ' ' + (styleBlock.class_list || '') + ' ';
      } else {
        builderClasses += ' ' + (styleBlock.class_list || '') + ' ';
      }
    } else if (styleBlock.acf_fc_layout === 'spacing') {
      let spacingSides = styleBlock.spacing_side ? [...styleBlock.spacing_side] : ['all'];
      if (Array.isArray(spacingSides)) {
        if (spacingSides.includes('t') && spacingSides.includes('b')) {
          spacingSides = spacingSides.filter(s => s !== 't' && s !== 'b');
          spacingSides.push('y');
        }
        if (spacingSides.includes('l') && spacingSides.includes('r')) {
          spacingSides = spacingSides.filter(s => s !== 'l' && s !== 'r');
          spacingSides.push('x');
        }
        if (spacingSides.includes('x') && spacingSides.includes('y')) {
          spacingSides = spacingSides.filter(s => s !== 'x' && s !== 'y');
          spacingSides.push('all');
        }
        if (!spacingSides.length) spacingSides.push('all');
      } else {
        spacingSides = ['all'];
      }
      let spacingClass = {};
      if (styleBlock.spacing_type === 'Padding') {
        spacingClass.type = 'p';
      } else if (styleBlock.spacing_type === 'Margin') {
        spacingClass.type = 'm';
      } else {
        continue;
      }
      if (styleBlock.spacing_options && styleBlock.spacing_options === 'custom') {
        if (styleBlock.spacing_custom) {
          spacingClass.size = styleBlock.spacing_custom;
          spacingClass.custom = true;
        } else {
          continue;
        }
      } else if (typeof styleBlock.spacing_options !== 'undefined') {
        spacingClass.size = styleBlock.spacing_options;
        spacingClass.custom = false;
      }
      let classNames = '';
      let styles = '';
      for (const spacingSide of spacingSides) {
        classNames += spacingClass.type;
        if (spacingSide === 'all') {
          classNames += '-';
        } else {
          classNames += spacingSide + '-';
        }
        classNames += spacingClass.custom ? '[' : '';
        classNames += spacingClass.size || '';
        classNames += spacingClass.custom ? ']' : '';
        classNames += ' ';
      }
      if (spacingClass.custom) {
        // Fix: Output correct CSS property and value for spacing
        const map = {
          t: 'top',
          b: 'bottom',
          l: 'left',
          r: 'right',
          all: ''
        };
        const styleSides = styleBlock.spacing_side ? styleBlock.spacing_side : ['t', 'b', 'l', 'r'];
        for (const styleSide of styleSides) {
          let cssProp = (styleBlock.spacing_type || '').toLowerCase();
          if (map[styleSide] && map[styleSide] !== '') {
            cssProp += '-' + map[styleSide];
          }
          // Ensure value is a valid CSS variable string
          let cssValue = styleBlock.spacing_custom;
          if (cssValue) {
            // If already a valid CSS variable, use as is
            if (/^var\(--wp--preset--spacing--[a-zA-Z0-9_-]+\)$/.test(cssValue)) {
              // do nothing, value is already correct
            } else {
              // Extract just the slug if possible (e.g., from 'var:preset|spacing|60' get '60')
              const match = cssValue.match(/([a-zA-Z0-9_-]+)$/);
              const slug = match ? match[1] : cssValue.replace(/[^a-zA-Z0-9_-]/g, '');
              cssValue = `var(--wp--preset--spacing--${slug})`;
            }
          }
          if (cssProp && cssValue) {
            styles += `${cssProp}: ${cssValue}; `;
          }
        }
      }
      classNames = classNames.trim();
      builderClasses += classNames + ' ';
      builderStyle += styles + ' ';
    } else if (styleBlock.acf_fc_layout === 'colors') {
      if (styleBlock.text_color === 'default') {
        // Do nothing
      } else if (styleBlock.text_color === 'custom') {
        if (styleBlock.text_custom) {
          builderStyle += 'color: ' + styleBlock.text_custom + '; ';
          builderClasses += 'text-[' + styleBlock.text_custom + '] ';
        }
      } else if (styleBlock.text_color) {
        builderClasses += 'text-' + styleBlock.text_color + ' ';
      }
      if (styleBlock.background_color === 'default') {
        // Do nothing
      } else if (styleBlock.background_color === 'custom') {
        if (styleBlock.background_custom) {
          builderStyle += 'background-color: ' + styleBlock.background_custom + '; ';
          builderClasses += 'bg-[' + styleBlock.background_custom + '] ';
        }
      } else if (styleBlock.background_color) {
        builderClasses += 'bg-' + styleBlock.background_color + ' ';
      }
    } else if (styleBlock.acf_fc_layout === 'typography') {
      if (styleBlock.font_family) {
        if (styleBlock.font_family !== 'default') {
          builderClasses += 'font-' + styleBlock.font_family + ' ';
        }
      }
      if (styleBlock.font_size) {
        if (styleBlock.font_size !== 'default') {
          builderClasses += 'text-' + styleBlock.font_size + ' ';
        }
      }
      if (styleBlock.font_weight) {
        if (styleBlock.font_weight !== 'default') {
          builderClasses += 'font-' + styleBlock.font_weight + ' ';
        }
      }
      if (styleBlock.font_case) {
        if (styleBlock.font_case !== 'default') {
          builderClasses += styleBlock.font_case + ' ';
        }
      }
      if (styleBlock.line_height) {
        if (styleBlock.line_height !== 'default') {
          builderClasses += 'leading-' + styleBlock.line_height + ' ';
        }
      }
    } else if (styleBlock.acf_fc_layout === 'display') {
      if (styleBlock.display) {
        builderClasses += styleBlock.display + ' ';
      }
    } else if (styleBlock.acf_fc_layout === 'size') {
      if (styleBlock.w) {
        builderClasses += 'w-[' + styleBlock.w + '] ';
        builderStyle += 'width: ' + styleBlock.w + '; ';
      }
      if (styleBlock.h) {
        builderClasses += 'h-[' + styleBlock.h + '] ';
        builderStyle += 'height: ' + styleBlock.h + '; ';
      }
      if (styleBlock['min-w']) {
        builderClasses += 'min-w-[' + styleBlock['min-w'] + '] ';
        builderStyle += 'min-width: ' + styleBlock['min-w'] + '; ';
      }
      if (styleBlock['min-h']) {
        builderClasses += 'min-h-[' + styleBlock['min-h'] + '] ';
        builderStyle += 'min-height: ' + styleBlock['min-h'] + '; ';
      }
      if (styleBlock['max-w']) {
        builderClasses += 'max-w-[' + styleBlock['max-w'] + '] ';
        builderStyle += 'max-width: ' + styleBlock['max-w'] + '; ';
      }
      if (styleBlock['max-h']) {
        builderClasses += 'max-h-[' + styleBlock['max-h'] + '] ';
        builderStyle += 'max-height: ' + styleBlock['max-h'] + '; ';
      }
    } else if (styleBlock.acf_fc_layout === 'width') {
      if (styleBlock.width_options && styleBlock.width_options !== 'default') {
        builderClasses += 'w-' + styleBlock.width_options + ' ';
      }
    } else if (styleBlock.acf_fc_layout === 'custom_attributes') {
      if (Array.isArray(styleBlock.custom_attributes)) {
        for (const item of styleBlock.custom_attributes) {
          attributes[item.key] = item.value;
        }
      }
    }
  }
  return {
    classes: builderClasses.trim(),
    wp_classes: builderWpClasses.trim(),
    style: builderStyle.trim(),
    attributes
  };
}

/***/ }),

/***/ "./src/themeSpacingMap.js":
/*!********************************!*\
  !*** ./src/themeSpacingMap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeSpacingMap: () => (/* binding */ themeSpacingMap)
/* harmony export */ });
// Maps WP theme.json spacing preset slugs to Tailwind spacing keys
// Example: { 'var(--wp--preset--spacing--60)': '6', ... }
// This should be generated from your theme.json and Tailwind config for full accuracy.
// For now, let's hardcode a common mapping as an example:

const themeSpacingMap = {
  'var(--wp--preset--spacing--0)': '0',
  'var(--wp--preset--spacing--10)': '1',
  'var(--wp--preset--spacing--20)': '2',
  'var(--wp--preset--spacing--30)': '3',
  'var(--wp--preset--spacing--40)': '4',
  'var(--wp--preset--spacing--50)': '5',
  'var(--wp--preset--spacing--60)': '6',
  'var(--wp--preset--spacing--80)': '8',
  'var(--wp--preset--spacing--100)': '10',
  'var(--wp--preset--spacing--120)': '12',
  'var(--wp--preset--spacing--160)': '16',
  'var(--wp--preset--spacing--200)': '20'
  // Add more as needed
};

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"nkg/tw-group","version":"0.1.0","title":"TW Group","category":"layout","icon":"<svg viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" aria-hidden=\\"true\\" focusable=\\"false\\"><path d=\\"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z\\"></path></svg>","description":"A group block with Tailwind class support","example":{},"supports":{"html":false,"color":false,"background":false,"textColor":false,"spacing":false,"border":false,"align":false,"anchor":true,"customClassName":true},"attributes":{"label":{"type":"string","default":""},"layout":{"type":"object"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"style":{"type":"object"},"minHeight":{"type":"string"},"borderWidth":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"borderRadius":{"type":"string","default":""},"borderWidthTop":{"type":"string","default":""},"borderWidthRight":{"type":"string","default":""},"borderWidthBottom":{"type":"string","default":""},"borderWidthLeft":{"type":"string","default":""},"borderColorTop":{"type":"string","default":""},"borderColorRight":{"type":"string","default":""},"borderColorBottom":{"type":"string","default":""},"borderColorLeft":{"type":"string","default":""},"borderStyleTop":{"type":"string","default":""},"borderStyleRight":{"type":"string","default":""},"borderStyleBottom":{"type":"string","default":""},"borderStyleLeft":{"type":"string","default":""},"fontFamily":{"type":"string"},"fontSize":{"type":"string"},"fontAppearance":{"type":"string"},"lineHeight":{"type":"string"},"letterSpacing":{"type":"string"},"textDecoration":{"type":"string"},"letterCase":{"type":"string"},"typographyVisible":{"type":"array","items":{"type":"string"}},"anchor":{"type":"string"},"className":{"type":"string"},"marginTop":{"type":"string","default":""},"marginRight":{"type":"string","default":""},"marginBottom":{"type":"string","default":""},"marginLeft":{"type":"string","default":""},"paddingTop":{"type":"string","default":""},"paddingRight":{"type":"string","default":""},"paddingBottom":{"type":"string","default":""},"paddingLeft":{"type":"string","default":""},"spacingLinked":{"type":"boolean","default":true}},"textdomain":"tw-group","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktw_group"] = self["webpackChunktw_group"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map