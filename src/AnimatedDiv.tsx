import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AnimatedDivProps {
  children?: React.ReactNode;
  onResize?: (width: number) => void;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, onResize }) => {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        const newWidth = divRef.current.clientWidth;
        setContainerWidth(newWidth);
        if (onResize) onResize(newWidth);
      }
    };

    updateWidth(); // Initial width setting

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, [onResize]);

  return (
    <motion.div
      ref={divRef}
      style={{
        width: "100px",
        background: "linear-gradient(to right, #91B4DC, #437EF1)",
        margin: "0 auto",
        padding: "1em",
        borderRadius: "0.5em",
      }}
      animate={{ width: [200, 400, 200] }} // Sequence of widths
      transition={{
        duration: 6, // Duration of one full cycle (stretch + shrink)
        repeat: Infinity, // Loop animation
        repeatType: "loop", // Loop type
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
