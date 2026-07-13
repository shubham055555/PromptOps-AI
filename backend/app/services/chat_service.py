from sqlalchemy.orm import Session

from app.services.message_service import create_message
from app.services.playground_service import generate_chat

from app.services.conversation_service import (
    get_conversation,
    update_conversation_title,
)

from app.services.memory_service import (
    build_conversation_context,
)


def process_chat(
    db: Session,
    conversation_id: int,
    message: str,
    model: str,
):

    # ----------------------------------
    # Get Conversation
    # ----------------------------------

    conversation = get_conversation(
        db,
        conversation_id,
    )

    if conversation is None:

        raise Exception("Conversation not found")

    # ----------------------------------
    # Auto Title (First Message)
    # ----------------------------------

    if conversation.title == "New Chat":

        title = message.strip()

        if len(title) > 40:

            title = title[:40] + "..."

        update_conversation_title(
            db,
            conversation_id,
            title,
        )

    # ----------------------------------
    # Save User Message
    # ----------------------------------

    create_message(
        db=db,
        conversation_id=conversation_id,
        role="user",
        content=message,
    )

    # ----------------------------------
    # Build Conversation Memory
    # ----------------------------------

    conversation_context = build_conversation_context(
        db,
        conversation_id,
    )

    # ----------------------------------
    # Generate AI Response
    # ----------------------------------

    ai_response = generate_chat(
        conversation_context=conversation_context,
        message=message,
        model_name=model,
    )

    # ----------------------------------
    # Save Assistant Message
    # ----------------------------------

    create_message(
        db=db,
        conversation_id=conversation_id,
        role="assistant",
        content=ai_response,
    )

    return {
        "conversation_id": conversation_id,
        "user_message": message,
        "assistant_message": ai_response,
    }