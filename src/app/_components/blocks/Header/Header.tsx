'use client';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
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
import {Balance} from "@/app/_components/partials/Balance/Balance";
import {useUser} from "@/app/_state/store";
import {Dropdown} from "@/app/_components/partials/Dropdown/Dropdown";


const links: Array<ILink> = [
  {title: 'omis', href: Routes.HOME},
  // {title: 'collections', href: Routes.COLLECTIONS},
  {title: 'Zero Collection', href: Routes.CLOTHES},
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
  const user = useUser(state => state);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(user.isAuth);
  }, [user.isAuth]);

  return (
    <header ref={header} className={cn(s.header)}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.left}>
            <Link href={Routes.HOME} className={s.logo}>
              <Image src={logo} className={'text-line'} alt={'onmi'} priority={true}/>
            </Link>
            <NavLinks links={links} className={s.nav}/>
          </div>
          <div className={cn(s.right)}>
            <Bag className={cn(s.bag, 'text-line')} data-delay='0.3'/>
            <Balance className={cn(s.balance)} hide={!isAuth}/>
            <div className={'text-line'} data-delay='0.4'>
              <BtnSmall className={s.header__btn} href={Routes.LOGIN} hide={isAuth}>Log In</BtnSmall>
            </div>
            <Dropdown menu={[{title: 'Inventory', href: Routes.INVENTORY}, {
              title: 'Sign out', href: "", onClick: () => {
                user.auth();
                setIsAuth(user.isAuth);
              }
            }]} hide={!isAuth}>
              <div className={s.user}>
                {user.avatar && <Image className={s.avatar} src={user.avatar} alt={'avatar'}/>}
                {user.nickname && <div className={s.name}>{user.nickname}</div>}
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};
