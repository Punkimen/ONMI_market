import React, {FC, useLayoutEffect, useRef} from 'react';
import s from './PhoneScreens.module.scss';
import cn from 'classnames';
import phone1 from '@/../public/img/reality/phone_1.png';
import phone2 from '@/../public/img/reality/phone_2.png';
import phone3 from '@/../public/img/reality/phone_3.png';
import Image from "next/image";
import {Text} from "@/app/_components/partials/Text/Text";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {gsap} from "gsap";
import {horizontalTransform} from "@/app/_animations/animation";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";

export const PhoneScreens: FC<{ className?: string }> = ({className}) => {
  const screen_1 = useRef<HTMLDivElement>(null);
  const screen_3 = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();
  useLayoutEffect(() => {
    if (windowWidth > 450) {
      horizontalTransform(gsap, screen_1.current, screen_1.current, '17.5vw', '0', true, null, 'top bottom', 'top+=25 center');
      horizontalTransform(gsap, screen_3.current, screen_3.current, '-17.5vw', "0", true, null, 'top bottom', 'top+=25 center');
    }
  }, [windowWidth, screen_1, screen_3]);
  return (
    <div className={cn(s.block, className)}>
      <div className={s.wrapper}>
        <div ref={screen_1} className={cn(s.screen, s.screen_1)}>
          <Image src={phone1} alt="phone screen 1"/>
        </div>
        {windowWidth > 450 && <>
          <div className={cn(s.screen, s.screen_2)}>
            <Image src={phone2} alt="phone screen 2"/>
          </div>
          <div ref={screen_3} className={cn(s.screen, s.screen_3)}>
            <Image src={phone3} alt="phone screen 3"/>
          </div>
        </>}

      </div>
      <Text className={s.text}>
        {windowWidth > 450 ? <>
          <div className="row color_gray">
            <span className={'text-line'}>Choose what it is, a game or a new image</span>
          </div>
          <div className="row color_gray"><span data-delay={'0.1'}
            className={'text-line'}>in the intersection of life and technology in</span>
          </div>
          <div className="row"><span data-delay={'0.2'} className={'text-line'}>Reality 2.0</span></div>
        </> : <>
          <div className="row color_gray">
            <span className={'text-line'}>An exciting game or a new way</span>
          </div>
          <div className="row color_gray"><span data-delay={'0.1'}
            className={'text-line'}>of life built on the crossroads of</span>
          </div>
          <div className="row color_gray"><span data-delay={'0.1'}
            className={'text-line'}>reality and technology?</span>
          </div>
          <div className="row color_gray"><span data-delay={'0.1'}
            className={'text-line'}>The choice is yours in</span>
          </div>
          <div className="row"><span data-delay={'0.2'} className={'text-line'}>Reality 2.0</span></div>
        </>}
      </Text>
      <BtnBig className={s.btn} color={'white'} onClick={() => {
      }}>More info</BtnBig>
    </div>
  );
};


