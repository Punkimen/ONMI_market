"use client";
import React, {FC, useEffect, useLayoutEffect, useRef} from 'react';
import s from './NavLinks.module.scss';
import Link from "next/link";
import {ILink} from "@/app/_types/nav.types";
import cn from 'classnames';
import {usePathname} from 'next/navigation';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
import {IBaseComponents} from "@/app/_types/base.types";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";

interface INavLinksProps extends IBaseComponents{
  links: Array<ILink>,
  className?: string,
}

export const NavLinks: FC<INavLinksProps> = ({links, className, ...props}) => {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();
  const nav = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const textLine = gsap.utils.toArray(".text-line");
      textLine?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el);
      });
    }, [nav]);
  }, [windowWidth]);

  if(props.hide) return null;

  return (
    <nav ref={nav} className={cn(s.nav, className)}>
      <ul className={s.list}>
        {links && links.map((el, index) => {
          return (
            <li className={cn((s.elem), 'text-line')} key={el.title + el.href} data-delay={(index + 1) * 0.1}>
              <Link className={cn(s.link, pathname === el.href && s.active)}
                href={el.href}>
                {el.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
