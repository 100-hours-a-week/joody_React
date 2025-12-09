import { useEffect, useState, useRef, useCallback } from "react";
import {
  fetchComments,
  createComment,
  editComment,
  deleteComment,
} from "../api/comment";
import { fetchPostDetail, deletePostApi } from "../api/post";
import { toggleLike } from "../api/like";
import { canEditComment, canEditPost } from "../../utils/permissions";

export function usePostDetail(postId) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [commentValue, setCommentValue] = useState("");

  const [modals, setModals] = useState({
    postDeleteOpen: false,
    commentDeleteOpen: false,
    targetCommentId: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isFetched = useRef(false);
  const likePendingRef = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    async function init() {
      const userId = localStorage.getItem("userId");

      try {
        setLoading(true);

        const [postRes, commentsRes] = await Promise.all([
          fetchPostDetail(postId, userId),
          fetchComments(postId),
        ]);

        console.log("📌 postRes =", postRes);
        console.log("📌 commentsRes =", commentsRes);

        if (!postRes?.ok) throw new Error("게시글 정보를 불러오지 못했습니다.");
        if (!commentsRes?.ok)
          throw new Error("댓글 정보를 불러오지 못했습니다.");

        const postData = postRes.data || {};
        const formattedPost = {
          ...postData,
          likes:
            postData.likes ??
            postData.likeCount ??
            postData.like_count ??
            postData.like ?? // 서버 필드 변형 대응
            0,
          views:
            postData.views ??
            postData.viewCount ??
            postData.view_count ??
            postData.view ??
            0,
          commentCount:
            postData.commentCount ??
            postData.comment_count ??
            postData.comments ??
            0,
          editable: canEditPost(postData.authorId),
        };

        const likedValue =
          postData.liked ??
          postData.isLiked ??
          postData.likedByUser ??
          postData.likeStatus ??
          false;

        setPost(formattedPost);
        setLiked(Boolean(likedValue));

        const rawComments =
          commentsRes.data?.data?.content ?? commentsRes.data?.content ?? [];

        if (!Array.isArray(rawComments)) {
          throw new Error("댓글 데이터 형식이 올바르지 않습니다.");
        }

        const formattedComments = rawComments.map((c) => ({
          ...c,
          editable: canEditComment(c.authorId),
        }));

        setComments(formattedComments);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [postId]);

  // 게시글 삭제
  const handleDeletePost = async () => {
    try {
      const { ok } = await deletePostApi(postId);
      if (!ok) return;

      window.location.href = "/postlist";
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
    } finally {
      closeDeleteModals();
    }
  };

  // 댓글 작성 & 수정
  const handleCommentSubmit = async (text, reset) => {
    const userId = localStorage.getItem("userId");
    if (!text || !userId) return;

    // 수정
    if (isEditing) {
      const { ok } = await editComment(postId, editingId, text);
      if (!ok) return;

      setComments((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? { ...c, content: text, updatedAt: new Date().toISOString() }
            : c
        )
      );

      reset(); // CommentInput 내부 state 초기화
      setIsEditing(false);
      setEditingId(null);
      return;
    }

    // 등록
    const { ok, data } = await createComment(postId, userId, text);
    if (!ok) return;

    const newComment = {
      id: data.comment_id,
      authorNickname: localStorage.getItem("nickname") || "익명",
      authorProfileImage:
        localStorage.getItem("profileImage") || "./img/profile.png",
      content: text,
      createdAt: new Date().toISOString(),
      authorId: Number(userId),
    };

    setComments((prev) => [newComment, ...prev]);
    setPost((prev) => ({
      ...prev,
      commentCount: prev.commentCount + 1,
    }));

    reset(); //  입력창 초기화
    setIsEditing(false);
    setEditingId(null);
  };

  // const resetCommentState = () => {

  //   setIsEditing(false);
  //   setEditingId(null);
  // };

  // 댓글 수정
  const handleEditComment = useCallback((id) => {
    const target = comments.find((c) => c.id === id);
    if (!target) return;

    setCommentValue(target.content);
    setIsEditing(true);
    setEditingId(id);
  });

  // 댓글 삭제

  const handleDeleteComment = useCallback(async () => {
    const id = modals.targetCommentId;
    const { ok } = await deleteComment(postId, id);

    if (ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));

      setPost((prev) => ({
        ...prev,
        commentCount: prev.commentCount - 1,
      }));
    }

    closeDeleteModals();
  });

  // 좋아요 토글

  const handleLike = async () => {
    if (!post || likePendingRef.current) return;

    const userId = localStorage.getItem("userId");
    if (!userId) return;

    likePendingRef.current = true;

    const prevLiked = liked;
    const prevLikes = Number(post.likes) || 0;
    const optimisticLiked = !prevLiked;
    const optimisticLikes = optimisticLiked
      ? prevLikes + 1
      : Math.max(0, prevLikes - 1);

    setLiked(optimisticLiked);
    setPost((prev) => ({ ...prev, likes: optimisticLikes }));

    const { ok, data } = await toggleLike(postId, userId);

    if (!ok) {
      // revert on failure
      setLiked(prevLiked);
      setPost((prev) => ({ ...prev, likes: prevLikes }));
      likePendingRef.current = false;
      return;
    }

    // 서버 응답에 따라 최신 상태 반영 (없으면 낙관적 값 유지)
    const serverLiked =
      data?.liked ?? data?.isLiked ?? data?.likeStatus ?? optimisticLiked;
    const serverLikes =
      data?.likes ??
      data?.likeCount ??
      data?.like_count ??
      data?.like ??
      optimisticLikes;

    setLiked(Boolean(serverLiked));
    setPost((prev) => ({ ...prev, likes: serverLikes }));
    likePendingRef.current = false;
  };

  // ==========================
  // 모달 제어
  // ==========================
  const openDeletePostModal = () =>
    setModals((m) => ({ ...m, postDeleteOpen: true }));

  const openDeleteCommentModal = (id) =>
    setModals((m) => ({ ...m, commentDeleteOpen: true, targetCommentId: id }));

  const closeDeleteModals = () =>
    setModals({
      postDeleteOpen: false,
      commentDeleteOpen: false,
      targetCommentId: null,
    });

  return {
    post,
    comments,
    liked,
    commentValue,
    isEditing,
    editingId,
    modals,
    loading,
    error,
    // handleCommentChange,
    handleCommentSubmit,
    handleLike,
    handleEditComment,
    handleDeleteComment,
    handleDeletePost,
    openDeletePostModal,
    openDeleteCommentModal,
    closeDeleteModals,
  };
}
