from sqlalchemy import Column, Integer, String, Date, DECIMAL
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class RentTrend(Base):
    __tablename__ = "rent_trends"

    id = Column(Integer, primary_key=True, index=True)
    neighborhood = Column(String(100), nullable=False)
    month = Column(Date, nullable=False)
    average_rent = Column(DECIMAL(10, 2), nullable=False)
