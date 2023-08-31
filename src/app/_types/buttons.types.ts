import {ChildrenType} from "@/app/_types/children.types";

export interface IBtn {
  children: ChildrenType;
  disabled?: boolean;
  onClick?: ()=>void;
  href?: string
}
