import { Search } from '/sesame/scripts/search/index.js';
import { StringToLink } from '/sesame/scripts/utils/links.js';
import { ImageSize } from '/sesame/scripts/utils/UI.js';


export function ReturnSimpleDataVisual(data,dirType) {
    let result = document.createElement('div');
    result.classList.add('minimal-result');
    result.id = data.sesameID + "_" + data.name;

    let borderRadius = 5;

    if (data.templateImage) {
        ImageSize(data.templateImage, function (width, height) {
            if (
                width === height ||
                (width >= height - 100 && width <= height + 100) ||
                (height >= width - 100 && height <= width + 100)
            ) {
                borderRadius = 50;
            }

            updateResultHTML(data, result, borderRadius, width, height);
        });
    } else {
        updateResultHTML(data, result, borderRadius);
    }

    function updateResultHTML(data, result, borderRadius) {
        result.innerHTML = `
            <div class="result-header">
                ${
                    data.templateImage ? `
                        <div class="result-image">
                            <img style="border-radius:${borderRadius}px" src="${data.templateImage}">
                        </div>
                    ` : ''
                }
                <div class="result-textual">
                    <div class="result-name">
                        <span>${data.name}</span>
                        ${
                            dirType == "users" && data.about.isSesame ? `
                                <div class="sesameTag">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 360q-146-37-233-160t-87-276v-244l320-120 320 120v244q0 153-87 276T480-80Zm0-84q59-19 104.5-59.5T664-315q-43-22-89.5-33.5T480-360q-48 0-94.5 11.5T296-315q34 51 79.5 91.5T480-164Z"/></svg>
                                    Sesame Team
                                </div>
                            ` : ''
                        }
                    </div>
                    <div class="result-link">
                        ${StringToLink(data.name)}
                    </div>
                </div>
            </div>
            <div class="result-description">
                ${data.description ? data.description : 'No description provided.'}
            </div>
        `;
        result.addEventListener('click',function() {
            let SearchInput = document.querySelector('#search-input');
            SearchInput.value = data.name;
            Search();
        });
    }
    return result;
}


