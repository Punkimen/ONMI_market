"use client";

import React, {FC, useCallback, useEffect, useState} from "react";
import s from './Inventory.module.scss';
import cn from 'classnames';
import {IMaterialCardProps, MaterialCard} from "@/app/_components/partials/InventoryItems/MaterialCard/MaterialCard";
import hearts from '@/../public/img/materials/hearts.svg';
import cotton from '@/../public/img/materials/cotton.svg';
import leather from '@/../public/img/materials/leather.svg';
import rubber from '@/../public/img/materials/rubber.svg';
import bioplastic from '@/../public/img/materials/bioplastic.svg';
import metall from '@/../public/img/materials/metall.svg';
import obsidian from '@/../public/img/materials/obsidian.svg';
import sapphire from '@/../public/img/materials/sapphire.svg';
import emerald from '@/../public/img/materials/emerald.svg';
import zirkon from '@/../public/img/materials/zirkon.svg';
import {IBox, IInvenCard} from "@/app/_types/cards.types";
import jaket from '@/../public/img/clothes/clothe_1.png';
import omi from '@/../public/img/omi.png';
import box from '@/../public/img/box.png';
import {BoxCard} from "@/app/_components/partials/InventoryItems/BoxCard/BoxCard";
import {IventCard} from "@/app/_components/partials/InventoryItems/IventCard/IventCard";

interface IData {
  minerals: IMaterialCardProps[];
  resources: IMaterialCardProps[];
  clothes: IInvenCard[];
  omis: IInvenCard[];
  boxes: IBox[];
}

const initData: IData = {
  resources: [
    {
      imgSrc: hearts,
      label: "Hearth",
      value: 0,
    },
    {
      imgSrc: cotton,
      label: "Cotton",
      value: 0,
    },
    {
      imgSrc: leather,
      label: "Leather",
      value: 0,
    },
    {
      imgSrc: rubber,
      label: "Rubber",
      value: 0,
    },
    {
      imgSrc: bioplastic,
      label: "Bioplastic",
      value: 0,
    },
    {
      imgSrc: metall,
      label: "Metall",
      value: 0,
    },
  ],
  minerals: [
    {
      imgSrc: obsidian,
      label: "Obsidian",
      value: 0,
    },
    {
      imgSrc: sapphire,
      label: "Sapphire",
      value: 0,
    },
    {
      imgSrc: emerald,
      label: "Emerald",
      value: 0,
    },
    {
      imgSrc: zirkon,
      label: "Zirkon",
      value: 0,
    },
  ],
  clothes: [
    {
      id: 1,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 2,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 3,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 4,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 5,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 6,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 7,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 8,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 9,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }, {
      id: 10,
      imgSrc: jaket,
      resources: [14, 10, 12],
      modelCategory: 'A',
    }
  ],
  omis: [
    {
      id: 1,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    },
    {
      id: 2,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    },
    {
      id: 3,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    }, {
      id: 4,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    }, {
      id: 5,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    }, {
      id: 6,
      imgSrc: omi,
      resources: [14, 10, 12],
      modelCategory: 'A',
      quality: 50,
    }

  ],
  boxes: [
    {
      id: 213341,
      imgSrc: box,
      collectionId: 223445,
    }
  ],
};
const initTabs: Array<{ title: string, isActive: boolean }> = [
  {
    title: "Omis",
    isActive: true,
  },
  {
    title: "Clothes",
    isActive: false,
  },
  {
    title: "Materials",
    isActive: false,
  },
  {
    title: "Boxes",
    isActive: false,
  },
];
export const Inventory: FC = () => {
  const [tabs, setTabs] = useState(initTabs);

  const [activeTab, setActiveTab] = useState<"Omis" |
    "Clothes" |
    "Materials" |
    "Boxes">(// @ts-ignore
      tabs.filter(el => el.isActive === true)[0].title);
  const [cards, setCards] = useState([]);
  const changeTab = useCallback((title: string) => {
    setTabs(prevState => {
      return prevState.map(el => ({
        ...el,
        isActive: el.title === title
      }));
    });
    setActiveTab(title);
  }, [tabs, activeTab]);
  useEffect(() => {
    switch (activeTab) {
      case 'Omis':
        setCards(initData.omis);
        break;
      case 'Clothes':
        setCards(initData.clothes);
        break;
      case 'Boxes':
        setCards(initData.boxes);
        break;
    }
  }, [tabs, activeTab]);

  return (
    <div className='container'>
      <div className={cn(s.inventory)}>
        <nav className={s.tabs}>
          <ul className={s.list}>
            {tabs.map(el => {
              return <li className={s.elem} key={el.title}>
                <button className={cn(s.tab, el.isActive && s.active, 'btn-reset')} onClick={() => {
                  changeTab(el.title);
                }}>{el.title}</button>
              </li>;
            })}
          </ul>
        </nav>
        <div className={s.body}>
          {(activeTab === 'Omis' || activeTab === 'Clothes') && <div className={s.catalog}>
            {cards?.map(el => {
              return <IventCard key={el.id} className={cn(s.card)}
                imgSrc={el.imgSrc} id={el.id}
                resources={el.resources} quality={el.quality || null}
                modelCategory={el.modelCategory}/>;
            })}
          </div>}
          {activeTab === 'Boxes' && <div className={s.catalog}>
            {cards?.map(el => {
              return <BoxCard key={el.id} className={s.card} imgSrc={el.imgSrc} id={el.id}
                collectionId={el.collectionId}/>;
            })}
          </div>}
          {activeTab === 'Materials' && <>
            <div className={cn(s.catalog, s.catalog_flex)}>
              {initData.resources.map(el => {
                return (
                  <MaterialCard key={el.label} className={s.card} imgSrc={el.imgSrc} label={el.label}
                    value={el.value}/>
                );
              })}
            </div>
            <div className={s.label__mineral}>Minerals
            </div>
            <div className={cn(s.catalog, s.catalog_flex)}>
              {initData.minerals.map(el => {
                return (
                  <MaterialCard key={el.label} className={s.card} imgSrc={el.imgSrc} label={el.label}
                    value={el.value}/>
                );
              })}
            </div>
          </>
          }
        </div>
      </div>
    </div>
  )
  ;
};
