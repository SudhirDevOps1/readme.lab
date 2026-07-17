// 24 pre-made README markdown templates. Each has placeholders {{NAME}}, {{HANDLE}}, {{ROLE}}.
export type ReadmeTemplate = {
  id: string;
  name: string;
  persona: string;
  emoji: string;
  accent: string;
  md: string;
};

export const TEMPLATES: ReadmeTemplate[] = [
  {
    id: 'minimal',
    name: 'Minimal Clean',
    persona: 'general developer',
    emoji: '⚪',
    accent: 'slate',
    md: `# Hi, I'm {{NAME}} 👋

{{ROLE}} · building things on the internet.

- 🔭 Working on side-projects
- 🌱 Learning in public
- 💬 Ask me about web dev
- 📫 [@{{HANDLE}}](https://github.com/{{HANDLE}})

\`\`\`
{{ROLE}} · github.com/{{HANDLE}}
\`\`\`
`,
  },
  {
    id: 'student',
    name: 'BCA Student',
    persona: 'college student · learner',
    emoji: '🎓',
    accent: 'blue',
    md: `# 👨‍🎓 {{NAME}}

> BCA student · {{ROLE}} · aspiring developer

## 🙋 About
I'm a college student passionate about coding, problem-solving, and AI. I build practical web tools, study utilities, and small productivity projects.

## 🎯 Currently
- 🎓 Pursuing **BCA**
- 🌱 Learning **Python**, **JavaScript**, **Ethical Hacking**
- 🛠️ Working with **HTML**, **CSS**, **JS**, **TS**
- 🌐 Portfolio → https://{{HANDLE}}.github.io

##  Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=tokyonight&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=tokyonight&hide_border=true"/>
</p>

## 🛠 Skills
<p>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
</p>

## 🌐 Connect
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/{{HANDLE}})
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/{{HANDLE}})
`,
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Dev',
    persona: 'senior full-stack engineer',
    emoji: '🚀',
    accent: 'violet',
    md: `# {{NAME}} — Full-Stack Developer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&color=8B5CF6&center=true&vCenter=true&width=800&lines=Full-Stack+Developer;Open+Source+Contributor;Problem+Solver;Coffee+Powered"/>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{HANDLE}}&color=8B5CF6&style=for-the-badge"/>
</p>

## 🧠 About Me
- 🚀 {{ROLE}}
- 💡 Shipping products from idea to production
- 🌍 Available worldwide · remote-friendly
- 🎯 Focused on TypeScript, React, Node, Postgres

## 🛠 Tech Stack
**Frontend:** React · Next.js · TypeScript · Tailwind · Redux
**Backend:** Node · Express · NestJS · GraphQL · REST
**Database:** PostgreSQL · MongoDB · Redis · Prisma
**DevOps:** Docker · GitHub Actions · AWS · Vercel

<p>
  <img src="https://skillicons.dev/icons?i=ts,react,next,node,postgres,docker,aws,tailwind,graphql,redis"/>
</p>

## 📊 GitHub Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=radical&hide_border=true&show_icons=true&show=all_commits"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=radical&hide_border=true"/>
</p>

## 🏆 Trophies
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=radical&no-frame=true&row=1&column=7"/>
</p>

## 📈 Activity
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true"/>
</p>

## 🐍 Contribution Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>

## 📫 Get in Touch
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/{{HANDLE}})
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/{{HANDLE}})
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hello@{{HANDLE}}.dev)

---
<p align="center">Made with ❤ by <a href="https://github.com/{{HANDLE}}">{{NAME}}</a></p>
`,
  },
  {
    id: 'frontend',
    name: 'Frontend Engineer',
    persona: 'UI/UX focused frontend dev',
    emoji: '🎨',
    accent: 'pink',
    md: `# {{NAME}} · Frontend Engineer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=EC4899&center=true&vCenter=true&width=700&lines=Pixel+perfect+UIs;Accessible+by+default;Performance+obsessed"/>
</p>

> Crafting delightful user experiences with modern web tech.

## ✨ What I Do
- Design systems & component libraries
- Accessibility (a11y) and performance audits
- Motion design & micro-interactions
- Storybook-driven development

##  Toolkit
<p>
  <img src="https://skillicons.dev/icons?i=react,vue,svelte,ts,tailwind,figma,storybook,vite,css,html"/>
</p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=panda&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=panda&hide_border=true"/>
</p>

## 💬 Quote
<p align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"/>
</p>

## 🌐 Connect
[![Portfolio](https://img.shields.io/badge/Portfolio-EC4899?style=for-the-badge&logo=vercel&logoColor=white)](https://{{HANDLE}}.dev)
[![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)](https://dribbble.com/{{HANDLE}})
`,
  },
  {
    id: 'backend',
    name: 'Backend Engineer',
    persona: 'API & systems backend dev',
    emoji: '⚙',
    accent: 'emerald',
    md: `# {{NAME}} · Backend Engineer

\`\`\`bash
$ whoami
{{ROLE}} · distributed systems · API design
$ uptime
7+ years · 200k RPM in production
\`\`\`

## 🧰 Stack
- **Languages:** Go · Rust · TypeScript · Python
- **Frameworks:** FastAPI · Gin · Express · Actix
- **Data:** PostgreSQL · Redis · Kafka · Elastic
- **Infra:** Kubernetes · Terraform · AWS · GCP

<p><img src="https://skillicons.dev/icons?i=go,rust,ts,py,postgres,redis,kafka,docker,k8s,aws"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=gotham&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=gotham"/>
</p>

## 🔥 Streak
<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=gotham&hide_border=true"/>
</p>

## 📈 Activity
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true"/>
</p>
`,
  },
  {
    id: 'devops',
    name: 'DevOps Engineer',
    persona: 'SRE · DevOps · Cloud',
    emoji: '☁',
    accent: 'cyan',
    md: `# {{NAME}} · DevOps / SRE

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&color=06B6D4&center=true&vCenter=true&width=800&lines=Automate+everything;Ship+with+confidence;Observe+all+the+things"/>
</p>

## 🛠 Infra-as-Code & Cloud
<p><img src="https://skillicons.dev/icons?i=docker,k8s,aws,gcp,azure,terraform,ansible,githubactions,jenkins,grafana,prometheus,nginx,linux,bash"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=merko&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=merko&hide_border=true"/>
</p>

## 🏆 Trophies
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=onedark&no-frame=true&row=1&column=7"/>
</p>

## 🐍 Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>

> "If it hurts, do it more often." — continuous everything
`,
  },
  {
    id: 'datasci',
    name: 'Data Scientist',
    persona: 'ML · data · analytics',
    emoji: '📊',
    accent: 'amber',
    md: `# {{NAME}} · Data Scientist

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=F59E0B&center=true&vCenter=true&width=800&lines=Turning+data+into+insights;ML+in+production;Stats+nerd"/>
</p>

## 🧪 Stack
<p><img src="https://skillicons.dev/icons?i=python,r,pytorch,tensorflow,jupyter,pandas,numpy,sklearn,mysql,mongodb"/></p>

## 🔬 Current Focus
- LLM fine-tuning & RAG pipelines
- Time-series forecasting
- Causal inference

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=algolia&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=algolia"/>
</p>

## 📈 Activity
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true"/>
</p>

## 🧠 Quote of the Day
<p align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=algolia"/>
</p>
`,
  },
  {
    id: 'designer',
    name: 'Product Designer',
    persona: 'UX · product · brand',
    emoji: '🎨',
    accent: 'rose',
    md: `# {{NAME}} · Product Designer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Playfair+Display&size=32&color=F43F5E&center=true&vCenter=true&width=800&lines=Designing+with+empathy;Systems+thinking;Pixels+and+principles"/>
</p>

> Design is not just what it looks like. Design is how it works. — Steve Jobs

## 🧰 Tools
<p><img src="https://skillicons.dev/icons?i=figma,xd,photoshop,illustrator,aftereffects,blender,css,html,react"/></p>

## ✨ Philosophy
- User-first, always
- Accessible by default
- Motion with purpose
- Design systems > one-offs

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=rose_pine&hide_border=true&show_icons=true"/>
</p>

## 🌐 Find Me
[![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)](https://dribbble.com/{{HANDLE}})
[![Behance](https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://behance.net/{{HANDLE}})
`,
  },
  {
    id: 'mobile',
    name: 'Mobile Developer',
    persona: 'iOS · Android · RN',
    emoji: '📱',
    accent: 'indigo',
    md: `# {{NAME}} · Mobile Developer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=6366F1&center=true&vCenter=true&width=800&lines=iOS+%2B+Android;React+Native+and+Flutter;Native+performance"/>
</p>

## 📱 Stack
<p><img src="https://skillicons.dev/icons?i=swift,kotlin,flutter,react,firebase,figma,androidstudio,apple"/></p>

## 🚀 Shipped
- 12+ apps on App Store & Play Store
- 500k+ combined downloads
- 4.8★ average rating

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=vue&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=vue&hide_border=true"/>
</p>
`,
  },
  {
    id: 'ml',
    name: 'ML Engineer',
    persona: 'deep learning · AI research',
    emoji: '🧠',
    accent: 'purple',
    md: `# {{NAME}} · ML Engineer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=A78BFA&center=true&vCenter=true&width=800&lines=Deep+Learning;LLM+fine-tuning;Computer+Vision"/>
</p>

## 🤖 Stack
<p><img src="https://skillicons.dev/icons?i=pytorch,tensorflow,python,opencv,huggingface,aws,docker,linux"/></p>

## 📚 Research Interests
- Transformers & attention mechanisms
- Diffusion models for generation
- Reinforcement learning from human feedback

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=radical&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=radical"/>
</p>

## 🐍 Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>
`,
  },
  {
    id: 'security',
    name: 'Security Researcher',
    persona: 'pentester · cybersec',
    emoji: '🔐',
    accent: 'red',
    md: `# {{NAME}} · Security Researcher

\`\`\`
> sudo whoami
root · ethical hacker · {{ROLE}}
> cat /etc/shadow
[REDACTED]
\`\`\`

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=EF4444&center=true&vCenter=true&width=800&lines=Offensive+security;Bug+bounty+hunter;CTF+player"/>
</p>

## 🛡 Skills
<p><img src="https://skillicons.dev/icons?i=linux,python,bash,kali,docker,windows,aws"/></p>

## 🏴 CTF & Bug Bounty
- Top 500 on HackerOne
- Multiple CVE disclosures
- DEFCON CTF finalist

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=dark&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=dark&hide_border=true"/>
</p>

> "The quieter you become, the more you can hear." — Ram Dass
`,
  },
  {
    id: 'gamedev',
    name: 'Game Developer',
    persona: 'indie · Unity/Unreal',
    emoji: '🎮',
    accent: 'lime',
    md: `# {{NAME}} · Game Developer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&size=22&color=A3E635&center=true&vCenter=true&width=800&lines=Indie+Game+Dev;Unity+%2B+Unreal;Pixel+Art+Enthusiast"/>
</p>

## 🕹 Stack
<p><img src="https://skillicons.dev/icons?i=unity,unreal,cpp,cs,blender,photoshop,git"/></p>

## 🎮 Shipped Games
- **Pixel Quest** — 50k+ downloads on itch.io
- **Neon Drift** — featured on Steam
- **Tiny Kingdom** — GMTK Game Jam winner

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=synthwave&hide_border=true&show_icons=true"/>
</p>

## 🐍 Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>
`,
  },
  {
    id: 'blockchain',
    name: 'Blockchain Dev',
    persona: 'web3 · smart contracts',
    emoji: '⛓',
    accent: 'yellow',
    md: `# {{NAME}} · Blockchain Developer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=EAB308&center=true&vCenter=true&width=800&lines=Smart+Contracts;DeFi+Protocols;Web3+Infrastructure"/>
</p>

## ⛓ Stack
<p><img src="https://skillicons.dev/icons?i=solidity,rust,js,ts,node,docker,linux,aws"/></p>

## 🔗 Chains
Ethereum · Polygon · Arbitrum · Solana · Base · Optimism

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=nightowl&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=nightowl"/>
</p>

> Code is law. Audit often. Ship rarely. HODL always.
`,
  },
  {
    id: 'cloud',
    name: 'Cloud Architect',
    persona: 'AWS/Azure/GCP solutions',
    emoji: '☁',
    accent: 'sky',
    md: `# {{NAME}} · Cloud Solutions Architect

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=0EA5E9&center=true&vCenter=true&width=800&lines=Multi-cloud+architecture;Serverless+at+scale;FinOps+evangelist"/>
</p>

## ☁ Certifications
- AWS Solutions Architect Professional
- Azure Solutions Architect Expert
- Google Cloud Professional Architect
- Kubernetes (CKA, CKAD)

## 🛠 Stack
<p><img src="https://skillicons.dev/icons?i=aws,azure,gcp,terraform,k8s,docker,go,python,bash"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=blue-green&hide_border=true&show_icons=true"/>
</p>
`,
  },
  {
    id: 'oss',
    name: 'OSS Maintainer',
    persona: 'open source steward',
    emoji: '🌱',
    accent: 'green',
    md: `# {{NAME}} · Open Source Maintainer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=10B981&center=true&vCenter=true&width=800&lines=Building+in+the+open;Maintainer+of+10%2B+repos;Community+first"/>
</p>

## 🌟 Featured Projects
<p align="center">
  <a href="https://github.com/{{HANDLE}}/project-1"><img src="https://github-readme-stats.vercel.app/api/pin/?username={{HANDLE}}&repo=project-1&theme=vue&show_owner=true"/></a>
  <a href="https://github.com/{{HANDLE}}/project-2"><img src="https://github-readme-stats.vercel.app/api/pin/?username={{HANDLE}}&repo=project-2&theme=vue&show_owner=true"/></a>
</p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=vue&hide_border=true&show_icons=true&show=all_commits"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=vue"/>
</p>

## 🏆 Trophies
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={{HANDLE}}&theme=flat&no-frame=true&row=1&column=7"/>
</p>

##  Activity
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true"/>
</p>

## ☕ Support
<p align="center">
  <a href="https://github.com/sponsors/{{HANDLE}}"><img src="https://img.shields.io/badge/Sponsor-10B981?style=for-the-badge&logo=github&logoColor=white"/></a>
</p>
`,
  },
  {
    id: 'writer',
    name: 'Technical Writer',
    persona: 'docs · devrel',
    emoji: '✍',
    accent: 'orange',
    md: `# {{NAME}} · Technical Writer & DevRel

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Georgia&size=28&color=F97316&center=true&vCenter=true&width=800&lines=Docs+as+code;Clear+over+clever;Teaching+through+writing"/>
</p>

## ✍ Latest Articles
<!-- BLOG-POST-LIST:START -->
- [Building Better READMEs](https://{{HANDLE}}.dev/readme)
- [Markdown for Engineers](https://{{HANDLE}}.dev/md)
- [The Art of the Tutorial](https://{{HANDLE}}.dev/tutorial)
<!-- BLOG-POST-LIST:END -->

## 🛠 Toolkit
Markdown · MDX · Hugo · Astro · Notion · Figma · VSCode

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=calm&hide_border=true&show_icons=true"/>
</p>

## 🌐 Find my writing
[![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://hashnode.com/@{{HANDLE}})
[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/{{HANDLE}})
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@{{HANDLE}})
`,
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    persona: 'available for hire',
    emoji: '💼',
    accent: 'teal',
    md: `# {{NAME}} · Freelance Developer

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=14B8A6&center=true&vCenter=true&width=800&lines=Available+for+hire;Web+%2B+Mobile+Apps;Fast+turnaround"/>
</p>

> ✅ **Currently accepting new projects** · reply within 24h

##  Services
- Full-stack web apps (React, Next.js, Node)
- Mobile apps (React Native, Flutter)
- API design & integrations
- Performance audits & optimization

## 💰 Recent Work
| Project | Stack | Result |
|---------|-------|--------|
| E-commerce platform | Next + Stripe | +40% conversion |
| SaaS dashboard | React + D3 | 10k MAU |
| Booking system | Flutter + Firebase | 4.9★ rating |

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=buefy&hide_border=true&show_icons=true"/>
</p>

## 📫 Hire Me
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hire@{{HANDLE}}.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/{{HANDLE}})
[![Upwork](https://img.shields.io/badge/Upwork-6FDA44?style=for-the-badge&logo=upwork&logoColor=white)](https://upwork.com/freelancers/{{HANDLE}})
`,
  },
  {
    id: 'startup',
    name: 'Startup Founder',
    persona: 'founder · builder',
    emoji: '🚀',
    accent: 'red',
    md: `# {{NAME}} · Founder & CTO

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=EF4444&center=true&vCenter=true&width=800&lines=Building+in+public;0+to+1+obsessed;Ship+fast+learn+faster"/>
</p>

## 🏢 Current Venture
**StartupName** — solving [problem] for [audience].
→ https://startupname.com

## 📈 Traction
- 🚀 Launched: Q1 2025
- 👥 Users: 5,000+
- 💰 MRR: $10k+
- 🌍 Countries: 40+

## 🛠 What I Use
<p><img src="https://skillicons.dev/icons?i=react,next,ts,postgres,redis,docker,aws,vercel,stripe,posthog"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=outrun&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=outrun&hide_border=true"/>
</p>

## 🐍 Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>

> "Move fast and ship things." — me, probably
`,
  },
  {
    id: 'researcher',
    name: 'Researcher',
    persona: 'PhD · academic',
    emoji: '🔬',
    accent: 'violet',
    md: `# {{NAME}} · Researcher

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Georgia&size=28&color=8B5CF6&center=true&vCenter=true&width=800&lines=PhD+Candidate;Published+Author;Curious+Mind"/>
</p>

## 📚 Publications
1. **Title One** — *Conference 2025* · [PDF](#) · [Code](#)
2. **Title Two** — *Journal 2024* · [PDF](#) · [Code](#)
3. **Title Three** — *Workshop 2024* · [PDF](#) · [Code](#)

## 🔬 Research Areas
- Machine learning
- Human-computer interaction
- Computational social science

## 🛠 Tools
<p><img src="https://skillicons.dev/icons?i=python,r,latex,pytorch,jupyter,linux"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=dracula&hide_border=true&show_icons=true"/>
</p>

## 🌐 Academic Profiles
[Google Scholar](https://scholar.google.com/citations?user={{HANDLE}}) · [ORCID](https://orcid.org/{{HANDLE}}) · [arXiv](https://arxiv.org/a/{{HANDLE}})
`,
  },
  {
    id: 'educator',
    name: 'Educator',
    persona: 'teacher · mentor',
    emoji: '👨‍',
    accent: 'blue',
    md: `# {{NAME}} · Educator & Mentor

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Georgia&size=28&color=3B82F6&center=true&vCenter=true&width=800&lines=Teaching+code+since+2015;10%2C000%2B+students;YouTube+and+Courses"/>
</p>

## 🎓 Courses
- **Intro to JavaScript** — 50k students · 4.8★
- **React from Scratch** — 30k students · 4.9★
- **Python for Beginners** — 40k students · 4.7★

## 📺 YouTube
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@{{HANDLE}}) · 100k+ subscribers

## 🛠 Teach Stack
<p><img src="https://skillicons.dev/icons?i=js,ts,react,python,node,html,css,git,vscode"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=calm&hide_border=true&show_icons=true"/>
</p>

> "Tell me and I forget. Teach me and I remember. Involve me and I learn." — Benjamin Franklin
`,
  },
  {
    id: 'content',
    name: 'Content Creator',
    persona: 'YouTube · Twitch · blog',
    emoji: '🎥',
    accent: 'pink',
    md: `# {{NAME}} · Content Creator

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=EC4899&center=true&vCenter=true&width=800&lines=YouTuber;Live+Coder;Tech+Educator"/>
</p>

## 📺 Where to Find Me
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@{{HANDLE}})
[![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://twitch.tv/{{HANDLE}})
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/{{HANDLE}})
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/{{HANDLE}})

## 🎬 Latest Videos
- [Building X in 10 minutes](#)
- [Why I switched to Y](#)
- [Top 5 Z frameworks in 2026](#)

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=panda&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=panda&hide_border=true"/>
</p>
`,
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Hacker',
    persona: 'edgy · dark theme',
    emoji: '🌃',
    accent: 'fuchsia',
    md: `# > ./{{HANDLE}}.sh

\`\`\`
[SYSTEM] booting profile.exe...
[USER] {{NAME}}
[ROLE] {{ROLE}}
[STATUS] online · encrypted · anonymous
\`\`\`

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&color=FF00FF&center=true&vCenter=true&width=800&lines=01001000+01100001;Ghost+in+the+shell;Wake+up+samurai"/>
</p>

## 🕶 Skills
<p><img src="https://skillicons.dev/icons?i=linux,python,bash,cpp,rust,go,docker,k8s"/></p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=synthwave&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=synthwave&hide_border=true"/>
</p>

## 🐍 Snake
<p align="center">
  <img src="https://raw.githubusercontent.com/{{HANDLE}}/{{HANDLE}}/output/github-contribution-grid-snake.svg"/>
</p>

\`\`\`
[SYSTEM] connection terminated.
\`\`\`
`,
  },
  {
    id: 'retro',
    name: 'Retro Terminal',
    persona: 'hacker · green-on-black',
    emoji: '💾',
    accent: 'green',
    md: `\`\`\`
 _____  _______      ________  ___  ___
|_   _||_   _\ \    / /  _ \ \/ _ \/ __|
  | |    | |  \ \/\/ /| |_) | (_) \__ \
  |_|    |_|   \_/\_/ |____/ \___/|___/

$ whoami
{{NAME}}

$ cat role.txt
{{ROLE}}

$ ls skills/
html.css.js.ts.py.go.rs.cpp

$ uptime
online since 2020 · 1247 commits · 85 repos
\`\`\`

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=highcontrast&hide_border=true&show_icons=true"/>
</p>

<p align="center">
  <img src="https://readme-jokes.vercel.app/api?theme=monokai"/>
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{HANDLE}}&theme=highcontrast&hide_border=true"/>
</p>

\`\`\`
$ logout
Connection closed.
\`\`\`
`,
  },
  {
    id: 'modern',
    name: 'Modern Clean',
    persona: 'aesthetic · balanced',
    emoji: '✨',
    accent: 'slate',
    md: `# Hi, I'm {{NAME}} ✨

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Inter&size=26&color=64748B&center=true&vCenter=true&width=700&lines={{ROLE}};Building+thoughtful+software;Always+learning"/>
</p>

<p align="center">
  <a href="https://github.com/{{HANDLE}}"><img src="https://img.shields.io/badge/GitHub-{{HANDLE}}-181717?style=for-the-badge&logo=github"/></a>
  <a href="https://linkedin.com/in/{{HANDLE}}"><img src="https://img.shields.io/badge/LinkedIn-{{HANDLE}}-0A66C2?style=for-the-badge&logo=linkedin"/></a>
  <a href="mailto:hello@{{HANDLE}}.dev"><img src="https://img.shields.io/badge/Email-hello-10B981?style=for-the-badge&logo=gmail"/></a>
</p>

---

## 🌱 About
I'm a {{ROLE}} who enjoys building tools that make developers' lives easier. I believe in clean code, clear docs, and shipping often.

## 🛠 Currently Using
<p>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postgres-4169E1?style=flat-square&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>
</p>

## 📊 Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{HANDLE}}&theme=default&hide_border=true&show_icons=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{HANDLE}}&layout=compact&theme=default&hide_border=true"/>
</p>

## 📈 Activity
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{HANDLE}}&theme=react-dark&hide_border=true"/>
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{HANDLE}}&color=64748B&style=flat-square"/>
</p>
`,
  },
];

export function fillTemplate(md: string, data: { name: string; role: string; handle: string }) {
  return md
    .replace(/\{\{NAME\}\}/g, data.name || 'Your Name')
    .replace(/\{\{ROLE\}\}/g, data.role || 'Developer')
    .replace(/\{\{HANDLE\}\}/g, data.handle || 'username');
}
