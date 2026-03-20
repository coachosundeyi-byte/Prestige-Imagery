"use client";

import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
      AOS.init({ duration: 3000, once: true });
    };
    initAOS();
  }, []);

  return null;
}
