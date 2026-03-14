"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  splitBy?: "letters" | "words";
};

export function AnimatedText({
  text,
  className,
  splitBy = "words",
}: AnimatedTextProps) {
  const segments = splitBy === "letters" ? text.split("") : text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: splitBy === "letters" ? 0.04 : 0.1,
          },
        },
      }}
      className={cn(
        splitBy === "letters" ? "inline-flex flex-nowrap whitespace-nowrap" : "inline-flex flex-wrap",
        className,
      )}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {segment === " " ? "\u00A0" : segment}
          {splitBy === "words" && index < segments.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </motion.span>
  );
}
