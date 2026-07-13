from pydantic import BaseModel

class PromptRequest(BaseModel):
    role: str
    task: str
    context: str
    tone: str