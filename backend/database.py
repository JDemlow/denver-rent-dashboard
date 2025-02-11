from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get DATABASE_URL from .env
DATABASE_URL = os.getenv("DATABASE_URL")

# Check if it loaded correctly
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in .env file")
# ✅ Use async engine
engine = create_async_engine(DATABASE_URL, echo=True)

# ✅ Create async session
SessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    autocommit=False,
    autoflush=False,
)


# ✅ Dependency to get DB session
async def get_db():
    async with SessionLocal() as session:
        yield session
