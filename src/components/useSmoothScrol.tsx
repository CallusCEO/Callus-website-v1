import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href");
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 100; // Adjust based on navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
    };
  }, []);

  return null; // Hook doesn't render anything
};

export default useSmoothScroll;
