<script context="module" lang="ts">
	export const load = async (props: any) => {
		//console.log(props);
		return {
			props: { url: props.url }
		};
	};
</script>

<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import 'uno.css';
	import '@unocss/reset/normalize.css';
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let url: any;
</script>

<header>
	<Navbar />
	<Sidebar />
</header>
<PageTransition {url}>
	<main><slot /></main>
</PageTransition>

<style lang="scss" global>
	:root {
		--theme-blue: #0a132d;
		--theme-green: #00d8ad;
		--theme-orange: #e79e6a;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
	}

	#app {
		font-family: 'Lato', sans-serif;
		background-color: var(--theme-blue);
		main {
			min-height: 100vh;
			padding-left: 120px;
		}
		main section {
			position: relative;
			min-height: 100vh;
		}
	}

	@import '../lib/theme/layout.scss';
	@import '../lib/theme/buttons.scss';
	@import '../lib/theme/inputs.scss';
	@import '../lib/theme/utils.scss';
</style>
