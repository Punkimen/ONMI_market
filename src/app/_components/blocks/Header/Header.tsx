'use client';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from '@/../public/img/logo.svg';
import {ILink} from "@/app/_types/nav.types";
import {NavLinks} from "@/app/_components/blocks/NavLinks/NavLinks";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
import cn from "classnames";
import {Balance} from "@/app/_components/partials/Balance/Balance";
import {useBagState, useInventoryState, useUser} from "@/app/_state/store";
import {Dropdown} from "@/app/_components/partials/Dropdown/Dropdown";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {Burger} from "@/app/_components/partials/Burger/Burger";
import {MenuMob} from "@/app/_components/blocks/MenuMob/MenuMob";
import {usePathname} from "next/navigation";
import {Wallet} from "@/app/_components/blocks/Wallet/Wallet";
import inventoryIcon from "@/../public/img/icons/inventory_icon.svg";
import signOutIcon from "@/../public/img/icons/signOut_icon.svg";
import s from './Header.module.scss';


const links: Array<ILink> = [
  {title: 'omis', href: Routes.HOME},
  // {title: 'collections', href: Routes.COLLECTIONS},
  {title: 'Zero Collection', href: Routes.CLOTHES},
];
export const Header = () => {
  const header = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const textLine = gsap.utils.toArray(".text-line");
      textLine?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
    }, [header]);
  }, [windowWidth]);

  const user = useUser(state => state);
  const [isAuth, setIsAuth] = useState(false);
  const [show, setShow] = useState(false);

  const [showCollectionsMob, setShowCollectionsMob] = useState(false); // Initial state is set to false
  const [walletShow, setWalletShow] = useState(false);

  const tabs = useInventoryState(state => state.tabs);
  const changeActiveTab = useInventoryState(state => state.changeActiveTab);

  const listRef = useRef(null);

  useEffect(() => {
    if (windowWidth && windowWidth <= 450 && windowWidth > 0) {
      setShowCollectionsMob(true);
    } else if (windowWidth) {
      setShowCollectionsMob(false);
    }
  }, [windowWidth]);
  const pathname = usePathname();
  useEffect(() => {
    setIsAuth(user.isAuth);
  }, [user.isAuth]);

  return (
    <>
      <header ref={header} className={cn(s.header)}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.left}>
              <Link href={Routes.HOME} className={s.logo}>
                <Image src={logo} className={'text-line'} alt={'onmi'} priority={true}/>
              </Link>
              {!showCollectionsMob && <NavLinks links={links} className={s.nav}/>}
            </div>

            {pathname.includes('/inventory') && <nav className={s.tabs}>
              <ul className={s.list} ref={listRef}>

                {tabs.map(el => {
                  return <li className={s.elem} key={el.title}>
                    <button className={cn(s.tab, el.isActive && s.active, 'btn-reset')} onClick={() => {
                      changeActiveTab(el.title);
                    }}>{el.title}</button>
                  </li>;
                })}
              </ul>
            </nav>}

            <div className={cn(s.right)}>
              <Balance className={cn(s.balance)} onClick={()=>setWalletShow(!walletShow)} hide={!isAuth}/>
              {!showCollectionsMob && <div className={'text-line'} data-delay='0.4'>
                <BtnSmall className={s.header__btn} href={Routes.LOGIN} hide={isAuth}>Log In</BtnSmall>
              </div>}
              <Dropdown position={"right"} menu={[{title: 'Inventory', icon: inventoryIcon, href: Routes.INVENTORY}, {
                title: 'Sign out', icon:signOutIcon, href: "", onClick: () => {
                  user.auth();
                  setIsAuth(user.isAuth);
                }
              }]} hide={!isAuth || windowWidth <= 450 && windowWidth > 0}>
                <div className={s.user}>
                  {user.avatar && <Image className={s.avatar} src={user.avatar} alt={'avatar'}/>}
                </div>
              </Dropdown>
              {showCollectionsMob && <Burger active={show} setActive={() => setShow(!show)}/>}
            </div>
          </div>
        </div>
      </header>
      {showCollectionsMob &&  <MenuMob links={links} isShow={show} setIsShow={() => setShow(false)}/>}
      <Wallet show={walletShow} close={()=>setWalletShow(false)} />
    </>
  );
};
