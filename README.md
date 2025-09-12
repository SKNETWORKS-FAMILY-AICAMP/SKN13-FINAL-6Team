# NAVI: 사내 업무 어시스턴트

## 팀 명 : 💊💊Dopamine
| 팀장 | 팀원 | 팀원 | 팀원 | 팀원 |
|------|------|------|------|------|
| <img src="./images/1.png" width="100" height="100"> <br> 최성장 [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/GrowingChoi) | <img src="./images/2.png" width="100" height="100"> <br> 고범석 [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/qjazk0000) | <img src="./images/3.png" width="100" height="100"> <br> 지형우 [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/JI0617) | <img src="./images/4.png" width="100" height="100"> <br> 김동욱 [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/boogiewooki02) | <img src="./images/5.png" width="100" height="100"> <br> 안수민 [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/tnalsdk111) | 

---

# 프로젝트 개요

## 📖 소개
<img width="444" height="312" alt="image" src="https://github.com/user-attachments/assets/6b6ea757-34b7-46e3-91b7-1476c9d2b9ae" />


**NAVI**는 사내 임직원들을 위한 **문서 기반 업무 지원 LLM 챗봇 서비스**입니다.  
사내 내규 질문, 영수증 처리와 같이 반복적인 사무 업무를 자동화하여  
**편의성과 조직 전체의 생산성**을 높이는 것을 목표로 합니다.  

NAVI는 텍스트, 이미지, 문서 파일 등 다양한 입력 형식을 지원하며,  
LLM 기반 자연어 처리 기술과 벡터 데이터베이스를 활용하여  
정확하고 신속한 업무 지원을 제공합니다.

---

## 💡 주제 선정 배경
<img width="513" height="313" alt="image" src="https://github.com/user-attachments/assets/e5162ca5-9959-432d-b43f-30cc288d01ca" />

1. **업무 효율성 및 생산성 향상 필요성**
→ 신속한 정보 제공을 통한 업무 시간 단축

2. **일관된 정보 제공의 중요성**
→ 정확한 정보 제공을 통한 업무 처리 일관성 유지
 
3. **24시간 지속적인 업무 지원 필요**
→ 근무 시간 외 긴급한 업무 문의에 대한 대처

4. **신규 입사자 온보딩 과정 효율화**
→ 기존 신입 사원 교육 과정에서 모든 내규와 업무 프로세스를 전수하는 데 한계

---

## 🎯 목표
- **사내 문서 기반 LLM 챗봇** 구축
- **임직원 지원형 비용 처리(영수증 등록) 서비스** 구현
- 반복적인 사무 업무의 효율성 향상

---

## 기술 스택 구성


