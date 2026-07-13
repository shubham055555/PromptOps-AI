import os
import json

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def optimize_prompt(prompt: str):

    instruction = f"""
You are a world-class Prompt Engineering Expert.

Analyze the following prompt and improve it.

Return ONLY valid JSON in this exact format:

{{
    "optimized_prompt": "...",
    "score": 95,
    "suggestions": [
        "...",
        "...",
        "..."
    ]
}}

Prompt:

{prompt}
"""

    response = model.generate_content(instruction)

    text = response.text.strip()

    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "").strip()

    elif text.startswith("```"):
        text = text.replace("```", "").strip()

    return json.loads(text)