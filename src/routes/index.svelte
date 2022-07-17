<script>
	// @ts-nocheck

	import HomeBg from '$lib/assets/images/home.jpg?webp';
	import Testimonial1 from '$lib/assets/images/testimonial/testimonial1.png?webp';
	import Testimonial2 from '$lib/assets/images/testimonial/testimonial2.png?webp';
	import Testimonial3 from '$lib/assets/images/testimonial/testimonial3.png?webp';
	import BrandImage1 from '$lib/assets/images/brands/g1664.png?webp';
	import BrandImage2 from '$lib/assets/images/brands/g1739.png?webp';
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative</title>
</svelte:head>

<div class="home">
	<section class="home__welcome">
		<img class="home__welcome--bg" src={HomeBg} alt="" />
	</section>
	<section class="home__testimonial">
		<div class="left__lane" />
		<div class="right__lane">
			<div class="testimonial">
				<img class="testimonial__img" src={Testimonial1} alt="" />
			</div>
			<div class="testimonial">
				<img class="testimonial__img" src={Testimonial2} alt="" />
			</div>
			<div class="testimonial">
				<img class="testimonial__img" src={Testimonial3} alt="" />
			</div>
		</div>
	</section>
	<section class="home__brands">
		<div class="left__lane" />
		<div class="right__lane">
			<div class="brands">
				<div class="brands__item" />
				<div class="brands__item">
					<img class="brands__item--img" alt="" src={BrandImage1} />
				</div>
				<div class="brands__item" />
				<div class="brands__item" />
				<div class="brands__item">
					<img class="brands__item--img" alt="" src={BrandImage2} />
				</div>
			</div>
		</div>
	</section>
	<section class="home__about">
		<div class="left__lane" />
		<div class="right__lane" />
	</section>
</div>

<style lang="scss">
	.home {
		width: 100%;
		&__welcome {
			height: 100vh;
			&--bg {
				object-fit: cover;
				object-position: center;
				width: 100%;
				height: 100%;
			}
		}

		&__testimonial {
			.testimonial {
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 2rem;
				min-height: 100vh;
			}
		}

		&__brands {
			background-color: var(--theme-blue);
			.brands {
				position: relative;
				width: 100%;
				height: 100%;
				&__item {
					border-radius: 50%;
					width: 200px;
					height: 200px;
					background-color: #fafafa;
					display: flex;
					align-items: center;

					&--img {
						max-width: 85%;
						margin: auto;
					}

					&:nth-child(1) {
						position: absolute;
						top: 15%;
						left: 5%;
						background-image: url('../lib/assets/images/brands/path1197.png');
						background-repeat: no-repeat;
						background-size: contain;
						background-color: transparent;
					}
					&:nth-child(2) {
						position: absolute;
						top: 5%;
						right: 15%;
					}
					&:nth-child(3) {
						position: absolute;
						top: 40%;
						left: 33%;
						background-image: url('../lib/assets/images/brands/path1761.png');
						background-repeat: no-repeat;
						background-size: contain;
						background-color: transparent;
					}
					&:nth-child(4) {
						position: absolute;
						bottom: 5%;
						left: 4%;
						background-image: url('../lib/assets/images/brands/path1252.png');
						background-repeat: no-repeat;
						background-size: contain;
						background-color: transparent;
					}
					&:nth-child(5) {
						position: absolute;
						bottom: 12%;
						right: 5%;
					}
				}
			}
		}

		&__about {
			background-color: var(--theme-blue);
			.about-form {
				height: 100%;
				display: flex;
				&__left {
					width: 50%;
					background-color: #e79e6aff;
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					&--bg {
						object-fit: cover;
						position: absolute;
						top: 0;
						left: 0;
						height: 100%;
						width: 100%;
					}
				}
				&__right {
					width: 50%;
					background-color: #f6f6f6;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 2rem;

					&--form {
						width: 100%;
						display: flex;
						flex-direction: column;

						input,
						textarea {
							appearance: none;
							border: none;
							margin-bottom: 0.5rem;
							background-color: #90dbc2;
							border-radius: 5px;
							padding: 0.65rem 1rem;
							font-style: italic;
							&::placeholder {
								color: #212121;
								font-weight: 300;
								font-size: 16px;
								font-family: 'Lato';
							}
						}
					}
				}
			}
		}

		> section {
			min-height: 100vh;
			display: flex;
			align-items: stretch;

			img {
				max-width: 100%;
				height: auto;
			}

			.right__lane {
				width: 64%;
			}
			.left__lane {
				width: 36%;
			}

			.call-to-action {
				z-index: 1;
				padding: 2rem;
				display: flex;
				flex-direction: column;
				h3 {
					color: #fafafa;
					line-height: 1.1;
					font-weight: 400;
					font-size: 2rem;
				}
			}
		}
	}
</style>
