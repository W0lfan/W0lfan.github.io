export function InitMenuClicks() {
    const button = document.querySelector('.browser-menu #openMenu');
    const menu = document.querySelector('.browser-menu');

    button.addEventListener('click',function() {
        console.log('click')
        if (menu.classList.contains('browser-menu-view')) {
            menu.classList.remove('browser-menu-view');
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>';
        } else {
            menu.classList.add('browser-menu-view');
            this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>';
        }
    })
}