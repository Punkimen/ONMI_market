import React, {FC, useLayoutEffect, useRef} from 'react';
import s from './PhoneScreens.module.scss';
import cn from 'classnames';
// images
import phone1 from '@/../public/img/reality/phone_1.png'
import phone2 from '@/../public/img/reality/phone_2.png'
import phone3 from '@/../public/img/reality/phone_3.png'
import Image from "next/image";
import {Text} from "@/app/_components/partials/Text/Text";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {horizontalTransform, triggerAnimate} from "@/app/_animations/animation";

export const PhoneScreens: FC<{ className?: string }> = ({className}) => {
  const screen_1 = useRef<HTMLDivElement>(null)
  const screen_3 = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    horizontalTransform(gsap, screen_1.current, screen_1.current, '21.0625rem', '0', true, null, 'top bottom', 'top+=25 center')
    horizontalTransform(gsap, screen_3.current, screen_3.current, '-21.0625rem', "0", true, null, 'top bottom', 'top+=25 center')
  }, []);
  return (
    <div className={cn(s.block, className)}>
      <div className={s.wrapper}>
        <div ref={screen_1} className={cn(s.screen, s.screen_1)}>
          <Image src={phone1} alt="phone screen 1"/>
        </div>
        <div className={cn(s.screen, s.screen_2)}>
          <Image src={phone2} alt="phone screen 2"/>
        </div>
        <div ref={screen_3} className={cn(s.screen, s.screen_3)}>
          <Image src={phone3} alt="phone screen 3"/>
        </div>
      </div>
      <Text className={s.text}>
        <>
          <div className="row color_gray">
            <span className={'text-line'}>Choose what it is, a game or a new image</span>

          </div>
          <div className="row color_gray"><span data-delay={'0.1'}
                                                className={'text-line'}>in the intersection of life and technology in</span>
          </div>
          <div className="row"><span data-delay={'0.2'} className={'text-line'}>Reality 2.0</span></div>
        </>
      </Text>
      <BtnSmall className={s.btn} onClick={() => {
      }}>More info</BtnSmall>
    </div>
  )
}


