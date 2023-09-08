import React, {FC} from 'react';
import s from './Footer.module.scss';
import cn from 'classnames';
import Link from "next/link";
import x from '@/../public/img/icons/x.svg';
import instagram from '@/../public/img/icons/instagram.svg';
import fb from '@/../public/img/icons/fb.svg';
import medium from '@/../public/img/icons/medium.svg';
import Image from "next/image";
import apple from '@/../public/img/icons/apple.svg';
import googlePlay from '@/../public/img/icons/googlePlay.svg';
import Logo from '@/../public/img/logo.svg';
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";

export const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <LineDecor/>
        <div className={s["footer__wrapper"]}>
          <div className={s["footer__left"]}>
            <div className={s["footer__logo"]}>
              <Image src={Logo} alt={'ONMI'}/>
            </div>
            <div className={s["footer__labels"]}>
              <span>onmi®</span>
              <span>Play with the world.</span>
            </div>
          </div>
          <div className={s["footer__right"]}>
            <div className={s["footer__socials"]}>
              <Link href="https://twitter.com/onmionmi" target="_blank" className={s["footer__socials-link"]}>
                <Image src={x} alt={'twitter/x'}/>
              </Link>
              <Link href="https://instagram.com/onmi.world" target="_blank" className={s["footer__socials-link"]}>
                <Image src={instagram} alt={'instagram'}/>
              </Link>
              <Link href="https://facebook.com/onmi.world" target="_blank" className={s["footer__socials-link"]}>
                <Image src={fb} alt={'facebook'}/>
              </Link>
              <Link href="https://medium.com/@onmi" target="_blank" className={s["footer__socials-link"]}>
                <Image src={medium} alt={'medium'}/>
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
        <div className={s["footer__text"]}>
          <p>Welcome to onmi, the exciting XR app! Please read this carefully as it governs your use of the onmi
            platform.
            We value your privacy. Please read our privacy policy which details how we collect, use and protect your
            personal information. Before you start playing, read the detailed contents of the game rules, mechanics and
            terms of participation. We are committed to providing a fair and fun gaming environment for all of our
            players.
            You can choose from a variety of payment methods including Apple Pay, Google Pay, credit cards through the
            Xsolla platform, and cryptocurrencies through Coinbase. Please familiarize yourself with each method before
            making a payment. The use of cryptocurrencies can carry financial risks. Aware of possible risks and
            familiarize
            yourself. If you have any questions or suggestions, please contact us at: <a
            href="welcome@onmi.io."
            target="_blank">welcome@onmi.io.</a>
            onmi is intended for
            users who are at least 12 years old. Please do not use the platform if you are under 12 years old. Thank you
            for
            choosing onmi for entertainment and education! Last update date: August 10, 2023</p>
        </div>
        <div className={s["footer__copy"]}>
          Copyright © 2023 onmi®. All rights reserved.
        </div>
      </div>
    </div>
  );
};
