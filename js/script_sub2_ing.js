
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot');
    const topButton = document.getElementById('topButton');
    const banner = document.getElementById('bg_top_s');
    let currentSection = 0;
    let isScrolling = false;

    /* ========== 1. 풀페이지 스크롤 이동 ========== */

    // 특정 섹션으로 스크롤하는 전역 함수
    window.scrollToSection = function(sectionIndex) {
        const offset = sectionIndex * window.innerHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
        currentSection = sectionIndex;
        updateActiveDot();
    };

    // wheel 이벤트를 통한 섹션 이동 (중복 스크롤 방지)
    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        isScrolling = true;
        
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
        }
        scrollToSection(currentSection);

        setTimeout(() => {
            isScrolling = false;
        }, 1500);  // 스크롤 전환 딜레이 조정
    });


    /* ========== 2. 우측 섹션 네비 및 Top 버튼 나타나기 ========== */

    // 초기 로딩 시 첫 번째 dot 활성화
    dots[0].classList.add('active');

    // 섹션 네비게이션 점 활성화 상태 업데이트
    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSection);
        });
    }

    // 스크롤 위치에 따라 네비게이션 점 업데이트 및 Top 버튼 표시
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
    
        // Top 버튼 표시
        topButton.style.display = scrollPosition > window.innerHeight / 5 ? 'block' : 'none';

        // 각 섹션의 위치에 따라 네비게이션 점 업데이트
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
                currentSection = index;
                updateActiveDot();
            }
        });

        // 배너 색상 변경
        if (scrollPosition >= sections[1].offsetTop) { // section2에 해당하는 배경색 변경
            banner.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        }
        else {
            banner.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    });


    /* ========== 3. Top 버튼 기능========== */

    // 최상단으로 이동하는 전역 함수
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


});


// ===== 의료진 애니메이션 =====
$(document).ready(function () {

/*
    // 화면 크기를 감지해 모바일인지 PC인지 확인
    const isMobile = window.innerWidth <= 700; // 가로 700px 이하를 모바일로 간주

    if (isMobile) {
        // 모바일: 모든 요소에 일정 딜레이로 애니메이션 적용
        $('.dr').each((el) => {
            setTimeout(() => $(el).addClass('fade-in'), 0);
        });

        $('h2, h3').each((el) => {
            setTimeout(() => $(el).addClass('slide-left'), 300);
        });

        $('h4').each((el) => {
            setTimeout(() => $(el).addClass('fade-down'), 1200);
        });
    }
  
    else {
        // PC: 요소가 뷰포트에 들어왔을 때만 애니메이션 적용
    }

*/

    $(window).scroll(function () {
        let viewportBottom = $(window).scrollTop() + $(window).height();
        let documentHeight = $(document).height();


        // 일반적인 스크롤 동작 시 각 섹션별 애니메이션
        $('.section').each(function () {
            if (viewportBottom > sectionTop + 100) {
                // 현재 섹션에 있는 요소들만 애니메이션 적용
                $(this).find('.dr').each((_, el) => {
                    setTimeout(() => $(el).addClass('fade-in'), 0);
                });
    
                $(this).find('h2, h3').each((_, el) => {
                    setTimeout(() => $(el).addClass('slide-left'), 300);
                });

                $(this).find('h4').each((_, el) => {
                    setTimeout(() => $(el).addClass('fade-down'), 1200); 
                });
            }


        // 페이지 하단에 도달했을 때 모든 애니메이션 실행, 모바일 환경 애니메이션 동작용
            if (viewportBottom >= documentHeight - 200) { 
                // 문서 하단에서 200px 이내일 때
            $('.dr').addClass('fade-in');
            $('h2, h3').addClass('slide-left');
            $('h4').addClass('fade-down');
            }
        });        
        
    });


    /* ========== .dr 이미지 FadeIn, CSS, 1500ms ========== */
    function animateFadeIn() {
        document.querySelectorAll('.dr').forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementTop < viewportHeight - 100) {
            element.classList.add('fade-in'); // fade-in 클래스 추가
            }
        });
    }


    /* ========== h2, h3 SlideLeft, CSS, 1500ms ========== */
    function animateSlideLeft() {
        document.querySelectorAll('h2, h3').forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementTop < viewportHeight - 100) {
                element.classList.add('slide-left'); // slide-left 클래스 추가
            }
        });
    }

    /* ========== h4 FadeDown, CSS, 1500ms ========== */
    function animateFadeDown() {
        document.querySelectorAll('h4').forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementTop < viewportHeight - 100) {
                element.classList.add('fade-down'); // fade-down 클래스 추가
            }
        });
    }

    // 초기 실행 시 효과 적용
    setTimeout(animateFadeIn, 0);
    setTimeout(animateSlideLeft, 300);
    setTimeout(animateFadeDown, 1200);


    
});