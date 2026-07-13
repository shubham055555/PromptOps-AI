from fastapi import APIRouter

from app.db.database import SessionLocal
from app.models.prompt import Prompt

router = APIRouter()


@router.get("/history")
def get_history():

    db = SessionLocal()

    prompts = (
        db.query(Prompt)
        .order_by(Prompt.id.desc())
        .all()
    )

    db.close()

    return prompts