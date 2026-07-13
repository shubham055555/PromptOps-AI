from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.schemas.message import (
    MessageCreate,
)

from app.services.message_service import (
    create_message,
    get_messages,
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/messages")
def add_message(
    data: MessageCreate,
    db: Session = Depends(get_db),
):

    return create_message(
        db=db,
        conversation_id=data.conversation_id,
        role=data.role,
        content=data.content,
    )


@router.get("/messages/{conversation_id}")
def list_messages(
    conversation_id: int,
    db: Session = Depends(get_db),
):

    return get_messages(
        db=db,
        conversation_id=conversation_id,
    )