# 🧠 Sentiment Analyzer API – NestJS + Python (Transformers)

A robust backend **AI-powered Sentiment Analyzer API** built using **NestJS (Node.js)** and **Python (HuggingFace Transformers)**. This microservice provides a RESTful API that analyzes the sentiment of input text and returns whether it's **positive or negative**, along with a confidence score.

> 🔧 This is a **backend-only project** — it is ready to be consumed by any frontend application, mobile app, or other APIs. Easily extensible into a fullstack AI app.

---

## 🚀 Features

- 🔬 **Natural Language Processing (NLP)** using Transformers
- 🧠 HuggingFace model: `distilbert-base-uncased-finetuned-sst-2-english`
- ⚙️ Python + NestJS integration via `child_process`
- 🌐 REST API ready to plug into any client (Postman, web app, mobile)
- 🧪 Testable and modular code architecture
- 📁 Clean monorepo structure: `backend/` (NestJS) and `app/` (Python)

---

## 🧰 Tech Stack

| Layer       | Technology                                                         |
| ----------- | ------------------------------------------------------------------ |
| API Server  | [NestJS](https://nestjs.com/)                                      |
| ML Engine   | [Transformers (HuggingFace)](https://huggingface.co/transformers/) |
| Language    | TypeScript + Python                                                |
| Integration | `child_process` and `exec`                                         |
| Virtual Env | `venv` for Python isolation                                        |

---

## 🧪 Sample Usage via Postman

- **Method:** `POST`
- **Endpoint:** `http://localhost:3000/sentiment`
- **Body (JSON):**

```json
{
  "text": "I absolutely love this project!"
}
```

## Response

```json
{
  "label": "POSITIVE",
  "confidence": 99.87
}
```

---

## 🧠 Example Use Cases

- 📝 Product review scoring

- 💬 Social media sentiment analysis

- 📢 Marketing feedback monitoring

- 🧾 Customer support mood detection

---

## 👨‍💻 Author

## Made with 💻 by Adheeb Anvar
