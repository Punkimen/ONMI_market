import {Modal} from "@/app/_components/blocks/Modal/Modal";
import React, {FC} from "react";
import s from './ModalClotheCraft.module.scss';
import cn from 'classnames';
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {BtnSmall} from "@/app/_components/partials/Buttons/BtnSmall/BtnSmall";
import Link from "next/link";
import {IBaseComponents} from "@/app/_types/base.types";
import {IClothe} from "@/app/_types/cards.types";
import Image from "next/image";
interface IModalClothCraftProps extends IBaseComponents, Pick<IClothe, 'price' | 'imgSrc' | 'collection' | 'category' | 'imgSrc'>{
  show: boolean,
  onHandle: (isShow: boolean)=>void;
}
export const ModalClotheCraft:FC<IModalClothCraftProps> = ({show, onHandle,imgSrc,className,category,price,collection,hide})=>{
  return (
    <Modal className={s.modal} show={show} onHandle={onHandle}>
      <div className={s.title}>{category}</div>
      <div className={s.text}>{collection.name}</div>
      <div className={s.img}>
        <Image src={imgSrc} alt={category} />
      </div>
      <div className={s.text}>Final attributes, colors and type will be determined automatically</div>
      <BtnBig className={s.btn}>
        Craft for 290 MAC
      </BtnBig>
      <Link href={''} className={s.link}>
        How crafting works →
      </Link>
    </Modal>
  );
};
