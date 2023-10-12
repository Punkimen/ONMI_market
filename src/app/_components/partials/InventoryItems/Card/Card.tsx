import React, {FC} from 'react';
import s from './Card.module.scss';
import cn from 'classnames';
import {IInvenCard} from "@/app/_types/cards.types";
import {IBaseComponents} from "@/app/_types/base.types";
import {ChildrenType} from "@/app/_types/children.types";
import {Dropdown} from "@/app/_components/partials/Dropdown/Dropdown";

interface ICardProps extends IBaseComponents {
  children: ChildrenType;
};
export const Card: FC<ICardProps> = ({children, className}) => {
  return (
    <div className={cn(s.card, className)}>
      {/*  <Dropdown className={s.settings}
        menu={[{title: "Share", href: ""}, {title: "Sale", href: ""}, {title: "Remove", href: ""}]}>
        <div className={s.settings__wrapper}>
          <span></span><span></span><span></span>
        </div>
      </Dropdown>*/}
      {children}
    </div>
  );
};
