// 300+ real, copyable README markdown snippets. Each renders on GitHub.
// Every item has: id, category, label, markdown (ready to paste).

export type Snippet = { id: string; cat: string; label: string; md: string };

const s = (cat: string, label: string, md: string): Snippet => ({ id: `${cat}-${label}`.replace(/\W+/g,'-').toLowerCase(), cat, label, md });

// ---- HEADERS (30) ----
const headers: Snippet[] = [
  s('header','Waving hi','# Hi there 👋'),
  s('header','Centered name','<h1 align="center">Hi 👋, I\'m {{NAME}}</h1>'),
  s('header','Subtitle','<h3 align="center">{{ROLE}} from India</h3>'),
  s('header','Capsule render wave','<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text={{NAME}}&fontSize=80&animation=fadeIn" />'),
  s('header','Capsule cylinder','<img src="https://capsule-render.vercel.app/api?type=cylinder&color=auto&height=150&section=header&text={{NAME}}&fontSize=60" />'),
  s('header','Capsule shark','<img src="https://capsule-render.vercel.app/api?type=shark&color=0:ee7752,100:e73c7e&height=120&section=header" />'),
  s('header','Capsule egg','<img src="https://capsule-render.vercel.app/api?type=egg&color=gradient&height=150&text={{NAME}}&fontSize=40" />'),
  s('header','Capsule slice','<img src="https://capsule-render.vercel.app/api?type=slice&color=auto&height=150&text={{ROLE}}&fontSize=40&fontAlignY=65" />'),
  s('header','Capsule rect','<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=100&text={{NAME}}&fontSize=50" />'),
  s('header','Capsule soft','<img src="https://capsule-render.vercel.app/api?type=soft&color=auto&height=150&text={{NAME}}&fontSize=70&animation=twinkling" />'),
  s('header','Capsule rounded','<img src="https://capsule-render.vercel.app/api?type=rounded&color=timeAuto&height=150&text={{NAME}}&fontSize=50" />'),
  s('header','Capsule transparent','<img src="https://capsule-render.vercel.app/api?type=transparent&fontColor=FFFFFF&text={{NAME}}&height=150&fontSize=80" />'),
  s('header','Typing SVG centered','<p align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&color=36BCF7&center=true&vCenter=true&width=800&lines={{ROLE}};Open+Source;AI+Enthusiast" /></p>'),
  s('header','Typing rainbow','<p align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=1000&color=F7B93E&center=true&vCenter=true&random=false&width=500&lines={{NAME}};{{ROLE}}" /></p>'),
  s('header','Komarev visitor','<p align="center"><img src="https://komarev.com/ghpvc/?username={{HANDLE}}&label=Profile+Views&color=36BCF7&style=for-the-badge" /></p>'),
  s('header','Profile counter','<p align="center"><img src="https://profile-counter.glitch.me/{{HANDLE}}/count.svg" /></p>'),
  s('header','Stars badge','![Stars](https://img.shields.io/github/stars/{{HANDLE}}?style=social)'),
  s('header','Followers badge','![Followers](https://img.shields.io/github/followers/{{HANDLE}}?style=social)'),
  s('header','About one-liner','> {{ROLE}} · building the future of web'),
  s('header','Blockquote','> "Code is poetry." — WordPress'),
  s('header','Simple intro','## About Me\nI\'m **{{NAME}}**, a {{ROLE}} passionate about building things.'),
  s('header','Emoji intro','## 🙋‍♂️ About Me\n- 🔭 Working on **open source**\n- 🌱 Learning **AI & ML**\n- 💬 Ask me about **web dev**'),
  s('header','Current status','- 🔭 I\'m currently working on **my portfolio**\n- 🌱 I\'m currently learning **TypeScript**\n- 👯 I\'m looking to collaborate on **open source**\n- 💬 Ask me about **React, Node, Python**\n- 📫 How to reach me: **{{HANDLE}}@gmail.com**'),
  s('header','Horizontal rule dashed','---'),
  s('header','Horizontal rule stars','***'),
  s('header','Horizontal rule underscores','___'),
  s('header','Table of contents','## Table of Contents\n- [About Me](#about-me)\n- [Skills](#skills)\n- [Stats](#stats)\n- [Connect](#connect)'),
  s('header','ASCII art name','```\n ____  _   _ ____  _   _ ___ ____  \n/ ___|| | | |  _ \\| | | |_ _|  _ \\ \n\\___ \\| | | | | | | |_| || || |_) |\n ___) | |_| | |_| |  _  || ||  _ < \n|____/ \\___/|____/|_| |_|___|_| \\_\\\n```'),
  s('header','Code block intro','```javascript\nconst developer = {\n  name: "{{NAME}}",\n  role: "{{ROLE}}",\n  skills: ["JS", "TS", "Python", "React"]\n};\n```'),
  s('header','JSON intro','```json\n{\n  "name": "{{NAME}}",\n  "role": "{{ROLE}}",\n  "location": "Earth",\n  "hireable": true\n}\n```'),
];

