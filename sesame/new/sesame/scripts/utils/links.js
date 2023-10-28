export function StringToLink(str) {
    let modifiedSTR = str.toLowerCase();
    modifiedSTR = modifiedSTR.replace(/ /g,'+');
    modifiedSTR = `https://naflouille-creations.com/sesame/search?=${modifiedSTR}`;
    return modifiedSTR;
}

export function ChangeLinkHead(link) {
    history.pushState(null, null, link);
}

export function GenerateLink(data,parent) {
    const share = document.createElement('div');
    share.classList.add('action');
    share.id = "share";

    function NormalHTML() {
        return `
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
            </div>
            <div class="text">
                Share
            </div>
        `;
    }

    share.innerHTML = `${NormalHTML()}`;

    share.addEventListener('click',function() {
        navigator.clipboard.writeText(StringToLink(data.name));

        this.innerHTML = `
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </div>
            <div class="text">
                Link copied to clipboard
            </div>
        `;

        setTimeout(() => {
            this.innerHTML = NormalHTML();
        }, 2500);
    });

    parent.appendChild(share);
}



