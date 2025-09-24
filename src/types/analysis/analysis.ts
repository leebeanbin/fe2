export interface FactCheckSource {
  source: string;
  url: string;
  claim: string;
  rating: string;
  reviewDate: string;
}

export interface GoogleFactCheck {
  totalResults: number;
  searchKeywords: string[];
  searchResultCount: number;
  lastChecked: string;
}

export interface FactCheck {
  status: string;
  message: string;
  confidence: number;
  sources: FactCheckSource[];
  googleFactCheck: GoogleFactCheck;
}

export interface Article {
  id: string;
  title: string;
  url: string;
  content?: string;
  summary: string;
  author?: string;
  publishedAt: string;
  crawledAt: string;
  mediaOutletId: number;
  mediaOutletName: string;
  categoryId: number;
  categoryName: string;
  journalistId?: number;
  journalistName?: string;
  factCheck?: FactCheck;
}

export type BiasKind = 'conservative' | 'neutral' | 'progressive';

export interface AnalysisCore {
  title: string;
  factDescription: string;
  biasDirection: string;
  biasIntensity: string;
  biasDescription: string;
  detailedBiasDescription: string;
  biasAnalysis: {
    overall: { bias: BiasKind; score: number; confidence: number };
    factOpinionRatio: { fact: number; opinion: number };
    sentimentAnalysis: { positive: number; neutral: number; negative: number };
    politicalPerspective: string;
  };
  keywordAnalysis: {
    coreKeywords: { rank: number; word: string; importance: number }[];
    keywordSentences: { keyword: string; sentences: string[] }[];
    topKeywords: { word: string; frequency: number; weight: number }[];
  };
}

export interface PiePoint {
  name: string;
  y: number;
}
export interface TreemapPoint {
  name: string;
  value: number;
}

export interface SentimentDonutConfig {
  chart?: { type?: 'pie' };
  title?: { text?: string };
  series: Array<{ name: string; data: PiePoint[] }>;
}

export interface KeywordTreemapConfig {
  chart?: { type?: 'treemap' };
  title?: { text?: string };
  series: Array<{ name: string; data: TreemapPoint[] }>;
}

export interface NetworkNode {
  id: string;
  label: string;
  weight: number;
  category: string;
}
export interface NetworkEdge {
  source: string;
  target: string;
  weight?: number;
}
export interface NetworkChart {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}

export interface Charts {
  sentimentDonut?: SentimentDonutConfig;
  keywordTreemap?: KeywordTreemapConfig;
  networkChart?: NetworkChart;
}

export interface RelatedVideo {
  title: string;
  url: string;
  thumbnail: string;
  channel: string;
  publishedAt: string;
  duration: string;
  viewCount: number;
  relevanceScore: number;
  keywords: string[];
}

export interface AnalysisResultData {
  article: Article;
  analysis: AnalysisCore;
  charts: Charts;
  relatedVideos: RelatedVideo[];
}

export interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}
