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
			<div class="fixed-container">
				<div class="inner-container">
					<div class="brand-circles">
						<div class="brand-circle bg-white p-4">
							<img
								class="inner_image"
								src="$lib/assets/images/brands/frida.png"
								alt="Frida Feminist Fund"
							/>
						</div>
						<div class="brand-circle bg-white p-4">
							<img
								class="inner_image"
								src="$lib/assets/images/brands/mamacash.png"
								alt="Mama Cash"
							/>
						</div>
						<div class="brand-circle">
							<img src="$lib/assets/images/brands/empty.png" alt="Empty circle" />
						</div>
						<div class="brand-circle">
							<img src="$lib/assets/images/brands/dashed.png" alt="Dashed circle" />
						</div>
						<div class="brand-circle">
							<img src="$lib/assets/images/brands/placeholder.png" alt="Placeholder circle" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style lang="scss">
	#brands-section {
		opacity: 0;
		height: 120vh;
		&.visible {
			opacity: 1;
		}
		.brand-circles {
			position: relative;
			width: 100%;
			min-height: 100vh;
		}
		.brand-circles .brand-circle {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			overflow: hidden;
			display: flex;
		}
		.brand-circles .brand-circle img {
			image-rendering: optimizeQuality;
		}
		.brand-circles .brand-circle img.inner_image {
			width: 90%;
			height: 90%;
			margin: auto;
			object-fit: contain;
		}
		.brand-circles .brand-circle:nth-child(1) {
			position: absolute;
			right: 25%;
			top: 10%;
		}
		.brand-circles .brand-circle:nth-child(2) {
			position: absolute;
			right: 15%;
			bottom: 20%;
		}
		.brand-circles .brand-circle:nth-child(3) {
			position: absolute;
			left: 10%;
			top: 20%;
		}
		.brand-circles .brand-circle:nth-child(4) {
			position: absolute;
			left: 10%;
			bottom: 15%;
		}
		.brand-circles .brand-circle:nth-child(5) {
			position: absolute;
			right: 45%;
			bottom: 40%;
		}
	}
</style>
