import {StaticImageData} from "next/image";

export interface ICardOmi {
  id: number,
  imgSrc: string | StaticImageData,
  modelCategory: 'A' | 'B' | 'C' | 'D',
  points: number,
  typeClothes: Array<'A' | 'B' | 'C' | 'D'>,
  rewards: number,
  price: number,
  quantity: number,
}

export interface IClothe {
  id: number,
  collectionId: number,
  imgSrc: string | StaticImageData,
  modelCategory: 'A' | 'B' | 'C' | 'D',
  rewards: number,
  price: number,
  category: 'hats' | 'shirts',
  stats: number[],
  resources?: number[],
}
