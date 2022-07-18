//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: seqPreprocessor([preprocess(), importAssets()]),
	kit: {
		adapter: adapter()
	}
};

export default config;