// ---- SOCIAL BADGES (50) ----
const socials: Snippet[] = [
  ...['LinkedIn-0A66C2-linkedin','Twitter-1DA1F2-twitter','YouTube-FF0000-youtube','Discord-5865F2-discord','Telegram-26A5E4-telegram','Instagram-E4405F-instagram','Facebook-1877F2-facebook','Reddit-FF4500-reddit','Medium-12100E-medium','Dev.to-0A0A0A-devdotto','Hashnode-2962FF-hashnode','Stack Overflow-F58025-stackoverflow','CodePen-000000-codepen','LeetCode-FFA116-leetcode','HackerRank-00EA64-hackerrank','Kaggle-20BEFF-kaggle','Dribbble-EA4C89-dribbble','Behance-1769FF-behance','Figma-F24E1E-figma','Twitch-9146FF-twitch','Spotify-1DB954-spotify','Apple Music-FA243C-applemusic','WhatsApp-25D366-whatsapp','Pinterest-E60023-pinterest','Snapchat-FFFC00-snapchat','TikTok-000000-tiktok','Mastodon-6364FF-mastodon','Bluesky-0085FF-bluesky','Threads-000000-threads','Slack-4A154B-slack','Gmail-EA4335-gmail','Outlook-0078D4-microsoftoutlook','Proton Mail-6D4AFF-protonmail','Signal-3A76F0-signal','Matrix-000000-matrix','Codewars-B1361E-codewars','HuggingFace-FFD21E-huggingface','Notion-000000-notion','Vercel-000000-vercel','Netlify-00C7B7-netlify','Heroku-430098-heroku','DigitalOcean-0080FF-digitalocean','Cloudflare-F38020-cloudflare','Upwork-6FDA44-upwork','Fiverr-1DBF73-fiverr','ProductHunt-DA552F-producthunt','IndieHackers-0E2439-indiehackers','Gumroad-FF90E8-gumroad','BuyMeACoffee-FFDD00-buymeacoffee','Ko-Fi-FF5E5B-kofi'].map(b => {
    const [name, color, icon] = b.split('-');
    return s('social', name, `[![${name}](https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${icon}&logoColor=white)](https://${icon}.com/{{HANDLE}})`);
  }),
];

// ---- SKILL BADGES (80) ----
const skills: Snippet[] = [
  ...['HTML5-E34F26-html5','CSS3-1572B6-css3','JavaScript-F7DF1E-javascript','TypeScript-3178C6-typescript','Python-3776AB-python','Java-ED8B00-openjdk','C++-00599C-cplusplus','C%23-239120-csharp','Go-00ADD8-go','Rust-000000-rust','PHP-777BB4-php','Ruby-CC342D-ruby','Swift-FA7343-swift','Kotlin-7F52FF-kotlin','Dart-0175C2-dart','Scala-DC322F-scala','R-276DC3-r','Lua-2C2D72-lua','Perl-39457E-perl','Elixir-4B275F-elixir','React-61DAFB-react','Vue.js-4FC08D-vuedotjs','Angular-DD0031-angular','Svelte-FF3E00-svelte','Next.js-000000-nextdotjs','Nuxt.js-00DC82-nuxtdotjs','Gatsby-663399-gatsby','Astro-BC52EE-astro','Remix-000000-remix','SolidJS-2C4F7C-solid','Node.js-339933-nodedotjs','Express-000000-express','NestJS-E0234E-nestjs','Django-092E20-django','Flask-000000-flask','FastAPI-009688-fastapi','Spring-6DB33F-spring','Laravel-FF2D20-laravel','Rails-CC0000-rubyonrails','Gin-00ADD8-gin','MongoDB-47A248-mongodb','PostgreSQL-4169E1-postgresql','MySQL-4479A1-mysql','SQLite-003B57-sqlite','Redis-DC382D-redis','Supabase-3FCF8E-supabase','Firebase-FFCA28-firebase','Prisma-2D3748-prisma','DynamoDB-4053D6-amazondynamodb','Cassandra-1287B1-apachecassandra','Docker-2496ED-docker','Kubernetes-326CE5-kubernetes','AWS-232F3E-amazonaws','Azure-0078D4-microsoftazure','GCP-4285F4-googlecloud','Vercel-000000-vercel','Netlify-00C7B7-netlify','Heroku-430098-heroku','Terraform-7B42BC-terraform','Ansible-EE0000-ansible','Jenkins-D24939-jenkins','GitHub Actions-2088FF-githubactions','CircleCI-343434-circleci','Tailwind-06B6D4-tailwindcss','Bootstrap-7952B3-bootstrap','Sass-CC6699-sass','Material UI-007FFF-mui','Chakra UI-319795-chakraui','Figma-F24E1E-figma','Storybook-FF4785-storybook','Git-F05032-git','GitHub-181717-github','GitLab-FC6D26-gitlab','VS Code-007ACC-visualstudiocode','Vim-019733-vim','Neovim-57A143-neovim','JetBrains-000000-jetbrains','Linux-FCC624-linux','Ubuntu-E95420-ubuntu','Arch Linux-1793D1-archlinux'].map(b => {
    const parts = b.split('-');
    const name = parts[0]; const color = parts[1]; const icon = parts[2];
    return s('skill', decodeURIComponent(name), `![${decodeURIComponent(name)}](https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${icon}&logoColor=white)`);
  }),
];

