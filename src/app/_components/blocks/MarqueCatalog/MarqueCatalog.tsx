import Marquee from "react-fast-marquee";
import React, {FC} from "react";
import EditPathVars = MotionPathHelper.EditPathVars;
import {IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import cn from "classnames";
import s from "@/app/_components/blocks/Catalog/Catalog.module.scss";

interface IMarqueCatalog {
  cardsClothe: IClothe[],
  className?: string
}

export const MarqueCatalog: FC<IMarqueCatalog> = ({cardsClothe, className}) => {
  return (
    <Marquee className={className}>
      {cardsClothe && cardsClothe?.map((card: IClothe, index) => {
        return <CardClothe isStats={false}
          key={card.id}
          className={cn(s.card)}
          {...card} />;
      })}
    </Marquee>
  );
};
