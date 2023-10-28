import { ReturnSimpleDataVisual } from '/sesame/scripts/search/result_visual/minimal/global.js';

import { LoadManage } from '/sesame/scripts/utils/UI.js';

export function NewContainer() {
    const main_container = document.querySelector('.sesame-processus');

    if (!document.querySelector('.results-container')) {

        const container = document.createElement('div');
        container.classList.add('container');

        const results_container = document.createElement('div');
        results_container.classList.add('results-container');
    
        const netSearch = document.createElement('div');
        netSearch.classList.add('net-result');

        container.appendChild(results_container);
        container.appendChild(netSearch);
        main_container.appendChild(container);
    }
}

export async function NewResultPath(data_result) {
    const results_container = document.querySelector('.results-container');
    results_container.innerHTML = '';
    const correctSort = data_result.correctSort;


    let keys = Object.keys(correctSort);
    for (let key of keys) {
        const elements = correctSort[key];
        let keyContainerIsAppend = false;

        const keyContainer = document.createElement('div');
        keyContainer.classList.add('key-container');
        keyContainer.id = key;

        const headerProvider = document.createElement('div');
        headerProvider.classList.add('header-provider');
        headerProvider.id = `header-${key}`;
        headerProvider.innerHTML = `<div class="name">${key}</div>`;

        //keyContainer.appendChild(headerProvider);

        for (let element in elements) {
            const item = ReturnSimpleDataVisual(elements[element],key);
            keyContainer.appendChild(item);
            if (!keyContainerIsAppend) {
                results_container.appendChild(keyContainer);
                keyContainerIsAppend = true;
            }
        }
    }
}