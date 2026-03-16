export interface Agent {
  id: string
  name: string
  emoji: string
  role: string
  status: 'online' | 'scheduled' | 'ondemand' | 'learning'
  statusLabel: string
  description: string
  tags: string[]
}

export interface Project {
  name: string
  status: 'active' | 'planned'
  stack: string[]
  description: string
}

export const agents: Agent[] = [
  { id: 'r2d2', name: 'R2D2', emoji: '🤖', role: 'Orchestrator & Chief of Staff', status: 'online', statusLabel: 'Always Online', description: 'The brain of the operation. Coordinates all agents, handles communications across WhatsApp, manages memory, and dispatches work to the team. Built on Claude Sonnet.', tags: ['Orchestration', 'Memory', 'WhatsApp', 'Claude'] },
  { id: 'guardian', name: 'Guardian', emoji: '🛡️', role: 'Infrastructure Watchdog', status: 'online', statusLabel: 'Running 24/7', description: 'Silent sentinel monitoring all services — OpenClaw, containers, Nginx. Self-heals before anyone notices. Only alerts when human action is needed.', tags: ['Docker', 'Self-healing', 'Monitoring', 'Infra'] },
  { id: 'maxwell', name: 'Maxwell', emoji: '📰', role: 'Senior News Editor', status: 'scheduled', statusLabel: 'Daily at 5AM EST', description: 'Autonomous news editor that curates The Headlines Today every morning. Pulls global news, writes summaries, generates PDF + audio, delivers to subscribers.', tags: ['News', 'PDF', 'Audio', 'Daily'] },
  { id: '3po', name: '3PO', emoji: '🧑‍💻', role: 'Senior Coding Partner', status: 'ondemand', statusLabel: 'On Demand', description: 'Claude Code instance spawned for complex engineering tasks. Builds features, fixes bugs, writes architecture. Works alongside R2D2 on any codebase without supervision.', tags: ['Claude Code', 'Full-Stack', 'Architecture'] },
  { id: 'r3po', name: 'R3PO', emoji: '⚡', role: 'Swarm Coordinator', status: 'ondemand', statusLabel: 'On Demand', description: 'Multiple parallel Claude Code instances for independent workstreams. When one agent is not enough — R3PO deploys a fleet.', tags: ['Parallel', 'Swarm', 'Autonomous', 'Scale'] },
  { id: 'yoda', name: 'Yoda', emoji: '🧙', role: 'Self-Evolving Research Agent', status: 'learning', statusLabel: 'Learning', description: 'Feeds on research papers and builds its own VL-JEPA model. Extracts knowledge, updates understanding, improves code autonomously. Currently at v0.4 — 161M parameters.', tags: ['VL-JEPA', 'Self-Evolving', 'PyTorch', 'Research'] },
  { id: 'aria', name: 'ARIA', emoji: '🎯', role: 'AI HR & Career Intelligence', status: 'ondemand', statusLabel: 'On Demand', description: 'Tailors resumes for ATS + human readers, optimizes LinkedIn, generates portfolio sites, career strategy. Every candidate is a brand. Top 1% globally.', tags: ['Career', 'Resume', 'LinkedIn', 'Branding'] },
]

export const projects: Project[] = [
  { name: 'Yoda — VL-JEPA Agent', status: 'active', stack: ['Python', 'PyTorch', 'Claude', 'Docker'], description: 'Self-evolving agent that learns VL-JEPA from research papers. v0.4 — 161M params, training on synthetic data.' },
  { name: 'Hero Video Generator', status: 'active', stack: ['Remotion', 'React', 'TypeScript'], description: 'Programmatic looping background videos for hero sections. Dark Tech + Clean Minimal variants.' },
  { name: 'GST Ledger Book', status: 'planned', stack: ['React', 'Vite', 'Supabase'], description: 'GST invoicing and reconciliation for Indian small businesses. No manual data entry.' },
]

export const statusColors: Record<string, string> = {
  online: '#22c55e',
  scheduled: '#f59e0b',
  ondemand: '#3b82f6',
  learning: '#a855f7',
}
