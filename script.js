// 平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('消息已发送！（这是一个演示）');
    this.reset();
});

// 页面滚动时导航栏高亮
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// 滚动动画
function handleScrollAnimations() {
    // 处理技能列表动画
    const skillItems = document.querySelectorAll('.skills ul li');
    skillItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });

    // 处理渐入效果
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// 检查元素是否在视口中
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 添加滚动监听
window.addEventListener('scroll', handleScrollAnimations);

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', function() {
    // 给需要动画的元素添加类
    document.querySelectorAll('section h2, .portfolio-item, .contact-content').forEach(element => {
        element.classList.add('fade-in');
    });
    
    // 初始化动画
    handleScrollAnimations();
});

// 修改鼠标移动视差效果
document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.header-background');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    
    background.style.transform = `translate(${moveX}px, ${moveY}px)`;
}); 