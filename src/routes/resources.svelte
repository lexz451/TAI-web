<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import SearchControl from '$lib/components/SearchControl.svelte';
	import LeftImgBg from '$lib/assets/images/background/natives.png';
	import DarkOverlayImg from '$lib/assets/images/background/overlay-1.png';
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Resources</title>
</svelte:head>

<div class="resources-page page">
	<section class="content-split-container section">
		<div class="left-background" style="background-image: url({LeftImgBg});">
			<div class="overlay" style="background-image: url({DarkOverlayImg});" />
		</div>
		<div class="left-container">
			<h1 class="text-white fw-light">
				For each resource, have contact information for people <strong class="fw-bold"
					>to learn more</strong
				>
			</h1>
			<button class="btn btn-green mr-auto">FAQ</button>
		</div>
		<div class="inner">
			<div class="inner-left bg-white">
				<div class="resources-container">
					<h1 class="text-theme-orange text-center text-uppercase">Search this collection</h1>
					<SearchControl />
					<div class="resource-list">
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
	</section>
</div>

<style lang="scss">
	.inner {
		height: 100vh;
		.inner-left {
			padding: 1rem 4rem;
		}
	}
	.resources-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		.resource-list {
			margin-top: 2rem;
			flex-grow: 1;
			overflow-y: scroll;
		}
	}
</style>
