import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupStep1Page from "./pages/SignupStep1Page";
import SignupStep2Page from "./pages/SignupStep2Page";
import PostListPage from "./pages/PostListPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import PasswordEditPage from "./pages/PasswordEditPage";
import PostWritePage from "./pages/PostWritePage";
import PostEditPage from "./pages/PostEditPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* 기본 주소 → 로그인으로 이동 */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 로그인 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 회원가입 Step1 */}
        <Route path="/signup/step1" element={<SignupStep1Page />} />

        {/* 회원가입 Step2 */}
        <Route path="/signup/step2" element={<SignupStep2Page />} />

        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/password/edit" element={<PasswordEditPage />} />

        <Route path="/post/write" element={<PostWritePage />} />
        <Route path="/post/edit/:postId" element={<PostEditPage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
