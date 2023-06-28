"use client";
import React from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

type ModalProps = {
  control: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  children: React.ReactNode;
} & HTMLMotionProps<"div">;
export default function Modal({
  control: [open, setOpen],
  children,
  ...rest
}: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-pointer select-none items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            {...rest}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
