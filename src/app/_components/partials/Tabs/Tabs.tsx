import {IBaseComponents} from "@/app/_types/base.types";
import React, {FC, useEffect, useRef} from "react";
import cn from "classnames";
import {gsap} from "gsap";
import {useInventoryState} from "@/app/_state/store";
import s from './Tabs.module.scss';

interface ITabsProps extends IBaseComponents {
}

export const Tabs: FC<ITabsProps> = React.memo(({hide, className}) => {

  const tabs = useInventoryState(state => state.tabs);
  const changeActiveTab = useInventoryState(state => state.changeActiveTab);

  const listRef = useRef<HTMLUListElement | null>(null);
  const selectorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const selector = selectorRef.current;

    if (list && selector) {
      const activeEl = list.querySelector(`.${s.active}`);

      if (activeEl) {
        const width = activeEl.getBoundingClientRect().width;
        const left = activeEl.getBoundingClientRect().left - list.getBoundingClientRect().left;
        gsap.to(selector, {
          width: width,
          left: left,
          duration: 0.3, // Adjust the animation duration as needed
          ease: 'power2.inOut', // Adjust the easing function as needed
        });
      }
    }
  }, [tabs, listRef, selectorRef, hide]);
  if (hide) return null;
  return <nav className={cn(s.tabs, className)}>
    <ul className={s.list} ref={listRef}>
      <div ref={selectorRef} className={s.selector}></div>
      {tabs.map(el => {
        return <li className={s.elem} key={el.title}>
          <button className={cn(s.tab, el.isActive && s.active, 'btn-reset')}
            onClick={() => {
              changeActiveTab(el.title);
            }}>{el.title}</button>
        </li>;
      })}
    </ul>
  </nav>;
});

Tabs.displayName = 'Tabs';
