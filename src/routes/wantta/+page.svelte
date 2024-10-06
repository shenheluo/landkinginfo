<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
	import HeaderSliderArea from "../Components/HeaderSliderArea.svelte";
	import WANNTAIMG from "$lib/img/wannta.jpg";
    
</script>

<Header />

<HeaderSliderArea image={WANNTAIMG} title="案件紹介" />
<div class="whole-wrap">
    <div class="container_custom box_1170">
        <div class="section-top-border">
            <h3 class="mb-30">案件紹介</h3>
            <iframe width="100%" height="800" title="wannta"
                src="https://docs.google.com/spreadsheets/d/1F0LePv8enp6uArZU7jrFmo6Lt0mCm-Yx/edit?gid=1435695576#gid=1435695576&widget=true&amp;headers=false">
            </iframe>

        </div>
    </div>
</div>
<Footer/>

<style>
    .container_custom {
        width: 100%;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: auto;
        margin-left: auto;
    }
</style>