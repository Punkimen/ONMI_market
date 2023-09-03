import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {setStyle} from "@/app/_utils/setStyle";

interface IBaseAnimArgs {
  gsap: unknown,
  el: HTMLElement,
  trigger?: HTMLElement,
  start?: string,
  end?: string,
  startVal?: string,
  endVal?: string,
  scrub?: boolean,
  ease?: string,
}

export const triggerAnimate = (el, trigger, start) => {
  setStyle(el, el.dataset);
  ScrollTrigger.create({
    trigger: trigger || el,
    start: start || 'top bottom',
    onToggle: self => el.classList.add('animate'),
  })
}

export const horizontalTransform = (gsap, el, trigger, startVal, endVal, scrub = true, ease, start, end) => {
  setStyle(el, el.dataset);
  gsap.fromTo(el, {
    x: startVal || 0,
  }, {
    x: endVal || '100%',
    ease: ease || "none",
    scrollTrigger: {
      trigger: trigger || el,
      start: start || "center bottom",
      end: end || "bottom center",
      scrub: scrub
    }
  })
}
export const verticalTransform = (el, trigger, startVal, endValue, scrub = true, starAnim, endAnim) => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 1.2
  gsap.fromTo(el, {
    y: startVal || 0,
  }, {
    y: endValue || '100%',
    ease: "none",
    delay: delay,
    duration: duration,
    scrollTrigger: {
      trigger: trigger || el,
      start: starAnim || "top bottom",
      end: endAnim || "bottom top",
      scrub: scrub
    }
  })
}
