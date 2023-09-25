import s from './Login.module.scss';
import React, {FC} from "react";
import {BtnEnter} from "@/app/_components/partials/Buttons/BtnEnter/BtnEnter";
import apple from "../../../../../public/img/icons/apple_black.svg";
import email from "../../../../../public/img/icons/email.svg";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";
import cn from "classnames";

export const Login: FC = () => {
  return (
    <LoginLayout description={'Continue with apple or your email address to create an account or sign in.'}
      isHideNav={true}>
      <div className={s.btns}>
        <BtnEnter className={cn(s.btn, 'opacity')} icon={apple} color={'white'}>Continue with Apple</BtnEnter>
        <BtnEnter className={cn(s.btn, 'opacity')} data-delay="0.1" icon={email} href={Routes.EMAIL}>Continue with
          Email</BtnEnter>
      </div>
    </LoginLayout>
  );
};
