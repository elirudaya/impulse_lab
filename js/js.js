document.addEventListener('DOMContentLoaded', function () {
        const colorChanger = document.getElementById('colorChanger');
        const textElements = document.querySelectorAll('.letter_box, .buttons');
        
        const colorSchemes = [
            ['rgba(201, 190, 145, 1)', 'rgba(58, 113, 203, 1)'], 
            ['rgba(137, 149, 193, 1)', 'rgba(239, 154, 57, 1)'], 
            ['rgba(91, 71, 47, 1)', 'rgba(33, 155, 178, 1)'], 
            ['rgba(172, 171, 167, 1)', 'rgba(142, 141, 137, 1)'], 
            ['rgba(182, 145, 188, 1)', 'rgba(136, 222, 51, 1)'], 
            ['rgba(42, 58, 91, 1)', 'rgba(203, 100, 19, 1)'], 
            ['rgba(202, 155, 139, 1)', 'rgba(51, 220, 215, 1)']  
        ];
        
        let currentScheme = -1;
        
        colorChanger.addEventListener('click', function() {
            currentScheme = (currentScheme + 1) % (colorSchemes.length + 1);
            
            if (currentScheme === colorSchemes.length) {
                this.style.backgroundColor = 'white';
                textElements.forEach(el => el.style.color = 'black');
            } else {
                this.style.backgroundColor = colorSchemes[currentScheme][0];
                textElements.forEach(el => el.style.color = colorSchemes[currentScheme][1]);
            }
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const deviceBtn = document.getElementById('deviceBtn');
    const capsuleBtn = document.getElementById('capsuleBtn');
    const deviceWindow = document.getElementById('deviceWindow');
    const capsuleWindow = document.getElementById('capsuleWindow');
    
    let deviceTimer, capsuleTimer;
    const delay = 200; 

    deviceBtn.addEventListener('mouseenter', function() {
        clearTimeout(capsuleTimer);
        deviceTimer = setTimeout(() => {
            capsuleWindow.style.visibility = 'hidden';
            deviceWindow.style.visibility = 'visible';
        }, delay);
    });

    deviceBtn.addEventListener('mouseleave', function() {
        clearTimeout(deviceTimer);
        deviceWindow.style.visibility = 'hidden';
    });

    capsuleBtn.addEventListener('mouseenter', function() {
        clearTimeout(deviceTimer);
        capsuleTimer = setTimeout(() => {
            deviceWindow.style.visibility = 'hidden';
            capsuleWindow.style.visibility = 'visible';
        }, delay);
    });

    capsuleBtn.addEventListener('mouseleave', function() {
        clearTimeout(capsuleTimer);
        capsuleWindow.style.visibility = 'hidden';
    });

    deviceWindow.style.visibility = 'hidden';
    capsuleWindow.style.visibility = 'hidden';
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Получаем все элементы
//     const clickableDivs = document.querySelectorAll('.button_3, .button_4, .button_5');
//     const overlay = document.getElementById('overlay');
//     const closeButtons = document.querySelectorAll('.close_window');
//     const modals = document.querySelectorAll('.modal_window');

//     // Функция для открытия модального окна
//     function openModal(modalId) {
//         const modal = document.getElementById(modalId);
//         modal.style.display = 'block';
//         overlay.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//     }

//     // Функция для закрытия модального окна
//     function closeModal() {
//         modals.forEach(modal => {
//             modal.style.display = 'none';
//         });
//         overlay.style.display = 'none';
//         document.body.style.overflow = '';
//     }

//     // Назначаем обработчики событий для кликабельных div
//     clickableDivs.forEach(div => {
//         div.addEventListener('click', function() {
//             const modalId = this.getAttribute('data_window');
//             openModal(modalId);
//         });
//     });

//     // Назначаем обработчики событий для кнопок закрытия
//     closeButtons.forEach(button => {
//         button.addEventListener('click', closeModal);
//     });

//     // Закрытие при клике на оверлей
//     overlay.addEventListener('click', closeModal);

//     // Закрытие при нажатии ESC
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             closeModal();
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const closeBtns = document.querySelectorAll('.close_window');
    const modals = document.querySelectorAll('.modal_window');
    const clickableDivs = document.querySelectorAll('.button_3, .button_4, .button_5');

    // Открытие модального окна
    clickableDivs.forEach(div => {
        div.addEventListener('click', function() {
            const modalId = this.getAttribute('data_window');
            document.getElementById(modalId).style.display = 'block';
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        });
    });

    // Закрытие модального окна
    function closeModal() {
        modals.forEach(modal => modal.style.display = 'none');
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Возвращаем скролл
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    overlay.addEventListener('click', closeModal);

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.clock_center, .hour_hand, .minute_hand');
    const colorSchemes = [
        'rgba(201, 190, 145, 1)', 'rgba(58, 113, 203, 1)', 
        'rgba(137, 149, 193, 1)', 'rgba(239, 154, 57, 1)', 
        'rgba(91, 71, 47, 1)', 'rgba(33, 155, 178, 1)', 
        'rgba(172, 171, 167, 1)', 'rgba(142, 141, 137, 1)', 
        'rgba(182, 145, 188, 1)', 'rgba(136, 222, 51, 1)', 
        'rgba(42, 58, 91, 1)', 'rgba(203, 100, 19, 1)', 
        'rgba(202, 155, 139, 1)', 'rgba(51, 220, 215, 1)' ];
    circles.forEach(circle => {
        let currentScheme = -1;
        circle.addEventListener('click', function() {
            currentScheme = (currentScheme + 1) % (colorSchemes.length + 1);
            if (currentScheme === colorSchemes.length) {
                this.style.backgroundColor = 'black';
            } else {
                this.style.backgroundColor = colorSchemes[currentScheme];
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const fragments = document.querySelectorAll('.f1, .f2, .f3, .f4, .f5, .f6, .f7, .f8, .f9, .f10, .f11, .f12');
    const container = document.querySelector('.fragments');
    
    fragments.forEach(fragment => {
        let startX, startY, initialLeft, initialTop;
        fragment.addEventListener('dragstart', function(e) {
            const rect = this.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            initialLeft = rect.left - containerRect.left;
            initialTop = rect.top - containerRect.top;
            
            startX = e.clientX;
            startY = e.clientY;
            
            e.dataTransfer.setData('text/plain', this.className);
            e.dataTransfer.effectAllowed = 'move';
        });
        
        fragment.addEventListener('dragend', function(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            this.style.left = (initialLeft + dx) + 'px';
            this.style.top = (initialTop + dy) + 'px';
            
            e.preventDefault();
        });
    });
    
    container.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });
    
    container.addEventListener('drop', function(e) {
        e.preventDefault();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll(`
        .el_01, .el_02, .el_03, .el_04, .el_05, 
        .el_06, .el_07, .el_08, .el_09, .el_10,
        .el_11, .el_12, .el_13, .el_14, .el_15
    `);
    
    const colorSchemes = [
        'rgba(201, 190, 145, 1)', 'rgba(58, 113, 203, 1)', 
        'rgba(137, 149, 193, 1)', 'rgba(239, 154, 57, 1)', 
        'rgba(91, 71, 47, 1)', 'rgba(33, 155, 178, 1)', 
        'rgba(172, 171, 167, 1)', 'rgba(142, 141, 137, 1)', 
        'rgba(182, 145, 188, 1)', 'rgba(136, 222, 51, 1)', 
        'rgba(42, 58, 91, 1)', 'rgba(203, 100, 19, 1)', 
        'rgba(202, 155, 139, 1)', 'rgba(51, 220, 215, 1)' ];
    
    circles.forEach(circle => {
        let currentScheme = -1;
        
        circle.addEventListener('click', function() {
            currentScheme = (currentScheme + 1) % (colorSchemes.length + 1);
            
            if (currentScheme === colorSchemes.length) {
                this.style.backgroundColor = 'black';
            } else {
                this.style.backgroundColor = colorSchemes[currentScheme];
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.el_1, .el_2, .el_3, .el_4, .el_5, .el_6, .el_7, .el_8, .el_9, .el_010, .el_011, .el_012, .el_013, .el_014, .el_015');
    const colorSchemes = [
        'rgba(201, 190, 145, 1)', 'rgba(58, 113, 203, 1)', 
        'rgba(137, 149, 193, 1)', 'rgba(239, 154, 57, 1)', 
        'rgba(91, 71, 47, 1)', 'rgba(33, 155, 178, 1)', 
        'rgba(172, 171, 167, 1)', 'rgba(142, 141, 137, 1)', 
        'rgba(182, 145, 188, 1)', 'rgba(136, 222, 51, 1)', 
        'rgba(42, 58, 91, 1)', 'rgba(203, 100, 19, 1)', 
        'rgba(202, 155, 139, 1)', 'rgba(51, 220, 215, 1)' ];
    
    circles.forEach(circle => {
        let currentScheme = -1;
        
        circle.addEventListener('click', function() {
            currentScheme = (currentScheme + 1) % (colorSchemes.length + 1);
            
            if (currentScheme === colorSchemes.length) {
                this.style.backgroundColor = 'black';
            } else {
                this.style.backgroundColor = colorSchemes[currentScheme];
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0; 

    function handleClick() {
        clickCount++; 

        if (clickCount === 1) {
            const texts = document.querySelectorAll('.text');
            texts.forEach(text => {
                text.classList.toggle('new_text');
            });

            const moon1 = document.querySelector('.moon_1');
            const moon2 = document.querySelector('.moon_2');

            moon1.style.transform = 'translateX(5vw) translateY(-4vw)';
            moon2.style.transform = 'translateX(-20px) translateY(2px)';
        } else if (clickCount === 2) {
            const panel = document.querySelector('.panel');
            panel.style.right = '0vw';
        } else if (clickCount === 3) {
            const panel = document.querySelector('.panel');
            panel.style.right = '-60vw';
        } else if (clickCount === 4) {
            const panel_2 = document.querySelector('.panel_2');
            panel_2.style.left = '0vw';
        } else if (clickCount === 5) {
            const panel_2 = document.querySelector('.panel_2');
            panel_2.style.left = '-60vw';
        } else if (clickCount === 6) {
            const texts = document.querySelectorAll('.text');
            texts.forEach(text => {
                text.classList.remove('new_text');
            });

            const moon1 = document.querySelector('.moon_1');
            const moon2 = document.querySelector('.moon_2');

            moon1.style.transform = 'translateX(0) translateY(0)';
            moon2.style.transform = 'translateX(0) translateY(0)';

            clickCount = 0; 
        }
    }

    const impulse_moons = document.querySelector('.impulse_moons');
    impulse_moons.addEventListener('click', handleClick);
});



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.runline_01').forEach(runline => {
        runline.addEventListener('click', () => {
            if (runline.style.animationPlayState === 'paused') {
                runline.style.animationPlayState = 'running';
            } else {
                runline.style.animationPlayState = 'paused';
            }
        });
    });
    document.querySelectorAll('.runline_02').forEach(runline => {
        runline.addEventListener('click', () => {
            if (runline.style.animationPlayState === 'paused') {
                runline.style.animationPlayState = 'running';
            } else {
                runline.style.animationPlayState = 'paused';
            }
        });
    });
    document.querySelectorAll('.runline_03').forEach(runline => {
        runline.addEventListener('click', () => {
            if (runline.style.animationPlayState === 'paused') {
                runline.style.animationPlayState = 'running';
            } else {
                runline.style.animationPlayState = 'paused';
            }
        });
    });
    document.querySelectorAll('.runline_04').forEach(runline => {
        runline.addEventListener('click', () => {
            if (runline.style.animationPlayState === 'paused') {
                runline.style.animationPlayState = 'running';
            } else {
                runline.style.animationPlayState = 'paused';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const ticker = document.querySelectorAll('.name_line');
    
    const colorSchemes = [
        'rgba(201, 190, 145, 1)', 'rgba(137, 149, 193, 1)', 
        'rgba(239, 154, 57, 1)', 'rgba(58, 113, 203, 1)', 
        'rgba(33, 155, 178, 1)', 'rgba(172, 171, 167, 1)', 
        'rgba(142, 141, 137, 1)', 'rgba(182, 145, 188, 1)', 
        'rgba(136, 222, 51, 1)', 'rgba(203, 100, 19, 1)', 
        'rgba(202, 155, 139, 1)', 'rgba(51, 220, 215, 1)' ];
    
    ticker.forEach(ticker => {
        let currentScheme = -1;
        
        ticker.addEventListener('click', function() {
            currentScheme = (currentScheme + 1) % (colorSchemes.length + 1);
            
            if (currentScheme === colorSchemes.length) {
                this.style.backgroundColor = 'white';
            } else {
                this.style.backgroundColor = colorSchemes[currentScheme];
            }
        });
    });
});
