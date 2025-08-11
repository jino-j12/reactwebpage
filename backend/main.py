from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

messages = []

@app.post("/api/contact")
async def contact(request: Request):
    data = await request.json()
    messages.append(data)
    print("📩 New message received:", data)  # This will print to your terminal
    return {"message": "Message received!"}

@app.get("/messages")
async def get_messages():
    return messages
