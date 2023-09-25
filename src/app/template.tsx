"use client";

import React, {useEffect, useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {usePathname} from "next/navigation";

const Template = ({children}: { children: React.ReactNode }) => {
  const content = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  const pathName = usePathname();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const textLine = gsap.utils.toArray(".text-line");
      const linesDecor = gsap.utils.toArray(".line");
      const opacityElems = gsap.utils.toArray(".opacity");
      textLine?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
      linesDecor?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
      opacityElems?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
    }, [content]);
  }, [content, windowWidth, pathName]);
  return <div ref={content}>{children}</div>;
};

export default Template;
