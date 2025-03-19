from django.http import JsonResponse
import numpy as np
import pandas as pd
import os
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# ✅ Base directory setup
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ✅ Corrected paths to point one level up (parent folder)
df = pd.read_csv(os.path.join(BASE_DIR, '..', 'sap_dataset_with_summary.csv'))
embeddings = np.load(os.path.join(BASE_DIR, '..', 'resume_embeddings.npy'))

# ✅ Load the model once
model = SentenceTransformer('all-MiniLM-L6-v2')

def search_resumes(request):
    query = request.GET.get('query', '')
    if not query:
        return JsonResponse({'error': 'No query provided'}, status=400)

    # ✅ Encode the query dynamically
    query_vector = model.encode([query])

    # ✅ Calculate cosine similarity dynamically
    similarities = cosine_similarity(query_vector, embeddings)

    # ✅ Get top 5 similar candidates dynamically
    top_indices = np.argsort(similarities[0])[::-1][:2]

    results = []
    for idx in top_indices:
        results.append({
            'name': df.iloc[idx]['Name'],
            'job': df.iloc[idx]['Job_Category'],
            'skills': df.iloc[idx]['Skills'],
            'summary': df.iloc[idx]['Resume_Text']  # ✅ Use the correct resume text column
        })

    return JsonResponse({'results': results})
