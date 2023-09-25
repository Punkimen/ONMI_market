import React, {FC} from "react";
import s from './Hero.module.scss';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";
import {IBaseComponents} from "@/app/_types/base.types";

interface IHeroProps extends IBaseComponents{
	children: ChildrenType,
	className?: string
}

export const Hero: FC<IHeroProps> = ({children, hide, className}) => {
  if(hide) return  null;
  return (
    <section className={cn(s.hero, className && className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};
