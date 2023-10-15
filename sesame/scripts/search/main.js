
let search_input;
let Metrics;

const parameters = {
    maxDisplay : 25
};

const __LINKS__ = {
    codes: "codes.json",
    users: "users.json",
    mods: "mods.json",
    communities: "communities.json",
    ships: "ships.json"
};

const LogosSRC = {
    "github": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    "discord": "https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source",
    "youtube": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png",
    "spotify": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    "reddit" : "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png",
    "International": '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.266-80q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80ZM480-140q142.375 0 241.188-99.5Q820-339 820-480v-13q-6 26-27.405 43.5Q771.189-432 742-432h-80q-33 0-56.5-23.5T582-512v-40H422v-80q0-33 23.5-56.5T502-712h40v-22q0-16 13.5-40t30.5-29q-25-8-51.357-12.5T480-820q-141 0-240.5 98.812Q140-622.375 140-480h150q66 0 113 47t47 113v40H330v105q34 17 71.7 26t78.3 9Z"/></svg>',
    "EU": '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479.933-141Q499-141 517-143t35-6.263L501-226H353v-42.333q0-34.925 24.822-59.796Q402.644-353 437.5-353H522v-127h-84q-17 0-30-13t-13-30v-85h-18.818Q349-608 329.5-626.5 310-645 310-672.486q0-9.514 3-19.014t8-17.5l66-97q-107 30-176.5 119.439T141-480h42v-43q0-17 12.5-29.5T225-565h85q17 0 30 12.5t13 29.5v43q0 17-13 29.5T310-438v42.74q0 35.26-24.906 59.76t-59.88 24.5H186q45 77 122.328 123.5T479.933-141ZM802-376q8-25 12.5-50.941 4.5-25.941 4.5-53.471 0-118.588-71.967-209.27Q675.067-780.364 565-809v116.518q35 0 59.924 24.893 24.925 24.893 24.925 59.848V-523q20.151 0 36.651 5.5Q703-512 717-498l85 122ZM480.266-80q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z"/></svg>',
    "Asia": '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M442-144q-35.062 0-60.031-24.5T357-228.044q0-35.045 24.969-60Q406.938-313 442-313l24.75-23.742Q475-345 486.156-350q11.156-5 22.844-5 25 0 42 17.5t17 42.225V-277q0 20 14.5 34.5T617-228q15.804 0 28.446-9.554 12.643-9.554 17.911-24.415L676-297q9-26 30.039-42.025 21.039-16.026 48.39-16.026Q766-384 772.5-416q6.5-32 6.5-65 0-94-46.5-170.5T610-773v39q0 34.65-24.675 59.325Q560.65-650 526-650h-42v85q0 17-12.5 29.5T442-523h-42v71.022Q400-429 384.135-413 368.269-397 345-397q-14 0-26.5-6.5T298-421l-67.077-102H189v41.69q0 32.31-21.5 55.81T115-398q28 109 118.749 181.5T442-144Zm84.459-253Q509-397 496.5-409.5T484-439q0-17 12.5-29.5t29.959-12.5h41.082Q585-481 597.5-468.5T610-439q0 17-12.5 29.5T567.541-397h-41.082Zm97.926-126Q604-523 591-539.5q-13-16.5-6.429-36.405L601-622q5-13 15.192-20.5 10.193-7.5 22.423-7.5Q659-650 672-633.5q13 16.5 6.429 36.405L662-551q-5 13-15.192 20.5-10.193 7.5-22.423 7.5ZM442.266-80q-82.734 0-155.5-31.5t-127.266-86Q105-252 73.5-324.841 42-397.681 42-480.5q0-82.819 31.5-155.659Q105-709 159.5-763t127.341-85.5Q359.681-880 442.5-880q82.819 0 155.659 31.5Q671-817 725-763t85.5 127Q842-563 842-480.266q0 82.734-31.5 155.5T725-197.684q-54 54.316-127 86Q525-80 442.266-80Z"/></svg>',
    "USA": '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-43-61v-82q-35 0-59-26t-24-61v-44L149-559q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437-141Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607-799v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393-568h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z"/></svg>'
};



let SVG_Paths = {
    "link": '<div class="svg-pathing" style="transform:rotate(-45deg)"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"/></svg></div>',
    "docs": '<div class="svg-pathing"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M277-279h275v-60H277v60Zm0-171h406v-60H277v60Zm0-171h406v-60H277v60Zm-97 501q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"/></svg></div>',
    "search": '<div class="svg-pathing"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg></div>',
    "add": '<div class="svg-pathing"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg></div>'
}



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function waitForDisplay(element, callback) {
    if (element.offsetHeight > 0) {
        callback();
    } else {
        requestAnimationFrame(() => waitForDisplay(element, callback));
    }
}

function copyToClipboard(content,name) {
    if (!name) {
        name = LanguageValues.pop.link_to;
    }
    name = name.replace(/&apos/,"'");
    const url = `https://w0lfan.github.io/sesame/#search?='${content}'`;
    navigator.clipboard.writeText(url)
        .then(() => {
            DisplayNotif(`${name} ${capitalizeFirstLetter(content.replace(/-/g,' '))}`,5);
        })
        .catch(error => {
            console.error('Error copying URL to clipboard:', error);
            DisplayNotif(`rror copying ${name} to clipboard`,5)
        });
}

function keyExistsWithValue(obj, targetKey, targetValue) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (keyExistsWithValue(obj[key], targetKey, targetValue)) {
                return true;
            }
        } else if (key === targetKey) {
            if (Array.isArray(targetValue)) {
                if (targetValue.includes(obj[key])) {
                    return true;
                }
            } else if (obj[key] === targetValue) {
                return true;
            }
        }
    }
    return false;
}

async function formatMods(authors, id) {
    const modsDatas = await fetchData('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/mods.json');
    authors.forEach((U) => {
        function TakeUser() {
            for (let mod of modsDatas) {
                if (mod.name && mod.name.toLowerCase() === U.toLowerCase()) {
                        document.getElementById(id).innerHTML += `
                        <div class="mod-popup" onclick="Search('${mod.name}')">
                            ${
                                mod.templateImage ? `
                                    <div class="mod-profile-picture">
                                        <img src="${mod.templateImage}">
                                    </div>
                                ` : ''
                            }
                            <div class="mod-profile-name">${mod.name}</div>
                        </div>
                    `;
                    return;
                }
            }
        }
        TakeUser();
    });
}
async function formatAuthors(authors, id) {
    if (document.getElementById(id)) {
        const usersData = await fetchData('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json');

        authors.forEach((U) => {
            if (!Array.isArray(U.name)) {
                U.name = [U.name];
            }
    
            function TakeUser() {
                for (let user of usersData) {
                    if (user.name && U.name[0] && user.name.toLowerCase() == U.name[0].toLowerCase()) {
                            document.getElementById(id).innerHTML += `
                            <div class="user-author-popup" onclick="Search('${user.name}')">
                                <div class="user-profile-picture">
                                    <img src="${user.templateImage}">
                                </div>
                                <div class="user-profile-name">${user.name}</div>
                            </div>
                        `;
                        return;
                    }
                }
                document.getElementById(id).innerHTML += `
                    <div class="user-author-popup">
                        <div class="user-profile-name">${U.name[0]}</div>
                    </div>
                `;
            }
            TakeUser()
        });
    }
}








