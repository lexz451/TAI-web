<script>
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	import IntersectionObserver from './IntersectionObserver.svelte';

	let windowHeight = 0;

	onMount(() => {
		windowHeight = window.innerHeight;
	});
</script>

<IntersectionObserver let:intersecting let:top let:bottom>
	<section
		id="testimonial-section"
		class:visible={intersecting}
		class="content-split-container section bg-white z-2"
		data-section="2"
	>
		{#if top < 200 && bottom > windowHeight}
			<div class="left-container" transition:fade={{ duration: 200, delay: 5 }}>
				<h1 class="text-large text-theme-green mr-auto">Participatory strategy is...</h1>
				<a href="/get-started" class="btn btn-green mr-auto">Get started</a>
			</div>
		{/if}
		<div class="inner">
			<section class="testimonial">
				<img src="$lib/assets/images/testimonial/testimonial1.png" alt="" />
			</section>
			<section class="testimonial">
				<img src="$lib/assets/images/testimonial/testimonial2.png" alt="" />
			</section>
			<section class="testimonial">
				<img src="$lib/assets/images/testimonial/testimonial3.png" alt="" />
			</section>
		</div>
	</section>
</IntersectionObserver>

<style lang="scss">
	#testimonial-section {
		.inner {
			display: flex;
			flex-direction: column;
		}
		.testimonial {
			min-height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 75%;
				max-width: 600px;
			}
		}
	}
</style>
