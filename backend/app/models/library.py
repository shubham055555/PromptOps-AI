from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.db.database import Base


class PromptLibrary(Base):

    __tablename__ = "prompt_library"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(200), nullable=False)

    category = Column(String(100), nullable=False)

    description = Column(Text, nullable=False)

    prompt = Column(Text, nullable=False)

    favorite = Column(Boolean, default=False)