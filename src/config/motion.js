export const transition = { type: "spring", duration: 0.8 };

export const headTextAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 40,
      restDelta: 0.001,
      duration: 0.3,
    },
  }

  export const headContainerAnimation = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };