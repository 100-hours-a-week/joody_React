import { memo } from "react";
import {
  PostPageWrapper,
  WritePostButton,
} from "../../styles/postlist/postlistLayout.style";

function PostListLayout({ onWrite }) {
  return (
    <PostPageWrapper>
      <WritePostButton onClick={onWrite}>
        <img src="/img/writing_btn.png" alt="write" className="btn-icon" />
      </WritePostButton>
    </PostPageWrapper>
  );
}

export default memo(PostListLayout);
