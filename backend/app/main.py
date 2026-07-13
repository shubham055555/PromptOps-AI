from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database
from app.db.database import Base, engine

# Models (Important: SQLAlchemy tables create karne ke liye import)
from app.models.prompt import Prompt
from app.models.library import PromptLibrary
from app.models.conversation import Conversation
from app.models.message import Message
from app.models.settings import AppSetting

# Routers
from app.api.prompt import router as prompt_router
from app.api.history import router as history_router
from app.api.library import router as library_router
from app.api.optimizer import router as optimizer_router
from app.api.playground import router as playground_router
from app.api.conversation import router as conversation_router
from app.api.message import router as message_router
from app.api.chat import router as chat_router
from app.api.analytics import router as analytics_router
from app.api.settings import router as settings_router
from app.api.data import router as data_router

app = FastAPI(
    title="PromptOps AI Backend",
    version="1.0.0",
)

# Create all database tables
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(prompt_router, prefix="/api")
app.include_router(history_router, prefix="/api")
app.include_router(library_router, prefix="/api")
app.include_router(optimizer_router, prefix="/api")
app.include_router(playground_router, prefix="/api")
app.include_router(conversation_router, prefix="/api")
app.include_router(message_router, prefix="/api")
app.include_router(chat_router, prefix="/api")
app.include_router(analytics_router, prefix="/api")
app.include_router(settings_router, prefix="/api")
app.include_router(data_router, prefix="/api")


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "PromptOps AI Backend Running ",
    }