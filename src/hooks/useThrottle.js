import { useRef, useCallback } from "react";

export function useThrottle(callback, delay = 300) {
  const throttling = useRef(false);

  return useCallback(
    (...args) => {
      if (throttling.current) return;
      throttling.current = true;

      callback(...args);

      setTimeout(() => {
        throttling.current = false;
      }, delay);
    },
    [callback, delay]
  );
}
