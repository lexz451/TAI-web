<script context="module" lang="ts">
	/**
	 * Load FAQ items
	 */
	export async function load({ fetch }: { fetch: any }) {
		const API_URL = import.meta.env.VITE_API_URL;

		const getFAQ = async () => {
			const params = new URLSearchParams({
				populate: '*'
			});
			const url = `${API_URL}/api/mc-faqs?${params.toString()}`;
			const res = await fetch(url);
			return await res.json();
		};

		const getRoles = async () => {
			const params = new URLSearchParams({
				populate: '*'
			});
			const url = `${API_URL}/api/mc-roles?${params.toString()}`;
			const res = await fetch(url);
			return await res.json();
		};

		const [{ data: faq }, { data: roles }] = await Promise.all([getFAQ(), getRoles()]);

		//const { default: faq } = await import('$lib/data/faq.json');
		// const { default: roles } = await import('$lib/data/roles.json');
		return {
			props: {
				faq: faq || [],
				roles: roles || []
			}
		};
	}
</script>

<script lang="ts">
	import MicIcon from '$lib/assets/icons/mic.svg?component';
	import DocIcon from '$lib/assets/icons/doc.svg?component';
	import VideoIcon from '$lib/assets/icons/video.svg?component';
	import ArrowDownIcon from '$lib/assets/icons/arrow_down.svg?component';

	import LeftBgImg from '$lib/assets/images/background/people.jpg';
	import LeftBgImg2 from '$lib/assets/images/background/hands.jpg';
	import InnerLeftBgImg2 from '$lib/assets/images/background/ancient.jpg';

	import { OverlayGradient } from '$lib/utils/theme';

	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import { Accordion, AccordionItem } from 'svelte-collapsible';
	import Image from '$lib/components/Image.svelte';

	export let faq: any[];
	export let roles: any[];

	let selectedFaq = 1;
	let selectedRole = roles[0];
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Get Started</title>
</svelte:head>

<div class="page get-started-page">
	<section id="section-1" class="section bg-blue">
		<div class="content-split-container">
			<div
				class="inner-fixed-background bg-orange"
				style:background-image="{OverlayGradient}, url({LeftBgImg})"
			/>
			<div class="inner-fixed-container d-flex flex-column p-5">
				<h1 class="text-light text-h1 mt-auto">
					What <strong class="font-bold">role</strong> do you
					<strong class="font-bold">communities</strong> play in your strategy process today?
				</h1>
				<a class="btn btn-outline-green mr-auto" href="/case-study"> Read case studies </a>
			</div>
			<div class="inner-container bg-blue">
				<div class="inner-left p-5">
					<div class="d-flex flex-column h-100">
						<h1 class="text-center text-h1 text-light text-bold m-0 mb-4">Are they...</h1>
						<ul class="role-list flex-grow-1 d-flex flex-column align-center justify-center">
							{#each roles as item}
								<li
									class="role-item d-flex flex-column align-center justify-center mb-4 text-light"
									on:click={() => (selectedRole = item)}
									class:active={selectedRole?.id == item.id}
								>
									<Image classes="" width="100" image={item?.icon} />

									<span class="text-h4 font-bold text-uppercase mt-4">{item.name}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="inner-right p-5 bg-light">
					<div class="d-flex flex-column h-100">
						<div class="d-flex align-baseline justify-between">
							<h3 class="m-0 text-uppercase text-h4">{selectedRole?.name}</h3>
							<!-- <img width="100" src="$lib/assets/icons/by-stander-green.png" alt="" /> -->
						</div>
						<div class="divider-green" />
						<span class="text-green text-h5 font-light">"{selectedRole?.summary}"</span>
						<span class="d-block text-dark font-bold mt-4">
							Level of community participation: <strong class="ml-1 text-bold text-dark"
								>{selectedRole?.comunity_participation_score}</strong
							>
						</span>
						<span class="d-block text-dark font-bold mt-1">
							Level of decision-making power shared: <strong class="ml-1 text-bold text-dark"
								>{selectedRole?.decision_power_shared_score}</strong
							>
						</span>
						<p class="mt-4 text-dark font-regular">
							{selectedRole?.description}
						</p>
						<div class="mt-5">
							<span class="text-uppercase">Links to further resources</span>
							<div class="divider-green" />
							<div class="d-flex align-center">
								{#each selectedRole?.links as link}
									<a href={link.href} class="d-flex flex-column align-center mr-4">
										{#if link.type == 'video'}
											<VideoIcon width="24" height="24" />
											<span class="text-dark text-small text-uppercase mt-2">Video</span>
										{:else if link.type == 'pdf'}
											<DocIcon width="18" height="24" />
											<span class="text-dark text-small text-uppercase mt-2">PDF</span>
										{:else if link.type == 'podcast'}
											<MicIcon width="24" height="24" />
											<span class="text-dark text-small text-uppercase mt-2">Podcast</span>
										{/if}
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<IntersectionObserver let:top>
		<section id="faq" class="section bg-blue">
			<div class="content-split-container">
				<div
					class="inner-fixed-background bg-orange"
					style:background-image="{OverlayGradient}, url({LeftBgImg})"
				/>
				{#if top < 200}
					<div
						class="inner-fixed-container d-flex flex-column p-5"
						transition:fade={{ duration: 200, delay: 0 }}
					>
						<h1 class="text-white text-h1  mt-auto">
							Many share similar questions and concerns
							<!-- <strong class="font-bold">learn with us</strong> -->
						</h1>
						<a class="btn btn-outline-green mr-auto" href="/case-study"> Read case studies </a>
					</div>
				{/if}

				<div class="inner-container bg-white p-5">
					<div class="faq-container w-75">
						<h1 class="text-center text-h1 mb-5">Frequently Asked Questions</h1>
						<Accordion bind:key={selectedFaq}>
							{#each faq as item}
								<AccordionItem key={item.id} class="mb-2">
									<div
										slot="header"
										class="faq-item d-flex mb-2"
										class:active={item.id == selectedFaq}
									>
										<span class="font-bold mr-auto">{item.question}</span>
										<span class="arrow">
											<ArrowDownIcon width="18" />
										</span>
									</div>
									<p slot="body" class="mt-0 mb-2 text-dark">
										{item.response}
									</p>
								</AccordionItem>
							{/each}
						</Accordion>
					</div>
					<!-- <div class="inner-left bg-white p-5">
						
					</div> -->
					<!-- <div class="inner-right">
						<ContactForm />
					</div> -->
				</div>
			</div>
		</section>
	</IntersectionObserver>
	<IntersectionObserver let:top>
		<section id="section-3" class="section bg-blue">
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
						<h1 class="text-green text-h1 mt-auto w-75">How has it been done?</h1>
						<a class="btn btn-outline-green mr-auto" href="/case-study">Read Case Studies </a>
					</div>
				{/if}
				<div class="inner-container">
					<div
						class="inner-left d-flex flex-column p-5"
						style="background-image: {OverlayGradient}, url({InnerLeftBgImg2});"
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

<style lang="scss">
	.inner-container .inner-left {
		background-position: top;
		background-size: cover;
	}
	.role-list .role-item {
		cursor: pointer;
	}
	.role-list .role-item.active {
		color: var(--theme-green) !important;
		transition: color 0.2s ease;
	}

	.faq-container .faq-item {
		transition: color 0.2s ease;
		.arrow {
			transition: all 0.2s ease;
		}
	}
	.faq-container .faq-item.active {
		color: var(--theme-green) !important;
		.arrow {
			transform: rotate(180deg);
		}
	}

	:global(.accordion-item) {
		margin-bottom: 0.5rem;
	}
</style>
