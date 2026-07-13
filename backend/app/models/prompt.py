from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Prompt(Base):

    __tablename__ = "prompts"

    id = Column(Integer, primary_key=True, index=True)

    role = Column(String)

    task = Column(Text)

    context = Column(Text)

    tone = Column(String)

    generated_prompt = Column(Text)