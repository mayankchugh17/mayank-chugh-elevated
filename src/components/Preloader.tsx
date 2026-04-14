import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 glow-text"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.1em", opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              MK
            </motion.h1>
            <div className="w-48 h-[2px] bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(170 80% 50%), hsl(260 60% 60%))" }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <motion.p
              className="text-muted-foreground font-mono text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
