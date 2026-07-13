from sqlalchemy.orm import Session

from app.models.message import Message


def get_recent_activity(
    db: Session,
    limit: int = 10,
):

    messages = (

        db.query(Message)

        .order_by(Message.id.desc())

        .limit(limit)

        .all()

    )

    activity = []

    for message in messages:

        activity.append({

            "id": message.id,

            "role": message.role,

            "content": message.content[:80],

        })

    return activity