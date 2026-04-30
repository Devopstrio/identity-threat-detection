resource "aws_msk_cluster" "threat_stream" {
  cluster_name           = "identity-threat-stream"
  kafka_version          = "2.8.1"
  number_of_broker_nodes = 3

  broker_node_group_info {
    instance_type   = "kafka.m5.large"
    client_subnets  = var.private_subnets
    security_groups = [var.kafka_security_group]
  }

  encryption_info {
    encryption_in_transit {
      client_broker = "TLS"
    }
  }

  logging_info {
    broker_logs {
      cloudwatch_logs {
        enabled   = true
        log_group = "/aws/msk/identity-threats"
      }
    }
  }
}
