let Loader = {
    loader : '',
    create : function(main,value) {
        let loader = document.querySelector('.loader');
        this.loader = loader;
        if (!loader) {
            loader = document.createElement('div');
            loader.classList.add('loader');
            loader.innerHTML = `
                <div class="loader-msg"></div>
                <div class="loader-animate">
                    <div class="loader-big-dot">
                        <div class="loader-dot"></div>
                    </div>
                </div>
            `;
            main.appendChild(loader);
        }
        loader.style.display = "flex";
        loader.querySelector('.loader-msg').innerHTML = value;
    },
    hide : function() {
        document.querySelector('.loader').style.display = "none";
    }
}



function formatSpace(string) {
    return string.toLowerCase().replace(/ /g,'-');
}

let added_items = [];
let mouseIn = false;
const CHECKS = {
    "check" : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>',
    "uncheck" : '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>'
}

let DATAS = {};

function Form(data) {
    goBack.style.display = "flex";
    function GenerateData() {
        for (let D of data.form) {
            if (D.inner_code) {
                if (D.inner_code.length === 1) {
                    DATAS[`${D.inner_code[0]}`] = '';
                } else if (D.id != "links") {
                    let primary = D.inner_code[0];
                    DATAS[`${primary}`] = {};
                    D.inner_code.forEach((el) => {
                        DATAS[`${primary}`][`${el}`] = '';
                    })
                } else {
                    DATAS['links'] = [
                        {id:'', src:''},
                        {id:'', src:''},
                        {id:'', src:''},
                        {id:'', src:''},
                        {id:'', src:''}
                    ]
                }
            }
        }
        console.log(DATAS + "isBasic")
    }
    GenerateData();
    added_items = [];
    mouseIn = false;
    let container = document.querySelector('.datas-gathering');
    container.innerHTML = "";
    Loader.create(container,"Loading form");

    let form = document.createElement('div');
    form.classList.add('form-container');
    container.appendChild(form);
    let j = 1;
    for (let qst of data.form) {

        let div = document.createElement('div');
        let header = document.createElement('div');
        let input = document.createElement('div');

        div.classList.add('container-question');
        div.id = `question-${formatSpace(qst.name)}`;
        header.classList.add('question-header');
        header.innerHTML += `
            <div class="title">
                ${qst.name}
            </div>
        `;
        if (qst.need) {
            header.innerHTML += `
                <div class="asterik-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/></svg>
                </div>
            `;
        }
        let inputName;
        inputName = `${formatSpace(qst.name)}-input`;
        if (qst.inner_code) {
            inputName =  `${qst.inner_code[0]}-input`;
            if (qst.id === "links") {
                inputName =  `${qst.inner_code[0]}-${qst.name.toLowerCase()}`;
            }
        }

        input.classList.add('fill-input');
        input.id = `${formatSpace(data.name)}-${formatSpace(qst.name)}`;
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', qst.description || 'Enter a value');
        inputElement.id =  inputName;
        inputElement.readOnly = true;
        input.appendChild(inputElement);
        
        setTimeout(() => {
            inputName = document.getElementById(inputName);
            inputName.addEventListener('input',function() {
                let name = this.id;
                let value = this.value;
                const linkId = name.replace('links-', '');
                let targetElement;
                let errorMessage = "The value is not a valid link";

                if (qst.isLink) {
                    if (!value.includes('https://')) {
                        if (name.includes('pfp')) {
                            if (value.includes('cdn.discordapp.com')) {
                                targetElement = document.querySelector(`#user-profile-picture .info-box`);
                            }
                        } else if (!name.includes('discord') && !value.includes('https://')) {
                            targetElement = document.querySelector(`#user-${linkId} .info-box`);
                        }
                    }


                    if (targetElement) {
                        targetElement.innerHTML = errorMessage;
                        targetElement.style.color = "rgb(184, 40, 40)";
                        targetElement.style.display = "flex";
                    } else {
                        if (name.includes('pfp')) {
                            document.querySelector(`#user-profile-picture .info-box`).style.display = "none";
                        } else {
                            document.querySelector(`#user-${linkId} .info-box`).style.display = "none";
                        }
                    }
                }


                if (name.includes('links')) {
                    function CheckDatas() {
                        DATAS['links'].forEach((link) => {
                            
                            // Check if an object with the same id exists in DATAS['links']
                            const objectExists = DATAS['links'].some((value) => value.id === linkId);
                            
                            // Check if the object exists at a specific index in DATAS
                            const objectAtIndex = DATAS['links'].findIndex((value) => value.id === linkId);
                            
                            if (!objectExists && link.id == '') {
                                link.id = linkId;
                                link.src;
                                return;
                            } else if (objectExists) {
                                DATAS['links'][objectAtIndex].id = linkId;
                                DATAS['links'][objectAtIndex].src = value;
                            }
                        });
                    }   
                    CheckDatas();
                } else {
                    name = name.replace('-input','');
                    DATAS[name] = value;
                }
            });
            inputName.readOnly = false;
        }, 1000);

        input.innerHTML += `<div style="display:none" class="info-box"></div>`;

        if (qst.link_database) {
            let inputId = `${formatSpace(data.name)}-${formatSpace(qst.name)}`;
            input.addEventListener('mouseout',function() {
                mouseIn = false;
                setTimeout(() => {
                    if (document.querySelector(`#${inputId} .search-result`) && mouseIn === false) {
                        document.querySelector(`#${inputId} .search-result`).style.display = 'none';
                    }
                }, 1000);
            })
            input.addEventListener('mouseover',function() {
                if (!mouseIn) mouseIn = true;
            })
            input.addEventListener('input', async function () {
                fetch('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/api/building.js')
                    .then(response => response.text())
                    .then(buildingCode => {
                        eval(buildingCode);
                        console.log(qst);
                        let id = qst.id.toLowerCase();
                        console.log('ID:', id);
                        let value = document.querySelector(`#${inputId} input`).value;
            
                        FetchDataFromDatabase(id, [value])
                            .then(data_result => {
                                let infoBox = document.querySelector(`#${inputId} .info-box`);
                                if (document.querySelector(`#${inputId} .search-result`)) {
                                    document.querySelector(`#${inputId} .search-result`).innerHTML = '';
                                }
                                if (data_result.length > 0) {
                                    if (id === "users" || (id == "ships" && !qst.query_sesame_content)) {
                                        if (data_result.some(item => item.name.toLowerCase() === value)) {
                                            if (id === "users") {
                                                infoBox.innerHTML = `${value} is a Sesame user`;
                                                if (data.name.toLowerCase() === "user") {
                                                    infoBox.style.color = "#B82828";
                                                } else {
                                                    infoBox.style.color = "#309330";
                                                }
                                            } else if (id === "ships") {
                                                infoBox.innerHTML = `${value} is not available`;
                                                infoBox.style.color = "#B82828";

                                            }
                                        } else {
                                            if (id === "users") {
                                                infoBox.innerHTML = `${value} is not a Sesame user`;
                                                if (qst.same_result) {
                                                    infoBox.style.color = "#B82828";
                                                } else {
                                                    infoBox.style.color = "#309330";
                                                }
                                            } else if (id === "ships") {
                                                infoBox.innerHTML = `${value} is available`;
                                                infoBox.style.color = "#309330";
                                            } 
                                        }
                                        console.log('RESULT', data_result);
                                        infoBox.style.display = "flex";
                                    } else {
                                        if (!document.querySelector(`#${inputId} .search-result`)) {
                                            input.innerHTML += `<div class="search-result"></div>`
                                        }
                                        data_result.forEach(element => {
                                            // Access the search result container
                                            let searchResultContainer = document.querySelector(`#${inputId} .search-result`);
                                        
                                            // Display the search result container
                                            searchResultContainer.style.display = "flex";
                                        
                                            // Check if the element's name matches the search value and hasn't been added already

                                            
                                            if (element.name.toLowerCase().includes(value)) {
                                                // Create a new selection div
                                                let selection = document.createElement('div');
                                                selection.classList.add('item-to-select');
                                        
                                                // Add a click event listener to the selection div
                                                selection.addEventListener('click', function() {
                                                    console.log('e')
                                                    if (added_items.includes(formatSpace(element.name)) != true) {
                                                        console.log(element.name + " added");
                                        
                                                        // Create a delete div with an SVG icon
                                                        let del = document.createElement('div');
                                                        del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>';
                                                        del.classList.add('del');

                                                        // Create a selected div to display the selected item
                                                        let selected = document.createElement('div');
                                                        selected.classList.add('item-selected');
                                                        selected.id = formatSpace(element.name);
                                                        selected.innerHTML = `<div class="name">${element.name}</div>`;
                                            
    
                                            
                                                        // Add a click event listener to the delete div
                                                        del.addEventListener('click',function() {
                                                            document.getElementById(formatSpace(element.name)).remove();
                                                            added_items.splice(added_items.indexOf(element.name), 1);
                                                        });
                                            
                                                        // Append the delete div to the selected div
                                                        selected.appendChild(del);
                                            
                                                        // Append the selected div to the infoBox
                                                        document.querySelector(`#${inputId} .info-box`).appendChild(selected);
                                            
                                                        // Display the infoBox
                                                        document.querySelector(`#${inputId} .info-box`).style.display = "flex";
                                                        // Add the element's name to the added_items array
                                                        added_items.push(formatSpace(element.name));
                                                        console.log(added_items)
                                                    }
                                                });
                                        
                                                // Set the HTML content of the selection div
                                                selection.innerHTML = `
                                                    ${
                                                        element.img && id != "ships" ? `<img src="${element.img}">` : ''
                                                    }
                                                    ${
                                                        element.links && id != "ships" ? `<img style="border-radius:50%" src="${element.links.picture}">` : ''
                                                    }
                                                    <div class="name">${element.name}</div>
                                                `;
                                        
                                                // Append the selection div to the search result container
                                                searchResultContainer.appendChild(selection);
                                                
                                            }
                                        });
                                    }
                                } 

                            })
                            .catch(error => {
                                console.error('Error fetching data:', error);
                            });
                    });
            });
            
            
        }
        div.appendChild(header);
        if (qst.type && qst.type === "check") {
            input.innerHTML = "";
            let i = 1;
            qst.checks.forEach((check) => {
                let div = document.createElement('div');
                div.classList.add('check-list');
                console.log(qst.inner_code[i])
                div.innerHTML = `
                    <div class="name">
                        ${check.name}
                    </div>
                    <div class="icon icon-${formatSpace(check.name)}" id="check-${qst.inner_code[i]}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
                    </div>
                `;
                DATAS["about"][`${qst.inner_code[i]}`] = false;
                div.addEventListener('click',function() {
                    console.log('clicked')
                    let icon = document.querySelector(`.icon-${formatSpace(check.name)}`);
                    let id = icon.id;
                    let next = !id.includes("uncheck") ? "uncheck" : "check";
                    console.log(id)
                    DATAS["about"][`${next === "uncheck" ? id.replace("check-",'') : id.replace("uncheck-",'')}`] = id === "check" ? false : true;
                    icon.id = next;
                    icon.innerHTML = CHECKS[next];
                });
                i++;

                input.appendChild(div);
            });
        }
        div.appendChild(input);
        form.appendChild(div);
        j++;
    }

    Loader.hide();

    let process = document.createElement('div');
    process.classList.add("process-button");
    
    let processInnerDiv = document.createElement('div');
    processInnerDiv.className = 'process';
    
    let nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = 'Process';
    
    let iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    
    iconDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
    `;
    

    process.addEventListener('click',function() {
        if (DATAS.code) {
            DATAS.code = DATAS.code.replace(/[;]*$/, '');
            DATAS.code = DATAS.code.replace(/[']*$/, '');
            DATAS.code = DATAS.code.replace(/'/, '');
            var firstEqualsIndex = DATAS.code.indexOf('=');

            if (firstEqualsIndex !== -1) {
              // Extract the portion of the string after the '=' sign
              DATAS.code = DATAS.code.substring(firstEqualsIndex + 1);
            }
            console.log(DATAS.code);
            let parsed = JSON.parse(DATAS.code);
            DATAS.name = parsed.name;
            DATAS.code = [parsed];
            
        }
        DownLoadCode(`${js_beautify(JSON.stringify(DATAS), {indent_size: 2})}`, `Linkel - ${DATAS.name}`);
    });

    processInnerDiv.appendChild(nameDiv);
    processInnerDiv.appendChild(iconDiv);
    
    process.appendChild(processInnerDiv);
    container.appendChild(process);
    
}
