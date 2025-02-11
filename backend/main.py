from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from database import get_db
from models import RentTrend
from typing import List
from pydantic import BaseModel
import datetime

app = FastAPI()


# Pydantic model for API response
class RentTrendResponse(BaseModel):
    id: int
    neighborhood: str
    month: datetime.date
    average_rent: float

    class Config:
        from_attributes = True


# API endpoint to fetch rent trends
@app.get("/rentals", response_model=List[RentTrendResponse])
async def get_rent_trends(db: AsyncSession = Depends(get_db)):
    async with db as session:
        result = await session.execute(select(RentTrend))
        rent_trends = result.scalars().all()
        return rent_trends
