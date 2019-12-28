(function(win, doc) {
  "use strict";
  var tl = gsap.timeline();
  tl.to("#desktop", 1, {
    css: { scale: 1, opacity: 1 },
    ease: Power2.easeOut
  })
    .to("#mob", 1, { css: { scale: 1, opacity: 1 }, ease: Power2.easeOut })
    .to("#landscape", 1, {
      css: { scale: 1, opacity: 1 },
      ease: Power2.easeOut
    })
    .to("#tablet", 1, { css: { scale: 1, opacity: 1 }, ease: Power2.easeOut })
    .to("#laptop", 1, { css: { scale: 1, opacity: 1 }, ease: Power2.easeOut });
})(window, document);
