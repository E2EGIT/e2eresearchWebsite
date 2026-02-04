import { useState, useEffect } from "react";

export const useDebounce = (value: any, delay: any): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup on value change or unmount
    };
  }, [value, delay]);

  return debouncedValue;
};
