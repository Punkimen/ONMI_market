import {Card} from "@/app/_components/partials/InventoryItems/Card/Card";
import React, {FC} from "react";
import {IBox} from "@/app/_types/cards.types";
import {IBaseComponents} from "@/app/_types/base.types";
import cn from "classnames";
import s from "./BoxCard.module.scss";
import Image from "next/image";

interface IBoxCardProps extends IBox, IBaseComponents {
}

export const BoxCard: FC<IBoxCardProps> = ({className, imgSrc, collectionId, id, ...props}) => {
  return (
    <Card className={cn(s.card, className)}>
      <div className={s.img}>
        <Image src={imgSrc} alt={`box ${id}`}/>
      </div>
      <div className={s.label}>
        BOX #{id}
      </div>
      <div className={s.collection}>
        Content item from collection {collectionId}
      </div>
    </Card>
  );
};
