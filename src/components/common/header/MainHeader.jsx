import { useEffect, useState, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchUserProfile } from "../../../api/user";
import {
  PostHeaderWrapper,
  BackLink,
  BackIcon,
  HeadTitle,
  HeaderLogo,
  ProfileMenu,
  ProfileImg,
  DropdownMenu,
  DropdownItem,
} from "../../../styles/header/mainHeader.style";

function MainHeader() {
  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState("/img/original_profile.png");
  const navigate = useNavigate();
  const location = useLocation(); // ⭐ 현재 URL 경로

  const toggleDropdown = () => setOpen((prev) => !prev);

  // 🎯 로그인 유저 프로필 불러오기
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    async function loadProfile() {
      try {
        const res = await fetchUserProfile(userId);
        const imgUrl = res.data.profileImage;

        const finalUrl = imgUrl
          ? imgUrl.startsWith("http")
            ? imgUrl
            : `http://localhost:8080${imgUrl}`
          : "/img/original_profile.png";

        setProfileImg(finalUrl);
        localStorage.setItem("profileImage", finalUrl);
      } catch (err) {
        console.log("프로필 불러오기 실패:", err);
      }
    }

    loadProfile();
  }, []);

  useEffect(() => {
    function updateProfileImg() {
      const saved = localStorage.getItem("profileImage");
      if (saved) setProfileImg(saved);
    }

    updateProfileImg(); // 초기 로드

    window.addEventListener("profileImageUpdated", updateProfileImg);

    return () => {
      window.removeEventListener("profileImageUpdated", updateProfileImg);
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const isPostListPage = location.pathname === "/postlist";

  return (
    <PostHeaderWrapper>
      {/* 🔙 뒤로가기 버튼 (PostList 페이지에서는 숨김) */}
      {!isPostListPage && (
        <BackLink
          onClick={() => {
            if (location.pathname.startsWith("/post/")) {
              navigate("/postlist"); // 수정 페이지라면 바로 postlist 이동
            } else {
              navigate(-1); // 그 외는 원래 뒤로가기
            }
          }}
        >
          <BackIcon src="/img/back.png" alt="뒤로가기" />
        </BackLink>
      )}

      <HeadTitle>
        <HeaderLogo src="/img/logo.png" alt="아무 말 대잔치 로고" />
      </HeadTitle>

      <ProfileMenu>
        <ProfileImg
          src={profileImg}
          alt="프로필 이미지"
          onClick={toggleDropdown}
        />

        <DropdownMenu open={open}>
          <DropdownItem onClick={() => navigate("/profile/edit")}>
            회원정보수정
          </DropdownItem>
          <DropdownItem onClick={() => navigate("/password/edit")}>
            비밀번호수정
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
        </DropdownMenu>
      </ProfileMenu>
    </PostHeaderWrapper>
  );
}

export default memo(MainHeader);
