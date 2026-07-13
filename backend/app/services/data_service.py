import csv
import io

from sqlalchemy.orm import Session

from app.models.conversation import Conversation
from app.models.library import PromptLibrary


def export_conversations(db: Session):

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "ID",
        "Title",
    ])

    conversations = db.query(Conversation).all()

    for conversation in conversations:

        writer.writerow([
            conversation.id,
            conversation.title,
        ])

    output.seek(0)

    return output.getvalue()


def export_prompt_library(db: Session):

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "ID",
        "Title",
        "Category",
    ])

    prompts = db.query(PromptLibrary).all()

    for prompt in prompts:

        writer.writerow([
            prompt.id,
            prompt.title,
            prompt.category,
        ])

    output.seek(0)

    return output.getvalue()


def clear_conversations(db: Session):

    db.query(Conversation).delete()

    db.commit()

    return True


def clear_prompt_library(db: Session):

    db.query(PromptLibrary).delete()

    db.commit()

    return True