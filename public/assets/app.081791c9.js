(()=>{"use strict";var e=["#8C18FF","#4DFE89","yellow","#FF0080","#00FFFF"];document.querySelectorAll(".travel__card").forEach((function(t,o){t.style.animation="travelCardAnim 1s ease forwards ".concat(o/7+.5,"s"),t.addEventListener("mouseover",(function(){var o=!0;o&&(t.querySelector(".card__content .title").style.color=e[Math.floor(Math.random()*e.length)],o=!1)})),t.addEventListener("mouseout",(function(){t.querySelector(".title").style.color="#46444C"}))}))})();