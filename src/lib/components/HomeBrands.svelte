<script>
	import { fade } from 'svelte/transition';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import LeftBgImg from '$lib/assets/images/background/hands.jpg';
	import { OverlayGradient } from '$lib/utils/theme';
</script>

<IntersectionObserver let:intersecting let:top>
	<section
		id="brands-section"
		class:visible={intersecting}
		class="section bg-blue z-1"
		data-section="3"
	>
		<div class="content-split-container">
			<div
				class="inner-fixed-background"
				style="background-image: {OverlayGradient}, url({LeftBgImg});"
			/>
			{#if top < 200}
				<div
					class="inner-fixed-container d-flex flex-column p-5"
					transition:fade={{ duration: 200, delay: 0 }}
				>
					<h1 class="text-h1 text-green mr-auto mb-2 mt-auto">Who does participatory strategy?</h1>
					<p class="text-white">
						El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera
						para permitir la presentación de elementos gráficos en documentos, sin necesidad de una
						copia formal.
					</p>
					<a href="/case-study" class="btn btn-outline-green mr-auto mt-3">Read case studies</a>
				</div>
			{/if}
			<div class="inner-container">
				<div class="brand-circles">
					<img class="brand-circle" src="$lib/assets/images/brand/apc.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/care.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/femnet.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/flower.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/frida.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/porposeful.png" alt="">
					<img class="brand-circle" src="$lib/assets/images/brand/wikimedia.png" alt="">
				</div>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style lang="scss">
	#brands-section {
		opacity: 0;
		height: 150vh;
		&.visible {
			opacity: 1;
		}
		.brand-circles {
			position: relative;
			width: 100%;
			min-height: 150vh;
		}
		.brand-circles .brand-circle {
			width: 240px;
			height: 240px;
			border-radius: 50%;
			overflow: hidden;
			display: flex;
			object-position: center;
			object-fit: contain;
		}
		.brand-circles .brand-circle {
			image-rendering: optimizeQuality;
		}
		
		// WIKIMEDIA
		.brand-circles .brand-circle:nth-child(7) {
			position: absolute;
			left: 40%;
			bottom: 50%;
		}
		// PORPOSEFUL
		.brand-circles .brand-circle:nth-child(6) {
			position: absolute;
			right: 10%;
			bottom: 35%;
		}
		// FLOWER
		.brand-circles .brand-circle:nth-child(4) {
			position: absolute;
			right: 20%;
			bottom: 10%;
		}
		// CARE
		.brand-circles .brand-circle:nth-child(2) {
			position: absolute;
			left: 10%;
			bottom: 35%;
		}
		//FEMNET
		.brand-circles .brand-circle:nth-child(3) {
			position: absolute;
			left: 10%;
			top: 16%;
			//display: none;
		}
		
		// FRIDA
		.brand-circles .brand-circle:nth-child(5) {
			position: absolute;
			top: 10%;
			right: 20%;
		}
		
		// APC	
		.brand-circles .brand-circle:nth-child(1) {
			position: absolute;
			left: 18%;
			bottom: 5%;
		}
		
	}
</style>
