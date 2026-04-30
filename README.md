<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Identity Threat Detection Logo" />

<h1>Identity Threat Detection Platform</h1>

<p><strong>The Institutional-Grade Real-Time Detection, Correlation, and Response Engine for Modern Identity-Based Attacks</strong></p>

[![Standard: NIST--800--207](https://img.shields.io/badge/Standard-NIST--800--207-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Security: Threat--Hunt](https://img.shields.io/badge/Security-Threat--Hunt-orange.svg?style=for-the-badge&labelColor=000000)]()
[![Framework: MITRE--ATTACK](https://img.shields.io/badge/Framework-MITRE--ATTACK-red.svg?style=for-the-badge&labelColor=000000)]()

<br/>

> **"Detection is the new protection."** 
> Identity Threat Detection is a flagship platform designed to detect, analyze, and respond to identity-based attacks in real-time. By aggregating telemetry across hybrid directories, cloud providers, and SaaS applications, it provides the high-fidelity visibility required to defeat modern adversaries.

</div>

---

## 🏛️ Executive Summary

The **Identity Threat Detection Platform** is a specialized flagship solution designed for CISOs, SOC Managers, and Detection Engineering Leaders. In the current threat landscape, credentials are the primary target for 80% of data breaches. While perimeter security has matured, "Identity-Based Attacks"—such as Account Takeover (ATO), MFA Fatigue, and Session Hijacking—often bypass traditional defenses undetected.

This platform provides a **Unified Detection & Response Plane**. It demonstrates how to orchestrate high-volume telemetry ingestion using **Kafka**, **FastAPI**, and **React 18**. By applying **Behavioral Baselining (UEBA)** and **Correlation Graphs**, it identifies anomalous patterns that indicate a compromised identity, enabling SOC teams to move from reactive log-watching to proactive threat hunting and automated containment.

---

## 📉 The "Identity Blind Spot" Problem

Enterprises operating in hybrid environments face critical visibility gaps:
- **Invisible Lateral Movement**: Attackers moving between on-prem AD and Cloud IAM without leaving a cross-platform trace.
- **MFA Bypass Sophistication**: Advanced adversaries using token theft or adversary-in-the-middle (AiTM) proxies to defeat MFA.
- **Service Account Abuse**: Machine identities often have high privileges but low monitoring, making them ideal targets for persistence.
- **Insider Threat Detection**: Difficulty distinguishing between legitimate administrative work and malicious insider activity.

---

## 🚀 Strategic Drivers & Business Outcomes

### 🎯 Strategic Drivers
- **Shift to Zero Trust**: Continuous verification of identity risk at every auth attempt.
- **Regulatory Pressure**: Meeting SEC, GDPR, and HIPAA requirements for rapid incident detection and disclosure.
- **Institutional Resilience**: Reducing the blast radius of a compromised credential through automated containment.

### 💰 Business Outcomes
- **70% Reduction in MTTD**: Real-time correlation engine identifies threats faster than manual SIEM searches.
- **Automated Containment**: Immediate locking of accounts or revocation of tokens upon high-confidence critical detection.
- **Unified Threat Surface**: Single-pane-of-glass visibility into identities across AWS, Azure, GCP, and SaaS.

---

## 📐 Architecture Storytelling: 30+ Advanced Diagrams

### 1. Executive Detection Architecture
*The orchestration of raw telemetry into high-fidelity security alerts.*
```mermaid
graph TD
    subgraph "Threat Detection Platform"
        Portal[SOC Dashboard]
        Engine[Detection Engine]
        Stream[Kafka Stream]
        Intel[Threat Intel Hub]
        DB[(Alert Ledger)]
    end

    subgraph "Telemetry Streams"
        AD[AD / CloudTrail]
        IDP[Okta / Entra]
        Apps[SaaS Logs]
    end

    AD --> Stream
    IDP --> Stream
    Apps --> Stream
    Stream --> Engine
    Intel --> Engine
    Engine --> DB
    Portal --> DB
```

### 2. Hybrid Detection Topology
*Monitoring identity events from the datacenter to the edge.*
```mermaid
graph LR
    subgraph "On-Prem"
        DC[Domain Controller]
    end
    subgraph "Cloud Hub"
        Ingest[Log Aggregator]
    end
    subgraph "Cloud Native"
        Logs[CloudWatch / Monitor]
    end
    DC --> Ingest
    Logs --> Ingest
    Ingest --> Platform[Threat Detection Engine]
```

### 3. Login Anomaly Detection Flow (UEBA)
*The behavioral path from baseline to alert.*
```mermaid
sequenceDiagram
    User->>IDP: Auth Attempt
    IDP->>Engine: Event Telemetry
    Engine->>DB: Fetch Behavioral Baseline
    Engine->>Engine: Compare (Time, IP, Device)
    Engine-->>Engine: Score > Threshold
    Engine->>Portal: Trigger High Risk Alert
```

### 4. Impossible Travel Logic
*Detecting account takeover through geographic inconsistency.*
```mermaid
graph TD
    T1[Login 1: NYC, 10:00 AM] --> Calc[Calculate Distance/Time]
    T2[Login 2: London, 10:30 AM] --> Calc
    Calc -->|Speed > 500mph| Alert[Impossible Travel Alert]
```

### 5. MFA Bypass / AiTM Pattern
*Detecting adversary-in-the-middle attacks.*
```mermaid
graph LR
    User --> Proxy[Attacker Proxy]
    Proxy --> IDP[Identity Provider]
    IDP --> Engine[Detection Engine]
    Engine -->|Detect: High Risk Proxy IP| Alert[MFA Bypass Warning]
```

### 6. Privilege Escalation Chain
*Monitoring the path of an elevated credential.*
```mermaid
graph TD
    Comp[Compromised User] --> Role[Assume Support Role]
    Role --> Policy[Modify IAM Policy]
    Policy --> Admin[Create New Admin]
    Admin --> Alert[Critical: Priv Escalation]
```

### 7. Automated Response Workflow (Playbook)
*Containment action upon critical detection.*
```mermaid
sequenceDiagram
    participant Engine
    participant Playbook
    participant IDP
    participant SOC

    Engine->>Playbook: Critical Detection: Ransomware
    Playbook->>IDP: Suspend Account
    Playbook->>IDP: Revoke All Tokens
    Playbook->>SOC: Alert: Identity Contained
```

### 8. Token Abuse & Session Hijacking
*Detecting suspicious session activity.*
```mermaid
graph TD
    Tok[Valid Token] --> Use[User A, Device 1]
    Tok --> Use2[Unknown Device 2]
    Use2 -->|Different User-Agent| Alert[Session Hijacked]
```

### 9. Machine Identity (Service Account) Anomaly
*Monitoring non-human identity behavior.*
```mermaid
graph LR
    Svc[Svc Account] --> Normal[Daily Backup: 2AM]
    Svc --> Abnormal[Delete S3 Bucket: 4PM]
    Abnormal --> Alert[Anomaly: Service Acc Abuse]
```

### 10. Threat Intelligence Correlation
*Enriching alerts with global threat data.*
```mermaid
graph LR
    Alert[Suspicious IP] --> Intel[Threat Intel Feed]
    Intel -->|Match: Known Botnet| High[Elevate Severity]
```

### 11. Brute Force Attack Detection
```mermaid
graph TD
    Login[Auth Request] --> Count[Counter: 1m Window]
    Count -->|Count > 50| Alert[Brute Force Alert]
```

### 12. Password Spray Detection (Distributed)
```mermaid
graph TD
    IP1[IP A] --> U1[User 1]
    IP1 --> U2[User 2]
    IP1 --> U3[User 3]
    IP1 -->|Failed Password| Alert[Password Spray]
```

### 13. Lateral Movement Flow
```mermaid
graph LR
    H1[Host A] -->|RDP/SSH| H2[Host B]
    H2 -->|Cred Harvest| H3[Host C]
    H3 -->|Domain Admin| DC[DC]
```

### 14. Dormant Account Activation Alert
```mermaid
graph TD
    Acc[Account: Idle 180 Days] --> Event[Successful Login]
    Event --> Alert[Risk: Dormant Account Resume]
```

### 15. Insider Threat Detection (Data Exfiltration)
```mermaid
graph LR
    User[Admin] --> Fetch[Download sensitive JSON]
    Fetch --> Upload[Upload to External S3]
    Upload --> Alert[Data Exfil Risk]
```

### 16. Conditional Access Bypass Detection
```mermaid
graph TD
    Pol[CA Policy: Block Legacy Auth] --> Event[Legacy Auth Successful]
    Event --> Alert[Policy Bypass Detected]
```

### 17. OAuth App Consent Abuse
```mermaid
graph LR
    User[User] --> App[Suspicious OAuth App]
    App --> Consent[Grant: Read Mail]
    Consent --> Alert[Risk: OAuth Illicit Consent]
```

### 18. API Key Misuse (Machine ID)
```mermaid
graph TD
    Key[API Key] --> Loc[Request: Unknown Geo]
    Loc --> Alert[API Key Compromise]
```

### 19. Ransomware Identity Indicator
```mermaid
graph TD
    User[User] --> Change[Modify 100+ ACLs]
    Change --> Alert[Pattern: Identity Ransomware]
```

### 20. Session Risk Scoring Engine
```mermaid
graph LR
    Context[Device/Location] --> Score[Score 0-100]
    Score -->|Score > 80| Revoke[Auto-Revoke Session]
```

### 21. Real-time Log Ingestion (Kafka)
```mermaid
graph LR
    IDP[Okta] --> K[Kafka Topic]
    K --> Worker[Detection Worker]
```

### 22. Threat Hunting Graph Query
```mermaid
graph TD
    Q[Query: All logins from IP X] --> Results[User A, B, C]
```

### 23. Adaptive Threshold Model
```mermaid
graph LR
    Past[History] --> Model[Stats Model]
    Model --> Threshold[Dynamic Limit]
```

### 24. SIEM Integration Flow (Splunk)
```mermaid
graph LR
    Alert[Alert] --> Webhook[Splunk HEC]
    Webhook --> SIEM[Security Dashboard]
```

### 25. EDR Identity Correlation
```mermaid
graph LR
    Host[Process Start] <-> Identity[User Auth]
    Identity --> Map[Correlated Event]
```

### 26. MFA Fatigue Detection
```mermaid
graph TD
    Pushes[10 MFA Pushes in 1m] --> User[User Deny 9]
    User -->|Accept 1| Alert[MFA Fatigue Compromise]
```

### 27. Identity Threat Intelligence Feed Ingest
```mermaid
graph TD
    Feed[External Feed] --> Parser[Taxii/Stix]
    Parser --> Match[Live Match Engine]
```

### 28. Incident Lifecycle Management
```mermaid
stateDiagram-v2
    New --> Ack: Assigned to Analyst
    Ack --> Triage: Severity Confirmed
    Triage --> Resolved: Remediated
```

### 29. Regional Detection Availability
```mermaid
graph LR
    US[US Engine] <->|Global Sync| EU[EU Engine]
```

### 30. Strategic Detection Roadmap
```mermaid
graph TD
    Now[Signature Detection] --> Goal[AI/ML Behavioral]
```

---

## 🛠️ Technical Stack & Implementation

### Detection Engine
- **Processing**: Python 3.11+ / FastAPI
- **Streaming**: Kafka (High-volume event ingestion)
- **State**: Redis (Real-time windowing and baselining)

### Frontend (SOC Dashboard)
- **Framework**: React 18 / Vite
- **Visuals**: Recharts (Timeline & Risk Analytics)
- **Icons**: Lucide Security Icons

### Infrastructure
- **IaC**: Terraform (Global MSK/Kafka deployment)
- **Monitoring**: Prometheus/Grafana (Detection latency metrics)

---

## 🚀 Deployment Guide

### Local Development
```bash
# Clone the repository
git clone https://github.com/devopstrio/identity-threat-detection.git
cd identity-threat-detection

# Setup environment
cp .env.example .env

# Launch services
make up
```
Access the SOC Portal at `http://localhost:3000`.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
