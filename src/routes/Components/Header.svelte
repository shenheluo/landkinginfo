<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedinIn, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

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
								<li><a href="https://x.com/landkinginfo" target="_blank"><Fa icon={faX} size="2x" /></a></li>
								<li><a href="https://www.instagram.com/landkinginfo/" target="_blank"><Fa icon={faInstagram} size="2x" /></a></li>								
								<li><a href="https://www.facebook.com/profile.php?id=61566622418684" target="_blank"><Fa icon={faFacebook} size="2x" /></a></li>
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
					<div class="col-xl-2 col-lg-2 col-md-1">
						<div class="logo">
							<a href="/"><img src={LOGO1} style="width: 143px;" alt="" /></a>
						</div>
					</div>
					<div class="col-xl-10 col-lg-10 col-md-10">
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
                                    on:click={()=>{mobileFlg=!mobileFlg}}
									class="slicknav_btn  {mobileFlg?"slicknav_open":"slicknav_collapsed"}"
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
									style="display: {mobileFlg?"block":"none"};"
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
