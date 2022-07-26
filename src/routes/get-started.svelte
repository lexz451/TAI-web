<script context="module">
	export async function load() {
		const { default: faq } = await import('$lib/data/faq.json');
		const { default: roles } = await import('$lib/data/roles.json');
		return {
			props: {
				faq,
				roles
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
	import { OverlayGradient } from '$lib/utils/theme';

	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import { Accordion, AccordionItem } from 'svelte-collapsible';

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
									{#if item.icon == 'by-stander.png'}
										<img class="" width="100" src="$lib/assets/icons/by-stander.png" alt="" />
									{:else if item.icon == 'contributor.png'}
										<img class="" width="100" src="$lib/assets/icons/contributor.png" alt="" />
									{:else if item.icon == 'recommender.png'}
										<img class="" width="100" src="$lib/assets/icons/recommender.png" alt="" />
									{:else if item.icon == 'the-center.png'}
										<img class="" width="100" src="$lib/assets/icons/the-center.png" alt="" />
									{/if}
									<span class="text-h4 font-bold mt-4">{item.name}</span>
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
						<span class="text-green text-h5 font-light">"{selectedRole?.resume}"</span>
						<span class="d-block text-dark font-bold mt-4">
							Level of community participation: <strong class="ml-1 text-bold text-dark">X</strong>
						</span>
						<span class="d-block text-dark font-bold mt-1">
							Level of decision-making power shared: <strong class="ml-1 text-bold text-dark"
								>X</strong
							>
						</span>
						<p class="mt-4 text-dark font-regular">
							Most often, those impacted by strategic decisions are informed after the fact. They
							understand what will happen going forward, but have little recourse to shape or change
							what’s to come.
						</p>
						<div class="mt-5">
							<span class="text-uppercase">Links to further resources</span>
							<div class="divider-green" />
							<div class="d-flex align-center">
								<div class="d-flex flex-column align-center mr-4">
									<VideoIcon width="24" height="24" />
									<span class="text-small text-uppercase mt-2">Video</span>
								</div>
								<div class="d-flex flex-column align-center mr-4">
									<MicIcon width="24" height="24" />
									<span class="text-small text-uppercase mt-2">Podcast</span>
								</div>
								<div class="d-flex flex-column align-center">
									<DocIcon width="18" height="24" />
									<span class="text-small text-uppercase mt-2">PDF</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<IntersectionObserver let:top>
		<section id="section-2" class="section bg-blue">
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
							If you want your community to be The Center,
							<strong class="font-bold">learn with us</strong>
						</h1>
						<a class="btn btn-outline-green mr-auto" href="/case-study"> Read case studies </a>
					</div>
				{/if}

				<div class="inner-container">
					<div class="inner-left bg-white p-5">
						<div class="faq-container">
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
											{item.answer}
										</p>
									</AccordionItem>
								{/each}
							</Accordion>
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
