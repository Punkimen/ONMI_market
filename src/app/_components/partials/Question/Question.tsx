import React, {FC, useState} from 'react';
import s from './Question.module.scss';
import cn from 'classnames';
import arrow from '@/../public/img/icons/arrow.svg';
import Image from "next/image";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";

interface IQuestionProps {
  title: string;
  text: string[];
}

export const Question: FC<IQuestionProps> = ({title, text}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn(s.question, open && s.open)}>
      <LineDecor/>
      <div className={cn(s.header, 'opacity')} onClick={() => {
        setOpen(!open)
      }}>
        <div className={s.title}>{title}</div>
        <div className={s.arrow}>
          <Image src={arrow} alt='arrow'/>
        </div>
      </div>
      <div className={s.body}>
        {text.map((el, index) => {
          return <div key={index} dangerouslySetInnerHTML={{__html: el}}/>
        })}
      </div>
    </div>
  )
}
