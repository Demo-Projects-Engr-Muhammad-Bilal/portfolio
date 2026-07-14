import type { PortfolioData } from "./types";

export const portfolioData = {
          hero: {
                    greeting: "Hello 👋",
                    name: "Bilal",
                    role: "Software Engineer",
                    description: "Specializing in building high-performance web applications with Next.js, React, and Node.js. Turning complex problems into elegant digital solutions with a focus on 'Quiet Luxury' design.",
                    yearsExperience: 10,
          },
          skills: [
                    { id: 1, title: "Frontend Development", desc: "Crafting beautiful, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.", icon: "terminal" },
                    { id: 2, title: "Backend Architecture", desc: "Designing scalable server-side logic and robust databases with ASP.NET Core, Node.js, and PostgreSQL.", icon: "database" },
                    { id: 3, title: "Full-Stack Solutions", desc: "End-to-end development ensuring seamless integration between client-side and server-side systems.", icon: "deployed_code" }
          ],
          experience: [
                    {
                              id: "1",
                              role: "Software Engineering Student",
                              company: "Bahria University",
                              period: "Present",
                              description: "Focusing on core software engineering principles, HCI, and advanced full-stack development methodologies.",
                    },
                    {
                              id: "2",
                              role: "Full-Stack Developer",
                              company: "Freelance",
                              period: "2024 - Present",
                              description: "Developing custom AI workflows, SaaS platforms, and enterprise solutions for local and international clients.",
                    }
          ],
          about: {
                    hero: {
                              title: "About Me",
                              description: "I am a full-stack developer obsessed with building high-performance, accessible, and beautiful web experiences. With a background in design and engineering, I bridge the gap between complex logic and intuitive user interfaces.",
                              image: "/profile.png"
                    },
                    stats: [
                              { number: "50+", label: "Projects Completed" },
                              { number: "8+", label: "Years Experience" },
                              { number: "15+", label: "Technologies" },
                              { number: "100%", label: "Client Satisfaction" }
                    ],
                    techStack: [
                              { name: "Next.js", icon: "/icons/nextjs.svg" },
                              { name: "React", icon: "/icons/react.svg" },
                              { name: "TypeScript", icon: "/icons/typescript.svg" },
                              { name: "Node.js", icon: "/icons/nodejs.svg" },
                              { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
                              { name: "Prisma", icon: "/icons/prisma.svg" },
                              { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
                              { name: "Git", icon: "/icons/git.svg" }
                    ],
                    values: [
                              { iconName: "brain", title: "Problem Solver", desc: "I view every bug as a puzzle waiting to be solved with elegant, efficient code structures." },
                              { iconName: "sparkles", title: "Clean Code Advocate", desc: "Code is for humans first. I prioritize readability and maintainability in every commit I make." },
                              { iconName: "zap", title: "Fast Learner", desc: "The tech landscape moves fast. I stay ahead by constantly exploring new frameworks and tools." }
                    ]
          },
          contactPage: {
                    hero: {
                              title: "Get in",
                              highlight: "Touch",
                              description: "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or partnerships for your next big thing."
                    },
                    info: {
                              email: "muhammadbilal41266@gmail.com",
                              location: "Karachi, Pakistan",
                              status: "Available for Freelance",
                              responseTime: "Typically respond within 24 hours."
                    },
                    marqueeText: "Let's talk • Collaborate • Innovative design • Clean code • Problem solving •"
          },
          projectsPage: {
                    hero: {
                              title: "My",
                              highlight: "Projects",
                              description: "A collection of my recent work, side projects, and open-source contributions. Each piece is crafted with technical precision and user-centric design."
                    },
                    cta: {
                              title: "Have a Project Idea? Let's",
                              highlight: "Discuss",
                              features: ["Expert Consultation", "Rapid Prototyping"]
                    },
                    categories: ["All", "Full-Stack", "Frontend", "Backend", "Mobile"]
          },
          blogPage: {
                    categories: ["All", "Tutorials", "Debugging", "Tech Notes", "Career"]
          },
          projects: [
           {
  id: "reelmind",
  title: "ReelMind",
  description: "AI-powered SaaS platform that converts a single text prompt into a fully composed, captioned short-form video reel — end-to-end automated across a 4-service microservices architecture.",
  imageUrl: "https://res.cloudinary.com/b7s4tc12/image/upload/v1784031378/frnt_pipyct.jpg",
  techStack: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "Socket.IO", "FFmpeg", "TensorFlow.js", "Prisma", "Stripe", "Turborepo"],
  category: "Full-Stack",
  liveUrl: "https://reel-mind.netlify.app",
  githubUrl: "https://github.com/Demo-Projects-Engr-Muhammad-Bilal/reelmind",
  overview: "ReelMind was built to eliminate the manual effort behind short-form video content creation. A user submits a single topic, and the system autonomously generates viral hooks, selects the best one using a TensorFlow.js ML scoring model, writes a full 5-scene script, produces AI-generated images and voiceovers per scene, normalizes all audio to exact clip durations, animates images into video clips, and composes a final captioned reel using FFmpeg — all without a single manual step. The platform is built as a Turborepo-managed monorepo with 4 independently deployable microservices, a pay-as-you-go credit system powered by Stripe, real-time pipeline updates via Socket.IO, and a fully featured internal admin panel for platform governance.",
  role: "Sole Full Stack Developer",
  duration: "4 Months (2026)",
  status: "Live",
  videos: [
    { id: "v1", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783709253/day2_d8gotg.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713982/day2-thumbnail_dmybnk.png", title: "Monorepo Architecture — 4 Services, 1 Product" },
    { id: "v2", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783709284/day3_yn5duh.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713982/day3-thumbnail_j3emkw.jpg", title: "Hook Generation + ML Scoring" },
    { id: "v3", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710637/day4_qvt3iv.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713985/day4-thumbnail_mi5mfk.png", title: "5-Scene Script Generation" },
    { id: "v4", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710601/day5_m549td.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713985/day5-thumbnail_ll8gom.png", title: "Per-Scene Image + Audio Generation" },
    { id: "v5", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710577/day6_x6vmh9.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713983/day6-thumbnail_qksqds.jpg", title: "Audio Normalization + Image-to-Video" },
    { id: "v6", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710611/day7_ulbozz.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713982/day7-thumbnail_ezlzhr.jpg", title: "FFmpeg Final Composition" },
    { id: "v7", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710642/day8_rpp0vj.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713984/day9-thumbnail_mcuydz.jpg", title: "BullMQ Background Job Processing" },
    { id: "v8", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713259/day9_wzxrjv.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713984/day9-thumbnail_mcuydz.jpg", title: "Socket.IO Real-time Pipeline Updates" },
    { id: "v9", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713308/day10_lkwrue.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713988/day10-thumbnail_jipovk.png", title: "Credit & Billing System — Stripe" },
    { id: "v10", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713275/day11_aasnxq.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713996/day11-thumbnail_nkmspc.png", title: "Live Demo Part 1 — Prompt to Hook" },
    { id: "v11", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713311/day12_zwe0hq.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713989/day12-thumbnail_ehsmoo.jpg", title: "Live Demo Part 2 — Script to Assets" },
    { id: "v12", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713292/day13_fowsrq.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713988/day13-thumbnail_ytvgxc.jpg", title: "Live Demo Part 3 — Video to Final Reel" },
    { id: "v13", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713813/day14_ohfbfg.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713991/day14-thumbnail_gcpcic.png", title: "Client Pipeline — Full Recap" },
    { id: "v14", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713294/day15_itw8do.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713998/day15-thumbnail_olejk2.png", title: "Admin Panel — Secure Login & Overview" },
    { id: "v15", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713270/day16_weoj7h.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783714004/day16-thumbnail_pgi0re.png", title: "Admin — Niche Management" },
    { id: "v16", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713239/day17_ocg9xg.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713994/day17-thumbnail_flmvvo.png", title: "Admin — AI Pricing & Credit Packages" },
    { id: "v17", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783712752/day18_rgb03h.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783714002/day18-thumbnail_qip5fe.png", title: "Admin — Dashboard Overview & Audit Logs" },
    { id: "v18", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713258/day19_jum8zw.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783714001/day19-thumbnail_z4gpcj.png", title: "Admin — User Directory & System Config" },
    { id: "v19", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783713847/day20_kbdt3r.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713999/day20-thumbnail_qtxau5.png", title: "Admin Panel — Full Walkthrough Recap" },
  ],
  challenge: {
    text: "Short-form video content creation is time-consuming, repetitive, and requires multiple specialized tools — script writing, voiceover recording, visual sourcing, video editing, and caption generation. No single platform automated the entire pipeline end-to-end with intelligent content selection. The core engineering challenge was building a production-grade AI orchestration system that could coordinate multiple external AI providers, process heavy FFmpeg workloads asynchronously, handle provider failures gracefully, and deliver real-time progress to the user — all while maintaining a reliable, transactional billing system.",
    points: [
      "Coordinating 4 independent AI providers (Gemini, Veo, ElevenLabs, Google TTS) with graceful fallback chains — if a primary provider fails, the pipeline continues without breaking.",
      "Running CPU-intensive FFmpeg composition on a serverless-adjacent deployment (Render free tier) without hitting memory limits or timeout crashes mid-generation.",
      "Building a credit system with true ACID guarantees — every charge must be atomic across credit deduction, usage logging, and reel cost tracking.",
      "Delivering real-time pipeline stage updates to the client without polling — persistent WebSocket rooms per reel via Socket.IO."
    ],
    image: "https://res.cloudinary.com/b7s4tc12/image/upload/v1784031137/WhatsApp_Image_2026-07-14_at_5.11.54_PM_hqxibk.jpg"
  },
  approach: [
    {
      step: "01",
      title: "Architecture Design",
      desc: "Designed a Turborepo-managed monorepo separating the platform into 4 independently deployable services — Client App, Auth Service, AI Generation Engine, and Admin Panel — each scaling on its own infrastructure."
    },
    {
      step: "02",
      title: "AI Pipeline Engineering",
      desc: "Built an 8-stage generation pipeline: Prompt → Hook Generation (Gemini) → ML Scoring (TensorFlow.js) → Script Generation → Per-Scene Asset Generation → Audio Normalization → Image-to-Video → FFmpeg Composition + Caption Burn-in."
    },
    {
      step: "03",
      title: "Async Job Architecture",
      desc: "Implemented BullMQ with Redis for all generation work — API returns 202 immediately, background worker processes the full pipeline with 3 auto-retries, exponential backoff, and user cancellation support at every stage."
    },
    {
      step: "04",
      title: "Real-time Communication",
      desc: "Each reel generation gets a dedicated Socket.IO room. The background worker emits step_update events per stage — client receives live progress updates with zero polling and a persistent WebSocket connection."
    },
    {
      step: "05",
      title: "Billing & Credit System",
      desc: "Built pay-as-you-go credit system using Stripe Checkout with server-side webhook verification. Every credit deduction runs inside prisma.$transaction() — ACID-guaranteed atomic operations across credit balance, usage log, and reel cost tracker."
    },
    {
      step: "06",
      title: "Admin Panel",
      desc: "Built a completely separate Next.js admin application with 2FA login, real-time KPI dashboard, full niche AI behavior configuration, dynamic provider pricing, credit package management, reels observer, user directory, and forensic audit logs."
    },
    {
      step: "07",
      title: "Resilience & Fallbacks",
      desc: "Every AI provider has a primary and fallback chain. Image generation falls back from Gemini → Imagen → niche-specific static fallback → global default. Audio falls back from ElevenLabs → Google TTS. Pipeline never halts on provider failure."
    },
    {
      step: "08",
      title: "Deployment & Infrastructure",
      desc: "Client, Auth Service, and Admin Panel deployed on Netlify. AI Engine containerized with Docker (multi-stage build, FFmpeg baked in) and deployed on Render. Shared Prisma + MongoDB schema across all services via Turborepo packages."
    }
  ],
  features: [
    {
      icon: "psychology",
      title: "ML-Powered Hook Selection",
      desc: "TensorFlow.js scoring model evaluates and ranks every AI-generated hook by engagement potential — the highest-scoring hook is automatically selected before script generation begins."
    },
    {
      icon: "movie_creation",
      title: "End-to-End AI Pipeline",
      desc: "8-stage fully automated pipeline — from a single text prompt to a finished, captioned video reel — orchestrating Gemini, Veo, ElevenLabs, Google TTS, and FFmpeg without manual intervention."
    },
    {
      icon: "bolt",
      title: "Async Job Processing",
      desc: "BullMQ + Redis background queue handles all generation work asynchronously. API returns instantly, worker processes with auto-retry and exponential backoff, user can cancel at any point."
    },
    {
      icon: "sensors",
      title: "Real-time Pipeline Monitor",
      desc: "Socket.IO persistent WebSocket connection streams live stage updates to the client dashboard — no polling, each reel gets an isolated room, multiple concurrent users never interfere."
    },
    {
      icon: "account_balance_wallet",
      title: "Pay-as-you-go Billing",
      desc: "Stripe-powered credit system with ACID transactions, server-side webhook verification, dynamic per-provider pricing configurable from admin panel, and forensic per-stage usage audit logs."
    },
    {
      icon: "admin_panel_settings",
      title: "Full Admin Governance",
      desc: "Separate 2FA-protected admin panel for managing niches, AI behavior configuration, dynamic pricing, credit packages, user accounts, platform analytics, and complete usage audit trail."
    }
  ],
  results: [
    { value: "20", label: "Build-in-Public Videos" },
    { value: "4", label: "Microservices" },
    { value: "8", label: "Pipeline Stages" }
  ],
  resultsDesc: "ReelMind demonstrates a complete production-grade AI SaaS architecture — built solo from architecture design to live deployment across 4 independent services.",
  nextProjectId: "markethub",
  upcomingUpdate: {
    title: "v2.0 — Multi-tenant SaaS",
    description: "Planned: organization accounts, user-created niches, auto-publish to TikTok/Instagram/YouTube, A/B hook testing with real audience data, and mobile app via React Native."
  },
  architecture: [
    {
      title: "System Context Diagram — Level 0",
      description: "High-level view of the AI Video Factory Ecosystem. The AI Reel Factory Service acts as a central black box receiving inputs from the User Client Frontend, coordinating with MongoDB for data persistence, Redis for job queue management, External AI APIs (Vertex/ElevenLabs) for generative assets, and Cloudinary Vault for final media storage and delivery. System environment variables inject credit thresholds and API constraints at startup.",
      image: "https://res.cloudinary.com/b7s4tc12/image/upload/v1784031224/System-Context-Diagram-_High-Level-Level-0_d1vy8p.png",
      points: [
        "User Client Frontend sends topic, nicheKey, userId, and videoType — receives Success Notification and final videoUrl.",
        "MongoDB Cluster Database Store persists user accounts, financial ledger, reel state mapping, and auth data.",
        "Redis Server Queue Store coordinates job tasks, concurrency metrics, and queue state persistence.",
        "External AI APIs Vector (Vertex AI / ElevenLabs) receives prompts and script payloads — returns generative image and audio streams.",
        "Cloudinary Vault Cloud Storage receives final rendered assets — provides CDN delivery URLs and storage metadata."
      ]
    },
    {
      title: "System Architecture — High Level Technical View",
      description: "Detailed technical architecture showing the full request lifecycle from Client Interface through the API Gateway Layer (Express.js) to the Background Compute Node. Incoming requests hit the Main API Listener, route through nicheRoutes and generateRoutes, pass through the Pre-flight Credit Guard for security and validation, then enter the BullMQ/Redis Distributed Task Queue. The generationWorker Background Compute Node hosts a Modular Managers Matrix — AudioManager, ImageManager, VideoManager, and ComposerManager — all interfacing with the Billing Ledger Service and Cloudinary Media Vault, with final state persisted to Prisma/MongoDB.",
      image: "https://res.cloudinary.com/b7s4tc12/image/upload/v1784031224/System-Architecture-_High-Level-Technical-view_wo4x2u.png",
      points: [
        "Pre-flight Credit Guard validates user credit balance before any job is accepted — rejects with 402 Payment Required if insufficient.",
        "BullMQ/Redis Distributed Task Queue decouples the API from processing — API returns 202 immediately, worker picks up the job asynchronously.",
        "Modular Managers Matrix (AudioManager, ImageManager, VideoManager, ComposerManager) operate independently within the generationWorker — each handles its own provider orchestration and fallback logic.",
        "Billing Ledger Service processes micro-transactions per stage inside ACID-guaranteed prisma.$transaction() blocks — every deduction is atomic.",
        "Cloudinary Media Vault stores all intermediate and final media assets — final videoUrl is written back to MongoDB Reel Table on completion."
      ]
    },
    {
      title: "Data Flow Diagram — Level 1",
      description: "Process-level data flow showing how a generation request moves through 4 core processes. Process 1.0 (Validate & Ingest Request) reads user credits from Prisma User DB, checks balance, and pushes job data (reelId, userId) to the Redis BullMQ Shard. Process 2.0 (AI Asset Synthesis) receives the system prompt, calls External AI Services (Vertex/ElevenLabs), and produces audio.mp3 and image.png assets with transaction forensic logs. Process 3.0 (FFmpeg Composition & Rendering) receives AI assets and metadata and produces FINAL.mp4 bytes. Process 4.0 (Finalization & State Closure) uploads video bytes to Cloudinary Vault, updates MongoDB Reel Table status to COMPLETED, and returns the videoUrl to the client.",
      image: "https://res.cloudinary.com/b7s4tc12/image/upload/v1784031222/Data-Flow_Diagram-DFD-_Level-1_ev7ztn.png",
      points: [
        "Process 1.0 rejects requests with 402 Payment Required if credit balance is insufficient before any AI call is made.",
        "Process 2.0 logs transaction forensic data (cost/usage) to the MongoDB Ledger after each AI asset is generated — per-stage billing granularity.",
        "Process 3.0 FFmpeg Composition receives both AI assets and metadata to compose the final video — audio normalization, caption burn-in, and scene merging happen here.",
        "Process 4.0 writes the final videoUrl back to the MongoDB Reel Table and pushes a Success Notification to the User Client — closing the generation loop."
      ]
    }
  ]
}
          ],
          blog: {
                    featuredPost: {
                              id: "mastering-nextjs-server-components", // Yahan ID add kar di gayi hai
                              title: "Mastering Next.js Server Components",
                              desc: "Dive deep into the architecture of React Server Components. Learn how to optimize your application's performance, reduce client-side bundle sizes, and create seamless user experiences with the latest Next.js paradigms.",
                              category: "Tutorial",
                              author: "Alex River",
                              date: "Oct 28, 2023",
                              readTime: "12 min read",
                              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
                              authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop"
                    },
                    posts: [
                              {
                                        id: "1",
                                        title: "Reducing Bundle Size by 40%",
                                        desc: "A deep dive into how I audited our enterprise application's build process and optimized dynamic imports to significantly boost load times.",
                                        category: "Debugging",
                                        author: "Alex",
                                        date: "Oct 24, 2023",
                                        images: [
                                                  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442"
                                        ]
                              },
                              {
                                        id: "2",
                                        title: "The Future of WebAssembly",
                                        desc: "Exploring how Wasm is moving beyond the browser and revolutionizing server-side execution and heavy-computation microservices.",
                                        category: "React",
                                        author: "Alex",
                                        date: "Oct 18, 2023",
                                        images: [
                                                  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442"
                                        ]
                              },
                              {
                                        id: "3",
                                        title: "Soft Skills for Senior Devs",
                                        desc: "Why technical prowess is only half the battle. Learning to lead projects through effective communication and stakeholder management.",
                                        category: "Career",
                                        author: "Alex",
                                        date: "Oct 12, 2023",
                                        images: [
                                                  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442"
                                        ]
                              },
                              {
                                        id: "4",
                                        title: "Reducing Bundle Size by 40%",
                                        desc: "A deep dive into how I audited our enterprise application's build process and optimized dynamic imports to significantly boost load times.",
                                        category: "Debugging",
                                        author: "Alex",
                                        date: "Oct 24, 2023",
                                        images: [
                                                  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470",
                                                  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442"
                                        ]
                              },
                              {
                                        id: "5",
                                        title: "The Future of WebAssembly",
                                        desc: "Exploring how Wasm is moving beyond the browser and revolutionizing server-side execution and heavy-computation microservices.",
                                        category: "React",
                                        author: "Alex",
                                        date: "Oct 18, 2023",
                                        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop"
                              },
                    ]
          },
          blogDetail: {
                    id: "mastering-nextjs-server-components", // Yeh id blog.featuredPost ki id se 100% match karti hai
                    title: "Mastering Next.js Server Components",
                    category: "Tutorial",
                    author: "Alex River",
                    authorRole: "Lead Developer",
                    date: "Oct 28, 2023",
                    readTime: "12 min read",
                    // Single image (fallback ke liye)
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                    // Multiple images Swiper ke liye
                    images: [
                              "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
                              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470",
                              "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442"
                    ],
                    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",

                    contentBlocks: [
                              {
                                        type: "paragraph",
                                        text: "The landscape of React development shifted dramatically with the introduction of React Server Components (RSC). In this deep dive, we'll explore how Next.js leverages this paradigm to deliver blazing-fast experiences without sacrificing the interactivity we've come to love.",
                                        dropCap: true
                              },
                              { type: "heading2", text: "The Paradigm Shift" },
                              {
                                        type: "paragraph",
                                        text: "Traditionally, React components were rendered on the client, or hydrated from a server-rendered HTML string. Server Components introduce a third way: components that only ever execute on the server. This means smaller bundle sizes and direct access to your database or filesystem."
                              },
                              {
                                        type: "callout",
                                        title: "Key Takeaway",
                                        text: "Server Components are not a replacement for Client Components. They are a powerful addition to your toolkit that should be used for data-fetching and static content."
                              },
                              { type: "heading3", text: "Implementing Your First Server Component" },
                              {
                                        type: "paragraph",
                                        text: "By default, every component in the Next.js App Router is a Server Component. You don't need to add any special directives unless you need interactivity."
                              },
                              {
                                        type: "code",
                                        filename: "components/ProjectList.tsx",
                                        codeHTML: `<span class="text-[#569CD6]">async function</span> <span class="text-[#DCDCAA]">ProjectList</span>() {
  <span class="text-[#6A9955]">// Direct database access!</span>
  <span class="text-[#569CD6]">const</span> projects = <span class="text-[#C586C0]">await</span> db.<span class="text-[#9CDCFE]">project</span>.<span class="text-[#DCDCAA]">findMany</span>();

  <span class="text-[#C586C0]">return</span> (
    <span class="text-[#808080]">&lt;</span><span class="text-[#569CD6]">div</span><span class="text-[#808080]">&gt;</span>
      {projects.<span class="text-[#DCDCAA]">map</span>((p) <span class="text-[#569CD6]=&gt;</span> (
        <span class="text-[#808080]">&lt;</span><span class="text-[#4EC9B0]">ProjectCard</span> <span class="text-[#9CDCFE]">key</span>={p.id} <span class="text-[#9CDCFE]">data</span>={p} <span class="text-[#808080]/&gt;</span>
      ))}
    <span class="text-[#808080]">&lt;/</span><span class="text-[#569CD6]">div</span><span class="text-[#808080]">&gt;</span>
  );
}`
                              },
                              { type: "heading2", text: "Hydration vs. Serialization" },
                              {
                                        type: "paragraph",
                                        text: "Understanding how data flows between server and client components is crucial. When you pass props from a server component to a client component, that data must be serializable. This is why you can't pass functions directly across the boundary."
                              },
                              {
                                        type: "comparison",
                                        left: {
                                                  title: "When to use RSC",
                                                  items: ["Data Fetching", "Accessing Back-end", "Large Dependencies"]
                                        },
                                        right: {
                                                  title: "When to use Client",
                                                  items: ["onClick, onChange", "useState, useEffect", "Browser-only APIs"]
                                        }
                              },
                              { type: "heading2", text: "Conclusion" },
                              {
                                        type: "paragraph",
                                        text: "The Kinetic Developer System prioritizes speed and developer experience. Mastering Server Components is the most significant step you can take toward building professional-grade web applications in the modern era."
                              }
                    ],
                    toc: [
                              { id: "the-paradigm-shift", text: "The Paradigm Shift" },
                              { id: "implementing-your-first-server-component", text: "Implementing RSC" },
                              { id: "hydration-vs-serialization", text: "Hydration vs. Serialization" },
                              { id: "conclusion", text: "Conclusion" }
                    ],
                    relatedPosts: [
                              { title: "Optimizing Core Web Vitals in 2024", readTime: "5 min read", href: "#" },
                              { title: "TypeScript 5.0: The Good Parts", readTime: "8 min read", href: "#" }
                    ],
                    prevPost: { title: "Tailwind CSS v4 Sneak Peek", href: "#" },
                    nextPost: { title: "The Rise of AI in IDEs", href: "#" }
          }
} satisfies PortfolioData;
