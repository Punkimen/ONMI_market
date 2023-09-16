"use client";
import {useInput} from "@/app/_hooks/useInput";
import s from "@/app/_components/screens/Login/Login.module.scss";
import {Input} from "@/app/_components/partials/Input/Input";
import React from "react";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";

export const ResetPassword = () => {
  const email = useInput('');
  const pass = useInput('');
  const confirm = useInput('');
  return (
    <LoginLayout title="Reset password" description="Enter your new passowrd" href={Routes.ENTER}>
      <div className={s.fields}>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"your@email.com"}/>
        <Input {...pass} styletype={'line'} type={'password'} blockClass={s.input} placeholder={"password (must have at least 8 characters)"}/>
        <Input {...confirm} styletype={'line'} type={'password'} blockClass={s.input} placeholder={"confirm password"}/>
      </div>
    </LoginLayout>
  );
};
