import torch
from PIL import Image
from transformers import CLIPProcessor, CLIPModel

clip_model = CLIPModel.from_pretrained('openai/clip-vit-base-patch16')
clip_processor = CLIPProcessor.from_pretrained('openai/clip-vit-base-patch16')

def get_image_embedding(image_path):
    image = Image.open(image_path)
    inputs = clip_processor(images=image, return_tensors="pt")
    outputs = clip_model.get_image_features(**inputs)
    return outputs.detach().numpy()
