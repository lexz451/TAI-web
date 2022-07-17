<script>
	import ContactForm from '$lib/components/ContactForm.svelte';

	import LeftBgImage from '$lib/assets/images/background/g101.png';
	import ByStanderIcon from '$lib/assets/icons/by-stander.png';
	import ContributorIcon from '$lib/assets/icons/contributor.png';
	import RecommenderIcon from '$lib/assets/icons/recommender.png';
	import TheCenterIcon from '$lib/assets/icons/the-center.png';
</script>

<div class="get-started-page page">
	<div class="left-fixed-container">
		<div class="bg-image">
			<img src={LeftBgImage} alt="" />
			<!-- <img src={LeftBgImageOverlay1} alt="" /> -->
			<!-- <img src={LeftBgImageOverlay2} alt="" /> -->
			<!-- <img src={LeftBgImageOverlay3} alt="" /> -->
		</div>
	</div>
	<section class="flex-row h-100">
		<div class="left-container">
			<div class="bg-image">
				<!-- <img src={LeftBgImage} alt="" /> -->
				<!-- <img src={LeftBgImageOverlay1} alt="" /> -->
				<!-- <img src={LeftBgImageOverlay2} alt="" /> -->
				<!-- <img src={LeftBgImageOverlay3} alt="" /> -->
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
				<div class="are-they-selector">
					<h1 class="fw-black">Are they...</h1>
					<div class="are-they-items">
						<div class="are-they-item">
							<img src={ByStanderIcon} width="100" alt="By stander" />
							<span class="text-uppercase">A by-stander</span>
						</div>
						<div class="are-they-item">
							<img src={ByStanderIcon} width="100" alt="By stander" />
							<span class="text-uppercase">A by-stander</span>
						</div>
						<div class="are-they-item">
							<img src={ByStanderIcon} width="100" alt="By stander" />
							<span class="text-uppercase">A by-stander</span>
						</div>
						<div class="are-they-item">
							<img src={ByStanderIcon} width="100" alt="By stander" />
							<span class="text-uppercase">A by-stander</span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-50">
				<div class="are-they-explainer" />
			</div>
		</div>
	</section>
	<section class="flex-row h-100">
		<div class="left-container">
			<div class="bg-image">
				<!-- <img src={LeftBgImage} alt="" /> -->
				<!-- <img src={LeftBgImageOverlay1} alt="" />
				<img src={LeftBgImageOverlay2} alt="" />
				<img src={LeftBgImageOverlay3} alt="" /> -->
			</div>
			<div class="message p-5">
				<h1 class="text-light fw-thin m-0">
					For each resource, have contact information for people to <strong>learn more</strong>
				</h1>
				<button class="btn btn-green mt-5"> FAQ </button>
			</div>
		</div>
		<div class="right-container">
			<div class="w-50" />
			<div class="w-50">
				<ContactForm />
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.get-started-page {
		section {
			height: 100vh;
		}
	}
	.left-fixed-container {
		position: fixed;
		width: 470px;
	}
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
		width: 100%;
		.are-they-selector {
			height: 100%;
			background-color: var(--theme-blue);
			color: #fafafa;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 2rem;
			.are-they-items {
				margin-top: 1rem;
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				.are-they-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					span {
						font-size: 24px;
						margin-top: 1rem;
					}
				}
			}
		}
	}
</style>
