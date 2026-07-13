from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.schemas.conversation import ConversationCreate
from app.schemas.rename_conversation import (
    RenameConversationRequest,
)

from app.services.conversation_service import (
    create_conversation,
    get_conversations,
    get_conversation,
    update_conversation_title,
    delete_conversation,
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


# -----------------------------------------
# Create Conversation
# -----------------------------------------

@router.post("/conversations")
def create_chat(
    data: ConversationCreate,
    db: Session = Depends(get_db),
):

    return create_conversation(
        db,
        data.title,
    )


# -----------------------------------------
# Get All Conversations
# -----------------------------------------

@router.get("/conversations")
def list_chats(
    db: Session = Depends(get_db),
):

    return get_conversations(db)


# -----------------------------------------
# Get Single Conversation
# -----------------------------------------

@router.get("/conversations/{conversation_id}")
def get_chat(
    conversation_id: int,
    db: Session = Depends(get_db),
):

    conversation = get_conversation(
        db,
        conversation_id,
    )

    if not conversation:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation


# -----------------------------------------
# Rename Conversation
# -----------------------------------------

@router.put("/conversations/{conversation_id}")
def rename_chat(
    conversation_id: int,
    data: RenameConversationRequest,
    db: Session = Depends(get_db),
):

    conversation = update_conversation_title(
        db,
        conversation_id,
        data.title.strip(),
    )

    if not conversation:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation


# -----------------------------------------
# Delete Conversation
# -----------------------------------------

@router.delete("/conversations/{conversation_id}")
def remove_chat(
    conversation_id: int,
    db: Session = Depends(get_db),
):

    deleted = delete_conversation(
        db,
        conversation_id,
    )

    if not deleted:

        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return {
        "message": "Conversation deleted successfully"
    }


# -----------------------------------------
# Search Conversations
# -----------------------------------------

@router.get("/search/conversations/{keyword}")
def search_chat(
    keyword: str,
    db: Session = Depends(get_db),
):

    conversations = get_conversations(db)

    keyword = keyword.lower()

    return [

        conversation

        for conversation in conversations

        if keyword in conversation.title.lower()

    ]