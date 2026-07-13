from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class AppSetting(Base):

    __tablename__ = "app_settings"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    key = Column(
        String(100),
        unique=True,
        nullable=False,
    )

    value = Column(
        Text,
        nullable=False,
    )