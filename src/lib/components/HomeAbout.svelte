<script>
	import { fade } from 'svelte/transition';
	import LeftBgImg from '$lib/assets/images/background/brands-left-bg.png';
	import ContactForm from './ContactForm.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		let windowHeight = window.innerHeight;
	});
</script>

<IntersectionObserver let:intersecting let:top let:bottom>
	<section class="content-split-container section bg-theme-blue z-2" data-section="4">
		<div class="left-background" style="background-image: url({LeftBgImg});" />
		{#if top < 200}
			<div class="left-container" transition:fade={{ duration: 200, delay: 5 }}>
				<h1 class="text-large text-theme-green mr-auto">How has it been done?</h1>
				<button class="btn btn-green mr-auto">Get started</button>
			</div>
		{/if}
		<div class="inner">
			<div class="inner-left bg-theme-orange">
				<img src="$lib/assets/images/background/people.png" alt="" />
				<div class="content">
					<h1 class="text-large text-white mr-auto">How has it been done?</h1>
					<button class="btn btn-green mr-auto text-white">Get started</button>
				</div>
			</div>
			<div class="inner-right">
				<ContactForm />
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.inner {
		height: 100vh;
	}
	.inner .inner-left {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		flex-direction: column;
		overflow: hidden;
	}
	.inner .inner-left .content {
		z-index: 1;
	}
	.inner .inner-left img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 0 -50px;
	}
</style>
