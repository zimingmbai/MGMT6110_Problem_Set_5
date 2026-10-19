export type QuadrantId = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface AgentCardData {
  agentName: string;
  finishedDateTime: string;
  job: string;
  trigger: string;
  tools: string;
  mustNever: string;
  humanCheck: string;
}

export interface QuadrantMeta {
  id: QuadrantId;
  title: string;
  subtitle: string;
  positionLabel: string;
  answerType: 'right-answer' | 'no-single-right-answer';
  answerLabel: string;
  collaborationType: 'together' | 'alone';
  collaborationLabel: string;
  cardBgClass: string;
  borderClass: string;
  activeBorderClass: string;
  summaryGuidance: string;
}

export interface AnalysisData {
  quadrant: QuadrantId;
  questionA: string;
  questionB: string;
  questionC: string;
  questionD: string;
  delegated: string;
  checkedAndHow: string;
  errorCaught: string;
  reflection: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  caption?: string;
  status: 'available' | 'pending';
}

