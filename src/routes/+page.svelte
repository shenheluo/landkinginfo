<script lang="ts">
	import Header from './Components/Header.svelte';
	import Footer from './Components/Footer.svelte';
    import Fa from 'svelte-fa'
    import { faBuilding,faUserShield,faUserGroup,faStar } from '@fortawesome/free-solid-svg-icons'
	const innovation="ビジネスに新たな可能性を <br> 東京申和デジタル、あなたのイノベーションパートナー"

</script>

<Header />

<main>
	<!-- slider Area Start-->
	<div class="slider-area">
		<!-- Mobile Menu -->
		<div class="slider-active slick-initialized slick-slider">
			<div class="slick-list draggable">
				<div class="slick-track" style="opacity: 1; width: 100%;">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<div
						class="single-slider hero-overly slider-height d-flex align-items-center slick-slide slick-current slick-active"
						data-slick-index="0"
						aria-hidden="false"
						tabindex="0"
						style="width: 100%; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1; background-image: url('/h1_hero.jpg');">
						<div class="container">
							<div class="row">
								<div class="col-xl-9 col-lg-9 col-md-9">
									<div class="hero__caption">
										<h1>新たな<span>価値</span>を創造</h1>
										<p>デジタル技術で、会社に新たな価値をもたらす。</p>
									</div>
								</div>
							</div>
							<!-- Search Box -->
							<div class="row">
								<div class="col-xl-12">
									<!-- form -->
									<form action="#" class="search-box">
										<div class="search-form mb-30 custom-responsive">
											<a href="/contact" tabindex="0">お問い合わせ</a>
										</div>
									</form>
								</div>
							</div>
							<div class="row">
								<div class="col-xl-12">
									<h1 class="markdown" style="color: var(--warning);">40、50代技術者募集中</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- slider Area End-->
	<!-- Our Services Start -->
	<div class="our-services servic-padding">
		<div class="container">
			<div class="row d-flex justify-contnet-center">
				<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<div class="single-services text-center mb-30">
						<div class="services-ion">
							<Fa icon={faBuilding}  class="bg-gold"
							size="4x"
							color="#014b85"/>
						</div>
						<div class="services-cap">
							<h5>20+ 取引先企業</h5>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<div class="single-services text-center mb-30">
						<div class="services-ion">
							<Fa icon={faUserShield}  class="bg-gold"
							size="4x"
							color="#014b85"/>						
						</div>
						<div class="services-cap">
							<h5>100% 信頼関係</h5>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<div class="single-services text-center mb-30">
						<div class="services-ion">
							<Fa icon={faUserGroup}  class="bg-gold"
							size="4x"
							color="#014b85"/>	

						</div>
						<div class="services-cap">
							<h5>経験豊富な<br />技術者</h5>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
					<div class="single-services text-center mb-30">
						<div class="services-ion">
							<Fa icon={faStar}  class="bg-gold"
							size="4x"
							color="#014b85"/>
						</div>
						<div class="services-cap">
							<h5>98% 高い評価<br />受ける</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Our Services End -->
	<div
		class="testimonial-area testimonial-padding"
		style="background-image: url('/testimonial_bg.jpg');"
	>
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="col-xl-11 col-lg-11 col-md-9">
					<div class="h1-testimonial-active slick-initialized slick-slider">
						<!-- Single Testimonial -->
						<div class="slick-list draggable">
							<div
								class="slick-track"
								style="opacity: 1; width: 5350px; transform: translate3d(-1070px, 0px, 0px);"
							>
								<div
									class="single-testimonial text-center slick-slide slick-cloned"
									data-slick-index="-1"
									aria-hidden="true"
									tabindex="-1"
									style="width: 1070px;"
								>
									<!-- Testimonial Content -->
									<div class="testimonial-caption">
										<div class="testimonial-top-cap">
											<img src="/testimonial.png" alt="" />
											<p>
												{@html innovation}
											</p>
										</div>
									</div>
								</div>
								<div
									class="single-testimonial text-center slick-slide slick-current slick-active"
									data-slick-index="0"
									aria-hidden="false"
									style="width: 1070px;"
								>
									<!-- Testimonial Content -->
									<div class="testimonial-caption">
										<div class="testimonial-top-cap">
											<img src="/testimonial.png" alt="" />
											<p>
												{@html innovation}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Single Testimonial -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Testimonial End -->
</main>

<Footer />
<style>

	.custom-responsive{
		width: 30%;
	}

	.testimonial-top-cap p{
		text-align: center;
	}
	.markdown{
		color: var(--warning);
		font-size: 90px;
	}

	@media (max-width: 768px) {
		.custom-responsive{
			width: 100%;
		}
		.testimonial-top-cap p{
			text-align: left;
			color: aliceblue;
		}
		.markdown{
			font-size: 45px;
		}

	}
</style>
