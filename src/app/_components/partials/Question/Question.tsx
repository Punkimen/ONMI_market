import React, {FC, useState} from 'react';
import s from './Question.module.scss';
import cn from 'classnames';
import arrow from '@/../public/img/icons/arrow.svg';
import Image from "next/image";

interface IQuestionProps {
    title: string;
    text: string[];
}

export const Question: FC<IQuestionProps> = ({title, text}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={cn(s.question, open && s.open)}>
            <div className={s.header} onClick={() => {
                setOpen(!open)
            }}>
                <div className={s.title}>{title}</div>
                <div className={s.arrow}>
                    <Image src={arrow} alt='arrow'/>
                </div>
            </div>
            <div className={s.body}>
                {text.map((el, index) => {
                    return <p key={index} dangerouslySetInnerHTML={{__html: el}}/>
                })}
            </div>
        </div>
    )
}
