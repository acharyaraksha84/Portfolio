import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  visible: boolean;
}

export function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase text-text-muted"
          >
            S. P. Acharya
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
