<script context="module" lang="ts">
	export const load = async ({ url }: { url: any }) => {
		//console.log(props);
		return {
			props: { url }
		};
	};
</script>

<script lang="ts">
	import ProgressBar from 'svelte-progress-bar';
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	// import 'uno.css';
	// import '@unocss/reset/normalize.css';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { onMount } from 'svelte';

	export const url = '';

	import { page } from '$app/stores';

	beforeNavigate(() => progress.start());
	afterNavigate(() => progress.complete());

	let progress: {
		complete(): void;
		start: () => void;
		stop: () => void;
	};
</script>

<ProgressBar id="progress" bind:this={progress} color="#e79e6a" width="100%" />
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Navbar />
	<Sidebar />
</header>
<main class="wrapper">
	<PageTransition url={$page.url.pathname}>
		<slot />
	</PageTransition>
</main>

<style lang="scss" global>
	@import '/node_modules/@unocss/reset/normalize.css';
	@import '/node_modules/filepond/dist/filepond.css';
	@import '/node_modules/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
	//@import '/node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
	@import '../lib/theme/variables';
	@import '../lib/theme/mixins';
	@import '../lib/theme/core';

	$panel-size: 33.5vw;

	*::-webkit-scrollbar {
		width: 0.75rem;
	}
	*::-webkit-scrollbar-track {
		background: var(--theme-light);
	}
	*::-webkit-scrollbar-thumb {
		background-color: #cccccc;
		border-radius: 8px;
		border: 3px solid var(--theme-light);
	}

	.filepond--drop-label {
		color: var(--theme-green);
		font-size: 1.76rem !important;
	}
	.filepond--panel-root {
		background-color: var(--theme-blue);
		height: 100px;
	}
	.filepond--file {
		background-color: var(--theme-orange);
	}

	#app {
		font-family: $font-family;
		font-weight: normal;
		background-color: map-get($map: $colors, $key: surface);
		.wrapper {
			padding-left: 100px;
			//max-width: 1600px;
			.page {
				display: flex;
				flex-direction: column;
				.section {
					flex-grow: 1;
					min-height: 100vh;
					position: relative;
					//display: inline-grid;

					.content-split-container {
						min-height: 100vh;
						height: 100%;
						display: flex;
						.video-container {
							position: fixed;
							top: 0;
							width: calc(100% - 100px);
							z-index: 0;
							height: 110%;
							display: block;
							background-size: cover;
							background-repeat: no-repeat;
							img {
								position: absolute;
								width: 100%;
								height: 100%;
								object-fit: cover;
								object-position: center;
							}
						}
						.fixed-container {
							min-height: 100vh;
							position: fixed;
							right: 0;
							top: 0;
							left: 100px;
							pointer-events: none;
						}
						.inner-fixed-background {
							position: absolute;
							left: 0;
							top: 0;
							background-attachment: fixed;
							background-repeat: no-repeat;
							//background-size: calc(35vw + 100px) cover;
							background-size: calc(35% + 100px);
							width: $panel-size;
							min-height: 100%;
							background-position: bottom left;
						}
						.inner-fixed-container {
							top: 0;
							left: 100px;
							position: fixed;
							width: $panel-size;
							height: 100%;
						}
						.inner-container {
							display: flex;
							margin-left: $panel-size;
							width: calc(100% - $panel-size);
						}
						// .inner-container .inner-left,
						// .inner-container .inner-right {
						// 	//width: 50%;
						// }

						.inner-container .inner-left {
							width: $panel-size;
						}

						.inner-container .inner-right {
							width: calc(100% - $panel-size);
						}
					}
				}
			}
		}
	}

	// $font-family: 'Lato', sans-serif;
	// $colors: (
	// 	'white': #ffffff,
	// 	'black': #000000,
	// 	'dark': #212121,
	// 	'dark-gray': #666666,
	// 	'light': #fafafa,
	// 	'light-gray': #f6f6f6,
	// 	'blue': #0a132d,
	// 	'green': #00d8ad,
	// 	'orange': #e79e6a
	// );

	// :root {
	// 	@each $key, $value in $colors {
	// 		--theme-#{$key}: #{$value};
	// 	}
	// }

	// *,
	// *::after,
	// *::before {
	// 	box-sizing: border-box;
	// 	font-family: inherit;
	// }

	// html,
	// body {
	// 	padding: 0;
	// 	margin: 0;
	// 	//TODO: Breaks page transitions
	// 	//scroll-behavior: smooth;
	// }

	// #app {
	// 	font-family: $font-family;
	// 	background-color: map-get($map: $colors, $key: 'blue');
	// 	main {
	// 		min-height: 100vh;
	// 		padding-left: 120px;
	// 		section {
	// 			position: relative;
	// 		}
	// 	}
	// }
</style>
