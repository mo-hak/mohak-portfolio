// Single source of truth for the site. index.html renders the Browser view from it,
// and the Terminal / Agent views (plus cv.txt and llms.txt via build.cjs) are
// generated from the same object, so the three shapes never drift apart.

const CV = {
  name: "Mohak Gupta",
  first: "Mohak",
  role: "Full Stack Engineer: blockchain systems and AI agents",
  email: "mohakgupta100@gmail.com",
  links: [
    { label: "github.com/mo-hak", href: "https://github.com/mo-hak" },
    { label: "linkedin.com/in/mohak-gupta", href: "https://www.linkedin.com/in/mohak-gupta-756090225/" },
    { label: "x.com/mohak_sol", href: "https://x.com/mohak_sol" },
  ],

  hero: [
    {
      phrase: "trading and settlement infrastructure",
      detail:
        "event-driven Node.js services for off-chain trading and on-chain settlement at Bento, processing $1M+ in volume, with pricing latency cut from 800ms to 2ms and settlement moved onto a persistent BullMQ queue",
    },
    {
      phrase: "AI agents",
      detail:
        "Bento Create, a studio where an agent turns a one-line idea into a published, playable game. I built the harness: the tools, the sandboxed compile-and-playtest loop, and the checks a game has to pass before it can take real money",
    },
    {
      phrase: "wallets that feel like Web2",
      detail:
        "a unified Turnkey smart-wallet layer behind Auth0 sign-in that works across web, mobile and group chats",
    },
    {
      phrase: "DeFi primitives",
      detail:
        "Uniswap v4 hooks and EulerSwap JIT-liquidity tooling that placed in both ecosystems' competitions, plus a minor bug found in the v4-core repository",
    },
  ],

  summary:
    "I build backend systems and infrastructure for decentralized applications, and lately the agent harnesses that write software on top of them. On Bento's founding team I helped take the prediction market to production (trading and settlement services, real-time feeds, wallets, the partner SDK), then built Bento Create, where an AI agent turns a prompt into a published game. I've led product launches, kept high-traffic systems fast, and I'm active in the open-source Web3 ecosystem, as a Uniswap developer ambassador, hackathon builder and bounty contributor.",

  experience: [
    {
      org: "Bento.Fun",
      href: "https://bento.fun",
      role: "Full Stack Engineer",
      dates: "Aug 2025 – Present",
      start: "2025-08",
      end: null,
      blurb:
        "Founding-team engineer through the transition from Filament Finance to Bento. Took the prediction market to production, then built Bento Create, an AI game studio.",
      bullets: [
        "Engineered high-performance Node.js microservices for off-chain trading and on-chain settlement: event-driven order management and real-time trading infrastructure processing $1M+ in volume.",
        "Architected a unified wallet layer on Turnkey smart wallets, hiding Web3 complexity and transaction signing behind a Web2-like Auth0 experience across web, mobile and group chats.",
        "Built Bento Create, a prompt-to-game studio where an AI agent interviews the creator, writes the game, compiles and playtests it in a sandbox, and publishes it. Each chat is a durable agent on Cloudflare Durable Objects.",
        "Designed the agent harness: phase-scoped tools and prompts, mid-turn steering, read-only sub-agents with a fresh context, per-model context compaction, prompt caching, and skills the agent loads on demand.",
        "Built staked challenges for Create games: game rules written in Rust and compiled to WebAssembly, the same binary replayed to settle every payout, drand-seeded runs, and a Games SDK with bonded disputes and serialized settlement.",
        "Architected and migrated market settlement onto a persistent BullMQ job queue for 100% reliability and horizontal scaling across distributed worker nodes.",
        "Optimised database performance and Redis caching to reach sub-10ms responses, reducing pricing latency from 800ms to 2ms.",
        "Designed and shipped a cross-environment B2B SDK with tiered API-key management and distributed rate limiting to scale partner integrations.",
        "Built REST APIs and WebSocket connections for live price feeds and order sync, feeding dashboards for trading, market making and real-time analytics.",
        "Led the end-to-end frontend build from Figma prototypes, using agentic AI workflows, MCP and automated pipelines for component generation and end-to-end testing.",
      ],
      tags: ["Trading systems", "Event-driven microservices", "Agent harnesses", "System design"],
    },
    {
      org: "Uniswap Foundation",
      href: "https://www.uniswapfoundation.org",
      role: "Developer Ambassador",
      dates: "Feb 2025 – Aug 2026",
      start: "2025-02",
      end: "2026-08",
      blurb:
        "Developer relations for Uniswap v4 and Unichain: tools, workshops, meetups, and mentoring hook builders.",
      bullets: [
        "Built and maintained community-focused developer tools and resources to support adoption of Uniswap v4 and Unichain.",
        "Mentored and judged the Uniswap hook tracks at ETHGlobal Delhi, guiding teams on best practices and evaluating use cases.",
        "Led community engagement across Discord, forums and social; organised local meetups, technical workshops and virtual sessions.",
      ],
      tags: ["Developer relations", "Technical writing", "Public speaking"],
    },
    {
      org: "Goequitize",
      role: "Full Stack Blockchain Developer Intern",
      dates: "Jun 2024 – Jul 2024",
      start: "2024-06",
      end: "2024-07",
      blurb:
        "Real-world-asset tokenization contracts with cross-chain ownership, and smoother onboarding through account abstraction.",
      bullets: [
        "Maintained and improved RWA tokenization smart contracts using Chainlink Functions and CCIP for secure cross-chain ownership.",
        "Improved user onboarding with Biconomy-based account abstraction.",
      ],
      tags: ["Solidity", "Account abstraction", "Chainlink CCIP"],
    },
    {
      org: "LUSIP at LNMIIT",
      role: "Blockchain Security Research Intern",
      dates: "May 2023 – Jul 2023",
      start: "2023-05",
      end: "2023-07",
      blurb:
        "Protocol and smart-contract security research. Found a minor bug in the Uniswap v4-core repository.",
      bullets: [
        "Read research papers on blockchains and protocols, and found a minor bug in the Uniswap v4-core repository.",
        "Built a working knowledge of Solidity vulnerabilities by solving CTFs such as Ethernaut and Damn Vulnerable DeFi.",
      ],
      tags: ["Security audits", "Blockchain architecture"],
    },
  ],

  education: {
    school: "The LNM Institute of Information Technology",
    degree: "B.Tech–M.Tech, Computer Science and Engineering",
    place: "Rajasthan, India",
    dates: "Dec 2021 – May 2026",
    start: "2021-12",
    end: "2026-05",
  },

  skills: [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Solidity", "Rust", "Python", "HTML/CSS"] },
    {
      group: "Backend & distributed systems",
      items: ["Node.js", "NestJS", "Express.js", "Bun", "Event-driven microservices", "BullMQ", "Kafka", "REST", "WebSockets", "Zod", "WebAssembly", "Distributed systems", "System design"],
    },
    { group: "Data & databases", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQLite (Durable Objects)"] },
    {
      group: "AI & agentic systems",
      items: ["Agent harness design", "Tool calling (server and browser-side tools)", "Sub-agents", "Mid-turn steering", "Context compaction", "Prompt caching", "Agent skills", "Vercel AI SDK", "Cloudflare Agents / Think", "MCP", "Agentic coding workflows"],
    },
    {
      group: "Blockchain & Web3",
      items: ["EVM", "Solana", "Consensus", "Cryptography", "Uniswap v4 hooks", "EulerSwap", "PancakeSwap V2", "Arbitrum Stylus", "Chainlink Functions & CCIP", "drand", "Permit2", "Account abstraction", "Foundry", "Hardhat", "Wagmi", "Viem / Ethers.js", "Turnkey", "Biconomy", "Web3Auth", "Alchemy"],
    },
    {
      group: "Financial systems",
      items: ["Prediction markets", "Order management", "Off-chain trading with on-chain settlement", "Real-time price feeds", "Staked challenges", "Bonded disputes", "Treasury fees", "Multi-token routing"],
    },
    {
      group: "Cloud & DevOps",
      items: ["Cloudflare Workers, Durable Objects & Containers", "Google Cloud (Compute, KMS)", "AWS S3", "Docker"],
    },
    {
      group: "Testing & security",
      items: ["Vitest", "Jest", "Playwright", "Headless multi-browser end-to-end tests", "Fuzz and determinism testing", "Sandboxed iframes & CSP", "Smart contract security", "Ethernaut / Damn Vulnerable DeFi"],
    },
    { group: "Frontend", items: ["React.js", "Next.js", "TailwindCSS", "shadcn/ui", "Figma to production"] },
  ],

  achievements: [
    { amount: "$15,000", text: "Colosseum Breakout Hackathon: 4th of 1,400+ submissions (10,000+ participants) with SoulBoard" },
    { amount: "$6,000", text: "Superteam grant for the SoulBoard prototype" },
    { amount: "$5,000", text: "EulerSwap Builder Competition: 3rd place with JITPilot" },
    { amount: "$3,500", text: "Uniswap Hookathon: 2nd place with the Dynamic LP Assurance Hook, after a two-month Uniswap Hook Incubator fellowship" },
    { amount: "Bounties", text: "Open-source contributions to Web3 protocols including Fuel Labs and ConsenSys: features shipped and critical issues reported" },
  ],

  projects: [
    {
      name: "JITPilot",
      href: "https://github.com/mo-hak/JITpilot",
      meta: "EulerSwap · 3rd place · $5,000",
      blurb:
        "Automated rebalancing for EulerSwap just-in-time liquidity, built to fight loss-versus-rebalancing (LVR).",
      detail:
        "Time-weighted metrics and arbitrage-driven logic decide when a pool should rebalance. The smart contracts integrate with the Ethereum Vault Connector and are tested hard, giving LPs configurable health-factor thresholds, automated monitoring and dynamic rebalancing, for liquidity provision that is safer, more capital-efficient and more profitable.",
    },
    {
      name: "Dynamic LP Assurance Hook",
      href: "https://github.com/uhicapstone/capstone_solidity_contracts",
      meta: "Uniswap v4 · Arbitrum Stylus · 2nd place",
      blurb:
        "An insurance pool for liquidity providers, built as a Uniswap v4 hook with Arbitrum Stylus.",
      detail:
        "ERC-6909 tokens track each LP's cover, and pool funds are managed on-chain. Fee algorithms written in Rust price insurance and flash-loan fees dynamically from liquidity, volume, volatility, impermanent loss and trade size, so cost and payout stay fair as market conditions change.",
    },
    {
      name: "SoulBoard",
      href: "https://arena.colosseum.org/projects/explore/soulboard",
      meta: "Colosseum · 4th of 1,400+ · $15k + $6k grant",
      blurb:
        "A Web3 advertising platform that connects physical IoT screens to real-time on-chain events.",
      detail:
        "Oracles carry on-chain events to the devices. Real-time dashboards, campaign management and token distribution are built with Next.js, TailwindCSS, TypeScript, Node.js, the Metal API and Nodit webhooks. Funded by a $6,000 Superteam grant at prototype stage, then placed 4th of 1,400+ submissions at the Colosseum Breakout Hackathon.",
    },
  ],
};

// ---- text renderers shared by the page and build.cjs ----

function wrap(text, width, indent) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > width) {
      lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.map((l, i) => (i === 0 ? l : indent + l)).join("\n");
}

