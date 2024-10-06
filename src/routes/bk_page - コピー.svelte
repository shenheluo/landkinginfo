<script lang="ts">
	import Header from './Components/Header.svelte';
	import { onMount } from 'svelte';
	import TextRecruit from '$lib/images/text-recruit.svg';
	import TextRecruit2 from '$lib/images/text-recruit2.svg';
	import ImgAboutUs from '$lib/images/img-about-us.jpg';
	import ImgAboutUs2 from '$lib/images/img-about-us2.jpg';
	import ImgBusiness01 from '$lib/images/img-business01.png';
	import ImgBusiness02 from '$lib/images/img-business02.png';
	import ImgBusiness03 from '$lib/images/img-business03.png';
	import DemoPerson from '$lib/images/demo_person.jpg';
	import DemoPerson2 from '$lib/images/demo_person2.jpg';
    import { browser } from "$app/environment";
    import createGlobe from 'cobe';
	import Footer from "./Components/Footer.svelte";

	$: innerHeight = 0;
    $: innerWidth = 0
	let clickPotIdx = 1;
	const totalPotNum = 4;

    let size = 700,size2=400;
    


    /**
     * @type {HTMLCanvasElement}
     */
    let canvas: HTMLCanvasElement;
    let canvasSP:HTMLCanvasElement;
    // let divElement:HTMLDivElement;
    let phi = 0;
    // let scrollDivHeight = 0;

    let upperContainer:HTMLElement;
    // let newsArea:HTMLDivElement

    let processing=false

    let delayShow=true
    
    onMount(() => {

        // scrollDivHeight=divElement.clientHeight


        setTimeout(()=>{
            delayShow=false
        },1000)

		console.log("size::::",size)
        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
            phi: 2.0,
            theta: 0.18,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [35.3929, 139.4428], size: 0.05 },
        { location: [39.7128, 117.006], size: 0.05 },
                { location: [40.7128, -74.006], size: 0.05 }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            }
        });


        
        const globe2 = createGlobe(canvasSP, {
            devicePixelRatio: 2,
            width: size2 * 2,
            height: size2 * 2,
            phi: 2.0,
            theta: 0.18,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [35.3929, 139.4428], size: 0.05 },
        { location: [39.7128, 117.006], size: 0.05 },
                { location: [40.7128, -74.006], size: 0.05 }
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            }
        });

        // upperContainer
        upperContainer.addEventListener('wheel', (e) => {
            if (processing) return
            processing=true
            setTimeout(() => {
                if (e.deltaY>0) {
                	clickPotIdx = clickPotIdx<totalPotNum?clickPotIdx + 1:totalPotNum;
                }
                if (e.deltaY<0) {
                    clickPotIdx = clickPotIdx<1?1:clickPotIdx - 1;
                }
                processing=false
                
            }, 300);
            

        });

        // newsArea.addEventListener("scroll",function(e) {
        //     console.log(e)
        //     console.log(newsArea.scrollTop)
        // })
    });

    let mousepressed=false
    function handleMouseMove(e: { clientX: any; clientY: any; }) {
        if (!mousepressed) {
            
        }
        console.log(e.clientX)
        console.log(e.clientY)
    }


</script>

<svelte:window bind:innerHeight bind:innerWidth />
<Header />

