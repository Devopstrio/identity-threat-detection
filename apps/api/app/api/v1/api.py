from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, alerts, detections, risk, threats, response, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(alerts.router, prefix="/alerts", tags=["alerts"])
api_router.include_router(detections.router, prefix="/detections", tags=["detections"])
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(threats.router, prefix="/threats", tags=["threats"])
api_router.include_router(response.router, prefix="/response", tags=["response"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
