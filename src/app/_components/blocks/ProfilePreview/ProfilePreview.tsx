import React, {FC, useState} from 'react';
import Image from "next/image";
import {useUser} from "@/app/_state/store";
import avatar from '@/../public/img/avatar.png';
import s from './ProfilePreview.module.scss';
import {IBaseComponents} from "@/app/_types/base.types";
import cn from "classnames";
import {Balance} from "@/app/_components/partials/Balance/Balance";
import {Wallet} from "@/app/_components/blocks/Wallet/Wallet";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {useRouter} from "next/navigation";
import {Routes} from "@/app/_utils/Routes";

export const ProfilePreview: FC<IBaseComponents> = ({className, hide}) => {
  const user = useUser(state => state);
  const [walletShow, setWalletShow] = useState(false);
  const windowWidth = useWindowWidth();
  const router = useRouter();
  if (hide) return null;

  return (
    <div className={cn(s.preview, className)}>
      <div className={s.avatar}>
        <Image src={user.avatar || avatar} alt={'avatar'}/>
      </div>
      <div className={s.name}>{user.nickname}</div>
      <Balance className={cn(s.balance)} onClick={() => {
        if (windowWidth <= 450 && windowWidth > 0) {
          router.replace(Routes.WALLET);
        } else {
          setWalletShow(!walletShow);
        }
      }} hide={!user.isAuth}/>
      <Wallet className={s.wallet} hide={windowWidth <= 450 && windowWidth > 0} show={walletShow}
        close={() => setWalletShow(false)}/>
    </div>
  );
};