// ---- STAT CARDS (20) ----
const stats: Snippet[] = [
  s('stat','Stats card','![Stats](https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=tokyonight&hide_border=true&show_icons=true)'),
  s('stat','Streak card','![Streak](https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=tokyonight&hide_border=true)'),
  s('stat','Top langs compact','![Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=tokyonight&hide_border=true)'),
  s('stat','Top langs pie','![Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=pie&theme=tokyonight&hide_border=true)'),
  s('stat','Top langs donut','![Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=donut&theme=tokyonight&hide_border=true)'),
  s('stat','Activity graph','![Activity](https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true)'),
  s('stat','Trophies','![Trophies](https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=tokyonight&no-frame=true&row=1&column=7)'),
  s('stat','Dev quote','![Quote](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)'),
  s('stat','Dev joke','![Joke](https://readme-jokes.vercel.app/api?theme=tokyonight)'),
  s('stat','Wakatime','![Wakatime](https://github-readme-stats.vercel.app/api/wakatime?username={{HANDLE}}&theme=tokyonight&hide_border=true&layout=compact)'),
  s('stat','LeetCode card','![LeetCode](https://leetcard.jacoblin.cool/{{HANDLE}}?theme=dark&font=Fira+Code&ext=heatmap)'),
  s('stat','Snake dark','![Snake](https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake-dark.svg)'),
  s('stat','Snake light','![Snake](https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg)'),
  s('stat','Pin repo 1','[![Repo](https://github-readme-stats.vercel.app/api/pin/?username={{HANDLE}}&repo=repo-name&theme=tokyonight)](https://github.com/{{HANDLE}}/repo-name)'),
  s('stat','Summary cards','![Summary](https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username={{HANDLE}}&theme=tokyonight)'),
  s('stat','Productive time','![Time](https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username={{HANDLE}}&theme=tokyonight&utcOffset=5.5)'),
  s('stat','Commits per lang','![Commits](https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username={{HANDLE}}&theme=tokyonight)'),
  s('stat','Repos per lang','![Repos](https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username={{HANDLE}}&theme=tokyonight)'),
  s('stat','Star history','[![Star History](https://api.star-history.com/svg?repos={{HANDLE}}/repo&type=Date)](https://star-history.com/#{{HANDLE}}/repo&Date)'),
  s('stat','Metrics','![Metrics](https://metrics.lecoq.io/{{HANDLE}}?template=classic)'),
];

