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
import {useUser} from "@/app/_state/store";
import {useStore} from "zustand";
import {useRouter} from "next/navigation";
import cn from "classnames";

export const Enter = () => {
  const email = useInput('');
  const password = useInput('');
  const auth = useStore(useUser, (state)=>state);
  const router = useRouter();

  const onClick = ()=>{
    auth.auth();
    router.push(Routes.HOME);
  };

  return (
    <LoginLayout description='Enter your email and password' onClick={onClick}>
      <div className={s.fields}>
        <Input {...email} blockClass={s.input} className={'opacity'}  styletype={'line'} placeholder={"your@email.com"}/>
        <Input {...password} blockClass={s.input} className={'opacity'} data-delay="0.1" styletype={'line'} placeholder={"password"} type={'password'}/>
      </div>
      <Link href={Routes.FORGOT} className={cn(s.text_small, 'opacity')} data-delay="0.2">
        <span>Forgot password </span>
        <Image src={arrow} alt={'arrow'}/>
      </Link>
    </LoginLayout>
  );
};
