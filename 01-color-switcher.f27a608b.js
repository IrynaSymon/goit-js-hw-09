const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(a)}));let a=null;t.disabled=!0;
//# sourceMappingURL=01-color-switcher.f27a608b.js.map
