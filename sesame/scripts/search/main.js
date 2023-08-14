
let search_input;
let show_info_user_display = false;

const __LINKS__ = {
    codes: "codes.json",
    users: "users.json",
    mods: "mods.json",
    clans: "clans.json"
};
function waitForDisplay(element, callback) {
    if (element.offsetHeight > 0) {
      callback();
    } else {
      requestAnimationFrame(() => waitForDisplay(element, callback));
    }
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


function Search(search_query = null,official_content = false,all = "",not_query = [] ,particular_query,particular_query_value) {
    let key_word;
    let database = {};
    let userSet = 0;
    show_info_user_display = false;


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
            <div class="whole-loader"></div>
            <div class="min-loader"></div>
        </div>
    `

    
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
                                  console.log(keyExistsWithValue(ct, `${particular_query}`,particular_query_value))
                                  if (keyExistsWithValue(ct, `${particular_query}`,particular_query_value)) {
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
              const result = [
                [],
                {
                  codes: 0,
                  users: 0,
                  mods: 0,
                  clans: 0,
                },
              ];
              
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
                    
                    result[0].push({
                      id: key,
                      prior : prior,
                      content: item,
                      sure : (item.name.toLowerCase() === key_word.toLowerCase())
                    });
                    result[1][key]++;
                  });
                }
              }
              result[0].sort((a, b) => b.prior - a.prior);




        search_input = key_word;
        const Display = localStorage.getItem('display');
        console.log('Results:\n',result)
        const Metrics = result[1];
        const Datas = result[0];
    


        const display_result = () => {
            console.log('e');
        };

        await display_ui_by_file('results',display_result);
        document.querySelector('.display-research').innerHTML+= `
            <div class="results">
                <div class="infos">
                    <div class="global">Results for <span>${key_word}</span></div>
                    <div class="metrics">
                        <div class="metric" >
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
                            ${Metrics.mods}
                        </div>
                        <div class="metric">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z"/></svg>
                            ${Metrics.users}
                        </div>
                        <div class="metric" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"/></svg>
                            ${Metrics.clans}
                        </div>
                        <div class="metric">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"/></svg>
                            ${Metrics.codes}
                        </div>
                    </div>
                </div>
                <div class="sort-type">
                    <div class="class-sort">
                        <div class="class-s" id="mods" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('mods') ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)"}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>

                        </div>
                        <div class="class-s" id="users" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('users') ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)"}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z"/></svg>

                        </div>
                        <div class="class-s" id="clans" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('clans') ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)"}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"/></svg>

                        </div>     
                        <div class="class-s" id="codes" onclick="ManageQuerySearch(this)" style="background-color: ${!trigger_search.includes('codes') ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0)"}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"/></svg>

                        </div>                        
                    </div>
                    <div class="view-line" onclick="ManageDisplay()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M350-160h470q24.75 0 42.375-17.625T880-220v-114H350v174ZM80-626h210v-174H140q-24.75 0-42.375 17.625T80-740v114Zm0 233h210v-173H80v173Zm60 233h150v-174H80v114q0 24.75 17.625 42.375T140-160Zm210-233h530v-173H350v173Zm0-233h530v-114q0-24.75-17.625-42.375T820-800H350v174Z"/></svg>
                    </div>
                    <div class="view-grid" onclick="ManageDisplay()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-510v-330h330v330H120Zm0 390v-330h330v330H120Zm390-390v-330h330v330H510Zm0 390v-330h330v330H510Z"/></svg>
                    </div>
                </div>
            </div>
            <div class="user-results ${Display}-user-results">

            </div>
            <div class="results-container ${Display}-display" >

            </div>
        `;
        if (Datas.length === 0) {
            document.querySelector('.loader-search').style.display = "none";
            document.body.innerHTML += `
                <div class="no-result">
                    <img src="../../webutils/img/sadpiranha.jpg">
                    <div class="big-title">We found nothing related to <span>${key_word}</span></div>
                    <div class="small-title">Try searching for something else</div>
                </div>
            `
            return;

        }

        setTimeout(() => {
            for (let data of Datas) {
                console.log(data)
                let content = data.content;
                if (data.id==="mods") {
                    document.querySelector('.results-container').innerHTML += `
                        <div class="result-${Display}">
                            <div class="top-image">
                                <img src="${content.img ? content.img : "webutils/img/SMSE.png"}">
                            </div>
                            <div class="identifier">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
                            </div>
                            <div class="sort-infos">
                                Indexing : ${__PRIOR__[data.prior]}
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z"/></svg>
                            </div>
                            <div class="container tohover">
                                <div class="header">
                                    <div class="title">
                                        <div class="status">${content.official ? '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm91-287 227-225-45-41-182 180-95-99-46 45 141 140Z"/></svg>' : ''}</div>
                                        <div class="name">${content.name}</div>
                                    </div>
                                    <div class="author">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z"/></svg>
                                        <div class="vertical-sep"></div>
                                        <div class="container">${formatAuthors(content.author)}</div>
                                    </div>
                                    </div>
                                    <div class="description">
                                        ${content.description}
                                    </div>
                                    <div class="actions">
                                        <div style="display:${content.link.type ? 'none' : 'flex'}" " class="action" id="load-${content.name}">
                                            <svg id ="load-${content.name}" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>
                                        </div>
                                        <div class="action" id="open-${content.name}">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
                                        </div>
                                </div>
                            </div>
    
                        </div>
                    `;
                    setTimeout(() => {
                        document.getElementById(`open-${content.name}`).addEventListener('click',function() {
                            window.open(content.link.url,"_blank");
                        });
                    }, __DISPLAY_WAIT__);
                } else if (data.id == "codes") {
                    document.querySelector('.results-container').innerHTML += `
                        <div class="result-${Display}" id="code-view-${Display}">
    
                            <div class="container">
                                <div class="header">
                                    <div class="title">
                                        <div class="name">${content.name}</div>
                                    </div>
                                    <div class="author">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108Z"/></svg>
                                        <div class="vertical-sep"></div>
                                        <div class="container">${formatAuthors(content.author)}</div>
                                    </div>
                                    </div>
                                    <div class="description">
                                        ${content.description}
                                    </div>
                                    <div class="code-container"><code>${wrapCodeWithSyntaxHighlighting(content.code)}</code><div class="copy" ><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg></div><div>
                                </div>
                            </div>
    
                        </div>
    
                    `;
                document.querySelector('.copy').addEventListener('click',function() {
                    CopyText(content.code.join('\n'))
                })
                } else if (data.id == "users") {
                    if (JSON.parse(data.sure) != true && userSet === 0) {
                        if (!show_info_user_display) {
                            document.querySelector('.user-results').innerHTML += `
                            <div class="user-result ${Display}-user"  id="lookingfor">
                                    <div class="info">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z"/></svg>
                                        Are you looking for this user?
                                    </div>
                            </div>
                            `;
                        }
                        document.querySelector('.user-result').innerHTML += `
                                <div class="userInfos userInfos-hover" id="click-${content.name}" onclick="Search('${content.name}')">
                                    <div class="user_pfp">
                                        <img src="${content.pfp != "unknown" ? content.pfp : "https://raw.githubusercontent.com/W0lfan/W0lfan.github.io/main/sesame/img/user.png"}">
                                    </div>
                                    <div class="user_name">
                                        ${content.name}
                                    </div>
                                </div>
                        `;
                        
                        show_info_user_display = true;
                        
                    } else if ( userSet === 0 && JSON.parse(data.sure) === true)  {

                        function generateLINKS(dataArray) {

                            const LogosSRC = {
                                "github" : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                                "discord" : "https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source",
                                "youtube" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png",
                                "spotify" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                            }

                            const divElements = dataArray.map(item => `
                                <div id="${item.id}-${content.name}" class="user-link"  onclick="${item.id === "discord" ? `navigator.clipboard.writeText('${item.src}')`: `window.open('${item.src}')`}">
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

                        document.querySelector('.user-results').innerHTML = `
                            <div class="user-result ${Display}-user" id="viewuser">
                                <div class="userInfos" id="${content.name}">
                                    <div class="userheader">
                                        <div class="user_pfp">
                                            <img src="${content.pfp != "unknown" ? content.pfp : "https://raw.githubusercontent.com/W0lfan/W0lfan.github.io/main/sesame/img/user.png"}">
                                        </div>
                                        <div class="user_name">
                                            <div class="distinction">
    
                                                ${
                                                    content.about.isStaff ? '<div id="staff"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m436-356 228-228-42-41-183 183-101-101-44 44 142 143Zm44 275q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg></div>' : ""
                                                }
                                                ${
                                                    content.about.isContrib ? '<div id="contrib"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm91-287 227-225-45-41-182 180-95-99-46 45 141 140Z"/></svg></div>' : ""
                                                }
                                                ${
                                                    content.about.isModder ? '<div id="mod"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M705-128 447-388q-23 8-46 13t-47 5q-97 0-165-67.5T121-602q0-31 8-60.5t23-55.5l145 145 92-86-149-149q26-15 55-23.5t59-8.5q99 0 168.5 69.5T592-602q0 24-5 47t-13 46l259 258q11 11 11 26.5T833-198l-76 70q-11 11-26 11t-26-11Z"/></svg></div>' : ""
                                                }
                                                ${
                                                    content.about.isUCP ? '<div id="ucp"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M280-880h400v333q0 23-11.5 42T637-474l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135l25-97-140-82q-20-12-31.5-31T280-547v-333Zm174 60v350l30 16 30-16v-350h-60Z"/></svg></div>' : ""
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
                                    <div class="user-links">
                                            ${generateLINKS(content.links)}
                                    </div>
                                </div>
                            </div>
                            <div class="all-works-here">
                                All creations of ${content.name} are available below
                            </div>
                        `;
                        userSet=true;

                    }
                } else if (data.id === "clans") {
                    document.querySelector('.results-container').innerHTML += `
                    
                        <div class="clan-result ${Display}-clan"">
                            <div class="identifier">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M0-240v-53q0-38.567 41.5-62.784Q83-380 150.376-380q12.165 0 23.395.5Q185-379 196-377.348q-8 17.348-12 35.165T180-305v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5 67.5 0 108.75 23.768T960-293v53H780ZM149.567-410Q121-410 100.5-430.562 80-451.125 80-480q0-29 20.562-49.5Q121.125-550 150-550q29 0 49.5 20.5t20.5 49.933Q220-451 199.5-430.5T149.567-410Zm660 0Q781-410 760.5-430.562 740-451.125 740-480q0-29 20.562-49.5Q781.125-550 810-550q29 0 49.5 20.5t20.5 49.933Q880-451 859.5-430.5T809.567-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"/></svg>
                            </div>
                            <div class="clan-infos">
                                <div class="infos-top">
                                    <img src="${content.links.picture}">
                                    <div class="clan-name">${content.name}</div>
                                </div>
                                <div class="content-container">
                                    <div class="tags">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M559-97q-18 18-43.5 18T472-97L97-472q-10-10-13.5-21T80-516v-304q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863-401L559-97ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Z"/></svg>
                                        <div class="tags-content">
                                            ${formatArray(content.tag)}
                                        </div>
                                    </div>
                                    <div class="desc">
                                        <div class="owner">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>
                                            <div class="content">
                                                ${formatArray(content.lead)}
                                            </div>
                                        </div>
                                        <div class="desc-content">
                                            ${content.infos}
                                        </div>  
                                    </div>
                                    <div class="actions" style="display:${content.links.join?"flex":'none'}" onclick="window.open('${content.links.join}')">
                                        <div class="join">
                                            Join
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    `;
                }
            }
            check_ui_display();
            document.querySelector('#search-input').value = key_word;
            document.querySelector('.loader-search').style.display = "none";
        }, 500);
    }
    fetchDataFromAPI();


    })
    .catch(error => console.error('Error fetching building.js:', error));






 

 

}
function CopyText(text) {

    navigator.clipboard.writeText(text);
}
