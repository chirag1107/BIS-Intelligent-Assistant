import os
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from backend.rag_engine import bis_rag_engine, STANDARDS_CORPUS
from backend.pdf_generator import generate_bis_compliance_pdf

load_dotenv()

app = FastAPI(
    title="BIS Intelligent Assistant API",
    description="Full-stack AI compliance API powered by FastAPI, LlamaIndex, ChromaDB, Gemini 1.5 Flash, and ReportLab for Smart India Hackathon (SIH 2026).",
    version="1.0.0"
)

# Enable CORS for Next.js frontend (localhost:3000) and standalone HTML clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class ChatRequest(BaseModel):
    message: str = Field(..., description="User query describing product or requirement")
    language: str = Field("en", description="Language code: en, hi, or mr")
    session_id: Optional[str] = Field(None, description="Optional conversation session ID")

class ChatResponse(BaseModel):
    text: str
    product_name: str
    standard: str
    standard_full: str
    scheme: str
    mandatory: bool
    category: str
    testing: List[str]
    documents: List[str]
    process: str
    sources: Dict[str, str]
    checklist: List[Dict[str, Any]]
    engine: str

class ReportRequest(BaseModel):
    product_name: Optional[str] = "Domestic Electrical / Consumer Product"
    standard: Optional[str] = "IS 302-2-15"
    standard_full: Optional[str] = "IS 302-2-15: Safety of household electrical appliances"
    scheme: Optional[str] = "Scheme-I (ISI Mark)"
    mandatory: Optional[bool] = True
    testing: Optional[List[str]] = None
    documents: Optional[List[str]] = None
    process: Optional[str] = None
    source_url: Optional[str] = "https://www.manakonline.in"

@app.get("/api/health")
def health_check():
    """Health check endpoint confirming API, ChromaDB, and Gemini connection."""
    return {
        "status": "healthy",
        "service": "BIS Intelligent Assistant API",
        "chromadb_collection_size": bis_rag_engine.collection.count(),
        "gemini_active": bis_rag_engine.has_gemini,
        "engine": "FastAPI + LlamaIndex + ChromaDB + Gemini 1.5 Flash + ReportLab"
    }

@app.get("/api/standards")
def list_standards():
    """Lists all indexed Bureau of Indian Standards specifications."""
    return {
        "count": len(STANDARDS_CORPUS),
        "standards": [
            {
                "id": item["id"],
                "name": item["name"],
                "standard": item["standard"],
                "scheme": item["scheme"],
                "mandatory": item["mandatory"],
                "category": item["category"]
            }
            for item in STANDARDS_CORPUS
        ]
    }

@app.post("/api/chat", response_model=ChatResponse)
def chat_endpoint(req: ChatRequest):
    """
    RAG endpoint: Queries ChromaDB vector store and Gemini 1.5 Flash
    to return comprehensive statutory BIS compliance guidance.
    """
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="Query message cannot be empty")

    result = bis_rag_engine.query(user_query=req.message, language=req.language)
    return result

@app.post("/api/generate-report")
def generate_report_endpoint(req: ReportRequest):
    """
    ReportLab PDF generator endpoint: Produces publication-grade official
    Bureau of Indian Standards compliance advisory reports.
    """
    try:
        report_data = req.model_dump()
        pdf_bytes = generate_bis_compliance_pdf(report_data)
        safe_filename = req.product_name.replace(" ", "_").replace("/", "-")
        
        return Response(
            content=pdf_bytes,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f'attachment; filename="BIS_Compliance_{safe_filename}.pdf"',
                "Access-Control-Expose-Headers": "Content-Disposition"
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate PDF: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    print(f"🚀 Starting BIS Intelligent Assistant Backend on http://{host}:{port}")
    uvicorn.run("backend.main:app", host=host, port=port, reload=True)
