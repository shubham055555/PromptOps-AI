from fastapi import APIRouter

from app.schemas.playground import PlaygroundRequest
from app.services.playground_service import generate_chat

router = APIRouter()


@router.post("/playground")
def playground(data: PlaygroundRequest):

    answer = generate_chat(
        data.message,
        data.model,
    )

    return {
        "response": answer
    }