# 데이터 리터러시 랩 (Data Literacy Lab)

**고등학생 대상 데이터 리터러시 교육 플랫폼** — 8개 모듈, 30개 레슨으로 구성된 인터랙티브 학습 프로젝트입니다.
시험 대비 요약노트(`study.html`)와 모의고사(`test.html`)를 포함합니다.

---

## 📂 주요 파일

| 파일 | 위치 | 설명 |
|------|------|------|
| `study.html` | `data-literacy-lab-master/` | 시험 대비 요약노트 (Module 1~6, PDF 저장 기능 포함) |
| `test.html` | `data-literacy-lab-master/` | 30문항 객관식 모의고사 (5지선다, 정답·해설 포함) |
| `index.html` | `data-literacy-lab-master/` | 메인 앱 진입점 (React SPA) |

### study.html — 시험 대비 요약노트

Module 1-1 ~ 6-4 전 범위를 고등학생 눈높이에 맞게 정리한 단독 HTML 파일입니다.

- Module별 색상 구분 및 빠른 이동 버튼
- 핵심 개념을 표·비교 카드·수식 박스·경고 박스로 시각화
- 상관계수 r 시각 척도, IQR 이상치 공식, 차트 선택 결정 트리 포함
- 하단 **시험 직전 최종 체크리스트** 17개 항목
- **PDF 저장 버튼** — 클릭 후 브라우저 인쇄 → "PDF로 저장" 선택

> PDF 출력 시 인쇄 설정에서 **"배경 그래픽 인쇄"** 옵션을 켜야 색상이 유지됩니다.

### test.html — 모의고사

Module 1~6 범위 30문항 5지선다 시험지입니다. 별도 서버 없이 브라우저에서 바로 사용 가능합니다.

- 정답 및 해설이 텍스트로 포함되어 있어 한글(HWP) 등에 붙여넣기 편리
- 모듈별 5문항씩 균등 배분

---

## 📚 커리큘럼 (8개 모듈 · 30개 레슨)

| 모듈 | 제목 | 레슨 수 | 주요 내용 |
|------|------|--------|-----------|
| **1** | 데이터란 무엇인가 | 3 | 일상 속 데이터, 데이터 유형, 데이터 품질 |
| **2** | 질문을 설계하라 | 3 | 궁금증→데이터 질문, 좋은 질문 4조건, 설문 설계 |
| **3** | 데이터는 어디서 오는가 | 3 | 모집단·표본, 편향 3종류, 설문 품질 |
| **4** | 데이터 탐색하기 | 4 | 테이블 읽기, 기술통계, 패턴 발견, 이상치 |
| **5** | 시각화로 이야기하기 | 4 | 차트 읽기·선택·제작, 차트 조작 탐지 |
| **6** | 분석하고 검증하기 | 4 | 상관계수, 상관/인과, 집단 비교, 결과 검증 |
| **7** | AI 활용과 데이터 윤리 | 4 | AI 프롬프팅, 데이터 윤리, 스토리텔링 |
| **8** | 미니 ML 실험실 | 4 | ML 개념, 분류·회귀 체험, 브라우저 Python |

---

## 🛠 기술 스택

- **React 19** + **Vite 6**
- **React Router 7** (라우팅)
- **Zustand** (학습 진도 상태, localStorage 저장)
- **Tailwind CSS 4** (스타일)
- **Plotly.js** (데이터 시각화)
- **Pyodide** (브라우저 내 Python 실행, Module 8 ML 실습용)

---

## 📁 폴더 구조

```
data-literacy-project/
├── README.md
└── data-literacy-lab-master/
    ├── study.html                 # 시험 대비 요약노트 (단독 실행)
    ├── test.html                  # 30문항 모의고사 (단독 실행)
    ├── index.html                 # React 앱 진입점
    ├── package.json
    ├── vite.config.js
    ├── vercel.json
    ├── public/
    │   ├── favicon.svg
    │   └── data/
    │       ├── school_survey_200.csv   # 학교 설문 샘플 데이터
    │       └── seoul_temperature.csv  # 서울 기온 시계열 데이터
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── data/
        │   └── lessonRegistry.js      # 모듈·레슨 메타데이터
        ├── hooks/
        │   └── usePyodide.js          # Pyodide Python 실행 훅
        ├── stores/
        │   └── progressStore.js       # 학습 진도 상태 관리
        ├── pages/
        │   ├── Home.jsx
        │   ├── LessonPage.jsx
        │   └── TeachingMaterialsPage.jsx
        ├── components/
        │   ├── common/                # 재사용 UI 컴포넌트
        │   ├── layout/                # 앱 레이아웃
        │   └── interactive/           # 인터랙티브 학습 위젯
        └── lessons/
            ├── module1/ ~ module8/    # 레슨 JSX 컴포넌트 (67개)
```

---

## 🚀 실행 방법

```bash
cd data-literacy-lab-master
npm install
npm run dev
# → http://localhost:4010
```

```bash
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

> `study.html`과 `test.html`은 별도 빌드 없이 브라우저에서 바로 열어 사용할 수 있습니다.

---

## 📄 배포

`vercel.json` 포함 — Vercel에 바로 배포 가능합니다.