function toLlmsTxt(cv) {
  const out = [];
  out.push(`# ${cv.name}`);
  out.push(`> ${cv.role}`);
  out.push(`> ${cv.education.degree} (${cv.education.school}, ${cv.education.dates})`);
  out.push(`> Contact: ${cv.email}`);
  out.push(`> Profiles: ${cv.links.map((l) => l.label).join(" · ")}`);
  out.push("");
  out.push("## Summary");
  out.push(cv.summary);
  out.push("");
  out.push("## Professional Experience");
  for (const e of cv.experience) {
    out.push(`- ${e.org} (${e.dates})`);
    out.push(`  ${e.role}`);
    for (const b of e.bullets) out.push(`  • ${b}`);
    out.push("");
  }
  out.push("## Projects");
  for (const p of cv.projects) {
    out.push(`- ${p.name} (${p.meta})${p.href ? ": " + p.href : ""}`);
    out.push(`  ${p.blurb} ${p.detail}`);
    out.push("");
  }
  out.push("## Achievements");
  for (const a of cv.achievements) out.push(`- ${a.amount}: ${a.text}`);
  out.push("");
  out.push("## Skills");
  for (const s of cv.skills) out.push(`- ${s.group}: ${s.items.join(", ")}`);
  out.push("");
  out.push("## Education");
  out.push(`- ${cv.education.school}, ${cv.education.place}: ${cv.education.degree} (${cv.education.dates})`);
  return out.join("\n") + "\n";
}

