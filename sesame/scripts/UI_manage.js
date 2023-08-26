async function display_ui_by_file(type, act_back) {
    const response = await fetch(`uis/${type}`);
    const text = await response.text();
    const parent = document.createElement('div');
    parent.innerHTML = text;

    parent.addEventListener('load', () => {
        act_back();
        console.log('The parent is fully loaded!');
    });
    document.body.innerHTML += text;
}

let check_ui_display = function() {
    let status = localStorage.getItem('display');
    document.querySelector(`.view-${status}`).style.backgroundColor = "var(--backgrounds-lighter)";
};

let trigger_search = [];
function ManageQuerySearch(element) {
    const id = element.id;

    // Toggle the id in the array
    if (trigger_search.includes(id)) {
        trigger_search = trigger_search.filter(triggeredId => triggeredId !== id);
        element.style.backgroundColor ="var(--backgrounds-lighter)";
        document.querySelectorAll(`.${id}-result`).forEach((el) => {
            el.style.display = 'flex';
        });
        document.querySelector(`#${id}-metrics span`).innerHTML = Metrics[id];
        document.querySelector(`${id}-swipe-scroll`).style.display = "flex";
    } else {
        trigger_search.push(id);
        element.style.backgroundColor ="var(--backgrounds)";
        document.querySelectorAll(`.${id}-result`).forEach((el) => {
            el.style.display = 'none';
        });
        document.querySelector(`#${id}-metrics span`).innerHTML = '0';
        document.querySelector(`${id}-swipe-scroll`).style.display = "none";
    }





    // Update element's background color

    // Perform search using Search function
}


let ManageDisplay = function() {
    let status = localStorage.getItem('display');
    let toDisplayBack = document.querySelectorAll('.mod-result');

    if (status === "grid") {
        localStorage.setItem('display', 'line');
        toDisplayBack.forEach((el) => {
            el.classList.remove('result-grid');
            el.classList.add('result-line'); // Use a different class name for line display
        });
        document.querySelector('.results-container').classList.remove("grid-display");
        document.querySelector('.results-container').classList.add("line-display");
        document.querySelector('.view-line').style.backgroundColor = "var(--backgrounds-lighter)";
        document.querySelector('.view-grid').style.backgroundColor = "var(--backgrounds)";
    } else {
        localStorage.setItem('display', 'grid');
        toDisplayBack.forEach((el) => {
            el.classList.add('result-grid');
            el.classList.remove('result-line'); // Use a different class name for line display
        });
        document.querySelector('.results-container').classList.add("grid-display");
        document.querySelector('.results-container').classList.remove("line-display");
        document.querySelector('.view-line').style.backgroundColor = "var(--backgrounds)";
        document.querySelector('.view-grid').style.backgroundColor = "var(--backgrounds-lighter)";
    }

    /*
    if (search_input == "Official Mods") {
        Search('Official Mods',false,'mods',[],'official',[1,2])
    } else if (search_input == "All Mods") {
        Search('All Mods',false,'mods');
    } else if (search_input == "All communities") {
        Search('All communities',false,'communities')
    }  else if (search_input == "All Users") {
        Search('All Users',false,'users')
    } else if (search_input == "Official Contributors") {
        Search('Official Contributors',false,'users',trigger_search,'isContrib',true)
    } else if (search_input == "Sesame Team") {
        Search('Sesame Team',false,'users',trigger_search,'isSesame',true)
    }else {
        Search(search_input, false, false,trigger_search);
    }*/
}

function githubToRaw(githubUrl) {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/;
    const match = githubUrl.match(regex);

    if (match) {
        const [, user, repo, branch, path] = match;
        return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`;
    } else {
        console.error("Invalid GitHub URL format");
        return null;
    }
}

function wrapCodeWithSyntaxHighlighting(codeLines) {
    const highlightingRules = [
        { regex: /\.ace_numeric\b/, class: "ace_numeric" },
        { regex: /\.ace_boolean\b/, class: "ace_boolean" },
        { regex: /\.ace_string\b/, class: "ace_string" },
        { regex: /\.ace_type\b/, class: "ace_type" },
        { regex: /\.ace_function\b/, class: "ace_function" },
        { regex: /\.ace_keyword\b/, class: "ace_keyword" },
        { regex: /\.ace_escape\b/, class: "ace_escape" },
        { regex: /\.ace_variable .ace_language\b/, class: "ace_variable ace_language" },
        { regex: /\.ace_comment\b/, class: "ace_comment" }
    ];

    return codeLines.map(line => {
        for (const rule of highlightingRules) {
            if (line.match(rule.regex)) {
                return `<span class="${rule.class}">${line}</span><br>`;
            }
        }
        return `${line}<br>`;
    }).join('');
}

function formatArray(array) {
    return array.map(item => {
        return `${item}`;
    }).join(', ');
}

let article_view = true;

function ManageArticle() {
    let article_parent = document.querySelector('.sesame-informative');
    let show = document.getElementById('show-article');
    let hide = document.getElementById('hide-article');
    if (article_view === true) {
        hide.style.display = "none";
        show.style.display = "flex";
        article_parent.style.height = "0.1px"; // Set initial value before transition
        article_parent.style.borderRadius = "20px";
    } else {
        hide.style.display = "flex";
        show.style.display = "none";
        article_parent.style.borderRadius = "10px";
        article_parent.style.height = article.height; // Set full height before transition
    }

    article_view = !article_view;
}