function Search(search_query = null, official_content = false, all = "", not_query = [], particular_query, particular_query_value,redo = true,dataPart = 0) {

    let CAT = LanguageValues.categories.categories;
    let hasSetNoGlobalUser = false;
    let key_word;
    let database = {};
    let userSet = 0;
    let sureStatus = false;
    let checkIfUser = false;
    let sureUserName;
    Metrics;
    let section_diff = {};

    param_view = false;
    const Display = localStorage.getItem('display');
    
    let official_queries  = {
        "all codes" : {
            act : function() {
                Search('All Codes',false,'codes',[],null,null,false)
            },
        },
        "all mods" : {
            act : function() {
                Search('All Mods',false,'mods',[],null,null,false)
            }
        },
        "all ships" : {
            act : function() {
                Search('All Ships',false,'ships',[],null,null,false)
            }
        },
        "official mods" : {
            act : function() {
                Search('Official Mods',false,'mods',[],'official',[1,2],false)
            }
        },
        "all communities" : {
            act : function() {
                Search('All Communities',false,'communities',[],null,null,false)
            }
        },
        "all users" : {
            act : function() {
                Search('All Users',false,'users',[],null,null,false)
            }
        },
        "official contributors" : {
            act : function() {
                Search('Official Contributors',false,'users',[],'isContrib',[true],false)
            }
        },
        "sesame team" : {
            act : function() {
                Search('Sesame Team',false,'users',[],'isSesame',[true],false)
            }
        }
    }
    if (!search_query) {
        key_word = document.querySelector('#search-input').value;
    } else {
        key_word = search_query;
    }
    if (key_word.length <= 0 && !official_content && !all) {
        return;
    }
    document.body.innerHTML = `
        <div class="loader-search" style="display:flex">
            <div class="text">${LanguageValues.home.wait}</div>
            <div class="loader">
                <div class="whole-loader"></div>
                <div class="min-loader"></div>
            </div>
        </div>
    `
    if (key_word && Object.keys(official_queries).includes(key_word.toLowerCase()) && redo) {
        official_queries[key_word.toLowerCase()].act();
        return;
    }
    UpdatePage(`search?='${key_word.toLowerCase().replace(/ /g,'-')}'`,`${key_word}`);

    fetch('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/api/building.js')
        .then(response => response.text())
        .then(buildingCode => {
            // Execute the code from building.js using eval()
            eval(buildingCode);

            // Now you can use the functions from building.js
            // For example:


            async function fetchDataFromAPI() {
                for (const key of Object.keys(__LINKS__)) {
                    try {
                        if (!not_query.includes(key)) {
                            const content = await FetchDataFromDatabase(all ? all : key, all ? 1 : [key_word]);
                            if (all && particular_query) {
                                let toPush = [];
                                content.forEach((ct) => {
                                    if (keyExistsWithValue(ct, `${particular_query}`, particular_query_value)) {
                                        toPush.push(ct)
                                    }
                                })
                                database[all] = toPush;
                            } else {
                                database[all ? all : key] = content;
                            }
                        }

                    } catch (error) {
                        console.error(`Error fetching data for ${all ? all : key}:`, error);
                    }
                }
                const result = [{
                        codes: [],
                        users: [],
                        mods: [],
                        communities: [],
                        ships: []
                    },
                    {
                        codes: 0,
                        users: 0,
                        mods: 0,
                        communities: 0,
                        ships: 0
                    },
                ];
                console.log(database,"resultsss")
                document.querySelector('.loader-search .text').innerHTML = LanguageValues.home.displaying;
                for (const [key, value] of Object.entries(database)) {
                    if (value.length > 0) {
                        value.forEach((item) => {
                            let prior;
                            if (item.name.includes(key_word)) {
                                prior = 3;
                            } else if (item.description && item.description.includes(key_word)) {
                                prior = 2;
                            } else {
                                prior = 1;
                            }

                            result[0][key].push({
                                id: key,
                                prior: prior,
                                content: item,
                                sure: (item.name.toLowerCase() === key_word.toLowerCase()),
                                DNIF: !(item.name.toLowerCase() === key_word.toLowerCase())
                            });
                            if ((item.name.toLowerCase() === key_word.toLowerCase()) && key === "users") {
                                sureStatus = true;
                                sureUserName = item.name;
                                sureUser = item;
                            }
                            result[1][key]++;
                        });
                    }
                }
                if (sureStatus === true) {
                    Object.keys(result[0]).forEach((key) => {
                        let content = result[0][key];
                        content.forEach((value,index2) => {
                            console.log(value)
                            if ((value.id === "users" && value.DNIF) || (value.content.name.toLowerCase() != sureUserName.toLowerCase() && (value.content.author && value.content.author.every(aut => aut.name.toLowerCase() !== sureUserName.toLowerCase())))) {
                                console.log(result[0])
                                console.log(result[0][key])
                                console.log(result[0][key][index2])
                                delete result[0][key][index2];
                            }
                        });
                    });
                    console.log(result[0],"content")

                }
                Object.keys(result[0]).forEach(key => {
                    result[0][key].sort((a, b) => b.prior - a.prior);
                });



                search_input = key_word;
                console.log('Results:\n', result)
                Metrics = result[1];
                let Datas = result[0];
                if (sureStatus) {
                    Datas.users.forEach((user) => {
                        let index = Datas.users.indexOf(user);
                        if (user.DNIF === true) {
                            Datas.users.splice(index,1);
                        }
                    })
                }
                // Create an array of metric names in descending order
                const metricNames = Object.keys(Metrics).sort((a, b) => Metrics[b] - Metrics[a]);

                // Sort the keys (properties) of the result[0] object based on the order of metricNames
                const sortedKeys = Object.keys(Datas).sort((a, b) => {
                    const metricA = metricNames.indexOf(a);
                    const metricB = metricNames.indexOf(b);
                    return metricA - metricB;
                });

                // Create a new object with sorted keys
                const sortedResult = {};
                sortedKeys.forEach(key => {
                    sortedResult[key] = result[0][key];
                });

                // Replace the original result[0] object with the sortedResult object
                Datas = sortedResult;

                for (let key of Object.keys(Datas)) {
                    Datas[key].sort((a, b) => {
                        const nameA = a.content.name.toLowerCase();
                        const nameB = b.content.name.toLowerCase();
                        return nameA.localeCompare(nameB);
                    });
                }


                let MetricValues = [];
                for (let [key, value] of Object.entries(Metrics)) {
                    MetricValues.push({
                        key: key,
                        value: value
                    });
                }
                MetricValues.sort((a, b) => b.value - a.value);
                let section_diff_lg = [];
                MetricValues.forEach((v) => {
                    let ifKeyInReturn;
                    for (let key of Object.keys(Datas)) {
                        if (key == v.key && Datas[key].length > 0) {
                            ifKeyInReturn = true;
                        }
                    }
                    if (ifKeyInReturn) {
                        section_diff[`${v.key}`] = false;
                        let cat = ["mods", "users", "ships", "communities", "codes"];
                        section_diff_lg.push(`${CAT[cat.indexOf(v.key)]}`);
                    }
                });


                const display_result = () => {
                    console.log('e');

                };




                await display_ui_by_file('results.html', display_result);
                await display_ui_by_file('parameters.txt', display_result,document.querySelector('.header .header-search'));

                ChangeFont(localStorage.getItem('theme'));
                document.querySelector('.loader-search .text').innerHTML = LanguageValues.home.home_creation;

                document.querySelector('.display-research').innerHTML += `
                    <div class="results">
                        <div class="infos">
                            <div class="global">${LanguageValues.home.results} <span>${key_word}</span></div> 
                        </div>
                    </div>
                    <div class="user-focus ${Display}-users-result">

                    </div>
                    <div class="results-container ${Display}-display">

                    </div>
                `;
                document.querySelector('.header .header-search').innerHTML += ` 
                    <div class="metrics">
                        <div class="sort-type">
                            <div class="class-sort">
                                <div class="class-s" id="mods" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('mods') ? "var(--backgrounds-lighter)" : "var(--backgrounds)"}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
                                <span>${Metrics.mods}</span>
                                <div class="metric-info-box">
                                    <div class="icon-view">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                    </div>
                                    <div class="info-box-name">
                                        ${capitalizeFirstLetter(LanguageValues.categories.categories[0])}
                                    </div>
                                </div>
                                </div>
                                <div class="class-s" id="users" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('users') ? "var(--backgrounds-lighter)" : "var(--backgrounds)"}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z"/></svg>
                                <span>${Metrics.users}</span>
                                <div class="metric-info-box">
                                    <div class="icon-view">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                    </div>
                                    <div class="info-box-name">
                                    ${capitalizeFirstLetter(LanguageValues.categories.categories[1])}
                                    </div>
                                </div>
                                </div>
                                <div class="class-s" id="ships" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('ships') ? "var(--backgrounds-lighter)" : "var(--backgrounds)"}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m98-537 168-168q14-14 33-20t39-2l77 14q-55 62-89 117.5T263-466L98-537Zm202 89q27-73 68-137.5T461-702q88-88 201-131.5T873-860q17 98-26 211T716-448q-52 52-117 93t-138 68L300-448Zm286-125q20 20 49.5 20t49.5-20q20-20 20-49.5T685-672q-20-20-49.5-20T586-672q-20 20-20 49.5t20 49.5ZM551-85l-72-165q74-29 129.5-63T726-402l14 77q4 20-2 39.5T718-252L551-85ZM162-318q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-26 26-81 43T87-74q15-109 32-163.5t43-80.5Z"/></svg>
                                <span>${Metrics.ships}</span>
                                <div class="metric-info-box">
                                    <div class="icon-view">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                    </div>
                                    <div class="info-box-name">
                                    ${capitalizeFirstLetter(LanguageValues.categories.categories[2])}
                                    </div>
                                </div>

                                </div>
                                <div class="class-s" id="communities" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('communities') ? "var(--backgrounds-lighter)" : "var(--backgrounds)"}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"/></svg>
                                <span>${Metrics.communities}</span>
                                <div class="metric-info-box">
                                    <div class="icon-view">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                    </div>
                                    <div class="info-box-name">
                                    ${capitalizeFirstLetter(LanguageValues.categories.categories[3])}
                                    </div>
                                </div>
                                </div>     
                                <div class="class-s" id="codes" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('codes') ? "var(--backgrounds-lighter)" : "var(--backgrounds)"}">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"/></svg>
                                <span>${Metrics.codes}</span>
                                <div class="metric-info-box">
                                    <div class="icon-view">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                    </div>
                                    <div class="info-box-name">
                                    ${capitalizeFirstLetter(LanguageValues.categories.categories[4])}
                                    </div>
                                </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                `;
                if (
                    Datas.codes.length === 0 &&
                    Datas.users.length === 0 &&
                    Datas.mods.length === 0 &&
                    Datas.communities.length === 0 &&
                    Datas.ships.length === 0
                ) {
                    document.querySelector('.loader-search').style.display = "none";
                    document.body.innerHTML += `
                        <div class="no-result">
                            <div class="big-title">${LanguageValues.home.no_results} <span>${key_word}</span></div>
                            <div class="small-title">${LanguageValues.home["404"]}</div>
                        </div>
                    `
                    return;

                }
                if (sureStatus) {
                    section_diff_lg.splice(Object.keys(section_diff).indexOf("users"),1);
                    delete section_diff["users"];
                }

                let ships_by_mods = {};
                for (let value of Object.values(Datas.ships)) {
                    let modName = value.content.mod.toLowerCase();
                    if (!ships_by_mods[modName]) {
                        ships_by_mods[modName] = {
                            show: false,
                            ships: []
                        };
                    }
                    ships_by_mods[modName].ships.push(value);
                }
                
                // Create an array of key-value pairs from ships_by_mods
                const shipsByModsArray = Object.entries(ships_by_mods);
                
                // Sort the array based on the number of ships in each mod group
                shipsByModsArray.sort((a, b) => b[1].ships.length - a[1].ships.length);
                
                // Convert the sorted array back to an object
                const sortedShipsByMods = Object.fromEntries(shipsByModsArray);
                const sortedModNames = Object.keys(sortedShipsByMods);

                const sortedShips = Datas.ships.sort((a, b) => {
                    const aModName = a.content.mod.toLowerCase();
                    const bModName = b.content.mod.toLowerCase();
                    return sortedModNames.indexOf(aModName) - sortedModNames.indexOf(bModName);
                  });
                Datas.ships = sortedShips;


                console.log(Datas, "result")

                setTimeout(() => {
                    for (let DatasByKey of Object.values(Datas)) {
                        for (let data of DatasByKey) {
                            if (data) {
                                let content = data.content;
                                if (!section_diff[data.id] && !JSON.parse(data.sure)) {
                                    let swipe_content;
                                    let svg_key;
                                    const keys = Object.keys(section_diff);
                                    const lastKey = keys[keys.length - 1];
                                    let nextKey;
                                    const currentIndex = keys.indexOf(data.id);
                                    let nextIndex = currentIndex + 1;
                                    nextKey = nextIndex < keys.length ? keys[nextIndex] : lastKey;
                                    var section = document.createElement('div');
                                    section.classList.add('section');
                                    section.id = 'section-' + data.id;
                                    // Check if data.id is the last key
                                    const isLastKey = data.id === lastKey;
                                    // Set swipe_content and svg_key based on whether it's the last key or not
                                    if (!section_diff_lg[nextIndex]) {
                                        nextIndex = nextIndex - 1;
                                    }
                                    if ((sureStatus && data.id == "users") || keys.length <= 1) {
                                        swipe_content,
                                        svg_key = ''
                                    }
                                    else if (keys.length > 1) {
                                        if (isLastKey) {
                                            swipe_content = `${LanguageValues.categories.return} ${section_diff_lg[0].toUpperCase()}`;
                                            svg_key = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z"/></svg>';
                                        } else {
                                            swipe_content = nextKey ? `${LanguageValues.categories.message} ${section_diff_lg[nextIndex].toUpperCase()}` : "No next key";
                                            svg_key = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z"/></svg>';
                                        }
                                    }
    
    
    
                                    // Create the section header
                                    var sectionHeader = document.createElement('div');
                                    sectionHeader.classList.add('section-header');
    
    
    
                                    // Create the text element for the section header
                                    var text = document.createElement('div');
                                    text.classList.add('text');
                                    text.textContent = capitalizeFirstLetter(section_diff_lg[currentIndex]);
    
                                    // Append the icon and text elements to the section header
                                    sectionHeader.appendChild(text);
    
                                    // Create the section info
                                    var sectionInfo = document.createElement('div');
                                    sectionInfo.classList.add('section-info');
                                    sectionInfo.id = data.id + "-swipe-scroll"
    
    
                                    // Create the SVG key content (assuming svg_key is defined)
                                    var svgKeyContent = document.createElement('div');
                                    svgKeyContent.innerHTML = svg_key;
    
                                    // Create the span element for "GO" and swipe content
                                    var span = document.createElement('span');
                                    span.textContent = swipe_content;
    
                                    // Append the SVG key content and span element to the section info
                                    sectionInfo.appendChild(svgKeyContent);
                                    sectionInfo.appendChild(span);
    
                                    // Append the section header and section info to the section
                                    section.appendChild(sectionHeader);
                                    section.appendChild(sectionInfo);
                                    // Get the results container and append the section to it
                                    var resultsContainer = document.querySelector('.results-container');
                                    resultsContainer.appendChild(section);
                                    setTimeout(() => {
                                        document.getElementById(`${data.id}-swipe-scroll`).addEventListener('click', function() {
                                            const targetSectionId = isLastKey ? `section-${keys[0]}` : `section-${nextKey}`;
                                            const targetSection = document.getElementById(targetSectionId);
                                            if (targetSection) {
                                                const targetSectionTop = targetSection.offsetTop;
                                                window.scrollTo({
                                                    top: targetSectionTop - 80,
                                                    behavior: "smooth"
                                                });
                                            }
                                        });
                                    }, 500);
                                    section_diff[data.id] = true;
    
                                }
                                if (data.id === "mods") {
                                    document.querySelector('.results-container').innerHTML += `
                                            <div class="mods-result result-${Display}">
                                                <div class="top-image">
                                                    <img src="${content.templateImage ? content.templateImage : "webutils/img/SMSE.png"}">
                                                </div>
                                                <div class="container tohover">
                                                    <div class="header">
                                                        <div class="title">
                                                            ${content.official  ? `
                                                                <div class="status"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm91-287 227-225-45-41-182 180-95-99-46 45 141 140Z"/></svg></div>
    
                                                            ` : ''}
                                                            <div class="name">${content.name}</div>
                                                            <div class="share-content" onclick="copyToClipboard('${content.name.toLowerCase().replace(/ /g,'-')}')">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                                                                <span>${capitalizeFirstLetter(LanguageValues.share)}</span>
                                                            </div>
                                                        </div>
                                                        <div class="author">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z"/></svg>
                                                                <div class="vertical-sep"></div>
                                                                <div class="container user-profile-parents" id="user-profile-parents-${content.name}"></div>
                                                            </div>
                                                        </div>
                                                        <div class="description">
                                                            ${content.description}
                                                        </div>
                                                        <div class="actions">
                                                            <div style="display:${(content.link.type || !content.link.url.toLowerCase().includes('.js')) ? 'none' : 'flex'}" " class="action" id="load-${content.name}">
                                                                <svg id ="load-${content.name}" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
                                                                <div class="text">${LanguageValues.actions.download}</div>
                                                            </div>
                                                            <div class="action" id="open-${content.name}">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
                                                                <div class="text">${LanguageValues.actions.open}</div>
                                                            </div>
                                                            <div class="important-download-advice">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-356 228-228-42-41-183 183-101-101-44 44 142 143Zm44 275q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg>
                                                            </div>
                                                    </div>
                                                </div>
                        
                                            </div>
                                `;
    
                                    setTimeout(() => {
                                        document.getElementById(`load-${content.name}`).addEventListener('click', function() {
                                            DisplayNotif(`Downloaded ${content.name}`,5);
                                            DownLoad(githubToRaw(content.link.url),`Sesame - ${content.name}`)
                                        });
                                        document.getElementById(`open-${content.name}`).addEventListener('click', function() {
                                            window.open(content.link.url, "_blank");
                                        });
                                    }, __DISPLAY_WAIT__);
                                } else if (data.id == "codes") {
                                    document.querySelector('.results-container').innerHTML += `
                                            <div class="codes-result result-${Display}" id="code-view-${Display}">
                                                <div class="container">
                                                    <div class="header">
                                                        <div class="title">
                                                            <div class="name">${content.name}</div>
                                                            <div class="share-content" onclick="copyToClipboard('${content.name.toLowerCase().replace(/ /g,'-')}')">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                                                                <span>${capitalizeFirstLetter(LanguageValues.share)}</span>
                                                            </div>
                                                        </div>
                                                        ${
                                                            !sureStatus ? `
                                                                <div class="author">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z"/></svg>
                                                                    <div class="vertical-sep"></div>
                                                                        <div class="container user-profile-parents" id="user-profile-parents-${content.name}"></div>
                                                                    </div>
                                                                </div>
                                                            ` : ''
                                                        }
                                                        <div class="description">
                                                            ${content.description}
                                                        </div>
                                                        <div class="actions">
                                                            ${
                                                                content.code ? `
                                                                <div class="action" id="${content.name.replace(/ /g, '-')}-code">
                                                                    <svg id ="load-${content.name}" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
                                                                    <div class="text">${LanguageValues.actions.download}</div>
                                                                </div>
                                                                ` : ''
                                                            }
                                                            ${
                                                                content.open ? `
                                                                <div class="action" onclick="window.open('${content.open}')">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                                                    <div class="text">${LanguageValues.actions.open}</div>
                                                                </div>
                                                                ` : ''
                                                            }
                                                            <div class="important-download-advice">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-356 228-228-42-41-183 183-101-101-44 44 142 143Zm44 275q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                                   setTimeout(() => {
                                        if (document.querySelector(`#${content.name.replace(/ /g, '-', '-')}-code`)) {
                                            document.querySelector(`#${content.name.replace(/ /g, '-', '-')}-code`).addEventListener('click', function() {
                                                DisplayNotif(`Downloaded ${content.name}`,5);
                                                DownLoadCode(`${js_beautify(content.code, {indent_size: 2})}`, `${content.name}`);
                                            });
                                        }
                                   }, 500);
                                } else if (data.id == "users") {
                                    if (JSON.parse(data.sure) != true && sureStatus != true) {
                                        if (!hasSetNoGlobalUser) {
                                            document.querySelector('.results-container').innerHTML+=`
                                                <div class="results-container-lil-users"></div>
                                            `;
                                            hasSetNoGlobalUser = true;
                                        }
                                        document.querySelector('.results-container-lil-users').innerHTML += `
                                            <div class="${data.id}-result userInfos-hover" id="click-${content.name}" onclick="Search('${content.name}')">
                                                <div class="user_pfp">
                                                    <img src="${!content.templateImage.includes('https://cdn.discordapp.com/avatars')  ? content.templateImage : "https://raw.githubusercontent.com/W0lfan/SesameAPI/main/resource/user.png"}">
                                                    ${
                                                        content.about.isSesame ? `
                                                            <div class="mini-tag" id="sesametag">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 360q-146-37-233-160t-87-276v-244l320-120 320 120v244q0 153-87 276T480-80Zm0-84q59-19 104.5-59.5T664-315q-43-22-89.5-33.5T480-360q-48 0-94.5 11.5T296-315q34 51 79.5 91.5T480-164Z"/></svg>
                                                            </div>
                                                        ` : (
                                                            content.about.isUCP ? `
                                                                <div class="mini-tag" id="ucptag">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-880h400v314q0 23-10 41t-28 29l-142 84 28 92h152l-124 88 48 152-124-94-124 94 48-152-124-88h152l28-92-142-84q-18-11-28-29t-10-41v-314Zm160 80v282l40 24 40-24v-282h-80Z"/></svg>
                                                                </div>
                                                            ` : (
                                                                content.about.isModder ? `
                                                                <div class="mini-tag" id="modtag">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Z"/></svg>
                                                                </div>
                                                                `: ''
                                                            )
                                                        )
                                                    }
                                                </div>
                                                <div class="user_name">
                                                    <div class="name">${content.name}</div>
                                                </div>
                                            </div>
                                    `;
    
                                    } else if (userSet === 0 && JSON.parse(data.sure) === true && sureStatus) {
                                        checkIfUser = true;
                                        document.querySelector('.results-container').style.marginLeft = "auto";
                                        document.querySelector('.results-container').style.marginRight = "auto";
                                        document.querySelector('.results-container').style.width = "90%";
                                        document.querySelector('.results .infos').style.display = "none";
                                        document.querySelector('.results-container').style.paddingLeft = "0px";
    
                                        function generateLINKS(dataArray) {
                                            const divElements = dataArray.map(item => `
                                            <div id="${item.id}-${content.name}" class="user-link"  style="display:${(item.src != "" && item.src.toLowerCase() != "unknown") ? "flex" : "none"}" onclick="${item.id === "discord" ? `copyToClipboard('${item.src}','${LanguageValues.pop.discord_username.replace(/'/,'&apos')}')`: `window.open('${item.src}')`}">
                                                <img src="${LogosSRC[item.id]}">
                                                <div class="content">
                                                    <div class="main">${item.id.replace(/\b\w/g, char => char.toUpperCase())}</div>
                                                    <div class="link" style="display:${item.id != "discord" ? "" : "none"}">
                                                        <svg id="linkrotate" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"/></svg>
                                                        <span>${item.src}</span>
                                                    </div>
                                                    <div class="link" style="display:${item.id === "discord" ? "" : "none"}" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>
                                                        <span>${item.src}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        `);
    
                                            return divElements.join('\n');
                                        }
                                        document.body.innerHTML += `
                                        ${
                                            content.templateImage ? `
                                            <div class="blur-top-content">
                                                <div class="blur-top-img-container"><img src="${content.templateImage}"></div>
                                                <div class="blur-top-shader"></div>
                                                <div class="blur-top-down"></div>
                                            </div>
                                            ` : ''
                                        }
                                    `;
                                        document.querySelector('.user-focus').innerHTML = `
                                        <div class="user-result ${Display}-user" id="viewuser">
                                            <div class="userInfos" id="${content.name}">
                                                <div class="share-content" onclick="copyToClipboard('${content.name.toLowerCase().replace(/ /g,'-')}')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                                                    <span>${capitalizeFirstLetter(LanguageValues.share)}</span>
                                                </div>
                                                <div class="userheader">
                                                    <div class="user_pfp">
                                                        <img src="${content.templateImage != "unknown" ? content.templateImage : "https://raw.githubusercontent.com/W0lfan/W0lfan.github.io/main/sesame/img/user.png"}">
                                                    </div>
                                                    <div class="user_name">
                                                        <div class="distinction">
                
                                                            ${
                                                                content.about.isStaff ? `
                                                                <div id="staff">
                                                                    <div class="disctinction-info-box">
                                                                        <div class="icon-view">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                                                        </div>
                                                                        <div class="info-box-name">
                                                                        ${LanguageValues.categories.tags[0]}
                                                                        </div>
                                                                    </div>
                                                                    <svg id="icon-hover" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-356 228-228-42-41-183 183-101-101-44 44 142 143Zm44 275q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg></div>
                                                                ` : ""
                                                            }
                                                            ${
                                                                content.about.isContrib ? `
                                                                    <div id="contrib">
                                                                    <div class="disctinction-info-box">
                                                                        <div class="icon-view">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                                                        </div>
                                                                        <div class="info-box-name">
                                                                        ${LanguageValues.categories.tags[1]}
                                                                        </div>
                                                                    </div>
                                                                        <svg id="icon-hover" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm91-287 227-225-45-41-182 180-95-99-46 45 141 140Z"/></svg></div>
                                                                ` : ""
                                                            }
                                                            ${
                                                                content.about.isModder ? `
                                                                <div id="mod">
                                                                <div class="disctinction-info-box">
                                                                    <div class="icon-view">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                                                    </div>
                                                                    <div class="info-box-name">
                                                                    ${LanguageValues.categories.tags[2]}
                                                                    </div>
                                                                </div>
                                                                <svg id="icon-hover" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M705-128 447-388q-23 8-46 13t-47 5q-97 0-165-67.5T121-602q0-31 8-60.5t23-55.5l145 145 92-86-149-149q26-15 55-23.5t59-8.5q99 0 168.5 69.5T592-602q0 24-5 47t-13 46l259 258q11 11 11 26.5T833-198l-76 70q-11 11-26 11t-26-11Z"/></svg></div>
                                                                ` : ""
                                                            }
                                                            ${
                                                                content.about.isUCP ? `
                                                                <div id="ucp">
                                                                    <div class="disctinction-info-box">
                                                                        <div class="icon-view">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m280-400 200-201 200 201H280Z"/></svg>
                                                                        </div>
                                                                        <div class="info-box-name">
                                                                            ${LanguageValues.categories.tags[3]}
                                                                        </div>
                                                                    </div>
                                                                <svg   id="icon-hover"xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M280-880h400v333q0 23-11.5 42T637-474l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135l25-97-140-82q-20-12-31.5-31T280-547v-333Zm174 60v350l30 16 30-16v-350h-60Z"/></svg></div>
                                                                ` : ""
                                                            }
                                                        </div>
                                                        <div class="username-container">
                                                        ${content.name}
                                                        ${
                                                            content.about.isSesame ? `<div class="sesame-tag">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480.172-450Q537-450 577-490.172q40-40.171 40-97Q617-644 576.828-684q-40.171-40-97-40Q423-724 383-683.828q-40 40.171-40 97Q343-530 383.172-490q40.171 40 97 40ZM480-81q-148-38-234-162.541Q160-368.083 160-523v-238l320-120 320 120v238q0 154.917-86 279.459Q628-119 480-81Zm0-62q60-20 108-59.5t83-90.5q-44.668-21.022-92.972-32.011Q529.724-336 479.862-336 430-336 381.79-325.011 333.581-314.022 289-293q35 51 83 90.5T480-143Z"/></svg>
                                                            Sesame</div>
                                                            ` : ""
                                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                                ${
                                                    content.description ? `
                                                        <div class="user-bio">
                                                            <div class="user-part-title">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z"/></svg>
                                                                ${LanguageValues.user_informations.user[0]}
                                                            </div>
                                                            <div class="bio-container">
                                                                ${content.description}
                                                            </div>
                                                        </div>
                                                    ` : ''
                                                    
                                                }
                                                <div class="user-social">
                                                    <div class="user-part-title">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z"/></svg>
                                                        ${LanguageValues.user_informations.user[1]}
                                                        </div>
                                                    <div class="user-links">
                                                        ${generateLINKS(content.links)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                        userSet = true;
    
                                    }
                                } else if (data.id === "communities") {
                                    document.querySelector('.results-container').innerHTML += `
                                    <div class="communities-result ${Display}-communities"">
                                        <div class="communities-infos">
                                            <div class="communities-logo">
                                                <img src="${content.templateImage}">
                                            </div>
                                            <div class="infos-top">
                                                <div class="infos-title">
                                                    <div class="communities-activity" style="background-color:${content.active ? "green" : "red"}"></div>
                                                    <div class="communities-name">${content.name}</div>
                                                    <div class="share-content" onclick="copyToClipboard('${content.name.toLowerCase().replace(/ /g,'-')}')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                                                        <span>${capitalizeFirstLetter(LanguageValues.share)}</span>
                                                    </div>
                                                </div>
                                                <div class="owner">
                                                    <div class="content">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z"/></svg>
                                                        <div class="vertical-sep"></div>
                                                           <div class="leaders user-profile-parents" id="user-profile-parents-${content.name}"></div>
                                                    </div>
                                                </div>
                                                ${
                                                    content.content ? `
                                                        <div class="mod-linked-community">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
                                                            <div class="vertical-sep"></div>
                                                            <div class="created-content" id="mods-profile-parents-${content.name}">
    
                                                            </div>
                                                        </div>
                                                    ` : ''
                                                }
                                            </div>
                                            <div class="content-container">
                                            ${
                                                content.description ? `
                                                    <div class="desc">
                                                        <div class="desc-content">
                                                            ${content.description}
                                                        </div>
                                                    </div>
                                                ` : ''
                                            }
                                                <div class="informatives-side">
                                                    <div class="recognition">
                                                        ${
                                                            content.server ? `
                                                            <div class="region">
                                                                ${LogosSRC[content.server]}
                                                                <span>${content.server}</span>
                                                            </div>
                                                            ` : ''
                                                        }
                                                        ${
                                                            content.tag.length > 0 ? `
                                                            <div class="tags">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M559-97q-18 18-43.5 18T472-97L97-472q-10-10-13.5-21T80-516v-304q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863-401L559-97ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Z"/></svg>
                                                                ${
                                                                content.tag && content.tag.length > 0 ? `
                                                                    <div class="tags-content">
                                                                        ${formatArray(content.tag)}
                                                                    </div>
                                                                ` : ''

                                                                }

                                                            </div>
                                                            ` : ''
                                                        }
                                                    </div>
                                                    <div class="links-informations">
                                                        ${
                                                            content.links.join != "" && content.links.join != "unknown" ? `
                                                            <div class="action" onclick="window.open('${content.links.join}')">
                                                                <img src="${LogosSRC['discord']}"> 
                                                                <div class="content">
                                                                <div class="main">Discord</div>
                                                                <div class="link">
                                                                    <svg id="linkrotate" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"></path></svg>
                                                                    <span>${content.links.join}</span>
                                                                </div>
                                                                </div>
                                                                </div>
                                                            ` : ''
                                                        }
                                                        ${
                                                            content.links.youtube != "" && content.links.youtube != "unknown" ? `
                                                            <div class="action" onclick="window.open('${content.links.youtube}')">
                                                                <img src="${LogosSRC['youtube']}"> 
                                                                <div class="content">
                                                                <div class="main">Youtube</div>
                                                                    <div class="link">
                                                                        <svg id="linkrotate" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z"></path></svg>
                                                                        <span>${content.links.youtube}</span>
                                                                    </div>
                                                                    <div class="content">
                                                                </div>
            
                                                            ` : ''
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                `;
                                } else if (data.id === "ships") {
                                    if (ships_by_mods[content.mod.toLowerCase()].show != true) {
                                        
                                        let keys = Object.keys(sortedShipsByMods);
                                        let key = keys.indexOf(content.mod.toLowerCase());
                                        let nextIndex = key < keys.length - 1 ? key + 1 : 0;
                                        let nextKey = keys[nextIndex];
                                        isLastKey = (key === keys.length - 1);
                                        let swipe_content, svg_key = "";
                                        if (keys.length > 1) {
                                            if (isLastKey) {
                                                swipe_content = `${LanguageValues.categories.return} ${keys[0].toUpperCase()}`;
                                                svg_key = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-160v-526L202-438l-42-42 320-320 320 320-42 42-248-248v526h-60Z"/></svg>';
                                            } else {
                                                swipe_content = nextKey ? `${LanguageValues.categories.message} ${keys[nextIndex].toUpperCase()}` : "No next key";
                                                svg_key = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M450-800v526L202-522l-42 42 320 320 320-320-42-42-248 248v-526h-60Z"/></svg>';
                                            }
                                        } else {
                                            swipe_content = "";
                                            svg_key = "";
                                        }
    
                                        document.querySelector('.results-container').innerHTML += `
                                            <div class="section-lil-header" id="${content.mod.toLowerCase().replace(/ /g, '-')}-swipe-scroll-mod">
                                                <div class="text">${content.mod}</div>
                                                <div class="section-info" id="${content.mod.replace(/ /g, '-')}-swipe-scroll">
                                                    <div class="icon">
                                                        ${svg_key}
                                                    </div>
                                                    
                                                    <span>${swipe_content}</span>
    
                                                <div>
                                            </div>
                                        
                                        `;
    
                                        setTimeout(() => {
                                            document.getElementById(`${content.mod.replace(/ /g, '-')}-swipe-scroll`).addEventListener('click',function() {
                                                const targetSection = document.getElementById(`${keys[nextIndex].toLowerCase().replace(/ /g,'-')}-swipe-scroll-mod`);
                                                if (targetSection) {
                                                    const targetSectionTop = targetSection.offsetTop;
                                                    window.scrollTo({
                                                        top: targetSectionTop - 80,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            });
                                        }, 500);
                                        
                                        ships_by_mods[content.mod.toLowerCase()].show = true;
                                    }
                                    function removeLinkEnding(link) {
                                        console.log(link)
                                        return link.replace(/\.png\/.*/, '.png');
                                    }
                                    let shipCode = content.code[0];
                                    let lasers = [];
                                    for (let laser of shipCode.typespec.lasers) {
                                        lasers.push({
                                            damage: laser.damage,
                                            speed: laser.speed,
                                            rate: laser.rate,
                                            recoil: laser.recoil,
                                            error: laser.error,
                                            number: laser.number
                                        })
                                    }
                                    let lasersType = [0, 0];
                                    for (let x of lasers) {
                                        lasersType[0] += x.damage[0] * x.number;
                                        lasersType[1] += x.damage[1] * x.number;
                                    }
                                    let statistics = {
                                        bodies: Object.keys(shipCode.bodies).length,
                                        specs: shipCode.specs,
                                        wings: shipCode.wings ? Object.keys(shipCode.wings).length : 0,
                                    }
                                    let official = false;
                                    const officialMods = [
                                        "U-Series", "Vanilla", "Nautic Series", "Alien Intrusion", "MCST", "Capture The Flag",
                                        "Battle Royale", "Destroy The Mothership", "Escalation", "Starblast Dueling Championship",
                                        "Starblast Prototypes"
                                    ]
                                    const lowercaseMods = officialMods.map(mod => mod.toLowerCase());
    
                                    if (lowercaseMods.includes(content.mod.toLowerCase())) {
                                        official = true;
                                    }
    
                                    document.querySelector('.results-container').innerHTML += `
                                            <div class="ships-result">
                                                ${
                                                    content.templateImage ? `
                                                        <div class="ship-render">
                                                            <img src="${removeLinkEnding(content.templateImage)}">
                                                        </div>  
                                                    ` : ''
                                                }
                                                <div class="header">
                                                    <div class="ship-name">
                                                        <b>${content.name}</b> in <b>${content.mod}</b>
                                                    </div>
                                                    ${
                                                        sureStatus ? `` : 
                                                        `
                                                            <div class="user-profile-parents" id="user-profile-parents-${content.name}"></div>
                                                        `
                                                    }
                                                </div>
                                                <div class="description">
                                                    <div class="global">
                                                        <div class="global-content">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h270v720H180Zm330 0v-361h330v301q0 24-18 42t-42 18H510Zm0-421v-299h270q24 0 42 18t18 42v239H510Z"/></svg>
                                                            </div>
                                                            <div class="value">
                                                                ${statistics.bodies} ${capitalizeFirstLetter(statistics.bodies<1?LanguageValues.ships.body[0]:LanguageValues.ships.body[1])}
                                                            </div>
                                                        </div>
                                                        <div class="global-content">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z"/></svg>
                                                            </div>
                                                            <div class="value">
                                                                ${lasers.length} ${capitalizeFirstLetter(lasers.bodies<1?LanguageValues.ships.laser[0]:LanguageValues.ships.laser[1])}
                                                            </div>
                                                        </div>
                                                        <div class="global-content">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M465-160q-54 0-85.5-28T348-273h68q0 26 11.5 39.5T465-220q27 0 38.5-12t11.5-41q0-29-11.5-42.5T465-329H80v-60h385q54 0 82 28t28 88q0 57-28 85t-82 28ZM80-568v-60h548q37 0 54-17.5t17-58.5q0-41-17-58.5T628-780q-38 0-55 20.5T556-708h-60q0-58 35-95t97-37q61 0 96 35.5T759-704q0 65-35 100.5T628-568H80Zm672 330v-60q35 0 51.5-19.5T820-374q0-38-18.5-55T748-446H80v-60h668q62 0 97 35t35 97q0 64-33 100t-95 36Z"/></svg>
                                                            </div>
                                                            <div class="value">
                                                                ${statistics.wings} ${capitalizeFirstLetter(lasers.wings<1?LanguageValues.ships.wing[0]:LanguageValues.ships.wing[1])}
                                                            </div>
                                                        </div>
                                                        <div class="global-content">
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M160-40v-220h100v-110H160v-220h100v-110H160v-220h260v220H320v110h100v80h160v-80h260v220H580v-80H420v80H320v110h100v220H160Z"/></svg>
                                                            </div>
                                                            <div class="value">
                                                                T.${shipCode.level} - N°${shipCode.model} 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="body-specs">
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                                ${capitalizeFirstLetter(LanguageValues.ships.shield)}
                                                            </div>
                                                            <div class="spec-content">
                                                                <div class="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M310-80q-12.75 0-21.375-8.625T280-110v-676q0-12.75 8.625-21.375T310-816h90v-64h160v64h90q12.75 0 21.375 8.625T680-786v676q0 12.75-8.625 21.375T650-80H310Z"/></svg>
                                                                </div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.shield.capacity[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.shield.capacity[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="spec-content">
                                                                <div class="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M418-340q25 25 63 23.5t55-27.5l221-333-333 221q-26 18-28.5 54.5T418-340ZM192-160q-18 0-34-8.5T134-193q-26-48-40-100T80-399q0-83 31.5-156T197-682.5q54-54.5 126.5-86T478-800q83 0 156.5 31.5t128 86Q817-628 848.5-555T880-399q0 54-13 106.5T827-193q-9 16-25 24.5t-34 8.5H192Z"/></svg>
                                                                </div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.shield.reload[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.shield.reload[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                                ${capitalizeFirstLetter(LanguageValues.ships.generator)}
                                                            </div>
                                                            <div class="spec-content">
                                                                <div class="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M310-80q-12.75 0-21.375-8.625T280-110v-676q0-12.75 8.625-21.375T310-816h90v-64h160v64h90q12.75 0 21.375 8.625T680-786v676q0 12.75-8.625 21.375T650-80H310Z"/></svg>
                                                                </div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.generator.capacity[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.generator.capacity[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="spec-content">
                                                                <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M418-340q25 25 63 23.5t55-27.5l221-333-333 221q-26 18-28.5 54.5T418-340ZM192-160q-18 0-34-8.5T134-193q-26-48-40-100T80-399q0-83 31.5-156T197-682.5q54-54.5 126.5-86T478-800q83 0 156.5 31.5t128 86Q817-628 848.5-555T880-399q0 54-13 106.5T827-193q-9 16-25 24.5t-34 8.5H192Z"/></svg>                                                        </div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.generator.reload[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.generator.reload[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                                ${capitalizeFirstLetter(LanguageValues.ships.damages)}
                                                            </div>
                                                            <div class="spec-content">
                                                            <div class="icon"></div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${lasersType[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${lasersType[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                            ${capitalizeFirstLetter(LanguageValues.ships.speed)}
                                                            </div>
                                                            <div class="spec-content">
                                                            <div class="icon"></div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.speed[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.speed[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                            ${capitalizeFirstLetter(LanguageValues.ships.acceleration)}
                                                            </div>
                                                            <div class="spec-content">
                                                            <div class="icon"></div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.acceleration[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.acceleration[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="spec">
                                                            <div class="spec-name">
                                                            ${capitalizeFirstLetter(LanguageValues.ships.rotation)}
                                                            </div>
                                                            <div class="spec-content">
                                                            <div class="icon"></div>
                                                                <div class="value">
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.rotation[0]}
                                                                    </div>
                                                                    <div class="val-sep">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg>
                                                                    </div>
                                                                    <div class="val">
                                                                        ${shipCode.specs.ship.rotation[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="actions">
                                                    <div class="action" id="download-${content.name.replace(' ','-')}">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
                                                        <div class="text">${LanguageValues.actions.download}</div>
                                                    </div>
                                                    ${
                                                        official ? `
                                                            <div class="action" onclick="window.open('https://starblast.fandom.com/wiki/${content.name}')">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
                                                                <div class="text">${LanguageValues.actions.documentation}</div>
                                                            </div>
                                                        ` : ``
                                                    }
                                                    <div class="share-content" onclick="copyToClipboard('${content.name.toLowerCase().replace(/ /g,'-')}')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                                                        <span>${capitalizeFirstLetter(LanguageValues.share)}</span>
                                                    </div>
                                                    <div class="important-download-advice">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-356 228-228-42-41-183 183-101-101-44 44 142 143Zm44 275q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    setTimeout(() => {
                                        document.getElementById(`download-${content.name.replace(' ','-')}`).addEventListener('click', function() {
                                            DisplayNotif(`${LanguageValues.pop.downloaded} ${content.name}`,5);
                                            DownLoadCode(`let ${content.name} = '${JSON.stringify(content.code[0])}';`, content.name)
                                        })
                                    }, 500);
                                }
                                async function ShowDisplay() {
                                    if (data.id === "communities") {
                                        await formatAuthors(content.author, `user-profile-parents-${content.name}`);
                                        if (content.content) {
                                            await formatMods(content.content, `mods-profile-parents-${content.name}`);
                                        }
                                    } else {
                                        await formatAuthors(content.author, `user-profile-parents-${content.name}`);
                                    }
                                }
                                setTimeout(() => {
                                    ShowDisplay()
                                }, 200);
                            }
                            
                        }

                    }
                    if (!checkIfUser) document.querySelector('.user-focus').style.display = "none";
                    document.querySelector('#search-input').value = key_word;
                    document.querySelector('.loader-search').style.display = "none";
                    document.querySelector('.results-container').style.justifyfContent = "center";
                    document.querySelector('.results-container').style.marginLeft = "auto";
                    document.querySelector('.results-container').style.marginRight = "auto";
                    document.querySelector('.results-container').style.width = "90%";
                    document.querySelector('.results-container').style.paddingLeft = "0px";

                }, 500);
            }
            fetchDataFromAPI();
            window.addEventListener('scroll', function() {
                let scrollY = window.scrollY;
                let header = document.querySelector('.header-search');
                if (header) {
                    if (scrollY > 20) {
                        header.classList.add('header-middle')
                    } else {
                        header.classList.remove('header-middle')

                    }
                }
            });




        })
        .catch(error => console.error('Error fetching building.js:', error));




}

