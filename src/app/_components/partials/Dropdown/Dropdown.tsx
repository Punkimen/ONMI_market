import React, {FC, useState} from "react";
import cn from 'classnames';
import s from './Dropdown.module.scss';
import {IBaseComponents, ILink} from "@/app/_types/base.types";
import {ChildrenType} from "@/app/_types/children.types";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

interface IMenuItem extends ILink {
    icon?: string | StaticImageData,
}

interface IDropdownProps extends IBaseComponents {
    menu: IMenuItem[];
    children: ChildrenType;
    position?: 'center' | 'right';
};
export const Dropdown: FC<IDropdownProps> = ({className, menu, children, position, ...props}) => {
  const [show, setShow] = useState(false);

  if (props.hide) {
    return null;
  }
  ;

  return (
    <div className={cn(s.dropdown, className)} onMouseEnter={e => {
      setShow(true);
    }} onMouseLeave={e => {
      setShow(false);
    }}>
      <div className={s.head}>
        {children}
      </div>
      <div className={cn(s.dropdown__menu, position && s[`${position}`], show && s.show)}>
        {menu.map(el => {
          return <Link key={el.title} className={cn(s.link, el.icon && s.link_icon)} href={el.href}
            onClick={e => {
              el.onClick && e.preventDefault();
              el.onClick && el.onClick();
              setShow(false);
            }}>
            {el.icon && <Image className={s.icon} src={el.icon} alt={el.title + 'icon'}/>}
            <span>{el.title}</span>
          </Link>;
        })}
      </div>
    </div>
  );
};
