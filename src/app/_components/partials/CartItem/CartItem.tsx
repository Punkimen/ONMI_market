import React, {FC, useEffect, useState} from "react";
import s from './CartItem.module.scss';
import {IGood} from "@/app/_types/bag.types";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import Image from "next/image";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import cn from "classnames";
import {Input} from "@/app/_components/partials/Input/Input";
import deleteIcon from "@/../public/img/icons/delete.svg";
import {useBagState} from "@/app/_state/store";

export const CartItem: FC<IGood> = ({
  id, collection, modelCategory, quantity,
  category,
  imgSrc, price
}) => {
  const removeGood = useBagState((state) => state.removeFromCart);
  const changeQuantityGood = useBagState((state) => state.changeQuantityGood);
  const [count, setCount] = useState(1);
  // const count = useInput(quantity?.toString())
  const handleQuantity = (increment: number) => {
    changeQuantityGood(id, quantity + increment);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10); // Parse the input value to a number
    if (!isNaN(newValue)) { // Make sure it's a valid number
      setCount(newValue); // Update the count state
    }
  };
  useEffect(() => {
    setCount(+quantity);
    if (quantity === 0) {
      removeGood(id);
    }
  }, [id, quantity, removeGood]);
  return (
    <div className={s.good}>
      <LineDecor/>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.img}>
            <Image src={imgSrc} alt={`${category} ${id}`}/>
          </div>
          <div className={s.info}>
            <div className={s.name}>{category} #{id}</div>
            <div className={s.collection}>
              collection #{collection.name}
            </div>
          </div>
        </div>
        <div className={s.right}>
          <div className={cn(s.type, s.col)}>{modelCategory}-Type</div>
          <div className={cn(s.quantity, s.col)}>
            <BtnReset onClick={() => handleQuantity(-1)}>-</BtnReset>
            <Input className={s.count} value={count} onChange={handleInputChange} onBlur={() => {
              changeQuantityGood(id, +count);
            }}/>
            <BtnReset onClick={() => handleQuantity(1)}>+</BtnReset>
          </div>
          <div className={cn(s.price, s.col)}>{price}$</div>
          <div className={cn(s.col)}>
            <BtnReset className={s.delete} onClick={() => {
              removeGood(id);
            }}>
              <Image src={deleteIcon} alt={'delete'}/>
            </BtnReset>
          </div>
        </div>
      </div>
    </div>
  );
};
