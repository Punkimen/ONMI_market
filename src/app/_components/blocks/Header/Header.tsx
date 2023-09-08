'use client';
import React, {useLayoutEffect, useRef} from 'react';
import s from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from '@/../public/img/logo.svg';
import {ILink} from "@/app/_types/nav.types";
import {NavLinks} from "@/app/_components/blocks/NavLinks/NavLinks";
import {Bag} from "@/app/_components/partials/Bag/Bag";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
import cn from "classnames";


const links: Array<ILink> = [
  {title: 'omis', href: Routes.HOME},
  // {title: 'collections', href: Routes.COLLECTIONS},
  {title: 'clothes', href: Routes.CLOTHES},
];
export const Header = () => {
  const header = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const textLine = gsap.utils.toArray(".text-line");
      textLine?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
    }, [header]);
  }, []);
  return (
    <header ref={header} className={cn(s.header)}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.left}>
            <Link href={Routes.HOME} className={s.logo}>
              <Image src={logo} className={'text-line'} alt={'onmi'} priority={true}/>
            </Link>
          </div>
          <NavLinks links={links} className={s.nav}/>
          <div className={cn(s.right)}>
            <Bag  className={cn(s.bag, 'text-line')} data-delay='0.3'/>
            <div className={'text-line'} data-delay='0.4'>
              <BtnSmall className={s.header__btn} onClick={() => {
              }}>Log In</BtnSmall>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
