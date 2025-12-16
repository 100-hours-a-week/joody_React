import { useCallback, useEffect, useRef, useState } from "react";
import { fetchPostList } from "../api/post";

export default function usePostList() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sentinelRef = useRef(null);
  const keywordRef = useRef("");
  const cursorRef = useRef(null);
  const hasNextRef = useRef(true);
  const isLoadingRef = useRef(false);

  const loadPosts = useCallback(async () => {
    if (isLoadingRef.current || !hasNextRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    const params = new URLSearchParams();
    params.append("size", keywordRef.current ? 1000 : 5);

    if (keywordRef.current) params.append("keyword", keywordRef.current);
    if (!keywordRef.current && cursorRef.current)
      params.append("cursorCreatedAt", cursorRef.current);

    try {
      const json = await fetchPostList(params);
      const list = json?.data ?? {};
      const content = Array.isArray(list.content) ? list.content : [];

      setPosts((prev) => {
        const seen = new Set(prev.map((p) => p.id));
        const newPosts = content.filter((post) => !seen.has(post.id));
        return [...prev, ...newPosts];
      });

      const next = list.nextCursor ?? null;
      cursorRef.current = next;
      hasNextRef.current = Boolean(list.hasNext);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, []);

  /** keyword 변경 시 새 조회 */
  useEffect(() => {
    const timer = setTimeout(() => {
      keywordRef.current = keyword;
      cursorRef.current = null;
      hasNextRef.current = true;
      isLoadingRef.current = false;
      setPosts([]);
      loadPosts();
    }, 300); // 300ms debounce

    return () => clearTimeout(timer); // cleanup
  }, [keyword, loadPosts]);

  /** 첫 페이지 로딩 */
  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Infinite scroll */
  useEffect(() => {
    if (!sentinelRef.current || keyword) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingRef.current) {
        loadPosts();
      }
    });

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [keyword, loadPosts]);

  return {
    posts,
    sentinelRef,
    keyword,
    setKeyword,
    isLoading,
  };
}
