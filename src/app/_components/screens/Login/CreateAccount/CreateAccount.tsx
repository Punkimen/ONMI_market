"use client";
import s from "@/app/_components/screens/Login/Login.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import {Input} from "@/app/_components/partials/Input/Input";
import React from "react";
import {useInput} from "@/app/_hooks/useInput";

export const CreateAccount = () => {
  const email = useInput('');
  return (
    <>
      <div className={s.description}>
        <Title tag={'h4'} className={s.title}>Welcome to onmi®</Title>
        <p className={s.text}>Your nickname and password</p>
      </div>
      <div className={s.fields}>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"your@email.com"}/>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"nickname"}/>
        <Input {...email} styletype={'line'} blockClass={s.input}
          placeholder={"password (must have at least 8 characters)"}/>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"confirm password"}/>
        <Input {...email} styletype={'line'} blockClass={s.input} placeholder={"invite code"}/>
      </div>
      <div className={s.text_small}>
        Resend code (00:59)
      </div>
    </>
  );
};
