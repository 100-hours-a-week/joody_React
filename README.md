## 💬 아무말 대잔치 — 커뮤니티 서비스

> 자유롭게 게시글을 작성하고, 댓글과 좋아요로 소통할 수 있는 커뮤니티 플랫폼  
> **React + Spring Boot 기반 Full-Stack 개인 프로젝트**

<br />

## 🛠 Tech Stack

| Category     | Tech                                                       |
| ------------ | ---------------------------------------------------------- |
| **Frontend** | React 18, React Router DOM, Styled-Components, Axios, Vite |

<br />

## ✨ 주요 기능

### 👤 회원

- 회원가입 (2단계: 이메일 인증 / 프로필 등록)
- 로그인 / 로그아웃 / JWT 인증 및 자동 로그인 유지
- 프로필 수정 (닉네임 / 비밀번호 / 프로필 이미지)
- Toast 알림 UI 적용

### 📝 게시글

- 게시글 생성 / 수정 / 삭제
- 단일 게시글 상세 조회
- 전체 게시글 리스트 + **무한 스크롤**
- 좋아요 / 댓글 기능
- 이미지 업로드(FormData)
- 제목 기반 검색 기능

<br />

## 📍 페이지 구조

| Route            | Description          |
| ---------------- | -------------------- |
| `/login`         | 로그인               |
| `/signup/step1`  | 이메일 인증          |
| `/signup/step2`  | 정보 입력            |
| `/postlist`      | 게시글 리스트        |
| `/post/:id`      | 게시글 상세          |
| `/post/write`    | 게시글 작성          |
| `/post/edit/:id` | 게시글 수정          |
| `/profile/edit`  | 닉네임 / 이미지 수정 |
| `/password/edit` | 비밀번호 수정        |

<br />

## 📂 프로젝트 구조

```bash
src
 ├── api               # API 요청 모듈
 ├── assets            # 이미지 및 정적 리소스
 ├── components
 │   └── common        # 공통 재사용 컴포넌트
 │       ├── buttons
 │       ├── form
 │       ├── header
 │       └── inputs
 │
 │   ├── Login
 │   ├── PasswordEdit
 │   ├── PostDetail
 │   ├── PostList
 │   ├── ProfileEdit
 │   └── Signup
 │
 ├── hooks             # Custom Hooks 상태 로직 분리
 ├── pages             # 각 라우트 페이지
 ├── styles            # styled-components 스타일
 ├── utils             # helpers & validator
 ├── App.jsx
 └── main.jsx
```

 <br />

## Custom Hooks

| Hook              | 역할                             |
| ----------------- | -------------------------------- |
| `usePostList`     | 게시글 리스트 / 무한스크롤 관리  |
| `usePostDetail`   | 상세 데이터 / 좋아요 / 댓글 관리 |
| `usePostWrite`    | 게시글 작성 폼 관리              |
| `useLoginForm`    | 로그인 폼 상태 및 유효성 검사    |
| `useProfileEdit`  | 프로필 수정                      |
| `usePasswordEdit` | 비밀번호 변경                    |
| `useDebounce`     | 디바운스 적용 (검색 최적화)      |
| `useThrottle`     | 스크롤 성능 최적화               |
| `useToast`        | 토스트 메시지 전역 관리          |

<br />

## 실행 방법

```bash
git clone https://github.com/100-hours-a-week/joody_front.git
npm install
npm run dev
```

<br />
