from pydantic import BaseModel


class PlaygroundRequest(BaseModel):
    message: str
    model: str = "gemini-2.5-flash"


class PlaygroundResponse(BaseModel):
    response: str