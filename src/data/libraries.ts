// ===== OPEN SOURCE LIBRARIES & TOOLS DATABASE (2026) =====
// Every library tells you: WHAT it is, WHY you need it, WHEN to use it, HOW to install.
// All open source. Grouped by language/ecosystem.

export type Library = {
  id: number;
  lang: string;
  cat: string;
  name: string;
  what: string;
  when: string;
  install: string;
  stars?: string;
};

export type LiveProject = {
  id: number;
  title: string;
  tech: string;
  stars: string;
  repo: string;
  learn: string;
};

// ============== LIBRARIES BY LANGUAGE ==============
export const LIBRARIES: Library[] = [
  // ── JavaScript / TypeScript ──
  { id: 1, lang: 'JavaScript', cat: 'Framework', name: 'React', what: 'UI library for building component-based interfaces', when: 'When building interactive web apps, SPAs, or design systems. Not for simple static pages.', install: 'npm create vite@latest my-app -- --template react', stars: '225k+' },
  { id: 2, lang: 'JavaScript', cat: 'Framework', name: 'Next.js', what: 'Full-stack React framework with SSR, routing, API routes', when: 'When you need SEO-heavy pages, server rendering, or a full backend+frontend in one project.', install: 'npx create-next-app@latest my-app', stars: '125k+' },
  { id: 3, lang: 'JavaScript', cat: 'State', name: 'Zustand', what: 'Tiny, hook-based global state manager', when: 'When Redux feels too heavy but Context keeps re-rendering. Great for apps needing simple global state.', install: 'npm i zustand', stars: '48k+' },
  { id: 4, lang: 'JavaScript', cat: 'State', name: 'TanStack Query', what: 'Server-state caching, fetching, and syncing library', when: 'When your app fetches API data that needs caching, refetching, optimistic updates. Replaces manual useEffect fetching.', install: 'npm i @tanstack/react-query', stars: '42k+' },
  { id: 5, lang: 'JavaScript', cat: 'Styling', name: 'Tailwind CSS', what: 'Utility-first CSS framework', when: 'When you want fast, consistent styling without writing custom CSS files. Not for teams who prefer semantic class names.', install: 'npm i tailwindcss @tailwindcss/vite', stars: '83k+' },
  { id: 6, lang: 'JavaScript', cat: 'Styling', name: 'shadcn/ui', what: 'Copy-paste component library built on Radix + Tailwind', when: 'When you need beautiful, accessible components fast without a heavy component library dependency.', install: 'npx shadcn@latest init', stars: '78k+' },
  { id: 7, lang: 'JavaScript', cat: 'Validation', name: 'Zod', what: 'TypeScript-first schema validation', when: 'When validating API responses, forms, or environment variables. Replaces manual typeof checks.', install: 'npm i zod', stars: '35k+' },
  { id: 8, lang: 'JavaScript', cat: 'Forms', name: 'React Hook Form', what: 'Performant form library with minimal re-renders', when: 'When building forms with many fields or validation. Pair with Zod for type-safe validation.', install: 'npm i react-hook-form', stars: '41k+' },
  { id: 9, lang: 'JavaScript', cat: 'Animation', name: 'Framer Motion', what: 'Declarative animation library for React', when: 'When you need smooth layout animations, drag gestures, or animatePresence transitions.', install: 'npm i framer-motion', stars: '25k+' },
  { id: 10, lang: 'JavaScript', cat: 'Charts', name: 'Recharts', what: 'Composable charting library built on React components', when: 'When you need data dashboards, line/bar/pie charts with tooltips and legends.', install: 'npm i recharts', stars: '23k+' },
  { id: 11, lang: 'JavaScript', cat: 'Table', name: 'TanStack Table', what: 'Headless table/datagrid logic', when: 'When building sortable, filterable, paginated data tables with custom styling.', install: 'npm i @tanstack/react-table', stars: '26k+' },
  { id: 12, lang: 'JavaScript', cat: 'Dates', name: 'date-fns', what: 'Modern date utility library (tree-shakeable)', when: 'When formatting, parsing, or comparing dates. Replaces the heavy moment.js.', install: 'npm i date-fns', stars: '35k+' },
  { id: 13, lang: 'JavaScript', cat: 'HTTP', name: 'Axios', what: 'Promise-based HTTP client for browser and Node', when: 'When you need interceptors, automatic JSON parsing, request cancellation. Or just use native fetch for simple cases.', install: 'npm i axios', stars: '105k+' },
  { id: 14, lang: 'JavaScript', cat: 'Icons', name: 'Lucide', what: 'Beautiful, consistent SVG icon library', when: 'When you need icons in React projects. Replaces Font Awesome with a lighter, modern set.', install: 'npm i lucide-react', stars: '12k+' },
  { id: 15, lang: 'JavaScript', cat: 'build', name: 'Vite', what: 'Next-gen frontend build tool with instant HMR', when: 'For every new frontend project. Uses esbuild for dev, Rollup for production.', install: 'npm create vite@latest', stars: '70k+' },
  { id: 16, lang: 'JavaScript', cat: 'Testing', name: 'Vitest', what: 'Vite-native test runner, Jest-compatible', when: 'When testing Vite projects. Faster and simpler than Jest for modern stacks.', install: 'npm i -D vitest', stars: '13k+' },
  { id: 17, lang: 'JavaScript', cat: 'ORM', name: 'Prisma', what: 'Type-safe database ORM with auto-generated client', when: 'When working with PostgreSQL/MySQL in TypeScript backends. Replaces raw SQL with typed queries.', install: 'npm i prisma @prisma/client', stars: '40k+' },
  { id: 18, lang: 'JavaScript', cat: 'Runtime', name: 'Bun', what: 'Ultra-fast JavaScript runtime, bundler, and package manager', when: 'When you want faster installs and a drop-in Node.js replacement for many projects.', install: 'curl -fsSL https://bun.sh/install | bash', stars: '75k+' },
  { id: 19, lang: 'JavaScript', cat: '3D', name: 'Three.js', what: 'WebGL 3D graphics library', when: 'When building 3D interactive scenes, games, or product viewers in the browser.', install: 'npm i three', stars: '103k+' },
  { id: 20, lang: 'JavaScript', cat: 'AI', name: 'LangChain.js', what: 'Framework for LLM applications and RAG pipelines', when: 'When building AI chatbots, document QA, or agent workflows in JS.', install: 'npm i langchain', stars: '95k+ (org)' },

  // ── Python ──
  { id: 21, lang: 'Python', cat: 'Web API', name: 'FastAPI', what: 'High-performance async web framework with auto docs', when: 'When building production APIs with type hints, OpenAPI docs, and async support. Replaces Flask for modern backends.', install: 'pip install fastapi uvicorn', stars: '78k+' },
  { id: 22, lang: 'Python', cat: 'Web', name: 'Django', what: 'Batteries-included full-stack web framework', when: 'When you need an admin panel, ORM, auth, and templates out of the box. Heavier but complete.', install: 'pip install django', stars: '81k+' },
  { id: 23, lang: 'Python', cat: 'Validation', name: 'Pydantic', what: 'Data validation using Python type annotations', when: 'When parsing and validating data models. Powers FastAPI and many modern Python projects.', install: 'pip install pydantic', stars: '22k+' },
  { id: 24, lang: 'Python', cat: 'ORM', name: 'SQLAlchemy', what: 'Comprehensive SQL toolkit and ORM', when: 'When you need flexible, enterprise-grade database ORM with complex queries.', install: 'pip install sqlalchemy', stars: '10k+' },
  { id: 25, lang: 'Python', cat: 'Testing', name: 'pytest', what: 'De facto Python testing framework', when: 'For every Python project. Fixtures, parametrization, plugins make testing pleasant.', install: 'pip install pytest', stars: '12k+' },
  { id: 26, lang: 'Python', cat: 'Data', name: 'Pandas', what: 'Data analysis and manipulation library', when: 'When working with tabular data, CSVs, or dataframes for analysis/cleaning.', install: 'pip install pandas', stars: '44k+' },
  { id: 27, lang: 'Python', cat: 'ML', name: 'scikit-learn', what: 'Machine learning library with consistent API', when: 'When doing classification, regression, or clustering without deep learning complexity.', install: 'pip install scikit-learn', stars: '60k+' },
  { id: 28, lang: 'Python', cat: 'AI', name: 'Transformers', what: 'Hugging Face library for pre-trained LLM models', when: 'When using BERT, GPT, or any pre-trained model for NLP tasks.', install: 'pip install transformers', stars: '135k+' },
  { id: 29, lang: 'Python', cat: 'Tasks', name: 'Celery', what: 'Distributed task queue for background jobs', when: 'When you need scheduled or long-running tasks outside request cycle.', install: 'pip install celery', stars: '25k+' },
  { id: 30, lang: 'Python', cat: 'CLI', name: 'Typer', what: 'Build CLIs with type hints, from FastAPI creator', when: 'When building command-line tools that deserve good --help and autocomplete.', install: 'pip install typer', stars: '16k+' },
  { id: 31, lang: 'Python', cat: 'HTTP', name: 'httpx', what: 'Async-capable HTTP client, requests replacement', when: 'When making API calls, especially async. Native async support.', install: 'pip install httpx', stars: '13k+ (org)' },
  { id: 32, lang: 'Python', cat: 'Env', name: 'python-dotenv', what: 'Load .env files into environment', when: 'When managing secrets in development. Never hardcode API keys.', install: 'pip install python-dotenv', stars: '7k+' },
  { id: 33, lang: 'Python', cat: 'Lint', name: 'Ruff', what: 'Extremely fast Python linter written in Rust', when: 'When you want instant linting+formatting. Replaces flake8, isort, and black combined.', install: 'pip install ruff', stars: '35k+' },
  { id: 34, lang: 'Python', cat: 'Data Sci', name: 'NumPy', what: 'Numerical computing with n-dimensional arrays', when: 'The foundation of scientific Python. Nearly every data library depends on it.', install: 'pip install numpy', stars: '28k+' },

  // ── Rust ──
  { id: 35, lang: 'Rust', cat: 'Async', name: 'Tokio', what: 'Async runtime for network applications', when: 'When building async services, web servers, or network programs in Rust.', install: 'tokio = { version = "1", features = ["full"] }', stars: '30k+' },
  { id: 36, lang: 'Rust', cat: 'Web', name: 'Axum', what: 'Ergonomic, modular web framework by the Tokio team', when: 'When building production HTTP services with great middleware support.', install: 'axum = "0.7"', stars: '18k+' },
  { id: 37, lang: 'Rust', cat: 'Serialization', name: 'Serde', what: 'Serialize/deserialize Rust data structures efficiently', when: 'For every Rust project handling JSON, YAML, TOML, or binary formats.', install: 'serde = { version = "1", features = ["derive"] }', stars: '9k+' },
  { id: 38, lang: 'Rust', cat: 'Database', name: 'SQLx', what: 'Async, pure-Rust SQL with compile-time checked queries', when: 'When you want raw, fast, type-safe SQL in async Rust apps.', install: 'sqlx = "0.8"', stars: '14k+' },
  { id: 39, lang: 'Rust', cat: 'CLI', name: 'Clap', what: 'Full-featured argument parser with derive macros', when: 'When building CLI tools with clean subcommands and auto help.', install: 'clap = { version = "4", features = ["derive"] }', stars: '18k+' },
  { id: 40, lang: 'Rust', cat: 'Errors', name: 'thiserror + anyhow', what: 'Ergonomic error handling libraries', when: 'when building library (thiserror) or application (anyhow) error handling.', install: 'thiserror = "2"\nanyhow = "1"', stars: '12k+ combined' },

  // ── Go ──
  { id: 41, lang: 'Go', cat: 'Web', name: 'Gin', what: 'Fast HTTP web framework, minimal and performant', when: 'When building REST APIs quickly with minimal ceremony.', install: 'go get -u github.com/gin-gonic/gin', stars: '80k+' },
  { id: 42, lang: 'Go', cat: 'Concurrency', name: 'Goroutines + Channels', what: 'Built-in lightweight concurrency primitives', when: 'When you need thousands of concurrent tasks cheaply. No library needed — it is the language.', install: 'built-in', stars: 'core' },
  { id: 43, lang: 'Go', cat: 'CLI', name: 'Cobra', what: 'CLI framework used by Kubernetes, Docker, Hugo', when: 'When building professional CLI tools with nested commands.', install: 'go get -u github.com/spf13/cobra/v2', stars: '38k+' },
  { id: 44, lang: 'Go', cat: 'Testing', name: 'Testify', what: 'Assertion toolkit: assert, require, mock, suite', when: 'When test boilerplate gets repetitive and you want better errors.', install: 'go get github.com/stretchr/testify', stars: '23k+' },

  // ── Java / Kotlin ──
  { id: 45, lang: 'Java', cat: 'Framework', name: 'Spring Boot', what: 'Enterprise-grade framework: DI, web, data, security', when: 'When building production Java backends with large teams or enterprise requirements.', install: 'start.spring.io (generate)', stars: '76k+' },
  { id: 46, lang: 'Kotlin', cat: 'Framework', name: 'Ktor', what: 'Asynchronous Kotlin-native framework from JetBrains', when: 'When you prefer Kotlin idioms and coroutines over Java Spring.', install: 'io.ktor dependencies', stars: '12k+' },
  { id: 47, lang: 'Java', cat: 'ORM', name: 'Hibernate/JPA', what: 'The standard Java ORM for relational databases', when: 'When working with enterprise Java apps. Part of Jakarta EE.', install: 'spring-boot-starter-data-jpa', stars: '6k+' },

  // ── C / C++ ──
  { id: 48, lang: 'C++', cat: 'Header-only', name: 'nlohmann/json', what: 'Modern JSON for modern C++', when: 'When reading/writing JSON in C++ with a friendly STL-like API.', install: '#include <nlohmann/json.hpp>', stars: '43k+' },
  { id: 49, lang: 'C++', cat: 'Build', name: 'CMake', what: 'Cross-platform build system generator', when: 'For nearly every C++ project. Replaces writing raw Makefiles.', install: 'cmake -B build && cmake --build build', stars: '8k+' },

  // ── DevOps / Infra ──
  { id: 50, lang: 'DevOps', cat: 'Containers', name: 'Docker', what: 'Containerize applications with images and compose', when: 'When you want "works on my machine" to mean "works everywhere." Essential for production deploys.', install: 'brew install docker / apt install docker.io', stars: 'runtime' },
  { id: 51, lang: 'DevOps', cat: 'Orchestration', name: 'Kubernetes', what: 'Container orchestration: scaling, healing, discovery', when: 'When running many containers across many machines. Use Docker alone for small projects.', install: 'kubectl + a cluster (kind/minikube locally)', stars: '111k+' },
  { id: 52, lang: 'DevOps', cat: 'IaC', name: 'Terraform', what: 'Infrastructure as Code: define cloud resources in HCL', when: 'When managing real cloud infrastructure. Blue-green friendly, version controlled.', install: 'brew install terraform', stars: '43k+' },
  { id: 53, lang: 'DevOps', cat: 'CI', name: 'GitHub Actions', what: 'CI/CD workflows directly in your repo', when: 'Free for every GitHub project: tests, builds, deploys on push or schedule.', install: '.github/workflows/ci.yml', stars: 'built-in' },
  { id: 54, lang: 'DevOps', cat: 'Monitoring', name: 'Prometheus + Grafana', what: 'Metrics collection + dashboards', when: 'When you need visibility into production: latency, errors, resource usage.', install: 'helm install prometheus grafana', stars: '56k+/ 65k+' },
  { id: 55, lang: 'DevOps', cat: 'Proxy', name: 'Caddy', what: 'Web server with automatic HTTPS, dead-simple config', when: 'When you want TLS without certbot ceremony. Caddyfile is 2 lines for most sites.', install: 'caddy run', stars: '59k+' },

  // ── Databases ──
  { id: 56, lang: 'Database', cat: 'Relational', name: 'PostgreSQL', what: 'Advanced open-source relational database with JSON support', when: 'Default choice for production apps needing ACID, complex queries, and reliability.', install: 'docker run -p 5432:5432 postgres', stars: '16k+' },
  { id: 57, lang: 'Database', cat: 'Cache', name: 'Redis', what: 'In-memory data structure store for caching/queues', when: 'When you need sub-ms caching, session stores, rate limiting, or pub/sub.', install: 'docker run -p 6379:6379 redis', stars: '67k+' },
  { id: 58, lang: 'Database', cat: 'Search', name: 'Meilisearch', what: 'Lightning-fast, typo-tolerant search engine', when: 'When adding site search without Elasticsearch complexity. Instant setup.', install: 'docker run -p 7700:7700 getmeili/meilisearch', stars: '47k+' },
  { id: 59, lang: 'Database', cat: 'Document', name: 'MongoDB', what: 'Document-oriented NoSQL database', when: 'When schemas are flexible and you iterate fast. Use Postgres if you need strict relations.', install: 'docker run -p 27017:27017 mongo', stars: '26k+' },
  { id: 60, lang: 'Database', cat: 'Time-series', name: 'TimescaleDB', what: 'PostgreSQL extension for time-series data', when: 'When storing metrics, IoT data, or analytics over time with SQL familiarity.', install: 'docker run timescale/timescaledb', stars: '18k+' },

  // ── AI / ML ──
  { id: 61, lang: 'AI', cat: 'LLM', name: 'Ollama', what: 'Run LLMs locally: Llama, Mistral, Qwen in one command', when: 'When you want private, offline AI inference without API costs.', install: 'curl -fsSL https://ollama.com/install.sh | sh', stars: '130k+' },
  { id: 62, lang: 'AI', cat: 'RAG', name: 'Qdrant', what: 'High-performance open-source vector database', when: 'When building semantic search or retrieval-augmented generation.', install: 'docker run -p 6333:6333 qdrant/qdrant', stars: '23k+' },
  { id: 63, lang: 'AI', cat: 'Training', name: 'PyTorch', what: 'Flexible deep learning framework', when: 'When training or fine-tuning neural networks. Research + production standard.', install: 'pip install torch', stars: '86k+' },
];

