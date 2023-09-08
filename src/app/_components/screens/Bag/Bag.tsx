'use client';

import React, {FC, useEffect, useState} from 'react';
import s from './Bag.module.scss';
import cn from 'classnames';
import {useBagState} from "@/app/_state/store";
import {Title} from "@/app/_components/partials/Title/Title";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {Input} from "@/app/_components/partials/Input/Input";
import {CartItem} from "@/app/_components/partials/CartItem/CartItem";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import {useInput} from "@/app/_hooks/useInput";
import {useStore} from "zustand";
import {IGood} from "@/app/_types/bag.types";

export const Bag: FC = () => {
  const [bagItems, setBagItems] = useState<IGood[] | []>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const bagState = useStore(useBagState, state => state);
  const code = useInput('');
  useEffect(() => {
    setBagItems([...bagState.bag]);
  }, [bagState]);
  useEffect(()=>{
    bagState.setSum();
    setSubtotal(bagState.subtotal);
    setTotal(bagState.total);
  },[bagState.bag]);
  return (
    <div className={s.bag}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.cart}>
            {bagItems.length > 0 ? bagItems.map(el => {
              return <CartItem key={el.id} {...el}/>;
            }) : <Title className={s.bag__title} align={'left'} tag='h3'>Bag is empty</Title>}
            {bagItems.length > 0 && <LineDecor position={"bottom"}/>}
          </div>
          <div className={s.calc}>
            <div className={s.calc__top}>
              <div className={s.price}>
                <div className={s.price__label}>Subtotal</div>
                <div className={s.price__value}>${subtotal}</div>
              </div>
              <div className={s.price}>
                <div className={s.price__label}>Vat {bagState.vat}%</div>
                <div className={s.price__value}>${Math.ceil(subtotal / 100 * bagState.vat)}</div>
              </div>
              <div className={s.price}>
                <div className={s.price__label}>Total</div>
                <div className={s.price__value}>${total}</div>
              </div>
            </div>
            <Input className={s.input} label={'Discount code'} placeholder={'xxx-xxx'} {...code}/>
            <BtnBig className={s.checkout__btn} onClick={() => {
            }}>Check out</BtnBig>
          </div>
        </div>
      </div>
    </div>
  );
};