<main class="main isPC">
	<div class="wrapper">
		<!-- <MouseCursor /> -->
		<div class="swiper swiper-initialized swiper-vertical swiper-pointer-events swiper-backface-hidden" bind:this={upperContainer}>
			<div
				class="swiper-wrapper"
				style="transform: translate3d(0px, -{innerHeight *
					(clickPotIdx - 1)}px, 0px); transition-duration: 0ms;">
				<div
					class="swiper-slide {clickPotIdx == 1 ? 'swiper-slide-active' : ''}"
					style="height: {innerHeight}px;">
					<section class="section-keyvisual astro-CRTGU45L">
						<div class="keyvisual-holder astro-CRTGU45L">
							<div class="keyvisual-title-holder astro-CRTGU45L">
								<h1 class="keyvisual-title astro-CRTGU45L">SHEENHE</h1>
								<p class="keyvisual-sub-title astro-CRTGU45L">New Value Creation</p>
							</div>
                            <div style="position:fixed;top:100px; left:{(innerWidth-size)/2}px;">
                                <canvas bind:this={canvas} style="width: {size}px; height: {size}px" 
                                />
                            </div>
                            
						</div>

						<div class="keyvisual-background astro-NLWAWH4N is-active">
							<div class="keyvisual-background__01 astro-NLWAWH4N"></div>
							<div class="backdrop-filter astro-NLWAWH4N is-active"></div>
						</div>
						<div class="scroll-holder astro-CRTGU45L">
							<span class="scroll-text astro-CRTGU45L">scroll</span>
						</div>
					</section>
				</div>
				<div
					class="swiper-slide {clickPotIdx == 2 ? 'swiper-slide-active' : ''}"
					style="height: {innerHeight}px;">
					<section class="section-our-vision js-trigger astro-HDHFTLAA">
						<div class="section-our-vision-inner astro-HDHFTLAA">
							<div class="our-vision-title-holder astro-HDHFTLAA">
								<h2 class="our-vision-title js-title-animation astro-HDHFTLAA">
									<span class="astro-HDHFTLAA"> O </span><span class="astro-HDHFTLAA">
										u
									</span><span class="astro-HDHFTLAA"> r </span><span class="astro-HDHFTLAA">
										&nbsp;
									</span><span class="astro-HDHFTLAA"> V </span><span class="astro-HDHFTLAA">
										i
									</span><span class="astro-HDHFTLAA"> s </span><span class="astro-HDHFTLAA">
										i
									</span><span class="astro-HDHFTLAA"> o </span><span class="astro-HDHFTLAA">
										n
									</span>
								</h2>
								<p class="our-vision-sub-title js-sub-title-animation astro-HDHFTLAA">
									デジタル技術で、<br class="astro-HDHFTLAA" /><span
										class="spacing astro-HDHFTLAA"
									></span>社会に新たな価値を創造します。
								</p>
							</div>
							<div class="our-vision-description-holder astro-HDHFTLAA">
								<p class="our-vision-description js-desciption-animation astro-HDHFTLAA">
									東京申和デジタル株式会社は、ECサイトの企画・開発から、製造業向けのERP・MESシステム開発、
									<br
										class="astro-HDHFTLAA"
									/>
									そして最新のAIソリューションまで、幅広いデジタルソリューションを提供しています。<br
										class="astro-HDHFTLAA"
									/>
									特に、ECサイトにおいては、お客様のニーズを的確に捉え、売上向上に直結するサイト設計・構築を行います。<br
										class="astro-HDHFTLAA"
									/>
									また、製造業においては、業務効率化を徹底的に追求し、生産性の向上に貢献します。
								</p>
							</div>
							<div class="js-button-animation astro-HDHFTLAA">
								<a class="button button-more astro-HDHFTLAA astro-VNZLVQNM" href="/our-vision"
									>Read more</a
								>
							</div>
						</div>
					</section>
				</div>
				<div
					class="swiper-slide {clickPotIdx == 3 ? 'swiper-slide-active' : ''}"
					style="height: {innerHeight}px;">
					<section class="section-about-us js-trigger astro-FGQDIBB7">
						<div class="section-about-us-inner astro-FGQDIBB7">
							<div class="about-us-holder astro-FGQDIBB7">
								<div class="about-us-title-holder astro-FGQDIBB7">
									<h2 class="about-us-title js-title-animation astro-FGQDIBB7">
										<span class="astro-FGQDIBB7"> A </span><span class="astro-FGQDIBB7">
											b
										</span><span class="astro-FGQDIBB7"> o </span><span class="astro-FGQDIBB7">
											u
										</span><span class="astro-FGQDIBB7"> t </span><span class="astro-FGQDIBB7">
											&nbsp;
										</span><span class="astro-FGQDIBB7"> u </span><span class="astro-FGQDIBB7">
											s
										</span>
									</h2>
									<p class="number js-number-animation astro-FGQDIBB7">
										<span class="astro-FGQDIBB7"> 0 </span><span class="astro-FGQDIBB7"> 1 </span>
									</p>
								</div>
								<div class="about-us-description-holder js-desciption-animation astro-FGQDIBB7">
									<p class="about-us-description astro-FGQDIBB7">
										当社の最大の強みは、迅速なソフトウェア開発と高いコストパフォーマンスです。<br
											class="_pcOnly astro-FGQDIBB7"
										/>
										お客様のご要望を迅速に捉え、短期間で高品質なシステムを開発いたします。
										<br
											class="astro-FGQDIBB7"
										/>また、無駄を徹底的に省き、コストを抑えた開発を実現することで、お客様の負担を軽減します。
									</p>
								</div>
								<div class="about-us-background js-background-animation astro-FGQDIBB7"></div>
							</div>
							<div class="about-us-image js-image-animation astro-FGQDIBB7">
								<img
									alt=""
									class="_pcOnly astro-FGQDIBB7"
									width="2000"
									height="1190"
									src={ImgAboutUs}
									loading="lazy"
									decoding="async"
								/>
								<img
									alt=""
									class="_spOnly astro-FGQDIBB7"
									width="837"
									height="496"
									src={ImgAboutUs2}
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div class="js-button-animation astro-FGQDIBB7">
								<a class="button button-more astro-FGQDIBB7 astro-VNZLVQNM" href="/about-us"
									>Read more</a
								>
							</div>
						</div>
					</section>
				</div>
				<div
					class="swiper-slide {clickPotIdx == 4 ? 'swiper-slide-active' : ''}"
					style="height: {innerHeight}px;">
					<section class="section-business js-trigger astro-ZCEO2MDS">
						<div class="section-business-inner astro-ZCEO2MDS">
							<div class="business-holder astro-ZCEO2MDS">
								<div class="business-title-holder astro-ZCEO2MDS">
									<h2 class="business-title js-title-animation astro-ZCEO2MDS">
										<span class="astro-ZCEO2MDS"> B </span><span class="astro-ZCEO2MDS">
											u
										</span><span class="astro-ZCEO2MDS"> s </span><span class="astro-ZCEO2MDS">
											i
										</span><span class="astro-ZCEO2MDS"> n </span><span class="astro-ZCEO2MDS">
											e
										</span><span class="astro-ZCEO2MDS"> s </span><span class="astro-ZCEO2MDS">
											s
										</span>
									</h2>
									<p class="number js-number-animation astro-ZCEO2MDS">
										<span class="astro-ZCEO2MDS"> 0 </span><span class="astro-ZCEO2MDS"> 2 </span>
									</p>
								</div>
								<div class="business-description-holder astro-ZCEO2MDS">
									<p class="business-description js-desciption-animation astro-ZCEO2MDS">
										ECサイト: 売上向上に繋がるサイト設計・構築、多様な決済システムとの連携<br>
										ERP・MESシステム: 生産計画の最適化、在庫管理の効率化、品質管理の強化<br>
										AIソリューション: 業務自動化、データ分析による意思決定支援
									</p>
								</div>
								<div class="business-background js-background-animation astro-ZCEO2MDS"></div>
							</div>
							<ul class="business-list js-list astro-ZCEO2MDS">
								<li class="business-list__item astro-ZCEO2MDS">
									<img
										class="_pcOnly astro-ZCEO2MDS"
										alt=""
										width="573"
										height="572"
										src={ImgBusiness01}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-ZCEO2MDS"
										alt=""
										width="241"
										height="242"
										src={ImgBusiness01}
										loading="lazy"
										decoding="async"
									/>
								</li>
								<li class="business-list__item astro-ZCEO2MDS">
									<img
										class="_pcOnly astro-ZCEO2MDS"
										alt=""
										width="573"
										height="572"
										src={ImgBusiness02}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-ZCEO2MDS"
										alt=""
										width="241"
										height="242"
										src={ImgBusiness02}
										loading="lazy"
										decoding="async"
									/>
								</li>
								<li class="business-list__item astro-ZCEO2MDS">
									<img
										class="_pcOnly astro-ZCEO2MDS"
										alt=""
										width="573"
										height="572"
										src={ImgBusiness03}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-ZCEO2MDS"
										alt=""
										width="242"
										height="242"
										src={ImgBusiness03}
										loading="lazy"
										decoding="async"
									/>
								</li>
							</ul>
							<div class="js-button-animation astro-ZCEO2MDS">
								<a class="button button-more astro-ZCEO2MDS astro-VNZLVQNM" href="/business"
									>Read more</a
								>
							</div>
						</div>
					</section>
				</div>

				<!-- <div
					class="swiper-slide {clickPotIdx == 5 ? 'swiper-slide-active' : ''}"
					style="height:{innerHeight}px;">
					<section class="section-recruit js-trigger astro-RV6Z6KZW">
						<div class="section-recruit-inner astro-RV6Z6KZW">
							<div class="recruit-holder astro-RV6Z6KZW">
								<div class="recruit-title-holder astro-RV6Z6KZW">
									<h2 class="recruit-title js-title-animation astro-RV6Z6KZW">
										<span class="astro-RV6Z6KZW"> R </span><span class="astro-RV6Z6KZW">
											e
										</span><span class="astro-RV6Z6KZW"> c </span><span class="astro-RV6Z6KZW">
											r
										</span><span class="astro-RV6Z6KZW"> u </span><span class="astro-RV6Z6KZW">
											i
										</span><span class="astro-RV6Z6KZW"> t </span>
									</h2>
									<p class="number js-number-animation astro-RV6Z6KZW">
										<span class="astro-RV6Z6KZW"> 0 </span><span class="astro-RV6Z6KZW"> 3 </span>
									</p>
								</div>
								<div class="recruit-description-holder astro-RV6Z6KZW">
									<p class="recruit-description js-desciption-animation astro-RV6Z6KZW">
										十人十色の人生観を持つ人が集まる会社に興味ありませんか？<br
											class="astro-RV6Z6KZW"
										/>都内に戸建が欲しい、将来は海外へ、家族との時間を大事にしたい。<br
											class="astro-RV6Z6KZW"
										/>SIGNPOSTは多様な人生観に寄り添って道標となる会社です。
									</p>
									<div class="_pcOnly moreBtn js-button-animation astro-RV6Z6KZW">
										<a class="button button-more astro-RV6Z6KZW astro-VNZLVQNM" href="/recruit"
											>Read more</a
										>
									</div>
								</div>
								<div class="recruit-background js-background-animation astro-RV6Z6KZW"></div>
							</div>
						</div>
						<div class="recuit-image-slider-holder astro-RV6Z6KZW">
							<ul class="recuit-image-slider-list js-image-list astro-RV6Z6KZW">
								{#each { length: 8 } as _, index}
									<li class="recuit-image-slider-list__item astro-RV6Z6KZW">
										<img
											class="_pcOnly astro-RV6Z6KZW"
											alt=""
											width="560"
											height="700"
											src={DemoPerson}
											loading="lazy"
											decoding="async"
										/>
										<img
											class="_spOnly astro-RV6Z6KZW"
											alt=""
											width="228"
											height="288"
											src={DemoPerson}
											loading="lazy"
											decoding="async"
										/>
									</li>
								{/each}
							</ul>
							<ul class="recuit-image-slider-list js-image-list astro-RV6Z6KZW">
								{#each { length: 8 } as _, index}
									<li class="recuit-image-slider-list__item astro-RV6Z6KZW">
										<img
											class="_pcOnly astro-RV6Z6KZW"
											alt=""
											width="560"
											height="700"
											src={DemoPerson2}
											loading="lazy"
											decoding="async"
										/>
										<img
											class="_spOnly astro-RV6Z6KZW"
											alt=""
											width="228"
											height="288"
											src={DemoPerson2}
											loading="lazy"
											decoding="async"
										/>
									</li>
								{/each}
							</ul>
						</div>
						<div class="recuit-text-slider-holder astro-RV6Z6KZW">
							<ul class="recuit-text-slider-list astro-RV6Z6KZW">
								<li class="recuit-text-slider-list__item astro-RV6Z6KZW">
									<img
										class="_pcOnly astro-RV6Z6KZW"
										alt=""
										width="1947"
										height="222"
										src={TextRecruit2}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-RV6Z6KZW"
										alt=""
										width="539"
										height="61"
										src={TextRecruit}
										loading="lazy"
										decoding="async"
									/>
								</li>
								<li class="recuit-text-slider-list__item astro-RV6Z6KZW">
									<img
										class="_pcOnly astro-RV6Z6KZW"
										alt=""
										width="1947"
										height="222"
										src={TextRecruit2}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-RV6Z6KZW"
										alt=""
										width="539"
										height="61"
										src={TextRecruit}
										loading="lazy"
										decoding="async"
									/>
								</li>
								<li class="recuit-text-slider-list__item astro-RV6Z6KZW">
									<img
										class="_pcOnly astro-RV6Z6KZW"
										alt=""
										width="1947"
										height="222"
										src={TextRecruit2}
										loading="lazy"
										decoding="async"
									/>
									<img
										class="_spOnly astro-RV6Z6KZW"
										alt=""
										width="539"
										height="61"
										src={TextRecruit}
										loading="lazy"
										decoding="async"
									/>
								</li>
							</ul>
						</div>
						<div class="_spOnly moreBtn js-button-animation astro-RV6Z6KZW">
							<a class="button button-more astro-RV6Z6KZW astro-VNZLVQNM" href="/recruit"
								>Read more</a
							>
						</div>
					</section>
				</div> -->
				<!-- <div
					class="swiper-slide {clickPotIdx == 6 ? 'swiper-slide-active' : ''}"
					style="height: {innerHeight}px;">
					<div class="section-holder">
						<section class="{delayShow?"":"section-news"}  js-trigger astro-QAUPBU3J">
							<div class="section-news-inner astro-QAUPBU3J">
								<h2 class="section-news__title js-title-animation astro-QAUPBU3J">
									<span class="astro-QAUPBU3J"> N </span><span class="astro-QAUPBU3J">
										e
									</span><span class="astro-QAUPBU3J"> w </span><span class="astro-QAUPBU3J">
										s
									</span>
								</h2>
								<ul
									class="news-list js-list astro-QAUPBU3J simplebar-scrollable-y"
									data-simplebar="init">
									<div class="simplebar-wrapper" style="margin: 0px;" bind:this={divElement}>
										<div class="simplebar-height-auto-observer-wrapper">
											<div class="simplebar-height-auto-observer"></div>
										</div>
										<div class="simplebar-mask">
											<div class="simplebar-offset" style="right: 0px; bottom: 0px;">
												<div
													class="simplebar-content-wrapper"
													role="region"
													aria-label="scrollable content"
													style="height: 100%;overflow: hidden scroll; overflow-y: {delayShow?"hidden":"auto"} ;"
                                                    bind:this={newsArea}
												>
													<div class="simplebar-content" style="padding: 0px;">
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2024/06/14</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																<a
																	href="https://note.com/signpost_pr/n/nd31c42ad50d3"
																	class="news-list__item-link astro-QAUPBU3J"
																	target="_blank">2024年上期納会を実施しました</a
																>
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2024/05/17</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																<a
																	href="https://note.com/signpost_pr/n/n3b19a473af9d"
																	class="news-list__item-link astro-QAUPBU3J"
																	target="_blank">大人気イベントBBQを実施しました</a
																>
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2024/04/01</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																<a
																	href="https://note.com/signpost_pr/n/n4dae15b85daa"
																	class="news-list__item-link astro-QAUPBU3J"
																	target="_blank">Best Motivation Team Awardを受賞しました</a
																>
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2024/03/29</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																四半期のお疲れ様会を実施しました
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/12/22</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																<a
																	href="https://note.com/signpost_pr/n/nf1e6e087685e"
																	class="news-list__item-link astro-QAUPBU3J"
																	target="_blank">2023年度納会を実施しました</a
																>
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/09/01</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																事業拡大に伴い関西支社が増えました
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/08/01</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																HPをリニューアルしました
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/06/01</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																6期目に入り、社員数80名を超えました
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/04/14</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																typeエンジニア転職フェアに出展しました
															</p>
														</li>
														<li class="news-list__item astro-QAUPBU3J">
															<div class="news-list__item-head astro-QAUPBU3J">
																<div class="news-list__item-date astro-QAUPBU3J">2023/04/01</div>
															</div>
															<p class="news-list__item-discription astro-QAUPBU3J">
																関東ITソフトウェア健康保険組合（ITS）に加入しました
															</p>
														</li>
													</div>
												</div>
											</div>
										</div>
										<div class="simplebar-placeholder" style="width: 768px; height: 900px;"></div>
									</div>
									<div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
										<div
											class="simplebar-scrollbar simplebar-visible"
											style="width: 0px; display: none;"
										></div>
									</div>
									<div class="simplebar-track simplebar-vertical" style="visibility: hidden;" on:mouseup={(e)=>{    
                                        const rect = e.currentTarget.getBoundingClientRect()
                                        mousepressed=false;
                                        console.log(`x: ${e.clientX - rect.x}, y: ${e.clientY - rect.y}`)
                                        }}
                                        on:mouseup={(e)=>{    
                                            const rect = e.currentTarget.getBoundingClientRect()
                                            mousepressed=true;
                                            console.log(`x2: ${e.clientX - rect.x}, y2: ${e.clientY - rect.y}`)
                                            }}     
                                        on:mousemove={handleMouseMove} >

										<div                                           
											class="simplebar-scrollbar simplebar-visible"
											style="height: 75px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
									</div>
								</ul>
							</div>
						</section>
                        <section class="section-contact js-trigger astro-TVPMUDB3">
                            <div class="section-contact-inner astro-TVPMUDB3">
                              <h2 class="section-contact__title js-title-animation astro-TVPMUDB3">
                                <span class="astro-TVPMUDB3">
                                      C
                                    </span><span class="astro-TVPMUDB3">
                                      o
                                    </span><span class="astro-TVPMUDB3">
                                      n
                                    </span><span class="astro-TVPMUDB3">
                                      t
                                    </span><span class="astro-TVPMUDB3">
                                      a
                                    </span><span class="astro-TVPMUDB3">
                                      c
                                    </span><span class="astro-TVPMUDB3">
                                      t
                                    </span>
                              </h2>
                              <p class="section-contact__description js-desciption-animation astro-TVPMUDB3">弊社HPにご来訪頂きまして誠に有難う御座います。<br class="astro-TVPMUDB3">ご要望や依頼がありましたら下記よりお問い合わせください。</p>
                              <div class="js-button-animation astro-TVPMUDB3">
                                <a class="button button-contact astro-TVPMUDB3 astro-VNZLVQNM" href="/contact">Contact</a>
                              </div>
                            </div>
                        </section>

					</div>
					<Footer />
				</div> -->
			</div>
			<div class="pagination-holder">
				<span class="pagination-home-bullet pagination-home-active-bullet-0{clickPotIdx}"></span>
				<div
					class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical"
				>
					{#each Array(totalPotNum) as pot, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span
							class="swiper-pagination-bullet {clickPotIdx - 1 == index
								? 'swiper-pagination-bullet-active'
								: ''}"
							on:click={() => {
								clickPotIdx = index + 1;
							}}
						></span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
<main class="main isSP">
    <div class="wrapper">
        <section class="section-keyvisual astro-CRTGU45L">
            <div class="keyvisual-holder astro-CRTGU45L" style="text-align: center;">
              <div class="keyvisual-title-holder astro-CRTGU45L">
                <h1 class="keyvisual-title astro-CRTGU45L" style="color: slategray;">SIGNPOST</h1>
                <p class="keyvisual-sub-title astro-CRTGU45L" style="color: slategray;">Every Man in His Humour</p>
                <div style="position: relative;left:{(innerWidth-size2)/2}px;;top:0px">
                    <canvas bind:this={canvasSP} style="width: {size2}px; height: {size2}px" />
                </div>                
              </div>
            </div>
            <div class="keyvisual-background astro-NLWAWH4N">
              <div class="keyvisual-background__01 astro-NLWAWH4N">
              </div>
            <div class="backdrop-filter astro-NLWAWH4N"></div>
          </div>
              <div class="scroll-holder astro-CRTGU45L">
                  <span class="scroll-text astro-CRTGU45L">scroll</span>
              </div>
        </section>

		<section class="section-our-vision js-trigger astro-HDHFTLAA is-active">
			<div class="section-our-vision-inner astro-HDHFTLAA">
				<div class="our-vision-title-holder astro-HDHFTLAA">
			  <h2 class="our-vision-title js-title-animation astro-HDHFTLAA">
				<span class="astro-HDHFTLAA">
					  O
					</span><span class="astro-HDHFTLAA">
					  u
					</span><span class="astro-HDHFTLAA">
					  r
					</span><span class="astro-HDHFTLAA">
					  &nbsp;
					</span><span class="astro-HDHFTLAA">
					  V
					</span><span class="astro-HDHFTLAA">
					  i
					</span><span class="astro-HDHFTLAA">
					  s
					</span><span class="astro-HDHFTLAA">
					  i
					</span><span class="astro-HDHFTLAA">
					  o
					</span><span class="astro-HDHFTLAA">
					  n
					</span>
			  </h2>
			  <p class="our-vision-sub-title js-sub-title-animation astro-HDHFTLAA">キャリアを創造し、<br class="astro-HDHFTLAA"><span class="spacing astro-HDHFTLAA"></span>人生を豊かに</p>
				</div>
				<div class="our-vision-description-holder astro-HDHFTLAA">
					<p class="our-vision-description js-desciption-animation astro-HDHFTLAA">
						SIGNPOSTは、人生を豊かに生きる権利は誰にでも与えられていると考えています。<br class="astro-HDHFTLAA">
						豊かの定義は人の数だけ存在し、SIGNPOSTはその全てを肯定し尊重する会社です。<br class="astro-HDHFTLAA">
						キャリアという観点を取り入れながら、多くの人が豊かに生きている。<br class="astro-HDHFTLAA">
						そんな会社を創造していきます。
					</p>
				</div>
			<div class="js-button-animation astro-HDHFTLAA">
			  <a class="button button-more astro-HDHFTLAA astro-VNZLVQNM" href="/our-vision" >Read more</a>
			</div>
			</div>
		</section>	
		
		<section class="section-about-us js-trigger astro-FGQDIBB7 is-active">
			<div class="section-about-us-inner astro-FGQDIBB7">
			<div class="about-us-holder astro-FGQDIBB7">
			  <div class="about-us-title-holder astro-FGQDIBB7">
				<h2 class="about-us-title js-title-animation astro-FGQDIBB7">
				  <span class="astro-FGQDIBB7">
						A
					  </span><span class="astro-FGQDIBB7">
						b
					  </span><span class="astro-FGQDIBB7">
						o
					  </span><span class="astro-FGQDIBB7">
						u
					  </span><span class="astro-FGQDIBB7">
						t
					  </span><span class="astro-FGQDIBB7">
						&nbsp;
					  </span><span class="astro-FGQDIBB7">
						u
					  </span><span class="astro-FGQDIBB7">
						s
					  </span>
				</h2>
				<p class="number js-number-animation astro-FGQDIBB7">
				  <span class="astro-FGQDIBB7">
						0
					  </span><span class="astro-FGQDIBB7">
						1
					  </span>
				</p>
			  </div>
			  <div class="about-us-description-holder js-desciption-animation astro-FGQDIBB7">
				<p class="about-us-description astro-FGQDIBB7">
				  キャリアとは今まで経験してきたこと、又は挑戦してきたこと。<br class="_pcOnly astro-FGQDIBB7">過去の些細な経験をもとに、今後どのように働くかを創造することもキャリアです。<br class="astro-FGQDIBB7">株式会社SIGNPOSTは過去、現在、未来に誇りを持ち、全てを糧にして事業を創造し続ける会社です。
				</p>
			  </div>
			  <div class="about-us-background js-background-animation astro-FGQDIBB7"></div>
			</div>
			<div class="about-us-image js-image-animation astro-FGQDIBB7">
			  <img alt="" class="_pcOnly astro-FGQDIBB7" width="2000" height="1190" src="{ImgAboutUs2}" loading="lazy" decoding="async">
			  <img alt="" class="_spOnly astro-FGQDIBB7" width="837" height="496" src="{ImgAboutUs2}" loading="lazy" decoding="async">
			</div>
			<div class="js-button-animation astro-FGQDIBB7">
			  <a class="button button-more astro-FGQDIBB7 astro-VNZLVQNM" href="/about-us">Read more</a>
			</div>
			</div>
		</section>		

		<section class="section-business js-trigger astro-ZCEO2MDS is-active">
			<div class="section-business-inner astro-ZCEO2MDS">
			<div class="business-holder astro-ZCEO2MDS">
			  <div class="business-title-holder astro-ZCEO2MDS">
				<h2 class="business-title js-title-animation astro-ZCEO2MDS">
				  <span class="astro-ZCEO2MDS">
						B
					  </span><span class="astro-ZCEO2MDS">
						u
					  </span><span class="astro-ZCEO2MDS">
						s
					  </span><span class="astro-ZCEO2MDS">
						i
					  </span><span class="astro-ZCEO2MDS">
						n
					  </span><span class="astro-ZCEO2MDS">
						e
					  </span><span class="astro-ZCEO2MDS">
						s
					  </span><span class="astro-ZCEO2MDS">
						s
					  </span>
				</h2>
				<p class="number js-number-animation astro-ZCEO2MDS">
				  <span class="astro-ZCEO2MDS">
						0
					  </span><span class="astro-ZCEO2MDS">
						2
					  </span>
				</p>
			  </div>
			  <div class="business-description-holder astro-ZCEO2MDS">
				<p class="business-description js-desciption-animation astro-ZCEO2MDS">
				  クライアント企業様のお悩みに対して、問題解決を目的に要件ヒアリングから対応し、その後必要に応じて開発リソース提供、開発請負、導入後の運用まで一気通貫した解決力を強みとしております。人のパフォーマンス向上がクライアント企業様に＋αの価値提供をできると考えており、クライアント企業様、SIGNPOST、人が良好な関係地を築けるようWin-Win-Winの関係値を大切にしております。
				</p>
			  </div>
			  <div class="business-background js-background-animation astro-ZCEO2MDS"></div>
			</div>
			<ul class="business-list js-list astro-ZCEO2MDS">
			  <li class="business-list__item astro-ZCEO2MDS">
				<img class="_pcOnly astro-ZCEO2MDS" alt="" width="573" height="572" src="{ImgBusiness01}" loading="lazy" decoding="async">
				<img class="_spOnly astro-ZCEO2MDS" alt="" width="241" height="242" src="{ImgBusiness01}" loading="lazy" decoding="async">
			  </li>
			  <li class="business-list__item astro-ZCEO2MDS">
				<img class="_pcOnly astro-ZCEO2MDS" alt="" width="573" height="572" src="{ImgBusiness02}" loading="lazy" decoding="async">
				<img class="_spOnly astro-ZCEO2MDS" alt="" width="241" height="242" src="{ImgBusiness02}" loading="lazy" decoding="async">
			  </li>
			  <li class="business-list__item astro-ZCEO2MDS">
				<img class="_pcOnly astro-ZCEO2MDS" alt="" width="573" height="572" src="{ImgBusiness03}" loading="lazy" decoding="async">
				<img class="_spOnly astro-ZCEO2MDS" alt="" width="242" height="242" src="{ImgBusiness03}" loading="lazy" decoding="async">
			  </li>
			</ul>
			<div class="js-button-animation astro-ZCEO2MDS">
			  <a class="button button-more astro-ZCEO2MDS astro-VNZLVQNM" href="/business">Read more</a>
			</div>
			</div>
		</section>		
		<section class="section-recruit js-trigger astro-RV6Z6KZW is-active">
			<div class="section-recruit-inner astro-RV6Z6KZW">
			<div class="recruit-holder astro-RV6Z6KZW">
			  <div class="recruit-title-holder astro-RV6Z6KZW">
				<h2 class="recruit-title js-title-animation astro-RV6Z6KZW">
				  <span class="astro-RV6Z6KZW">
						R
					  </span><span class="astro-RV6Z6KZW">
						e
					  </span><span class="astro-RV6Z6KZW">
						c
					  </span><span class="astro-RV6Z6KZW">
						r
					  </span><span class="astro-RV6Z6KZW">
						u
					  </span><span class="astro-RV6Z6KZW">
						i
					  </span><span class="astro-RV6Z6KZW">
						t
					  </span>
				</h2>
				<p class="number js-number-animation astro-RV6Z6KZW">
				  <span class="astro-RV6Z6KZW">
						0
					  </span><span class="astro-RV6Z6KZW">
						3
					  </span>
				</p>
			  </div>
			  <div class="recruit-description-holder astro-RV6Z6KZW">
				<p class="recruit-description js-desciption-animation astro-RV6Z6KZW">
				  十人十色の人生観を持つ人が集まる会社に興味ありませんか？<br class="astro-RV6Z6KZW">都内に戸建が欲しい、将来は海外へ、家族との時間を大事にしたい。<br class="astro-RV6Z6KZW">SIGNPOSTは多様な人生観に寄り添って道標となる会社です。
				</p>
				<div class="_pcOnly moreBtn js-button-animation astro-RV6Z6KZW">
				  <a class="button button-more astro-RV6Z6KZW astro-VNZLVQNM" href="/recruit">Read more</a>
				</div>
			  </div>
			  <div class="recruit-background js-background-animation astro-RV6Z6KZW"></div>
			</div>
			</div>
		  <div class="recuit-image-slider-holder astro-RV6Z6KZW">
			<ul class="recuit-image-slider-list js-image-list astro-RV6Z6KZW">
				{#each Array(8) as item}
					<li class="recuit-image-slider-list__item astro-RV6Z6KZW">
						<img class="_pcOnly astro-RV6Z6KZW" alt="" width="560" height="700" src="{DemoPerson}" loading="lazy" decoding="async">
						<img class="_spOnly astro-RV6Z6KZW" alt="" width="228" height="288" src="{DemoPerson}" loading="lazy" decoding="async">
					</li>					
				{/each}

			</ul>
			<ul class="recuit-image-slider-list js-image-list astro-RV6Z6KZW">
				{#each Array(8) as item}
					<li class="recuit-image-slider-list__item astro-RV6Z6KZW">
					<img class="_pcOnly astro-RV6Z6KZW" alt="" width="560" height="700" src="{DemoPerson2}" loading="lazy" decoding="async">
					<img class="_spOnly astro-RV6Z6KZW" alt="" width="228" height="288" src="{DemoPerson2}" loading="lazy" decoding="async">
				  </li>				
				{/each}

		
			</ul>
		  </div>
		  <div class="recuit-text-slider-holder astro-RV6Z6KZW">
			<ul class="recuit-text-slider-list astro-RV6Z6KZW">
				{#each Array(3) as item}
				<li class="recuit-text-slider-list__item astro-RV6Z6KZW">
					<img class="_pcOnly astro-RV6Z6KZW" alt="" width="1947" height="222" src="{TextRecruit}" loading="lazy" decoding="async">
					<img class="_spOnly astro-RV6Z6KZW" alt="" width="539" height="61" src="{TextRecruit2}" loading="lazy" decoding="async">
				  </li>
				{/each}
			</ul>
		  </div>
		  <div class="_spOnly moreBtn js-button-animation astro-RV6Z6KZW">
			<a class="button button-more astro-RV6Z6KZW astro-VNZLVQNM" href="/recruit">Read more</a>
		  </div>
		</section>		
		<section class="section-news js-trigger astro-QAUPBU3J is-active">
			<div class="section-news-inner astro-QAUPBU3J">
			  <h2 class="section-news__title js-title-animation astro-QAUPBU3J">
				<span class="astro-QAUPBU3J">
					  N
					</span><span class="astro-QAUPBU3J">
					  e
					</span><span class="astro-QAUPBU3J">
					  w
					</span><span class="astro-QAUPBU3J">
					  s
					</span>
			  </h2>
			  <ul class="news-list js-list astro-QAUPBU3J simplebar-scrollable-x simplebar-scrollable-y" data-simplebar="init" data-simplebar-auto-hide=""><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;">
				<div class="simplebar-content-wrapper"  role="region" aria-label="scrollable content" style="height: 100%; overflow: scroll;"><div class="simplebar-content" style="padding: 0px;">
				<li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2024/06/14</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">
						  <a href="https://note.com/signpost_pr/n/nd31c42ad50d3" class="news-list__item-link astro-QAUPBU3J" target="_blank" >2024年上期納会を実施しました</a>
						</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2024/05/17</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">
						  <a href="https://note.com/signpost_pr/n/n3b19a473af9d" class="news-list__item-link astro-QAUPBU3J" target="_blank" >大人気イベントBBQを実施しました</a>
						</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2024/04/01</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">
						  <a href="https://note.com/signpost_pr/n/n4dae15b85daa" class="news-list__item-link astro-QAUPBU3J" target="_blank" >Best Motivation Team Awardを受賞しました</a>
						</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2024/03/29</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">四半期のお疲れ様会を実施しました</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/12/22</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">
						  <a href="https://note.com/signpost_pr/n/nf1e6e087685e" class="news-list__item-link astro-QAUPBU3J" target="_blank" >2023年度納会を実施しました</a>
						</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/09/01</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">事業拡大に伴い関西支社が増えました</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/08/01</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">HPをリニューアルしました</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/06/01</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">6期目に入り、社員数80名を超えました</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/04/14</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">typeエンジニア転職フェアに出展しました</p>
					</li><li class="news-list__item astro-QAUPBU3J">
					  <div class="news-list__item-head astro-QAUPBU3J">
						<div class="news-list__item-date astro-QAUPBU3J">2023/04/01</div>
					  </div>
					  <p class="news-list__item-discription astro-QAUPBU3J">関東ITソフトウェア健康保険組合（ITS）に加入しました</p>
					</li>
			  </div></div></div></div><div class="simplebar-placeholder" style="width: 355px; height: 573px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: visible;"><div class="simplebar-scrollbar simplebar-visible" style="width: 25px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar simplebar-visible" style="height: 50px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></ul>
			</div>
		</section>

		<section class="section-contact js-trigger astro-TVPMUDB3 is-active">
			<div class="section-contact-inner astro-TVPMUDB3">
			  <h2 class="section-contact__title js-title-animation astro-TVPMUDB3">
				<span class="astro-TVPMUDB3">
					  C
					</span><span class="astro-TVPMUDB3">
					  o
					</span><span class="astro-TVPMUDB3">
					  n
					</span><span class="astro-TVPMUDB3">
					  t
					</span><span class="astro-TVPMUDB3">
					  a
					</span><span class="astro-TVPMUDB3">
					  c
					</span><span class="astro-TVPMUDB3">
					  t
					</span>
			  </h2>
			  <p class="section-contact__description js-desciption-animation astro-TVPMUDB3">弊社HPにご来訪頂きまして誠に有難う御座います。<br class="astro-TVPMUDB3">ご要望や依頼がありましたら下記よりお問い合わせください。</p>
			  <div class="js-button-animation astro-TVPMUDB3">
				<a class="button button-contact astro-TVPMUDB3 astro-VNZLVQNM" href="/contact" >Contact</a>
			  </div>
			</div>
		</section>	
		<Footer/>	
    </div>
</main>

<style>
	.App {
		display: grid;
		place-items: center;
		place-content: center;
		height: 100vh;
	}    
</style>
