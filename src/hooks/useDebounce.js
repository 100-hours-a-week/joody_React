import { useEffect, useState } from "react";

/**
 * useDebounce
 * @param {any} value - 디바운스를 적용할 값
 * @param {number} delay - 지연 시간(ms)
 * @returns {any} 디바운스된 값
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // delay 시간 후에 업데이트
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // delay 전에 값이 또 바뀌면 기존 타이머 취소
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
