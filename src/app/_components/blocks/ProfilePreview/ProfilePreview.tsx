import React, {FC, useState} from 'react';
import Image from "next/image";
import {useUser} from "@/app/_state/store";
import avatar from '@/../public/img/avatar.png';
import s from './ProfilePreview.module.scss';
import {IBaseComponents} from "@/app/_types/base.types";
import cn from "classnames";
import {Balance} from "@/app/_components/partials/Balance/Balance";
import {Wallet} from "@/app/_components/blocks/Wallet/Wallet";
export const ProfilePreview:FC<IBaseComponents> = ({className,hide})=>{
  const user = useUser(state => state);
  const [walletShow, setWalletShow] = useState(false);

  if(hide) return null;

  return (
    <div className={cn(s.preview, className)}>
      <div className={s.avatar}>
        <Image src={user.avatar || avatar} alt={'avatar'} />
      </div>
      <div className={s.name}>{user.nickname}</div>
      <Balance className={cn(s.balance)} onClick={() => setWalletShow(!walletShow)}
        hide={!user.isAuth}/>
      <Wallet className={s.wallet} show={walletShow} close={() => setWalletShow(false)}/>
    </div>
  );
};
