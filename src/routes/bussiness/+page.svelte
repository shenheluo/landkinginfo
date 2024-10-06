<script lang="ts">
	import Header from '../Components/Header.svelte';
	import Footer from '../Components/Footer.svelte';
	import HeaderSliderArea from "../Components/HeaderSliderArea.svelte";

	import BUSSINESSIMG from "$lib/img/bussiness_technology.jpg";
</script>

<Header />

<HeaderSliderArea image={BUSSINESSIMG} title="事業紹介" />
<div class="whole-wrap">
	<div class="container box_1170">
		<div class="section-top-border">
			<h3 class="mb-30">ITソリューション事業（SES）</h3>
			<div class="row">
				<div class="col-lg-12">
					<p class="sample-text">
						SES（System Engineering Service）は、顧客企業に対して技術者を派遣し、システム開発や保守、運用などのIT関連サービスを提供するビジネスモデルです。
						お客様の要望に応じて、必要なスキルを持つエンジニアを適切に配置し、プロジェクトの成功を支援します。
						老朽化した基幹システムの刷新プロジェクトで、顧客企業内のIT部門と密接に連携しながら、要件定義から設計、開発、テスト、運用までを一貫してサポートしました。
					</p>
					<blockquote class="generic-blockquote">
						■実例：
						<br>
						<br>
						・プロジェクト期間：6ヶ月
						<br>
						・派遣人数：8名（スクラムマスター1名、フロントエンドエンジニア3名、バックエンドエンジニア3名、QAエンジニア1名）
						<br>
						・成果：生産管理、在庫管理、販売管理などの業務効率が30%向上し、リアルタイムな経営情報の把握が可能になりました。
						<br>
						・エピソード：急成長中のフィンテック企業に対し、新規モバイル決済サービスの開発を支援。アジャイル開発手法を採用し、短期間で高品質なサービスをリリースしました。”
					</blockquote>
				</div>
			</div>
		</div>		

		<div class="section-top-border">
			<h3 class="mb-30">ECサイトの企画・開発</h3>
			<div class="row">
				<div class="col-lg-12">
					<p class="sample-text">
						ECサイトの企画・開発が単なるウェブサイト制作にとどまらず、ビジネス戦略と密接に結びます。
						クライアントの業界特性とビジネス目標を深く理解し、柔軟な対応と迅速な意思を決定することで、
						お客様のニーズに合わせたサイトを構築します。データ分析分析と継続な改善を通じて、ユーザー体験を向上させ、売上向上に貢献します。
					</p>
					<blockquote class="generic-blockquote">
						■実例：
						<br>
						<br>
						・大手食品メーカーのD2C ECサイト
						<br>
						・課題：既存の卸売中心のビジネスモデルから直接消費者への販売への移行
						<br>
						・解決策：パーソナライズされたレコメンデーションシステムの導入、定期購入機能の実装、レシピ提案機能との連

						<br>
						・結果：新規顧客獲得率が前年比150%増、リピート率が25%向上”
					</blockquote>
				</div>
			</div>
		</div>	
		
		<div class="section-top-border">
			<h3 class="mb-30">ERP・MESシステム開発</h3>
			<div class="row">
				<div class="col-lg-12">
					<p class="sample-text">
						製造業向けERP・MESシステムの導入は、生産性向上、コスト削減、品質改善など、多岐にわたる効果をもたらします
						お客様の業務プロセスを十分に理解し、カスタマイズされたソリューションを提供することが可能です。
					</p>
					<blockquote class="generic-blockquote">
						■実例：
						<br>
						<br>
						・食品製造業
						<br>
						・課題: トレーサビリティの向上と品質管理の強化
						<br>
						・解決策: IoTセンサーと連携したMESシステムを実装
						<br>
						・結果：製品回収時間が60%短縮、納期遵守率が15%向上、生産計画作成時間が70%削減。”
					</blockquote>
				</div>
			</div>
		</div>		
	</div>
</div>

<Footer/>
