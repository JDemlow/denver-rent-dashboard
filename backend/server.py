from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from the frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Sample rent data
rent_data = [
    {"month": "Jan", "price": 1800, "neighborhood": "Downtown"},
    {"month": "Feb", "price": 1850, "neighborhood": "Downtown"},
    {"month": "Mar", "price": 1900, "neighborhood": "Downtown"},
    {"month": "Apr", "price": 2000, "neighborhood": "Downtown"},
    {"month": "May", "price": 2100, "neighborhood": "Downtown"},
    {"month": "Jun", "price": 2200, "neighborhood": "Downtown"},
    {"month": "Jan", "price": 1500, "neighborhood": "Capitol Hill"},
    {"month": "Feb", "price": 1550, "neighborhood": "Capitol Hill"},
    {"month": "Mar", "price": 1600, "neighborhood": "Capitol Hill"},
    {"month": "Apr", "price": 1700, "neighborhood": "Capitol Hill"},
    {"month": "May", "price": 1750, "neighborhood": "Capitol Hill"},
    {"month": "Jun", "price": 1800, "neighborhood": "Capitol Hill"},
]


@app.get("/rentals", response_model=List[dict])
def get_rentals():
    return rent_data