| **Frontend** | **Backend** | **Model** | **DB** | **Vector DB** | **Deployment** | **Collaboration Tool** |
|--------------|-------------|-----------|--------|---------------|----------------|-------------------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A)<br>![Vercel](https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | ![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)<br>![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)<br>![LangChain](https://img.shields.io/badge/-LangChain-1E90FF?style=for-the-badge&logo=chainlink&logoColor=white)<br>![Django](https://img.shields.io/badge/-Django-092E20?style=for-the-badge&logo=django&logoColor=white)<br>![HuggingFace](https://img.shields.io/badge/-HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black) | ![Upstage](https://img.shields.io/badge/-Upstage-20232A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlVwc2F0ZTwvdGl0bGU+PHBhdGggZD0iTTE5Ljc2MyAwbC0uMzczIDEuMjk3aDIuNTk0TDIyLjM1NCAwaC0yLjU5MXpNMTYuMTkyIDIuMjdsLS4zNzYgMS4yOThoNS41MmwuMzctMS4yOThoLTUuNTE0ek0xMi44OTcgNC41NGwtLjM3NiAxLjI5OGg4LjE2NmwuMzctMS4yOThoLTguMTZ6TTIuODUgNi44MWwtLjM3NyAxLjI5OGgxNy41NjVsLjM3LTEuMjk3SDIuODQ4ek0zLjg4NCA5LjA4MWwtLjM3NiAxLjI5N0gxOS4zOWwuMzctMS4yOTdIMy44ODJ6TTQuMDg4IDI0bC4zNzYtMS4yOTdIMS44NjZMMS41IDI0aDIuNTg4ek03LjY2MiAyMS43M2wuMzc2LTEuMjk3SDIuNTE1TDIuMTUgMjEuNzNoNS41MTN6TTEwLjk1NyAxOS40NTlsLjM3Ni0xLjI5N2gtOC4xN2wtLjM2NiAxLjI5N2g4LjE2ek0yMS4wMDUgMTcuMTg5bC4zNzYtMS4yOTdIMy44MTJsLS4zNjYgMS4yOTdoMTcuNTU5ek0xOS45NjcgMTQuOTE5bC4zNzYtMS4yOTdINC40NjFsLS4zNjYgMS4yOTdoMTUuODcyek0xOC43ODYgMTIuNjQ5bC4zNzYtMS4yOTdINC4yNmwtLjM2NiAxLjI5N2gxNC44OTN6IiBmaWxsPSJ1cmwoI2xvYmUtaWNvbnMtdXBzYXRlLWZpbGwpIj48L3BhdGg+PGRlZnM+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibG9iZS1pY29ucy11cHNhdGUtZmlsbCIgeDE9IjExLjkyNyIgeDI9IjExLjkyNyIgeTI9IjI0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNBRUJDRkUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MDVERkEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=) <br>![GPT-4o](https://img.shields.io/badge/-GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white) | ![AWS S3](https://img.shields.io/badge/-AWS_S3-569A31?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMTZMNDEgMTZMNDggMzJMMjMgMzJaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yMyAzMkw0OCAzMkw0OCA0OEwyMyA0OFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE2IDE2TDIzIDMyTDIzIDQ4TDE2IDMyWk0zMiAzMkw0OCAzMkw0OCA0OEwzMiA0OFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+) <br>![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)<br>![AWS RDS](https://img.shields.io/badge/-AWS_RDS-527FFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSBjeD0iMzIiIGN5PSIyMCIgcng9IjE4IiByeT0iNiIgZmlsbD0id2hpdGUiLz48ZWxsaXBzZSBjeD0iMzIiIGN5PSIzMiIgcng9IjE4IiByeT0iNiIgZmlsbD0id2hpdGUiLz48ZWxsaXBzZSBjeD0iMzIiIGN5PSI0NCIgcng9IjE4IiByeT0iNiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=) | ![Qdrant](https://img.shields.io/badge/-Qdrant-FF4D4D?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+PGxpbmUgeDE9IjQ4IiB5MT0iNDgiIHgyPSI1NiIgeTI9IjU2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz48L3N2Zz4=) | ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) <br>![AWS EC2](https://img.shields.io/badge/-AWS_EC2-FF9900?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcng9IjQiIHJ5PSI0IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) <br>![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white) | ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)<br>![Discord](https://img.shields.io/badge/-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)<br>![Notion](https://img.shields.io/badge/-Notion-000000?style=for-the-badge&logo=notion&logoColor=white) |



<br><br>


## 🛠 시스템 구성<br/>
```
SKN13-FINAL-6TEAM/
├── backend/                            # 백엔드 서버
│   ├── adminapp/                      # 관리자 기능 앱
│   ├── authapp/                       # 로그인, 권한 관련 앱
│   ├── chatbot/                       # RAG 앱
│   │   └── services/
│   │       ├── answerer.py           # LLM 기반 RAG 답변 생성 및 품질 평가 모듈
│   │       ├── api.py                # RAG 시스템용 Django REST API 엔드포인트
│   │       ├── constants.py          # RAG 시스템 전역 상수 및 메타데이터 정의
│   │       ├── filters.py            # 도메인/타입/최신성 기반 Qdrant 검색 필터
│   │       ├── keyword_extractor.py  # LLM 및 정규식 기반 질문 키워드 추출기
│   │       ├── pipeline.py           # RAG 전체 파이프라인 및 워크플로우 관리
│   │       ├── rag_indexer.py        # 문서 임베딩 및 Qdrant 인덱싱
│   │       ├── rag_search.py         # 고급 RAG 검색 및 하이브리드 검색 엔진
│   │       └── rag_service.py        # RAG 환경설정, 프롬프트, 클라이언트/임베딩 관리
│   ├── receipt/                       # 영수증 처리 앱
│   │       └── utils.py              # 이미지 전처리 / 텍스트 추출
│   ├── documents/kisa_pdf            # 한국인터넷진흥원 사내규정
│   └── Dockerfile
│
├── frontend/                           # 프론트엔드 클라이언트
│   ├── public/
│   └── src/
│       ├── pages/        
│       │    ├── Admin/
│       │    ├── Chat/
│       │    ├── Login/
│       │    └── MyPage/
│       └── services/                  # API 서비스
└── docker-compose.yml                 # Docker Compose 설정
```
### 🖥️ 인터페이스 (Frontend)
- 단일 채팅창 기반 UI 제공  
- 텍스트 입력 및 파일 업로드(이미지, 문서 등) 지원  
- 응답 텍스트 및 파일(PDF 등) 제공  
- **기술 스택:** React.js, Tailwind CSS  



### 서버 (Backend)
- 입력 데이터 분기 및 체인 라우팅 (텍스트 / 이미지 / 문서)  
- 사용자 요청 처리 및 데이터베이스 저장  
- 인증 및 권한 관리  
- **기술 스택:** Django, LangChain, Uvicorn, Gunicorn, Nginx  

### 관계형 데이터베이스
- 사용자 정보 저장  
- 대화 내용 저장  
- 대화방 메타데이터 저장 (제목, 생성 시간 등)  
- 영수증 파일 저장  
- **기술 스택:** PostgreSQL (AWS RDS)  

### 벡터 데이터베이스
- 사내 문서 임베딩 벡터 저장  
- 유사 문서 검색 수행  
- **기술 스택:** Qdrant (Docker 기반 실행)  

### AI 모델
- **GPT-4o (LLM)** – 사용자 입력에 대한 자연어 응답 생성  
- **Upstage A.X-4.0-VL-Light (OCR)** – 이미지 내 텍스트 추출  
- **nlpai-lab/KoE5 (임베딩)** – 문서 벡터화 및 Qdrant 저장  

### 배포 환경
- AWS EC2 – Backend 및 DB 서비스 운영  
- Vercel – Frontend 배포 및 CI/CD  
- Docker – Qdrant 및 서버 컨테이너 실행  

---

## 시연 영상
![middle_video](https://github.com/user-attachments/assets/9e90b412-9a4a-466f-bd70-dcb94a0ad040)





## 🚨 데이터 보존 주의사항

**절대 `docker compose down -v` 사용하지 말 것!** 이 옵션은 볼륨을 삭제하여 Qdrant 데이터가 영구 손실됩니다.

데이터는 `./qdrant_storage`(스토리지) / `./qdrant_snapshots`(스냅샷)에 보관됩니다.

## 🚀 기동/중단

- **기동**: `make up`  
- **중단(데이터 보존)**: `make down`

## 📊 상태 확인

**Qdrant**: `curl -s http://localhost:6333/collections | jq .`

## 💾 스냅샷/복구

- **스냅샷**: `make snap`  
- **복구**: `make restore location=/qdrant/snapshots/<your-snapshot>.snapshot`

## 🔧 컬렉션 초기화

백엔드가 자동 보장(`python manage.py qdrant_init`), 필요 시 수동 실행 가능

---

## 📞 Q&A
- **문의**: LLM과 RAG 기반 NAVI에 대한 궁금증은 GitHub Issues로 남겨주세요.
