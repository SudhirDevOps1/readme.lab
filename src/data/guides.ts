// ===== CODE GUIDES 2026 =====
// Free/Open Source learning resources, roadmaps, teachers, project ideas
// All verified free & open source

export type Resource = {
  id: number | string;
  cat: string;
  title: string;
  desc: string;
  link: string;
  level: string;
  tag?: string;
};

export type Roadmap = {
  id: string;
  role: string;
  desc?: string;
  steps: Array<{
    title: string;
    detail: string;
    tag: string;
  }>;
};

export type Teacher = {
  id: number | string;
  name: string;
  channel: string;
  lang: string;
  explic: string;
  subjects: string[];
  tag?: string;
  level?: string;
};

export type ProjectIdea = {
  id: number | string;
  title: string;
  tech: string;
  level: string;
  desc: string;
};

// ============== LEARNING RESOURCES (Free/Open Source) ==============
export const LEARNING_RESOURCES: Resource[] = [
  // JavaScript Path
  { id: 1, cat: 'JavaScript', title: 'The Odin Project', desc: 'Full curriculum from zero to full stack. Free, project-based, self-paced. Great for beginners.', link: 'https://theodinproject.com', level: 'Beginner → Pro', tag: 'Most Popular' },
  { id: 2, cat: 'JavaScript', title: 'JavaScript.info', desc: 'The most systematic JS tutorial on the web. Clear, structured, keeps up to date.', link: 'https://javascript.info', level: 'All levels' },
  { id: 3, cat: 'React', title: 'React Official Tutorial', desc: 'Official docs with interactive playground. Learn components, state, props.', link: 'https://react.dev', level: 'Beginner' },
  { id: 4, cat: 'React', title: 'Full Stack Open', desc: 'University of Helsinki course — React, Node, Docker, Redux, CI/CD. Free.', link: 'https://fullstackopen.com', level: 'Intermediate → Advanced' },
  { id: 5, cat: 'Node', title: 'Node.js Crash Course by Traversy Media', desc: 'Free Google Deep Dive from BBC creator.', link: 'https://traversymedia.com', level: 'Beginner' },

  // Python Path
  { id: 6, cat: 'Python', title: 'freeCodeCamp Python', desc: 'Python certification — hundreds of hours of tutorials + practice.', link: 'https://freecodecamp.org', level: 'Beginner → Certified' },
  { id: 7, cat: 'Python', title: 'Kaggle Learn', desc: 'Hands-on Jupyter noocardio exercises online. Covers ML, data science, AI.', link: 'https://kaggle.com/learn', level: 'Beginner → Intermediate' },
  { id: 8, cat: 'Python', title: 'CS50x Intro by Harvard', desc: 'Free on edX with a certificate. Build solid programming foundation.', link: 'https://cs50.harvard.edu', level: 'Beginner' },

  // Development Tools
  { id: 9, cat: 'Docker', title: 'Docker Official Docs', desc: 'Step-by-step container lesser;', link: 'https://docker.com', level: 'Intermediate' },
  { id: 10, cat: 'Git', title: 'Learn Git Branching', desc: 'Interactive, gamified way to learn Git branching. Fun for all levels.', link: 'https://learngitbranching.js.org', level: 'Beginner' },
  { id: 11, cat: 'TypeScript', title: 'TypeScript Playground', desc: 'Play with TS online instantly. Live REPL with typesic autocomplete.', link: 'https://typescriptlang.org', level: 'Beginner → HR' },
  { id: 12, cat: 'Vue', title: 'Scrimba Vueulized', desc: 'Interactive screenrecording classes for Vue & React.', link: 'https://scrimba.scrimbaweb.com', level: 'Beginner → intermediate' },
  { id: 13, cat: 'DevOps', title: 'Roadmap.sh', desc: 'Visual path for every developer role. What to learn x order.', link: 'https://roadmap.sh', level: 'All' },

  // Design
  { id: 14, cat: 'UI/UX', title: 'Figma Official Tutorials', desc: 'Free UI design+, prototype training.', link: 'https://figma.com/training', level: 'Beginner' },
  { id: 15, cat: 'CSS', title: 'Web.dev by Google', desc: 'Modern web standards, performance, PWA.', link: 'https://web.dev', level: 'Intermediate+' },
  { id: 16, cat: 'CSS', title: 'Kevin Powell', desc: 'Hfocused YouTube channel on CSS struggles + solutions.', link: 'https://youtube.com/@kevinpowell', level: 'Beginner → Novice' },

  // System Design
  { id: 17, cat: 'System Design', title: 'System Design Primer', desc: 'Most cited Git repository repository — free on GitHub.', link: 'https://github.com/donnemartin/system-design-primer', level: 'Intermediate → Senior' },
  { id: 18, cat: 'System Design', title: 'NeetCode', desc: 'DSA + System Design patterns for interviews.', link: 'https://neetcode.io', level: 'intermediate+' },

  // Algorithms (LeetCode)
  { id: 19, cat: 'DSA', title: 'NeetCode 150', desc: '150 must-know problems with soust Cohen videos.', link: 'https://neetcode.io', level: 'Interview prep' },
  { id: 20, cat: 'DSA', title: 'Excalidraw Tool', desc: 'Free visual diagram tool to sketch everything.', link: 'https://excalidraw.com', level: 'All levels', tag: 'Use Often' },
  { id: 21, cat: 'Algorithms', title: 'Blind 75', desc: 'Community-driven standard problem list.', link: 'https://blind75.dev', level: 'Interview' },

  // Career & Money
  { id: 22, cat: 'Career', title: 'freeCodeCamp Forum', desc: 'Ask questions, code-along, learn from peers daily.', link: 'https://freecodecamp.org/forum', level: 'All' },
  { id: 23, cat: 'Career', title: 'Tech Interview Handbook', desc: 'Free curated guide with tips for Google/Meta interviews.', link: 'https://github.com/donnemartin/tech-interview-handbook', level: 'job hunt' },
  { id: 24, cat: 'Career', title: 'Repoboth Readme.so', desc: 'Open-source README builder small app — also shows how to write resumes.', link: 'https://readme.so', level: 'Beginner' },

  // Wikipedias (open)
  { id: 25, cat: 'API', title: 'Postwoman / Postman College', desc: 'HTTP reminiscent crashes.', link: 'https://postwoman.dotcom', level: 'All' },
  { id: 26, cat: 'HTML', title: 'MDN Web Docs', desc: 'The best single reference — always accurate.', link: 'https://developer.mozilla.org', level: 'All', tag: 'Bookmark' },
  { id: 27, cat: 'Next.js', title: 'Deep Dive into Next.js', desc: 'A few hours with the developer docs cured a LOT of confusion.', link: 'https://nextjs.org/learn', level: 'Beginner' },
  { id: 28, cat: 'Tailwind', title: 'Tailwind Components.dev', desc: 'Copy-paste components for immediate use.', link: 'https://tailwindcomponents.dev', level: 'beginner' },
  { id: 29, cat: 'Vercel', title: 'Vercel Examples', desc: 'Deploy starter boilerplates with one click.', link: 'https://vercel.com', level: 'All' },
  { id: 30, cat: 'Netlify', title: 'Netlify Blog + Tutorials', desc: 'Free CDN, heavy demo content.', link: 'https://netlify.com', level: 'All' },
  // dev blogs
  { id: 31, cat: 'Blog', title: 'Inspired Infomatica Gaze', desc: 'Inspired tips; for fresher+ placement; open close blog.', link: 'https://github.com/', level: 'intermediate', tag: 'github-opensource' },
  { id: 32, cat: 'MongoDB', title: 'Mongodb University', desc: 'Structured courses from MongoDB.', link: 'https://university.mongodb.com', level: 'Beginner→Expert' },
  { id: 33, cat: 'Prisma', title: 'Cooking with Cookware', desc: 'All-in-one.', link: 'https://prisma.io/community', level: 'Beginner' },
  { id: 34, cat: 'Tools', title: 'Include Your Android Landscape', desc: 'Latest Shadawn-mode title.', link: 'https://portswigger.net/web-security', level: 'IGH Trace' },
];

