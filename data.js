// WCF Job Search — 求人データ
// 新しい週を追加するときは、この配列の先頭に新しいオブジェクトを追加するだけでOK。
const JOB_WEEKS = [
  {
    week: "2026-08-W1",
    label: "2026年8月 第1週",
    cities: {
      sydney: { name: "Sydney", emoji: "🔵", jobs: [
        { title: "食品工場スタッフ", company: "Mum's Food Corporation Pty Ltd", location: "Lane Cove West NSW 2066", schedule: "週3〜5日以上、朝7:30〜夕方（日曜定休）", requirements: ["ワーホリ・学生・永住権等ビザ問わず対応", "年齢・国籍・経験不問（調理経験者は優遇、英語初級程度でOK）"], description: "野菜や肉のスライス、から揚げ製造、ソース作成など（機械使用のため未経験者も対応可能）", wage: "平日$250以上/日、土曜$250〜$300以上/日（休憩時間も支給）", url: "https://www.jams.tv/classifieds/jobs/30195", source: "JAMS.TV" },
        { title: "倉庫作業員", company: "Casaview Homes / Gem Windows", location: "Unit 2/1 Avalli Rd, Prestons NSW 2170", schedule: "月〜金 7:00〜14:30（休憩30分）", requirements: ["Prestonsから車で10分以内に居住していること、フォークリフト操作可能な方歓迎", "ワーホリ・学生ビザ対応、基本的な英語力推奨"], description: "倉庫内での商品管理・組立・出荷準備作業", wage: "$26〜$30/hr（週払い）", url: "https://www.gumtree.com.au/web/listing/warehousing-storage-distribution/1343737794", source: "Gumtree" },
        { title: "倉庫スタッフ（Warehouse Co-worker）", company: "IKEA", location: "1 Oulton Avenue, Rhodes NSW 2138", schedule: "パートタイム、隔週40〜60時間、早朝〜夜間シフト（月3回以上週末勤務あり）", requirements: ["事前採用確認・全国警察チェックあり", "体力を要する作業（重量物の反復運搬）に対応できる方"], description: "注文ピッキング、商品梱包、在庫管理・補充、フォークリフト等の機械操作", wage: "$28.31/hr（週末・祝日・夜間は割増）", url: "https://au.indeed.com/viewjob?jk=1f444eb227b4b46b", source: "Indeed" },
      ]},
      melbourne: { name: "Melbourne", emoji: "🟠", jobs: [
        { title: "自販機補充スタッフ", company: "Vendworks", location: "Seaford VIC 3198", schedule: "パートタイム", requirements: ["有効な運転免許証必須、Working with Children Check・Police Check必須", "20kgまでの荷物運搬ができる方、未経験可（研修あり）"], description: "指定ルートでの自動販売機補充・保守、基本的な技術サポート、倉庫業務", wage: "$28.00〜$30.00/hr", url: "https://au.indeed.com/viewjob?jk=b7bf88b726557375", source: "Indeed" },
        { title: "カスタマーサービス", company: "Seafood Paradise", location: "Brunswick VIC 3056", schedule: "フルタイム", requirements: ["経験不問、意欲のある方歓迎"], description: "開店・閉店準備、接客対応、POSシステム操作、簡単な調理業務", wage: "$26.44〜$35.00/hr", url: "https://au.indeed.com/viewjob?jk=c197f6c4df6da87e", source: "Indeed" },
        { title: "倉庫スタッフ（ピッキング＆パッキング）", company: "Automotion Plus", location: "Moorabbin VIC", schedule: "フルタイム", requirements: ["オーストラリア就労許可必須", "倉庫・ピッキング経験があれば尚可、基礎的なPCスキル"], description: "顧客注文のピッキング・梱包、在庫受け取り・検品、倉庫内整理整頓・安全管理", wage: "$27.50〜$29.50/hr", url: "https://au.indeed.com/viewjob?jk=cc7a137f4a0ba1ac", source: "Indeed" },
      ]},
      brisbane: { name: "Brisbane / Gold Coast", emoji: "🟡", jobs: [
        { title: "キッチンハンド", company: "Chef J（韓国・日本ビュッフェレストラン）", location: "Brisbane City QLD", schedule: "カジュアル", requirements: ["ワーキングビザ・ワーホリ・学生ビザ対応", "経験者優遇"], description: "キッチンハンド業務全般", wage: "$33.05/hr（夜22時以降・週末はペナルティレート加算、食事提供あり）", url: "https://www.gumtree.com.au/web/listing/kitchen-sandwich-hand/1343343197", source: "Gumtree" },
        { title: "一般スタッフ・配送業務", company: "Seafood Factory", location: "Helensvale QLD", schedule: "月〜金（早朝シフトの可能性あり、常勤・カジュアル選択可）", requirements: ["有効な豪州運転免許（MR/HR推奨）", "就労ビザ対応（ワーホリ・学生ビザ可）"], description: "シーフードのパッキング・仕分け・受注準備、配送、積み下ろし、衛生管理", wage: "$30以上/hr（研修後）", url: "https://www.gumtree.com.au/web/listing/warehousing-storage-distribution/1343756678", source: "Gumtree" },
        { title: "キッチンスタッフ", company: "Izakaya umakamon", location: "7/3063 Surfers Paradise BLVD, Surfers Paradise QLD 4217", schedule: "ランチ水〜金、ディナー月〜土", requirements: ["飲食店での経験者のみ", "ワーホリ・学生・永住者対応、英語中下級レベル"], description: "調理、仕込み、洗い物などキッチン業務全般", wage: "平日$30.55/hr、土日$36.42/hr（+super別途）", url: "https://www.jams.tv/classifieds/jobs/31778", source: "JAMS.TV" },
      ]},
      perth: { name: "Perth", emoji: "🟢", jobs: [
        { title: "キッチンハンド／サンドイッチメーカー", company: "Common Bakery", location: "41 Broadway, Nedlands WA 6009", schedule: "パートタイム・カジュアル", requirements: ["未経験可、意欲重視"], description: "食器・調理器具の洗浄、厨房清掃、基本的な食材準備補助", wage: "$27〜$40/hr", url: "https://au.indeed.com/viewjob?jk=74e503e98a03da38", source: "Indeed" },
        { title: "倉庫・設置スタッフ", company: "Dexion Bibra Lake", location: "26 Salpietro Street, Bibra Lake WA 6163", schedule: "フルタイム／パートタイム／カジュアル選択可", requirements: ["オーストラリア就労許可必須", "運転免許推奨、倉庫経験1年程度推奨（未経験でも意欲があれば研修あり）"], description: "棚設置、軽製造・組立、配送・現場設置作業", wage: "$27〜$39/hr", url: "https://au.indeed.com/viewjob?jk=ad3f5c48ed85e090", source: "Indeed" },
        { title: "ファクトリーハンド", company: "Dynamic Steelform", location: "7 Cartwright Drive, Forrestdale WA 6112", schedule: "月〜金 9:00〜17:00（週38時間）", requirements: ["フルタイム就労権必須（学生ビザ不可、ワーホリ可）", "20kgまでの運搬能力、工場経験があれば尚可"], description: "倉庫業務、荷物の積み下ろし、商品準備・積込、清掃、クレーン操作", wage: "$29〜$33/hr", url: "https://au.indeed.com/viewjob?jk=8cad11066b8b9d99", source: "Indeed" },
      ]},
      other: { name: "Other（Cairns・Adelaide）", emoji: "⚪", jobs: [
        { title: "セールスアシスタント", company: "The UGG Shop", location: "Cairns QLD", schedule: "カジュアル（週末・祝日対応必須）", requirements: ["オーストラリアでの就労資格必須", "小売販売経験1年程度歓迎（必須ではない）、基本的な英語コミュニケーション力"], description: "接客対応、商品説明、レジ業務、商品補充・陳列、在庫管理", wage: "$34.76/hr〜", url: "https://au.indeed.com/viewjob?jk=ebd336378cde3b59", source: "Indeed" },
        { title: "ホテルレセプショニスト", company: "K2 Bohemia Resort", location: "Cairns QLD", schedule: "交代勤務制（夜勤を含む可能性あり）", requirements: ["予約管理システム(RMS)経験があれば尚可（必須ではない、研修あり）"], description: "顧客対応、電話応対、予約管理、チェックイン・チェックアウト業務、ゲスト対応", wage: "$30〜$32/hr", url: "https://au.indeed.com/viewjob?jk=4c317cba9e7c0334", source: "Indeed" },
        { title: "リテールアシスタント", company: "ALDI Stores", location: "Noarlunga Centre SA 5168", schedule: "パートタイム、週15〜20時間（週末・祝日対応必須）", requirements: ["小売知識不要、意欲重視"], description: "レジでの接客対応、商品棚補充、在庫管理・価格設定、ディスプレイ制作", wage: "$31.27/hr（シフト手当込み）", url: "https://au.indeed.com/viewjob?jk=77e9da5b8301f74a", source: "Indeed" },
      ]},
    }
  },
  {
    week: "2026-07-W4",
    label: "2026年7月 第4週",
    cities: {
      sydney: { name: "Sydney", emoji: "🔵", jobs: [
        { title: "寿司スタッフ", company: "Hero Sushi", location: "Chatswood NSW 2067", schedule: "カジュアル（平日夜・週末含む柔軟シフト）", requirements: ["就労権必須", "未経験可（研修あり）"], description: "接客サービスと寿司商品の調理・盛り付け", wage: "$34.76/hr", url: "https://au.indeed.com/viewjob?jk=ce209eb98f2c2db8", source: "Indeed" },
        { title: "イベント運営・通訳スタッフ", company: "JAMS.TV Pty Ltd", location: "Sydney NSW 2000（JETRO Sydney／Centred, Castlereagh St）", schedule: "単発（9/14, 9/15の指定日程）", requirements: ["就労可能ビザ必須", "商談通訳ができるレベルの英語力（RSAは優遇のみで必須ではない）"], description: "日本食品商談会でのブース運営・試食試飲提供・通訳サポート", wage: "$33.05/hr", url: "https://www.jams.tv/classifieds/jobs/33334", source: "JAMS.TV" },
        { title: "マーケット配送・接客スタッフ", company: "Brickfields Bakery", location: "Marrickville NSW 2204", schedule: "カジュアル（金〜日、早朝5:30〜6:00開始）", requirements: ["有効な豪州運転免許（フル/仮免可）", "接客または小売経験1年以上、就労権必須"], description: "ベーカリーからマーケット会場への商品配送とマーケット店頭での接客販売", wage: "$33.19〜$38.83/hr", url: "https://au.indeed.com/viewjob?jk=a1e139ee1ee2363e", source: "Indeed" },
      ]},
      melbourne: { name: "Melbourne", emoji: "🟠", jobs: [
        { title: "キッチンハンド", company: "EAT GANGNAM PTY LTD（寿司レストラン）", location: "Docklands VIC 3008", schedule: "月〜木の4日間、7時〜16時台でフレキシブル", requirements: ["キッチンでの経験がある方", "25kgの重量物を持ち上げられる方、英語での接客が可能な方"], description: "酢飯準備、キッチンハンド、皿洗い、接客補助、清掃", wage: "$34.76/hr", url: "https://www.jams.tv/classifieds/jobs/26575", source: "JAMS.TV" },
        { title: "チームメンバー", company: "Boost Juice（Barkly Square店）", location: "Brunswick VIC（Barkly Square）", schedule: "カジュアル（週末勤務の可能性あり）", requirements: ["オーストラリアでの就労資格必須", "応募時に履歴書と勤務可能時間の提出が必要"], description: "スムージー・ジュースの製造、接客、店舗運営業務", wage: "$18.00〜$38.98/hr", url: "https://au.indeed.com/viewjob?jk=d5855d5aa593fc73", source: "Indeed" },
      ]},
      brisbane: { name: "Brisbane / Gold Coast", emoji: "🟡", jobs: [
        { title: "倉庫・配送スタッフ", company: "NTC Wismettac Australia", location: "1/54 Textile Cres, Salisbury QLD 4107", schedule: "応相談", requirements: ["経験不問、運転免許必須", "フォークリフト免許があれば操作可"], description: "倉庫で商品を取り扱い、レストランなどへ配送", wage: "$27以上/hr", url: "https://www.jams.tv/classifieds/jobs/29277", source: "JAMS.TV" },
        { title: "バブルティー店スタッフ", company: "Tea Station", location: "Eight Mile Plains QLD 4113", schedule: "週2シフト以上", requirements: ["オーストラリア就労許可必須", "経験不問、学生可"], description: "ドリンク・デザートの製造、接客、店舗運営サポート", wage: "$16.09〜$32.18/hr", url: "https://au.indeed.com/viewjob?jk=89c692f63d0eaa2a", source: "Indeed" },
        { title: "ファストフードクルー", company: "Pappa Flock", location: "Surfers Paradise QLD 4217", schedule: "柔軟シフト対応（週末・祝日含む）", requirements: ["ポジティブな態度", "ホスピタリティ経験はプラスだが必須ではない"], description: "接客、食事の準備・提供、店舗の清潔・衛生管理", wage: "$26.55以上/hr", url: "https://au.indeed.com/viewjob?jk=0b25581c29b3649a", source: "Indeed" },
      ]},
      perth: { name: "Perth", emoji: "🟢", jobs: [
        { title: "交通カメラ設置スタッフ", company: "Surveytech Traffic Surveys", location: "Osborne Park WA 6017", schedule: "カジュアル（週20〜30時間）", requirements: ["未経験可（Entry level）", "ワーキングビザ可"], description: "州内各地の道路脇に交通量測定用カメラを設置する作業", wage: "$30/hr + super", url: "https://www.gumtree.com.au/web/listing/other/1340970785", source: "Gumtree" },
        { title: "ファクトリーワーカー", company: "Trade Price Frames and Trusses (TPFT)", location: "Pickering Brook WA 6076", schedule: "応相談", requirements: ["自家用車と安全靴（steel-capped boots）持参必須", "体力に自信のある方"], description: "木材の壁・トラス切断組立、鉄骨壁フレームの製作補助", wage: "$30〜$35/hr + super", url: "https://www.gumtree.com.au/web/listing/assembly-process-work/1340712812", source: "Gumtree" },
        { title: "寿司スタッフ", company: "Sushi Fresh 7", location: "Hocking WA 6065（Wyatt Grove Shopping Centre）", schedule: "水木金のシフト", requirements: ["未経験可・研修あり", "ワーホリ・学生ビザ可"], description: "寿司ロール作り、接客・販売、忙しい時間帯での対応", wage: "$25以上/hr", url: "https://www.gumtree.com.au/web/listing/kitchen-sandwich-hand/1343513434", source: "Gumtree" },
      ]},
      other: { name: "Other（Townsville・Launceston・Newcastle）", emoji: "⚪", jobs: [
        { title: "接客スタッフ", company: "Bunnings", location: "Townsville QLD", schedule: "2027年1月31日までの繁忙期対応、柔軟なシフト", requirements: ["最低15歳から応募可", "接客への熱意があればOK"], description: "接客・在庫管理・レジ業務などのシーズナル業務", wage: "$35.09/hr（18歳以上）", url: "https://au.indeed.com/viewjob?jk=eff2cd2f31044e3f", source: "Indeed" },
        { title: "客室清掃スタッフ", company: "Commodore Regent Hotel", location: "13 Brisbane Street, Launceston TAS 7250", schedule: "週3〜6日・週20〜30時間程度", requirements: ["英語中級程度", "各種ビザ対応可、未経験可"], description: "客室清掃、アメニティ・リネン補充、共用部清掃", wage: "平日$32.31・土曜$38.78・日曜$45.24 + super12%", url: "https://www.jams.tv/classifieds/jobs/31377", source: "JAMS.TV" },
        { title: "キッズカフェスタッフ", company: "Little Amigos（Charlestown Square）", location: "Charlestown NSW", schedule: "週末・祝日勤務可", requirements: ["豪州での就労資格必須", "接客経験は歓迎だが必須ではない"], description: "接客対応、飲食物の簡単な準備、清掃などの店舗サポート業務", wage: "$26.44以上/hr", url: "https://au.indeed.com/viewjob?jk=0240201d88be8082", source: "Indeed" },
      ]},
    }
  },
  {
    week: "2026-07-W3",
    label: "2026年7月 第3週",
    cities: {
      sydney: { name: "Sydney", emoji: "🔵", jobs: [
        { title: "倉庫ピッカー・パッカー", company: "Willow Workspaces & Fulfillment", location: "Roselands NSW 2196", schedule: "カジュアル・シフト制（繁忙期は追加シフトあり）", requirements: ["特別な資格・経験不問", "信頼性・時間厳守・チームワークを重視"], description: "顧客注文のピッキング・パッキング、入荷商品の補充、倉庫内清掃・安全管理、出荷期限の遵守", wage: "$25.60〜$36.19/hr", url: "https://au.indeed.com/viewjob?jk=b2308c02bce342d0", source: "Indeed" },
        { title: "カフェ・受付スタッフ", company: "Monkey Mania", location: "109 Blaxland Road, Ryde NSW 2112", schedule: "パート・カジュアル（月〜金の平日フル対応必須）", requirements: ["資格・経験不問（コーヒーマシン経験歓迎だが必須ではない）", "明るく社交的な人柄歓迎"], description: "カフェ・キッチンでの調理補助・飲料提供・食器洗浄・清掃、受付での接客・パーティー予約対応・レジ対応", wage: "最大$32.00/hr", url: "https://au.indeed.com/viewjob?jk=245cc4392489c9d3", source: "Indeed" },
        { title: "Colesマーチャンダイザー", company: "BIG Brand Influence Group", location: "Bondi Junction NSW 2022（Bondi Westfield・Edgecliff店舗も含む）", schedule: "カジュアル（月〜金、週最大20時間・平均14時間、火〜木は必須）", requirements: ["プラノグラム経験歓迎だが必須ではない", "体力作業（立ち仕事・運搬）が可能なこと"], description: "商品陳列・棚割り（プラノグラム）作業、POP設置、価格・値札付け、店舗担当者との関係構築", wage: "$34.34/hr", url: "https://au.indeed.com/viewjob?jk=18225db20cbd1b62", source: "Indeed" },
      ]},
      melbourne: { name: "Melbourne", emoji: "🟠", jobs: [
        { title: "倉庫ピッカー・パッカー", company: "BlueHarbor Warehousing", location: "Truganina VIC 3029", schedule: "パート・フルタイム・カジュアル", requirements: ["特別な資格・経験不問", "ビザスポンサーシップの記載あり"], description: "ピッキング・パッキング・仕分け・出荷準備等の倉庫内業務全般", wage: "$25.58〜$36.16/hr", url: "https://au.indeed.com/viewjob?jk=86a3b63a3ea424cd", source: "Indeed" },
        { title: "ホテル受付", company: "Arrow on Swanston/Spencer（ホテル）", location: "Carlton VIC 3053", schedule: "カジュアル（ローテーション制シフト、7日制）", requirements: ["経験年数の指定なし", "PCスキル・コミュニケーション能力・柔軟なシフト対応を重視"], description: "ゲストのチェックイン・チェックアウト対応、予約管理、問い合わせ対応、他部門との連携", wage: "$33.38/hr〜", url: "https://au.indeed.com/viewjob?jk=13c4c169b9cc1c63", source: "Indeed" },
        { title: "カフェフロアスタッフ", company: "The Coffee Club Highpoint", location: "Highpoint Shopping Centre, Maribyrnong VIC 3032", schedule: "カジュアル（フレキシブルシフト）", requirements: ["未経験可（経験不要と明記）", "オーストラリアでの就労ビザが必要"], description: "接客・オーダー対応、フロア業務全般", wage: "$26.44〜$44.48/hr", url: "https://au.indeed.com/viewjob?jk=63bdc17290bd934b", source: "Indeed" },
      ]},
      brisbane: { name: "Brisbane / Gold Coast", emoji: "🟡", jobs: [
        { title: "倉庫スタッフ", company: "Flowerlovers", location: "385 Sherwood Road, Rocklea QLD 4106", schedule: "パートタイム（週約30時間、月曜早朝出勤必須）", requirements: ["オーストラリアでの就労権必須", "フォークリフト免許は歓迎だが必須ではない"], description: "花の加工・荷解き、冷蔵室内の在庫整理、顧客対応", wage: "$33.90〜$38.00/hr", url: "https://au.indeed.com/viewjob?jk=fe9dc50f8ca5eec4", source: "Indeed" },
        { title: "ハウスキーピング", company: "Tower Mill Hotel", location: "Spring Hill QLD 4000", schedule: "カジュアル（月〜日8:00〜15:00頃、週10〜20時間、週末勤務あり）", requirements: ["オーストラリアでの就労権必須", "客室清掃経験は歓迎だが必須ではない（研修あり）"], description: "リネン交換、客室清掃（掃除機・モップ・除塵）、バス用品の補充、ゲスト対応、メンテナンス報告", wage: "$30〜$45/hr", url: "https://au.indeed.com/viewjob?jk=90aae247d5a91827", source: "Indeed" },
        { title: "販売スタッフ", company: "Best & Less", location: "Robina QLD 4226", schedule: "カジュアル（平日日中を中心に柔軟シフト）", requirements: ["経験不問（意欲重視）", "ポジティブな接客姿勢"], description: "商品陳列・補充、店内ディスプレイ管理、接客・販売サポート", wage: "最大$33.45/hr", url: "https://au.indeed.com/viewjob?jk=70354e07dcc66474", source: "Indeed" },
      ]},
      perth: { name: "Perth", emoji: "🟢", jobs: [
        { title: "ベーカリーパッカー", company: "Little Home Bakery", location: "Morley WA 6062", schedule: "カジュアル（月〜金、9時または10時開始）", requirements: ["資格・経験不問", "体力作業（手作業でのリフティング）が可能なこと"], description: "パン製品の仕分け・梱包・フローラップ包装・保管・ラベリング、半自動スライサー・ラッピング機の操作", wage: "$32.31〜$33.00/hr", url: "https://au.indeed.com/viewjob?jk=9133b2d188fd9b72", source: "Indeed" },
        { title: "リテールアシスタント", company: "Sephora", location: "Perth CBD WA 6000", schedule: "パート・カジュアル", requirements: ["接客・販売経験歓迎（必須の明記なし）", "コミュニケーション能力を重視"], description: "接客対応、ビューティー・スキンケア・ヘアケア商品の提案、CRMプログラム案内、チーム内での知識共有", wage: "$35.10/hr", url: "https://au.indeed.com/viewjob?jk=9a1f8c0af231da89", source: "Indeed" },
        { title: "イベントスタッフ", company: "Events by Dunya", location: "Perth WA（各種イベント会場）", schedule: "カジュアル（夜間・週末・祝日中心、イベントスケジュールにより変動）", requirements: ["普通運転免許証必須（要移動）", "雇用前に警察証明（Police Clearance）取得必須"], description: "イベントでのゲスト対応、フード＆ビバレッジサービス、テーブルサービス、会場設営・撤去サポート", wage: "$26.00〜$36.50/hr", url: "https://au.indeed.com/viewjob?jk=42692558c159cd2e", source: "Indeed" },
      ]},
      other: { name: "Other（Cairns・Adelaide・Tasmania）", emoji: "⚪", jobs: [
        { title: "キッチンハンド", company: "BluMarlin Bistro", location: "Cairns QLD 4870", schedule: "カジュアル・パートタイム（夜間・週末中心、祝日勤務あり）", requirements: ["未経験可（研修あり明記）", "時間厳守・チームワークを重視"], description: "食器・調理器具の洗浄、キッチン内清掃・整理、簡単な仕込み補助、ゴミ管理、補充作業", wage: "$20.00〜$41.98/hr", url: "https://au.indeed.com/viewjob?jk=9cc98dbe9f2780e9", source: "Indeed" },
        { title: "販売スタッフ", company: "Industrie（Myer Marion店）", location: "Marion SA 5043", schedule: "カジュアル", requirements: ["経験不問（ファッションへの興味歓迎）"], description: "接客対応、顧客ニーズの把握、販売目標達成のサポート", wage: "$17.39〜$34.76/hr", url: "https://au.indeed.com/viewjob?jk=17a0a0cf51fc33de", source: "Indeed" },
        { title: "デリスタッフ", company: "Hill Street Grocer", location: "Blackmans Bay TAS 7052", schedule: "カジュアル（週3〜4日、隔週末勤務含む、朝シフト中心）", requirements: ["デリ経験は歓迎だが必須ではない", "体力作業（立ち仕事・リフティング）が可能なこと"], description: "精肉・冷製肉・シーフード・サラダ・惣菜の準備と提供、陳列管理、商品提案", wage: "$34.76〜$48.67/hr", url: "https://au.indeed.com/viewjob?jk=335fe604402af9c1", source: "Indeed" },
      ]},
    }
  },
  {
    week: "2026-07-W2",
    label: "2026年7月 第2週",
    cities: {
      sydney: { name: "Sydney", emoji: "🔵", jobs: [
        { title: "美容師スタイリスト", company: "NINE ZERO SIX（日本人経営ヘアサロン）", location: "Waterloo NSW 2017（Mascot店舗もあり）", schedule: "週1日〜OK（パート・フルタイム・カジュアル対応）", requirements: ["スタイリスト経験必須", "英語初級（簡単な挨拶程度）でも可"], description: "日本人経営サロンでの1対1接客スタイル。カット・カラー・トリートメント等の技術提供", wage: "$30.00/hr〜（技術者は歩合10%加算）", url: "https://www.jams.tv/classifieds/jobs/33184", source: "JAMS.TV" },
        { title: "セールスマーチャンダイザー", company: "YIHAI AUSTRALIA FOOD PTY LTD", location: "Sydney NSW 2000", schedule: "パートタイム（週21時間程度）", requirements: ["オーストラリアでの就労権必須", "食品衛生資格歓迎（必須ではない）"], description: "店舗での商品陳列・補充、試食販売、顧客対応、訪問レポート作成", wage: "$30.00〜$45.00/hr", url: "https://au.indeed.com/viewjob?jk=bb2c67bbb5ced972", source: "Indeed" },
        { title: "フード＆ビバレッジランナー", company: "Cibaria Manly（Manly Pacificホテル内イタリアンレストラン）", location: "55 North Steyne, Manly NSW 2095", schedule: "カジュアル（週末・祝日勤務あり）", requirements: ["オーストラリアでの就労権必須", "NSW RSA資格必須"], description: "料理・飲み物の配膳、ウェイター・バーテンダーのサポート、テーブルの片付け・セッティング", wage: "$33.85〜$43.10/hr", url: "https://au.indeed.com/viewjob?jk=56e154a067566d77", source: "Indeed" },
      ]},
      melbourne: { name: "Melbourne", emoji: "🟠", jobs: [
        { title: "キッチンスチュワード", company: "Crown Resorts（Crown Melbourne）", location: "Southbank VIC 3006", schedule: "24時間ローテーション制（週2〜3シフト）", requirements: ["オーストラリアでの就労権が必要", "未経験可・研修あり"], description: "食器洗浄機の操作、キッチン用品の洗浄・収納、清掃・衛生管理、廃棄物管理、キッチンチームのサポート", wage: "$42.32/hr（カジュアルレート）", url: "https://au.indeed.com/viewjob?jk=dbbb694dfc451de2", source: "Indeed" },
        { title: "FOHチームリーダー", company: "Gelato Messina", location: "171 Chapel Street, Windsor VIC 3181", schedule: "カジュアル（夜間・週末・祝日勤務あり）", requirements: ["オーストラリア国籍・永住権・ワーキングホリデービザ保持者可", "接客経験2年・監督経験1年歓迎"], description: "ジェラート販売接客、バー業務サポート、ジェラート製造技術の習得", wage: "$33.19〜$39.55/hr", url: "https://au.indeed.com/viewjob?jk=913943af442a0e85", source: "Indeed" },
        { title: "カフェウェイトスタッフ", company: "Sonny Ray（カフェ）", location: "328 Auburn Road, Hawthorn VIC 3122", schedule: "カジュアル（週3〜4日、週末勤務必須）", requirements: ["オーストラリア就労権必須", "接客経験1年・RSA資格必須"], description: "フロア対応、POSシステム操作、独立して動ける接客業務", wage: "$35.00/hr", url: "https://au.indeed.com/viewjob?jk=4a361c89d32b4157", source: "Indeed" },
      ]},
      brisbane: { name: "Brisbane / Gold Coast", emoji: "🟡", jobs: [
        { title: "バーテンダー＆サーバー", company: "5 Boroughs（Everton Park店）", location: "Everton Plaza, 791 Stafford Rd, Everton Park QLD 4053", schedule: "週末・祝日含むシフト制", requirements: ["オーストラリア就労権必須", "RSA資格必須、バーテンダー経験2年"], description: "フード＆ビバレッジ提供、ドリンク作成、POS注文対応、店内清掃", wage: "$33.85〜$35.00/hr", url: "https://au.indeed.com/viewjob?jk=e79877d904028720", source: "Indeed" },
        { title: "バリスタ", company: "Piccolo By Her（人気カフェ）", location: "A/887 Ann Street, Fortitude Valley QLD 4006", schedule: "週末シフトあり", requirements: ["オーストラリア就労権優遇", "バリスタ経験1年・食品衛生経験1年歓迎"], description: "コーヒー抽出、在庫管理、接客対応、衛生管理", wage: "$27.08〜$67.70/hr（平日〜日祝ペナルティレート込み）", url: "https://au.indeed.com/viewjob?jk=5a5d12e7cdfd4844", source: "Indeed" },
        { title: "ハウスキーパー", company: "Oaks Hotels（Minor Hotels）", location: "Surfers Paradise QLD 4217", schedule: "月〜日ローテーション制（8〜9時スタート）", requirements: ["オーストラリアまたはNZの就労権保持者のみ応募可", "未経験可・研修あり"], description: "客室清掃、時間内での効率的な作業、チームとの連携、安全基準の遵守", wage: "平日$33.85/hr／土曜$40.62/hr／日曜$47.39/hr", url: "https://au.indeed.com/viewjob?jk=51ced9df22f8060a", source: "Indeed" },
      ]},
      perth: { name: "Perth", emoji: "🟢", jobs: [
        { title: "フード＆ビバレッジアテンダント", company: "Turquoise Hillarys（Hillarys Boat Harbour内カフェ）", location: "52 Southside Drive, Hillarys WA 6025", schedule: "カジュアル（週末・祝日勤務必須）", requirements: ["レストラン経験必須", "WA RSA資格必須"], description: "セクション管理、接客対応、ブランチ・ハイティー・ディナーサービス対応", wage: "$34.00〜$41.00/hr", url: "https://au.indeed.com/viewjob?jk=0d350f6515f88a1b", source: "Indeed" },
        { title: "リテールアシスタント／バリスタ", company: "Daniel's Donuts", location: "73 Barrack Street, Perth WA 6000", schedule: "月〜木 9:00〜20:00（週10〜20時間）", requirements: ["バリスタ経験必須"], description: "コーヒー・ドリンク調理、ドーナツ等の接客販売、POSレジ操作、陳列補充、衛生管理", wage: "$34.76/hr", url: "https://au.indeed.com/viewjob?jk=daea98e58d17a7f4", source: "Indeed" },
        { title: "ストアパーソンアシスタント", company: "Joondalup Resort（ゴルフリゾート）", location: "37 Country Club Boulevard, Connolly WA 6027", schedule: "シフト制（早朝6時スタートあり、柔軟な勤務時間）", requirements: ["体力必要（リフティング・繰り返し作業）", "未経験可"], description: "納品受け取り・整理、食品温度チェック、在庫配布、発注処理、清掃", wage: "$33.84〜$33.85/hr", url: "https://au.indeed.com/viewjob?jk=f9077acd2fb5b997", source: "Indeed" },
      ]},
      other: { name: "Other（Cairns・Adelaide・Darwin）", emoji: "⚪", jobs: [
        { title: "クック", company: "Oaks Hotels（Minor Hotels）", location: "Cairns QLD", schedule: "月〜日ローテーション（朝食・夕食帯、週20時間〜）", requirements: ["オーストラリアまたはNZの就労権保持者のみ応募可", "未経験可・研修あり"], description: "料理の仕込み・調理、衛生管理、盛り付け、キッチンチームのサポート", wage: "平日$27.08/hr／土曜$33.85/hr／日曜$40.62/hr", url: "https://au.indeed.com/viewjob?jk=b02045d0e4171d36", source: "Indeed" },
        { title: "バリスタ／フロア／キッチンスタッフ", company: "St. Louis House of Fine Ice Cream and Dessert", location: "20 O'Connell Street, North Adelaide SA 5006", schedule: "パート・カジュアル・フルタイム（週末・夜間シフトあり）", requirements: ["接客経験歓迎（必須ではない）", "未経験可"], description: "接客対応、ジェラート・デザート提供、コーヒー抽出、キッチン業務", wage: "$24.95〜$42.97/hr", url: "https://au.indeed.com/viewjob?jk=3812491150a7ef9d", source: "Indeed" },
        { title: "イベント設営スタッフ", company: "Show Support（イベント設営会社）", location: "10 Stokes Hill Road, Darwin NT 0800", schedule: "柔軟シフト（週末・夜間あり）", requirements: ["体力必要（重量物運搬）", "安全靴・PPE支給、英語コミュニケーション能力"], description: "イベント会場の設営・撤去、重量物の運搬、基本工具の使用", wage: "$33.00〜$43.00/hr", url: "https://au.indeed.com/viewjob?jk=07b8fc5c46434565", source: "Indeed" },
      ]},
    }
  },
  {
    week: "2026-07-W1",
    label: "2026年7月 第1週",
    cities: {
      sydney: { name: "Sydney", emoji: "🔵", jobs: [
        { title: "ヘアスタイリスト・アシスタント", company: "Takeshi & Team Hair Salon", location: "683-689 George Street, Haymarket（Sydney CBD NSW 2000）", schedule: "カジュアル（応相談）", requirements: ["ワーキングホリデービザ・学生ビザ可", "美容師資格または経験者優遇", "日本語・英語いずれかでコミュニケーション可"], description: "ヘアカット・カラー・パーマ等のサロン業務全般。シドニー中心部の日本人向けサロン", wage: "$32.00/hr〜", url: "https://www.jams.tv/classifieds/jobs/32560", source: "JAMS.TV" },
        { title: "Process Worker（製造ライン）", company: "A&J Australia", location: "Wetherill Park NSW 2164（Sydney西部）", schedule: "月〜金（日勤 8am-4pm / 夕勤 4pm-0am）", requirements: ["ワーキングホリデービザ可（学生ビザ不可）", "英語・中国語いずれか可、車通勤可能な方"], description: "製造ラインでの梱包・品質チェック・仕分け作業全般", wage: "日勤$33.05/hr・夕勤$38.00/hr・夜勤$42.96/hr（+ super 12%）", url: "https://au.indeed.com/viewjob?jk=f4f6250846f6db1d", source: "Indeed" },
        { title: "インサイドセールス", company: "SalesPond", location: "Sydney CBD NSW 2000（リモートワーク可）", schedule: "フルタイム〜パートタイム（応相談）", requirements: ["ワーキングホリデービザ・学生ビザ可", "英語でのビジネスコミュニケーション能力、PCスキル基礎"], description: "既存顧客へのフォローアップ・新規顧客開拓・電話・メール営業。在宅勤務選択可", wage: "$26.00/hr〜 + super", url: "https://www.jams.tv/classifieds/jobs/15002", source: "JAMS.TV" },
      ]},
      melbourne: { name: "Melbourne", emoji: "🟠", jobs: [
        { title: "バーテンダー", company: "Izakaya DOMO（DSB VIC PTY LTD）", location: "350 Bourke Street, Melbourne CBD VIC 3000", schedule: "カジュアル（夜間・週末含むシフト制）", requirements: ["ワーキングホリデービザ可（ワーホリ歓迎と明記）", "RSA取得者優遇、英語または日本語でのコミュニケーション可"], description: "居酒屋スタイルのレストランでのバーカウンター対応・ドリンク提供・グラス管理", wage: "平日$33.85/hr〜 + super（土日はアワードレート別途）", url: "https://www.jams.tv/classifieds/jobs/33207", source: "JAMS.TV" },
        { title: "Warehouse General Labourer", company: "Nyson Australia Pty Ltd", location: "44-60 Fenton Street, Huntingdale VIC 3166", schedule: "月〜金 9am〜5pm（週末なし）", requirements: ["ワーキングホリデービザ・学生ビザ可（WHVホルダー・バックパッカー歓迎）", "体力のある方、フォークリフト経験あれば尚可"], description: "家具・大型商品のピッキング・梱包・出荷準備・倉庫内作業全般", wage: "$33.00〜$34.00/hr（カジュアル）", url: "https://au.indeed.com/viewjob?jk=144b2e9989feb60d", source: "Indeed" },
        { title: "Waiting Staff", company: "MS FRANKIE（南イタリア料理レストラン）", location: "Carlton VIC 3053", schedule: "カジュアル（週末・祝日必須）", requirements: ["ワーキングホリデービザ・学生ビザ可", "英語での接客ができる方、RSA推奨"], description: "本格イタリアンレストランでの注文受け・配膳・テーブルサービス・会場準備", wage: "$30.00〜$33.77/hr（カジュアル。日・祝は割増）", url: "https://au.indeed.com/viewjob?jk=9b5e45f5ec7fb45b", source: "Indeed" },
      ]},
      brisbane: { name: "Brisbane / Gold Coast", emoji: "🟡", jobs: [
        { title: "ホールスタッフ", company: "Ramen Danbo（ラーメン暖暮）", location: "A4 G1, 52 Merivale St, South Brisbane QLD 4101", schedule: "週3〜5日", requirements: ["ワーキングホリデービザ・学生ビザ可（全ビザOK明記）", "日本語できれば尚可・未経験可"], description: "注文・配膳・仕込み・清掃。日英バイリンガル環境、日本人スタッフ多数", wage: "平日$32.18/hr〜 / 土曜$38.61/hr〜 / 日曜$38.61/hr〜 / 祝日$64.35/hr〜", url: "https://www.jams.tv/classifieds/jobs/32346", source: "JAMS.TV" },
        { title: "ファームハンド・苺収穫", company: "A&A Juicy Berries", location: "Beerwah QLD 4519（Sunshine Coast方面）", schedule: "週5〜6日（シーズン中）", requirements: ["ワーキングホリデービザ・学生ビザ可", "セカンドビザ取得希望者歓迎、体力のある方・早起きが得意な方"], description: "苺の収穫・選別・梱包作業。セカンドビザの地方就労日数としてカウント可", wage: "$30.35/hr", url: "https://www.jams.tv/classifieds/jobs/32939", source: "JAMS.TV" },
        { title: "テーブルピッキング（苺農場）", company: "Vspec group", location: "Elimbah QLD 4516", schedule: "週5〜6日（収穫シーズン中）", requirements: ["ワーキングホリデービザ・学生ビザ可", "セカンドビザ希望者歓迎、体力のある方"], description: "高床式テーブルでの苺ピッキング。腰への負担が少ない作業環境", wage: "出来高制（週払い）＋宿泊費$200/週提供", url: "https://www.jams.tv/classifieds/jobs/32886", source: "JAMS.TV" },
      ]},
      perth: { name: "Perth", emoji: "🟢", jobs: [
        { title: "寿司ロール・アシスタント", company: "MATSUYA GROUP", location: "100 Kingsley Drive, Kingsley WA 6026", schedule: "週3〜5日（AM4:00〜9:00）", requirements: ["ワーキングホリデービザ・学生ビザ可", "早起きが得意な方、未経験可・研修あり"], description: "寿司ロール・テイクアウト商品の製造補助。早朝の時間を有効活用したい方に最適", wage: "7時前$32.85/hr / 7時以降$31.35/hr（+ super 12%）", url: "https://www.jams.tv/classifieds/jobs/32186", source: "JAMS.TV" },
        { title: "旅行代理店スタッフ", company: "SHOHO Travel", location: "Perth WA 6000（Perth CBD）", schedule: "フルタイム〜パートタイム", requirements: ["ワーキングホリデービザ・学生ビザ可", "日本語・英語バイリンガル歓迎"], description: "旅行パッケージの販売・予約管理・SNSマーケティング補助・顧客対応", wage: "事務$30.04/hr〜 + 出来高 / 営業$29.04/hr〜 + 出来高", url: "https://www.jams.tv/classifieds/jobs/28217", source: "JAMS.TV" },
        { title: "スポーツコート設置作業員", company: "個人事業", location: "Perth WA 市内・近郊各所", schedule: "週3〜4日以上（7:00am現地集合）", requirements: ["ワーキングホリデービザ可", "普通自動車免許、体力のある方・屋外作業OK"], description: "バックヤード・施設向けスポーツコートの設置・組み立て作業。重量物の取り扱いあり", wage: "$35.00/hr + super", url: "https://www.gumtree.com.au/s-other/perth-perth/labourer-installer-for-sports-court-costruction/1343191343", source: "Gumtree" },
      ]},
      other: { name: "Other（Cairns・Adelaide）", emoji: "⚪", jobs: [
        { title: "販売スタッフ", company: "82K Trading Pty Ltd（Cairns Night Market）", location: "Cairns Night Market, Abbott Street, Cairns QLD 4870", schedule: "カジュアル（夜間・週末含む）", requirements: ["ワーキングホリデービザ・学生ビザ可", "英語での接客ができる方、未経験可"], description: "ナイトマーケット内の帽子ショップでの接客・販売・レジ対応・商品陳列", wage: "平日$31.18/hr（土日・祝日は割増）", url: "https://www.jams.tv/classifieds/jobs/31848", source: "JAMS.TV" },
        { title: "販売スタッフ", company: "OK GIFT SHOP - CAIRNS", location: "59-61 Abbott Street, Cairns QLD 4870（Cairns CBD）", schedule: "カジュアル（週末・夕方含む）", requirements: ["ワーキングホリデービザ・学生ビザ可", "英語での基本接客ができる方"], description: "土産店でのレジ・接客・商品補充・陳列。観光客が多い国際的な環境", wage: "$26.55/hr〜（18時以降・土日は割増）", url: "https://www.jams.tv/classifieds/jobs/32773", source: "JAMS.TV" },
        { title: "ルートセールス", company: "Yakult（ヤクルト）", location: "Unit 3, 52 Weaver Street, Edwardstown SA 5039（Adelaide）", schedule: "フルタイム（月〜金）", requirements: ["ワーキングホリデービザ・学生ビザ可", "普通自動車免許必須、英語での顧客対応ができる方"], description: "Yakult商品の顧客先への配達・新規顧客開拓・既存顧客管理", wage: "見習い期間$55,291/年〜 → 正規$60,729/年〜（+ super）", url: "https://www.jams.tv/classifieds/jobs/32820", source: "JAMS.TV" },
      ]},
    }
  },
];
