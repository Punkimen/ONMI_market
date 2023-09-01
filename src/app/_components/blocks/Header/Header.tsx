'use client';
import React, {useLayoutEffect, useRef} from 'react';
import s from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from '@/../public/img/logo.svg';
import {ILink} from "@/app/_types/nav.types";
import {NavLinks} from "@/app/_components/blocks/NavLinks/NavLinks";
import {Bag} from "@/app/_components/partials/Bag/Bag";
import {BtnSmall} from "@/app/_components/partials/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
import cn from "classnames";


const links: Array<ILink> = [
  {title: 'omis', href: Routes.HOME},
  // {title: 'collections', href: Routes.COLLECTIONS},
  {title: 'clothes', href: Routes.CLOTHES},
]
export const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.left}>
            <Link href={Routes.HOME} className={s.logo}>
                <Image src={logo} alt={'onmi'} priority={true}/>
            </Link>
          </div>
          <NavLinks links={links} className={s.nav}/>
          <div className={cn(s.right)}>
              <Bag count={0} className={cn(s.bag,)} data-delay='0.3'/>
              <BtnSmall data-delay='0.4' onClick={() => {
                console.log('work')
              }}>Log In</BtnSmall>
          </div>
        </div>
      </div>
    </header>
  )
}
