const theme = require("./theme.json");
const tailpress = require("@nukage/tailthemer");
// const qntmMapper = require("./qntm-modules/tailwind-mapper.js");
// const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
		backgroundOpacity: false,
		placeholderOpacity: false,
		textOpacity: false,
		divideOpacity: false,
		// borderOpacity: false,
	},
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
	safelist: [
		'text-2xl',
		'text-3xl',
		{
			pattern: /^p(?:x|y|t|b|l|r)?-[a-z0-9-]+$/i, // Padding
		  },
		  {
			pattern: /^m(?:x|y|t|b|l|r)?-[a-z0-9-]+$/i, // Margin
		  },
		{
			pattern: /^text-[^\/]*$/,
		},
		{
			pattern: /^bg-[^\/]*$/,
		},
		{
			pattern: /^shadow-[^\/]*$/,
		},
		{
			pattern: /^rounded-[^\/]*$/,
		},
		{
			pattern: /^font-[^\/]+$/,
		},
		{
			pattern: /^leading-[^\/]*$/,
		},
		{
			pattern: /^grid-cols-\d+$/i,
		},
		{
			pattern: /^gap-\d+$/i,
		},
		{
			pattern: /^(w|min-w|max-w)-[a-z0-9\/-]+$/i,
		  },
		  
	  ],
    theme: {
        container: {
			center: true,
			padding: {
				DEFAULT: "20px",
			},
		},
        extend: {
            zIndex: {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
				9: "9",
			},
            spacing: {
				"1/10": "10%",
				"2/10": "20%",
				"3/10": "30%",
				"4/10": "40%",
				"5/10": "50%",
				"6/10": "60%",
				"7/10": "70%",
				"8/10": "80%",
				"9/10": "90%",
			},

        },
		colors: {
			bordergray: "#626E6D52", 
			...tailpress.colorMapper(
				tailpress.theme("settings.color.palette", theme)
			),
		},
		width: tailpress.customMapper(tailpress.theme('settings.custom.width', theme)),
		screens: {
			// xs: "480px",
			// sm: "600px",
			// md: "782px",
			// lg: "960px", // 960px
			// xl: "1064px", // 1064px
			// "2xl": "1240px",
			// "3xl": "1440px",
			// "4xl": "1920px",
			'xs': '480px',
            'sm': '600px',
            'md': '782px',
			'lg': '960px',
            'xl': tailpress.theme('settings.layout.contentSize', theme),
            '2xl': tailpress.theme('settings.layout.wideSize', theme),
          
		},
		lineHeight: {...tailpress.customMapper(tailpress.theme('settings.custom.lineHeight', theme)),
			normal: "1.5",
			none: "none",
			tight: "1.15",
			snug: "1.2",
		},
		fontSize: tailpress.fontSizeMapper(tailpress.theme('settings.typography.fontSizes', theme)),
		fontWeight: tailpress.customMapper(tailpress.theme('settings.custom.fontWeight', theme)),
		spacing: {
			...tailpress.spacingMapper(tailpress.theme('settings.spacing.spacingSizes', theme)),
		
				auto: "auto",
				0: "0rem",
				px: "1px",
				1: "0.0625rem",
				2: "0.125rem",
				3: "0.1875rem",
				4: "0.25rem",
				5: "0.3125rem",
				6: "0.375rem",
				7: "0.4375rem",
				8: "0.5rem",
				9: "0.5625rem",
				10: "0.625rem",
				11: "0.6875rem",
				12: "0.75rem",
				13: "0.8125rem",
				14: "0.875rem",
				15: "0.9375rem",
				16: "1rem",
				17: "1.0625rem",
				18: "1.125rem",
				19: "1.1875rem",
				20: "1.25rem",
				21: "1.3125rem",
				22: "1.375rem",
				23: "1.4375rem",
				24: "1.5rem",
				25: "1.5625rem",
				26: "1.625rem",
				27: "1.6875rem",
				28: "1.75rem",
				29: "1.8125rem",
				30: "1.875rem",
				31: "1.9375rem",
				32: "2rem",
				33: "2.0625rem",
				34: "2.125rem",
				35: "2.1875rem",
				36: "2.25rem",
				37: "2.3125rem",
				38: "2.375rem",
				39: "2.4375rem",
				40: "2.5rem",
				41: "2.5625rem",
				42: "2.625rem",
				43: "2.6875rem",
				44: "2.75rem",
				45: "2.8125rem",
				46: "2.875rem",
				47: "2.9375rem",
				48: "3rem",
				49: "3.0625rem",
				50: "3.125rem",
				52: "3.25rem",
				56: "3.5rem",
				60: "3.75rem",
				64: "4rem",
				68: "4.25rem",
				70: "4.375rem",
				72: "4.5rem",
				76: "4.75rem",
				80: "5rem",
				84: "5.25rem",
				88: "5.5rem",
				90: "5.625rem",
				92: "5.75rem",
				96: "6rem",
				100: "6.25rem",
		

		},
        fontFamily: tailpress.fontFamMapper(tailpress.theme('settings.typography.fontFamilies', theme)),
		
    },
	plugins: [
		// tailpress.tailwind,
        require("@tailwindcss/forms"),
	],
};
