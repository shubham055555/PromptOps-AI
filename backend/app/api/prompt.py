from fastapi import APIRouter

from app.schemas.prompt import PromptRequest
from app.services.gemini_service import generate_prompt

router = APIRouter()

@router.post("/generate")
def generate(data: PromptRequest):

    result = generate_prompt(data)

    return {
        "prompt": result
    }