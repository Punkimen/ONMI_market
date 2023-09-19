import {useEffect, useState} from "react";


export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', windowResize)
    windowResize();

    return () => window.removeEventListener('resize', windowResize)
  }, [])
  return windowWidth;
}