// ---- FOOTERS (15) ----
const footers: Snippet[] = [
  s('footer','Waving footer','<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" />'),
  s('footer','Simple line','---\n<p align="center">Made with ❤ by <a href="https://github.com/{{HANDLE}}">{{NAME}}</a></p>'),
  s('footer','Emoji footer','<p align="center">⭐ Star my repos if you find them useful!</p>'),
  s('footer','Snake footer','<p align="center"><img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg" /></p>'),
  s('footer','Coffee footer','<p align="center"><a href="https://buymeacoffee.com/{{HANDLE}}"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug={{HANDLE}}&button_colour=FFDD00&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=ffffff" /></a></p>'),
  s('footer','Sponsor footer','<p align="center"><a href="https://github.com/sponsors/{{HANDLE}}"><img src="https://img.shields.io/badge/Sponsor-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white" /></a></p>'),
  s('footer','Visitor count footer','<p align="center"><img src="https://komarev.com/ghpvc/?username={{HANDLE}}&color=green&style=flat-square" /></p>'),
  s('footer','Thanks footer','<p align="center">Thanks for visiting! 🙏</p>'),
  s('footer','Capsule rect footer','<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=2" />'),
  s('footer','Quote footer','<p align="center"><em>"The only way to do great work is to love what you do."</em> — Steve Jobs</p>'),
  s('footer','Trophy footer','<p align="center"><img src="https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=flat&no-frame=true&row=1&column=7" /></p>'),
  s('footer','Joke footer','<p align="center"><img src="https://readme-jokes.vercel.app/api?theme=default" /></p>'),
  s('footer','Random quote footer','<p align="center"><img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark" /></p>'),
  s('footer','Streak footer','<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=dark&hide_border=true" /></p>'),
  s('footer','Last updated','<p align="center"><sub>Last updated: July 2026</sub></p>'),
];

// ---- LAYOUT / SEPARATORS (15) ----
const layout: Snippet[] = [
  s('layout','Centered div','<div align="center">\n\n<!-- content here -->\n\n</div>'),
  s('layout','Right align','<div align="right">\n\n<!-- content here -->\n\n</div>'),
  s('layout','Two column table','| Left | Right |\n|------|-------|\n| Content A | Content B |'),
  s('layout','Three column','| Col 1 | Col 2 | Col 3 |\n|-------|-------|-------|\n| A | B | C |'),
  s('layout','Details/Summary','<details>\n<summary>Click to expand</summary>\n\nHidden content here\n\n</details>'),
  s('layout','Collapsible section','<details open>\n<summary><b>📋 My Section</b></summary>\n\n- Item 1\n- Item 2\n- Item 3\n\n</details>'),
  s('layout','Horizontal images','<p align="center">\n  <img src="URL1" width="45%" />\n  <img src="URL2" width="45%" />\n</p>'),
  s('layout','Image with link','[![Alt](image-url)](link-url)'),
  s('layout','Badge row','<p>\n  <img src="https://img.shields.io/badge/A-blue?style=flat" />\n  <img src="https://img.shields.io/badge/B-green?style=flat" />\n  <img src="https://img.shields.io/badge/C-red?style=flat" />\n</p>'),
  s('layout','Blockquote tip','> **💡 Tip:** You can do this!'),
  s('layout','Blockquote warning','> **⚠️ Warning:** Be careful!'),
  s('layout','Blockquote note','> **📝 Note:** Remember this.'),
  s('layout','Checkbox list','- [x] Completed task\n- [ ] Pending task\n- [ ] Another task'),
  s('layout','Emoji separator','<p align="center">· · ·</p>'),
  s('layout','Wave separator','<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=footer" />'),
];

