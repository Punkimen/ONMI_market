import {StaticImageData} from "next/image";
import {IBody, IClothe} from "@/app/_types/cards.types";

export interface IUser {
  isAuth: boolean;
  nickname: string | null;
  avatar: string | StaticImageData | null;
  balance: number;
  inventory: IInventory;
  auth: () => void;
}

export interface IInventory {
  resources: [];
  minerals: [];
  boxes: [];
  clothes: IClothe[];
  bodies: IBody[];
}
