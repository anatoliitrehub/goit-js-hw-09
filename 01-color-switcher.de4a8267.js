!function(){var t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0,document.body.addEventListener("click",(function(n){var r=n.target.dataset;""===r.start&&(t.disabled=!0,a.disabled=!1,e.start());""===r.stop&&(t.disabled=!1,a.disabled=!0,e.stop())}));var e={interval:"",start:function(){this.interval=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},stop:function(){clearInterval(this.interval)}}}();
//# sourceMappingURL=01-color-switcher.de4a8267.js.map
