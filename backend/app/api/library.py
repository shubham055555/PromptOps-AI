from fastapi import APIRouter

from app.schemas.library import PromptLibraryCreate
from app.services.library_service import create_prompt
from app.services.library_service import get_all_prompts

router = APIRouter()


@router.get("/library")
def library():

    return get_all_prompts()


@router.post("/library")
def add_prompt(data: PromptLibraryCreate):

    return create_prompt(data)