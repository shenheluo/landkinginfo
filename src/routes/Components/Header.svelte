<script lang="ts">
    import { onMount } from "svelte";
    import  "../styles/bootstrap.min.css";
    import  "../styles/owl.carousel.min.css";
    import  "../styles/flaticon.css";
    import  "../styles/slicknav.css";
    import  "../styles/animate.min.css";
    import  "../styles/magnific-popup.css";
    import  "../styles/fontawesome-all.min.css";
    import  "../styles/themify-icons.css";
    import  "../styles/slick.css";
    import  "../styles/nice-select.css";
    import  "../styles/style.css";

    import LOGO1 from "../../lib/images/logo1.png";
    import MetaTagComponent from "./MetaTagComponent.svelte";

    onMount(() => {
        console.log("Header component mounted");
    });
</script>
<svelte:head>
    <MetaTagComponent/>
</svelte:head>
<div class="header-area">
    <div class="main-header ">
        <div class="header-top top-bg d-none d-lg-block">
           <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-8">
                    <div class="header-info-left">
                        <ul>                          
                            <li>sales@LandKingInfo.com</li>
                            <li>+81 03 3565 2365</li>
                            <li>東京都中央区日本橋人形町1丁目2番12号</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="header-info-right f-right">
                        <ul class="header-social">    
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li> <a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
               </div>
           </div>
        </div>
       <div class="header-bottom  header-sticky">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Logo -->
                    <div class="col-xl-2 col-lg-2 col-md-1">
                        <div class="logo">
                          <a href="index.html"><img src="{LOGO1}" style="width: 143px;" alt=""></a>
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
                        <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">                                                                                                                                     
                                    <li><a href="index.html" role="menuitem" tabindex="-1">Home</a></li>
                                    <li><a href="about.html" role="menuitem" tabindex="-1">About US</a></li>
                                    <li><a href="packages.html" role="menuitem" tabindex="-1">Package</a></li>
                                    <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="blog.html" tabindex="-1">Blog</a>
                                        <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style="display: none;">
                                            <li><a href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                            <li><a href="single-blog.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="#" tabindex="-1">Pages</a>
                                        <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style="display: none;">
                                            <li><a href="elements.html" role="menuitem" tabindex="-1">Element</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html" role="menuitem" tabindex="-1">Contact Us</a></li>
                                </ul></div></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</div>

<style>

</style>