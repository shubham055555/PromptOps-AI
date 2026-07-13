import csv
import io

from sqlalchemy.orm import Session

from app.models.message import Message


def export_messages_csv(
    db: Session,
):

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([

        "ID",

        "Role",

        "Message",

    ])

    messages = db.query(Message).all()

    for message in messages:

        writer.writerow([

            message.id,

            message.role,

            message.content,

        ])

    output.seek(0)

    return output.getvalue()