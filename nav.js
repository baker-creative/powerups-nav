(()=>{var S=document,A=(o,e=S)=>e.querySelector(o),h=(o,e=S)=>e.querySelectorAll(o);var u=(o,e)=>{let l=o==null?void 0:o.classList.toString(),s=new MutationObserver(c=>{for(let a of c)if(a.attributeName==="class"){let n=o==null?void 0:o.classList.toString();if(n!==l){e(s),l=n;break}}});return s.observe(o,{attributes:!0}),s};h("[data-bc-nav]").forEach(e=>{var v,E;let l=(v=e==null?void 0:e.closest("[data-bc-theme]"))==null?void 0:v.getAttribute("data-bc-theme"),s=e==null?void 0:e.getAttribute("data-bc-nav-scrolled"),c=h(".w-dropdown",e),a=A(".w-nav-button",e),n=(E=e.dataset.bcNavScrollDevice)==null?void 0:E.toLowerCase(),m=()=>c.length?[...c].some(r=>r.querySelector(".w-dropdown-toggle").classList.contains("w--open")):void 0,b=()=>a?a.classList.contains("w--open"):!1,d=()=>{window.scrollY>0?!m()&&!b()&&e.closest("[data-bc-theme]").setAttribute("data-bc-theme",s):window.scrollY===0&&!m()&&!b()&&e.closest("[data-bc-theme]").setAttribute("data-bc-theme",l)},L=()=>{c.length&&c.forEach(t=>{let r=t.getAttribute("bc-nav-dropdown-open-theme"),i=t.querySelector(".w-dropdown-toggle");u(i,()=>{if(i.classList.contains("w--open")){r&&(e.getAttribute("data-bc-theme")&&e.setAttribute("data-bc-theme-initial",e.getAttribute("data-bc-theme")),e.setAttribute("data-bc-theme",r)),t.style.zIndex="auto",t.querySelector("[data-bc-slider]")&&setTimeout(()=>window.dispatchEvent(new Event("resize")),1);return}m()||(e.getAttribute("data-bc-theme-initial")&&(e.setAttribute("data-bc-theme",e.getAttribute("data-bc-theme-initial")),e.removeAttribute("data-bc-theme-initial")),s?d():e.closest("[data-bc-theme]").setAttribute("data-bc-theme",l),t.style.zIndex="initial")})})},p=t=>{var i,f;let r=((i=window.bc)==null?void 0:i.smoothscroll)&&((f=window.bc)==null?void 0:f.smoothscroll)instanceof Lenis;if(t){document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",r&&(e.querySelector(".w-nav-menu").setAttribute("data-lenis-prevent",""),window.bc.smoothscroll.stop());return}document.documentElement.style.overflow="",document.body.style.overflow="",r&&(e.querySelector(".w-nav-menu").removeAttribute("data-lenis-prevent"),window.bc.smoothscroll.start())},y=()=>{a&&u(a,()=>{if(b()){s&&d(),p(!0);return}p(!1)})},g=t=>{L(),s&&(d(),window.addEventListener("scroll",d)),t&&t==="all"&&window.addEventListener("resize",w(n!=null?n:""))},k=t=>{s&&window.removeEventListener("scroll",d),e.closest("[data-bc-theme]").setAttribute("data-bc-theme",l),c.length&&c.forEach(r=>{let i=r.querySelector(".w-dropdown-toggle");u(i).disconnect()}),t&&t==="all"&&(window.removeEventListener("resize",w),a&&u(a).disconnect())};function w(t){let r=t.toLowerCase()==="desktop",i=t.toLowerCase()==="mobile";if(r&&window.innerWidth>991||i&&window.innerWidth<=991||!t){g();return}window.innerWidth<=991&&y(),k()}g(),window.innerWidth<=991&&y(),w(n!=null?n:""),window.addEventListener("resize",w(n!=null?n:""))});})();
