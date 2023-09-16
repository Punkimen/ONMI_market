"use client";

import s from "@/app/_components/screens/Login/Login.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import React from "react";
import {Input} from "@/app/_components/partials/Input/Input";
import {useInput} from "@/app/_hooks/useInput";
import Link from "next/link";
import arrow from "@/../public/img/icons/arrow_link.svg";
import Image from "next/image";
import {LoginLayout} from "@/app/_components/screens/Login/LoginLayout";
import {Routes} from "@/app/_utils/Routes";

export const Enter = () => {
  const email = useInput('');
  const password = useInput('');
  return (
    <LoginLayout description='Enter your email and password' href={Routes.HOME}>
      <div className={s.fields}>
        <Input {...email} blockClass={s.input} styletype={'line'} placeholder={"your@email.com"}/>
        <Input {...password} blockClass={s.input} styletype={'line'} placeholder={"password"} type={'password'}/>
      </div>
      <Link href={Routes.FORGOT} className={s.text_small}>
        <span>Forgot password </span>
        <Image src={arrow} alt={'arrow'}/>
      </Link>
    </LoginLayout>
  );
};
