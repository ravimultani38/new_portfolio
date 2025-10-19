"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface AnimatedIconProps {
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export function AnimatedIcon({ children, className }: AnimatedIconProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5,    // Trigger when 50% of the icon is visible
  });

  // Apply the Variants type here
  const iconVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.01 }, // Fade in quickly
      },
    },
  };

  // Clone the top-level SVG element provided as children
  const svgElement = React.cloneElement(
    children,
    {
      ref: ref,
      className: className || children.props.className,
    },
    // Map over the *actual children* of the SVG element
    React.Children.map(children.props.children, (child) => {
      // Check if child is a valid React element before accessing props
      if (React.isValidElement(child)) {
        // Animate only path elements for the drawing effect
        if (child.type === 'path') {
          return (
            <motion.path
              // THE FIX: Use Record<string, unknown> instead of any
              {...(child.props as Record<string, unknown>)}
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          );
        }
      }
      return child; // Return non-path elements or non-elements unchanged
    })
  );

  return svgElement;
}