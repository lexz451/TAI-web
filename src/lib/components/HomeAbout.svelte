<script>
	import { fade } from 'svelte/transition';
	import LeftBgImg from '$lib/assets/images/background/hands.jpg';
	import LeftInnerBgImg from '$lib/assets/images/background/people.jpg';
	import { OverlayGradient } from '$lib/utils/theme';
	import ContactForm from './ContactForm.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		let windowHeight = window.innerHeight;
	});
</script>

<IntersectionObserver let:intersecting let:top let:bottom>
	<section class="section bg-blue z-2" data-section="4">
		<div class="content-split-container">
			<div
				class="inner-fixed-background"
				style="background-image: {OverlayGradient}, url({LeftBgImg});"
			/>
			{#if top < 200}
				<div
					class="inner-fixed-container d-flex flex-column p-5"
					transition:fade={{ duration: 200, delay: 5 }}
				>
					<h1 class="text-h1 text-green mr-auto mt-auto">How has it been done?</h1>
					<a href="/case-study" class="btn btn-outline-green mr-auto">Read case studies</a>
				</div>
			{/if}
			<div class="inner-container">
				<div
					class="inner-left d-flex flex-column p-5 bg-orange"
					style="background-image: {OverlayGradient}, url({LeftInnerBgImg});"
				>
					<!-- <img src="$lib/assets/images/background/people.png" alt="" /> -->
					<div class="content mt-auto d-flex flex-column w-75">
						<h1 class="text-h1 text-white mr-auto">Ready to learn more?</h1>
						<a href="/get-started" class="btn btn-green mr-auto text-white">Get started</a>
					</div>
				</div>
				<div class="inner-right">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style>
	.inner-container .inner-left {
		background-position: top;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
