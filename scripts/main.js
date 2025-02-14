
$(document).ready(function () {
    var btn = document.querySelector('.header--menus')
    var menu = document.querySelector('.header--responsive')

    btn.addEventListener('click',function(){
    if (menu.classList.contains('show')){
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')
    }
    })
    let header_item = document.querySelectorAll('.header--item')
    header_item.forEach(item => {
        item.addEventListener('click', function(){
            menu.classList.remove('show')
        })
    })
})

$(document).ready(function () {
    var swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

    //   on: {
    //     init: function () {
    //       $(".swiper-progress-bar").removeClass("animate");
    //       $(".swiper-progress-bar").removeClass("active");
    //       $(".swiper-progress-bar").eq(0).addClass("animate");
    //       $(".swiper-progress-bar").eq(0).addClass("active");
    //     },
    //     slideChangeTransitionStart: function () {
    //       $(".swiper-progress-bar").removeClass("animate");
    //       $(".swiper-progress-bar").removeClass("active");
    //       $(".swiper-progress-bar").eq(0).addClass("active");
    //     },
    //     slideChangeTransitionEnd: function () {
    //       $(".swiper-progress-bar").eq(0).addClass("animate");
    //     }
    //   }
    });
    
    // $('.swiper-container').hover(function() {
    //   swiper.autoplay.stop();
    //   $('.swiper-progress-bar').removeClass('animate');
    // }, function(){
    //   swiper.autoplay.start();
    //   $('.swiper-progress-bar').addClass('animate');
    // });

  });

  $(document).ready(function () {
      var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
        },
    });
  })

  $(document).ready(function () {
      var swiper = new Swiper(".mySwiper2", {
        autoplay: {
        delay: 3000,
        disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
  })

  $(document).ready(function () {
      var swiper = new Swiper(".mySwiper3", {
        autoplay: {
        delay: 3000,
        disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".n3",
          prevEl: ".p3",
        },
      });
  })

let team_tab = document.querySelectorAll('.team--tab')
let team_block = document.querySelectorAll('.team--block')
team_tab.forEach((item, index) => {
    item.addEventListener('click', function(e){
        team_tab.forEach((b,x) => {
            if(x == index){
                if(!b.classList.contains('active')){
                    b.classList.add('active')
                }
            } else {
                b.classList.remove('active')
            }
        })
        team_block.forEach((j,jindex) => {
            if(jindex == index){
                if(!j.classList.contains('active')){
                    j.classList.add('active')
                }
            } else {
                j.classList.remove('active')
            }
        })
    })
})
let team_tab2 = document.querySelectorAll('.team--tab')
let team_block2 = document.querySelectorAll('.team--block2')
team_tab2.forEach((item, index) => {
    item.addEventListener('click', function(e){
        team_tab2.forEach((b,x) => {
            if(x == index){
                if(!b.classList.contains('active')){
                    b.classList.add('active')
                }
            } else {
                b.classList.remove('active')
            }
        })
        team_block2.forEach((j,jindex) => {
            if(jindex == index){
                if(!j.classList.contains('active')){
                    j.classList.add('active')
                }
            } else {
                j.classList.remove('active')
            }
        })
    })
})

let result_tab = document.querySelectorAll('.result--tab-i')
let result_img = document.querySelectorAll('.result--img')

result_tab.forEach((item,index) => {
    item.addEventListener('click', function(){
        result_img.forEach((b,x) => {
            if(x == index){
                if(!b.classList.contains('default')){
                    b.classList.add('default')
                }
            } else {
                b.classList.remove('default')
                let iframes = b.childNodes
                if (iframes != null) {
                    for (var i = 0; i < iframes.length; i++) {
                        iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
                    }
                }
            }
        })
    })
})

$(document).ready(function () {
    var swiper = new Swiper(".mySwiper4", {
      autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },
      speed: 500,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})

$(document).ready(function () {
    var swiper = new Swiper(".mySwiper5", {
      autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },
      speed: 500,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})

$(document).ready(function () {
    var swiper = new Swiper(".mySwiper6", {
      autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },
      speed: 500,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})

// let result_play = document.querySelector('.result--play')
// let iframe = document.querySelector('.result--img iframe')
// let resImg = document.querySelector('.result--img img')
// let resBio = document.querySelector('.result--bio')
// let resPlay = document.querySelector('.result--play')

// result_play.addEventListener('click', function(){
//     iframe.style.display = 'block';
//     resImg.style.display = 'none';
//     resBio.style.display = 'none';
//     resPlay.style.display = 'none';
//     $("#video")[0].src += symbol + "autoplay=1";
// })

let cases_bottom = document.querySelectorAll('.cases--bottom')
let close_cases = document.querySelectorAll('.cases--modal-btns')
let modal = document.querySelectorAll('.modal')
let body = document.querySelector('body')
cases_bottom.forEach((item, index) => {
    item.addEventListener('click', function(){
        if(window.innerWidth < 768) {
            modal[index-6] ? modal[index-6].style.display = 'block' : ''
        } else {
            modal[index] ? modal[index].style.display = 'block' : ''
        }
        body.classList.add('noscroll')
    })
})
close_cases.forEach((item, index) => {
    item.addEventListener('click', function(){
        modal[index].style.display = 'none'
        body.classList.remove('noscroll')
    })
})
modal.forEach(item => {
    item.addEventListener('click', function(e){
        if(e.target == item){
            item.style.display = 'none'
            body.classList.remove('noscroll')
        }
    })
})

let cases_bottom2 = document.querySelectorAll('.cases--bottom2')
let close_cases2 = document.querySelectorAll('.cases--modal-btns2')
let modal2 = document.querySelectorAll('.modal2')

cases_bottom2.forEach((item, index) => {
    item.addEventListener('click', function(){
        body.classList.add('noscroll')
        if(window.innerWidth < 768) {
            modal2[index-6].style.display = 'block'
        } else {
            modal2[index].style.display = 'block'
        }
    })
})
close_cases2.forEach((item, index) => {
    item.addEventListener('click', function(){
        modal2[index].style.display = 'none'
        body.classList.remove('noscroll')
        var media = $("#theVideo").get(0);
        media.pause();
        var media2 = $("#theVideo2").get(0);
        media2.pause();
        var media3 = $("#theVideo3").get(0);
        media3.pause();
        var media4 = $("#theVideo4").get(0);
        media4.pause();
    })
})
modal2.forEach(item => {
    item.addEventListener('click', function(e){
        if(e.target == item){
            body.classList.remove('noscroll')
            item.style.display = 'none'
            var media = $("#theVideo").get(0);
            media.pause();
            var media2 = $("#theVideo2").get(0);
            media2.pause();
            var media3 = $("#theVideo3").get(0);
            media3.pause();
            var media4 = $("#theVideo4").get(0);
            media4.pause();
        }
    })
})

;(function(){
    function id(v){ return document.getElementById(v); }
    function loadbar() {
      var ovrl = id("overlay")
      function doneLoading(){
        ovrl.style.opacity = 0;
        setTimeout(function(){ 
          ovrl.style.display = "none";
        }, 1200);
      }
      doneLoading()   
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());

  let phone_desk = document.querySelector('.phone-fixed-desktop')
  let phone_box = document.querySelector('.phone-box')
  phone_desk.addEventListener('click', function(e){
    phone_box.style.display = 'block'
  })
  window.addEventListener('click', function(e){   
    if (document.querySelector('.phone-fixed-desktop').contains(e.target)){
      // Clicked in box
    } else{
      // Clicked outside the box
      phone_box.style.display = 'none'
    }
  });