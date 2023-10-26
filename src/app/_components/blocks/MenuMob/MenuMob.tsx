import React, {FC, useState} from "react";
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import Link from "next/link";
import {useUser} from "@/app/_state/store";
import {Routes} from "@/app/_utils/Routes";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import s from './MenuMob.module.scss';

interface IMenuMobProps extends IBaseComponents {
  isShow?: boolean,
  setIsShow: () => void,
  links: { title: string, href: string }[],
}

export const MenuMob: FC<IMenuMobProps> = ({isShow, className, hide, setIsShow, links}) => {
  const user = useUser(state=>state);
  if (hide) return null;
  return (
    <div className={cn(s['mob-menu'], isShow && s.show, className)}>
      <div className="container">
        {links.map(link => {
          return <Link href={link.href}  onClick={()=>setIsShow()} className={s.link} key={link.href}>
            <span>{link.title}</span>
          </Link>;
        })}
        {user.isAuth ? <>
          <Link href={Routes.INVENTORY} className={s.link}>Inventory</Link>
          <BtnReset onClick={user.auth} className={cn(s.link, s.link_login)}>Sign out</BtnReset>
        </> : <Link href={Routes.LOGIN} className={cn(s.link, s.link_login)}>Login</Link>}

        <div className={s["links"]} data-delay="0.5">
          <div className={s["label"]}>Social</div>
          <ul className={s.list}>
            <li className={s.elem}>
              <a href="https://instagram.com/onmi.world" onClick={()=>setIsShow()} target="_blank"
                className={s.social__link} rel="noreferrer">Instagram</a>
            </li>
            <li className={s.elem}>
              <a href="https://twitter.com/onmionmi" onClick={()=>setIsShow()} target="_blank" className={s.social__link} rel="noreferrer">𝕏
                (Twitter)</a>
            </li>
            <li className={s.elem}>
              <a href="https://facebook.com/onmi.world" onClick={()=>setIsShow()} target="_blank"
                className={s.social__link} rel="noreferrer">Facebook</a>
            </li>
            <li className={s.elem}>
              <a href="https://medium.com/@onmiwww" onClick={()=>setIsShow()} target="_blank" className={s.social__link}
                rel="noreferrer">Medium</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
