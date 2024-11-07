
document.addEventListener('DOMContentLoaded', function () {

    // ===== Swiper =====
    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        loop: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
    });

    // ===== TOP 버튼 및 배너 색상 변경 =====
    const topButton = document.getElementById('topButton');
    const banner = document.getElementById('bg_top_s');

    window.addEventListener('scroll', function () {
        // 스크롤 시 배너 색상 변경
        if (window.scrollY > 75) {
            banner.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        } else {
            banner.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }

        // 스크롤 위치에 따라 Top 버튼 표시/숨김
        if (window.scrollY > 75) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    // ===== 최상단으로 이동하는 함수 =====
    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

});
