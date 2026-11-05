export interface AgentConfig {
  id: string;
  name: string;
  role: string;
  color: string;
  textColor: string;
  avatar?: string;
}

export const AGENT_ROSTER: AgentConfig[] = [
  { id: 'apex', name: 'Agent Apex', role: 'Swarm Lead', color: '#3B82F6', textColor: '#0B132B' },
  { id: 'codex', name: 'Codex Engine', role: 'Scaffolder', color: '#10B981', textColor: '#0B132B' },
  { id: 'neural-copy', name: 'Neural Copy', role: 'Copywriter', color: '#F59E0B', textColor: '#0B132B' },
  { id: 'pixel', name: 'Pixel Architect', role: 'Visuals', color: '#EC4899', textColor: '#FFFFFF' },
  { id: 'layout', name: 'Layout Synth', role: 'Layout', color: '#8B5CF6', textColor: '#FFFFFF' },
  { id: 'vector-rag', name: 'Vector RAG', role: 'Knowledge', color: '#06B6D4', textColor: '#0B132B' },
  { id: 'cro', name: 'CRO Engine', role: 'Conversions', color: '#EF4444', textColor: '#FFFFFF' },
  { id: 'geo', name: 'Geo Bot', role: 'Search', color: '#14B8A6', textColor: '#0B132B' },
  { id: 'brand', name: 'Brand Genesis', role: 'Identity', color: '#F97316', textColor: '#FFFFFF' },
  { id: 'motion', name: 'Motion Matrix', role: 'Physics', color: '#6366F1', textColor: '#FFFFFF' },
  { id: 'devops', name: 'DevOps Sentinel', role: 'Infra', color: '#64748B', textColor: '#FFFFFF' },
  { id: 'schema', name: 'Schema Core', role: 'Structured Data', color: '#84CC16', textColor: '#0B132B' },
];

export type BlockState = 'empty' | 'mark' | 'rough' | 'done';

export interface MarqueeRect {
  x: number;
  y: number;
  w: number;
  h: number;
  agentColor: string;
  agentName: string;
}

export interface SwarmLogEvent {
  id: string;
  time: string;
  agentName: string;
  agentColor: string;
  action: string;
}

export interface CursorState {
  id: string;
  name: string;
  role: string;
  color: string;
  textColor: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  bow: number;
  progress: number;
  duration: number;
  startTime: number;
  active: boolean;
  state: 'idle' | 'traveling' | 'dragging' | 'typing' | 'waiting';
}

export interface BlockMeta {
  id: string;
  element: HTMLElement;
  state: BlockState;
  code: string;
  log: string;
  preferredAgent?: string;
  paint?: string;
  typingText?: string;
  bounds: DOMRect;
  pageTop: number;
  pageLeft: number;
}