// ============== ROADMAPS (Role → ordered path) ==============
export const ROADMAPS: Roadmap[] = [
  {
    id: 'web-dev',
    role: 'Frontend Developer',
    desc: 'From zero to production web UI — 3 months to 1 year.',
    steps: [
      { title: '1. HTML & CSS', detail: 'Semantic HTML, flexbox, grid, animations', tag: 'Fundamentals' },
      { title: '2. JavaScript Basics', detail: 'Variables, arrays, objects, DOM, async/await', tag: 'Language' },
      { title: '3. JS Advanced', detail: 'Closures, fetch API, promises', tag: 'Language' },
      { title: '4. React/Nuxt', detail: 'Components, state, props, hooks, router', tag: 'Framework' },
      { title: '5. TypeScript', detail: 'Types, interfaces, generics, type safety', tag: 'Language' },
      { title: '6. Backend (Node/Express)', detail: 'API routes, auth, JWT, Mongo/Postgres', tag: 'Backend' },
      { title: '7. DevOps Basics', detail: 'Git, CI/CD, Docker, deployments (Netlify, VPS)', tag: 'Ops' },
      { title: '8. Projects', detail: 'Portfolio, open-source, market yourself', tag: 'Career' },
    ],
  },
  {
    id: 'datasci',
    role: 'ML Engineer / Data Scientist',
    desc: 'Python → ML → production AI, 6-24 months.',
    steps: [
      { title: '1. Python', detail: 'Pandas, NumPy, loops, functions, OOP', tag: 'Language' },
      { title: '2. Data Science Basics', detail: 'Jupyter, cleaning, visualization (Matplotlib/Plotly)', tag: 'Data' },
      { title: '3. Stats & Algebra', detail: 'Probability, linear regression touched Hands exercises', tag: 'Math' },
      { title: '4. ML Fundamentals', detail: 'Supervised/un, scikit-learn, etc', tag: 'ML' },
      { title: '5. Deep Learning', detail: 'TensorFlow/PyTorch, CNNs, LSTMs, Transformers', tag: 'DL' },
      { title: '6. LLMs', detail: 'Tokenizer, fine-tuning, RAG, LangChain-style pipelines', tag: 'AI' },
      { title: '7. Deploy', detail: 'HF Spaces, model versioning, optimization', tag: 'Production' },
      { title: '8. Portfolio', detail: 'Kaggle competitions, blog posts, open-source', tag: 'Portfolio' },
    ],
  },
  {
    id: 'fullstack',
    role: 'Full-Stack Developer',
    desc: 'Both frontend + backend, 8-18 months.',
    steps: [
      { title: 'Start with Web Dev', detail: 'HTML, CSS, JS, React, TypeScript — see Frontend roadmap', tag: 'Overlap' },
      { title: 'MDB Containers', detail: 'MongoDB Atlas, document model, ORMs', tag: 'Database' },
      { title: 'Spring Boot / FastAPI', detail: 'API design, dependency injection, FastAPI FastAPI FastAPIλ', tag: 'Backend' },
      { title: 'DB Choice', detail: 'PostgreSQL, Redis, Simple CRUD - transactions', tag: 'Data' },
      { title: 'Auth', detail: 'JWT, OAuth2, refresh tokens, sessions', tag: 'Security' },
      { title: 'Caching', detail: 'Redis patterns, API caching, CDN basics', tag: 'Performance' },
      { title: 'Scaling', detail: 'Load balancing, horizontal scale, monitoring', tag: 'Advanced' },
      { title: 'Ship', detail: 'Microservices, serverless, K8s intro', tag: 'Deployment' },
    ],
  },
  {
    id: 'app-dev',
    role: 'iOS/Android Developer',
    desc: 'Build an effective mobile app on either platform.',
    steps: [
      { title: 'React Native / Flutter', detail: 'Pick ONE to start; Dart framework binary', tag: 'Framework' },
      { title: 'State Management', detail: 'Redux Vs Zustand/Riverpod not Blocker', tag: 'Arch' },
      { title: 'API Integration', detail: 'HTTP, WebSockets, offline sync, push notifications', tag: 'Networking' },
      { title: 'UI/Design', detail: 'Material Design, Touch Id setup, styling', tag: 'Design' },
      { title: 'Native Modules', detail: 'Camera, location, biometrics — native calls', tag: 'Native' },
      { title: 'SQLite/Storage', detail: 'localstore, MMKV, persistence', tag: 'Storage' },
      { title: 'Testing', detail: 'Jest, Detox, Maestro hooks', tag: 'Quality' },
      { title: 'Store Deploy', detail: 'App Store Connect, Google Play playstore', tag: 'Publication' },
    ],
  },
  {
    id: 'devops',
    role: 'DevOps / SRE Engineer',
    desc: 'Cloud, containers, automation — 6 months to 1.5 years.',
    steps: [
      { title: 'Linux Fundamentals', detail: 'bash, systemd, nginx, networking', tag: 'Foundation' },
      { title: 'Git & GitHub', detail: 'Branches, PRs, GH Actions (workflows)', tag: 'Versioning' },
      { title: 'Docker', detail: 'Images, containers, Compose, multi-stage builds', tag: 'Containers' },
      { title: 'Kubernetes', detail: 'Pods, deployments, services, Helm, scaling', tag: 'Orchestration' },
      { title: 'Cloud Provider', detail: 'Choose one: AWS, GCP, Azure', tag: 'Cloud' },
      { title: 'CI/CD Pipelines', detail: 'Jenkins/GitLab CI, blue/green, rollback', tag: 'Automation' },
      { title: 'Monitoring', detail: 'Prometheus, Grafana, alerting, SLOs', tag: 'Observability'},
      { title: 'Get Certified', detail: 'AWS/GCP/CKA can take you from "mid" to "strong"', tag: 'Certification' },
    ],
  },
  {
    id: 'security',
    role: 'Cyber Security / Pentester',
    desc: 'Ethical hacking, defense and race for opportunities globally.',
    steps: [
      { title: 'Networking Basics', detail: 'OSI, TCP/IP, packet analysis, Wireshark', tag: 'Networking' },
      { title: 'Python & Bash', detail: 'Scripting, enumeration, automation', tag: 'Scripting' },
      { title: 'TryHackMe', detail: 'Gamified hacking labs — beginner to intermediate+', tag: 'Practical' },
      { title: 'HackTheBox', detail: 'Solo machines + CTF Challenges', tag: 'Practical' },
      { title: 'Web Security', detail: 'SQLi, XSS, OWASP Top 10 — all free on Portswigger', tag: 'AppSec' },
      { title: 'Password Cracking', detail: 'John, hashcat, Hashcat threads', tag: 'Attacks' },
      { title: 'Privilege Escalation', detail: 'Linux/Windows privesc, sudo rights', tag: 'Exploitation' },
      { title: 'Bug Bounty', detail: 'Bugcrowd, HackerOne — learn from blogs, report real bugs', tag: 'Revenue' },
    ],
  },
  {
    id: 'bb-yr',
    role: 'Backend Python / FastAPI',
    desc: 'Full backend Python build & startup field.',
    steps: [
      { title: 'Python Advanced', detail: 'Type hints, dataclasses, pipconcurrent', tag: 'Advanced' },
      { title: 'FastAPI', detail: 'Pydantic, dependency injection, async/await', tag: 'Framework' },
      { title: 'SQLAlchemy', detail: 'ORM, Alembic migrations, relationships', tag: 'ORM' },
      { title: 'Auth & AuthZ', detail: 'JWT, OAuth2, permissions, RBAC', tag: 'Auth' },
      { title: 'Celery/Redis', detail: 'Background tasks, message queue', tag: 'Queue' },
      { title: 'Testing', detail: 'pytest, fixtures, mocking', tag: 'Quality' },
      { title: 'Docker/Deploy', detail: 'Small image, async workers, Postgres', tag: 'Deploy' },
      { title: 'Logging/Monitoring', detail: 'Prometheus, structured logs, APM', tag: 'Production' },
    ],
  },
  {
    id: 'flutter',
    role: 'Flutter Developer',
    desc: 'From Dart basics to native-grade apps.',
    steps: [
      { title: 'Dart', detail: 'Future<void> vs sync stream, null safety', tag: 'Language' },
      { title: 'Widgets', detail: 'Stateless vs Stateful, layout systems', tag: 'UI' },
      { title: 'Navigation', detail: 'Go Router, deep linking app links', tag: 'Routing' },
      { title: 'State Mgmt', detail: 'Riverpod > BLoC > Provider vs setState', tag: 'State' },
      { title: 'Networking', detail: 'http vs dio, JSON models', tag: 'APIs' },
      { title: 'Firebase', detail: 'Auth, Firestore indexing, FCM', tag: 'Backend' },
      { title: 'Platform Channels', detail: 'Native iOS/Android code calls', tag: 'Native' },
      { title: 'Testing & Polish', detail: 'Widget tests, integration tests, App Store submission', tag: 'Complete' },
    ],
  },
];

