import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Modal.module.scss';
import {IBaseComponents} from "@/app/_types/base.types";
import {ChildrenType} from "@/app/_types/children.types";
import cn from "classnames";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import {useOutsideClick} from "@/app/_hooks/useOutsideClick";

interface IModalProps extends IBaseComponents {
  children: ChildrenType,
  show?: boolean,
  onHandle: (isShow: boolean) => void;
}

export const Modal: FC<IModalProps> = ({children, onHandle, show, className}) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => {
    onHandle(false);
  });
  return (
    <div className={cn(s.wrapper, show && s.show)}>
      <div className={cn(s.modal, className)} ref={modalRef}>
        <BtnReset className={s.close} onClick={()=>onHandle(false)}>
          <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 10.5C0 16.299 4.70101 21 10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5ZM10.5 11.7431L13.7547 15L15 13.7418L11.7453 10.491L14.994 7.24615L13.7426 6L10.5 9.2388L7.25735 6L6.00602 7.24615L9.24866 10.491L6 13.7418L7.24532 15L10.5 11.7431Z"
              fill="inherit"/>
          </svg>
        </BtnReset>
        {children}
      </div>
    </div>
  );
};
