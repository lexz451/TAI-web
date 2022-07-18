<script context="module">
	export const autoscroll = false;
</script>

<script>
	import LeftBgImg from '$lib/assets/images/background/people.png';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade } from 'svelte/transition';
	import { Accordion, AccordionItem } from 'svelte-collapsible';

	let selectedAreThey = 0;
	let selectedFaqItem = 1;

	let faq_items = [
		{
			key: 1,
			title: 'Lorem ipsum #1',
			message:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '
		},
		{
			key: 2,
			title: 'Lorem ipsum #2',
			message:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '
		},
		{
			key: 3,
			title: 'Lorem ipsum #3',
			message:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '
		},
		{
			key: 4,
			title: 'Lorem ipsum #4',
			message:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '
		},
		{
			key: 5,
			title: 'Lorem ipsum #5',
			message:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '
		}
	];
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative | Get Started</title>
</svelte:head>

<div class="get-started-page page">
	<section id="section-1" class="content-split-container section bg-theme-blue z-1">
		<div class="left-background" style="background-image: url({LeftBgImg});" />
		<div class="left-container">
			<h1 class="text-white fw-light">
				What <strong class="fw-bold">role</strong> do you
				<strong class="fw-bold">communities</strong> play in your strategy process today?
			</h1>
			<button class="btn btn-outline-green mr-auto"> Read case studies </button>
		</div>
		<div class="inner">
			<div class="inner-left">
				<div class="are-they-selector">
					<h1 class="text-center text-white mb-15">Are they...</h1>
					<div class="are-they-items">
						<div class="are-they-item" class:selected={selectedAreThey == 0}>
							<img src="$lib/assets/icons/by-stander.png" alt="" />
							<span>A by-stander</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/contributor.png" alt="" />
							<span>A Contributor</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/recommender.png" alt="" />
							<span>A Recommender</span>
						</div>
						<div class="are-they-item">
							<img src="$lib/assets/icons/the-center.png" alt="" />
							<span>The Center</span>
						</div>
					</div>
				</div>
			</div>
			<div class="inner-right">
				<div class="are-they-description">
					<div class="heading">
						<h3 class="text-center text-uppercase mb-0">A by-stander</h3>
						<img src="$lib/assets/icons/by-stander-green.png" alt="" />
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
					<div class="faq-container">
						<h1 class="text-center mb-15">Frequently Asked Questions</h1>
						<Accordion bind:key={selectedFaqItem}>
							{#each faq_items as item}
								<AccordionItem key={item.key}>
									<div slot="header" class="faq-item-header">
										<span class="fw-bold mr-auto">{item.title}</span>
										<img width="18" height="10" src="$lib/assets/icons/arrow-down-alt.png" alt="" />
									</div>
									<p slot="body" class="faq-item-body">
										{item.message}
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
		.are-they-selector {
			color: #fafafa;
			display: flex;
			flex-direction: column;
			.are-they-items {
				flex-grow: 1;
			}
			.are-they-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 2rem;
				&.selected {
					color: var(--theme-green);
				}
			}
			.are-they-item img {
				width: 90px;
				margin-bottom: 0.5rem;
			}
			.are-they-item span {
				margin-top: 0.5rem;
				font-size: 1.5rem;
				text-transform: uppercase;
				font-weight: 900;
			}
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
	}

	#section-2 {
		.faq-container {
			display: flex;
			flex-direction: column;
			height: 100%;
			:global(.accordion) {
				width: 100%;
				margin: 0 auto;
			}
			:global(.accordion-item[aria-expanded='true'] .faq-item-header) {
				color: var(--theme-green);
			}
			.faq-item-header {
				display: flex;
				align-items: center;
				margin-bottom: 1rem;
			}
			.faq-item-body {
				margin-top: 0;
				margin-bottom: 1rem;
				color: #666;
			}
		}
	}
</style>
