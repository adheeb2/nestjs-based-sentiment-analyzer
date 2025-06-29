from transformers import pipeline

classifier = pipeline("sentiment-analysis")


def analyze_text(text: str) -> dict:
    if not text.strip():
        return {"error": "input is empty"}
    result = classifier(text)[0]
    return {"label": result["label"], "confidence": round(result["score"] * 100, 2)}
