import s from "@/app/_components/screens/Login/Login.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import React from "react";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";

export const Final = ()=>{
  return (
    <>
      <div className={s.description}>
        <Title tag={'h4'} className={s.title}>Welcome, nickname</Title>
        <p className={s.text}>Your profile created</p>
      </div>
      <BtnBig className={s.nav__btn} color={'white'}>
        Start to explore
      </BtnBig>
    </>
  );
};
