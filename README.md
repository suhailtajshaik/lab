# The Lab — lab.suhailtaj.cloud

> Where ideas get tested, agents get built, and the future gets prototyped.

A personal AI research lab website showcasing autonomous agents, live projects, and experiments in self-supervised learning, AI orchestration, and full-stack engineering.

🔗 **Live:** [lab.suhailtaj.cloud](https://lab.suhailtaj.cloud)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Pure CSS (inline styles, no Tailwind) |
| Icons | lucide-react |
| Server | nginx (alpine) |
| Container | Docker (multi-stage build) |
| Network | r2d2-proxy (external Docker network) |

---

## Project Structure

```
lab-site/
├── src/
│   ├── components/
│   │   ├── Nav.tsx          # Fixed navbar with mobile menu
│   │   ├── Hero.tsx         # Hero section — grid bg, glow orbs
│   │   ├── AboutLab.tsx     # Lab description + stats
│   │   ├── AgentsTeam.tsx   # AI agent cards with status indicators
│   │   ├── Projects.tsx     # Active project cards with links
│   │   └── Footer.tsx       # Footer with links
│   ├── data/
│   │   └── lab.ts           # All content data — agents + projects
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

---

## Agents

| Agent | Role | Status |
|-------|------|--------|
| 🤖 R2D2 | Orchestrator & Chief of Staff | Always Online |
| 🛡️ Guardian | Infrastructure Watchdog | Running 24/7 |
| 📰 Maxwell | Senior News Editor | Daily at 5AM EST |
| 🧑‍💻 3PO | Senior Coding Partner & Swarm Lead | On Demand |
| 🧙 Yoda | Self-Evolving Research Agent | Learning |
| 🎯 ARIA | AI HR & Career Intelligence | On Demand |

---

## Projects

| Project | Status | Link |
|---------|--------|------|
| Yoda — VL-JEPA Learning System | Active | — |
| Prompt Studio | Active | [lab.suhailtaj.cloud/prompt-studio](https://lab.suhailtaj.cloud/prompt-studio/) |
| The Headlines Today | Active | [news.suhailtaj.cloud](https://news.suhailtaj.cloud) |

---

## Local Dev

```bash
npm install
npm run dev
# Runs at http://localhost:5173
```

## Production Build

```bash
npm run build
docker compose up -d
```

## Docker

- **Container:** `lab`
- **Network:** `r2d2-proxy` (external — shared with nginx proxy)
- **No exposed ports** — traffic routed via nginx reverse proxy on `lab.suhailtaj.cloud`

Multi-stage build: Node 20 Alpine builder → nginx Alpine runtime. Final image is minimal with only the compiled `dist/` served by nginx.

---

## Design System

Matches the portfolio ([suhailtaj.cloud](https://suhailtaj.cloud)) exactly:

- **Background:** `#0c1222`
- **Cards:** `#151d2e` with `#1e293b` borders
- **Accent:** `#c9a962` (gold)
- **Text:** `#e5e7eb` primary · `#94a3b8` secondary · `#64748b` muted
- **Nav:** `rgba(12,18,34,0.9)` + `backdrop-filter: blur(12px)`
- **Hero:** Gold grid pattern + radial glow orbs

---

## Branches

- `master` — stable, production releases only
- `development` — active work; PRs to master on version bumps

---

## Related

- Portfolio: [suhailtaj.cloud](https://suhailtaj.cloud) · [github.com/suhailtajshaik/suhailtajshaik](https://github.com/suhailtajshaik/suhailtajshaik)
- News: [news.suhailtaj.cloud](https://news.suhailtaj.cloud) · [github.com/suhailtajshaik/the-headlines-today](https://github.com/suhailtajshaik/the-headlines-today)
