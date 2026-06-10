import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="bg-scene">
      <div className="grid-lines" />

      <motion.div
        className="orb orb-a"
        animate={{ x: [0, 120, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="orb orb-b"
        animate={{ x: [0, -100, 0], y: [0, -70, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="orb orb-c"
        animate={{ scale: [1, 1.35, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="floating-dots">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}