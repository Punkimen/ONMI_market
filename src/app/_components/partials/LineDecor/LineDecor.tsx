import cn from "classnames";
import React, {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";

interface ILineDecorProps extends IBaseComponents{
  position?: "top" | "bottom";
  color?: 'string';
}

export const LineDecor: FC<ILineDecorProps> = ({position, hide, color,className}) => {
  if(hide) return null;
  return (
    <div className={cn('line', position && 'line_bottom', className)} style={color && {color: color}}></div>
  );
};
