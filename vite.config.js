import { sveltekit } from '@sveltejs/kit/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { presetScrollbar } from 'unocss-preset-scrollbar';
import UnoCss from 'unocss/vite';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		UnoCss({
			extractors: [extractorSvelte],
			shortcuts: [],
			mode: 'global',
			presets: [
				presetUno(),
				presetWebFonts({
					provider: 'google',
					fonts: {
						lato: {
							name: 'Lato',
							weights: ['100', '300', '400', '700', '900']
						}
					}
				}),
				presetScrollbar({
					scrollbarThumbColor: '#D5D5D5',
					scrollbarTrackColor: 'transparent'
				})
				// presetIcons({
				// 	extraProperties: {
				// 		display: 'inline-block',
				// 		'vertical-align': 'middle'
				// 	},
				// 	collections: {
				// 		icons: {
				// 			link: () => fs.readFile('./src/lib/assets/icons/link.svg', 'utf-8')
				// 		}
				// 	}
				// })
			]
		}),
		imagetools({}),
		svg({
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		})
	]
};

export default config;
