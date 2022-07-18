<script>
	import LeftBgImg from '$lib/assets/images/background/people.png';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';

	let selectedItem = 0;
</script>

<div class="get-started-page page">
	<IntersectionObserver let:top
		><section id="section-1" class="content-split-container section bg-theme-blue z-1">
			<div class="left-background" style="background-image: url({LeftBgImg});" />
			<div class="left-container" transition:fade={{ duration: 200 }}>
				<h1 class="text-white fw-light">
					What <strong class="fw-bold">role</strong> do you
					<strong class="fw-bold">communities</strong> play in your strategy process today?
				</h1>
				<button class="btn btn-outline-green mr-auto"> Read case studies </button>
			</div>
			<div class="inner">
				<div class="inner-left">
					<div class="are-they-selector">
						<h1 class="text-center mb-15">Are they...</h1>
						<div class="are-they-item">
							<img src="$lib/assets/icons/by-stander.png" alt="" />
							<span>A by-stander</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/by-stander.png" alt="" />
							<span>A Contributor</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/by-stander.png" alt="" />
							<span>A Recommender</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/by-stander.png" alt="" />
							<span>The Center</span>
						</div>
					</div>
				</div>
				<div class="inner-right">
					<div class="are-they-description">
						<div class="heading">
							<h3 class="text-center text-uppercase mb-0">A by-stander</h3>
							<img src="$lib/assets/icons/by-stander.png" alt="" />
						</div>
						<div class="divider" />
						<h3 class="text-theme-green">"I'm informed of the end result"</h3>
						<div class="characteristics">
							<div class="characteristics-item">
								<span>Level of community participation:</span> <strong>None</strong>
							</div>
							<div class="characteristics-item">
								<span>Level of decision-making power shared:</span> <strong>None</strong>
							</div>
						</div>
						<div class="description">
							Most often, those impacted by strategic decisions are informed after the fact.
							<br />
							<br />
							They understand what will happen going forward, but have little recourse to shape or change
							what’s to come.
						</div>
					</div>
				</div>
			</div>
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:top>
		<section id="section-2" class="content-split-container section bg-theme-blue z-2">
			<div class="left-background" style="background-image: url({LeftBgImg});" />
			{#if top < 200}
				<div class="left-container" transition:fade={{ duration: 200, delay: 0 }}>
					<h1 class="text-white fw-light">
						If you want your community to be The Center,
						<strong class="fw-bold">learn with us</strong>
					</h1>
					<button class="btn btn-outline-green mr-auto"> Read case studies </button>
				</div>
			{/if}
			<div class="inner">
				<div class="inner-left bg-white">
					<div class="">
						<h1 class="text-center mb-15">Frequently Asked Questions</h1>
					</div>
				</div>
				<div class="inner-right">
					<ContactForm />
				</div>
			</div>
		</section>
	</IntersectionObserver>
</div>

<style lang="scss">
	.left-background {
		background-color: var(--theme-orange);
		background-position-x: 20px;
		background-position-y: -50px;
	}

	.inner {
		height: 100vh;
		.inner-right {
			background-color: #f6f6f6;
		}
	}
	#section-1 {
		.inner-right {
			padding: 4rem;
		}
		.are-they-description {
			.heading {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
				h3 {
					font-size: 1.5rem;
				}
				img {
					max-width: 100px;
				}
			}

			.divider {
				width: 100%;
				height: 1px;
				background-color: var(--theme-green);
				margin-top: 1rem;
				margin-bottom: 1rem;
			}
			.characteristics {
				.characteristics-item {
					display: flex;
					font-size: 14px;
					justify-content: space-between;
					margin-bottom: 0.25rem;
				}
			}

			.description {
				margin-top: 2rem;
				color: #666;
			}
		}
		.are-they-selector {
			color: #fafafa;
			.are-they-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 2rem;
			}
			.are-they-item img {
				width: 140px;
			}
			.are-they-item span {
				margin-top: 0.5rem;
				font-size: 1.5rem;
				text-transform: uppercase;
			}
		}
	}

	#section-2 {
	}
</style>
