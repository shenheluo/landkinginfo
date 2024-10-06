<script>
    import { MetaTags  } from "svelte-meta-tags";

    export let title="東京申和デジタル株式会社"
    export let description="東京申和デジタル株式会社 ❘ ECサイトの企画・開発から、ITソリューション事業（SES）、製造業向けのERP・MESシステム開発"
    export let keywords=["東京申和デジタル株式会社","ECサイトの企画・開発","製造業向けのERP","ITソリューション事業（SES）","MESシステム開発","システム開発","システム設計"]
</script>
<MetaTags
  title="{title}"
  description="{description}"
  keywords="{keywords}"

  canonical="https://LandKingInfo.com/aboutus/"
  openGraph={{
    url: 'https://LandKingInfo.com/',
    title: "東京申和デジタル株式会社",
    type: 'website',
    description: '東京申和デジタル株式会社 ❘ ECサイトの企画・開発から、ITソリューション事業（SES）、製造業向けのERP・MESシステム開発',
    images: [
      {
        url: "https://LandKingInfo.com/src/lib/images/logo1.png",
        width: 580,
        height: 100,
        alt: 'LOGO'
      },
    ],
    siteName: '東京申和デジタル株式会社'
  }}
/>