// ---- SKILL ICON ROWS (30) ----
const iconRows: Snippet[] = [
  s('icons','Frontend stack','<p><img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vue,angular,svelte,next,tailwind" /></p>'),
  s('icons','Backend stack','<p><img src="https://skillicons.dev/icons?i=nodejs,express,nestjs,python,django,flask,java,spring,go,rust" /></p>'),
  s('icons','Database stack','<p><img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql,redis,sqlite,supabase,firebase,dynamodb,cassandra,elasticsearch" /></p>'),
  s('icons','DevOps stack','<p><img src="https://skillicons.dev/icons?i=docker,kubernetes,aws,gcp,azure,terraform,ansible,jenkins,githubactions,linux" /></p>'),
  s('icons','Mobile stack','<p><img src="https://skillicons.dev/icons?i=flutter,dart,kotlin,swift,react,androidstudio,figma,firebase" /></p>'),
  s('icons','Design stack','<p><img src="https://skillicons.dev/icons?i=figma,xd,photoshop,illustrator,blender,aftereffects" /></p>'),
  s('icons','AI/ML stack','<p><img src="https://skillicons.dev/icons?i=python,pytorch,tensorflow,opencv" /></p>'),
  s('icons','Tools stack','<p><img src="https://skillicons.dev/icons?i=vscode,vim,neovim,git,github,gitlab,postman,notion" /></p>'),
  s('icons','Full stack mini','<p><img src="https://skillicons.dev/icons?i=ts,react,next,node,postgres,docker" /></p>'),
  s('icons','JS ecosystem','<p><img src="https://skillicons.dev/icons?i=js,ts,react,vue,svelte,next,node,deno,bun,vite" /></p>'),
  s('icons','Python ecosystem','<p><img src="https://skillicons.dev/icons?i=python,django,flask,fastapi,pytorch,tensorflow" /></p>'),
  s('icons','Java ecosystem','<p><img src="https://skillicons.dev/icons?i=java,spring,gradle,maven,kafka,elasticsearch" /></p>'),
  s('icons','Rust + Go','<p><img src="https://skillicons.dev/icons?i=rust,go,docker,kubernetes,linux,bash" /></p>'),
  s('icons','Cloud infra','<p><img src="https://skillicons.dev/icons?i=aws,gcp,azure,cloudflare,vercel,netlify,heroku,digitalocean" /></p>'),
  s('icons','All languages','<p><img src="https://skillicons.dev/icons?i=js,ts,py,java,cpp,cs,go,rust,ruby,php,swift,kotlin,dart,scala,r,lua" /></p>'),
  s('icons','Minimal 3','<p><img src="https://skillicons.dev/icons?i=react,node,postgres" /></p>'),
  s('icons','Minimal 5','<p><img src="https://skillicons.dev/icons?i=ts,react,next,tailwind,prisma" /></p>'),
  s('icons','Dark theme','<p><img src="https://skillicons.dev/icons?i=html,css,js,ts,react,node&theme=dark" /></p>'),
  s('icons','Light theme','<p><img src="https://skillicons.dev/icons?i=html,css,js,ts,react,node&theme=light" /></p>'),
  s('icons','Per line 5','<p><img src="https://skillicons.dev/icons?i=html,css,js,ts,react&perline=5" /></p>'),
  s('icons','Per line 8','<p><img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vue,angular,svelte&perline=8" /></p>'),
  s('icons','Blockchain','<p><img src="https://skillicons.dev/icons?i=solidity,rust,js,ts,docker,linux" /></p>'),
  s('icons','Game dev','<p><img src="https://skillicons.dev/icons?i=unity,unreal,cpp,cs,blender,godot" /></p>'),
  s('icons','Cyber sec','<p><img src="https://skillicons.dev/icons?i=linux,python,bash,docker,kali" /></p>'),
  s('icons','Data science','<p><img src="https://skillicons.dev/icons?i=python,r,pytorch,tensorflow,mysql,postgres" /></p>'),
  s('icons','SRE stack','<p><img src="https://skillicons.dev/icons?i=prometheus,grafana,docker,kubernetes,terraform,ansible" /></p>'),
  s('icons','Serverless','<p><img src="https://skillicons.dev/icons?i=aws,vercel,netlify,firebase,supabase,cloudflare" /></p>'),
  s('icons','Testing','<p><img src="https://skillicons.dev/icons?i=jest,cypress,selenium,postman" /></p>'),
  s('icons','CMS','<p><img src="https://skillicons.dev/icons?i=wordpress,contentful,strapi,sanity" /></p>'),
  s('icons','Messaging','<p><img src="https://skillicons.dev/icons?i=kafka,rabbitmq,redis" /></p>'),
];

