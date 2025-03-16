import { useCallback } from "react";

export const useMessage = () => {
  
  const showMessage = useCallback(() => {}, []);
  return { showMessage };
};
