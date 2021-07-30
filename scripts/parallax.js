const controller = new ScrollMagic.Controller();
const timeline = new TimelineMax();

timeline
  .to(".foreground", 10, { y: -300 })
  .to(".middleground", 10, { y: -200 }, "-=10")
  .fromTo(".background", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(
    ".blockAnimation",
    { opacity: 0 },
    { opacity: 1, duration: 3 },
    "-=5"
  );

const scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: window.innerWidth <= 600 ? "120%" : "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
