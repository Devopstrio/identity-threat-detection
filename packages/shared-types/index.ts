export enum ThreatSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  INFO = "INFO"
}

export enum ThreatStatus {
  OPEN = "OPEN",
  ACKNOWLEDGED = "ACKNOWLEDGED",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  FALSE_POSITIVE = "FALSE_POSITIVE"
}

export enum DetectionCategory {
  ANOMALY = "ANOMALY",
  BEHAVIORAL = "BEHAVIORAL",
  SIGNATURE = "SIGNATURE",
  CORRELATION = "CORRELATION"
}

export interface ThreatAlert {
  id: string;
  title: string;
  description: string;
  severity: ThreatSeverity;
  status: ThreatStatus;
  category: DetectionCategory;
  identityId: string;
  source: string;
  mitreAttackTactic?: string;
  mitreAttackTechnique?: string;
  timestamp: string;
  metadata: Record<string, any>;
}

export interface IdentityRiskScore {
  identityId: string;
  score: number; // 0-100
  riskLevel: ThreatSeverity;
  factors: string[];
  lastUpdated: string;
}

export interface AttackTimelineEvent {
  id: string;
  timestamp: string;
  type: string;
  description: string;
  severity: ThreatSeverity;
}
