import { memo } from "react";
import { SearchBox } from "../../styles/postlist/postlistLayout.style";

function SearchInput({ keyword, setKeyword }) {
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <SearchBox>
      <input
        value={keyword}
        onChange={handleChange}
        placeholder="검색어를 입력하세요."
      />
      <img src="/img/search_btn.svg" alt="search" />
    </SearchBox>
  );
}

export default memo(SearchInput);
