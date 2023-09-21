import React, {FC, useState} from "react";
import s from './MenuMob.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import Link from "next/link";

interface IMenuMobProps extends IBaseComponents {
  isShow?: boolean,
  setIsShow: () => void,
  links: { title: string, href: string }[],
}

export const MenuMob: FC<IMenuMobProps> = ({isShow, className, hide, setIsShow, links}) => {

  if (hide) return null;
  return (
    <div className={cn(s['mob-menu'], isShow && s.show, className)}>
      <div className="container">
        {links.map(link => {
          return <Link href={link.href} className={s.link} key={link.href}>
            <span>{link.title}</span>
          </Link>;
        })}

        <div className={s["links"]} data-delay="0.5">
          <div className={s["label"]}>Social</div>
          <ul className={s.list}>
            <li className={s.elem}>
              <a href="https://instagram.com/onmi.world" target="_blank"
                className={s.social__link} rel="noreferrer">Instagram</a>
            </li>
            <li className="mob-menu__elem">
              <a href="https://twitter.com/onmionmi" target="_blank" className={s.social__link} rel="noreferrer">𝕏
                (Twitter)</a>
            </li>
            <li className="mob-menu__elem">
              <a href="https://facebook.com/onmi.world" target="_blank"
                className={s.social__link} rel="noreferrer">Facebook</a>
            </li>
            <li className="mob-menu__elem">
              <a href="https://medium.com/@onmiwww" target="_blank" className={s.social__link}
                rel="noreferrer">Medium</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
