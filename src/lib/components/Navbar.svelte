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
		width: 425px;
		position: fixed;
		z-index: 10;
		margin-left: 120px;
		padding: 2.5rem;
		.navbar-brand img {
			width: 240px;
		}
	}
</style>
