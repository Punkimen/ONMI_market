import {StaticImageData} from "next/image";

export interface IGood {
    id: number,
    imgSrc: string | StaticImageData,
    modelCategory: 'A' | 'B' | 'C' | 'D',
    categoryName: string,
    collection: string,
    price: number,
    quantity: number,
    quantityMax: number,
}

export interface IBagState {
    bag: Array<IGood> | [],
    subtotal: number,
    vat: number,
    total: number,
}
