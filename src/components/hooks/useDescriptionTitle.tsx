import { useEffect } from "react";

const useDescriptionTitle = (description: string, title: string): void => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')!;
    metaDescription.setAttribute("content", description);

    const titleElement = document.querySelector("title")!;
    titleElement.innerText = "To-Do List | " + title;
  }, [description, title]);
};

export default useDescriptionTitle;
