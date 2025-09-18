from fastapi import APIRouter, Body

router = APIRouter()

@router.post('/feedback')
def submit_feedback(rating: int = Body(...), comments: str = Body("")):
    # TODO: Store feedback in database
    return {"status": "success", "rating": rating, "comments": comments}
