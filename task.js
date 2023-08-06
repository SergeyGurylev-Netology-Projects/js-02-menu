const menuLinkArray = Array.from(document.querySelectorAll('.menu__link'));
menuLinkArray.forEach(m => {m.onclick = onClickMenuLink});

let activeMenuSub = null;

function onClickMenuLink() {
    let menuSub = this.closest('.menu__item').querySelector('.menu_sub');
    if (menuSub) {
        if (activeMenuSub) {
            activeMenuSub.className = 'menu menu_sub';
        }

        if (menuSub === activeMenuSub) {
            activeMenuSub = null;
        } else {
            menuSub.className = 'menu menu_sub menu_active';
            activeMenuSub = menuSub;
        }

        return false;
    }
}