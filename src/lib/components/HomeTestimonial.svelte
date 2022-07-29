<script>
	import { onMount } from 'svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import { fade } from 'svelte/transition';

	import IntersectionObserver from './IntersectionObserver.svelte';

	let windowHeight = 0;

	onMount(() => {
		windowHeight = window.innerHeight;
	});
</script>

<IntersectionObserver let:intersecting let:top let:bottom>
	<section id="testimonials" class:visible={intersecting} class="section bg-white z-2">
		<div class="content-split-container ">
			{#if top < 200 && bottom > windowHeight}
				<div
					class="inner-fixed-container d-flex flex-column p-5"
					transition:fade={{ duration: 200, delay: 5 }}
				>
					<h1 class="text-big w-75 text-orange font-black mr-auto mt-auto">Participatory strategy is...</h1>
					<a href="/get-started" class="btn btn-green mr-auto">Get started</a>
				</div>
			{/if}
			<div class="inner-container d-flex flex-column p-5">
				<div class="testimonial testimonial-init">
					<img src="$lib/assets/images/testimonial/testimonial_1.png" alt="" />
				</div>
				<div class="testimonial">
					<div class="testimonial-left">
						<img src="$lib/assets/images/testimonial/testimonial_2.png" alt="" />
					</div>
					<div class="testimonial-right">
						<img src="$lib/assets/images/testimonial/testimonial_3.png" alt="" />
					</div>
				</div>
				<div class="testimonial">
					<div class="testimonial-left">
						<img src="$lib/assets/images/testimonial/testimonial_4.png" alt="" />
					</div>
					<div class="testimonial-right">
						<img src="$lib/assets/images/testimonial/testimonial_5.png" alt="" />
					</div>
				</div>
				<div class="testimonial">
					<div class="testimonial-left">
						<img src="$lib/assets/images/testimonial/testimonial_6.png" alt="" />
					</div>
					<div class="testimonial-right">
						<img src="$lib/assets/images/testimonial/testimonial_7.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style lang="scss">
	.testimonial {
		height: 100%;
		//min-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.testimonial.testimonial-init {
		max-width: 80%;
		margin: auto;
		min-height: 110vh;
	}

	.testimonial:not(.testimonial-init) {
		margin-bottom: 4rem;
	}

	.testimonial .testimonial-left {
		width: 48%;
		margin-top: 0;
		margin-bottom: auto;
		align-self: start;
	}

	.testimonial .testimonial-right {
		width: 48%;
		margin-top: auto;
		margin-bottom: 0rem;
		align-self: end;
	}

	.testimonial img {
		max-width: 100%;
	}
</style>
