import React, { Component } from 'react'
import { NewsItem } from './NewsItem'

export default class Hero extends Component {
  articles = [
    {
      "source": {
      "id": null,
      "name" : "ReadWrite"
      },
      "author": "Radek Zielinski",
      "title": "Qualcomm’s Snapdragon X Elite aims to dethrone Intel and Apple in laptops",
      "description": "In a bold move to challenge the dominance of Apple and Intel in the laptop market, Qualcomm announced its most […]\nThe post Qualcomm’s Snapdragon X Elite aims to dethrone Intel and Apple in laptops appeared first on ReadWrite.",
      "url": "https://readwrite.com/qualcomms-snapdragon-x-elite-aims-to-dethrone-intel-and-apple-in-laptops/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2023/10/Qualcomm-Snapdragon-X-Elite-1.png",
      "publishedAt": "2023-10-27T01:14:08Z",
      "content": "In a bold move to challenge the dominance of Apple and Intel in the laptop market, Qualcomm announced its most powerful and ambitious system-on-a-chip (SoC) for Windows PCs yet – the Snapdragon X Eli… [+2430 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "ITC order could ban Apple Watch imports in the US, but Apple can still appeal",
      "description": "Apple has been facing a long-running patent infringement battle with medical technology company Masimo over the Apple Watch. Apple has already suffered major defeats in court, as the US International Trade Commission (ITC) seems to agree that the Apple Watch …",
      "url": "https://9to5mac.com/2023/10/26/itc-order-ban-apple-watch-us/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-paid-a-Masimo-exec-for-O2-tech.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-10-27T00:12:00Z",
      "content": "Apple has been facing a long-running patent infringement battle with medical technology company Masimo over the Apple Watch. Apple has already suffered major defeats in court, as the US International… [+2196 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Benjamin Mayo",
      "title": "Halloween streaming: The Enfield Poltergeist mystery explored in new Apple TV+ series",
      "description": "Apple TV+ today releases a new documentary series covering the spooky phenomenon known as The Enfield Poltergeist, perfectly timed for the Halloween season. All four episodes are streaming now.\n\n\n\n more…",
      "url": "https://9to5mac.com/2023/10/26/halloween-stream-the-enfield-poltergeist-apple-tv/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/apple-tv-the-enfield-poltergeist.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-10-27T01:00:00Z",
      "content": "Apple TV+ today releases a new documentary series covering the spooky phenomenon known as The Enfield Poltergeist, perfectly timed for the Halloween season. All four episodes are streaming now.\r\nThe … [+1989 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "Apple Watch import ban up to Biden administration after ITC order",
      "description": "Masimo's patent lawsuit against Apple may end in an Apple Watch ban after an ITC order, but it's up to President Biden's administration and potential appeals that will follow.Apple Watch sensorsMasimo filed a lawsuit with the US District Court in 2020 then th…",
      "url": "https://appleinsider.com/articles/23/10/27/apple-watch-import-ban-up-to-biden-administration-after-itc-order",
      "urlToImage": "https://photos5.appleinsider.com/gallery/56997-115896-Series-9-sensor-xl.jpg",
      "publishedAt": "2023-10-27T01:00:54Z",
      "content": "Apple Watch sensors\r\nMasimo's patent lawsuit against Apple may end in an Apple Watch ban after an ITC order, but it's up to President Biden's administration and potential appeals that will follow.\r\nM… [+2209 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.jp"
      },
      "author": "岩田リョウコ",
      "title": "消費者団体が投げかける「Appleの環境対策ってどれだけ本気なの？」",
      "description": "欧州消費者機構（BEUC）を含む複数の団体が、Appleがカーボンニュートラルを達成している企業であるとの主張に疑義を唱える。",
      "url": "https://www.gizmodo.jp/2023/10/apples-environmental-measures-sufficient.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/26/72a3aa32993c5599f49fe1c72b8e7356.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2023-10-27T01:00:00Z",
      "content": "Apple...\r\nApple\r\nBEUCApple\r\nFinancial TimesMonique Goyens\r\nEUApple\r\n2026\r\nAppleApple Watch Series 9Apple1Apple\r\nApple2030AppleFinancial Times\r\nEU\r\n9EU\r\nUrsula Pachl\r\nApple\r\nApple10"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.jp"
      },
      "author": "R.Mitsubori",
      "title": "今後2年間でAirPodsのラインナップがガラリと一新される説",
      "description": "Apple AirPodsシリーズがリニューアルされるとの噂。2024年にはAirPodsとAirPods Maxが、2025年にはProモデルがリニューアルされる模様。",
      "url": "https://www.gizmodo.jp/2023/10/apple-airpods-renewal.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/10/27/airpods__dh7xkbort402_og.jpeg?w=1280&h=630&f=jpg",
      "publishedAt": "2023-10-27T02:00:00Z",
      "content": "20242025AirPods\r\nBloomberg2024AirPodsAirPods MaxPro\r\n4AirPodsPro\r\nBloombergApple234AirPods23Pro\r\n4ProANC\r\nBloomberg20213AirPods2AirPodsAirPods Pro\r\n2AirPodsANCPro\r\nLightningUSB-C\r\nAppleEULightningAir… [+39 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Pitchfork"
      },
      "author": "Pitchfork",
      "title": "John Lennon: Murder Without a Trial Docuseries Announced at Apple TV+",
      "description": "Kiefer Sutherland will narrate the three-part series chronicling Lennon’s 1980 murder by Beatles fan Mark David Chapman",
      "url": "https://pitchfork.com/news/john-lennon-murder-without-a-trial-docuseries-announced-at-apple-tv/",
      "urlToImage": "https://media.pitchfork.com/photos/653b07d707cadc52b0cdc72d/16:9/w_1280,c_limit/John%20Lennon.jpg",
      "publishedAt": "2023-10-27T02:26:56Z",
      "content": "A new docuseries chronicling John Lennons 1980 murder, John Lennon: Murder Without a Trial, is coming to Apple TV+, the streamer announced today. Kiefer Sutherland is set to narrate. A premiere date … [+1292 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Espinof.com"
      },
      "author": "Joel Calata",
      "title": "Llega a HBO Max el thriller de cabaña misteriosa con Dave Bautista que vio muy poca gente en salas",
      "description": "La temporada de Halloween es perfecta para quedarse en casa y disfrutar de películas de terror, que si bien nos invitan a quedarnos pegados a la pantalla con su trama, muchas veces el efecto que logran en nosotros es el de no querer salir de la casa por compl…",
      "url": "https://www.espinof.com/otros/llega-a-hbo-max-thriller-cabana-misteriosa-dave-bautista-que-vio-muy-poca-gente-salas",
      "urlToImage": "https://i.blogs.es/f07ed0/llega-a-hbo-max-el-thriller-de-cabana-misteriosa-con-dave-bautista-que-vio-muy-poca-gente-en-salas/840_560.jpeg",
      "publishedAt": "2023-10-27T00:31:25Z",
      "content": "La temporada de Halloween es perfecta para quedarse en casa y disfrutar de películas de terror, que si bien nos invitan a quedarnos pegados a la pantalla con su trama, muchas veces el efecto que logr… [+2074 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Techdirt"
      },
      "author": "Karl Bode",
      "title": "Apple Now Supports A Federal Right To Repair Law (Its Lawyers Will Help Write)",
      "description": "Eager to maintain a lucrative repair monopoly over its products, Apple has had a long history of bullying independent repair shops. Apple lobbyists have also falsely claimed that making its products easier and less expensive to repair would result in vast unt…",
      "url": "https://www.techdirt.com/2023/10/26/apple-now-supports-a-federal-right-to-repair-law-its-lawyers-will-help-write/",
      "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
      "publishedAt": "2023-10-27T00:20:40Z",
      "content": "from the fix-your-own-shit dept\r\nEager to maintain a lucrative repair monopoly over its products, Apple has had a long history of bullying independent repair shops. Apple lobbyists have also falsely … [+2273 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GSMArena.com"
      },
      "author": "Vlad",
      "title": "There may not be an Apple Watch Ultra 3 next year",
      "description": "Last month the Apple Watch Ultra 2 became official, one year after its predecessor, the original Ultra. With that in mind, you might be expecting the Apple Watch Ultra 3 to be announced alongside the iPhone 16 generation in September of 2024.\n\nThat would be a…",
      "url": "https://www.gsmarena.com/there_may_not_be_an_apple_watch_ultra_3_next_year-news-60381.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/10/apple-watch-ultra-3-maybe-not-in-2024/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2023-10-27T02:09:01Z",
      "content": "Last month the Apple Watch Ultra 2 became official, one year after its predecessor, the original Ultra. With that in mind, you might be expecting the Apple Watch Ultra 3 to be announced alongside the… [+1366 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MacStories"
      },
      "author": "Federico Viticci",
      "title": "iOS 17.2 Beta’s Sticker Reactions Need a Different Approach",
      "description": "The first developer beta of iOS 17.2 was released earlier today, and among a variety of new features (I’ve been sharing some of the highlights on my Mastodon), there’s the highly anticipated expansion of Tapbacks with custom sticker reactions. The problem is …",
      "url": "https://www.macstories.net/linked/ios-17-2-betas-sticker-reactions-need-a-different-approach/",
      "urlToImage": "https://56243e3f6f46fe44a301-deabeb5f3878e3553d0b065ea974f9bf.ssl.cf1.rackcdn.com/256px.png",
      "publishedAt": "2023-10-27T01:43:11Z",
      "content": "The first developer beta of iOS 17.2 was released earlier today, and among a variety of new features (I’ve been sharing some of the highlights on my Mastodon), there’s the highly anticipated expansio… [+1864 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "‘Five Nights At Freddy’s’ Frenzy Fires Up With Around $7M+ In Previews – Box Office",
      "description": "EXCLUSIVE: “We may have a big hit on our hands,” beamed one person close to the production of Universal/Blumhouse’s feature take of videogame Five Nights at Freddy‘s today. And while the movie, which hits theatrical-day-and-date today on screens at 2PM and on…",
      "url": "https://deadline.com/2023/10/box-office-five-nights-at-freddys-1235584788/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2023/10/MCDFINI_UV006-e1698368179355.jpg?w=1024",
      "publishedAt": "2023-10-27T01:30:04Z",
      "content": "EXCLUSIVE: “We may have a big hit on our hands,” beamed one person close to the production of Universal/Blumhouse’s feature take of videogame Five Nights at Freddy‘s today. And while the movie, which… [+2383 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Impress.co.jp"
      },
      "author": null,
      "title": "【笠原一輝のユビキタス情報局】IntelやAppleを超越したSnapdragon X EliteのCPU性能。今度こそArm版Windows普及に弾み？",
      "description": "Qualcommは10月24日～10月26日(米国時間)の3日間に、同社の製品発表年次イベント「Snapdragon Summit 2023」を、米ハワイ州 マウイ島で開催している。この中でQualcommは、同社のPC向け最新SoCとなるSnapdragon X Eliteを発表し、2024年の半ばまでに出荷する製品に採用されると明らかにした。",
      "url": "https://pc.watch.impress.co.jp/docs/column/ubiq/1542491.html",
      "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1542/491/001.jpg",
      "publishedAt": "2023-10-27T01:23:03Z",
      "content": "Qualcomm10241026()3Snapdragon Summit 2023 QualcommPCSoCSnapdragon X Elite2024 \r\n Snapdragon X EliteCPUQualcommOryon CPUGPUAdreno GPUNPUHexagon NPUAppleMIntelCorePCSoCCPU \r\n Snapdragon X EliteArmWindo… [+4120 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Appbank.net"
      },
      "author": "岩佐",
      "title": "Apple Watchの「バッテリーの異常な消耗」報告が相次ぐ、原因は？",
      "description": "Apple Watch向けの新OS「watchOS 10.1」がリリースされましたが、このアップデートの後、多くのApple Watchユーザーがバッテリーの異常な消耗の問題を訴えているようです。テックメディア「9to5 […]",
      "url": "https://www.appbank.net/2023/10/27/technology/2605875.php",
      "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/10/2023-1026-Apple-Watch-thumb-1.jpeg",
      "publishedAt": "2023-10-27T02:48:02Z",
      "content": "Apple WatchOSwatchOS 10.1Apple Watch9to5Mac\r\n*Category:\r\n Technology *Source9to5Mac ,Reddit(1) ,Reddit(2) ,Apple\r\nApple Watch\r\nApple WatchRedditApple\r\nDied twice in 24 hours after update. DO NOT UPDA… [+898 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Techbang.com"
      },
      "author": "T客播",
      "title": "「跌倒偵測」救了很多人的命？Appple Watch還生活中還有更多實用的場景",
      "description": "「跌倒偵測」救了很多人的命？Appple Watch還生活中還有更多實用的場景相信前陣子大家都看到新聞報導，台灣有位辛先生寫信給蘋果執行長庫克，感謝蘋果開發的APPLE WATCH救了他一命。Apple Wacht的跌倒偵測救人的新聞從它這功能上線，一直都時有所聞，今天我們就來聊聊Apple Wacht的生活應用場景。\n\r\n\n\n \nＱ：今年新推出的Apple Watch是幾第幾代的產品？\nＡ：第9代，第一代的Apple Watch在2015年推出。\n \nＱ：跌到偵測功能是哪一代的Apple Watch開始推出的？…",
      "url": "https://www.techbang.com/posts/110645-fall-detection-saved-many-lives-appple-watch-also-has-more",
      "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/110645/original/3138d9ece1fed1d5e85ce0c5f08db277.jpg?1698308496",
      "publishedAt": "2023-10-27T02:00:00Z",
      "content": "APPLE WATCHApple WachtApple Wacht\r\nApple Watch\r\n9Apple Watch2015\r\nApple Watch\r\nApple Watch S4\r\nApple Watch\r\nApple Watch\r\nApple WatchApple WatchApple Watch\r\nApple Watch\r\nApple Watch\r\nLTEeSIM\r\nApple Wa… [+106 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
      "title": "Apple iOS 17.1 iPhone Software Release: Should You Upgrade?",
      "description": "Read on for how it’s going since it’s been out.",
      "url": "https://www.forbes.com/sites/davidphelan/2023/10/26/apple-ios-171-iphone-software-release-should-you-upgrade/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65396c3220ac5b8689124d09/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-10-27T03:12:01Z",
      "content": "The latest iOS release is here. \r\nApple\r\nThe latest iPhone software has landed. Its a full point update, iOS 17.1, and includes new features as well as bug squishes and security fixes. You can read m… [+4215 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Olhardigital.com.br"
      },
      "author": "Júlia Dal Rovere",
      "title": "Seu Direito Digital: Apple pode perder a marca iPhone para a Gradiente?",
      "description": "Nosso colunista Leandro Alvarenga explicou como as leis brasileiras se aplicam nas redes sociais. Confira!\nO post Seu Direito Digital: Apple pode perder a marca iPhone para a Gradiente? apareceu primeiro em Olhar Digital.",
      "url": "https://olhardigital.com.br/2023/10/26/videos/seu-direito-digital-apple-pode-perder-a-marca-iphone-para-a-gradiente/",
      "urlToImage": "https://proxy.olhardigital.com.br/wp-content/uploads/2023/10/apple-x-gradiente.png",
      "publishedAt": "2023-10-27T00:26:38Z",
      "content": "âNa ediÃ§Ã£o desta quinta-feira (26) da coluna Seu Direito Digital, o advogado e colunista do Olhar Digital Leandro Alvarenga falou sobre o caso âGradiente vs Appleâ. Resumindo, a empresa brasi… [+1556 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Olhardigital.com.br"
      },
      "author": "Júlia Dal Rovere",
      "title": "Confira o Olhar Digital  News na íntegra",
      "description": "\"Pedaço\" da Terra desaparecido, primeiro instituto de segurança de IA e vazamento na estação espacial são alguns destaques de hoje\nO post Confira o Olhar Digital  News na íntegra apareceu primeiro em Olhar Digital.",
      "url": "https://olhardigital.com.br/2023/10/26/videos/confira-o-olhar-digital-news-na-integra-134/",
      "urlToImage": "https://proxy.olhardigital.com.br/wp-content/uploads/2023/10/Marisa-Silva-26-de-outubro-de-2023.jpg",
      "publishedAt": "2023-10-27T00:36:06Z",
      "content": "Veja alguns destaques da ediÃ§Ã£o desta quinta-feira (26)\r\nBrasil e Espanha irÃ£o criar o maior mapa 3D do Universo\r\nVocÃª viu aqui no Olhar Digital News que pesquisadores brasileiros e espanhÃ³is se… [+2262 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Amazon, Ford, Intel, Chipotle, Apple: Why These Five Stocks Are On Investors' Radars Today",
      "description": "U.S. stocks traded lower toward the end of trading, with the Nasdaq Composite falling more than 1.7% on Thursday to 12,595.60. The Dow traded down 0.76% to 32,784.30. The S&P 500 also experienced a decline, dropping 1.18% to 4,137.23. These are the top stocks…",
      "url": "https://biztoc.com/x/bf4af17d9a74d47c",
      "urlToImage": "https://c.biztoc.com/p/bf4af17d9a74d47c/s.webp",
      "publishedAt": "2023-10-27T02:42:08Z",
      "content": "U.S. stocks traded lower toward the end of trading, with the Nasdaq Composite falling more than 1.7% on Thursday to 12,595.60. The Dow traded down 0.76% to 32,784.30. The S&amp;P 500 also experienced… [+294 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Tinhte.vn"
      },
      "author": "no-reply@tinhte.vn (P.W), P.W",
      "title": "Trung Quốc điều tra thuế và quyền sử dụng đất của Foxconn",
      "description": "Hon Hai Precision Industry Co., quen thuộc hơn với anh em là Foxconn, đơn vị gia công iPhone lớn nhất cho Apple đang bị chính quyền Bắc Kinh tiến hành vài cuộc điều tra về việc hoạt động của họ tại Trung Quốc.",
      "url": "https://tinhte.vn/thread/trung-quoc-dieu-tra-thue-va-quyen-su-dung-dat-cua-foxconn.3729867/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/10/8159367_cover-foxconn.jpg",
      "publishedAt": "2023-10-27T02:07:31Z",
      "content": "Hon Hai Precision Industry Co., quen thuc hn vi anh em là Foxconn, n v gia công iPhone ln nht cho Apple ang b chính quyn Bc Kinh tin hành vài cuc iu tra v vic hot ng ca h ti Trung Quc.C quan thu v hi… [+484 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Juggly.cn"
      },
      "author": "juggly",
      "title": "スマホ背面にピタッと貼り付きクリアに通話音声を録音する「magmo」がソースネクストより発売",
      "description": "ソースネクストは 10 月 26 日、マグネットの磁力でスマホ背面にピタッと貼り付きスマホ表面の振動から通話相手の声を拾う画期的な仕組みのスマホ専用ボイスレコーダー「magmo（マグモ）」の販売を開始しました。価格は 1 [...]",
      "url": "https://juggly.cn/archives/250525.html",
      "urlToImage": null,
      "publishedAt": "2023-10-27T03:00:44Z",
      "content": "10 26 magmo 19,800 \r\nmagmo Apple MagSafe magmo \r\nMagSafe Apple magmo Android \r\nmagmo USB 32GB 500 6 \r\nSource :"
      },
      {
      "source": {
      "id": null,
      "name": "ComingSoon.net"
      },
      "author": "Harshika Bhatia",
      "title": "Slow Horses Season 1 Streaming: Watch & Stream Online via Apple TV Plus",
      "description": "Slow Horses Season 1 is a spy thriller television series adapted from the Slough House series of novels written by Mick Herron. The first season of the show premiered on April 1, 2022, and concluded on April 29, 2022. In Slow Horses Season 1, the story revolv…",
      "url": "https://www.comingsoon.net/guides/news/1379051-slow-horses-season-1-streaming-watch-stream-online-via-apple-tv-plus",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/10/Collage-Maker-27-Oct-2023-08-25-AM-5898.jpg?resize=1200,630",
      "publishedAt": "2023-10-27T02:59:36Z",
      "content": "Slow Horses Season 1 is a spy thriller television series adapted from the Slough House series of novels written by Mick Herron. The first season of the show premiered on April 1, 2022, and concluded … [+2969 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ComingSoon.net"
      },
      "author": "Disheeta Maheshwari",
      "title": "Lessons in Chemistry Season 1 Streaming: Watch & Stream Online via Apple TV Plus",
      "description": "Lessons in Chemistry Season 1 is an American drama miniseries based on Bonnie Garmus’ novel of the same name. Set in the 1950s, it centers on Elizabeth Zott, who is truly passionate about becoming a scientist. She is fired from her own lab and comes across se…",
      "url": "https://www.comingsoon.net/guides/news/1379643-lessons-in-chemistry-season-1-streaming-watch-stream-online-via-apple-tv-plus",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/10/Collage-Maker-27-Oct-2023-08-21-AM-920.jpg?resize=1200,630",
      "publishedAt": "2023-10-27T02:52:24Z",
      "content": "Lessons in Chemistry Season 1 is an American drama miniseries based on Bonnie Garmus novel of the same name. Set in the 1950s, it centers on Elizabeth Zott, who is truly passionate about becoming a s… [+2227 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ComingSoon.net"
      },
      "author": "Disheeta Maheshwari",
      "title": "The Morning Show Season 2 Streaming: Watch & Stream Online via Apple TV Plus",
      "description": "The Morning Show Season 2 is a workplace drama series loosely inspired by Brian Stelter 2013’s book Top of the Morning: Inside the Cutthroat World of Morning TV. It revolves around the crew of the fictional news program The Morning Show, as they navigate thro…",
      "url": "https://www.comingsoon.net/guides/news/1379575-the-morning-show-season-2-streaming-watch-stream-online-via-apple-tv-plus",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/10/Collage-Maker-27-Oct-2023-07-34-AM-1741.jpg?resize=1200,630",
      "publishedAt": "2023-10-27T02:05:58Z",
      "content": "The Morning Show Season 2 is a workplace drama series loosely inspired by Brian Stelter 2013s book Top of the Morning: Inside the Cutthroat World of Morning TV. It revolves around the crew of the fic… [+2368 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ComingSoon.net"
      },
      "author": "Disheeta Maheshwari",
      "title": "The Morning Show Season 1 Streaming: Watch & Stream Online via Apple TV Plus",
      "description": "The Morning Show Season 1 is an Emmy-winning workplace drama series that explores both the personal and professional lives of the producers, anchors, and other staff of the fictional morning show of the same name. Created by Jay Carson, it is loosely inspired…",
      "url": "https://www.comingsoon.net/guides/news/1379566-the-morning-show-season-1-streaming-watch-stream-online-via-apple-tv-plus",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/10/Collage-Maker-27-Oct-2023-06-17-AM-598.jpg?resize=1200,630",
      "publishedAt": "2023-10-27T00:48:09Z",
      "content": "The Morning Show Season 1 is an Emmy-winning workplace drama series that explores both the personal and professional lives of the producers, anchors, and other staff of the fictional morning show of … [+2473 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ComingSoon.net"
      },
      "author": "Disheeta Maheshwari",
      "title": "The Morning Show Season 3 Streaming: Watch & Stream Online via Apple TV Plus",
      "description": "The Morning Show Season 3 is an American workplace drama series loosely inspired by Brian Stelter 2013’s book Top of the Morning: Inside the Cutthroat World of Morning TV. Created by Jay Carson, it follows the lives of news anchors, staff, producers, and crew…",
      "url": "https://www.comingsoon.net/guides/news/1379578-the-morning-show-season-3-streaming-watch-stream-online-via-apple-tv-plus",
      "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/10/Collage-Maker-27-Oct-2023-08-13-AM-18.jpg?resize=1200,630",
      "publishedAt": "2023-10-27T02:44:08Z",
      "content": "The Morning Show Season 3 is an American workplace drama series loosely inspired by Brian Stelter 2013s book Top of the Morning: Inside the Cutthroat World of Morning TV. Created by Jay Carson, it fo… [+2533 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Netafull.net"
      },
      "author": "コグレマサト",
      "title": "2024年に「Apple Watch Ultra 3」は登場しない可能性があるとアナリスト",
      "description": "Apple関連情報のサプライチェーンアナリストであるMing-Chi Kuo氏によれば「Apple Watch Ultra 3」がAppleのサプライチェーン内で開発されている兆候は今のところないようです。 MacRum...\n投稿 2024年に「Apple Watch Ultra 3」は登場しない可能性があるとアナリスト は ネタフル に最初に表示されました。",
      "url": "https://netafull.net/apple-watch/0139634.html",
      "urlToImage": "https://netafull.net/wp-content/uploads/2023/10/5131aUmsK8L._SL500.jpg",
      "publishedAt": "2023-10-27T00:30:00Z",
      "content": "AppleMing-Chi KuoApple Watch Ultra 3Apple\r\nMacRumorsKuo: No Apple Watch Ultra 3 Next Year?\r\nThere are currently no signs of an “Apple Watch Ultra 3” being in development within Apple’s supply chain, … [+145 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Netafull.net"
      },
      "author": "コグレマサト",
      "title": "「iOS 17.2 beta 1」ジャーナルアプリやアクションボタンに「翻訳」機能などが追加",
      "description": "「iOS 17.2 beta 1」がリリースされ、ジャーナル（Journal）アプリやアクションボタンに「翻訳」機能などが追加されるなど、多くの新機能や変更が搭載されているのが確認されています。 9to5Macが、iOS...\n投稿 「iOS 17.2 beta 1」ジャーナルアプリやアクションボタンに「翻訳」機能などが追加 は ネタフル に最初に表示されました。",
      "url": "https://netafull.net/ios/0139638.html",
      "urlToImage": "https://netafull.net/wp-content/uploads/2023/09/ios-17-release.jpg",
      "publishedAt": "2023-10-27T01:30:00Z",
      "content": "iOS 17.2 beta 1 is here, and its packed with new features and changes. From the new Journal app to new features for Apple Music and updates to the Action button, head below for a full recap of everyt… [+27 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sspai.com"
      },
      "author": "少数派编辑部",
      "title": "派早报：小米 14 系列发布、微软宣布 Surface 整合 Secured core PCs 方案",
      "description": "徕卡发布 M11-P 相机，Valve 正式发布 SteamVR 2.0 等。查看全文",
      "url": "https://sspai.com/post/83893",
      "urlToImage": "https://cdn.sspai.com/10/27/2023/article/2b65dd1e-e4ab-61b7-a182-d2418f2889b3.png",
      "publishedAt": "2023-10-27T00:50:51Z",
      "content": "14 \r\n10 26 14 ® 8 900 OS 75mm 3000nit 120Hz LTPO \r\n 14\r\n14 1.5K OLED 5000 900 4610mAh 90W 50W / 3999 8+256GB\r\n 14 Pro\r\n14 Pro 2K AMOLED 5000 900 1024 4880mAh 120W 50W / 4999 12+256GB 1, 2\r\n Surface S… [+1011 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Daily Beast"
      },
      "author": "Tracy Connor",
      "title": "Apple Defends Brendan Fraser’s Over-the-Top ‘Killers’ Performance",
      "description": "Nina Westervelt/Variety via Getty\r\nApple Original Films is apparently feeling a wee bit defensive about the criticism of Brendan Fraser’s over-the-top performance in Killers of the Flower Moon. This week the studio tweeted a passage from the book upon which t…",
      "url": "https://www.thedailybeast.com/apple-defends-brendan-frasers-over-the-top-killers-of-the-flower-moon-performance",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1257,w_2235,x_874,y_78/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1698373588/GettyImages-1258649381_ezh0iq",
      "publishedAt": "2023-10-27T02:36:02Z",
      "content": "Apple Original Films is apparently feeling a wee bit defensive about the criticism of Brendan Frasers over-the-top performance in Killers of the Flower Moon. \r\nThis week the studio tweeted a passage … [+1324 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Investor's Business Daily"
      },
      "author": "Investor's Business Daily",
      "title": "Dow Jones Futures Rise As Amazon Jumps After Market Correction Intensifies",
      "description": "The Nasdaq tumbled below its 200-day even as yields fell sharply.",
      "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-correction-intensifies-as-titans-tumble-amazon-earnings/",
      "urlToImage": "https://www.investors.com/wp-content/uploads/2018/11/stock-bear-wave-04-adobe.jpg",
      "publishedAt": "2023-10-27T02:46:22Z",
      "content": "Dow Jones futures rose overnight, along with S&amp;P 500 futures and Nasdaq futures. Amazon.com (AMZN) headlined earnings after the close.\r\nXThe stock market correction intensified Thursday, with the… [+7206 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "Apple admite que o iPhone tem problemas com os carros da BMW e da Toyota",
      "description": "É inegável que a Apple tem tido problemas sérios com o iPhone 15 e o iOS 16. A marca tem tratado de cada uma destas situações e a prova disso foram as várias versões...",
      "url": "https://pplware.sapo.pt/informacao/apple-admite-que-o-iphone-tem-problemas-com-os-carros-da-bmw-e-da-toyota/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2023/10/iphone_bmw_1.jpg",
      "publishedAt": "2023-10-27T00:30:54Z",
      "content": "É inegável que a Apple tem tido problemas sérios com o iPhone 15 e o iOS 16. A marca tem tratado de cada uma destas situações e a prova disso foram as várias versões do iOS lançadas. Uma das últimas … [+1717 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Los Angeles Times"
      },
      "author": "Emily St. Martin",
      "title": "Kiefer Sutherland to narrate Apple TV+'s John Lennon docuseries, 'Murder Without a Trial'",
      "description": "\"John Lennon: Murder Without a Trial\" will be narrated by the Emmy-winning \"24\" star. The docuseries will look at Lennon's cultural influence as well as his sudden demise.",
      "url": "https://www.latimes.com/entertainment-arts/story/2023-10-26/kiefer-sutherland-narrator-apple-tv-john-lennon-docuseries-murder-without-a-trial",
      "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/100589c/2147483647/strip/true/crop/2252x1182+0+0/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2f%2Fce%2F3ced12854be59d799decc5924bd3%2Fsutherland-lennon.jpg",
      "publishedAt": "2023-10-27T02:55:29Z",
      "content": "Kiefer Sutherland has been tapped to narrate an upcoming docuseries about the murder of John Lennon.\r\nApple TV+ announced the three-part docuseries on Thursday, \r\nJohn Lennon: Murder Without a Trial … [+2438 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Gig tickets: Online scams 'made me feel stupid'",
      "description": "With concert ticket prices going up and incredible demand for some shows, fake sales are increasing.",
      "url": "https://www.bbc.co.uk/news/newsbeat-67229429",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/89E8/production/_131540353_harriet1use.jpg",
      "publishedAt": "2023-10-27T00:57:38Z",
      "content": "If you're a music fan looking for tickets to see your favourite artists, you'll recognise the desperate struggle of getting your hands on one.\r\nHarriet Hawkins wanted to go to the final night of Harr… [+5289 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Unwire.hk"
      },
      "author": "唐美鳳",
      "title": "香港加幅高達 28% Apple TV+ 加價即日起生效",
      "description": "繼 Netflix 和 Disney+ 等影視串流平台宣佈加價後，Apple TV+ 昨日亦跟隨，跟 Netflix 只在美國和個別歐洲國家加價不同，Apple TV+ 的價格調整同樣影響香港和其他亞洲市場。Apple TV+ 的美國月費由 6.99 調高至 9.99 美元，年費就有 69 加價至 99 美元，去年 Apple TV+ 才調整過月費，之前為 4.99 美元。\nThe post 香港加幅高達 28% Apple TV+ 加價即日起生效 appeared first on 香港 unwire.hk 玩…",
      "url": "https://unwire.hk/2023/10/27/apple-tv-plus-price-hike/hottopic/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/10/03-26.png",
      "publishedAt": "2023-10-27T02:18:15Z",
      "content": "Netflix Disney+ Apple TV+ Netflix Apple TV+ Apple TV+ 6.99 9.99 69 99 Apple TV+ 4.99 \r\n 43% 53 68 28% 170 250 47% Apple CNBC \r\nApple Arcade News+ 6.99 12.99 Arcade 170 220 29% Apple One Apple \r\ngsmar… [+2 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Unwire.hk"
      },
      "author": "唐美鳳",
      "title": "加州 Apple Store 被劫損失 10 萬美元 五名劫匪仍然在逃",
      "description": "美國加州伯林格姆警方透露，當地一間 Apple Store 於星期二遭到多名賊人闖入行劫。報導指多達 5 名疑犯走入 Apple Store 後，偷走大量 Apple 產品，初步估計損失高達 10 萬美元（約 78.2 萬港元），得手後疑犯乘坐預早準備，沒有掛上車牌的灰色 BMW X5 SUV 離開現場。\nThe post 加州 Apple Store 被劫損失 10 萬美元 五名劫匪仍然在逃 appeared first on 香港 unwire.hk 玩生活．樂科技.",
      "url": "https://unwire.hk/2023/10/27/apple-store-in-california-hit-with-theft/life-tech/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/10/02-26.png",
      "publishedAt": "2023-10-27T02:18:13Z",
      "content": "Apple Store 5 Apple Store Apple 10 78.2 BMW X5 SUV \r\n Apple Store BMW Apple \r\n AppleInsider Apple Apple \r\nappleinsider"
      },
      {
      "source": {
      "id": null,
      "name": "Unwire.hk"
      },
      "author": "唐美鳳",
      "title": "使用 BMW 無線充電後 NFC 失靈 Apple 承認問題將為 iPhone 15 推更新修正",
      "description": "在 iPhone 15 上市不久，有 BMW 車主發現在使用車廂內的無線充電板後，iPhone 15 就會出現異常狀況，NFC 相關的功能會引致失靈，影響 Apple Pay 和數碼車匙功能。除了近年的 BMW 車款，與 BMW 共同開發的 Toyota Supra 亦遇到相同問題，Apple 日前終於確認事件并承諾稍後透過系統更新修正。\nThe post 使用 BMW 無線充電後 NFC 失靈 Apple 承認問題將為 iPhone 15 推更新修正 appeared first on 香港 unwire.hk…",
      "url": "https://unwire.hk/2023/10/27/apple-to-fix-iphone-15-bmw-charging-issue/mobile-phone/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/10/01-26.png",
      "publishedAt": "2023-10-27T02:18:11Z",
      "content": "iPhone 15 BMW iPhone 15 NFC Apple Pay BMW BMW Toyota Supra Apple \r\n Apple BMW Toyota Supra iPhone 15iPhone 15 PlusiPhone 15 Pro iPhone 15 Pro Max NFC Apple Pay NFC iPhone 15 Apple Pay Wallet Could No… [+98 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Unwire.hk"
      },
      "author": "唐美鳳",
      "title": "傳 Apple 考慮推 MacBook 廉價版 郭明錤：M3 版 MacBook Pro 銷量成關鍵",
      "description": "早前有消息指 Apple 計劃推出定位在 MacBook Air 和 MacBook Pro 以下，售價比較相宜的全新 MacBook 去跟 Google 的 Chromebook 競爭。台灣傳媒《DigiTimes》上月曾經報導指這款廉價 MacBook 系列可能會在 2024 年底推出，分析師郭明錤日前亦作出類似的預測。\nThe post 傳 Apple 考慮推 MacBook 廉價版 郭明錤：M3 版 MacBook Pro 銷量成關鍵 appeared first on 香港 unwire.hk 玩生活．…",
      "url": "https://unwire.hk/2023/10/27/kuo-apple-low-cost-macbook-launch-in-2024/notebook/mac-os/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/10/05-18.png",
      "publishedAt": "2023-10-27T02:18:20Z",
      "content": "Apple MacBook Air MacBook Pro MacBook Google Chromebook DigiTimes MacBook 2024 \r\n Apple 10 30 Scary Fast M3M3 Pro M3 Max 1314 16 MacBook Pro M2 Apple 2023 MacBook Pro\r\n Apple MacBook 800 1,000 M3 M3 … [+104 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Unwire.hk"
      },
      "author": "唐美鳳",
      "title": "傳 AirPods 3 銷情欠佳 Apple 明年革新 AirPods 策略",
      "description": "根據《彭博》 Mark Gurman 的最新說法，明年開始 Apple 將會透過推出新型號去為 AirPods 產品線帶來革新。改變包括在全新 AirPods 型號在明年秋季推出後，將現時發售中的 AirPods 第二和第三代下架，該名爆料的專欄作者指 AirPods 第三代銷情未如理想，消費者情願購買較平的第二代。\nThe post 傳 AirPods 3 銷情欠佳 Apple 明年革新 AirPods 策略 appeared first on 香港 unwire.hk 玩生活．樂科技.",
      "url": "https://unwire.hk/2023/10/27/apple-airpods-4-max-pro-rumor-new-features/mobile-music/headphones/",
      "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2023/10/04-25.png",
      "publishedAt": "2023-10-27T02:18:18Z",
      "content": "Mark Gurman Apple AirPods AirPods AirPods AirPods \r\n Apple AirPods AirPods Pro AirPods AirPods 3 AirPods Pro AirPods AirPods Pro Find My \r\nMark Gurman AirPods AirPods AirPods Pro AirPods Max USB-C Ai… [+24 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "DIE WELT"
      },
      "author": "Philipp Vetter, Holger Zschäpitz",
      "title": "Die Zukunft von Siemens Energy und die Lehren der Big-Tech-Zahlen",
      "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Philipp Vetter und Holger Zschäpitz über das Elektroautoproblem von Mercedes, verpasste Zahnarzt-Termine bei Align Technologies und zwei viel gehasste, aber erfolgreiche Tech-Firmen.",
      "url": "https://www.welt.de/podcasts/alles-auf-aktien/article248223624/Boersen-Podcast-Amazon-Microsoft-Alphabet-Die-Lehren-aus-den-Big-Tech-Zahlen.html",
      "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile244546294/4231352447-ci16x9-w1200/vetter-zschae-DWO-Podcast-Teaser-AllesAufAktien-mit-2zu3-vetter-zschaepitz-aw.jpg",
      "publishedAt": "2023-10-27T03:22:40Z",
      "content": "Außerdem geht es um: Siemens, Porsche AG, BMW, Rheinmetall, Intel, IBM, Nordex, Amazon, Alphabet, Microsoft, Meta.\r\nHier können Sie die aktuelle Folge hören:\r\nAbonnieren Sie den Podcast bei Spotify, … [+307 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Vnexpress.net"
      },
      "author": "VnExpress",
      "title": "Apple xác nhận iPhone 15 lỗi sạc không dây trên ôtô",
      "description": "Apple cho biết cảm biến NFC của iPhone 15 xuất hiện lỗi khi sạc bằng bộ sạc không dây trên xe BMW và Toyota.",
      "url": "https://vnexpress.net/apple-xac-nhan-iphone-15-loi-sac-khong-day-tren-oto-4669643.html",
      "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/10/26/bmwiphone1501rotated-169833245-5774-5030-1698332623.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=GKUWWyXIyqkG0uZyE3wduA",
      "publishedAt": "2023-10-27T00:00:00Z",
      "content": "Apple cho bit cm bin NFC ca iPhone 15 xut hin li khi sc bng b sc không dây trên xe BMW và Toyota.Trong thông báo ni b gi ti nhà cung cp dch v y quyn (AASP), Apple cho bit vic sc iPhone 15, 15 Plus, 1… [+1296 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Vnexpress.net"
      },
      "author": "VnExpress",
      "title": "Những chiến dịch quảng cáo gây tiếng vang toàn cầu",
      "description": "Chiến dịch \"Just Do It\" của Nike, \"Share a Coke\" của Coke hay \"Get a Mac\" của Apple... là những quảng cáo hay nhất mọi thời đại bởi truyền tải thông điệp ý nghĩa.",
      "url": "https://vnexpress.net/nhung-chien-dich-quang-cao-gay-tieng-vang-toan-cau-4661158.html",
      "urlToImage": "https://vcdn1-kinhdoanh.vnecdn.net/2023/10/27/g1c-1698368714-3958-1698368747.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=nnkYo1BD1BW2lh2XKrUUOA",
      "publishedAt": "2023-10-27T01:30:00Z",
      "content": "Chin dch \"Just Do It\" ca Nike, \"Share a Coke\" ca Coke hay \"Get a Mac\" ca Apple... là nhng qung cáo hay nht mi thi i bi truyn ti thông ip ý ngha.Coke: \"Share a Coke\"\r\nVi lch s phát trin hn 100 nm tui,… [+5927 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
      },
      {
      "source": {
      "id": null,
      "name": "Www.nzz.ch"
      },
      "author": "Marlen Oehler (oeh), Simon Schaffer (ssi)",
      "title": "PODCAST - Kenya will 1000 Polizisten in die Karibik schicken, um die Gangs in Haiti auszuschalten. Ehrgeizige Pläne, die Spott und Häme bringen",
      "description": "Geht es nach Kenyas Präsident, William Ruto, sollen so bald wie möglich Kenyaner auf Haiti und insbesondere in der Hauptstadt Port-au-Prince für Ruhe und Ordnung sorgen. Kritische Stimmen warnen davor, dass die Polizeieinheiten auf die Schlachtbank geführt wü…",
      "url": "https://www.nzz.ch/podcast/kenyas-ehrgeizige-plaene-fuer-haiti-podcast-nzz-akzent-ld.1760612",
      "urlToImage": "https://img.nzz.ch/2023/10/01/6c31b80c-a21c-422b-bc22-c3e892e21924.jpeg?width=1200&height=675&fit=bound&quality=75&auto=webp&crop=5472,3078,x0,y285&wmark=nzz",
      "publishedAt": "2023-10-27T03:30:00Z",
      "content": "Hören und abonnieren Sie den Podcast «NZZ Akzent» auch auf Spotify,Apple Podcasts oder Castbox.\r\nHaben Sie ein Feedback zum Podcast? Sagen Sie uns Ihre Meinung.\r\nIn dieser Podcast-Episode:\r\nEr sei ho… [+1379 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Technews.tw"
      },
      "author": "邱 倢芯",
      "title": "iOS 17.2 Beta SDK 證實，確定將會有軟體更新「小精靈」",
      "description": "本月早些時候，《彭博社》記者 Mark Gurman 曾報導，蘋果一直在開發一套新系統，以允許員工在 iPhone 新機仍密封在盒裝內時，可以透過無線的方式來替 iPhone 進行軟體更新，不需要事先將手機取出。隨著 iOS 17.2 Beta 1 釋出後，證實了這套系統確實存在。 據 Mark G...",
      "url": "https://technews.tw/2023/10/27/ios-17-2-beta-sdk/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/10/13120006/sophia-stark-2xPgFphVZEE-unsplash.jpg",
      "publishedAt": "2023-10-27T02:57:20Z",
      "content": "Mark Gurman iPhone iPhone iOS 17.2 Beta 1 \r\n Mark Gurman iPhone iPhone iPhone 15 \r\n Xcode 15.1 beta iOS 17.2 beta SDK Mark Gurman FactoryOTALoggerFactoryOTANetworkUtils FactoryOTAWifiUtils OTA \r\nMark… [+67 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Reuters",
      "title": "Google CEO Sundar Pichai to testify on October 30 in US Google antitrust trial",
      "description": "The government, in cross examination, may ask why the company pays billions of dollars annually to ensure that Google search is the default in smartphones.",
      "url": "https://www.moneycontrol.com/news/world/google-ceo-sundar-pichai-to-testify-on-october-30-in-us-google-antitrust-trial-11607691.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/Collage-Maker-29-Sep-2023-01-42-PM-8874-770x433.jpg",
      "publishedAt": "2023-10-27T01:00:16Z",
      "content": "Sundar Pichai, chief executive of Alphabet and its subsidiary Google, will testify on Monday in the once-in-a generation antitrust fight over Google's dominance of search and some parts of search adv… [+1061 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "SoraNews24"
      },
      "author": "Oona McGee",
      "title": "McDonald’s releases Come on Baby New York Burgers in Japan…but where’s the N.Y. flavour?",
      "description": "New burgers fall short of our expectations. McDonald’s is currently giving its customers in Japan a taste of the Big Apple, with a new burger series called “Come on Baby! N.Y. Burgers“. This is the second time the chain has featured the city in a limited-edit…",
      "url": "https://soranews24.com/2023/10/27/mcdonalds-releases-come-on-baby-new-york-burgers-in-japan-but-wheres-the-n-y-flavour/",
      "urlToImage": "https://soranews24.com/wp-content/uploads/sites/3/2023/10/McDonalds-Japan-Come-on-Baby-New-York-Burgers-NY-limited-edition-exclusive-menu-fast-food-news-taste-test-review-photos-2.jpg?w=580&h=305&crop=1",
      "publishedAt": "2023-10-27T01:00:42Z",
      "content": "New burgers fall short of our expectations.\r\nMcDonald’s is currently giving its customers in Japan a taste of the Big Apple, with a new burger series called “Come on Baby! N.Y. Burgers“. This is the … [+3662 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ixbt.com"
      },
      "author": "jin@ixbt.com (Jin)",
      "title": "Mate 60 Pro животворящий. Huawei триумфально обогнала всех китайских производителей по темпам роста",
      "description": "В исследовании Counterpoint показано, что в третьем квартале 2023 года продажи смартфонов в Китае упали на 3% в годовом исчислении, что указывает на то, что рынок, возможно, достиг дна и что приближаются сигналы восстановления рынка. Благодаря недавно выпущен…",
      "url": "https://www.ixbt.com/news/2023/10/27/mate-60-pro-huawei.html",
      "urlToImage": "https://www.ixbt.com/img/n1/news/2023/9/5/c34ea6ebaead4bbda1c6dd93a95a1eeb_large.png",
      "publishedAt": "2023-10-27T03:46:00Z",
      "content": "Counterpoint , 2023 3% , , , , .\r\n Mate 60, Kirin 9000S, Huawei 37% . , Huawei , .\r\n 2023 , Huawei, , . Huawei , , , .\r\n Honor 18,3%, Honor X50 Honor 90. Huawei 3%.\r\n Vivo 17,8%, 13%. Oppo 16%, 10%. … [+58 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ixbt.com"
      },
      "author": "jin@ixbt.com (Jin)",
      "title": "Xiaomi 14 — последний недорогой флагман — продаётся по модели iPhone. Указаны сроки доставки в Китае",
      "description": "После вчерашней презентации Xiaomi 14 первую партию быстро раскупили по предварительным заказам, о чем сообщает Mydrivers. По данным флагманского магазина Xiaomi на площадке JD.com, стандартная версия Xiaomi 14 всё равно доступна для заказа и будет поставлена…",
      "url": "https://www.ixbt.com/news/2023/10/27/xiaomi-14-iphone.html",
      "urlToImage": "https://www.ixbt.com/img/n1/news/2023/9/5/ebd03b62-dbf8-4d53-bc2d-03c952bfa9a4_large.jpg",
      "publishedAt": "2023-10-27T03:36:00Z",
      "content": "Xiaomi 14 , Mydrivers.\r\n Xiaomi JD.com, Xiaomi 14 . , 12 256 -, 11 . 8/256 3 .\r\n Xiaomi , , , . Xiaomi Apple , .\r\n : Xiaomi 14 Xiaomi 14 Pro , 26 , . \r\n-, Xiaomi 3999 , Xiaomi 14 .\r\n Xiaomi 15, 4000 … [+33 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 原色钛金属 9844元",
      "description": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 原色钛金属 9844元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      "url": "https://www.smzdm.com/p/94024640/",
      "urlToImage": "https://y.zdmimg.com/202310/18/652f78a5437e62917.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:40:36Z",
      "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 Watch Ultra2 智能手表 GPS+蜂窝版 49mm 钛金属 5559元包邮",
      "description": "玩家之道升级基于A15仿生芯片打造的S9处理器，新增双指交互手势功能。拼多多此款目前活动售价5559元。",
      "url": "https://www.smzdm.com/p/94025704/",
      "urlToImage": "https://qny.smzdm.com/202310/27/653b04a4433669731.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:40:36Z",
      "content": "Apple Watch Ultra 2 95% Modular Ultra 3000 \r\nApple Watch Ultra 2 S9 Apple Watch Ultra S8 60% 30%2 Apple Watch Ultra iPhone\r\nApple Watch Ultra 2 Double TapDouble Tap \r\nApple Watch Ultra 2 36 72"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 Watch Series 9 智能手表 GPS款 41mm 2369元包邮",
      "description": "玩家之道全新S9 SiP处理器，全新操作手势。拼多多此款目前活动售价2369元。",
      "url": "https://www.smzdm.com/p/94025508/",
      "urlToImage": "https://qny.smzdm.com/202309/14/650267ebe5c1c4587.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:26:52Z",
      "content": "Apple Watch Series 9 Apple S9 56Series 8 60%GPU30%siriAppleiPhone\r\nApple Watch Series 9200013256G\r\nApple Watch Series 9 3618"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 iPad Pro 2022款 11英寸平板电脑 128GB 5198元包邮",
      "description": "玩家之道Apple M2 芯片~拼多多此款目前活动售价5258元，页面下单领取50元优惠券，实付低至5198元，近期好价，感兴趣的值友可以入手。",
      "url": "https://www.smzdm.com/p/94025813/",
      "urlToImage": "https://qny.smzdm.com/202310/26/653a2fc4c48928492.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:40:36Z",
      "content": "2021iPad Pro2022Apple M2 8 10M115% 40%50%iPad Pro  3  ProRes 128GB256GB512GB8GB1TB16GB\r\n11 iPad Pro Liquid 600nit120Hz P3 1200ID\r\niPad Pro 202212001000ProRes HDR4\r\niPadOS 16APP\r\n2022 iPad Pro USB 4 4… [+69 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 MacBook Air 2020款 13.3英寸笔记本电脑（M1、8GB、256GB） 4999元包邮（需用券）",
      "description": "玩家之道强悍M1自研处理器，低功耗相对高性能，无风扇更清净，移动办公头部之选。拼多多此款目前活动售价5049元，页面下单领取50元优惠券，实付低至4999元，近期好价，感兴趣的值友可以入手。",
      "url": "https://www.smzdm.com/p/94026100/",
      "urlToImage": "https://qny.smzdm.com/202303/23/641b916c564027970.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:40:36Z",
      "content": "MacBook Air 13.3 2560x1600 Apple M1 MacBook Air 15 18 \r\nM1 5nm 160 M1 8 CPU 8 GPU 25000 4K 3D M1 Mac 16 11 15 \r\n 8GB 16GB 256GB 512GB1TB 2TB 1.29 30W USB-C 1 MacBook Air 3 40Gb/s 6K Wi-Fi 6"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 256GB 原色钛金属 9899元包邮（需用券）",
      "description": "玩家之道搭载A17 Pro芯片，更新USB-C接口，使用钛合金边框，潜望式长焦镜头~苏宁易购此款目前活动售价9999元，下单领取100元优惠券，实付低至9899元，近期好价，感兴趣的值友可以入手。",
      "url": "https://www.smzdm.com/p/94034016/",
      "urlToImage": "https://y.zdmimg.com/202309/13/6500b1bd853b58430.png_d250.jpg",
      "publishedAt": "2023-10-27T02:23:23Z",
      "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "Apple 苹果 iPhone 15 Pro Max 5G手机 1TB 蓝色钛金属 13899元包邮（需用券）",
      "description": "玩家之道搭载A17 Pro芯片，更新USB-C接口，使用钛合金边框，潜望式长焦镜头~苏宁易购此款目前活动售价13999元，下单领取100元优惠券，实付低至13899元，近期好价，感兴趣的值友可以入手。",
      "url": "https://www.smzdm.com/p/94034456/",
      "urlToImage": "https://y.zdmimg.com/202309/13/6500b1c475f644441.png_d250.jpg",
      "publishedAt": "2023-10-27T02:23:23Z",
      "content": "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 iPad 10 2022款 10.9英寸平板电脑 64GB 3616元包邮",
      "description": "玩家之道搭载A14仿生处理器，采用台积电5nm工艺~拼多多此款目前活动售价3616元。",
      "url": "https://www.smzdm.com/p/94025988/",
      "urlToImage": "https://qny.smzdm.com/202310/27/653b0637e806d7215.jpg_d250.jpg",
      "publishedAt": "2023-10-27T00:40:36Z",
      "content": "iPad 2022iPad ProiPad Air10.9Liquid2360*1640264PPI500nit10.9HomeIDIPad 2022LightningUSB-C\r\nA145nm118 20% 10%16A13280%12001200122°12004K240fps\r\n64GB256GBWLAN5GWi-Fi 6iPad 2022Apple PenciliPadOS 16 iPad"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "百亿补贴：Apple 苹果 iPhone15 Plus 5G智能手机 128GB 6098元包邮（需用券）",
      "description": "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~拼多多此款目前活动售价6498元，页面下单领取400元优惠券，实付低至6498元，近期好价，感兴趣的值友可以入手。",
      "url": "https://www.smzdm.com/p/94025322/",
      "urlToImage": "https://y.zdmimg.com/202309/13/6500b3a2b43f66569.png_d250.jpg",
      "publishedAt": "2023-10-27T00:26:52Z",
      "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCI-P360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSB-C\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smzdm.com"
      },
      "author": null,
      "title": "数码好价早班车：小米 14 5G智能手机新品发售，低至3999元起！ 苹果 iPhone 15 5G智能手机 百人团低至5049元；索尼 Alpha 7 IV微单相机 绝对值15499元~",
      "description": "玩家之道数码产品是我们生活中不可或缺的伙伴，它们不仅提高了我们的工作效率，也丰富了我们的娱乐方式。近期，数码市场上涌现出了许多新鲜有趣的产品和技术，让我们一起来看看都有哪些吧。本文将为您介绍最新的数码资讯，包括手机、电脑、平板、相机等各类数码设备，以及智能家居、人工智能等前沿领域的最新进...",
      "url": "https://www.smzdm.com/p/93914113/",
      "urlToImage": "https://qny.smzdm.com/202310/27/653aff0940ecd5419.png_d250.jpg",
      "publishedAt": "2023-10-27T00:26:52Z",
      "content": "MI 14 5G 8GB+256GB3999Summilux9008~399912GB+256GB429916GB+512GB459916GB+1TB499910312011223592000~1413...|88275611414138.29mm193g8.28mm188g\r\nTCL6.36OLEDC81.5K 460PPI1-120Hz3000DCP3 AI\r\n8 Gen 31+5+2CPU… [+2236 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ozbargain.com.au"
      },
      "author": "RichardL",
      "title": "Chupa Chups Assorted Chew Bag 175g - $2 ($1.80 S&S) + Delivery ($0 with Prime/ $59 Spend) @ Amazon AU",
      "description": "Amazon price-matching Woolworths\n\nAbout this item\n\n\n <ul>\n <li>Delicious, long lasting, strawberry, cola and green apple soft chews</li>\n <li>Each piece is individually wrapped</li>\n <li>Ideal for everyone and perfect for sharing, parties and gifting</li>\n </…",
      "url": "https://www.ozbargain.com.au/node/808134",
      "urlToImage": "https://files.ozbargain.com.au/n/34/808134x.jpg?h=fc1f0b41",
      "publishedAt": "2023-10-27T01:17:27Z",
      "content": "These are pretty addictive, I usually have a sweet tooth, so I kind of binged on eating them, just make sure not to do that and don't let your kids do that too, really makes you super constipated and… [+20 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ozbargain.com.au"
      },
      "author": "djtech",
      "title": "20% Storewide (Exclusions Apply) + $10 Delivery ($0 in-Store/ C&C/ $50 Order) @ T2",
      "description": "Receive 20% off storewide (full price and marked down product).\n\nOffer is available online from 23rd October 7:00pm AEDT and instore from 24th October and ending 27th October at 11:59pm AEDT or at promoter's discretion. Discount automatically applied at check…",
      "url": "https://www.ozbargain.com.au/node/808146",
      "urlToImage": "https://files.ozbargain.com.au/n/46/808146x.jpg?h=f5216073",
      "publishedAt": "2023-10-27T01:56:37Z",
      "content": "Receive 20% off storewide (full price and marked down product).\r\nOffer is available online from 23rd October 7:00pm AEDT and instore from 24th October and ending 27th October at 11:59pm AEDT or at pr… [+744 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Toodaylab.com"
      },
      "author": "吴诗源",
      "title": "今日消费资讯：% ARABICA 上海影城店开业、舒淇出任 Bottega Veneta 全球品牌大使",
      "description": "% ARABICA 上海影城店开业10 月 26 日，% ARABICA 在上海影城的新店正式开业，店铺设计融入了鲜明的黄色。门店是由西班牙建筑设计公司 selgascano 负责设计的。这是 % ARABICA 在上海的第 18 家门店，同时也是全球第 164 号店。舒淇出任 Bottega Veneta 全球品牌大使10 月 26 日，Bottega Veneta 宣布舒淇出任全球品牌大使。接下来舒淇将出镜品牌的一组全新的广告大片，大片将由摄影师 Sander Muylaert 掌镜。朗格推出 ZEITWER…",
      "url": "https://www.toodaylab.com/82337",
      "urlToImage": null,
      "publishedAt": "2023-10-27T00:30:00Z",
      "content": "% ARABICA \r\n10 26 % ARABICA selgascano\r\n% ARABICA 18 164 \r\nBottega Veneta \r\n10 26 Bottega Veneta \r\nSander Muylaert \r\nZEITWERK 18K \r\n10 24 ZEITWERK 18K 30 44.2 \r\n2015 ZEITWERK 950 15 ZEITWERK 10 \r\n 10… [+172 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Daily Caller"
      },
      "author": "Mary Rooke",
      "title": "ROOKE: Men Have To Decide If Women Are Worth The Fight",
      "description": "Bud Light and UFC are entering into a partnership that will be the beer brand&#039;s latest attempt at resurrecting its reputation.",
      "url": "https://dailycaller.com/2023/10/26/rooke-men-women-ufc-dana-white-bud-light-conservatives/",
      "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2023/10/GettyImages-1165171335-scaled-e1698361845920.jpg",
      "publishedAt": "2023-10-27T00:55:41Z",
      "content": "Bud Light and UFC are entering into a partnership that will be the beer brand’s latest attempt at resurrecting its reputation with average American men after it used progressive idol Dylan Mulvaney a… [+4196 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ryukoku.ac.jp"
      },
      "author": null,
      "title": "追記 (2023.10.27)",
      "description": "セキュリティホール memo - 各種 OS のセキュリティホールの備忘録",
      "url": "http://www.st.ryukoku.ac.jp/~kjm/security/memo/2023/10.html#20231027_tuiki",
      "urlToImage": null,
      "publishedAt": "2023-10-27T00:00:00Z",
      "content": "Last modified: Fri Oct 27 12:51:38 2023\r\n +0900 (JST)URL: http://goo.gl/pwSGQR :\r\nhttp://goo.gl/pwSG.qr\r\nSecurity Watch \r\nSecurity Watch \r\n UNIXWindowsMac OS (priority ) \r\n1 \r\n 1 \r\n[ ]\r\n:\r\n2023 |\r\n20… [+17675 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gapingvoid.com"
      },
      "author": "Cierra Martin",
      "title": "Engineers Beef with Advertising",
      "description": "There’s an old saying on how “Advertising is the tax you pay for being unremarkable.” The idea being, if you make a product good enough, you …\nThe post Engineers Beef with Advertising appeared first on Gapingvoid.",
      "url": "https://www.gapingvoid.com/engineers-beef-with-advertising/",
      "urlToImage": "https://www.gapingvoid.com/content/uploads/2023/10/your-actions-are-your-marketing-social.jpg",
      "publishedAt": "2023-10-27T01:00:49Z",
      "content": "Theres an old saying on how Advertising is the tax you pay for being unremarkable. The idea being, if you make a product good enough, you wont need to spend money on advertising because everybody who… [+1703 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sweclockers.com"
      },
      "author": "Anders Lundberg",
      "title": "Så mycket betalar Google för att vara standardsökmotor på Iphone",
      "description": "Enligt New York Times tjänar Apple omkring 200 miljarder kronor om året på att behålla Google som standardsökmotor i Safari på alla Apple-system.",
      "url": "https://www.sweclockers.com/nyhet/37482-sa-mycket-betalar-google-for-att-vara-standardsokmotor-pa-iphone",
      "urlToImage": "https://www.sweclockers.com/artikel/37482/og-image",
      "publishedAt": "2023-10-27T03:31:54Z",
      "content": "Under den pågående rättegången mellan Google och den amerikanska staten, där Google står anklagat för konkurrensbrott kring sin dominanta sökmotor, har flera nya uppgifter om företagets förhållande m… [+1717 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com.mx"
      },
      "author": "Gonzalo Hernández",
      "title": "Un hacker demuestra en una conferencia de ciberseguridad por qué se debe apagar completamente el Bluetooth del iPhone",
      "description": "Apagar el Bluetooth del iPhone desde Centro de Control no desactiva completamente la conexión, pues siguen activas algunas funciones que se pueden aprovechar para poner en riesgo la seguridad del usuario.\n<!-- BREAK 1 -->\nAl desconectar de esta forma el Bluet…",
      "url": "https://www.xataka.com.mx/seguridad/hacker-demuestra-conferencia-ciberseguridad-que-se-debe-apagar-completamente-bluetooth-iphone",
      "urlToImage": "https://i.blogs.es/62f2d7/bluetooth-1/840_560.jpeg",
      "publishedAt": "2023-10-27T01:01:25Z",
      "content": "Apagar el Bluetooth del iPhone desde Centro de Control no desactiva completamente la conexión, pues siguen activas algunas funciones que se pueden aprovechar para poner en riesgo la seguridad del usu… [+2274 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com.mx"
      },
      "author": "Antonio Cahun",
      "title": "Snapdragon X Elite es la nueva bestia para laptops Arm que sacude a Intel y Apple con mucho menor consumo energético, según Qualcomm",
      "description": "Snapdragon x Elite es la nueva plataforma móvil de Qualcomm para laptops. Con este nuevo chipset Qualcomm promete superar a Intel y Apple no solo en potencia sino también en eficiencia energética, prometiendo en algunos casos hasta 30% menor consumo de energí…",
      "url": "https://www.xataka.com.mx/ordenadores/snapdragon-x-elite-caracteristicas-especificaciones-ficha-tecnica",
      "urlToImage": "https://i.blogs.es/eb9cb4/snapdragon-x-elite-caracteristicas-especificaciones-ficha-tecnica/840_560.jpeg",
      "publishedAt": "2023-10-27T03:28:46Z",
      "content": "Snapdragon x Elite es la nueva plataforma móvil de Qualcomm para laptops. Con este nuevo chipset Qualcomm promete superar a Intel y Apple no solo en potencia sino también en eficiencia energética, pr… [+4124 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com.mx"
      },
      "author": "Miguel Gutierrez",
      "title": "Más de 15 increíbles LEGO de oferta en Amazon México: hasta 45% de descuento y juguetes a meses sin intereses",
      "description": "La navidad está cada vez más cerca y si eres de aquellos que gustan de armar sus juguetes, hoy te traemos una lista de 16 sets de construcción LEGO que están en oferta en Amazon México, hay para todos los bolsillos y los podrás encontrar con hasta 45% de desc…",
      "url": "https://www.xataka.com.mx/seleccion/15-increibles-lego-oferta-amazon-mexico-45-descuento-juguetes-a-meses-intereses",
      "urlToImage": "https://i.blogs.es/8ff4a6/lego-promociones-oferta-baratos-amazon-mexico/840_560.jpeg",
      "publishedAt": "2023-10-27T00:30:31Z",
      "content": "La navidad está cada vez más cerca y si eres de aquellos que gustan de armar sus juguetes, hoy te traemos una lista de 16 sets de construcción LEGO que están en oferta en Amazon México, hay para todo… [+1476 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com.mx"
      },
      "author": "Eric Ramirez",
      "title": "Ya podemos acceder a la preventa de las increíbles figuras amiibo de 'Splatoon' y sin gastar un solo peso antes de su lanzamiento",
      "description": "La figuras y coleccionables de amiibo se han vuelto muy interesantes debido a las licencias que tienen de los juegos de Nintendo. Y si mueres por tenerlas todas, ahora mismo está la preventa de las figuras de la serie 'Splatoon' por 499 pesos en Amazon México…",
      "url": "https://www.xataka.com.mx/seleccion/podemos-acceder-a-preventa-increibles-figuras-amiibo-splatoon-gastar-solo-peso-antes-su-lanzamiento",
      "urlToImage": "https://i.blogs.es/e0a861/preventa-amiibo-splatoon/840_560.jpeg",
      "publishedAt": "2023-10-27T02:31:25Z",
      "content": "La figuras y coleccionables de amiibo se han vuelto muy interesantes debido a las licencias que tienen de los juegos de Nintendo. Y si mueres por tenerlas todas, ahora mismo está la preventa de las f… [+2004 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Toys"
      },
      "author": "Rikka Altland",
      "title": "Apple’s prev-gen. AirPods 2 are down to just $75, a new 2023 low",
      "description": "Amazon is now offering the best price of the year on Apple’s AirPods 2. These previous-generation earbuds are now selling for $75.48 shipped, dropping down from the $99 discounted price we’ve been tracking for much of the year. This is really only the third o…",
      "url": "https://9to5toys.com/2023/10/26/airpods-2-amazon-offer/",
      "urlToImage": "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2022/07/AirPods-2.jpg?resize=1200%2C628&ssl=1",
      "publishedAt": "2023-10-27T00:27:19Z",
      "content": "Amazon is now offering the best price of the year on Apples AirPods 2. These previous-generation earbuds are now selling for $75.48 shipped, dropping down from the $99 discounted price weve been trac… [+1727 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Toys"
      },
      "author": "Rikka Altland",
      "title": "Act fast and score Apple’s official MagSafe charger at just $22 on Amazon (Reg. $39)",
      "description": "Amazon is now offering Apple’s official MagSafe Charger for $21.70 with free shipping for Prime members or in orders over $25. Normally fetching $39, today’s offer amounts to a new Amazon all-time low at 44% off. It’s well below our previous mention at Woot, …",
      "url": "https://9to5toys.com/2023/10/26/official-apple-magsafe-charger-flash-sale/",
      "urlToImage": "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2023/07/apple-magsafe-charger-standby.jpg?resize=1200%2C628&ssl=1",
      "publishedAt": "2023-10-27T00:47:29Z",
      "content": "Amazon is now offering Apples official MagSafe Charger for $21.70 with free shipping for Prime members or in orders over $25. Normally fetching $39, todays offer amounts to a new Amazon all-time low … [+2459 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Toys"
      },
      "author": "Rikka Altland",
      "title": "Apple’s black Magic Trackpad 2 sees extremely rare 50% discount down to $74",
      "description": "Amazon is now offering a rare chance to save on Apple’s Magic Trackpad 2 at $73.79 shipped in the even more elusive black colorway. This is 50% off the usual $149 price tag and marking the best discount we have ever seen. While today’s discount could be becau…",
      "url": "https://9to5toys.com/2023/10/26/apple-black-magic-trackpad-2-deal/",
      "urlToImage": "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2023/10/Magic-Trackpad-black.jpg?resize=1200%2C628&ssl=1",
      "publishedAt": "2023-10-27T00:40:23Z",
      "content": "Amazon is now offering a rare chance to save on Apples Magic Trackpad 2 at $73.79 shipped in the even more elusive black colorway. This is 50% off the usual $149 price tag and marking the best discou… [+2148 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Electrek"
      },
      "author": "Jameson Dow",
      "title": "The Faraday Future FF91 actually exists, and I was the first media to drive it",
      "description": "Faraday Future, the oft-delayed electric vehicle startup, has finally brought the FF91 to market, and we were the first media to drive a real production-spec version of the car, around Willow Springs raceway no less.\n more…\nThe post The Faraday Future FF91 ac…",
      "url": "https://electrek.co/2023/10/26/the-faraday-future-ff91-actually-exists-and-i-was-the-first-media-to-drive-it/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/10/IMG_9061-e1698352770522.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-10-27T01:00:00Z",
      "content": "Faraday Future, the oft-delayed electric vehicle startup, has finally brought the FF91 to market, and we were the first media to drive a real production-spec version of the car, around Willow Springs… [+20979 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Mactrast.com"
      },
      "author": "Chris Hauk",
      "title": "Apple Seeds First Beta of macOS Sonoma 14.2 to Developers for Testing",
      "description": "Apple today seeded the first beta of its macOS Sonoma 14.2 update to developers.\nThe post Apple Seeds First Beta of macOS Sonoma 14.2 to Developers for Testing first appeared on MacTrast.Read More...",
      "url": "https://www.mactrast.com/2023/10/apple-seeds-first-beta-of-macos-sonoma-14-2-to-developers-for-testing/",
      "urlToImage": "https://www.mactrast.com/wp-content/uploads/2018/04/cropped-icon-2.jpg",
      "publishedAt": "2023-10-27T00:06:55Z",
      "content": "Apple today seeded the first beta of its macOS Sonoma 14.2 update to developers. The new beta comes just one day after the release of macOS Sonoma 14.1 to the public.\r\nThe developer build of macOS So… [+512 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Mactrast.com"
      },
      "author": "Chris Hauk",
      "title": "Apple Seeds First Betas of iOS 17.2 and iPadOS 17.2 to Developers for Testing",
      "description": "Apple today seeded the first beta of its upcoming iOS 17.2 and iPadOS 17.2 updates to developers for testing.\nThe post Apple Seeds First Betas of iOS 17.2 and iPadOS 17.2 to Developers for Testing first appeared on MacTrast.Read More...",
      "url": "https://www.mactrast.com/2023/10/apple-seeds-first-betas-of-ios-17-2-and-ipados-17-2-to-developers-for-testing/",
      "urlToImage": "https://www.mactrast.com/wp-content/uploads/2018/04/cropped-icon-2.jpg",
      "publishedAt": "2023-10-27T00:04:12Z",
      "content": "Apple today seeded the first beta of its upcoming iOS 17.2 and iPadOS 17.2 updates to developers for testing. The new betas come one day after the release of iOS 17.1 and iPadOS 17.1 to the public.\r\n… [+476 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "PhoneArena"
      },
      "author": "Alan Friedman",
      "title": "First iOS 17.2 beta includes a new option for the Action Button on the iPhone 15 Pro and Pro Max",
      "description": "Apple has released iOS 17.2 beta 1 for developers which includes a new option for the iPhone 15 Pro series' Action Button.",
      "url": "https://www.phonearena.com/news/ios-17.2-adds-new-option-action-button_id152005",
      "urlToImage": "https://m-cdn.phonearena.com/images/article/152005-wide-two_1200/First-iOS-17.2-beta-includes-a-new-option-for-the-Action-Button-on-the-iPhone-15-Pro-and-Pro-Max.jpg",
      "publishedAt": "2023-10-27T03:53:34Z",
      "content": "Enjoy the hottest mobile tech storylines, delivered straight to your inbox."
      },
      {
      "source": {
      "id": "fortune",
      "name": "Fortune"
      },
      "author": "Alicia Adamczyk",
      "title": "Taylor Swift is officially a billionaire thanks to her record-breaking tour and re-recording project, according to Bloomberg",
      "description": "Thanks thanks to her record-breaking Eras Tour and re-recording project, Taylor Swift has a $1.1 billion net worth, according to Bloomberg's estimates.",
      "url": "https://fortune.com/2023/10/26/taylor-swift-billionaire-net-worth-eras-tour-bloomberg/",
      "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/10/GettyImages-1637208780-e1698365185538.jpg?resize=1200,600",
      "publishedAt": "2023-10-27T00:29:19Z",
      "content": "Pop music supernova Taylor Swift has officially joined the three-comma club, Bloomberg News reports. On the eve of the release of 1989 TVand amid a record-breaking tour and box office bonanzathe sing… [+3374 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Eprice.com.hk"
      },
      "author": "虎仔 / 馬日山",
      "title": "iPhone 15 經 BMW 無線充電 NFC 失效   Apple 確認將推出系統更新修正",
      "description": "版主虎仔：Apple 終於認衰，但等咗成個月先有反應，會唔會得罪揸 BMW 車主嘅 iPhone 15 顧客呢？",
      "url": "https://www.eprice.com.hk/mobile/talk/4544/222459/1",
      "urlToImage": "https://img.eprice.com.hk/img/news_hk/35805/big.jpg",
      "publishedAt": "2023-10-27T01:12:28Z",
      "content": "BMW iPhone 15 NFC Apple Wallet Could Not Set Up Apple Pay Wallet Apple Pay NFC \r\nApple BMW Toyota Supra iPhone 15 NFC \r\niOS 17.1 Apple iOS 17.1.1 iOS 17.2 Apple Service Toolkit 2 NFC Apple iPhone 15 … [+25 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Eprice.com.hk"
      },
      "author": "虎仔 / 馬日山",
      "title": "華為未能重返市場五大？Honor 中國爆贏 Apple 做一哥",
      "description": "版主虎仔：華為仲未上返五大，不過第四季先見真章！",
      "url": "https://www.eprice.com.hk/mobile/talk/4247/222462/1",
      "urlToImage": "https://img.eprice.com.hk/img/news_hk/35808/big.jpg",
      "publishedAt": "2023-10-27T01:12:19Z",
      "content": "14 Canalys 6,670 6,980 5%\r\nMate 60 8 5G Canalys 270 \r\nHonor 1,180 1,090 1,060 OPPO Apple vivo 1,040 910 X50 Honor Apple iPhone 15 Canalys Mate 60 \r\ngsmarena"
      },
      {
      "source": {
      "id": null,
      "name": "Techweb.com.cn"
      },
      "author": "海蓝",
      "title": "分析师称Apple Watch Ultra 3研发尚未启动 明年推出可能性在降低",
      "description": "【TechWeb】10月27日消息，据外媒报道，在9月13日凌晨1点开始的秋季新品发布会上，苹果公司如外界预期的那样，推出了第二代的Apple Watch Ultra，搭载S9 SiP芯片，配备拥有3000尼特峰值亮度的全天候视网膜显示屏，是苹果迄今最亮的显示屏。在Apple Watch Ultra 2推出之后，外界也在期待这一Apple Watch的下一代产品，也就是Apple Watch Ultra 3。但对于Apple Watch Ultra 3，在苹果产品预测上有很高准确性的知名分析师郭明錤，却透露目前还…",
      "url": "https://www.techweb.com.cn/world/2023-10-27/2935761.shtml",
      "urlToImage": "https://upload1.techweb.com.cn/s/120/imgs/2023/1027/1698373440405.jpg",
      "publishedAt": "2023-10-27T02:29:39Z",
      "content": "TechWeb10279131Apple Watch UltraS9 SiP3000\r\nApple Watch Ultra 2Apple WatchApple Watch Ultra 3\r\nApple Watch Ultra 3\r\nApple Watch Ultra 3\r\nApple Watch Ultra 312Apple Watch Ultra\r\nApple Watch Ultramicro… [+121 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ithome.com"
      },
      "author": null,
      "title": "部分苹果 Apple Watch 用户反馈升级 watchOS 10.1 后，出现耗电过快和手表发烫问题",
      "description": "IT之家 10 月 27 日消息，根据国外科技媒体 9to5Mac 爆料，部分 Apple Watch 用户反馈在升级 watchOS 10.1 系统之后，出现了耗电过快、手表发烫等问题。document.write(\"<s\"+\"cript type='text/javascript' src='https://dyn.ithome.com/vote/2199.js?\"+Math.random()+\"'></scr\"+\"ipt>\");document.getElementById(\"vote2199\").inne…",
      "url": "https://www.ithome.com/0/727/990.htm",
      "urlToImage": null,
      "publishedAt": "2023-10-27T02:17:00Z",
      "content": "IT 10 27 9to5Mac Apple Watch watchOS 10.1 \r\n Apple Watch \r\nApple Watch Series 4 Apple Watch Series 9 Apple Watch Ultra 2 \r\n Apple Watch Series 9 3 Apple Watch Series 7 30 25%\r\nIT Apple Watch Apple Wa… [+41 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ithome.com"
      },
      "author": null,
      "title": "苹果尚未启动 Apple Watch Ultra 3 开发，郭明錤认为 Ultra 3 明年发布概率变小",
      "description": "IT之家 10 月 27 日消息，郭明錤近日发布市场研究简报，表示苹果公司目前仍未启动 Apple Watch Ultra 3 的研发项目，认为从新品研发的角度来看是不正常的。郭明錤认为苹果如果在今年 12 月还不启动 Ultra 3 项目，那么几乎可以肯定的是，苹果不会在 2024 年推出 Apple Watch Ultra 3 智能手表。IT之家附上郭明錤的原因推测，表示苹果之所以尚未启动 Ultra 3 项目，可能需要更多的时间来研发创新健康管理功能，并评估和确认量产可能性，期间还要解决 Micro LED…",
      "url": "https://www.ithome.com/0/727/968.htm",
      "urlToImage": null,
      "publishedAt": "2023-10-27T00:47:31Z",
      "content": "IT 10 27 Apple Watch Ultra 3 \r\n12 Ultra 3 2024 Apple Watch Ultra 3 \r\nIT Ultra 3 Micro LED \r\n Apple Watch Ultra 20-30% Apple Watch 3500 10%\r\nIT"
      },
      {
      "source": {
      "id": null,
      "name": "Ithome.com"
      },
      "author": null,
      "title": "苹果发布 tvOS 17.2 Beta 1 更新，Apple TV 应用改进导航体验",
      "description": "IT之家 10 月 27 日消息，苹果今天在推出 iOS / iPadOS 17.2 Beta 1 更新的同时，还发布了 tvOS 17.2 Beta 1 更新，重点改善了 Apple TV 应用，让用户更轻松地导航和查找想要观看的内容。用户升级 tvOS 17.2 Beta 1 更新之后，可以看到一个专门的侧边栏，罗列了来自不同应用程序和流媒体服务（包括 Apple TV+）的内容。IT之家注：侧边栏设有搜索、立即观看、Apple TV+、MLS Season Pass、体育、商店和图书馆的专用部分。在单独的“…",
      "url": "https://www.ithome.com/0/727/958.htm",
      "urlToImage": null,
      "publishedAt": "2023-10-27T00:12:09Z",
      "content": "IT 10 27 iOS / iPadOS 17.2 Beta 1 tvOS 17.2 Beta 1 Apple TV \r\n tvOS 17.2 Beta 1 Apple TV+\r\nITApple TV+MLS Season Pass\r\n ABCCBSComedy CentralHuluESPNDiscoveryPeacockPrime Video \r\n Hulu \r\nWatch Now Up … [+57 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ithome.com"
      },
      "author": null,
      "title": "1436 元含税包邮：AirPods Pro（第二代）京东国际自营狂促开启",
      "description": "苹果 AirPods Pro 2 耳机发布于 2022 年 9 月，由全新 H2 芯片驱动，苹果表示这款耳机对主动降噪和通透模式进行了重大升级。京东 11.11 大促期间，数码海外京东自营专区开启大促活动，苹果 AirPods Pro 2 耳机 Lightning 款 海外版 叠加下方多重优惠后，仅需 1436.55 元含税包邮到手：<ul><li>点击下方卡片，可领 100 元券。\r\n</li><li>满 200-20 元补贴券：点此领取。\r\n</li><li>PLUS 会员下单叠加 95 折优惠。\r\n</li…",
      "url": "https://www.ithome.com/0/727/978.htm",
      "urlToImage": null,
      "publishedAt": "2023-10-27T01:44:49Z",
      "content": "AirPods Pro 2 2022 9 H2 \r\n 11.11 AirPods Pro 2 Lightning   1436.55 \r\n AirPods ProLightning 1436.55 100 \r\n USB-C 1494.05 \r\n AirPods ProUSB-C 1494.05 100 \r\n 3 \r\nAirPods Pro AirPods Pro H2 \r\nAirPods Pro… [+345 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple TV+でドラマ「スティル・アップ 〜眠れないふたり〜」第8話（最終話）と、「レッスン in ケミストリー」第4話の配信開始",
      "description": "Apple TV+で、Apple Originals 2作品の最新エピソードが配信開始されています。 「スティル・アップ 〜眠れないふたり〜」は今回がシーズン1の最終話です。 スティル・アップ 〜眠れないふたり〜 エピソ...\nThe post 【ニュース】Apple TV+でドラマ「スティル・アップ 〜眠れないふたり〜」第8話（最終話）と、「レッスン in ケミストリー」第4話の配信開始 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/10/apple-tv-plus-new-episode-231027.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/10/231027appletvplusnewep.jpg",
      "publishedAt": "2023-10-27T01:16:06Z",
      "content": "Apple TV+で、Apple Originals 2作品の最新エピソードが配信開始されています。\n「スティル・アップ 〜眠れないふたり〜」は今回がシーズン1の最終話です。\n\nスティル・アップ 〜眠れないふたり〜\n\nエピソード8『本当の気持ち』29分\nレッスン in ケミストリー\n\nエピソード4『原始反射に従いなさい』48分\n次回（11月3日配信）：エピソード5『』43分\n\nニュース解説\n「レ… [+321 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple TV+で新作ドキュメンタリーシリーズ「エンフィールドのポルターガイスト」の配信開始",
      "description": "Apple TV+で新作ドキュメンタリーシリーズ「エンフィールドのポルターガイスト」が配信開始されています。 ロンドンのエンフィールドで起きた超常現象を検証するドキュメンタリーです。 世界で最も有名なポルターガイスト事件...\nThe post 【ニュース】Apple TV+で新作ドキュメンタリーシリーズ「エンフィールドのポルターガイスト」の配信開始 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/10/apple-tv-plus-the-enfield-poltergeist-release.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/09/230927theenfieldpoltergeist.jpg",
      "publishedAt": "2023-10-27T01:04:29Z",
      "content": "Apple TV+で新作ドキュメンタリーシリーズ「エンフィールドのポルターガイスト」が配信開始されています。\n\nロンドンのエンフィールドで起きた超常現象を検証するドキュメンタリーです。\n\n世界で最も有名なポルターガイスト事件が起きた家の中で録音されたオリジナル音声を通して、身も凍るような実話を体感。\r\n\n\n\nドキュメンタリー映画「STILL：マイケル・J・フォックス ストーリー」を手がけた、Me… [+1095 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple TV+で新作アニメシリーズ「カース！～呪われた秘宝～」の配信開始。ドリームワークス・アニメーション製作",
      "description": "Apple TV+で新作アニメシリーズ「カース！～呪われた秘宝～を視聴」が配信開始されています。 ドリームワークス・アニメーションの製作による、アドベンチャーコメディです。 ヴァンダーフーヴェン一家は、愛情深い夫であり父...\nThe post 【ニュース】Apple TV+で新作アニメシリーズ「カース！～呪われた秘宝～」の配信開始。ドリームワークス・アニメーション製作 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/10/apple-tv-plus-curses-release.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/09/230915curses.jpg",
      "publishedAt": "2023-10-27T01:12:09Z",
      "content": "Apple TV+で新作アニメシリーズ「カース！～呪われた秘宝～を視聴」が配信開始されています。\n\nドリームワークス・アニメーションの製作による、アドベンチャーコメディです。\n\nヴァンダーフーヴェン一家は、愛情深い夫であり父親でもあるアレックスが石になってしまったことを除けば普通の家族。アレックスを元に戻すため、彼の妻と子供たちは、先祖が盗んだ遺物を返却するためのゾクゾクする冒険に乗り出す。\r\n… [+1369 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Prtimes.jp"
      },
      "author": null,
      "title": "【ルイ・ヴィトン】旅の体験をさらに充実させる魅力的な新版が加わった「ルイ・ヴィトン シティ・ガイド」",
      "description": "[ルイ・ヴィトン ジャパン株式会社]\n書籍とデジタル版共に、現在33都市をカバーしている「ルイ・ヴィトン シティ・ガイド」は、あらゆる経験豊富なトラベラーにとって欠かすことのできない旅のパートナーとしての地位を確立しています。そして今秋、...",
      "url": "https://prtimes.jp/main/html/rd/p/000000976.000060591.html",
      "urlToImage": "https://prcdn.freetls.fastly.net/release_image/60591/976/60591-976-b6f50291b3af1593a8e3bbb20dd05721-3900x2675.jpg?format=jpeg&auto=webp&fit=bounds&width=480&height=360",
      "publishedAt": "2023-10-27T01:40:02Z",
      "content": "33 \r\n1998()\r\n(Charlotte Hym)(Michel Rojkind)(Trixie Mattel)(Cristina Celestino)DJ / \r\n iPhoneiPad Apple TVNear Me()24H(1)2 \r\n20231020()\r\nlouisvuitton.com\r\n( )\r\n4,400\r\nApp Store\r\n(9 )\r\n11,220\r\nApple T… [+276 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Prtimes.jp"
      },
      "author": null,
      "title": "イオンの電子マネー「ＷＡＯＮ」１０月２７日から「カードキャプターさくらＷＡＯＮ」を発行",
      "description": "[イオン株式会社]\nイオンは１０月２７日（金）より、イオンの電子マネー「ＷＡＯＮ」とアニメ放送２５周年を迎えた「カードキャプターさくら」とのコラボレーションカードをＡｐｐｌｅＰａｙのＷＡＯＮにて期間限定で発行します。\n...",
      "url": "https://prtimes.jp/main/html/rd/p/000004056.000007505.html",
      "urlToImage": "https://prtimes.jp/i/7505/4056/ogp/d7505-4056-5eec91553665d0935842-0.png",
      "publishedAt": "2023-10-27T01:00:00Z",
      "content": "×\r\nhttps://www.waon.net/campaign/20231027_ccsakurawaon/\r\n(Twitter)  \r\n(Twitter)\r\n(Twitter) @waon_official()\r\nCLAMP\r\n1996620008\r\n12609B6\r\n19982000NHK123\r\n20201616 \r\n202125\r\n2018\r\n202325\r\n2,200\r\nURL ht… [+124 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Dark Horizons"
      },
      "author": "Garth Franklin",
      "title": "“Invasion” Showrunner Aims For Four Seasons",
      "description": "Simon Kinberg, co-creator of the Apple TV+ sci-fi series “Invasion,” has revealed he has an overall four-season plan for the series which recently wrapped its second season run. The character-driven science fiction drama series was co-created by Kinberg and D…",
      "url": "https://www.darkhorizons.com/invasion-showrunner-aims-for-four-seasons/",
      "urlToImage": "https://cdndh.darkhorizons.com/wp-content/uploads/2023/10/invasion-showrunner-aims-for-four-seasons.jpg",
      "publishedAt": "2023-10-27T00:31:13Z",
      "content": "Simon Kinberg, co-creator of the Apple TV+ sci-fi series “Invasion,” has revealed he has an overall four-season plan for the series which recently wrapped its second season run.\r\nThe character-driven… [+1834 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Newmobilelife.com"
      },
      "author": "Andy",
      "title": "watchOS 10.1 災情　升級後 20 分鐘耗 80% 電",
      "description": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1698365240961\"} -->\n昨天，蘋果發佈 watchOS 10.1，然而推出一天後陸續在網上出現一些 Apple Watch 用戶表示，升級後電力消耗異常快的情況。不少用戶在網上指出，Apple Watch 的電池消耗速度遠比平常要快。\n<!-- /wp:paragraph -->\n\n<!-- wp:image {\"id\":490058,\"sizeSlug\":\"large\"…",
      "url": "https://www.newmobilelife.com/2023/10/27/watchos-10-1-battery-issue/",
      "urlToImage": "https://static.newmobilelife.com/wp-content/uploads/2023/09/applewatchs9-1024x661.jpg",
      "publishedAt": "2023-10-27T00:16:11Z",
      "content": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1698365240961\"} -->\n昨天，蘋果發佈 watchOS 10.1，然而推出一天後陸續在網上出現一些 Apple Watch 用戶表示，升級後電力消耗異常快的情況。不少用戶在網上指出，Apple Watch 的電池消耗速度遠比平常要快。\n<!-- /wp:… [+1028 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sky.com"
      },
      "author": "Josephine Franks",
      "title": "The Enfield Poltergeist: How new docudrama uses the Hodgson sisters and 200 hours of tapes",
      "description": "More than 200 hours of audio tapes provide the best \"evidence\" for the Enfield poltergeist there is.",
      "url": "https://news.sky.com/story/the-enfield-poltergeist-how-director-of-apple-tvs-new-docudrama-used-the-hodgson-sisters-and-200-hours-of-tapes-12992142",
      "urlToImage": "https://e3.365dm.com/23/10/1600x900/skynews-pay-picture-100-pounds_6336426.jpg?20231026154146",
      "publishedAt": "2023-10-27T00:01:00Z",
      "content": "More than 200 hours of audio tapes provide the best \"evidence\" for the Enfield poltergeist there is.\r\nScreams and bangs; interviews with those who said they had just experienced the supernatural; the… [+7038 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Softantenna.com"
      },
      "author": "softantenna",
      "title": "Apple、iOS 17.2、iPadOS 17.2、tvOS 17.2、watchOS 10.2、macOS 14.2の各beta 1を開発者向けに公開。ジャーナルアプリがついに導入",
      "description": "Appleは本日、iOS 17.2、iPadOS 17.2、tvOS 17.2、watchOS 10.2、macOS 14.2の各beta 1を開発者に対して公開しました(MacRumors)。 Apple Developer Progra",
      "url": "https://softantenna.com/blog/ios-17-2-beta-1/",
      "urlToImage": "https://softantenna.com/blog/wp-content/uploads/2023/10/s_20230622_102641-4.jpg",
      "publishedAt": "2023-10-27T01:20:27Z",
      "content": "AppleiOS 17.2iPadOS 17.2tvOS 17.2watchOS 10.2macOS 14.2beta 1(MacRumors)\r\nApple Developer ProgramApple Beta Software Program &gt; &gt; &gt; \r\n:\r\n<table><tr><th></th><th></th><th></th></tr><tr><td>iOS… [+386 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "Appleが打ち出す新セキュリティ機能：「メッセージ」アプリのコンタクトキー認証",
      "description": "Appleは、iOS 17.2とmacOS Sonoma 14.2のリリースにより、デジタルセキュリティの新たなスタンダードを築きました。 今回の注目は、「メッセージ」アプリのコンタクトキー認証という新機能です。 なぜこの機能が話題に？ 昨年の12月、Appleはこの新機能のプレビューを公開しました。そして今、最新のアップデートで実装されました。この機能は、ジャーナリストや人権活動家、政府の役人など、特別なデジタル脅威にさらされることが多い人々を対象としています。 これにより、「メッセージ」アプリでの会話がよりプ…",
      "url": "https://minatokobe.com/wp/ios/ios-17/post-93577.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/10/iMessage-Contact-Key.jpg",
      "publishedAt": "2023-10-27T02:48:11Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "iOS17.2 Beta 1 での新機能と変更点：「ジャーナル」アプリから強化された「メッセージ」アプリまで",
      "description": "iOS 17.2 beta 1が本日に開発者向けにリリースされました、エキサイティングなアップデートで満ちています。新機能と変更点についてです 1. 新しい「ジャーナル」アプリ Appleが新たにリリースする「ジャーナルアプリ」は、人生の瞬間を大切にし、思い出を守るためのプラットフォームとして設計されています。このアプリは、WWDCで初めて公開されたAppleのデジタルでの日記作成にに新しい風をもたらしています。 2. Apple Musicがさらにパワーアップ Apple Musicには、2つの新機能が追加され…",
      "url": "https://minatokobe.com/wp/ios/ios-17/post-93566.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/10/iOS-17.2-Journal.jpg",
      "publishedAt": "2023-10-27T01:30:06Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "言語の障壁を越えて：iOS 17.2ベータでiPhone 15 Proのアクションボタンで翻訳が追加",
      "description": "最新のiOS 17.2ベータリリースにより、iPhone 15 ProとiPhone 15 Pro Maxのユーザーに待望の「翻訳」オプションがアクションボタンに追加されました。 Appleの約束 iPhone 15 ProとiPhone 15 Pro Maxが9月に発売された際、Appleはアクションボタンに翻訳オプションを追加することを示唆していました。その約束は、iOS 17.2ベータのリリースとともに実現します。 使い方は？ アクションボタンを翻訳モードに設定すると、ボタンを長押しするだけで翻訳ウィンドウ…",
      "url": "https://minatokobe.com/wp/ios/ios-17/post-93573.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/10/iOS-17.2-Action-bottan.jpg",
      "publishedAt": "2023-10-27T02:20:21Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "iOS 17.2ベータ版の新しい「ジャーナル」アプリのハンズオンビデオが公開",
      "description": "Appleの最新版であるiOS 17.2のベータ版では、待望のJournalアプリが導入されました。iOS 17の一部として発表されたこのアプリは、Appleがデジタル日記を取り入れたものです。 その機能がよくわかるようにMacRumorsがハンズオンビデオを公開しています 使いやすいインターフェース ジャーナルアプリを起動すると、シンプルで直感的なインターフェースが目に入ります。目立つ「+」ボタンをタップするだけで、ジャーナリングの旅が始まります。 日常のデータ、例えばワークアウトのアクティビティ、ポッドキャス…",
      "url": "https://minatokobe.com/wp/ios/ios-17/post-93569.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/10/iOS-17.2-Journal-App-.jpg",
      "publishedAt": "2023-10-27T02:01:31Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Punch"
      },
      "author": "Justice Okamgba",
      "title": "Affordability, durability main attractions for users of Android devices",
      "description": "Android devices continue to stand tall as the preferred choice in the Nigerian smartphone market. Factors that have solidified Android’s dominance include affordability, battery life and hardware, among others, writes JUSTICE OKAMGBA Android smartphones conti…",
      "url": "https://punchng.com/affordability-durability-main-attractions-for-users-of-android-devices/",
      "urlToImage": null,
      "publishedAt": "2023-10-27T00:05:23Z",
      "content": "Android devices continue to stand tall as the preferred choice in the Nigerian smartphone market. Factors that have solidified Androids dominance include affordability, battery life and hardware, amo… [+8201 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gameinformer.com"
      },
      "author": "Alex Van Aken",
      "title": "Alan Wake 2 Review, Mario Wonder, And Spider-Man 2 | GI Show",
      "description": "In this week's episode of The Game Informer Show, I've assembled a panel of experts – including Blake Hester and Charles Harte – to discuss Alan Wake 2, the 13-year follow-up to Remedy Entertainment's cult classic thriller. After Charles gives the rest of us …",
      "url": "https://www.gameinformer.com/video-podcast/2023/10/26/alan-wake-2-review-mario-wonder-and-spider-man-2-gi-show",
      "urlToImage": "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2023/10/26/9be433a3/thegishow_ep678_yt.jpg",
      "publishedAt": "2023-10-27T03:14:57Z",
      "content": "In this week's episode of The Game Informer Show, I've assembled a panel of experts  including Blake Hester and Charles Harte  to discuss Alan Wake 2, the 13-year follow-up to Remedy Entertainment's … [+1576 chars]"
      }
  ]

  constructor(){
    super();
    this.state = {
        articles : this.articles,
        loading : false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ce94145377a645868c4c3cf7c57c6f55"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles})
  }


  render() {
    return (
          <div className="container my-4 ">
            <h1>News - Top Stories</h1>
            <div className="row my-4">
              {this.state.articles.map((element) => {
                //console.log(element)
                  return <div className="col-md-3" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0, 44):" "} description={element.description?element.description.slice(0, 88):" "} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
              })}
            </div>
          </div>
    )
  }
}
