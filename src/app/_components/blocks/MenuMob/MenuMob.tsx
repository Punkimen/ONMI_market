import React, {FC, useState} from "react";
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import Link from "next/link";
import {useUser} from "@/app/_state/store";
import {Routes} from "@/app/_utils/Routes";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import s from './MenuMob.module.scss';
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import Image from "next/image";
import x from "../../../../../public/img/icons/x.svg";
import instagram from "../../../../../public/img/icons/instagram.svg";
import fb from "../../../../../public/img/icons/fb.svg";
import medium from "../../../../../public/img/icons/medium.svg";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {useRouter} from "next/navigation";

interface IMenuMobProps extends IBaseComponents {
  isShow?: boolean,
  setIsShow: () => void,
  links: { title: string, href: string }[],
}

export const MenuMob: FC<IMenuMobProps> = ({isShow, className, hide, setIsShow, links}) => {
  const user = useUser(state => state);
  const router = useRouter();
  if (hide) return null;
  return (
    <div className={cn(s['mob-menu'], isShow && s.show, className)}>
      <div className={cn("container", s.container)}>
        <div className={s.links}>
          {links.map(link => {
            return <Link href={link.href} onClick={() => setIsShow()} className={s.link} key={link.href}>
              <span>{link.title}</span>
            </Link>;
          })}
          {user.isAuth && <>
            <Link href={Routes.WALLET} onClick={() => setIsShow()} className={s.link}>Wallet</Link>
            <Link href={Routes.INVENTORY} onClick={() => setIsShow()} className={s.link}>Inventory</Link>
          </>
          }
        </div>
        <div className={s.bottom}>
          <div className={s["socials-links"]} data-delay="0.5">
            <div className={s["label"]}>Social</div>
            <div className={s.socials}>
              <Link href="https://twitter.com/onmionmi" target="_blank"
                className={cn(s["socials-link"], s.x)}>
                <Image src={x} alt={'twitter/x'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://instagram.com/onmi.world" target="_blank"
                className={cn(s["socials-link"], s.instagram)}>
                <Image src={instagram} alt={'instagram'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://facebook.com/onmi.world" target="_blank"
                className={cn(s["socials-link"], s.fb)}>
                <Image src={fb} alt={'facebook'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://medium.com/@onmi" target="_blank" className={cn(s["socials-link"], s.medium)}>
                <Image src={medium} alt={'medium'} width='auto' height={'auto'}/>
              </Link>
            </div>
          </div>
          <BtnBig hide={!user.isAuth} color={'gray'} onClick={() => {
            user.auth();
            setIsShow();
          }} className={cn(s.btn)}>Sign out</BtnBig>
          <BtnBig hide={user.isAuth} onClick={async () => {
            await router.replace(Routes.LOGIN);
            await setIsShow();
          }} color={'gray'} className={cn(s.btn)}>Login</BtnBig>
        </div>
      </div>
    </div>
  );
};
