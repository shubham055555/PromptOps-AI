from pydantic import BaseModel


class ChatRequest(BaseModel):
    conversation_id: int
    message: str
    model: str = "gemini-2.5-flash"


class ChatResponse(BaseModel):
    conversation_id: int
    user_message: str
    assistant_message: str