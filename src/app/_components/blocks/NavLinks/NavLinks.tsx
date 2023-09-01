import React, {FC, useEffect, useLayoutEffect, useRef} from 'react';
import s from './NavLinks.module.scss';
import Link from "next/link";
import {ILink} from "@/app/_types/nav.types";
import cn from 'classnames';
import {usePathname} from 'next/navigation';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";

interface INavLinksProps {
  links: Array<ILink>,
  className?: string,
}

export const NavLinks: FC<INavLinksProps> = ({links, className}) => {
  const pathname = usePathname()
  const nav = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const textLine = gsap.utils.toArray(".text-line");
      console.log(textLine)
      textLine?.forEach((el) => {
        // @ts-ignore
        el && triggerAnimate(el)
      })
    }, [nav])
  }, []);
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
          )
        })}
      </ul>
    </nav>
  )
}
