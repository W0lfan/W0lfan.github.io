import { StringToLink,GenerateLink } from '/sesame/scripts/utils/links.js';
import { FetchContent } from '/utils/NFC-modules/scripts/init/provider.js';
import { ImageSize } from '/sesame/scripts/utils/UI.js';
import { CreateAuthors, CreateWorks } from '/sesame/scripts/utils/pops.js'
import { DownLoad } from '/sesame/scripts/utils/download.js'
import { Search } from '/sesame/scripts/search/index.js';
import { InitGlobalContentHead,InitGlobalContentBottom, ViewMoreCreate } from '/sesame/scripts/search/result_visual/net/components.js'


export async function Return(dir,data,parent,data_result) {
    let borderRadius = 5;
    parent.innerHTML = '';
    const returns = {
        "users" : async function(radius) {
            const mainContainer = InitGlobalContentHead(radius,data,dir);

            const work_container = document.createElement('div');
            work_container.classList.add('activeElementsContainer');

            let doesUserMakeContent = false;
            let i = 0;
            let DataResultKeys = Object.keys(data_result.correctSort);
            for (let key of DataResultKeys) {
                let subKey = data_result.correctSort[key];
                for (let element of subKey) {
                    if (key != "users") {
                        const authorIsNet = element.author.some(obj => obj.name.toLowerCase() === data.name.toLowerCase());;
                        if (authorIsNet) {
                            if (!doesUserMakeContent) doesUserMakeContent = true;
                            const workElement = document.createElement('div');
                            workElement.classList.add('activeElement');
                            workElement.innerHTML = `
                                ${
                                    element.templateImage ? `
                                        <div class="img">
                                            <img src="${element.templateImage}">
                                        </div>
                                    ` : ''
                                }
                                <div class="subElementHeader">
                                    <div class="contentName" width="${element.templateImage ? '100%' : '90%'}">
                                        ${element.name}
                                    </div>
                                    <div class="subElementDirectory">
                                        database/${key}.json
                                    </div>
                                </div>
                            `;
                            workElement.addEventListener('click',function() {
                                document.querySelector('#search-input').value = element.name;
                                Search()
                            });

                            i++;
                            work_container.appendChild(workElement);
                        }
                    }
                }
            }

            const Distinct = document.createElement('div');
            Distinct.classList.add('distinctions');


            let disctinctions = {
                "isStaff" : {
                    name : "Discord Staff"
                },
                "isModder" : {
                    name : "Game Modder"
                },
                "isUCP" : {
                    name : "UCP User"
                },
                "isContrib" : {
                    name : "Game Contributor"
                },
                "isSesame" : {
                    name : "Sesame Team"
                }, 
                "isFormerStaff" : {
                    name : "Former Discord Staff"
                },
                "isShipBuilder" : {
                    name : "Official Ship Builder"
                }
            }
            let distinctionKeys = Object.keys(data.about);
            let appendDistinction = false;
            for (let key of distinctionKeys) {
                if (data.about[key]) {
                    Distinct.innerHTML += `
                        <div class="distinction" id="${key}">
                            ${disctinctions[key].name}
                        </div>
                    `; 
                    appendDistinction=true;
                }
            }   
            if (appendDistinction) mainContainer.appendChild(Distinct);

            const works = document.createElement('div');
            works.classList.add('activeElementParent');
            works.setAttribute('item-length',i);



            if (doesUserMakeContent) {
                ViewMoreCreate(i,works,{view:"View works",hide:"Hide works",svg:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>'});
            }
            
            works.appendChild(work_container);
            mainContainer.appendChild(works);

            if (data.links) {
                const viewSocial = document.createElement('div');
                viewSocial.classList.add('activeElementParent');
                const viewSocialContainer = document.createElement('div');
                viewSocialContainer.classList.add('activeElementsContainer');
                let i = 0;

                data.links.forEach((link) => {
                    if (link.src != '') {
                        const L = document.createElement('div');
                        L.classList.add('activeElement');
    
                        L.innerHTML = `
                            <div class="img">
                                <img style="border-radius:50%" src="/utils/img/logo/external/${link.id}.png">
                            </div>
                            <div class="subElementHeader">
                                <div class="contentName" width="90%">
                                    <span>${link.id.charAt(0).toUpperCase() + link.id.slice(1)}</span>
                                    <div class="icon">
                                        ${
                                            link.src.includes('https://') ? 
                                              '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>' 
                                            : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'
                                        }
                                    </div>
                                </div>
                                <div class="subElementDirectory">
                                    ${link.src}
                                </div>
                            </div>
                        `;

                        L.addEventListener('click',function() {
                            if (link.src.includes('https://')) {
                                window.open(link.src);
                            } else {
                                const item = this.querySelector('.subElementHeader .contentName .icon');
                                navigator.clipboard.writeText(link.src);

                                item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
                                setTimeout(() => {
                                    item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>';
                                }, 5000);
                            }
                        });


                        i++;
                        viewSocialContainer.appendChild(L)
                    }

                });



                ViewMoreCreate(i,viewSocial, {view : "Contact",hide:"Hide contact",svg:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/></svg>'});
                viewSocial.appendChild(viewSocialContainer);
                mainContainer.appendChild(viewSocial);
            }

            const actionButtons = document.createElement('div');
            actionButtons.classList.add('actions') ;   
            GenerateLink(data,actionButtons);

            mainContainer.appendChild(actionButtons);
            parent.appendChild(mainContainer);

            InitGlobalContentBottom(data,parent,dir);

        },
        "codes" : async function(radius) {
            const mainContainer = InitGlobalContentHead(radius,data,dir);

            if (data.author) {
                const users = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json','json')
                await CreateAuthors(data,users,mainContainer);
            }

            AddShareAndDownload(mainContainer,data);


            parent.appendChild(mainContainer);

            InitGlobalContentBottom(data,parent,dir);

        },
        "mods" : async function(radius) {
            const mainContainer = InitGlobalContentHead(radius,data,dir);

            if (data.author) {
                const users = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json','json')
                await CreateAuthors(data,users,mainContainer);
            }
            AddShareAndDownload(mainContainer,data);


            parent.appendChild(mainContainer);

            InitGlobalContentBottom(data,parent,dir);

        },
        "communities" : async function(radius) {
            const mainContainer = InitGlobalContentHead(radius,data,dir);

            if (data.author) {
                const users = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json','json')
                await CreateAuthors(data,users,mainContainer);
            }

            if (data.content) {
                const content = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/mods.json','json')
                await CreateWorks(data,content,mainContainer);
            }

            const actionButtons = document.createElement('div');
            actionButtons.classList.add('actions');



            const open = document.createElement('div');
            open.classList.add('action');
            open.id = "open";

            open.innerHTML = `
                <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                </div>
                <div class="text">
                    Open
                </div>
            `;
            open.addEventListener('click',function() {
                window.open(data.links.join)
            })

            actionButtons.appendChild(open);
            GenerateLink(data,actionButtons);
            mainContainer.appendChild(actionButtons);

            parent.appendChild(mainContainer);

            InitGlobalContentBottom(data,parent,dir);

        },
        "ships" : async function(radius) {
            const mainContainer = InitGlobalContentHead(radius,data,dir);

            if (data.author) {
                const users = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json','json')
                await CreateAuthors(data,users,mainContainer);
            }
            AddShareAndDownload(mainContainer,data);


            parent.appendChild(mainContainer);

            InitGlobalContentBottom(data,parent,dir);

        },
    }


    if (data.templateImage) {
        ImageSize(data.templateImage, async function (width, height) {
            if (
                width === height ||
                (width >= height - 100 && width <= height + 100) ||
                (height >= width - 100 && height <= width + 100)
            ) {
                borderRadius = 50;
            }
        });
        await returns[dir](borderRadius);
        
    } else {
        await returns[dir](borderRadius);
    }


}



function AddShareAndDownload(mainContainer,data) {
    const actionButtons = document.createElement('div');
    actionButtons.classList.add('actions');

    const share = document.createElement('div');
    share.classList.add('action');
    share.id = "share";

    share.innerHTML = `
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
        </div>
        <div class="text">
            Share
        </div>
    `;

    function NewDownloadOrOpen(type,content,more) {
        const downloadOrOpen = document.createElement('div');
        downloadOrOpen.classList.add('action');
    
        if (type == "code") {
            downloadOrOpen.id = "code";
            downloadOrOpen.innerHTML = `
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </div>
                <div class="text">
                    Download
                </div>
            `;
            downloadOrOpen.addEventListener('click',function() {
                if (content.includes('.js')) {
                    DownLoad({
                        type:"link",content:content,beautify:true
                    }, data.name)
                } else {
                    if (more === "format") {
                        let code = JSON.parse(content);
                        const formatCode = `var ${code.name} = '${content}';`;
                        DownLoad({
                            type:"code",content:formatCode,beautify:false
                        }, data.name)
                    }
                    DownLoad({
                        type:"code",content:content,beautify:true
                    }, data.name)
                }
            });
        }
 
    
        else if (type == "link") {
            downloadOrOpen.id = "link";
            downloadOrOpen.innerHTML = `
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                </div>
                <div class="text">
                    Open
                </div>
            `;
            downloadOrOpen.addEventListener('click',function() {
                window.open(content);
            })
        }

        actionButtons.appendChild(downloadOrOpen);

    }

    if (data.about && data.about.url) {
        if (data.about.url.includes('.js')) {
            NewDownloadOrOpen('link',data.about.url);
            
            let rawURL = '';

            if (!data.about.url.includes('raw.gitubusercontent.com')) {
                rawURL = data.about.url.replace('github.com','raw.githubusercontent.com');
                rawURL = rawURL.replace('blob/','')
            } else {
                rawURL = data.about.url;
            }

            NewDownloadOrOpen('code',rawURL);
        } else {
            NewDownloadOrOpen('link',data.about.url);
        }
    } else {
        if (data.code) {
            NewDownloadOrOpen('code',data.code,"format");

        } else {
            Object.keys(data.direct).forEach((e) => {
                NewDownloadOrOpen(data.direct[e].id, data.direct[e].content);
            });
        }
    }

    GenerateLink(data,actionButtons);

    mainContainer.appendChild(actionButtons);
}