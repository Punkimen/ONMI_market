import React, {FC} from 'react';
import s from './NavLinks.module.scss';
import Link from "next/link";
import {ILink} from "@/app/_types/nav.types";
import cn from 'classnames';
import {usePathname} from 'next/navigation';

interface INavLinksProps {
  links: Array<ILink>,
  className?: string,
}

export const NavLinks: FC<INavLinksProps> = ({links, className}) => {
  const pathname = usePathname()

  return (
    <nav className={cn(s.nav, className)}>
      <ul className={s.list}>
        {links && links.map(el => {
          return (
            <li className={s.elem} key={el.title + el.href}>
              <Link className={cn(s.link, pathname === el.href && s.active)} href={el.href}>{el.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
