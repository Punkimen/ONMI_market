import {StaticImageData} from "next/image";

export interface IClothe {
  id: number,
  imgSrc: string | StaticImageData,
  modelCategory: 'A' | 'B' | 'C' | 'D',
  category: 'hats' | 'shirts' | 'pants' | 'shoes',
  stats: number[],
  resources?: number[],
  rewards: number,
  quantity: number,
  price: number,
  collection: {
    id: number,
    name: string
  }
}

export interface IBody {
  id: number,
  imgSrc: string | StaticImageData,
  modelCategory: 'A' | 'B' | 'C' | 'D',
  points: number,
  typeClothes: Array<'A' | 'B' | 'C' | 'D'>,
  rewards: number,
  price: number,
  quantity: number,
}

export interface ICardClothe extends Pick<IClothe, 'id' | 'collection' | 'imgSrc' |
  'modelCategory' | 'rewards' |
  'price' | 'category' | 'stats' | 'resources' | 'quantity'> {
  collectionId: number;
}
