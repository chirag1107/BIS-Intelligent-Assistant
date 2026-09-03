import os
import sys

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    print("=" * 65)
    print("BIS Intelligent Assistant - FastAPI Backend")
    print(f"Listening on http://localhost:{port}")
    print("Architecture: FastAPI + LlamaIndex + ChromaDB + Gemini + ReportLab")
    print(f"Swagger API Docs: http://localhost:{port}/docs")
    print("=" * 65)
    uvicorn.run("backend.main:app", host=host, port=port, reload=False)
