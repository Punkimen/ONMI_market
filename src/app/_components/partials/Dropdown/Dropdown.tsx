import React, {FC, useState} from "react";
import cn from 'classnames';
import s from './Dropdown.module.scss';
import {IBaseComponents, ILink} from "@/app/_types/base.types";
import {ChildrenType} from "@/app/_types/children.types";
import Link from "next/link";

interface IDropdownProps extends IBaseComponents {
  menu: ILink[];
  children: ChildrenType;
};
export const Dropdown: FC<IDropdownProps> = ({className, menu, children, ...props}) => {
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
      <div className={cn(s.dropdown__menu, show && s.show)}>
        {menu.map(el => {
          return <Link key={el.title} className={s.link} href={el.href} onClick={e => {
            el.onClick && e.preventDefault();
            el.onClick && el.onClick();
            setShow(false);
          }}>{el.title}</Link>;
        })}
      </div>
    </div>
  );
};
