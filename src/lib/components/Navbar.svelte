<script>
	import Logo from '$lib/assets/images/logo/logo.png';
</script>

<nav class="navbar">
	<a href="/" class="navbar-brand">
		<img src={Logo} alt="" />
	</a>
</nav>

<style lang="scss">
	.navbar {
		width: 100%;
		position: fixed;
		z-index: 1;
		margin-left: 120px;
		padding: 2.5rem;
		.navbar-brand img {
			width: 240px;
		}
	}
</style>
