import { motion } from "framer-motion";

export default function AnimatedSection({ id, children, className = "" }) {
  const MotionSection = motion.section;

  return (
    <MotionSection
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </MotionSection>
  );
}
