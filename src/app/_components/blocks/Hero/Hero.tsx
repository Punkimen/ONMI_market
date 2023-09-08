import React, {FC} from "react";
import s from './Hero.module.scss';
import cn from 'classnames';
import {ChildrenType} from "@/app/_types/children.types";

interface IHeroProps {
	children: ChildrenType,
	className?: string
}

export const Hero: FC<IHeroProps> = ({children, className}) => {
  return (
    <section className={cn(s.hero, className && className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};
