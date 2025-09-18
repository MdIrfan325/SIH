from fastapi import APIRouter

router = APIRouter()

@router.get('/admin/dashboard')
def admin_dashboard():
    # TODO: Return admin stats and controls
    return {"users": 10, "queries": 100, "feedback": 5}
