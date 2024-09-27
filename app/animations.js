const l2r = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
};

const r2l = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
};

const zoomIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
}

const b2u = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
}

const u2b = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 }
  }
}

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.0,
      staggerChildren: 0.1
    }
  }
}

export default {
  l2r,
  r2l,
  zoomIn,
  b2u,
  u2b,
  container
}