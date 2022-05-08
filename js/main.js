let btn = document.getElementById('navBtn');
let menu = document.getElementById('mobileMenu');
let menuContainer = document.getElementById('mobileMenuContainer');

btn.onclick = () => {

    btn.classList.toggle('active');


    if(menu.classList.contains('hidden')){
        setTimeout(() => {
            menu.classList.toggle('hidden');
            menuContainer.classList.toggle('active');
        }, 1000);
    }else{
        menu.classList.toggle('hidden');
            menuContainer.classList.toggle('active');
    }



}