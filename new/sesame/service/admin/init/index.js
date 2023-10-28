import { SessionState, GetSession } from "/sesame/service/admin/connect/storage.js";
import { AddInitListeners } from "/sesame/service/admin/init/event.js";

let session = {};

window.addEventListener('DOMContentLoaded',async function() {
    SessionState();
    session = GetSession();
    setTimeout(async () => {
        await AddInitListeners();
    }, 500);
});