// ============== LIVE PROJECTS (real GitHub repos to study) ==============
export const LIVE_PROJECTS: LiveProject[] = [
  { id: 1, title: 'Supabase (Firebase alternative)', tech: 'TypeScript + Postgres', stars: '80k+', repo: 'https://github.com/supabase/supabase', learn: 'How a Postgres-backed BaaS is architected: auth, realtime, edge functions' },
  { id: 2, title: 'Cal.com (scheduling platform)', tech: 'Next.js + tRPC + Prisma', stars: '33k+', repo: 'https://github.com/calcom/cal.com', learn: 'Production Next.js monorepo, tRPC routers, scheduling logic' },
  { id: 3, title: 'Drizzle ORM', tech: 'TypeScript', stars: '26k+', repo: 'https://github.com/drizzle-team/drizzle-orm', learn: 'Type-safe ORM design — how typed SQL clients are generated' },
  { id: 4, title: 'shadcn/ui components', tech: 'React + Tailwind', stars: '78k+', repo: 'https://github.com/shadcn-ui/ui', learn: 'Accessible component patterns with Radix primitives' },
  { id: 5, title: 'Meilisearch engine', tech: 'Rust', stars: '47k+', repo: 'https://github.com/meilisearch/meilisearch', learn: 'How a search engine is built — indexing, ranking, tokio async' },
  { id: 6, title: 'Rocket chat (team chat)', tech: 'TypeScript + Meteor', stars: '40k+', repo: 'https://github.com/RocketChat/Rocket.Chat', learn: 'Realtime messaging, channels, DMs at scale' },
  { id: 7, title: 'Appwrite (backend as a service)', tech: 'PHP + Docker', stars: '45k+', repo: 'https://github.com/appwrite/appwrite', learn: 'Microservice-based BaaS: auth, DB, storage, functions' },
  { id: 8, title: 'Blender 3D (source)', tech: 'C / C++ / Python', stars: '13k+', repo: 'https://github.com/blender/blender', learn: 'How a giant production C++ project is organized' },
  { id: 9, title: 'PostHog (product analytics)', tech: 'Python + React', stars: '22k+', repo: 'https://github.com/PostHog/posthog', learn: 'Event pipelines, ingestion, ClickHouse, analytics queries' },
  { id: 10, title: 'Plane (Linear alternative)', tech: 'Next.js + Django', stars: '18k+', repo: 'https://github.com/makeplane/plane', learn: 'Issue tracking UX, boards, cycles, sprints' },
  { id: 11, title: 'Hoppscotch (API client)', tech: 'Vue + TypeScript', stars: '65k+', repo: 'https://github.com/hoppscotch/hoppscotch', learn: 'Interactive web APIs, Websocket testing, clean UI' },
  { id: 12, title: 'Strapi (headless CMS)', tech: 'Node.js + React', stars: '64k+', repo: 'https://github.com/strapi/strapi', learn: 'Plugin architecture, content APIs, role-based permissions' },
  { id: 13, title: 'Ghost (blogging platform)', tech: 'Node.js + Ember', stars: '48k+', repo: 'https://github.com/TryGhost/Ghost', learn: 'Publishing workflows, memberships, newsletters' },
  { id: 14, title: 'Documenso (DocuSign alternative)', tech: 'Next.js + Prisma', stars: '10k+', repo: 'https://github.com/documenso/documenso', learn: 'PDF signing flows, certificates, email workflows' },
  { id: 15, title: 'Uptime Kuma (monitoring)', tech: 'Vue + Node', stars: '61k+', repo: 'https://github.com/louislam/uptime-kuma', learn: 'Self-hosted status monitoring, websockets, notifications' },
  { id: 16, title: 'Excalidraw (whiteboard)', tech: 'React + Canvas', stars: '87k+', repo: 'https://github.com/excalidraw/excalidraw', learn: 'Canvas rendering, hand-drawn styles, real-time collaboration' },
  { id: 17, title: 'Immich (Google Photos alternative)', tech: 'TypeScript + Dart', stars: '50k+', repo: 'https://github.com/immich-app/immich', learn: 'Photo pipelines, object detection, offline first mobile' },
  { id: 18, title: 'Novu (notifications infra)', tech: 'TypeScript', stars: '35k+', repo: 'https://github.com/khulnasoft/novu', learn: 'Multi-channel notification routing, templates' },
  { id: 19, title: 'Zod (schema lib)', tech: 'TypeScript', stars: '35k+', repo: 'https://github.com/colinhacks/zod', learn: 'How type inference pipelines are built bottom-up' },
  { id: 20, title: 'Vite (build tool source)', tech: 'TypeScript + Rust', stars: '70k+', repo: 'https://github.com/vitejs/vite', learn: 'ESM dev servers, plugins, build architecture' },
  { id: 21, title: 'Continue (AI code assistant)', tech: 'TypeScript + Python', stars: '22k+', repo: 'https://github.com/continuedev/continue', learn: 'IDE extensions, LLM streaming, context windows' },
  { id: 22, title: 'Loco (Rust framework)', tech: 'Rust', stars: '7k+', repo: 'https://github.com/loco-tech/loco', learn: 'Rails-inspired Rust projects, jobs, tasks' },
  { id: 23, title: 'Chatwoot (support chat)', tech: 'Ruby + Vue', stars: '22k+', repo: 'https://github.com/chatwoot/chatwoot', learn: 'Live chat widgets, inboxes, agent routing' },
  { id: 24, title: 'Aperture AI photo editor', tech: 'C++ / GTK', stars: '4k+', repo: 'https://github.com/drawpile/Drawpile', learn: 'Canvas layers, brush engines, encoders' },
];

export const LIBRARY_LANGS = Array.from(new Set(LIBRARIES.map(l => l.lang)));
export const LIBRARY_CATS = Array.from(new Set(LIBRARIES.map(l => l.cat)));
