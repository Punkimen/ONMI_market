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

interface IModalClothCraftProps extends IBaseComponents, Pick<IClothe, 'price' | 'imgSrc' | 'collection' | 'category' | 'imgSrc'> {
  show: boolean,
  onHandle: (isShow: boolean) => void;
  type?: "OMI",
  model?: 'A' | 'B' | 'C' | 'D'
}

export const ModalClotheCraft: FC<IModalClothCraftProps> = ({
  show,
  type,
  model,
  onHandle,
  imgSrc,
  className,
  category,
  collection,
}) => {
  return (
    <Modal className={cn(s.modal, className, type === 'OMI' && s.modal_omi)} show={show} onHandle={onHandle}>
      <div className={s.title}>{category}</div>
      <div className={s.subtitle}>{type === 'OMI' ? `${model}-Model` : collection.name}</div>
      <div className={s.img}>
        <Image src={imgSrc} alt={category}/>
      </div>

      {type === 'OMI' ? null :
        <div className={s.content}>
          <div className={s.text}>Final attributes, colors and type will be determined automatically</div>
          <Link hidden={type === 'OMI'} href={''} className={s.link}>
            How crafting works →
          </Link>
        </div>
      }

      <BtnBig className={s.btn}>
        Craft for 290 MAC
      </BtnBig>

    </Modal>
  );
};
