import {ChildrenType} from "@/app/_types/children.types";
import {Navigation} from "@/app/_components/screens/Login/Navigation/Navigation";
import React, {FC} from "react";
import {Title} from "@/app/_components/partials/Title/Title";
import s from './Login.module.scss';
interface ILoginLayout{
  children: ChildrenType;
  title?: string;
  description: string;
  isHideNav?: boolean;
  href?: string;
  onClick?: ()=> void;
}
export const LoginLayout:FC<ILoginLayout> = ({children,href, title='Welcome to onmi®',onClick, description, isHideNav})=>{
  return(
    <div className={s.login}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.description}>
            <Title tag={'h4'} className={s.title}>{title}</Title>
            <p className={s.text}>{description}</p>
          </div>
          {children}
        </div>
        <Navigation hide={isHideNav} className={s.nav} href={href} onClick={onClick}/>
      </div>
    </div>
  );
};
