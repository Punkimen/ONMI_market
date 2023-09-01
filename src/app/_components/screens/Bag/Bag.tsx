'use client';

import React, {FC, useState} from 'react';
import s from './Bag.module.scss';
import cn from 'classnames';
import {useBagState} from "@/app/_state/store";
import {Title} from "@/app/_components/partials/Title/Title";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {Input} from "@/app/_components/partials/Input/Input";
import {CartItem} from "@/app/_components/partials/CartItem/CartItem";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";

export const Bag: FC = () => {
  const bagState = useBagState(state => state);
  const [code, setCode] = useState("")
  return (
    <div className={s.bag}>
      <div className="container">
        <Title tag={'h2'} className={s.title}>
          Shopping bag (2)
        </Title>
        <div className={s.wrapper}>
          <div className={s.cart}>
            {bagState.bag?.map(el => {
              return <CartItem key={el.id} {...el}/>
            })}
            <LineDecor position={"bottom"}/>
          </div>
          <div className={s.calc}>
            <div className={s.calc__top}>
              <div className={s.price}>
                <div className={s.price__label}>Subtotal</div>
                <div className={s.price__value}>$2000</div>
              </div>
              <div className={s.price}>
                <div className={s.price__label}>Vat 20%</div>
                <div className={s.price__value}>$400</div>
              </div>
              <div className={s.price}>
                <div className={s.price__label}>Total</div>
                <div className={s.price__value}>$2400</div>
              </div>
            </div>
            <Input className={s.input}  label={'Discount code'} onChange={() => {
              setCode(code)
            }} value={code}/>
            <BtnBig className={s.checkout__btn} onClick={() => {
            }}>Check out</BtnBig>
          </div>
        </div>
      </div>
    </div>
  )
}
