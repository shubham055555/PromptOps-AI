from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.message import Message


def get_message_distribution(db: Session):

    ai_messages = (
        db.query(Message)
        .filter(Message.role == "assistant")
        .count()
    )

    user_messages = (
        db.query(Message)
        .filter(Message.role == "user")
        .count()
    )

    return [
        {
            "name": "AI",
            "value": ai_messages,
        },
        {
            "name": "User",
            "value": user_messages,
        },
    ]