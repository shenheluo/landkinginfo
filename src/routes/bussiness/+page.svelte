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
						・エピソード：急成長中のフィンテック企業に対し、新規モバイル決済サービスの開発を支援。アジャイル開発手法を採用し、短期間で高品質なサービスをリリースしました。
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
						・結果：新規顧客獲得率が前年比150%増、リピート率が25%向上
					</blockquote>
				</div>
			</div>
		</div>	
		
		<div class="section-top-border">
			<h3 class="mb-30">顧客管理・営業支援、金融機関へのITソリューション</h3>
			<div class="row">
				<div class="col-lg-12">
					<p class="sample-text">
						Salesforceは、高度なカスタマイズ性と、営業活動の自動化、データ分析機能などを備えており、特に金融機関においては、顧客情報の統合管理や、パーソナライズされた顧客対応に活用されています。
						大規模な基幹システムの開発に適しており、高い信頼性と安定性を誇ります。多くの金融機関では、COBOLで開発されたレガシーシステムが稼働しており、これらのシステムと新たなシステムを連携させることが求められています。
					</p>
					<blockquote class="generic-blockquote">
						■実例：
						<br>
						<br>
						・大手金融機関の顧客管理システムの開発
						<br>
						・課題: 金融機関は、長年利用してきたCOBOLで開発された基幹システムを抱えており、新たなシステムとの連携が困難でした。
						<br>
						・解決策: ミドルウェアを導入し、COBOLシステムから顧客情報や取引履歴をSalesforceに連携させ、Salesforce上で最新の顧客情報を活用します。
						<br>
						・結果：業務の自動化が実現し、人手によるデータ入力作業が削減されます。また、最新の顧客情報に基づいた迅速な意思決定が可能になります。
					</blockquote>
				</div>
			</div>
		</div>		
	</div>
</div>

<Footer/>
