"use client";
import {useInput} from "@/app/_hooks/useInput";
import s from "@/app/_components/screens/Login/Login.module.scss";
import {Input} from "@/app/_components/partials/Input/Input";
import React from "react";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";

export const ResetPasswordEmail = () => {
  const email = useInput('');
  return (
    <LoginLayout title={'Reset password'} description='Enter your email to continue' href={Routes.RESET}>
      <div className={s.fields}>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"your@email.com"}/>
      </div>
    </LoginLayout>
  );
};
