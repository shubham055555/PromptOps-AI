from app.db.database import SessionLocal
from app.models.library import PromptLibrary


def get_all_prompts():

    db = SessionLocal()

    prompts = (
        db.query(PromptLibrary)
        .order_by(PromptLibrary.id.desc())
        .all()
    )

    db.close()

    return prompts


def create_prompt(data):

    db = SessionLocal()

    prompt = PromptLibrary(
        title=data.title,
        category=data.category,
        description=data.description,
        prompt=data.prompt,
    )

    db.add(prompt)

    db.commit()

    db.refresh(prompt)

    db.close()

    return prompt