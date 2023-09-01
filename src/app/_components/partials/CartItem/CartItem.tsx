import React, {FC} from "react";
import s from './CartItem.module.scss';
import {IGood} from "@/app/_types/bag.types";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import Image from "next/image";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import cn from "classnames";
import {Input} from "@/app/_components/partials/Input/Input";
import deleteIcon from "@/../public/img/icons/delete.svg"

export const CartItem: FC<IGood> = ({
                                      id,
                                      collection,
                                      modelCategory,
                                      quantity,
                                      categoryName,
                                      quantityMax,
                                      imgSrc,
                                      price
                                    }) => {
  return (
    <div className={s.good}>
      <LineDecor/>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.img}>
            <Image src={imgSrc} alt={`${categoryName} ${id}`}/>
          </div>
          <div className={s.info}>
            <div className={s.name}>{categoryName} #{id}</div>
            <div className={s.collection}>
              collection #{collection}
            </div>
          </div>
        </div>
        <div className={s.right}>
          <div className={cn(s.type, s.col)}>{modelCategory}-Type</div>
          <div className={cn(s.quantity, s.col)}>
            <BtnReset>-</BtnReset>
            <Input className={s.count} onChange={() => {
            }} value={quantity}/>
            <BtnReset>+</BtnReset>
          </div>
          <div className={cn(s.price, s.col)}>{price}$</div>
          <div className={cn(s.col)}>
            <BtnReset className={s.delete} onClick={() => {
            }}>
              <Image src={deleteIcon} alt={'delete'}/>
            </BtnReset>
          </div>
        </div>
      </div>
    </div>
  )
}
