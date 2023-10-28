import { FetchContent } from '/utils/NFC-modules/scripts/init/provider.js';
import { tree } from '/sesame/scripts/init/directory.js';
import { NewContainer,NewResultPath } from '/sesame/scripts/search/group.js';
import { LoadManage } from '/sesame/scripts/utils/UI.js';

import { GenerateNetResult } from '/sesame/scripts/search/result_visual/net.js';


let data_result = {};
let net_result = {};

export async function Search(specificDir = null) {
    const Input = document.querySelector('#search-input');

    let query = Input.value;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('.sesame-news').style.display = "none";
    await LoadManage(true,parameters.loader.states.indexing)

    net_result = {
        directory:'',
        data:[]
    };

    let pseudoQuery = query.replace(/ +/g, ' ').trim();
    await SearchWithQuery(pseudoQuery.toLocaleLowerCase(),"correctSort",specificDir);
    Input.value = query;
}


async function SearchWithQuery(query,pathInResult,specificDir) {
    let directories;
    if (specificDir) {
        directories = specificDir.directories;
        query = specificDir.query;
    } else {
        directories = Object.keys(tree.links);
    }
    data_result = {
        correctSort : {}
    };
    for (let dir of directories) {
        await LoadManage(true,parameters.loader.states.database(dir))

        const path = tree.main + tree.files.database + dir + '.json';
        const data = await FetchContent(path,'json');
        await SortDatas(data,dir,pathInResult,query);
    }
    NewContainer();
    if (net_result) {
        await GenerateNetResult(net_result,data_result);
    } 
    if (net_result.directory != "users") {
        await NewResultPath(data_result);
    }
    await LoadManage(false);


}


async function SortDatas(data,directory,path,query) {
    data_result[path][directory] = [];
    for (let item of data) {
        let item_keys = Object.keys(item);
        for (let key of item_keys) {
            CheckKey(item[key]);
            function CheckKey(value) {
                if (typeof value == "object") {
                    let keys = Object.keys(value);
                    for (let k of keys) {
                        CheckKey(value[k]);
                    }
                } else {
                    if (
                        typeof value === "string" && 
                        ((value.toLowerCase().includes(query))) && 
                        !data_result[path][directory].includes(item)
                    ) {
                        if (value.toLocaleLowerCase() == query.toLocaleLowerCase() && key == "name") {
                            net_result = {
                                directory : directory,
                                data : item
                            }
                        } else {
                            if (net_result.data.sesameID != item.sesameID || net_result.data.sesameID == undefined){
                                data_result[path][directory].push(item);
                            }
                        }
                    }
                }
            };

        }
       
    }
}


