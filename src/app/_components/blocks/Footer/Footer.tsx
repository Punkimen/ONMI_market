import React, {FC} from 'react';
import s from './Footer.module.scss';
import Link from "next/link";
import x from '@/../public/img/icons/x.svg';
import instagram from '@/../public/img/icons/instagram.svg';
import fb from '@/../public/img/icons/fb.svg';
import medium from '@/../public/img/icons/medium.svg';
import Image from "next/image";
import apple from '@/../public/img/icons/apple.svg';
import googlePlay from '@/../public/img/icons/googlePlay.svg';
import logo from '@/../public/img/logo.svg';
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import cn from "classnames";

export const Footer: FC = () => {

  const windowWidth = useWindowWidth();

  return (
    <div className={s.footer}>
      <div className="container">
        <LineDecor hide={windowWidth <= 450}/>
        <div className={s["footer__wrapper"]}>
          <div className={s["footer__left"]}>
            <div className={s["footer__logo"]}>
              <Image src={logo} alt={'ONMI'}/>
            </div>
            <div className={s["footer__labels"]}>
              <span>onmi®</span>
              <span>Play with the world.</span>
            </div>
          </div>
          <div className={s["footer__right"]}>
            <div className={s["footer__socials"]}>
              <Link href="https://twitter.com/onmionmi" target="_blank"
                className={cn(s["footer__socials-link"], s.x)}>
                <Image  src={x} alt={'twitter/x'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://instagram.com/onmi.world" target="_blank"
                className={cn(s["footer__socials-link"], s.instagram)}>
                <Image src={instagram} alt={'instagram'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://facebook.com/onmi.world" target="_blank"
                className={cn(s["footer__socials-link"],s.fb)}>
                <Image  src={fb} alt={'facebook'} width='auto' height={'auto'}/>
              </Link>
              <Link href="https://medium.com/@onmi" target="_blank" className={cn(s["footer__socials-link"],s.medium)}>
                <Image src={medium} alt={'medium'} width='auto' height={'auto'}/>
              </Link>
            </div>
            <div className={s["footer__btns"]}>
              <button type="button" data-open="#modal" className={`${s["footer__btn"]} ${s["app-btn"]}`}>
                <Image src={apple} alt="apple" className={s["app-btn__icon"]}/>
                <span className={s["app-btn__text"]}>App Store</span>
              </button>
              <button type="button" data-open="#modal" className={`${s["footer__btn"]} ${s["app-btn"]}`}>
                <Image src={googlePlay} alt="google Play" className={s["app-btn__icon"]}/>
                <span className={s["app-btn__text"]}>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
