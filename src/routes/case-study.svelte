<script lang="ts">
	import DarkOverlayImg from '$lib/assets/images/background/overlay-1.png';
	import GreenOverlayImg from '$lib/assets/images/background/overlay-green.png';
	import LeftBgImg from '$lib/assets/images/background/hands.png';
	import InnerLeftBgImg from '$lib/assets/images/background/natives.png';
	//import InnerLeftBgImgOverlay from '$lib/assets/images/background/overlay-1.png';

	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="case-study-page page">
	<IntersectionObserver let:top>
		<section id="section-1" class="content-split-container section z-1 bg-theme-blue">
			<div class="left-background" style="background-image: url({LeftBgImg});">
				<div class="overlay" style="background-image: url({DarkOverlayImg});" />
			</div>
			<div class="left-container" transition:fade={{ duration: 200, delay: 0 }}>
				<h1 class="text-theme-green fw-light">
					If your community is already at The Center of your decision-making, <strong
						class="fw-bold">collaborate with us</strong
					>
				</h1>
				<button class="btn btn-outline-green mr-auto"> Submit a case study </button>
			</div>
			<div class="inner">
				<div class="study-cases-container bg-white">
					<div class="heading">
						<div class="heading-left">
							<h1 class="text-left mb-2 text-theme-orange text-center text-uppercase">
								Study cases
							</h1>
							<span class="text-uppercase fw-bold"
								>Learn from others, <br /> develop your own views</span
							>
						</div>
						<div class="heading-right">
							<p>
								Globally distributed organizations and networks utilize participatory strategy to
								determine their five to ten year strategies.
							</p>
							<p>
								Learn how they designed the process, made key decisions, and ratified the final
								strategy. Listen to how they tackled common challenges, such as who to include and
								how to prepare.
							</p>
						</div>
					</div>
					<div class="content">
						<div class="study-case-item">
							<div class="left-content">
								<div class="overlay" />
								<img class="image" src="$lib/assets/images/background/study-case.png" alt="" />
								<h3 class="title">Study case #1</h3>
								<button class="btn btn-orange btn-sm">Contact</button>
							</div>
							<div class="right-content">
								<span class="text-uppercase">Details</span>
								<p class="text-gray mt-2">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
									minim veniam,
								</p>
								<div class="actions mt-auto">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										Video
									</a>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										PDF
									</a>
								</div>
							</div>
						</div>
						<div class="study-case-item">
							<div class="left-content">
								<div class="overlay" />
								<img class="image" src="$lib/assets/images/background/study-case.png" alt="" />
								<h3 class="title">Study case #1</h3>
								<button class="btn btn-orange btn-sm">Contact</button>
							</div>
							<div class="right-content">
								<span class="text-uppercase">Details</span>
								<p class="text-gray mt-2">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
									minim veniam,
								</p>
								<div class="actions mt-auto">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										Video
									</a>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										PDF
									</a>
								</div>
							</div>
						</div>
						<div class="study-case-item">
							<div class="left-content">
								<div class="overlay" />
								<img class="image" src="$lib/assets/images/background/study-case.png" alt="" />
								<h3 class="title">Study case #1</h3>
								<button class="btn btn-orange btn-sm">Contact</button>
							</div>
							<div class="right-content">
								<span class="text-uppercase">Details</span>
								<p class="text-gray mt-2">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
									minim veniam,
								</p>
								<div class="actions mt-auto">
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										Video
									</a>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<a href="#">
										<img width="18" height="18" src="$lib/assets/icons/link.png" alt="" />
										PDF
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:top>
		<section id="section-2" class="content-split-container section z-2 bg-theme-blue">
			<div class="left-background" style="background-image: url({LeftBgImg});">
				<div class="overlay" style="background-image: url({DarkOverlayImg});" />
			</div>
			{#if top < 200}
				<div class="left-container" transition:fade={{ duration: 200 }}>
					<h1 class="text-theme-green fw-light">
						Ready to shift power on your strategic decisions?
					</h1>
					<button class="btn btn-green mr-auto">Get started </button>
				</div>
			{/if}
			<div class="inner">
				<div class="inner-left" style="background-image: url({InnerLeftBgImg});">
					<!-- <div class="overlay" style="background-image: url({GreenOverlayImg});" /> -->
					<div class="overlay" style="background-image: url({DarkOverlayImg});" />
					<div class="overlay" style="background-image: url({DarkOverlayImg});" />

					<div class="content">
						<h1 class="text-white">Go further!</h1>
						<button class="btn btn-outline-light mr-auto"> Resources </button>
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
	#section-1 {
		.study-cases-container {
			.heading {
				padding: 4rem;
				display: flex;
				justify-content: space-between;
				&-left {
					width: 50%;
				}
				&-right {
					width: 50%;
				}
			}

			.content {
				display: flex;
				flex-direction: column;
				.study-case-item {
					margin-top: 5px;
					height: 250px;
					display: flex;
					.left-content {
						position: relative;
						width: 50%;
						.overlay {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-color: rgba(#051231, 0.6);
							z-index: 1;
						}
						.image {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
						.title {
							position: absolute;
							z-index: 1;
							left: 3rem;
							top: 0.5rem;
							text-transform: uppercase;
							color: var(--theme-green);
						}
						.btn {
							position: absolute;
							z-index: 1;
							bottom: 2rem;
							left: 3rem;
						}
					}
					.right-content {
						background-color: #f6f6f6;
						padding: 2rem;
						width: 50%;
						display: flex;
						flex-direction: column;
						.actions {
							display: flex;
							align-items: center;
						}
						.actions a {
							text-decoration: none;
							text-transform: uppercase;
							color: var(--theme-blue);
							display: flex;
							align-items: center;
							margin-right: 2rem;
							img {
								margin-right: 0.5rem;
							}
						}
					}
				}
			}
		}
	}
	#section-2 {
		.inner {
			height: 100vh;
		}
		.inner .inner-left {
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			background-size: cover;
			background-repeat: no-repeat;
			background-position-x: -118px;
			position: relative;
			.content {
				z-index: 1;
				padding: 4rem;
			}
			.overlay {
				position: absolute;
				width: 100%;
				height: 100%;
				mix-blend-mode: multiply;
			}
		}
	}
</style>
