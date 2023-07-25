import { useState, useEffect } from "react";

export default function useStorage(key, type = "localStorage") {
  const [value, setValue] = useState();

  // Initial fetch from storage
  useEffect(() => {
    const storage = type === "sessionStorage" ? sessionStorage : localStorage;
    const data = storage.getItem(key);
    if (data) {
      setValue(JSON.parse(data));
    } else {
      setValue([]);
    }
  }, [key, type]);

  // Persist to storage
  useEffect(() => {
    // first render, don't override/destroy existing item value
    if (value !== undefined) {
      const storage = type === "sessionStorage" ? sessionStorage : localStorage;
      storage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, type]);

  return [value, setValue];
}
