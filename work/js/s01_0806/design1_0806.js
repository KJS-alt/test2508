// JUST 쇼핑몰 JavaScript - Grid Layout

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 슬라이드 기능 초기화
    initSlider();
    
    // 탭 기능 초기화
    initTabs();
    
    // 메뉴 호버 효과
    initMenu();
});

// 슬라이드 기능
function initSlider() {
    const slideItems = document.querySelectorAll('.slide-item');
    let currentSlide = 0;
    
    if (slideItems.length === 0) return;
    
    setInterval(function() {
        slideItems[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideItems.length;
        slideItems[currentSlide].classList.add('active');
        animateSlide(slideItems[currentSlide]);
    }, 3000);
}

function animateSlide(slideElement) {
    slideElement.style.transform = 'translateY(-20px)';
    slideElement.style.opacity = '0';
    
    setTimeout(function() {
        slideElement.style.transition = 'all 0.8s ease';
        slideElement.style.transform = 'translateY(0)';
        slideElement.style.opacity = '1';
    }, 50);
}

// 탭 기능
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            animateTabContent(document.getElementById(targetTab));
        });
    });
}

function animateTabContent(contentElement) {
    contentElement.style.opacity = '0';
    contentElement.style.transform = 'translateY(10px)';
    
    setTimeout(function() {
        contentElement.style.transition = 'all 0.3s ease';
        contentElement.style.opacity = '1';
        contentElement.style.transform = 'translateY(0)';
    }, 50);
}

// 메뉴 기능
function initMenu() {
    const menuItems = document.querySelectorAll('.main-menu > ul > li');
    
    menuItems.forEach(function(item) {
        const subMenu = item.querySelector('.sub-menu');
        
        if (subMenu) {
            item.addEventListener('mouseenter', function() {
                subMenu.style.animation = 'slideDown 0.3s ease forwards';
            });
            
            item.addEventListener('mouseleave', function() {
                subMenu.style.animation = 'slideUp 0.3s ease forwards';
            });
        }
    });
}

// 레이어 팝업 열기
function openLayer() {
    const layerPopup = document.getElementById('layer-popup');
    
    if (layerPopup) {
        layerPopup.classList.add('active');
        
        const layerContent = layerPopup.querySelector('.layer-content');
        layerContent.style.transform = 'scale(0.8)';
        layerContent.style.opacity = '0';
        
        setTimeout(function() {
            layerContent.style.transition = 'all 0.3s ease';
            layerContent.style.transform = 'scale(1)';
            layerContent.style.opacity = '1';
        }, 50);
        
        layerPopup.addEventListener('click', function(e) {
            if (e.target === layerPopup) {
                closeLayer();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLayer();
            }
        });
    }
}

// 레이어 팝업 닫기
function closeLayer() {
    const layerPopup = document.getElementById('layer-popup');
    
    if (layerPopup) {
        const layerContent = layerPopup.querySelector('.layer-content');
        
        layerContent.style.transition = 'all 0.3s ease';
        layerContent.style.transform = 'scale(0.8)';
        layerContent.style.opacity = '0';
        
        setTimeout(function() {
            layerPopup.classList.remove('active');
        }, 300);
    }
}

console.log('Grid Layout - JUST 쇼핑몰 로드 완료!');