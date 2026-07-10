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
              id: "nexus-analytics", // URL friendly ID
              title: "Nexus Analytics Engine",
              description: "Real-time data processing platform featuring predictive modeling and high-fidelity visualization clusters for enterprise telemetry.",
              imageUrl: "/projects/aireelgen.png",
              techStack: ["Next.js", "Prisma", "Tailwind", "PostgreSQL"],
              category: "Full-Stack",
              liveUrl: "#",
              githubUrl: "#",
              overview: "Nexus was built to solve the fragmentation in enterprise data monitoring. By consolidating telemetry from distributed systems into a single, high-performance visualization layer, we enabled engineering teams to identify bottlenecks 40% faster. The system handles over 100k events per second with sub-100ms latency.",
              role: "Lead Fullstack Engineer",
              duration: "6 Months (2023)",
              status: "Live",
              videos: [
                { id: "v1", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783709253/day2_d8gotg.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713982/day2-thumbnail_dmybnk.png", title: "Dashboard Overview & Navigation" },
                { id: "v2", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783709284/day3_yn5duh.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713982/day3-thumbnail_j3emkw.jpg", title: "Real-time Data Filtering" },
                { id: "v3", url: "https://res.cloudinary.com/b7s4tc12/video/upload/v1783710637/day4_qvt3iv.mp4", thumbnail: "https://res.cloudinary.com/b7s4tc12/image/upload/v1783713985/day4-thumbnail_mi5mfk.png", title: "Custom Widget Creation" }
              ],
              challenge: {
                text: "Existing tools were either too slow to handle real-time bursts or too complex for non-technical stakeholders. The client needed a platform that married 'impossible' speed with 'beautiful' simplicity.",
                points: [
                  "Reducing rendering overhead for large datasets.",
                  "Implementing a secure yet flexible multi-tenant RBAC."
                ],
                image: "/projects/aireelgen.png"
              },
              approach: [
                { step: "01", title: "Research & Discovery", desc: "Audited 15+ competitor platforms and interviewed 20 power users to identify friction points in data exploration workflows." },
                { step: "02", title: "Architecture Design", desc: "Designed a serverless-first backend using Next.js Edge functions and Redis for ultra-low latency caching of global dashboards." },
                { step: "03", title: "Implementation", desc: "Iterative sprints focusing on atomic component development and rigorous automated stress testing with K6." },
                { step: "04", title: "Implementation", desc: "Iterative sprints focusing on atomic component development and rigorous automated stress testing with K6." },
                { step: "05", title: "Research & Discovery", desc: "Audited 15+ competitor platforms and interviewed 20 power users to identify friction points in data exploration workflows." },
                { step: "06", title: "Architecture Design", desc: "Designed a serverless-first backend using Next.js Edge functions and Redis for ultra-low latency caching of global dashboards." },
                { step: "07", title: "Implementation", desc: "Iterative sprints focusing on atomic component development and rigorous automated stress testing with K6." },
                { step: "08", title: "Implementation", desc: "Iterative sprints focusing on atomic component development and rigorous automated stress testing with K6." }
              ],
              features: [
                { icon: "query_stats", title: "Real-time Telemetry", desc: "Stream data directly to the client using WebSockets with zero flickering or layout shifts during updates." },
                { icon: "psychology", title: "Predictive Modeling", desc: "Integrated AI forecasting using TensorFlow.js to predict traffic spikes and system failures before they happen." },
                { icon: "dashboard_customize", title: "Interactive Dashboards", desc: "Drag-and-drop interface for creating custom data views tailored to specific engineering team requirements." },
                { icon: "security", title: "Enterprise Security", desc: "End-to-end encryption with granular role-based access control for compliance." } // 4th feature to test scroll/view more
              ],
              results: [
                { value: "40%", label: "Faster Load Time" },
                { value: "5k+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" }
              ],
              nextProjectId: "pulse-mobile",
              resultsDesc: "The results of this project highlighted a significant improvement in efficiency and user experience.",
              upcomingUpdate: {
                title: "v2.0 Beta Release",
                description: "Is update mein hum AI integration aur naye features introduce kar rahay hain..."
              },
              architecture: [
                {
                  title: "Level 1: Data Flow Diagram (DFD)",
                  description: "This diagram illustrates the primary data flow from the user client through the API gateway and into our core processing services.",
                  image: "/digrams/Data-Flow Diagram-DFD-(Level-1).png",
                  points: [
                    "User requests are authenticated and validated at the API Gateway.",
                    "Payloads are pushed to a Redis Queue for asynchronous processing.",
                    "Final rendered assets are securely stored in the Cloudinary Vault."
                  ]
                },
                {
                  title: "AI Asset Synthesis Pipeline",
                  description: "A detailed look at how the AI agents generate and compose metadata before video rendering.",
                  image: "/digrams/Ai-pipeline (1).png",
                  points: [
                    "External AI Services generate initial text and image assets.",
                    "FFmpeg composition engine stitches assets chronologically.",
                    "State closure updates MongoDB ledger upon completion."
                  ]
                }
              ]
            },
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
