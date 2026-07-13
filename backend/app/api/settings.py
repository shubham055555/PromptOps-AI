from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.schemas.settings import SettingRequest

from app.services.settings_service import (
    get_all_settings,
    save_setting,
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.get("/settings")
def fetch_settings(
    db: Session = Depends(get_db),
):

    return get_all_settings(db)


@router.post("/settings")
def update_setting(
    data: SettingRequest,
    db: Session = Depends(get_db),
):

    save_setting(
        db,
        data.key,
        data.value,
    )

    return {
        "success": True,
        "message": "Setting saved successfully",
    }