<script>
	import HomeAbout from '$lib/components/HomeAbout.svelte';
	import HomeBrands from '$lib/components/HomeBrands.svelte';
	import HomeLanding from '$lib/components/HomeLanding.svelte';
	import HomeTestimonial from '$lib/components/HomeTestimonial.svelte';
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative</title>
</svelte:head>

<div class="home-page page">
	<HomeLanding />
	<HomeTestimonial />
	<HomeBrands />
	<HomeAbout />
</div>

<style>
</style>
