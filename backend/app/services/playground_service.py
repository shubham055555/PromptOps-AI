import os

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)


SYSTEM_PROMPT = """
You are PromptOps AI.

You are an expert AI assistant specialized in:

- Prompt Engineering
- Software Development
- Machine Learning
- Deep Learning
- Artificial Intelligence
- Data Science
- Python
- Web Development

Instructions:

- Always remember previous conversation.
- Answer clearly.
- Use markdown formatting.
- Use code blocks when required.
- Be concise unless the user requests details.
- Never lose conversation context.
"""


def generate_chat(
    conversation_context: str,
    message: str,
    model_name: str,
):

    model = genai.GenerativeModel(model_name)

    prompt = f"""
{SYSTEM_PROMPT}

Conversation History

{conversation_context}

User:

{message}

Assistant:
"""

    response = model.generate_content(prompt)

    return response.text