function toCvTxt(cv) {
  const W = 72;
  const rule = "─".repeat(W);
  const out = [];
  out.push(cv.name.toUpperCase());
  out.push(cv.role);
  out.push(cv.email);
  out.push(cv.links.map((l) => l.label).join("  ·  "));
  out.push(rule);
  out.push(wrap(cv.summary, W, ""));
  out.push("");
  out.push("EXPERIENCE");
  out.push(rule);
  for (const e of cv.experience) {
    const head = `${e.org} · ${e.role}`;
    out.push(head + " ".repeat(Math.max(2, W - head.length - e.dates.length)) + e.dates);
    for (const b of e.bullets) out.push("  - " + wrap(b, W - 4, "    "));
    out.push("");
  }
  out.push("PROJECTS");
  out.push(rule);
  for (const p of cv.projects) {
    out.push(`${p.name}  [${p.meta}]`);
    out.push("  " + wrap(p.blurb, W - 2, "  "));
    if (p.href) out.push("  " + p.href);
    out.push("");
  }
  out.push("ACHIEVEMENTS");
  out.push(rule);
  for (const a of cv.achievements) out.push(`  ${a.amount.padEnd(9)} ` + wrap(a.text, W - 12, " ".repeat(12)));
  out.push("");
  out.push("SKILLS");
  out.push(rule);
  for (const s of cv.skills) out.push(`  ${s.group}: ` + wrap(s.items.join(", "), W - s.group.length - 4, " ".repeat(s.group.length + 4)));
  out.push("");
  out.push("EDUCATION");
  out.push(rule);
  out.push(`  ${cv.education.school}, ${cv.education.place}`);
  out.push(`  ${cv.education.degree} · ${cv.education.dates}`);
  return out.join("\n") + "\n";
}

if (typeof module !== "undefined") module.exports = { CV, toLlmsTxt, toCvTxt };
else Object.assign(window, { CV, toLlmsTxt, toCvTxt });
