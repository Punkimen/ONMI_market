'use client';
import React, {FC, useEffect, useRef, useState} from 'react';
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
import {AlertCookie} from "@/app/_components/partials/AlertCookie/AlertCookie";

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
  const [acceptCookie, setAcceptCookie] = useState(false);

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
  }, [content, windowWidth, windowHeight,pathname]);

  useEffect(()=>{
    const acceptCookie = localStorage.getItem('acceptCookie');

    if(acceptCookie){
      setAcceptCookie(true);
    }
  },[]);


  return (
    <div ref={content} className={cn('page-content')}>
      {!pathname.includes('/login') && <Header/>}
      <AlertCookie hide={acceptCookie}/>
      <main className="main">
        {children}
      </main>
      {pathname.includes('/login') || pathname.includes('/inventory') ? null : <Footer/>}
    </div>
  );
};
