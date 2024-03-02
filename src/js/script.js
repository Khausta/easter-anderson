

const form = document.querySelector('.form-box');

const changeFormElements = () => {
  document.querySelector('.b24-form-field-agreement-link').textContent = 'Я согласен/а на обработку персональных данных';
  const btn = document.querySelector('.b24-form-btn');
  btn.textContent = 'СВЯЖИТЕСЬ СО МНОЙ';
  btn.classList.add('purple-btn');
  const inputs = document.querySelectorAll('.b24-form-control');
  inputs.forEach((e, index ) => {
    e.classList.add('form-box-input');
    index ? e.setAttribute('placeholder', 'Телефон') : e.setAttribute('placeholder', 'Имя'); 
  });
}

//для изменения текcта кнопки и лейбла чек-бокса в форме
let observer = new MutationObserver(changeFormElements);
observer.observe(form, {
  childList: true, // наблюдать за непосредственными детьми
  subtree: true, // и более глубокими потомками
});

const orderSwiper = new Swiper('.order__vars', {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  navigation: {
    nextEl: ".order-button-next",
    prevEl: ".order-button-prev",
  },
  on: {
    resize: function enableOnlyMobile(orderSwiper){
      // Disable the slider when the window width is less than or equal to 960
      if(768 < window.innerWidth){
        orderSwiper.disable()
        orderSwiper.el.classList.add('order-non-slider')
      }else{
        orderSwiper.enable()
        orderSwiper.el.classList.remove('order-non-slider')
      }
    },
  }
});

const assortmentSwiper = new Swiper('.assortment__items', {
  loop: true,
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 110,
  navigation: {
    nextEl: ".assortment-button-next",
    prevEl: ".assortment-button-prev",
  },
  on: {
    resize: function enableOnlyMobile(assortmentSwiper){
      // Disable the slider when the window width is less than or equal to 960
      if(768 < window.innerWidth){
        assortmentSwiper.enable()
        assortmentSwiper.el.classList.remove('assortment-non-slider')
      }else{
        assortmentSwiper.disable()
        assortmentSwiper.el.classList.add('assortment-non-slider')
      }
    },
  }
});


// const promoSwiper = new Swiper('.promo__swiper', {
//   loop: true,
//   autoplay: true,
//   slidesPerView: 1,
//   pagination: {
//     el: '.promo__pagination',
//     clickable: true
//   },

// });

// const productsSwiper = new Swiper('.production__swiper', {
//   centeredSlides: true,
//   centered: true,
//   slidesPerView: 1,
//   pagination: {
//     el: '.production__pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.production__arrow-next',
//     prevEl: '.production__arrow-prev',
//   },
// });

// const licenseSwiper = new Swiper('.license__swiper', {
//   pagination: {
//     el: '.license__pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.license__arrow-next',
//     prevEl: '.license__arrow-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//     },
    
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     }
//   }
// });




