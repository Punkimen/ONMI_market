import React, {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";
import {Title} from "@/app/_components/partials/Title/Title";
import {CardsFashion} from "@/app/_components/blocks/CardsFashion/CardsFashion";
import s from './Fashionable.module.scss';

export const Fashionable: FC<IBaseComponents> = ({className}) => {
  return (
    <section className={s.fashion}>
      <Title tag={'h2'} className={s.title}>
        <div className="row">
          <div className="text-line color_gray">Not just</div>
        </div>
        <div className="row">
          <div className="text-line" data-delay={0.1}>fashionable</div>
        </div>
      </Title>
      <div className="container">
        <CardsFashion/>
      </div>
    </section>
  );
};
