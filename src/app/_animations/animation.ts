import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {setStyle} from "@/app/_utils/setStyle";

export const triggerAnimate = (el: HTMLElement, trigger?: HTMLElement, start?: string) => {
  setStyle(el, el.dataset);
  ScrollTrigger.create({
    trigger: trigger || el,
    start: start || 'top bottom',
    onToggle: self => el.classList.add('animate'),
  })
}
