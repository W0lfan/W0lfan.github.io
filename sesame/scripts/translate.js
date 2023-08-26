function fetchData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

let LanguageValues = GetLanguage(localStorage.getItem('language'));

function GetAvailableLanguages() {
    async function GetLanguages() {
        let L = await fetchData('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/translate/languages.json');
        let menu = document.querySelector('.parameter .action .menu');
        let keyToMove = null;

        // Find the key associated with the given value
        for (const key in L) {
          if (L.hasOwnProperty(key) && L[key] === localStorage.getItem('language')) {
            keyToMove = key;
            break;
          }
        }
      
        if (keyToMove) {
          const temp = L[keyToMove];
          delete L[keyToMove];
          L = { [keyToMove]: temp, ...L };
        }
        let i =0;
        for (let [key,value] of Object.entries(L)) {
            const div = document.createElement('div');
            div.className = 'language';
            div.id = value;
            div.textContent = key;
            if (i > 0) {
                div.addEventListener('click',function() {
                    switchLanguage(value)
                });
            } else {
                i++;
            }
            menu.appendChild(div);
        }
    }
    GetLanguages();
}
function switchLanguage(id) {
    localStorage.setItem('language',id);
    location.reload()
}
function SyncParam() {
    const parameters = document.querySelectorAll('.parameters-content .parameter');

    for (let i = 0; i < parameters.length; i++) {
        parameters[i].querySelector('.header .title .name').innerHTML = LanguageValues.parameters.titles[i];
        parameters[i].querySelector('.header .description').innerHTML = LanguageValues.parameters.descriptions[i]
    }
}
function SetLanguageForHome() {
    const header_suggested_search = document.getElementsByClassName('infos-type');
    const suggested_search = document.getElementsByClassName('search-suggestion');

    
    if (suggested_search) {
        document.querySelector('.pick-a-type .top').innerHTML = LanguageValues.home.scroll_menu.top;
        for (let i = 0; i < suggested_search.length; i++) {
            suggested_search[i].innerHTML = LanguageValues.home.scroll_menu.click_query[i];
        }
    }
    if (header_suggested_search) {
        for (let i = 0; i < header_suggested_search.length; i++) {
            header_suggested_search[i].innerHTML = LanguageValues.home.scroll_menu.infos_items[i];
        }
    }

    document.querySelector('.search-input input').setAttribute('placeholder', LanguageValues.home.input_placeholder);


}
function GetLanguage(id) {
    async function returnLanguage() {
        LanguageValues = await fetchData(`https://raw.githubusercontent.com/W0lfan/SesameAPI/main/translate/${id}.json`);   
    }
    returnLanguage();
}