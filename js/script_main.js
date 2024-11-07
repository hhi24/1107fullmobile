
// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 슬라이드 전환
      disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
    },
    fadeEffect: { // 페이드 전환 시 부드러운 효과를 위한 설정
      crossFade: true,
    },
    speed: 1000, // 페이드 속도 1초 (1000ms)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Pop UP
  $(function(){
        $(".popup").hide();
        
        $(".bt1").click(function(){
            $(".popup").fadeToggle();
        });
        $(".close").click(function(){
            $(".popup").fadeOut();
        });
    });