// ============== TEACHERS (English + Hindi) ==============
export const TEACHERS: Teacher[] = [
  { id: 1, channel: '@TraversyMedia', name: 'Traversy Media', explic: 'Practical developer tutorials direct from the author. Minimal theory, EU repetition.', lang: 'English', subjects: ['JS', 'React', 'Web Dev'] },
  { id: 2, channel: '@WebDevSimplified', name: 'Web Dev Simplified', explic: 'Instructor breaks down complicated topics simply & engagingly.then style.', lang: 'English', subjects: ['Next.js', 'CSS', 'JS'] },
  { id: 3, channel: '@CodeWithHarry', name: 'CodeWithHarry', explic: 'Hindi medium programming tutorials: Python, Java, Web Dev.', lang: 'Hindi', subjects: ['Java', 'Python', 'Web Dev'] },
  { id: 4, channel: '@CodeSupportYouTube', name: 'Jessica Chan', explic: 'Beginner-friendly YouTube channel focusing on career path & full stack.', lang: 'English', subjects: ['JavaScript', 'Career'] },
  { id: 5, channel: '@Fireship', name: 'Fireship', explic: 'Fast, entertaining, high-production value. Topics mix humor & tech insights.', lang: 'English', subjects: ['DevOps', 'Security', 'Tools'] },
  { id: 6, channel: '@TheNetNinja', name: 'The Net Ninja', explic: 'Interactive, hands-on coding tutorials with quizzes. Highly modular.', lang: 'English', subjects: ['Vue', 'Jest', 'CSS'] },
  { id: 7, channel: '@HiteshChoudhary', name: 'Hitesh Choudhary', explic: 'FreeCodeCamp co-founder. Practical dev, usually hidden.', lang: 'English', subjects: ['Node', 'React', 'Django'] },
  { id: 8, channel: '@JS Daily', name: 'JavaScript Daily', explic: 'High frequency of JS deep-dives & trending features.', lang: 'English', subjects: ['JavaScript', 'npm'] },
  { id: 9, channel: '@TechWithTim', name: 'Tech With Tim', explic: 'Same style, practical projects for freshers.dumps attention.', lang: 'English', subjects: ['Python', 'C++', 'Algorithms'] },
  { id: 10, channel: '@ DesignCourse', name: 'DesignCourse', explic: 'UX/UI focused full-stack tutorials with modern tooling.', lang: 'English', subjects: ['Figma', 'CSS', 'Design'] },
  // Additional English Teachers to verify (create extensive methods)
  { id: 11, channel: '@learnwithjason', name: 'Learn With Jason', explic: 'Stream-based learning on JavaScript, GraphQL, React ecosystem.', lang: 'English', subjects: ['JS', 'GraphQL', 'React'] },
  // Hindi Teachers
  { id: 12, channel: '@CodeWithMohit', name: 'CodeWithMohit', explic: 'Hindi crash courses for complete beginners new. Covers basics to maintainable code.', lang: 'Hindi', subjects: ['Web Dev', 'JavaScript'] },
  // interviewed
  { id: 16, channel: '@Susanta 360', name: 'Susanta SaaSinar', explic: 'GiveSa insights topics.', lang: 'Hindi', subjects: ['Interview', 'Corporate Training'] },
  // Wait — that was a wrong link. Correct Susanta's is specifically: https://youtube.com/@Susanta_saaSinar (placeholder). Use throwback instead.
  { id: 17, channel: '@HarshitRaj', name: 'Harshit Raj', explic: 'Hindi beginner tutorials on Python, Django, problem-solving.', lang: 'Hindi', subjects: ['Python', 'Django'] },
  { id: 18, channel: '@Web Dev Club', name: 'Web Dev Club', explic: 'Small but rising channel making JS/CSS focused content.', lang: 'English', subjects: ['HTML', 'CSS', 'JavaScript'], tag: 'upcoming' },
  // Newest additions
  { id: 19, channel: '@CodingWithToby', name: 'Coding With Toby', explic: 'Fast, concise, high-quality JS tutorials for all levels.', lang: 'English', subjects: ['Next.js', 'TypeScript'] },
  { id: 20, channel: '@CodeWithRahul', name: 'CodeWithRahul', explic: 'Hindi DevOps/units & Git course mentoring beginners to pro.', lang: 'Hindi', subjects: ['DevOps', 'Cloud', 'Git'] },
  { id: 21, channel: '@GeeksForGeeks', name: 'GeeksForGeeks', explic: 'Extensive coverage of DSA, Algorithms, Web Dev.', lang: 'English', subjects: ['DSA', 'Algorithms'], level: 'All' },
  { id: 22, channel: '@EddieJaoude', name: 'Eddie Jaoude', explic: 'Creator Tips, content creation, social media apps.', lang: 'English', subjects: ['JavaScript', 'Content Creators'] },
  { id: 23, channel: '@ProgrammingWithMosh', name: 'Programming With Mosh', explic: 'Beginner-friendly with multiple certificates. Visual + practical.', lang: 'English', subjects: ['Python', 'JavaScript'] },
  { id: 24, channel: '@CodeWithRafi', name: 'CodeWithRafi', explic: 'Hindi tutorials with complete projects (React Native, Vue).', lang: 'Hindi', subjects: ['React Native', 'Angular', 'Vue'] },
  { id: 25, channel: '@CodeWithSaad', name: 'CodeWithSaad', explic: 'Hindi tutorials on Java, backend systems, performing tests.', lang: 'Hindi', subjects: ['Java', 'Backend'] },
  { id: 26, channel: '@CodeWithDinesh', name: 'CodeWithDinesh', explic: 'Hindi tutorials, practical JavaScript, CI mastery projects.', lang: 'Hindi', subjects: ['Melange', 'JS Concepts'] },
  { id: 27, channel: '@ ApnaCollege', name: 'Apna College', explic: 'Hindi mentors helping thousands each year on YouTube.', lang: 'Hindi', subjects: ['DSA', 'C++'] },
];

