import { useCallback, useState } from "react";

export function useInput(initialValue, validate) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = useCallback(
    (e) => {
      const v = e.target.value.replace(/\s+/g, "");
      setValue(v);
      if (validate) setError(validate(v)); // validate 함수 결과 → error 메시지
    },
    [validate]
  );

  const reset = useCallback(() => {
    setValue(initialValue);
    setError("");
  }, [initialValue]);

  return { value, error, onChange, reset, bind: { value, onChange } };
}
