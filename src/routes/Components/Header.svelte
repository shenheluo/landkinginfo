<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import {
		faGithub,
		faLinkedinIn,
		faFacebook,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';

	import '../styles/bootstrap.min.css';
	import '../styles/owl.carousel.min.css';
	import '../styles/flaticon.css';
	import '../styles/slicknav.css';
	import '../styles/animate.min.css';
	import '../styles/magnific-popup.css';
	import '../styles/themify-icons.css';
	import '../styles/slick.css';
	import '../styles/nice-select.css';
	import '../styles/style.css';

	import LOGO1 from '../../lib/images/logo1.png';
	import MetaTagComponent from './MetaTagComponent.svelte';
	let mobileFlg = false;

	onMount(() => {
		console.log('Header component mounted');
	});
</script>

<svelte:head>
	<MetaTagComponent />
</svelte:head>
<div class="header-area">
	<div class="main-header">
		<div class="header-top top-bg d-none d-lg-block">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-8">
						<div class="header-info-left">
							<ul>
								<li>eigyo@landkinginfo.com</li>
								<li>+81 90-6499-5999</li>
								<li>東京都中央区日本橋人形町1丁目2番12号</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="header-info-right f-right">
							<ul class="header-social">
								<!-- <li>
									<a href="https://www.facebook.com/profile.php?id=61566622418684" target="_blank"><Fa icon={faFacebook} size="2x" /></a>
								</li>
								<li>
									<a href="https://x.com/landkinginfo" target="_blank"><Fa icon={faX} size="2x" /></a
									>
								</li>
								<li>
									<a href="https://www.instagram.com/landkinginfo/" target="_blank"><Fa icon={faInstagram} size="2x" /></a
									>
								</li> -->

							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-bottom header-sticky">
			<div class="container">
				<div class="row align-items-center">
					<!-- Logo -->
					<div class="col-xl-4 col-lg-4 col-md-4">
						<div class="row">
							<div class="logo">
								<a href="/"><img src={LOGO1} style="width: 143px;" alt="" /></a>
							</div>
							<a href="https://x.com/landkinginfo" target="_blank" style="margin-left: 5px;">
								<svg fill="#000000" width="auto" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM14.116 6.01v3.919l1.88 1.963V6.009h-1.88zM6.01 7.992l7.638 7.723c-.121.129-.245.256-.37.381l-7.268 7.35h3.67c.155-.003.312.01.467-.01.272-.003.543.005.814-.003.314-.32.622-.646.934-.97l2.677-2.795c.473-.5.955-.993 1.425-1.493.22.218.432.448.648.672.973 1.014 1.942 2.032 2.915 3.044.495.513.984 1.03 1.48 1.542.272.01.546-.002.82.006.096.013.195.007.294.007h3.83l-.69-.696-6.772-6.846c-.052-.066-.114-.127-.172-.189.237-.246.48-.491.723-.734 2.304-2.328 4.605-4.66 6.91-6.99h-4.938c-.713.744-1.425 1.489-2.14 2.23-.967 1.012-1.935 2.028-2.906 3.037-1.677-1.76-3.361-3.511-5.038-5.266H6.01zM16 19.53h.002c-.004 1.967-.004 3.933-.004 5.9h1.89c0-1.308.004-2.613 0-3.92-.627-.661-1.262-1.317-1.888-1.98z"/></svg>								
							</a>
							
							<a href="https://www.facebook.com/profile.php?id=61566622418684" target="_blank" style="margin-left: 5px;">
								<svg
									width="auto"
									height="30px"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									><path
										fill="#1877F2"
										d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
									/><path
										fill="#ffffff"
										d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
									/></svg
								>							
							</a>

							<a href="https://www.instagram.com/landkinginfo/" target="_blank" style="margin-left: 5px;">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87" width="auto" height="28px" id="instagram">
									<defs>
									  <linearGradient id="linear-gradient" x1="-1.84" x2="32.16" y1="30.47" y2="-3.03" gradientUnits="userSpaceOnUse">
										<stop offset="0" stop-color="#fed576"></stop>
										<stop offset=".26" stop-color="#f47133"></stop>
										<stop offset=".61" stop-color="#bc3081"></stop>
										<stop offset="1" stop-color="#4c63d2"></stop>
									  </linearGradient>
									</defs>
									<g id="Layer_2">
									  <g id="Layer_1-2">
										<rect width="28.87" height="28.87" rx="6.48" ry="6.48" style="fill:url(#linear-gradient)"></rect>
										<g id="_Group_">
										  <path id="_Compound_Path_" d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z" style="fill:#fff"></path>
										  <path id="_Compound_Path_2" d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z" style="fill:#fff"></path>
										  <path id="_Path_" d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z" style="fill:#fff"></path>
										</g>
									  </g>
									</g>
								  </svg>
							</a>
						</div>

					</div>
					<div class="col-xl-8 col-lg-8 col-md-8">
						<!-- Main-menu -->
						<div class="main-menu f-right d-none d-lg-block">
							<nav>
								<ul id="navigation">
									<li><a href="/">ホーム</a></li>
									<li><a href="/aboutus">会社概要</a></li>
									<li><a href="/bussiness">事業紹介</a></li>
									<li><a href="/wantta">案件紹介</a></li>
									<li><a href="/contact">お問い合わせ</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- Mobile Menu -->
					<div class="col-12">
						<div class="mobile_menu d-block d-lg-none">
							<div class="slicknav_menu">
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="javascript:void(0)"
									aria-haspopup="true"
									role="button"
									tabindex="0"
									on:click={() => {
										mobileFlg = !mobileFlg;
									}}
									class="slicknav_btn {mobileFlg ? 'slicknav_open' : 'slicknav_collapsed'}"
									style="outline: none;"
									><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"
										><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"
										></span><span class="slicknav_icon-bar"></span></span
									></a
								>
								<ul
									class="slicknav_nav slicknav_hidden"
									aria-hidden="true"
									role="menu"
									style="display: {mobileFlg ? 'block' : 'none'};"
									data-sveltekit-reload
								>
									<li><a href="/" role="menuitem" tabindex="-1">ホーム</a></li>
									<li><a href="/aboutus" role="menuitem" tabindex="-1">会社概要</a></li>
									<li><a href="/bussiness" role="menuitem" tabindex="-1">事業紹介</a></li>
									<li><a href="/wantta" role="menuitem" tabindex="-1">案件紹介</a></li>
									<li><a href="/contact" role="menuitem" tabindex="-1">お問い合わせ</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
