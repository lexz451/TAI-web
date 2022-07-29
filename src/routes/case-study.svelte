<script context="module" lang="ts">
	/**
	 * Load case-study items
	 */
	export async function load({ fetch }: { fetch: any }) {
		const API_URL = import.meta.env.VITE_API_URL;
		const params = new URLSearchParams({
			populate: '*'
		});
		const url = `${API_URL}/api/mc-casestudies?${params.toString()}`;

		const res = await fetch(url);
		const { data: studies } = await res.json();

		return {
			props: {
				studies
			}
		};
	}
</script>

<script lang="ts">
	import LeftBgImg from '$lib/assets/images/background/hands.jpg';
	import LeftBgImg2 from '$lib/assets/images/background/people.jpg';
	import { OverlayGradient } from '$lib/utils/theme';
	import InnerLeftBgImg from '$lib/assets/images/background/ancient.jpg';

	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import Image from '$lib/components/Image.svelte';

	export let studies: any[];
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Case Study</title>
</svelte:head>

<div class="case-study-page page">
	<section id="section-1" class="section bg-blue">
		<div class="content-split-container">
			<div
				class="inner-fixed-background"
				style:background-image="{OverlayGradient}, url({LeftBgImg})"
			/>
			<div
				class="inner-fixed-container d-flex flex-column p-5"
				transition:fade={{ duration: 200, delay: 0 }}
			>
				<h1 class="text-green text-h1 mt-auto">
					Discover how participatory strategy works in practice
				</h1>
				<a href="/get-started#faq" class="btn btn-outline-green mr-auto" style="text-transform: none;"> READ THE FAQs </a>
			</div>
			<div class="inner-container">
				<div class="study-cases-container bg-white">
					<div class="heading">
						<div class="heading-left">
							<h1 class="text-left mb-2 text-orange text-uppercase">Case Studies</h1>
							<span class="text-uppercase font-bold"
								>Learn from others, <br /> develop your own views</span
							>
						</div>
						<div class="heading-right">
							<p class="text-dark">
								Globally distributed organizations and networks utilize participatory strategy to
								determine their five to ten year strategies.
							</p>
							<p class="text-dark">
								Learn how they designed the process, made key decisions, and ratified the final
								strategy. Listen to how they tackled common challenges, such as who to include and
								how to prepare.
							</p>
						</div>
					</div>
					<div class="content">
						{#each studies as item}
							<div class="study-case-item">
								<div class="left-content">
									<div class="overlay" />
									<!-- <img class="image" src={item?.image?.url} alt="" /> -->
									<Image width image={item.image} classes="image" />
									<h3 class="title text-h3">{item?.name}</h3>
									<a href={item?.contact_url} class="btn btn-orange btn-small text-light">Contact</a
									>
								</div>
								<div class="right-content">
									<span class="text-uppercase font-bold">Details</span>
									<p class="mt-2">
										{item?.details}
									</p>
									<div class="actions mt-auto">
										{#each item.links as link}
											<a href={link.href} class="font-light">
												<img width="16" height="16" src="$lib/assets/icons/link.png" alt="" />
												{#if link.type == 'video'}
													VIDEO
												{:else if link.type == 'pdf'}
													PDF
												{/if}
											</a>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>
	<IntersectionObserver let:top>
		<section id="section-2" class="section bg-blue">
			<div class="content-split-container">
				<div
					class="inner-fixed-background"
					style:background-image="{OverlayGradient}, url({LeftBgImg2})"
				/>
				{#if top < 200}
					<div
						class="inner-fixed-container d-flex flex-column p-5"
						transition:fade={{ duration: 200 }}
					>
						<h1 class="text-green text-h1 mt-auto">
							Ready to shift power on your strategic decisions?
						</h1>
						<a class="btn btn-green mr-auto" href="/get-started">Get started </a>
					</div>
				{/if}
				<div class="inner-container">
					<div
						class="inner-left d-flex flex-column p-5"
						style="background-image: {OverlayGradient}, url({InnerLeftBgImg});"
					>
						<!-- <div class="overlay" style="background-image: url({GreenOverlayImg});" /> -->
						<div class="background-overlay" />
						<!-- <div class="overlay" style="background-image: url({DarkOverlayImg});" /> -->

						<div class="content mt-auto d-flex flex-column">
							<h1 class="text-light text-h1">Go further!</h1>
							<a class="btn btn-outline-light mr-auto" href="/resources"> Resources </a>
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

<style lang="scss" scoped>
	.inner-container .inner-left {
		background-position: top;
		background-size: cover;
	}
	.study-cases-container {
		.heading {
			padding: 3rem;
			display: flex;
			justify-content: space-between;
			position: relative;
			&-left {
				width: 35vw;
			}
			&-right {
				width: calc(100% - 30vw);
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			.study-case-item {
				margin-bottom: 5px;
				height: 250px;
				display: flex;
				.left-content {
					position: relative;
					width: 35vw;
					.overlay {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-color: rgba(#051231, 0.6);
						z-index: 1;
					}
					:global(.image) {
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
					width: calc(100% - 35vw + 2rem);
					display: flex;
					flex-direction: column;

					p {
						color: #666;
					}
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
</style>
