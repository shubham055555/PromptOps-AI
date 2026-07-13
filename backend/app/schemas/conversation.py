from pydantic import BaseModel


class ConversationCreate(BaseModel):
    title: str


class ConversationResponse(BaseModel):
    id: int
    title: str

    class Config:
        from_attributes = True