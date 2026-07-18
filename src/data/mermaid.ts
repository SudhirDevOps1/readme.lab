// Mermaid diagram templates. GitHub natively renders ```mermaid code blocks.
// Each has placeholders {{NAME}} {{ROLE}} {{HANDLE}} for personalization.
export type MermaidTemplate = {
  id: string;
  cat: string;
  name: string;
  code: string;
};

const m = (cat: string, name: string, code: string): MermaidTemplate => ({
  id: `${cat}-${name}`.replace(/\W+/g, '-').toLowerCase(), cat, name, code,
});

export const MERMAID_TEMPLATES: MermaidTemplate[] = [
  // ---- FLOWCHARTS ----
  m('flowchart', 'Skill Journey', `flowchart LR
    A[Started Coding] --> B[Learned Basics]
    B --> C{Chose Path}
    C -->|Frontend| D[React & UI]
    C -->|Backend| E[APIs & DB]
    C -->|Full-Stack| F[Both!]
    D --> G[Building Projects]
    E --> G
    F --> G
    G --> H[({{ROLE}})]`),
  m('flowchart', 'Dev Workflow', `flowchart TD
    A[Idea 💡] --> B[Plan 📝]
    B --> C[Code 💻]
    C --> D{Tests Pass?}
    D -->|No| C
    D -->|Yes| E[Review 👀]
    E --> F[Deploy 🚀]
    F --> G[Monitor 📊]
    G --> A`),
  m('flowchart', 'Learning Path', `flowchart LR
    HTML --> CSS --> JS
    JS --> React
    JS --> Node
    React --> Next[Next.js]
    Node --> API[REST APIs]
    Next --> FS[Full-Stack Dev]
    API --> FS`),
  m('flowchart', 'Problem Solving', `flowchart TD
    Start([Problem]) --> Understand[Understand it]
    Understand --> Break[Break it down]
    Break --> Solve[Solve pieces]
    Solve --> Test{Works?}
    Test -->|No| Debug[Debug 🐛]
    Debug --> Solve
    Test -->|Yes| Ship([Ship it! 🎉])`),
  m('flowchart', 'Tech Stack Map', `flowchart TB
    subgraph Frontend
    React --> Tailwind
    end
    subgraph Backend
    Node --> Express --> MongoDB
    end
    subgraph DevOps
    Docker --> AWS
    end
    Frontend --> Backend --> DevOps`),

  // ---- GITGRAPH ----
  m('gitgraph', 'Commit History', `gitGraph
    commit id: "init"
    commit id: "setup"
    branch feature
    checkout feature
    commit id: "add-ui"
    commit id: "add-logic"
    checkout main
    merge feature
    commit id: "release"`),
  m('gitgraph', 'Release Flow', `gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature/login
    commit
    commit
    checkout develop
    merge feature/login
    checkout main
    merge develop tag: "v1.0"`),

  // ---- PIE CHARTS ----
  m('pie', 'Languages Used', `pie showData
    title Languages I Use
    "JavaScript" : 35
    "TypeScript" : 25
    "Python" : 20
    "HTML/CSS" : 15
    "Other" : 5`),
  m('pie', 'Time Split', `pie showData
    title How I Spend My Day
    "Coding" : 40
    "Learning" : 25
    "Debugging" : 20
    "Coffee ☕" : 15`),
  m('pie', 'Project Types', `pie
    title Projects By Type
    "Web Apps" : 45
    "APIs" : 25
    "Tools/CLIs" : 20
    "Experiments" : 10`),

  // ---- MINDMAP ----
  m('mindmap', 'Skills Mindmap', `mindmap
  root(({{NAME}}))
    Frontend
      React
      Next.js
      Tailwind
    Backend
      Node.js
      Express
      MongoDB
    Tools
      Git
      Docker
      VS Code
    Learning
      AI/ML
      Cloud`),
  m('mindmap', 'About Me', `mindmap
  root(({{ROLE}}))
    Skills
      Problem Solving
      Clean Code
    Interests
      Open Source
      AI
      Gaming
    Goals
      Build Products
      Learn Daily`),

  // ---- SEQUENCE ----
  m('sequence', 'API Request', `sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant D as Database
    U->>F: Click button
    F->>B: API request
    B->>D: Query data
    D-->>B: Return rows
    B-->>F: JSON response
    F-->>U: Render UI`),
  m('sequence', 'Auth Flow', `sequenceDiagram
    participant U as User
    participant A as App
    participant S as Auth Server
    U->>A: Login
    A->>S: Verify credentials
    S-->>A: JWT token
    A-->>U: Logged in ✅`),

  // ---- CLASS ----
  m('class', 'Developer Class', `classDiagram
    class Developer {
      +String name
      +String role
      +List~String~ skills
      +code() void
      +learn() void
      +ship() Product
    }
    class Project {
      +String title
      +deploy() void
    }
    Developer --> Project : builds`),

  // ---- STATE ----
  m('state', 'Project Lifecycle', `stateDiagram-v2
    [*] --> Idea
    Idea --> Development
    Development --> Testing
    Testing --> Development : bugs found
    Testing --> Deployed
    Deployed --> Maintenance
    Maintenance --> [*]`),
  m('state', 'Dev Mode', `stateDiagram-v2
    [*] --> Coding
    Coding --> Debugging : error
    Debugging --> Coding : fixed
    Coding --> Coffee : tired
    Coffee --> Coding : recharged
    Coding --> Shipped : done
    Shipped --> [*]`),

  // ---- TIMELINE ----
  m('timeline', 'My Journey', `timeline
    title My Dev Journey
    2020 : Started coding
    2021 : First website
    2022 : Learned React
    2023 : Full-stack projects
    2024 : Open source
    2025 : {{ROLE}}`),
  m('timeline', 'Weekly Routine', `timeline
    title My Week
    Mon : Plan & code
    Wed : Build features
    Fri : Review & test
    Sun : Learn new tech`),

  // ---- ERD ----
  m('erd', 'Blog Schema', `erDiagram
    USER ||--o{ POST : writes
    POST ||--o{ COMMENT : has
    USER ||--o{ COMMENT : makes
    USER {
      int id
      string name
      string email
    }
    POST {
      int id
      string title
      text body
    }`),

  // ---- QUADRANT ----
  m('quadrant', 'Skill Matrix', `quadrantChart
    title Skills vs Interest
    x-axis Low Skill --> High Skill
    y-axis Low Interest --> High Interest
    quadrant-1 Master
    quadrant-2 Learn More
    quadrant-3 Skip
    quadrant-4 Maintain
    React: [0.9, 0.9]
    Python: [0.7, 0.8]
    Docker: [0.6, 0.5]
    Rust: [0.3, 0.9]`),

  // ---- JOURNEY ----
  m('journey', 'Coding Day', `journey
    title My Coding Day
    section Morning
      Coffee: 5: Me
      Standup: 3: Me
      Code: 5: Me
    section Afternoon
      Debug: 2: Me
      Lunch: 5: Me
      Build: 4: Me
    section Evening
      Review: 4: Me
      Learn: 5: Me`),

  // ---- MORE FLOWCHARTS ----
  m('flowchart', 'Contribution Flow', `flowchart LR
    Fork[Fork repo] --> Clone[Clone locally]
    Clone --> Branch[New branch]
    Branch --> Code[Make changes]
    Code --> Commit[Commit]
    Commit --> Push[Push]
    Push --> PR[Open PR]
    PR --> Merge{Approved?}
    Merge -->|Yes| Done[Merged! 🎉]
    Merge -->|No| Code`),
  m('flowchart', 'Career Path', `flowchart TD
    Jr[Junior Dev] --> Mid[Mid-level]
    Mid --> Sr[Senior]
    Sr --> Lead[Tech Lead]
    Sr --> Arch[Architect]
    Lead --> Mgr[Eng Manager]
    Arch --> Staff[Staff Engineer]`),
  m('flowchart', 'CI/CD Pipeline', `flowchart LR
    Push[git push] --> Lint[Lint]
    Lint --> Test[Test]
    Test --> Build[Build]
    Build --> Stage[Staging]
    Stage --> Approve{Approve?}
    Approve -->|Yes| Prod[Production 🚀]
    Approve -->|No| Fix[Fix issues]
    Fix --> Push`),
  m('flowchart', 'Data Flow', `flowchart LR
    Client -->|request| API
    API -->|query| Cache{In cache?}
    Cache -->|hit| API
    Cache -->|miss| DB[(Database)]
    DB --> API
    API -->|response| Client`),

  // ---- MORE PIE ----
  m('pie', 'Weekly Focus', `pie showData
    title Weekly Focus
    "Features" : 40
    "Bug Fixes" : 25
    "Refactor" : 15
    "Docs" : 10
    "Meetings" : 10`),
  m('pie', 'Editor Wars', `pie
    title My Editors
    "VS Code" : 60
    "Neovim" : 25
    "JetBrains" : 15`),

  // ---- MORE SEQUENCE ----
  m('sequence', 'CI Pipeline', `sequenceDiagram
    participant D as Developer
    participant G as GitHub
    participant C as CI
    participant P as Prod
    D->>G: git push
    G->>C: trigger build
    C->>C: run tests
    C-->>G: status ✅
    G->>P: deploy
    P-->>D: live! 🚀`),
  m('sequence', 'Git Workflow', `sequenceDiagram
    participant L as Local
    participant R as Remote
    L->>R: git push origin main
    R-->>L: rejected (behind)
    L->>R: git pull --rebase
    R-->>L: updated
    L->>R: git push
    R-->>L: success ✅`),

  // ---- MORE MINDMAP ----
  m('mindmap', 'Tech Roadmap 2026', `mindmap
  root((Roadmap 2026))
    Master
      TypeScript
      System Design
    Explore
      Rust
      WebAssembly
    Build
      SaaS Product
      Open Source Lib
    Grow
      Blogging
      Speaking`),

  // ---- MORE STATE ----
  m('state', 'PR Lifecycle', `stateDiagram-v2
    [*] --> Draft
    Draft --> Open
    Open --> Review
    Review --> Changes : requested
    Changes --> Review
    Review --> Approved
    Approved --> Merged
    Merged --> [*]`),

  // ---- MORE TIMELINE ----
  m('timeline', 'Tech Evolution', `timeline
    title My Tech Stack Over Time
    2021 : HTML : CSS : JS
    2022 : React : Node
    2023 : TypeScript : Next.js
    2024 : Docker : AWS
    2025 : AI : Rust`),

  // ---- MORE GITGRAPH ----
  m('gitgraph', 'Hotfix Flow', `gitGraph
    commit
    commit tag: "v1.0"
    branch hotfix
    checkout hotfix
    commit id: "fix-bug"
    checkout main
    merge hotfix tag: "v1.0.1"
    commit`),

  // ---- BLOCK ----
  m('flowchart', 'Microservices', `flowchart TB
    GW[API Gateway] --> Auth[Auth Service]
    GW --> User[User Service]
    GW --> Order[Order Service]
    User --> UDB[(User DB)]
    Order --> ODB[(Order DB)]
    Order --> Queue[Message Queue]
    Queue --> Email[Email Service]`),
];

export const MERMAID_CATEGORIES = ['flowchart', 'gitgraph', 'pie', 'mindmap', 'sequence', 'class', 'state', 'timeline', 'erd', 'quadrant', 'journey'];

export function fillMermaid(code: string, data: { name: string; role: string; handle: string }) {
  return code
    .replace(/\{\{NAME\}\}/g, data.name || 'Your Name')
    .replace(/\{\{ROLE\}\}/g, data.role || 'Developer')
    .replace(/\{\{HANDLE\}\}/g, data.handle || 'username');
}

// Wrap raw mermaid code in a markdown fenced block for README embedding.
export function mermaidToMarkdown(code: string): string {
  return '```mermaid\n' + code + '\n```';
}
