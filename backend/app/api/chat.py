from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.schemas.chat import ChatRequest
from app.services.chat_service import process_chat

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/chat")
def chat(
    data: ChatRequest,
    db: Session = Depends(get_db),
):

    return process_chat(
        db=db,
        conversation_id=data.conversation_id,
        message=data.message,
        model=data.model,
    )