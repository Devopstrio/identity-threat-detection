# Architecture & Ingestion Diagrams

## 11. Login Anomaly Flow (Detailed)
*How the detection engine validates every login against behavioral baselines.*

```mermaid
graph TD
    Auth[Auth Success] --> Telemetry[Extract Context: IP, UA, Geo]
    Telemetry --> Baseline[Fetch User History]
    Baseline --> Analysis{Anomaly?}
    Analysis -- No --> OK[Log & Ignore]
    Analysis -- Yes --> Alert[Trigger Security Incident]
```

## 14. Privilege Escalation Pattern
```mermaid
graph LR
    Low[Standard User] --> Vuln[Credential Leak]
    Vuln --> Elevate[Add to Domain Admins]
    Elevate --> Impact[Domain Compromise]
```

## 20. Identity Ransomware Kill Chain
```mermaid
graph TD
    Access[Initial Access] --> Discovery[Identity Discovery]
    Discovery --> Lateral[Lateral Movement]
    Lateral --> Exfil[Data Exfiltration]
    Exfil --> Encryption[Identity Lockout]
```
