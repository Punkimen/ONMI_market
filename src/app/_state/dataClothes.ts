import {IBody, IClothe} from "@/app/_types/cards.types";
import clothe1 from "@/../public/img/clothes/clothe_1.png";
import clothe2 from "@/../public/img/clothes/clothe_2.png";
import clothe3 from "@/../public/img/clothes/clothe_3.png";
import clothe4 from "@/../public/img/clothes/clothe_4.png";
import clothe5 from "@/../public/img/clothes/clothe_5.png";
import body1 from "../../../public/img/bodys/body_1.png";
import body2 from "../../../public/img/bodys/body_2.png";
import body3 from "../../../public/img/bodys/body_3.png";
import body4 from "../../../public/img/bodys/body_4.png";
import {StaticImageData} from "next/image";

export const dataClothes: Array<IClothe> = [
  {
    id: 1,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe1,
    price: 149,
    category: 'hats',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 2,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe2,
    price: 149,
    category: 'hats',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 3,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe3,
    price: 149,
    category: 'hats',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 4,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe4,
    price: 149,
    category: 'hats',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 5,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe5,
    price: 149,
    category: 'hats',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 6,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe1,
    price: 149,
    category: 'shirts',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 7,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe2,
    price: 149,
    category: 'shirts',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 8,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe3,
    price: 149,
    category: 'shirts',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 9,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe4,
    price: 149,
    category: 'shirts',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  },
  {
    id: 10,
    collection: {id: 1, name: 'Summer Collection'},
    modelCategory: "A",
    rewards: 250,
    imgSrc: clothe5,
    price: 149,
    category: 'shirts',
    stats: [14, 10, 12, 12],
    resources: [23, 25, 46],
    quantity: 1000
  }
];
export const dataBodies: Array<IBody> =[
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
];
