from sqlalchemy.orm import Session

from app.models.message import Message


def build_conversation_context(
    db: Session,
    conversation_id: int,
):

    messages = (
        db.query(Message)
        .filter(
            Message.conversation_id == conversation_id
        )
        .order_by(Message.id.asc())
        .all()
    )

    context = ""

    for message in messages:

        if message.role == "user":

            context += f"User: {message.content}\n\n"

        else:

            context += f"Assistant: {message.content}\n\n"

    return context