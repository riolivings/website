"use client";

import { motion } from "framer-motion";
import React from "react";

export const Motion = ({
  type,
  children,
  className,
  ...props
}) => {
  const Component = type ? motion[type] : motion.div; // Use motion.div if type is not provided

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
