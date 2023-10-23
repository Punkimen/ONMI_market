import React, {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";
import cn from 'classnames';
import Image from "next/image";
import {Text} from "@/app/_components/partials/Text/Text";
import pose from '@/../public/img/collection_pose.png';
import lock from '@/../public/img/icons/lock_icon.svg';
import s from './ClothesCollection.module.scss';

export const ClothesCollection: FC<IBaseComponents> = ({className}) => {
  return (
    <div className={cn(s.block, className)}>
      <div className={s.img}>
        <Image src={pose} alt={'pose'} quality={100}/>
      </div>
      <Text className={s.text}>
        These items <span className={'color_green'}>open the digital story</span> of Reality 2.0
        and will become a hunting item for
        digital collectors over time.
      </Text>
      <div className={s.available}>
        <Image src={lock} alt={'pose'} />
        Available only 10000
      </div>
    </div>
  );
};
