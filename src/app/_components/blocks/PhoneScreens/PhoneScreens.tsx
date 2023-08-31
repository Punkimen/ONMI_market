import React, {FC} from 'react';
import s from './PhoneScreens.module.scss';
import cn from 'classnames';
// images
import phone1 from '@/../public/img/reality/phone_1.png'
import phone2 from '@/../public/img/reality/phone_2.png'
import phone3 from '@/../public/img/reality/phone_3.png'
import Image from "next/image";
import {Text} from "@/app/_components/partials/Text/Text";
import {BtnBig} from "@/app/_components/partials/BtnBig/BtnBig";
import {BtnSmall} from "@/app/_components/partials/BtnSmall/BtnSmall";

export const PhoneScreens: FC<{ className?: string }> = ({className}) => {
  return (
    <div className={cn(s.block, className)}>
      <div className={s.wrapper}>
        <div className={s.screen}>
          <Image src={phone1} alt="phone screen 1"/>
        </div>
        <div className={s.screen}>
          <Image src={phone2} alt="phone screen 2"/>
        </div>
        <div className={s.screen}>
          <Image src={phone3} alt="phone screen 2"/>
        </div>
      </div>
      <Text className={s.text}>
        <>
          <div className="row color_gray">Choose what it is, a game or a new image</div>
          <div className="row color_gray">in the intersection of life and technology in</div>
          <div className="row">Reality 2.0</div>
        </>
      </Text>
      <BtnSmall className={s.btn} onClick={() => {
        console.log()
      }}>More info</BtnSmall>
    </div>
  )
}


