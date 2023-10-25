"use client";
import s from "@/app/_components/screens/Login/Login.module.scss";
import {Input} from "@/app/_components/partials/Input/Input";
import React from "react";
import {useInput} from "@/app/_hooks/useInput";
import {Routes} from "@/app/_utils/Routes";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import cn from "classnames";

export const CreateAccount = () => {
  const email = useInput('');
  return (
    <LoginLayout title="Create account" description="Your nickname and password" href={Routes.ENTER}>
      <div className={s.fields}>
        <div className={s.row}>
          <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"your@email.com"}/>
          <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"Code from your@email.com"}/>
        </div>
        <div className={cn(s.text_small, s.code)}>
              Send code (00:59)
        </div>
        <div className={s.row}>
          <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"password"}/>
          <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"confirm password"}/>
        </div>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"nickname"}/>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"invite code"}/>
      </div>

    </LoginLayout>
  );
};
