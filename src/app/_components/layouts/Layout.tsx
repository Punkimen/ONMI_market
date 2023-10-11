'use client';
import React, {FC, useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";
import {useDocHeight} from "@/app/_hooks/useDocHeight";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {Footer} from "@/app/_components/blocks/Footer/Footer";
import {Header} from "@/app/_components/blocks/Header/Header";
import {usePathname} from "next/navigation";
import {Metadata} from "next";
import {triggerAnimate} from "@/app/_animations/animation";

interface ILayoutProps {
  children: ChildrenType
}

export const metadata: Metadata = {
  title: 'ONMI',
  description: 'next-gen app that combines entertainment and financial services within an engaging XR game.',
  openGraph: {
    title: 'ONMI',
    description: 'next-gen app that combines entertainment and financial services within an engaging XR game.',
    url: 'https://onmi-next-hvui.vercel.app/',
    siteName: 'ONMI',
    images: ['img/og-image.webp'],
    locale: 'en_US',
    type: 'website',
  },
};

export const Layout: FC<ILayoutProps> = ({children}) => {
  const windowWidth = useWindowWidth();
  const windowHeight = useDocHeight();
  const content = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.context(() => {
      const textLine = gsap.utils.toArray('.text-line');
      const linesDecor = gsap.utils.toArray('.line');
      const opacityElems = gsap.utils.toArray('.opacity');
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
  }, [content, windowWidth, windowHeight]);



  return (
    <div ref={content} className={cn('page-content')}>
      {!pathname.includes('/login') && <Header/>}
      <main className="main">
        {children}
      </main>
      {!pathname.includes('/login') && <Footer/>}
    </div>
  );
};
