<script lang="ts" context="module">
	export async function load({ fetch }: { fetch: any }) {
		const API_URL = import.meta.env.VITE_API_URL;
		const params = new URLSearchParams({
			populate: '*'
		});
		const url = `${API_URL}/api/mc-resources?${params.toString()}`;
		const res = await fetch(url);
		const { data: resources } = await res.json();

		return {
			props: {
				resources: resources || []
			}
		};
	}
</script>

<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import SearchControl from '$lib/components/SearchControl.svelte';
	import LeftImgBg from '$lib/assets/images/background/ancient.jpg';
	import LeftImgBg2 from '$lib/assets/images/background/hands.jpg';
	import InnerLeftBg2 from '$lib/assets/images/background/people.jpg';

	import { OverlayGradient } from '$lib/utils/theme';
	import FiltersForm from '$lib/components/FiltersForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';

	export let resources: any[];
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Resources</title>
</svelte:head>

<div class="resources-page page">
	<section class="section bg-blue">
		<div class="content-split-container">
			<div
				class="inner-fixed-background"
				style="background-image: {OverlayGradient}, url({LeftImgBg});"
			/>
			<div class="inner-fixed-container d-flex flex-column p-5">
				<h1 class="text-light text-h1 mt-auto">Have something to share?</h1>
				<a class="btn btn-green mr-auto" href="/resources/submit">SUBMIT A RESOURCE!</a>
			</div>
			<div class="inner-container bg-white">
				<div class="inner-left bg-white px-5 pb-4 pr-0">
					<div class="resources-container d-flex flex-column">
						<h3 class="text-orange text-h3 text-center text-uppercase">Search this collection</h3>
						<div class="mr-2">
							<SearchControl />
						</div>
						<div class="resources-list d-flex flex-column flex-grow-1 mt-4 pr-2">
							{#each resources as item}
								<ResourceItem {item} />
							{/each}
						</div>
					</div>
				</div>
				<div class="inner-right resources-filters">
					<FiltersForm />
				</div>
			</div>
		</div>
	</section>
	<IntersectionObserver let:top>
		<section id="section-2" class="section bg-blue">
			<div class="content-split-container">
				<div
					class="inner-fixed-background"
					style:background-image="{OverlayGradient}, url({LeftImgBg2})"
				/>
				{#if top < 200}
					<div
						class="inner-fixed-container d-flex flex-column p-5"
						transition:fade={{ duration: 200 }}
					>
						<h1 class="text-green text-h1 mt-auto w-75">How has it been done?</h1>
						<a class="btn btn-outline-green mr-auto" href="/case-study">Read case studies</a>
					</div>
				{/if}
				<div class="inner-container">
					<div
						class="inner-left d-flex flex-column p-5"
						style="background-image: {OverlayGradient}, url({InnerLeftBg2});"
					>
						<!-- <div class="overlay" style="background-image: url({GreenOverlayImg});" /> -->
						<div class="background-overlay" />
						<!-- <div class="overlay" style="background-image: url({DarkOverlayImg});" /> -->

						<div class="content mt-auto d-flex flex-column">
							<h1 class="text-light text-h1">Ready to shift power on your strategic decisions?</h1>
							<a class="btn btn-green mr-auto" href="/get-started"> Get started </a>
						</div>
					</div>
					<div class="inner-right">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	</IntersectionObserver>
</div>

<style lang="scss">
	.inner-container .inner-left {
		height: 100vh;
		background-position: top;
		background-size: cover;
	}
	.resources-container {
		max-height: 100%;
	}
	.resources-container .resources-list {
		overflow-y: scroll;
	}
	.resources-filters {
		margin-top: 5.5rem;
	}
</style>
