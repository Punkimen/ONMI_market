import Marquee from "react-fast-marquee";
import React, {FC} from "react";
import {IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import cn from "classnames";
import s from "./MarqueCatalog.module.scss";

interface IMarqueCatalog {
  cardsClothe: IClothe[],
  className?: string
}

export const MarqueCatalog: FC<IMarqueCatalog> = ({cardsClothe, className}) => {
  return (
    <Marquee className={cn(s.catalog, className)}>
      {cardsClothe && cardsClothe?.map((card: IClothe, index) => {
        return <CardClothe isStats={false}
          key={card.id}
          isEmpty={true}
          className={cn(s.card)}
          {...card} />;
      })}
    </Marquee>
  );
};
