from pydantic import BaseModel


class PromptLibraryCreate(BaseModel):

    title: str

    category: str

    description: str

    prompt: str


class PromptLibraryResponse(BaseModel):

    id: int

    title: str

    category: str

    description: str

    prompt: str

    favorite: bool

    class Config:
        from_attributes = True