export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-=[\]{};':"\\|,.<>/?]).{8,}$/;
export const NICKNAME_REGEX = /^[^\s]{1,8}$/;

export const validateEmailValue = (value) => {
  const v = value.trim();
  if (!v) return "* 이메일을 입력해주세요.";
  if (!EMAIL_REGEX.test(v)) return "* 올바른 이메일 형식을 입력해주세요.";
  return ""; // 성공
};

export const validatePasswordValue = (value) => {
  const v = value.trim();
  if (!v) return "* 비밀번호를 입력해주세요.";
  if (/\s/.test(v)) return "* 비밀번호에는 공백을 포함할 수 없습니다.";
  if (!PASSWORD_REGEX.test(v))
    return "* 비밀번호는 대문자/소문자/숫자/특수문자를 모두 포함해야 합니다.";
  return "";
};

export const validatePasswordCheckValue = (password, value) => {
  const v = value.trim();
  if (!v) return "* 비밀번호를 한번 더 입력해주세요.";
  if (password !== v) return "* 비밀번호가 다릅니다.";
  return "";
};

export const validateNickname = (value) => {
  if (!value.trim()) return "* 닉네임을 입력해주세요.";
  if (!NICKNAME_REGEX.test(value))
    return "* 닉네임은 공백 없이 1~8자까지 입력 가능합니다.";
  return "";
};
