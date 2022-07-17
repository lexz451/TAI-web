<script lang="ts">
	import LeftBgImage from '$lib/assets/images/background/g60.png';
	import LeftBgImageOverlay1 from '$lib/assets/images/background/g22.png';
	import LeftBgImageOverlay2 from '$lib/assets/images/background/g62.png';
	import LeftBgImageOverlay3 from '$lib/assets/images/background/g120.png';
	import ResourceBg from '$lib/assets/images/background/path642.jpg';

	import ContactForm from '$lib/components/ContactForm.svelte';
	import SearchControl from '$lib/components/SearchControl.svelte';

	let scrollY: number;
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Resources</title>
</svelte:head>

<svelte:window bind:scrollY />

<div class="resources-page page">
	<section class="flex-row h-100">
		<div class="left-container">
			<div class="bg-image">
				<img src={LeftBgImage} alt="" />
				<img src={LeftBgImageOverlay1} alt="" />
				<img src={LeftBgImageOverlay2} alt="" />
				<img src={LeftBgImageOverlay3} alt="" />
			</div>
			<div class="message p-5">
				<h1 class="text-light fw-thin m-0">
					For each resource, have contact information for people to <strong>learn more</strong>
				</h1>
				<button class="btn btn-green mt-5"> FAQ </button>
			</div>
		</div>
		<div class="right-container">
			<div class="w-50">
				<div class="resources-container">
					<h2 class="text-orange text-center text-uppercase">Search this collection</h2>
					<SearchControl />
					<div class="resource-list mt-5">
						<div class="resource-list__item">
							<img class="resource-list__item--img" src={ResourceBg} alt="" />
							<span class="resource-list__item--title">Some title</span>
							<div class="resource-list__item--divider" />
							<p class="resource-list__item--preview">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
								euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
								minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
								aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor in hendrerit in
							</p>
						</div>
						<div class="resource-list__item">
							<img class="resource-list__item--img" src={ResourceBg} alt="" />
							<span class="resource-list__item--title">Some title</span>
							<div class="resource-list__item--divider" />
							<p class="resource-list__item--preview">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
								euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
								minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
								aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor in hendrerit in
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-50">
				<ContactForm />
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.left-container {
		min-width: 470px;
		max-width: 470px;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		.bg-image {
			position: absolute;
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
				mix-blend-mode: multiply;
			}
		}
		.message {
			margin-top: auto;
			margin-bottom: 2rem;
			z-index: 2;

			h1 {
				font-size: 3rem;
				line-height: 1.1;
				margin-bottom: 1rem;
			}
		}
	}
	.right-container {
		height: 100vh;
		display: flex;

		.resources-container {
			display: flex;
			flex-direction: column;
			height: 100%;
			padding: 2rem;
			.resource-list {
				display: block;
				flex-grow: 1;
				//overflow-y: scroll;
				&__item {
					display: flex;
					flex-direction: column;
					&--img {
						height: 180px;
						background-color: var(--theme-orange);
						border: none;
					}
					&--title {
						margin-top: 1rem;
						margin-bottom: 1rem;
						text-transform: uppercase;
						font-weight: 900;
					}
					&--divider {
						width: 100%;
						height: 1px;
						background-color: var(--theme-orange);
					}
				}
			}
		}
	}
</style>
