from fastapi import APIRouter, Depends
from fastapi.responses import Response
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.services.data_service import (
    export_conversations,
    export_prompt_library,
    clear_conversations,
    clear_prompt_library,
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.get("/data/export/conversations")
def export_chat_data(
    db: Session = Depends(get_db),
):

    csv_data = export_conversations(db)

    return Response(
        content=csv_data,
        media_type="text/csv",
        headers={
            "Content-Disposition":
            "attachment; filename=conversations.csv"
        },
    )


@router.get("/data/export/library")
def export_library_data(
    db: Session = Depends(get_db),
):

    csv_data = export_prompt_library(db)

    return Response(
        content=csv_data,
        media_type="text/csv",
        headers={
            "Content-Disposition":
            "attachment; filename=prompt_library.csv"
        },
    )


@router.delete("/data/conversations")
def delete_all_conversations(
    db: Session = Depends(get_db),
):

    clear_conversations(db)

    return {
        "success": True,
        "message": "All conversations deleted."
    }


@router.delete("/data/library")
def delete_all_library(
    db: Session = Depends(get_db),
):

    clear_prompt_library(db)

    return {
        "success": True,
        "message": "Prompt Library cleared."
    }