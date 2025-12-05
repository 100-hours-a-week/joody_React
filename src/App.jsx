import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupStep1Page from "./pages/SignupStep1Page";
import SignupStep2Page from "./pages/SignupStep2Page";
import PostListPage from "./pages/PostListPage";
import ProfileEditPage from "./pages/ProfileEditPage";

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
        <Route path="/profileEdit" element={<ProfileEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
