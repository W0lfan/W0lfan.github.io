const fonts = {
    "--background-color-left": { black: "#232323", white: "#ffffff" },
    "--backgrounds": { black: "#181818", white: "#f0f0f0" },
    "--backgrounds-lighter": { black: "#1F1F1F", white: "#c1c1c1" },
    "--black-coloring": { black: "#181818b3", white: "#616161b3" },
    "--black-lighter": { black: "#ffffff1a", white: "#bdbdbd1a" },
    "--coloring": { black: "white", white: "rgb(46, 45, 45)" },
    "--color-light": { black: "#ffffffb3", white: "#000000b3" },
    "--color-lighter": { black: "#ffffff1a", white: "#4747471a" },
    "--color-super-light": { black: "#ffffff06", white: "#ffffff06" },
    "--light-hovering": { black: "#ffffff1a", white: "#ffffff1a" },
  };

  let param_view = false;
  function TriggerParameterView() {
    param_view = !param_view;
    let content = document.querySelector('.parameters-content');
    let parent = document.querySelector('.parameters');
    content.style.display = !param_view ? "none" : "flex";
    parent.style.backgroundColor = !param_view ? "rgba(0,0,0,0)" : "var(--backgrounds)";
    parent.style.borderColor = !param_view ? "rgba(0,0,0,0)" : "var(--backgrounds-lighter)";
    parent.style.width = !param_view ? "fit-content" : "300px";
    parent.style.height = !param_view ? "fit-content" : "120px";

  }
  

  function ChangeDisplayThemeParameter() {
    if (document.querySelector(`#switch-theme-${localStorage.getItem('theme')}`) && document.querySelector(`#switch-theme-${localStorage.getItem('theme') === "black" ? "white" : "black"}`)) {
        document.querySelector(`#switch-theme-${localStorage.getItem('theme')}`).style.backgroundColor = 'var(--color-lighter)';
        document.querySelector(`#switch-theme-${localStorage.getItem('theme') === "black" ? "white" : "black"}`).style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }

  
  function ChangeFont(font) {
    for (let [key, value] of Object.entries(fonts)) {
      document.documentElement.style.setProperty(key, value[font]);
    }
    localStorage.setItem('theme',font);
    ChangeDisplayThemeParameter(font)
  }


  function ArticleManagement(value,Switch = true) {
    let articles = document.querySelectorAll('.sesame-informative');

    if (value === false) {
      document.querySelector(`#switch-article-hide`).style.backgroundColor = 'var(--color-lighter)';
      document.querySelector(`#switch-article-view`).style.backgroundColor = 'rgba(0,0,0,0)';
      if (Switch === true) {
          articles.forEach((article) => {
            article.animate([{opacity:1},{opacity:0,display:"none"}],{duration:200,fill:"forwards"})
        });
      }
    } else {
      document.querySelector(`#switch-article-view`).style.backgroundColor = 'var(--color-lighter)';
      document.querySelector(`#switch-article-hide`).style.backgroundColor = 'rgba(0,0,0,0)';
      if (Switch) {
        articles.forEach((article) => {
          article.animate([{opacity:0,display:"flex"},{opacity:1}],{duration:200,fill:"forwards"})
      });
      }

    }
    if (Switch == true) {
        localStorage.setItem('article_view',value)
    }
  }
  