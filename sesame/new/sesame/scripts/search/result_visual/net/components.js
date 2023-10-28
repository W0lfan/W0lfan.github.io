import { Search } from "/sesame/scripts/search/index.js";

export function InitGlobalContentHead(radius,data,directory) {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('net-result-header');
    const headerOfHeader = document.createElement('div');
    headerOfHeader.classList.add('top');

    const ImageAndName = document.createElement('div');
    ImageAndName.classList.add('ImageAndName');

    if (data.templateImage) {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('net-result-img');
        const image = document.createElement('img');
        image.style.borderRadius = radius +"px";
        image.src = data.templateImage;
        imageContainer.appendChild(image);
        ImageAndName.appendChild(imageContainer);
    }

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('net-result-name');
    nameContainer.textContent = data.name;

    ImageAndName.appendChild(nameContainer);

    const Dir = document.createElement('div');
    Dir.classList.add('data-directory');
    Dir.innerHTML =  `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-520q150 0 255-47t105-113q0-66-105-113t-255-47q-150 0-255 47T120-680q0 66 105 113t255 47Zm0 100q41 0 102.5-8.5T701-456q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-356q-57 19-118.5 27.5T480-320q-41 0-102.5-8.5T259-356q-57-19-98-49.5T120-480v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-420Zm0 200q41 0 102.5-8.5T701-256q57-19 98-49.5t41-74.5v100q0 44-41 74.5T701-156q-57 19-118.5 27.5T480-120q-41 0-102.5-8.5T259-156q-57-19-98-49.5T120-280v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-220Z"/></svg>
        <span>${directory}</span>
    `;
    Dir.addEventListener('click',async function() {
        await Search({
            directories : [directory],
            query : ""
        });
    });

    headerOfHeader.appendChild(ImageAndName);
    headerOfHeader.appendChild(Dir);
    mainContainer.appendChild(headerOfHeader);

    if (data.description) {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('net-result-description');
        descriptionContainer.innerHTML = data.description;
        mainContainer.appendChild(descriptionContainer);
    }

    return mainContainer;
}


export function InitGlobalContentBottom(data,parent,dir) {
    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('net-result-bottom');


    const sesameIDInformative = document.createElement('div');
    sesameIDInformative.classList.add('data-informative');
    sesameIDInformative.textContent = data.sesameID;
    bottomContainer.appendChild(sesameIDInformative);

    const dirInformative = document.createElement('div');
    dirInformative.classList.add('data-informative');
    dirInformative.textContent = `database/${dir}.json`;
    bottomContainer.appendChild(dirInformative);

    parent.appendChild(bottomContainer);
}


export function ViewMoreCreate(i, parent,v) {
    const viewMore = document.createElement('div');
    viewMore.classList.add('viewMore');
    viewMore.innerHTML = `
        <div class="icon">
            ${v.svg}
        </div>
        <div class="content unselectable" >
            <div class="text">
                ${v.view}
            </div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
        </div>
    `;
    viewMore.id = "contenthidden";
    parent.style.height = 44 + "px";
    viewMore.addEventListener('click',function() {

        if (this.id === "contenthidden") {
            this.id = "contentview";
            this.querySelector('.text').innerHTML = v.hide;
            this.querySelector('.content .icon').classList.add('rotateViewMore');
            parent.style.height = 44 + i*58 + "px";
            this.style.borderRadius = "20px 20px 0px 0px";
        } else {
            this.id = "contenthidden";
            this.querySelector('.text').innerHTML = v.view;
            this.querySelector('.content .icon').classList.remove('rotateViewMore');
            parent.style.height = 44 + "px";
            this.style.borderRadius = "20px";
        }
    })
    parent.appendChild(viewMore);
}