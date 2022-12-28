import React, { useEffect, useRef, useState } from "react";

type Props = {
  txt: string;
  children: React.ReactNode;
  className?: string;
};

const Tooltip: React.FC<Props> = ({ txt, children, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState("");
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTooltipVisibility = () => {
      const el = tooltipRef.current;
      const screenWidth = document.documentElement.offsetWidth;
      const elWidth = el!.getBoundingClientRect().width;
      const positionEl = el!.getBoundingClientRect().left;

      const isElementHiddenInRight = elWidth + positionEl > screenWidth;
      if (isElementHiddenInRight) {
        setTooltipPosition("right-0");
      } else {
        setTooltipPosition("left-0");
      }
    };
    checkTooltipVisibility();
  }, [tooltipVisible]);

  return (
    <div className={`relative flex ${className}`}>
      <span
        className="flex"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {children}
      </span>
      <div
        ref={tooltipRef}
        className={`absolute bg-slate-600 dark:bg-black rounded-md w-max py-1 px-2 top-full text-slate-200 z-30 ${tooltipPosition} ${
          tooltipVisible ? "block" : "hidden"
        }`}
      >
        {txt}
      </div>
    </div>
  );
};

export default Tooltip;
