import { FetchContent } from "../../../utils/NFC-modules/scripts/init/provider.js";

export async function LoadUI(UI,parent) {
    parent.innerHTML += UI;
}

export function ScrollSearchBar() {
    document.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        let searchBar = document.querySelector('.search-input');

        const documentHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          );

        if (scrollY > 300) {
            searchBar.classList.add('searchBar-fixed')
        } else {
            if (searchBar.classList.contains('searchBar-fixed')) {
                searchBar.classList.remove('searchBar-fixed');
            }
        }
    });
}


export async function LoadManage(view,state) {
    if (view) {
        if (!document.querySelector('.loader')) {
            const Loader = await FetchContent('/utils/uis/sesame/load/loader.txt','txt');
            await LoadUI(Loader,document.querySelector('.sesame-processus'));
        }
        try {
            document.querySelector('.loader .state').innerHTML = state;
        } catch (error) {
            await LoadManage(true,state);
        }
    } else {
        if (document.querySelector('.loader')) {
            document.querySelector('.loader').remove();
        }
    }
};

export function ImageSize(url,callback) {
    var img = new Image();
    img.src = url;
    img.onload = function() {
        var width = img.width;
        var height = img.height;
        callback(width, height);
    };
}