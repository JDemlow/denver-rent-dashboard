from fastapi import FastAPI
from routes import router

app = FastAPI()

# Register the routes
app.include_router(router)


@app.get("/")
async def root():
    return {"message": "API is running"}
