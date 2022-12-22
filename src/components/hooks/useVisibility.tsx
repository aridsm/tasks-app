import { useEffect, useState } from "react";

const useVisibility = (element: any, fnClose?: () => void) => {
  const [elementIsVisible, setElementIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkClick = (e: any) => {
      if (!element) return;
      if (e.target !== element && !element.contains(e.target as HTMLElement)) {
        if (fnClose) fnClose();
        setElementIsVisible(false);
      }
    };

    document.addEventListener("click", checkClick);
    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, [element, fnClose]);

  const closeElement = () => {
    setElementIsVisible(false);
  };

  const showElement = () => {
    setElementIsVisible(true);
  };

  return { elementIsVisible, closeElement, showElement };
};

export default useVisibility;
