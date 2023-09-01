import {ICardOmi} from "@/app/_types/cards.types";
import body1 from "@/../public/img/bodys/body_1.png";
import body2 from "@/../public/img/bodys/body_2.png";
import body3 from "@/../public/img/bodys/body_3.png";
import body4 from "@/../public/img/bodys/body_4.png";

export const cardsOmi: ICardOmi[] = [
  {
    id: 1,
    imgSrc: body1,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 2,
    imgSrc: body2,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 3,
    imgSrc: body3,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  },
  {
    id: 4,
    imgSrc: body4,
    points: 400,
    price: 149,
    modelCategory: 'A',
    quantity: 10000,
    rewards: 900,
    typeClothes: ['A', 'B', 'C']
  }
]
