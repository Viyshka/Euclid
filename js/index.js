const burger=document.querySelector(".section-nav__burger"),nav=document.querySelector(".section-nav__bar"),navItems=nav.querySelectorAll(".section-nav__heading-link"),body=document.body,header=document?.querySelector(".section-nav"),hero=document?.querySelector(".section-proj"),headerHeight=header.offsetHeight,ProjHeight=hero.offsetHeight,searchOpen=document.querySelector(".section-nav__search-button-1"),search=document.querySelector(".section-nav__search"),searchClose=document.querySelector(".section-nav__search-close");document.querySelector(":root").style.setProperty("--header-height",`${headerHeight}px`),document.querySelector(":root").style.setProperty("--Proj-height",`${ProjHeight}px`),burger?.addEventListener("click",()=>{body.classList.toggle("stop-scroll"),burger?.classList.toggle("section-nav__burger--active"),nav?.classList.toggle("section-nav__bar--visible")}),navItems.forEach(e=>{e.addEventListener("click",()=>{body.classList.remove("stop-scroll"),burger?.classList.remove("section-nav__burger--active"),nav?.classList.remove("section-nav__bar--visible")})}),searchOpen.addEventListener("click",()=>{search.classList.add("search--open")}),searchClose.addEventListener("click",()=>{search.classList.remove("search--open")});const swiper=new Swiper(".swiper",{a11y:{prevSlideMessage:"Предыдущиый слайд",nextSlideMessage:"Следующий слайд",lastSlideMessage:"Это последний слайд",firstSlideMessage:"Это первый слайд",paginationBulletMessage:"Перейти к слайду {{index}}"},slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".section-working__step-link").forEach(function(e){e.addEventListener("click",function(e){let t=e.currentTarget.dataset.path;document.querySelectorAll(".section-working__step-link").forEach(function(e){e.classList.remove("section-working__step-link--active")}),e.currentTarget.classList.add("section-working__step-link--active"),document.querySelectorAll(".section-working__tabs-item").forEach(function(e){e.classList.remove("section-working__tabs-item--active")}),document.querySelector(`[data-target="${t}"]`).classList.add("section-working__tabs-item--active")})})}),$(function(){$(".section-faq__quest").accordion({icons:!1,heightStyle:"content",collapsible:!0,active:!1})});var lazyLoadInstance=new LazyLoad({});
