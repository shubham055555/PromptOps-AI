from pydantic import BaseModel


class OptimizerRequest(BaseModel):
    prompt: str


class OptimizerResponse(BaseModel):
    optimized_prompt: str
    score: int
    suggestions: list[str]