// ---- MISC WIDGETS (25) ----
const widgets: Snippet[] = [
  s('widget','Spotify now playing','[![Spotify](https://novatorem.vercel.app/api/spotify)](https://open.spotify.com/user/{{HANDLE}})'),
  s('widget','Blog post workflow','<!-- BLOG-POST-LIST:START -->\n<!-- BLOG-POST-LIST:END -->'),
  s('widget','GitHub readme stats repo','[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username={{HANDLE}}&repo=readme-stats&theme=dark)](https://github.com/{{HANDLE}}/readme-stats)'),
  s('widget','Contribution calendar','![Contributions](https://ghchart.rshah.org/{{HANDLE}})'),
  s('widget','WakaTime badge','[![wakatime](https://wakatime.com/badge/user/{{HANDLE}}.svg)](https://wakatime.com/@{{HANDLE}})'),
  s('widget','Holopin board','[![Holopin](https://holopin.me/{{HANDLE}})](https://holopin.io/@{{HANDLE}})'),
  s('widget','GitHub Sponsors','[![Sponsor](https://img.shields.io/badge/Sponsor-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/{{HANDLE}})'),
  s('widget','Buy Me Coffee','[![BMC](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/{{HANDLE}})'),
  s('widget','Ko-Fi','[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/{{HANDLE}})'),
  s('widget','PayPal donate','[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/{{HANDLE}})'),
  s('widget','Custom badge maker','![Custom](https://img.shields.io/badge/LABEL-VALUE-COLOR?style=for-the-badge)'),
  s('widget','Build passing','![Build](https://img.shields.io/badge/build-passing-brightgreen)'),
  s('widget','License MIT','![License](https://img.shields.io/badge/License-MIT-yellow.svg)'),
  s('widget','PRs welcome','![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)'),
  s('widget','Open source love','![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)'),
  s('widget','Awesome badge','![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)'),
  s('widget','Version badge','![Version](https://img.shields.io/badge/version-1.0.0-blue)'),
  s('widget','Downloads badge','![Downloads](https://img.shields.io/badge/downloads-10k+-green)'),
  s('widget','Status active','![Status](https://img.shields.io/badge/status-active-success)'),
  s('widget','Maintained yes','![Maintained](https://img.shields.io/badge/Maintained-yes-green)'),
  s('widget','Made with love','![Love](https://img.shields.io/badge/Made_with-❤-red)'),
  s('widget','Made with JS','![JS](https://img.shields.io/badge/Made_with-JavaScript-F7DF1E?logo=javascript&logoColor=black)'),
  s('widget','Made with Python','![Python](https://img.shields.io/badge/Made_with-Python-3776AB?logo=python&logoColor=white)'),
  s('widget','Made with React','![React](https://img.shields.io/badge/Made_with-React-61DAFB?logo=react&logoColor=black)'),
  s('widget','Made with TypeScript','![TS](https://img.shields.io/badge/Made_with-TypeScript-3178C6?logo=typescript&logoColor=white)'),
];

// ---- READY-MADE BADGE COMBOS: 100 real shields.io badges for specific technologies ----
const techBadges: Snippet[] = [
  ...['Vite-646CFF-vite','Webpack-8DD6F9-webpack','Babel-F9DC3E-babel','ESLint-4B32C3-eslint','Prettier-F7B93E-prettier','npm-CB3837-npm','Yarn-2C8EBB-yarn','pnpm-F69220-pnpm','Bun-000000-bun','Deno-000000-deno','Electron-47848F-electron','Tauri-24C8DB-tauri','PWA-5A0FC8-pwa','WebAssembly-654FF0-webassembly','Three.js-000000-threedotjs','D3.js-F9A03C-d3dotjs','Chart.js-FF6384-chartdotjs','Socket.io-010101-socketdotio','Axios-5A29E4-axios','Zod-3E67B1-zod','tRPC-2596BE-trpc','Drizzle-C5F74F-drizzle','Sequelize-52B0E7-sequelize','Mongoose-880000-mongoose','Puppeteer-40B5A4-puppeteer','Playwright-2EAD33-playwright','Cypress-17202C-cypress','Jest-C21325-jest','Vitest-6E9F18-vitest','Mocha-8D6748-mocha','Storybook-FF4785-storybook','Chromatic-FC521F-chromatic','Sentry-362D59-sentry','Datadog-632CA6-datadog','New Relic-008C99-newrelic','Grafana-F46800-grafana','Prometheus-E6522C-prometheus','InfluxDB-22ADF6-influxdb','RabbitMQ-FF6600-rabbitmq','Apache Kafka-231F20-apachekafka','NATS-27AAE1-nats','gRPC-244C5A-grpc','GraphQL-E10098-graphql','Apollo-311C87-apollographql','Hasura-1EB4D4-hasura','Contentful-2478CC-contentful','Strapi-4945FF-strapi','Sanity-F03E2F-sanity','WordPress-21759B-wordpress','Ghost-15171A-ghost','Shopify-7AB55C-shopify','WooCommerce-96588A-woocommerce','Stripe-008CDD-stripe','PayPal-003087-paypal','Auth0-EB5424-auth0','Clerk-6C47FF-clerk','Supabase Auth-3FCF8E-supabase','NextAuth-000000-nextdotjs','Passport-34E27A-passport','JWT-000000-jsonwebtokens','OAuth-000000-oauth','Vercel-000000-vercel','Netlify-00C7B7-netlify','Railway-0B0D0E-railway','Render-46E3B7-render','Fly.io-24175B-flydotio','PlanetScale-000000-planetscale','Neon-00E59A-neon','CockroachDB-6933FF-cockroachlabs','TiDB-DD0031-tidb','ClickHouse-FFCC01-clickhouse','Snowflake-29B5E8-snowflake','BigQuery-669DF6-googlebigquery','Tableau-E97627-tableau','Power BI-F2C811-powerbi','Metabase-509EE3-metabase','Jupyter-F37626-jupyter','Colab-F9AB00-googlecolab','Hugging Face-FFD21E-huggingface','LangChain-000000-langchain','OpenAI-412991-openai','Anthropic-191919-anthropic','Ollama-000000-ollama','Pinecone-000000-pinecone','ChromaDB-000000-chroma','Weights & Biases-FFBE00-weightsandbiases','MLflow-0194E2-mlflow','Airflow-017CEE-apacheairflow','Spark-E25A1C-apachespark','Hadoop-66CCFF-apachehadoop','Celery-37814A-celery','Redis Queue-DC382D-redis','BullMQ-FF0000-bull','Temporal-000000-temporal','Argo CD-EF7B4D-argo','Helm-0F1689-helm','Istio-466BB0-istio','Envoy-AC6199-envoyproxy','NGINX-009639-nginx','Caddy-1F88C0-caddy','Traefik-24A1C1-traefikproxy','Apache-D22128-apache','HAProxy-336699-haproxy'].map(b => {
    const parts = b.split('-');
    const nm = parts[0]; const clr = parts[1]; const ico = parts[2];
    return s('tech', decodeURIComponent(nm), `![${decodeURIComponent(nm)}](https://img.shields.io/badge/${encodeURIComponent(nm)}-${clr}?style=for-the-badge&logo=${ico}&logoColor=white)`);
  }),
];

