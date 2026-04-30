.PHONY: help build up down test lint migrate simulate-attack

help:
	@echo "Identity Threat Detection Platform - Management Commands"
	@echo "------------------------------------------------------"
	@echo "build            : Build all containers"
	@echo "up               : Start all services"
	@echo "down             : Stop all services"
	@echo "test             : Run all tests"
	@echo "lint             : Run linting checks"
	@echo "migrate          : Run database migrations"
	@echo "simulate-attack  : Trigger a simulated identity attack for testing"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

simulate-attack:
	docker-compose exec api python scripts/simulate-attacks/impossible_travel.py
