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

## 📂 Folder Structure

sentiment_analyzer/ # ✅ Git repo root
│
├── app/ # 🧠 Python ML microservice
│ ├── **init**.py # (optional)
│ ├── sentiment.py # contains analyze_sentiment logic
│ ├── main.py # CLI/entry script to be called from NestJS
│ └── requirements.txt # Python dependencies (transformers, etc.)
│
├── backend/ # ⚙️ NestJS API server
│ ├── src/
│ │ ├── main.ts # NestJS entry point
│ │ ├── app.module.ts # Root module
│ │ └── modules/
│ │ └── sentiment/
│ │ ├── sentiment.controller.ts
│ │ ├── sentiment.service.ts
│ │ └── dto/ # (Optional: for validation schemas)
│ ├── test/ # Default test setup
│ ├── package.json
│ ├── tsconfig.json
│ └── nest-cli.json
│
├── venv/ # 🐍 Python virtual environment (not tracked)
│ └── bin/, lib/, etc.
│
├── .gitignore # Ignore unneeded files
├── README.md # SEO-rich project overview
└── LICENSE # Open source license (MIT, etc.)
Z
