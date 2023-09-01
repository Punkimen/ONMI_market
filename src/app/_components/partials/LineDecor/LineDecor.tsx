import cn from "classnames";
import React, {FC} from "react";

interface ILineDecorProps {
  position?: "top" | "bottom";
  color?: 'string';
}

export const LineDecor: FC<ILineDecorProps> = ({position, color}) => {
  return (
    <div className={cn('line', position && 'line_bottom')} style={color && {color: color}}></div>
  )
}
