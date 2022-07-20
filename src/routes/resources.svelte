<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import SearchControl from '$lib/components/SearchControl.svelte';
	import LeftImgBg from '$lib/assets/images/background/natives.png';
	import { OverlayGradient } from '$lib/utils/theme';
	import DarkOverlayImg from '$lib/assets/images/background/overlay-1.png';
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
				<h1 class="text-light text-h1 mt-auto">
					For each resource, have contact information for people <strong class="font-bold"
						>to learn more</strong
					>
				</h1>
				<a class="btn btn-green mr-auto" href="/get-started#section-2">FAQ</a>
			</div>
			<div class="inner-container">
				<div class="inner-left bg-white px-5 pb-4">
					<div class="resources-container d-flex flex-column">
						<h3 class="text-orange text-h3 text-center text-uppercase">Search this collection</h3>
						<SearchControl />
						<div
							class="resources-list d-flex flex-column flex-grow-1 mt-4 pr-1 scrollbar scrollbar-rounded"
						>
							<ResourceItem />
							<ResourceItem />
							<ResourceItem />
						</div>
					</div>
				</div>
				<div class="inner-right">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.inner-container .inner-left {
		height: 100vh;
	}
	.resources-container {
		max-height: 100%;
	}
	.resources-container .resources-list {
		overflow-y: scroll;
	}
</style>
