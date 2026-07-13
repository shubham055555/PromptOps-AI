import os

import google.generativeai as genai
from dotenv import load_dotenv

from app.db.database import SessionLocal
from app.models.prompt import Prompt

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_prompt(data):

    prompt = f"""
You are a {data.role}

Task:
{data.task}

Context:
{data.context}

Tone:
{data.tone}

Generate the best AI prompt.
"""

    response = model.generate_content(prompt)

    generated_prompt = response.text

    db = SessionLocal()

    db_prompt = Prompt(
        role=data.role,
        task=data.task,
        context=data.context,
        tone=data.tone,
        generated_prompt=generated_prompt,
    )

    db.add(db_prompt)
    db.commit()
    db.refresh(db_prompt)

    db.close()

    return generated_prompt