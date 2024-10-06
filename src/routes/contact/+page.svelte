<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
	import HeaderSliderArea from "../Components/HeaderSliderArea.svelte";
	import CONTACTIMG from "$lib/img/contact-us.jpg";
    import Fa from 'svelte-fa'
    import { faHome,faMobile,faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<Header />
<HeaderSliderArea image={CONTACTIMG} title="お問い合わせ" />
<section class="contact-section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="contact-title">お問い合わせ</h2>
            </div>
            <div class="col-lg-8">
                <!-- <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" >
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"  placeholder="お問い合わせ内容"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="name" id="name" type="text"  placeholder="お名前">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="email" id="email" type="email"  placeholder="メールアドレス">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <input class="form-control" name="subject" id="subject" type="text"  placeholder="概要">
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="button button-contactForm boxed-btn">Send</button>
                    </div>
                </form> -->
                <iframe data-tally-src="https://tally.so/embed/3XMqej?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="484" frameborder="0" marginheight="0" marginwidth="0" title="landkinginfo"></iframe><script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
            </div>
            <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                    <span class="contact-info__icon"><Fa icon={faHome} size="2x" color="#8f9195"/></span>
                    <div class="media-body">
                        <h3>東京都中央区日本橋人形町1丁目2番12号BournMarkNingyochoビル3階
                        </h3>
                        <p></p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><Fa icon={faMobile} size="2x" color="#8f9195"/></span>
                    <div class="media-body">
                        <h3>+81 03 3565 2365</h3>
                        <p>平日 09:00～ 18:00</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon">
                        <Fa icon={faEnvelope} size="2x" color="#8f9195"/>
                    </span>
                    <div class="media-body">
                        <h3>sales@LandKingInfo.com</h3>
                        <p>いつでもご連絡ください。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<Footer />