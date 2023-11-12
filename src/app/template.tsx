"use client";
import { motion as m } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: "1", ease: "easeInOut" }}
      layoutId="main"
    >
      {children}
    </m.main>
  );
}