// ---- STAT VARIANTS: 80 themes × 5 card types = but we show as 80 unique theme previews ----
const themeSnippets: Snippet[] = [
  ...['default','dark','radical','merko','gruvbox','tokyonight','onedark','cobalt','synthwave','highcontrast','dracula','prussian','monokai','vue','vue-dark','shades-of-purple','nightowl','buefy','blue-green','algolia','great-gatsby','darcula','bear','solarized-dark','solarized-light','chartreuse-dark','nord','gotham','material-palenight','graywhite','vision-friendly-dark','ayu-mirage','calm','flag-india','omni','react','jolly','maroongold','yeblu','blueberry','slateorange','kacho_ga','outrun','ocean_dark','city_lights','github_dark','github','discord','aura_dark','panda','noctis_minimus','cobalt2','swift','aura','apprentice','moltack','codeSTACKr','rose_pine','catppuccin_latte','catppuccin_mocha','date_night','one_dark_pro','rose','holi','neon','blue_navy','calm_pink','ambient_gradient','react-dark','github_dark_dimmed','github_compact','transparent','shadow_red','shadow_green','shadow_blue','dark-violet','github_light','react-light','midnight-purple','light'].map(t =>
    s('theme', `Stats · ${t}`, `![Stats](https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=${t}&hide_border=true&show_icons=true)\n![Streak](https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=${t}&hide_border=true)\n![Langs](https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=${t}&hide_border=true)`)
  ),
];

