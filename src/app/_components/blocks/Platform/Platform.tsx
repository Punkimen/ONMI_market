'use client';
import React, {FC, useCallback, useRef, useState} from 'react';
import s from './Platform.module.scss';
import cn from 'classnames';
import {Title} from "@/app/_components/partials/Title/Title";
import {Text} from "@/app/_components/partials/Text/Text";
import Link from "next/link";
import Image from "next/image";
import googleIcon from '@/../public/img/icons/googlePlay.svg';
import appleIcon from '@/../public/img/icons/apple.svg';
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";

interface IPlatformProps {
  className?: string
}

const scalingBtnPositive = (el:HTMLElement) => {
  el.style.width = `120%`;
  el.style.borderRadius = '15.10vw';
};
const scalingBtnNegative = (el:HTMLElement) => {
  el.style.width = `80%`;
};
const setNormalSize = (el:HTMLElement) => {
  el.style.width = "100%";
};

export const Platform: FC<IPlatformProps> = ({className}) => {
  const windowWidth = useWindowWidth();
  const googleBtn = useRef(null);
  const appleBtn = useRef(null);

  const hoverAppleBtn = useCallback(() => {
    if(windowWidth > 768){
      appleBtn.current && scalingBtnPositive(appleBtn.current);
      googleBtn.current && scalingBtnNegative(googleBtn.current);
    }
  }, [windowWidth]);
  const hoverGoogleBtn = useCallback(() => {
    if(windowWidth > 768){
      googleBtn.current && scalingBtnPositive(googleBtn.current);
      appleBtn.current && scalingBtnNegative(appleBtn.current);
    }
  }, [windowWidth]);

  const leveSizeBtns = useCallback(() => {
    if(windowWidth > 768){
      appleBtn.current && setNormalSize(appleBtn.current);
      googleBtn.current && setNormalSize(googleBtn.current);
    }
  }, [windowWidth]);

  return (
    <section className={cn(s.platform, className)}>
      <Title className={s.title} tag={'h2'}>
        <>
          <div className="row">
            <div className='color_gray'>Choose</div>
          </div>
          <div className="row">
            <div>
              <span className='color_gray'>your</span> platform
            </div>
          </div>
        </>
      </Title>
      <Text className={s.text}>
        <>
          <div className="row">Become a part of a private product</div>
          <div className="row">testing team</div>
        </>
      </Text>
      <div className={s.btns}>
        <Link href={'#'} ref={googleBtn} onMouseEnter={hoverGoogleBtn} onMouseLeave={leveSizeBtns} className={cn(s.btn, s.btn_google)}>
          <div className={s['btn-text']}>Download on the</div>
          <div className={s['btn-label']}>
            <div className={s['btn-icon']}>
              <Image src={googleIcon} alt="googlePlay"/>
            </div>
            <div className={s['btn-name']}>Google Play</div>
          </div>
        </Link>
        <Link href={'#'} ref={appleBtn} onMouseEnter={hoverAppleBtn} onMouseLeave={leveSizeBtns} className={cn(s.btn, s.btn_apple)}>
          <div className={s['btn-text']}>Download on the</div>
          <div className={s['btn-label']}>
            <div className={s['btn-icon']}>
              <Image src={appleIcon} alt="apple"/>
            </div>
            <div className={s['btn-name']}>App Store</div>
          </div>
        </Link>
      </div>

    </section>
  );
};
