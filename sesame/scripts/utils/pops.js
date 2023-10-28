import { Search } from '/sesame/scripts/search/index.js';


export async function CreateAuthors(data,users,parent,value) {
    const authors = document.createElement('div');
    authors.classList.add('pops');

    if (value) {
        const informations = document.createElement('div');
        informations.classList.add('informations');
        informations.innerHTML = value;
        authors.appendChild(informations);
    }
    for (let aut of data.author) { 
        let author = document.createElement('div');
        const user = users.find(obj => obj.name.toLowerCase() === aut.name.toLowerCase());
        
        if (user) {
            author.classList.add('popp');
            author.innerHTML = `
                    ${
                        user.templateImage ? `
                        <div class="pop-picture">
                                <img src="${user.templateImage}" style="border-radius:50%">
                            </div>
                        ` : ''
                    }
                <div class="pop-name">
                    ${user.name}
                </div>
            `;
            author.addEventListener('click',function() {
                let SearchInput = document.querySelector('#search-input');
                SearchInput.value = aut.name;
                Search();
            });
            authors.appendChild(author);
        }
    }
    parent.appendChild(authors);
}

export async function CreateWorks(data,communities,parent,value) {
    const works = document.createElement('div');
    works.classList.add('pops');
    if (value) {
        const informations = document.createElement('div');
        informations.classList.add('informations');
        informations.innerHTML = value;
        works.appendChild(informations);
    }
    for (let co of data.content) { 
        console.log(co)
        let content = document.createElement('div');
        const work = communities.find(obj => obj.name.toLowerCase() === co.toLowerCase());
        
        if (work) {
            content.classList.add('popp');
            content.innerHTML = `
                ${
                    work.templateImage ? `
                        <div class="pop-picture">
                            <img src="${work.templateImage}" style="border-radius:5px">
                        </div>
                    ` : ''
                }
                <div class="pop-name">
                    ${work.name}
                </div>
            `;
            content.addEventListener('click',function() {
                let SearchInput = document.querySelector('#search-input');
                SearchInput.value = work.name;
                Search();
            });
            works.appendChild(content);
        }
    }
    parent.appendChild(works);
}