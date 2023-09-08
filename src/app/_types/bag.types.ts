import {StaticImageData} from "next/image";
import {IClothe} from "@/app/_types/cards.types";

export interface IGood extends Pick<IClothe, 'id' | 'collection' | 'quantity' | 'imgSrc' | 'modelCategory' | 'price' | 'category'> {
  quantityMax: number,
}

export interface IBagState {
  bag: Array<IGood> | [],
  subtotal: number,
  vat: number,
  total: number,
  addToCart: (cartItem: IGood) => void,
  removeFromCart: (id: number) => void,
  changeQuantityGood: (id: number, count: number) => void,
  setSum: () => void
}