// ---- PROFILE SECTION MARKDOWNS (24 real copyable sections) ----
const profileSections: Snippet[] = [
  s('section','Header','# 👋 Hi, I\'m {{NAME}}\n\n**{{ROLE}}** · building things on the internet.'),
  s('section','Typing SVG','<p align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&color=36BCF7&center=true&vCenter=true&width=800&lines={{ROLE}};Open+Source;AI+Enthusiast" /></p>'),
  s('section','About Me','## 🙋 About Me\n- 🔭 Currently working on **open source projects**\n- 🌱 Learning **AI, ML, and Cloud**\n- 💬 Ask me about **Web Development**\n- 📫 Reach me at **{{HANDLE}}@gmail.com**'),
  s('section','Social badges','## 🌐 Connect\n[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/{{HANDLE}})\n[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/{{HANDLE}})'),
  s('section','Skills grid','## 🛠 Skills\n<p>\n  <img src="https://skillicons.dev/icons?i=ts,react,next,node,python,docker,aws,postgres,redis,git" />\n</p>'),
  s('section','GitHub Stats','## 📊 Stats\n<p align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=tokyonight&hide_border=true&show_icons=true" />\n</p>'),
  s('section','Streak','## 🔥 Streak\n<p align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=tokyonight&hide_border=true" />\n</p>'),
  s('section','Top Languages','## 💻 Languages\n<p align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=tokyonight&hide_border=true" />\n</p>'),
  s('section','Pinned Repos','## 📌 Featured\n[![Repo](https://github-readme-stats.vercel.app/api/pin/?username={{HANDLE}}&repo=repo-name&theme=tokyonight)](https://github.com/{{HANDLE}}/repo-name)'),
  s('section','Activity Graph','## 📈 Activity\n<p align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true" />\n</p>'),
  s('section','Trophies','## 🏆 Trophies\n<p align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=tokyonight&no-frame=true&row=1&column=7" />\n</p>'),
  s('section','Dev Quote','## 💬 Quote\n<p align="center">\n  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" />\n</p>'),
  s('section','Dev Joke','## 😄 Joke\n<p align="center">\n  <img src="https://readme-jokes.vercel.app/api?theme=tokyonight" />\n</p>'),
  s('section','Snake Graph','## 🐍 Snake\n<p align="center">\n  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg" />\n</p>'),
  s('section','Wakatime','## ⏰ Wakatime\n<p align="center">\n  <img src="https://github-readme-stats.vercel.app/api/wakatime?username={{HANDLE}}&theme=tokyonight&hide_border=true&layout=compact" />\n</p>'),
  s('section','LeetCode','## 💡 LeetCode\n<p align="center">\n  <img src="https://leetcard.jacoblin.cool/{{HANDLE}}?theme=dark&font=Fira+Code&ext=heatmap" />\n</p>'),
  s('section','Blog Posts','## 📝 Blog\n<!-- BLOG-POST-LIST:START -->\n- [My Latest Post](https://dev.to/{{HANDLE}})\n<!-- BLOG-POST-LIST:END -->'),
  s('section','Projects','## 🚀 Projects\n| Project | Description | Tech |\n|---------|-------------|------|\n| **Project 1** | Description here | React, Node |\n| **Project 2** | Description here | Python, ML |'),
  s('section','Currently Learning','## 📚 Learning\n<p>\n  <img src="https://img.shields.io/badge/Learning-AI%20%26%20ML-FF6B6B?style=for-the-badge" />\n  <img src="https://img.shields.io/badge/Learning-Rust-000000?style=for-the-badge" />\n  <img src="https://img.shields.io/badge/Learning-Go-00ADD8?style=for-the-badge" />\n</p>'),
  s('section','Fun Facts','## 🎯 Fun Facts\n- ⚡ I love solving coding challenges\n- 🎮 I enjoy gaming in my free time\n- 📖 I read tech blogs daily\n- ☕ Coffee-powered developer'),
  s('section','Visitor Counter','<p align="center">\n  <img src="https://komarev.com/ghpvc/?username={{HANDLE}}&color=36BCF7&style=for-the-badge&label=Profile+Views" />\n</p>'),
  s('section','Support/Sponsor','## ☕ Support\n<p align="center">\n  <a href="https://buymeacoffee.com/{{HANDLE}}"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug={{HANDLE}}&button_colour=FFDD00&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=ffffff" /></a>\n</p>'),
  s('section','Contact','## 📫 Contact\n- **Email:** [{{HANDLE}}@gmail.com](mailto:{{HANDLE}}@gmail.com)\n- **LinkedIn:** [{{HANDLE}}](https://linkedin.com/in/{{HANDLE}})\n- **Portfolio:** [{{HANDLE}}.dev](https://{{HANDLE}}.dev)'),
  s('section','Footer','---\n<p align="center">\n  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" />\n</p>\n<p align="center">Made with ❤ by <a href="https://github.com/{{HANDLE}}">{{NAME}}</a></p>'),
];

// ---- COMBINE ALL ----
export const SNIPPETS: Snippet[] = [...headers, ...socials, ...skills, ...stats, ...footers, ...layout, ...iconRows, ...widgets, ...techBadges, ...themeSnippets, ...profileSections];

export const SNIPPET_CATEGORIES = ['header','social','skill','stat','footer','layout','icons','widget','tech','theme','section'];

export function fillSnippet(md: string, data: { name: string; role: string; handle: string }) {
  return md
    .replace(/\{\{NAME\}\}/g, data.name || 'Your Name')
    .replace(/\{\{ROLE\}\}/g, data.role || 'Developer')
    .replace(/\{\{HANDLE\}\}/g, data.handle || 'username');
}
