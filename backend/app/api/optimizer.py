from fastapi import APIRouter

from app.schemas.optimizer import OptimizerRequest
from app.services.optimizer_service import optimize_prompt

router = APIRouter()


@router.post("/optimizer")
def optimizer(data: OptimizerRequest):

    result = optimize_prompt(data.prompt)

    return result