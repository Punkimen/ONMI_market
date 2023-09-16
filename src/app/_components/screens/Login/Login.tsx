import s from './Login.module.scss';
import React, {FC} from "react";
import {BtnEnter} from "@/app/_components/partials/Buttons/BtnEnter/BtnEnter";
import apple from "../../../../../public/img/icons/apple_black.svg";
import email from "../../../../../public/img/icons/email.svg";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";

export const Login: FC = () => {
  return (
    <LoginLayout description={'Continue with apple or your email address to create an account or sign in.'} isHideNav={true} >
      <div className={s.btns}>
        <BtnEnter className={s.btn} icon={apple} color={'white'}>Continue with Apple</BtnEnter>
        <BtnEnter className={s.btn} icon={email} href={Routes.EMAIL}>Continue with Email</BtnEnter>
      </div>
    </LoginLayout>
  );
};
