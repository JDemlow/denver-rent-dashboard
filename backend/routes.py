from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from database import get_db
from models import RentTrend  # Corrected import

router = APIRouter()


@router.get("/rentals")
async def get_rentals(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(RentTrend))  # Corrected model name
    rentals = result.scalars().all()
    return rentals
