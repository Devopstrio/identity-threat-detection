from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_risk():
    return {'status': 'ok'}
