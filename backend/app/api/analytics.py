from fastapi import APIRouter, Depends
from fastapi.responses import Response
from sqlalchemy.orm import Session

from app.db.database import SessionLocal

from app.services.analytics_service import get_analytics
from app.services.activity_service import get_recent_activity
from app.services.export_service import export_messages_csv

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/analytics")
def analytics(
    db: Session = Depends(get_db),
):
    return get_analytics(db)


@router.get("/analytics/activity")
def analytics_activity(
    db: Session = Depends(get_db),
):
    return get_recent_activity(db)


@router.get("/analytics/export/csv")
def export_csv(
    db: Session = Depends(get_db),
):

    csv_data = export_messages_csv(db)

    return Response(
        content=csv_data,
        media_type="text/csv",
        headers={
            "Content-Disposition":
                "attachment; filename=promptops_messages.csv"
        },
    )