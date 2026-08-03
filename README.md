# WCF Job Search

Women Can Fly が集めた、オーストラリア・ワーホリ／留学生向けの求人情報サイト。

- `index.html` — サイト本体
- `data.js` — 求人データ（週ごとに配列の先頭へ新しい週を追加していく）

## 新しい週を追加する手順
1. `data.js` の `JOB_WEEKS` 配列の**先頭**に新しい週オブジェクトを追加
2. コミットしてpush（GitHub Pagesが自動で再デプロイ）
