import React, {FC} from 'react';
import s from './Wallet.module.scss';
import cn from 'classnames';
import {Title} from "@/app/_components/partials/Title/Title";
import Image from "next/image";
import security from "@/../public/img/icons/security.svg";
import {IBaseComponents} from "@/app/_types/base.types";
import {WalletBlock} from "@/app/_components/partials/WalletBlock/WalletBlock";

interface IWalletProps extends IBaseComponents {
  show: boolean,
  close?: () => void;
}

export const Wallet: FC<IWalletProps> = ({show, close}) => {
  return (
    <div className={cn(s.wallet, show && s.show)}>
      <div className={s.close} onClick={close}>
        <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5ZM10.5 11.7431L13.7547 15L15 13.7418L11.7453 10.491L14.994 7.24615L13.7426 6L10.5 9.2388L7.25735 6L6.00602 7.24615L9.24866 10.491L6 13.7418L7.24532 15L10.5 11.7431Z"
            fill="inherit"/>
        </svg>
      </div>
      <div className={s.content}>
        <div className={s.top}>
          <Title align={'left'} tag={'h5'} className={s.title}>
            Wallet
          </Title>
          <WalletBlock className={s.block} value={"120 MAC"} course={'1 MAC = 1 USD'}/>
          <WalletBlock className={s.block} value={"0 ONM"} course={'Soon'} isSoon={true}/>
        </div>

        <div className={s.bottom}>
          <div className={s.text}>
            <p>MAC — is an in-game coin for making purchases. All MAC entries will be saved in your account.</p>
            <p>ONM — is an in-game coin for making purchases. All MAC entries will be saved in your account.</p>
          </div>
          <div className={s.powered}>
            <Image src={security} alt="security"/>
            <p><span>powered by</span>
              <svg width="51" height="14" viewBox="0 0 51 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.25574 9.53979L4.00122 13.3198H0.472656L4.34432 6.987L0.864571 1.34169H4.19718L6.15742 4.67965L8.11766 1.34169H11.4991L8.02002 6.987L11.8917 13.3198H8.51025L6.25574 9.53979Z"
                  fill="#F6FAFF"/>
                <path
                  d="M11.5488 10.0307H14.6855C14.8814 10.8653 15.4693 11.2091 16.4498 11.2091C17.3807 11.2091 17.8221 10.9148 17.8221 10.3744C17.8221 9.68759 16.7929 9.6381 15.5676 9.49096C13.9017 9.29434 11.9407 8.90175 11.9407 6.59441C11.9407 4.72913 13.4114 3.40358 16.1555 3.40358C19.0474 3.40358 20.3702 4.72913 20.6645 6.6439H17.675C17.5279 5.95637 17.0376 5.61261 16.1067 5.61261C15.1757 5.61261 14.8326 5.95637 14.8326 6.44727C14.8326 7.03648 15.6659 7.13479 17.0871 7.33075C18.7531 7.52738 20.7622 7.96945 20.7622 10.2273C20.7622 12.1421 19.2921 13.6148 16.3026 13.6148C13.4114 13.5653 11.8431 12.2892 11.5488 10.0307Z"
                  fill="#F6FAFF"/>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M21.6445 8.41153V8.7058C21.6445 11.8966 23.4088 13.5165 26.496 13.5659C29.4855 13.5659 31.3969 11.9455 31.3969 8.7058V8.41153C31.3969 5.17122 29.4367 3.45308 26.5455 3.45308C23.6536 3.45308 21.6445 5.12239 21.6445 8.41153ZM28.4074 8.41153V8.65698C28.4074 10.1785 27.6724 10.9148 26.5943 10.9148C25.4674 10.9148 24.7317 10.1297 24.7317 8.65698V8.41153C24.7317 6.79104 25.4674 6.00587 26.5943 6.00587C27.7212 6.00587 28.4074 6.84053 28.4074 8.41153Z"
                  fill="#F6FAFF"/>
                <path d="M32.7188 13.271V0.458206H35.8066V13.3198H32.7188V13.271Z" fill="#F6FAFF"/>
                <path d="M37.4238 13.271V0.458206H40.5117V13.3198H37.4238V13.271Z" fill="#F6FAFF"/>
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M44.7753 13.5164C46.5396 13.5164 47.6177 12.7313 48.1568 11.6512L48.4999 13.271H50.9991V7.0853C50.9991 4.87627 49.8227 3.40358 46.6373 3.40358C43.5989 3.40358 42.0794 4.87627 41.9329 7.13479H45.0201C45.0689 6.20182 45.5592 5.71093 46.6373 5.71093C47.6665 5.71093 48.0096 6.10351 48.0096 6.6439C48.0096 7.28193 47.4218 7.42906 45.9511 7.62569C44.3827 7.87114 43.6972 8.01827 42.9127 8.50917C42.1289 9.00007 41.6387 9.73641 41.6387 10.9148C41.6387 12.5347 42.6679 13.5164 44.7753 13.5164ZM48.0096 8.80344V9.39265C48.0096 10.3744 47.1763 11.3074 45.9511 11.3074C45.2161 11.3074 44.8241 11.062 44.8241 10.4728C44.8241 10.129 44.9713 9.88355 45.2161 9.68759C45.5592 9.49096 45.8534 9.39265 46.6861 9.24551C47.2746 9.1472 47.7154 9.00007 48.0096 8.80344Z"
                  fill="#F6FAFF"/>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
