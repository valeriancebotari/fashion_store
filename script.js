/* ***************** CODE JS *************************** */
const menuTrigger  = document.querySelectorAll('[data-open-btn]');
const mobileMenu   = document.querySelectorAll('[data-show]');
const closeTrigger = document.querySelectorAll('[data-close-btn]');
const overlay      = document.querySelector('[data-overlay]');


// enable triggers
for (let i = 0; i < menuTrigger.length; i++) {
    //console.log(menuTrigger[i]);

    const closeMenu = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    menuTrigger[i].addEventListener('click', function(){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    closeTrigger[i].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
}

// mobile submenu
const submenu = document.querySelectorAll('.sub-trigger');
    submenu.forEach( (menu) => menu.addEventListener('click', toggle) );

    function toggle() {
        submenu.forEach( (item) => item != this ? item.classList.remove('expand') : null);

        if (this.classList != 'expand') {
            this.classList.toggle('expand');
        }
    }

// tabbed swiper
let tabbedNav = new Swiper('.tabs', {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: false,
    spaceBetween: 20
});    

let theTab = new Swiper('.tabs-box', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav
    },
})