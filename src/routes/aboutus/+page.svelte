<script>
	import Header from '../Components/Header.svelte';
	import HeaderSliderArea from '../Components/HeaderSliderArea.svelte';
	import TextAreaComponent from "../Components/TextAreaComponent.svelte";
	import Footer from '../Components/Footer.svelte';

	import ABOUT from "$lib/img/about.jpg";


	const aboutUs = 
		{
			title: "事業内容",
			description:
				"東京申和デジタル株式会社は、最先端のデジタル技術を駆使し、幅広いITソリューションを提供する企業です。お客様のデジタル化を通じて、ビジネスの成長と革新を支援します。最新のテクノロジーと確かな専門知識で、お客様と共に新たな価値を創造してまいります。<br>",
		}
	</script>

<Header />
<HeaderSliderArea image={ABOUT} title="会社概要" />
<div class="whole-wrap">
	<div class="container box_1170">
		<TextAreaComponent title={aboutUs.title} description={aboutUs.description}/>
	</div>
	<div class="container box_1170">
		<h2 class="contact-title">事業領域</h2>
		<div class="section-top-border" style="padding: 0 0;">
			<div class="row">
				<div class="col-md-6 mb-20 mt-20">
					<h4 class="mb-1">ITソリューション事業（SES）</h4>
					<hr />
					<div class="">
						<ul class="ordered-list">
							<li>高度な技術力を持つエンジニアの派遣</li>
							<li>クライアント企業の開発プロジェクトをサポート</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 mt-sm-30  mb-20 mt-20">
					<h4 class="mb-1">ECサイトの企画・開発</h4>
					<hr />
					<div class="">
						<ul class="ordered-list">
							<li>お客様のニーズを的確に捉えた売上向上に直結するサイト設計</li>
							<li>ユーザー体験を重視した使いやすいECサイトの構築</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 mt-sm-30  mb-20 mt-20">
					<h3 class="mb-1">顧客管理・営業支援</h3>
					<hr />
					<div class="">
						<ul class="ordered-list">
							<li>業務効率化を徹底的に追求したシステム設計</li>
							<li>顧客や商談の情報を可視化できる</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 mt-sm-30  mb-20 mt-20">
					<h4 class="mb-1">AIソリューション</h4>
					<hr />
					<div class="">
						<ul class="ordered-list">
							<li>最新の人工知能技術を活用した革新的なソリューション提供</li>
							<li>ビジネスプロセスの最適化や意思決定支援</li>
						</ul>
					</div>
				</div>					
			</div>
		</div>			
	</div>
	<div class="container box_1170">
		<div class="section-top-border">
			<h3 class="mb-30">私たちの強み</h3>
			<div class="row">
				<div class="col-md-3">
					<img src="/d.jpg" alt="" class="img-fluid">
				</div>
				<div class="col-md-9 mt-sm-20">
					
					<p><strong>幅広い技術領域:</strong> SESから最新のAIまで、多様なデジタルソリューションを一貫して提供</p>
					<p><strong>顧客中心のアプローチ:</strong> お客様のニーズを深く理解し、最適なソリューションを提案</p>
					<p><strong>業界特化の専門知識:</strong> 特に製造業における深い業界知識と豊富な経験</p>
					<p><strong>結果にコミット:</strong> 売上向上や生産性改善など、具体的な成果にコミットする姿勢</p>
				</div>
			</div>
		</div>		
	</div>


</div>

<Footer />
