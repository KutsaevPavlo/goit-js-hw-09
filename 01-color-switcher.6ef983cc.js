!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.disabled=!0;var o=null;function a(n,o){t.disabled=n,e.disabled=o}t.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t}),1e3),a(!0,!1)})),e.addEventListener("click",(function(){a(!1,!0),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.6ef983cc.js.map