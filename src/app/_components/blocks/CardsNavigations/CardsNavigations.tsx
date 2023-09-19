import React, {FC} from 'react';
import s from './CardsNavigations.module.scss';
import cn from 'classnames';
import Image from "next/image";
// images
import miniGames from '@/../public/img/nav_cards/mini-games.svg';
import omiSocial from '@/../public/img/nav_cards/social.png';
import map from '@/../public/img/nav_cards/discover-map.png';
import pose from '@/../public/img/nav_cards/hunger-pose.png';
import signature from '@/../public/img/nav_cards/sugnature.svg';
import battle from '@/../public/img/nav_cards/battle.png';
import customize from '@/../public/img/nav_cards/customize.png';
import chatPhone from '@/../public/img/nav_cards/chat-phone.png';
import {BackgroundImage} from "@/app/_components/partials/BackgroundImage/BackgroundImage";

export const CardsNavigations: FC = () => {
  return (
    <div className={s.cards}>
      <div className={cn(s["cards__col"], s['cards__col_1'])}>
        <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__money'])}>
          <div className={s["card__money-label"]}>Earn money</div>
        </div>
        <div className={s.row}>
          <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__mini-games'])}>
            <div className={s["card__icon"]}>
              <Image src={miniGames} alt={'mini games'}/>
            </div>
            <div className={s["card__text"]}>Mini-games</div>
          </div>
          <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__social'])}>
            <div className={s["card__icon"]}>
              <Image src={omiSocial} alt={'avatars'}/>
            </div>
            <div className={s["card__text"]}>Omi social ID</div>
          </div>
        </div>
        <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__discover'])}>
          <BackgroundImage src={map} alt={'map'}/>
          <div className={s["card__text"]}>Re-explore the world around you
          </div>
        </div>
      </div>
      <div className={cn(s["cards__col"], s['cards__col_2'])}>
        <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__hunger-games'])}>
          <div className={s["card__hunger-label"]}>The Hunger
            Games
          </div>
          <div className={s["card__hunger-img"]}>
            <Image src={pose} alt={'omi pose'}/>
          </div>
        </div>
        <div data-delay="0.1" className={cn(s.card, 'opacity', s.card__text, s['card__signature'])}>
          <BackgroundImage src={signature} alt={'signature'}/>
          <div className={cn(s['card__text'], s["card__signature-text"])}>Signature routes</div>
        </div>
      </div>
      <div className={cn(s["cards__col"], s['cards__col_3'])}>
        <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__battle'])}>
          <BackgroundImage src={battle} alt={'battle'}/>
          <div className={s['card__battle-label']}>Battles</div>
        </div>
        <div className={s.row}>
          <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__customize'])}>
            <div className={s["card__customize-img"]}>
              <Image src={customize} alt={'customize jacket'}/>
            </div>
            <div className={cn(s["card__customize-text"], s['card__text'])}>Omi
              <br/> Customization
            </div>
          </div>
          <div data-delay="0.1" className={cn(s.card, 'opacity', s['card__chat'])}>
            <div className={cn(s["card__chat-text"], s['card__text'])}>Have meaningful conversations
            </div>
            <div className={s["card__chat-img"]}>
              <Image src={chatPhone} alt={'screen chat'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
