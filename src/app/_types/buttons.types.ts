import {ChildrenType} from "@/app/_types/children.types";
import {HTMLAttributes} from "react";

export interface IBtn extends React.HTMLProps<HTMLButtonElement> {
  children: ChildrenType;
  disabled?: boolean;
  onClick?: ()=>void;
  href?: string;
  type?: "button" | "submit" | "reset";
}
