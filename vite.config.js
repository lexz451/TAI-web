import { sveltekit } from '@sveltejs/kit/vite';
import { extractorSvelte } from '@unocss/core';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import UnoCss from 'unocss/vite';
import { imagetools } from 'vite-imagetools';

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
				})
			]
		}),
		imagetools({})
	]
};

export default config;
