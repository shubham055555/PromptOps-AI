from sqlalchemy.orm import Session

from app.models.conversation import Conversation
from app.models.message import Message
from app.models.library import PromptLibrary


def get_dashboard_stats(db: Session):

    return {

        "total_conversations":
            db.query(Conversation).count(),

        "total_messages":
            db.query(Message).count(),

        "total_prompt_library":
            db.query(PromptLibrary).count(),

        "total_ai_messages":
            db.query(Message)
            .filter(Message.role == "assistant")
            .count(),

        "total_user_messages":
            db.query(Message)
            .filter(Message.role == "user")
            .count(),

    }