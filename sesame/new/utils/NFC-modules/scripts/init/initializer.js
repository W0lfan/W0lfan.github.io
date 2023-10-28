import { AppendToHead, Initialize_ContentProvider,FetchContent } from '/utils/NFC-modules/scripts/init/provider.js';



window.addEventListener('DOMContentLoaded', async () => {
    try {
        await Initialize_ContentProvider();
        const ToHead = await FetchContent('/utils/NFC-modules/scripts/init/head.json', 'json');
        await TreatJSON_Head(ToHead);

    } catch (error) {
        console.log('Error while loading head content:', error);
    }

    async function TreatJSON_Head(ToHead) {
        for (let _ of ToHead) {
            AppendToHead(_.rel,_.type,_.href)
        }
    }
});