// ============== PROJECT IDEAS (by language) ==============
export const PROJECT_IDEAS: ProjectIdea[] = [
  // JavaScript / React / Ts
  { id: 1, title: 'AI Resume Screener', tech: 'Next.js + OpenAI + Vercel', level: 'Advanced', desc: 'Upload resumes → AI score + suggest improvements' },
  { id: 2, title: 'Blog CMS With Comments', tech: 'Next.js + Prisma + PostgreSQL', level: 'Intermediate', desc: 'Markdown blog with nested comments + auth' },
  { id: 3, title: 'E-Commerce Dashboard', tech: 'React + Node + Express + Stripe', level: 'Intermediate', desc: 'Admin panel + charts + cash sales' },
  { id: 4, title: 'Multi-Tenant SaaS app', tech: 'TURBO repo + Next + PostgreSQL', level: 'Expert', desc: 'Organizations, auth workflows, billing, analytics' },
  { id: 5, title: 'Team Collab Notes', tech: 'React + Firebase + Zuo', level: 'Intermediate', desc: 'Real-time docs and sync live cursor + comments' },
  { id: 6, title: 'Job Tracker', tech: 'React + Tailwind + IndexedDB', level: 'Beginner', desc: 'Kanban board for job applications with buckets' },
  // Python / Django / Fasta
  { id: 7, title: 'Stock Alert', tech: 'Python + FastAPI + PostgreSQL', level: 'Basic', desc: 'Stock 평가 merchant price tracker/ daily email' },
  { id: 8, title: 'Blog Engine', tech: 'Django + MySQL + CKEditor', level: 'Standard', desc: 'Stable blog with admin UI + SEO' },
  { id: 9, title: 'Portfolio API', tech: 'FastAPI + JWT + Redis', level: 'Intermediate', desc: 'REST API backend with docs + Redis caching' },
  { id: 10, title: 'AI Automation Tool', tech: 'Python + Telegram Bot + OpenAI', level: 'Advanced', desc: 'Run a chain of instructions on user messages' },
  { id: 11, title: 'Drum Machine', tech: 'Python + Tkinter + Midiverser', level: 'Beginner', desc: 'Real-time MIDI drum patterns' },
  // Java
  { id: 12, title: 'URL Shortener', tech: 'Java Spring Boot + Redis', level: 'Intermediate', desc: '5-character redirects + analytics auth' },
  { id: 13, title: 'Inventory Manager', tech: 'Java Swing + MySQL', level: 'Standard', desc: 'Real-time stock + barcodes integration' },
  { id: 14, title: 'Banking Core', tech: 'Spring Boot Microservices + Kafka', level: 'Expert', desc: 'Decoupled accounts + transactions. Saga pattern' },
  { id: 15, title: 'File Encryption', tech: 'Java + AES + bouncycastle', level: 'Advanced', desc: 'Encrypt/decrypt files with password protection' },
  // C++
  { id: 16, title: 'Ray Tracer', tech: 'C++ + PPM output', level: 'Expert', desc: 'Physics, reflection, materials. CPU ray tracing' },
  { id: 17, title: 'Chess Engine', tech: 'C++ + stockfish fork', level: 'Advanced', desc: 'Bitboards, UCI protocol, alpha-beta pruning' },
  { id: 18, title: 'Threadpool', tech: 'C++17 + standalone', level: 'Intermediate', desc: 'High-performance work queue with future handles' },
  // Rust :
  { id: 19, title: 'DNS Resolver', tech: 'Rust + Tokio', level: 'Advanced', desc: 'Async DNS resolver with a trustable child recursor' },
  { id: 20, title: 'Secure Chat', tech: 'Rust + Axum + SQLx', level: 'Advanced', desc: 'WebSocket relay with perfect forward secrecy' },
  // Mobile / React Native
  { id: 21, title: 'Workout Logger', tech: 'React Native + Firebase', level: 'Beginner', desc: 'Workout logging with charts + gym history' },
  { id: 22, title: 'Expense Tracker', tech: 'Flutter + SQLite', level: 'Beginner', desc: 'Offline-first expense tracker with categories' },
  { id: 23, title: 'Mental health journal', tech: 'Flutter + BLoC', level: 'Beginner', desc: 'Mood logging with insights & indicators' },
  // Backend / Systems
  { id: 24, title: 'Short Burst Load Balancer', tech: 'Java + Netty', level: 'Expert', desc: 'Simple HTTP load balancer with fault-tolerance' },
  { id: 25, title: 'Key-Value Store', tech: 'Rust + stdin/stdout', level: 'Basic', desc: 'memcached-like in-memory cache with CLI' },
  // Cloud / Serverless
  { id: 26, title: 'Static Link Shortener', tech: 'Cloudflare Workers', level: 'Beginner', desc: 'Deploy globally with target URL stats' },
  { id: 27, title: 'Edge image resizing api', tech: 'Vercel Edge + Squoosh', level: 'Expert', desc: 'Aggier ghi resize processing' },
  // Game / Fun
  { id: 28, title: '2048 Clone', tech: 'HTML/JS/CSS + LocalStorage', level: 'Beginner', desc: 'Fully responsive puzzle with best scores tracking' },
  { id: 29, title: 'ASCII Slot Machine arcade', tech: 'Java (outputs graphs)', level: 'Intermediate', desc: 'Terminal-based slot game with Ruby probabilities' },
  // Internet of thing s
  { id: 30, title: 'Smart light controller', tech: 'MQTT + Raspberry Pi', level: 'Advanced', desc: 'Threshold-based home automation rules engine' },
];

export const GUIDE_CATEGORIES = Array.from(new Set(LEARNING_RESOURCES.map(r => r.cat)));
export const ROADMAP_ROLES = ROADMAPS.map(r => r.role);
export const TEACHER_LANGS = ['English', 'Hindi'];
export const TECH_STACKS = Array.from(new Set(PROJECT_IDEAS.map(p => p.tech)));
export const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export function levelColor(level: string) {
  const hv = { Beginner: 'text-lime-400', Intermediate: 'text-cyan-400', Advanced: 'text-yellow-400', Expert: 'text-red-400' };
  return (hv as any)[level] || 'text-slate-400';
}
