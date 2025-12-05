import { useState } from "react";

export function useToast() {
  const [toast, setToast] = useState({ show: false, message: "" });

  function showToast(message) {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  }

  return { toast, showToast };
}
