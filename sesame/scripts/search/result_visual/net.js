import { Return } from '/sesame/scripts/search/result_visual/net/global.js'
import { adminTools } from '/sesame/scripts/search/result_visual/net/adminTools.js'
import { RemoveSession, GetSession } from "/sesame/service/admin/connect/storage.js";
import { TokenVerification } from "/sesame/service/admin/connect/token_verif.js";

export async function GenerateNetResult(data,data_result) {
    const netResults = document.querySelector('.net-result');
    const resultsContainer = document.querySelector('.results-container');
    const session = GetSession(parameters.adminSession.name);

    netResults.style.display = "flex";
    resultsContainer.style.display = "flex";
    netResults.style.width = "calc(40% - 80px)";
    resultsContainer.style.width = "50%";

    if (data.directory != '' && data.length != 0) {
        await Return(data.directory, data.data,document.querySelector('.net-result'),data_result);
        const tokenValue = await TokenVerification(session.token, session.name);
        
        if (tokenValue) {
          await adminTools(data);
        }
      }

    if (data.directory == '') {
        netResults.style.display = "none";
        resultsContainer.style.width = "80%";
    }else if (areAllKeysEmpty(data_result.correctSort) || data.directory == "users") {
        resultsContainer.style.display = "none";
        netResults.style.width = "80%";
    }

}

function areAllKeysEmpty(obj) {
    for (const key in obj) {
      if (obj[key].length > 1) {
        return false; 
      }
    }
    return true; 
  }