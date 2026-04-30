resource "grafana_dashboard" "threat_intel" {
  config_json = jsonencode({
    title = "Identity Threat Detection Intelligence"
    panels = [
      {
        title = "Detection Latency (ms)"
        type  = "timeseries"
        targets = [{ expr = "rate(identity_detection_latency_sum[1m]) / rate(identity_detection_latency_count[1m])" }]
      },
      {
        title = "Alert Volume by Severity"
        type  = "state-timeline"
        targets = [{ expr = "sum by (severity) (identity_alerts_total)" }]
      }
    ]
  })
}
