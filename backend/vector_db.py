import chromadb
from chromadb.config import Settings

# Initialize ChromaDB client with default settings
client = chromadb.Client(Settings())

# Create or get a collection for multimodal embeddings
collection = client.get_or_create_collection(name="multimodal_embeddings")

def add_embedding(id, embedding, metadata):
    collection.add(
        ids=[id],
        embeddings=[embedding],
        metadatas=[metadata]
    )

def query_embedding(query_embedding, n_results=5):
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )
    return results
