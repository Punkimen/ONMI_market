"use client";

import s from "@/app/_components/screens/Login/Login.module.scss";
import React from "react";
import {Input} from "@/app/_components/partials/Input/Input";
import {useInput} from "@/app/_hooks/useInput";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";

export const Email = ()=>{
  const email = useInput('');
  return (
    <LoginLayout description='Enter your email to continue' href={Routes.ENTER}>
      <div className={s.fields}>
        <Input {...email} className={'opacity'} styletype={'line'} blockClass={s.input} placeholder={"your@email.com"}/>
      </div>
    </LoginLayout>
  );
};
