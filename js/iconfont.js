(function(window){var svgSprite='<svg><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M512 5.12C231.424 5.12 3.584 232.96 3.584 514.048s227.84 507.904 508.416 507.904 508.416-227.328 508.416-508.416S792.576 5.12 512 5.12z m0 941.568c-239.616 0-433.664-194.048-433.664-433.664S272.384 80.384 512 80.384s433.664 194.048 433.664 433.664-194.048 432.64-433.664 432.64z" fill="#F4DCCB" ></path><path d="M665.088 493.056L382.464 329.728c-15.872-9.216-35.84 2.048-35.84 20.48v326.144c0 18.432 19.968 29.696 35.84 20.48l282.112-162.816c16.384-9.216 16.384-32.256 0.512-40.96z" fill="#FF9D4D" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)