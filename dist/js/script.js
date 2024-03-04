

// const form = document.querySelector('.form-box');

function changeFormElements () {
  document.querySelector('.b24-form-field-agreement-link').textContent = 'Я\u00A0согласен/а\u00A0на\u00A0обработку\u00A0персональных\u00A0данных';
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


function addObserver() {
  let form = document.querySelector('.form-box');
  if (!form) {
    window.setTimeout(() => {
      addObserver
    }, 500);
    return;
  }

  const config = {childList: true, subtree: true}
  observer.observe(form, config);
}

addObserver();
// observer.observe(form, {
//   // childList: true, // наблюдать за непосредственными детьми
//   // subtree: true, // и более глубокими потомками
// });

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



if (window.innerWidth > 768) {
  new Swiper('.assortment__items', {
    loop: true,
    slidesPerView: 3,
    autoplay: true,
    spaceBetween: 110,
    navigation: {
      nextEl: ".assortment-button-next",
      prevEl: ".assortment-button-prev",
    },
  });
}


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




