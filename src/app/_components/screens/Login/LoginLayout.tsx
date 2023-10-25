import {ChildrenType} from "@/app/_types/children.types";
import {Navigation} from "@/app/_components/screens/Login/Navigation/Navigation";
import React, {FC} from "react";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";
import s from './Login.module.scss';
import {IBaseComponents} from "@/app/_types/base.types";

interface ILoginLayout extends IBaseComponents{
  children: ChildrenType;
  title?: string;
  description: string;
  isHideNav?: boolean;
  href?: string;
  onClick?: ()=> void;
}
export const LoginLayout:FC<ILoginLayout> = ({children, className,href, title='Welcome to onmi®',onClick, description, isHideNav})=>{
  return(
    <div className={cn(s.login, className)}>
      <Link className={s.close} href={Routes.HOME}
      >
        <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5ZM10.5 11.7431L13.7547 15L15 13.7418L11.7453 10.491L14.994 7.24615L13.7426 6L10.5 9.2388L7.25735 6L6.00602 7.24615L9.24866 10.491L6 13.7418L7.24532 15L10.5 11.7431Z"
            fill="inherit"/>
        </svg>
      </Link>
      <div className={cn(s.container, 'container')}>
        <div className={s.content}>
          <div className={s.description}>
            <Title tag={'h4'} className={cn(s.title, 'text-line')}>{title}</Title>
            <p className={cn(s.text, 'text-line')}>{description}</p>
          </div>
          {children}
        </div>
        <Navigation hide={isHideNav} className={s.nav} href={href} onClick={onClick}/>
      </div>
    </div>
  );
};
