import {useEffect, useState} from 'react';

export const useAnimatedPosition = (initialX: number, initialY: number, cursorPos, isStart: boolean) => {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);

  useEffect(() => {
    if (isStart) {
      const updatePosition =()=> {
        setX((prevX) => prevX + (cursorPos.x - prevX));
        setY((prevY) => prevY + (cursorPos.y - prevY));
      };

      const animationFrameId = requestAnimationFrame(updatePosition);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [cursorPos, isStart]);

  return {x, y};
};
