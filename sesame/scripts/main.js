document.addEventListener('DOMContentLoaded',function() {

        localStorage.setItem('display','line');
    if (localStorage.getItem('theme')  === null) {
        localStorage.setItem('theme','black');
    }
    if (localStorage.getItem('article_view') === null) {
        localStorage.setItem('article_view',true);
    }
    if (localStorage.getItem('language') === null) {
        localStorage.setItem('language',"EN");
    }
    ChangeFont(localStorage.getItem('theme'));
    const display_result = () => {
        console.log('e');
    };
    async function DisplayParameters() {
        await display_ui_by_file('parameters.txt',display_result);
        ChangeFont(localStorage.getItem('theme'));
        ArticleManagement((localStorage.getItem('article_view') === 'true'),"switch");
    }
    DisplayParameters();
    setTimeout(() => {
        SetLanguageForHome()

    }, 200);
    document.querySelector('.search-button').addEventListener('click',function() {
        Search();
    });
    document.addEventListener('keydown', function(event) {
        let Input = document.querySelector('.search-input input');
        if (event.key === 'Enter') {
            Search();
        } else if ((event.key === 'p' || event.key === 'P') && (Input && document.activeElement != Input)) {
            TriggerParameterView()
        }
    });
    window.addEventListener('scroll', function() {
        let scrollY = window.scrollY;
        let article = document.querySelector('.sesame-informative');
        let metricsBar = document.querySelector('.display-research .results .infos');
        if (scrollY > 20) {
            if (metricsBar) {
                metricsBar.style.opacity = 0;
            }
            if (article) {
                article.style.top = "80px";
            }
        } else {
            if (metricsBar) {
                metricsBar.style.opacity = 1;
            }
            if (article) {
                article.style.top = "130px"; // Initial position when at the top
            }
        }
    });
    document.addEventListener("click", function(event) {
        let ev = event.target;
        fetch("https://raw.githubusercontent.com/W0lfan/W0lfan.github.io/main/sesame/database/mods.json")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
            let mods = data;
            for (let mod of mods) {
                if (mod.name === ev.id.replace('load-',"")) {
                    DownLoad(githubToRaw(mod.link.url), mod.name);
                }
            }
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    
    
    });
});