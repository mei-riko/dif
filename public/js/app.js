!function(e){var a={};function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)t.d(r,o,function(a){return e[a]}.bind(null,o));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var r,o=t(1),l=(r=o)&&r.__esModule?r:{default:r};(0,l.default)(document).ready((function(){((0,l.default)(".scroll").click((function(){return(0,l.default)("html, body").animate({scrollTop:(0,l.default)((0,l.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,l.default)(".phone").length>0&&(0,l.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,l.default)(this).closest("form").addClass("error-phone"),(0,l.default)(this).addClass("error"),(0,l.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,l.default)(this).closest("form").removeClass("error-phone"),(0,l.default)(this).removeClass("error"),(0,l.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,l.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,l.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,l.default)(this).blur(),!1})),(0,l.default)('[data-fancybox="modal"]').fancybox({autoFocus:!1}),(0,l.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,l.default)(".slider").length>0)&&(0,l.default)("#reviews").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,arrows:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,arrows:!1,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,arrows:!1,dots:!0}}]});(0,l.default)(".navbar-toggle#nav").on("click",(function(e){e.preventDefault();var a=(0,l.default)(".navbar-collapse");a.hasClass("navbar-collapse--active")?(a.removeClass("navbar-collapse--active"),(0,l.default)(".navbar-overlay").removeClass("navbar-overlay--active")):(a.addClass("navbar-collapse--active"),(0,l.default)(".navbar-overlay").addClass("navbar-overlay--active"))})),(0,l.default)(".navbar-close").on("click",(function(e){e.preventDefault(),(0,l.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,l.default)(".navbar-overlay").removeClass("navbar-overlay--active")})),(0,l.default)(document).mouseup((function(e){var a=(0,l.default)(".navbar-collapse.navbar-collapse--active");a.is(e.target)||0!==a.has(e.target).length||(0,l.default)(".navbar-toggle#nav").is(e.target)||((0,l.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,l.default)(".navbar-overlay").removeClass("navbar-overlay--active"))})),(0,l.default)(window).resize((function(){((0,l.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches)&&((0,l.default)(".navbar-toggle").removeClass("navbar-toggle--active"),(0,l.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,l.default)(".navbar-overlay").removeClass("navbar-overlay--active"))}))}))},function(e,a){e.exports=jQuery}]);