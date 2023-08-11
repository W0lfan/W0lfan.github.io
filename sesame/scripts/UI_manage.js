async function display_ui_by_file(type, act_back) {
    const response = await fetch(`uis/${type}.html`);
    const text = await response.text();
    const parent = document.createElement('div');
    parent.innerHTML = text;

    parent.addEventListener('load', () => {
        act_back();
        console.log('The parent is fully loaded!');
    });
    document.body.innerHTML += parent.outerHTML;
}

let check_ui_display = function() {
    let status = localStorage.getItem('display');
    document.querySelector(`.view-${status}`).style.backgroundColor = "rgba(255,255,255,0.1)";
};

let trigger_search = [];
function ManageQuerySearch(element) {
    const id = element.id;

    // Toggle the id in the array
    if (trigger_search.includes(id)) {
        trigger_search = trigger_search.filter(triggeredId => triggeredId !== id);
        element.style.backgroundColor ="rgba(255, 255, 255, 0.1)";
    } else {
        trigger_search.push(id);
        element.style.backgroundColor ="rgba(0, 0, 0, 0)";
    }

    // Update element's background color

    // Perform search using Search function
    Search(search_input, false, false, trigger_search);
}


let ManageDisplay = function() {
    let status = localStorage.getItem('display');
    if (status==="grid") {
        localStorage.setItem('display',"line");
    } else {
        localStorage.setItem('display',"grid");
    }
    if (search_input == "Official Mods") {
        Search('Official Mods',false,'mods',[],'official',[1,2])
    } else if (search_input == "All Mods") {
        Search('All Mods',false,'mods');
    } else if (search_input == "All Clans") {
        Search('All Clans',false,'clans')
    }  else if (search_input == "All Users") {
        Search('All Users',false,'users')
    } else if (search_input == "Official Contributors") {
        Search('Official Contributors',false,'users',trigger_search,'isContrib',true)
    } else if (search_input == "Sesame Team") {
        Search('Sesame Team',false,'users',trigger_search,'isSesame',true)
    }else {
        Search(search_input, false, false,trigger_search);
    }
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
function formatAuthors(authors) {
    return authors.map(author => {
        return `<a href="${author.link}" target="_blank">${author.name}</a>`;
    }).join(', ');
}
function formatArray(array) {
    return array.map(item => {
        return `${item}`;
    }).join(', ');
}