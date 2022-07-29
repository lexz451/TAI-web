<script>
	import Logo from '$lib/assets/images/logo/logo.svg?component';
	import LogoWhite from '$lib/assets/images/logo/logo-white.svg?component';

	import { page } from '$app/stores';

	let showLogoWhite = false;

	// TODO: Better approach
	$: showLogoWhite =
		$page.url.pathname.includes('/get-started') || $page.url.pathname.includes('/case-study') || ($page.url.pathname.includes('/resources') && !$page.url.pathname.includes('/submit'));
</script>

<nav class="navbar">
	<a href="/" class="navbar-brand">
		{#if showLogoWhite}
			<LogoWhite width="250" />
		{:else}
			<Logo width="250" />
		{/if}
	</a>
</nav>

<style lang="scss">
	.navbar {
		width: 425px;
		position: fixed;
		z-index: 10;
		margin-left: 100px;
		padding: 2.5rem;
	}
</style>
