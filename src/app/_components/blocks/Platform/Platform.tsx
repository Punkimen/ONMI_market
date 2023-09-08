import React, {FC, useState} from 'react';
import s from './Platform.module.scss';
import cn from 'classnames';
import {Title} from "@/app/_components/partials/Title/Title";
import {Text} from "@/app/_components/partials/Text/Text";
import Link from "next/link";
import Image from "next/image";
import googleIcon from '@/../public/img/icons/googlePlay.svg';
import appleIcon from '@/../public/img/icons/apple.svg';

interface IPlatformProps {
  className?: string
}

export const Platform: FC<IPlatformProps> = ({className}) => {
  return (
    <section className={cn(s.platform, className)}>
      <Title tag={'h2'}>
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
        <Link href={'#'} className={cn(s.btn, s.btn_google)}>
          <div className={s['btn-text']}>Download on the</div>
          <div className={s['btn-label']}>
            <div className={s['btn-icon']}>
              <Image src={googleIcon} alt="googlePlay"/>
            </div>
            <div className={s['btn-name']}>Google Play</div>
          </div>
        </Link>
        <Link href={'#'} className={cn(s.btn, s.btn_apple)}>
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
