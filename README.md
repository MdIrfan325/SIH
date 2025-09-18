# Multimodal RAG System (Gemini API)

## Overview
A unified platform for semantic search and grounded generation across text (PDF/DOCX), images, and audio. Powered by FastAPI backend, React frontend, ChromaDB, CLIP, Whisper, and Gemini API.

## Features
- Multimodal ingestion: PDF/DOCX, images, audio
- Semantic & cross-modal search
- Unified chat/search interface
- Citation transparency (expandable details)
- Gemini API for LLM

## Structure
- `backend/` — FastAPI server, ingestion modules, Gemini API integration
- `frontend/` — React app for chat/search UI
- `.github/copilot-instructions.md` — Project instructions

## Getting Started
1. Install Python dependencies in `backend/`:
   - `pip install fastapi uvicorn chromadb python-docx pdfplumber pillow transformers torch openai-whisper`
2. Install Node dependencies in `frontend/`:
   - `npm install`
3. Start FastAPI backend:
   - `uvicorn backend.main:app --reload`
4. Start React frontend:
   - `npm start` (from `frontend/`)

## Usage
- Use the chat/search box to type queries or upload files (PDF/DOCX, images, audio)
- Results include answers with expandable citations showing source and metadata

## Testing
- Test ingestion by uploading sample files
- Test semantic search with queries across modalities
- Verify citation links and metadata expansion

## Next Steps
- Integrate Gemini API (replace placeholder)
- Add authentication and advanced analytics (optional)