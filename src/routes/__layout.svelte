<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import 'uno.css';
	import '@unocss/reset/normalize.css';
</script>

<Navbar />
<Sidebar />
<main><slot /></main>

<style lang="scss" global>
	:root {
		--theme-blue: #0a132d;
		--theme-green: #62d5af;
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

	img {
		max-width: 100%;
		height: auto;
	}

	#app {
		font-family: 'Lato', sans-serif;
		main {
			//width: calc(100% - 120px);
			min-height: 100vh;
			display: flex;
			padding-left: 120px;

			.page {
				width: 100%;
			}

			.page > section {
				min-height: 100vh;
			}
		}
	}

	.btn {
		appearance: none;
		border: none;
		border-radius: 25px;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 18px;
		padding: 0.85rem 1rem;
		line-height: 1;
		min-width: 200px;
		cursor: pointer;
	}

	.btn-green {
		background-color: var(--theme-green);
	}

	.text-underline {
		text-decoration: underline;
	}

	.text-uppercase {
		text-transform: uppercase;
	}

	.text-light {
		color: #fafafa;
	}

	.text-dark {
		color: #212121;
	}

	.text-gray {
		color: #666666;
	}

	.text-orange {
		color: #e79e6a;
	}

	.fw-bold {
		font-weight: bold;
	}

	.flex-row {
		display: flex;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.w-100 {
		width: 100%;
	}

	.w-50 {
		width: 50%;
	}

	.w-36 {
		width: 42%;
	}

	.w-64 {
		width: 58%;
	}

	.h-100 {
		height: 100%;
	}

	.form-control {
		appearance: none;
		border: none;
		margin-bottom: 0.5rem;
		background-color: #90dbc2;
		border-radius: 5px;
		padding: 0.65rem 1rem;
		font-style: italic;
		width: 100%;
		&::placeholder {
			color: #212121;
			font-weight: 300;
			font-size: 16px;
			font-family: 'Lato';
		}
	}
</style>
