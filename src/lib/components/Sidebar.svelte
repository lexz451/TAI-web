<script>
	import IconMenu from '$lib/assets/icons/menu.png';
	import IconArrow from '$lib/assets/icons/arrow-down.png';
	import { page } from '$app/stores';
	import { beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let isOpen = false;

	/**
	 * @type {number | null | undefined}
	 */
	let scrollY;

	const toggleSidebar = () => (isOpen = !isOpen);

	beforeNavigate(() => {
		isOpen = false;
	});

	const showScroller = () => scrollY == 0;
</script>

<svelte:window bind:scrollY />

<div class="sidebar" class:open={isOpen}>
	<div class="sidebar__inner">
		{#if true}
			<span class="sidebar__toggler" transition:fade={{ duration: 200 }}>
				<img on:click={toggleSidebar} src={IconMenu} alt="" />
			</span>

			<ul class="sidebar__menu">
				<li class="sidebar__menu--item" class:active={$page.url.pathname == '/'}>
					<a href="/">Home</a>
				</li>
				<li class="sidebar__menu--item" class:active={$page.url.pathname.includes('/get-started')}>
					<a href="/get-started">Get started</a>
				</li>
				<li class="sidebar__menu--item" class:active={$page.url.pathname.includes('/case-study')}>
					<a href="/case-study">Case study</a>
				</li>
				<li class="sidebar__menu--item" class:active={$page.url.pathname.includes('/resources')}>
					<a href="resources">Resources</a>
				</li>
			</ul>
		{/if}

		{#if scrollY == 0}
			<div class="sidebar__scroller mt-auto" transition:fade={{ duration: 200 }}>
				<h4 class="text-theme-orange">Learn More</h4>
				<img src={IconArrow} alt="" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.sidebar {
		background-color: var(--theme-blue);
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 120px;
		box-shadow: 0 0 10px 10px rgba($color: #000000, $alpha: 0.1);
		display: block;
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
		z-index: 11;
		transition: width 0.35s cubic-bezier(0.075, 0.82, 0.165, 1);
		&.open {
			width: 250px;

			.sidebar__menu {
				opacity: 1;
			}
		}

		&__inner {
			display: flex;
			flex-direction: column;
			//align-items: center;
			//width: calc(48px + 2rem);
			padding: 1rem;
			margin: auto;
			height: 100%;
		}

		&__menu {
			opacity: 0;
			transition: all 0.15s ease-in;
			list-style: none;
			padding: 0;
			margin: 0;
			margin-top: 4rem;
			margin-left: 1.2rem;
			&--item {
				margin-bottom: 1.5rem;
				a {
					font-size: 1rem;
					text-decoration: none;
					font-weight: 700;
					color: #fafafa;
					text-transform: uppercase;
					white-space: nowrap;
				}
				&.active a {
					color: var(--theme-green);
				}
			}
		}

		&__toggler {
			max-width: 48px;
			margin-top: 0.4rem;
			cursor: pointer;
			margin-right: auto;
			margin-left: 1.2rem;
			img {
				width: 100%;
			}
			&:active {
				transition: all 0.1s;
				//ransform: scale(1.05);
			}
		}

		&__scroller {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h4 {
				font-size: 20px;
				font-weight: 900;
				line-height: 1;
				margin-bottom: 1rem;
				text-align: center;
				text-transform: uppercase;
			}
			img {
				width: 32px;
				height: auto;
				image-rendering: optimizeQuality;
			}
		}
	}
</style>
