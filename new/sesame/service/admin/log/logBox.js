import { FetchContent } from "/utils/NFC-modules/scripts/init/provider.js";
import { RemoveSession, GetSession } from "/sesame/service/admin/connect/storage.js";

export async function OpenLogIn() {
    console.log('Initialize')
    const session = GetSession(parameters.adminSession.name);
    const loginButton = document.querySelector('.login-button');
    const adminTools = document.querySelector('#adminTools');


    if (session.name === '' && session.token === '') {
        console.log('No session')
        const content = await FetchContent('/utils/uis/sesame/log/login.txt','txt');
        await AppendToButton(content);

        async function LoginAction() {
            document.querySelector('.login-button').addEventListener('click', function() {
                window.location = '/sesame/service/admin/log/index.html';
            });
        }

        await LoginAction();

    } else {
        const content = await FetchContent('/utils/uis/sesame/log/logout.txt','txt');
        await AppendToButton(content);

        async function LoginAction() {
            document.querySelector('.login-button').addEventListener('click', function() {
                RemoveSession(parameters.adminSession.name);
                window.location.reload();
            });
        }
        await LoginAction();



        await AddPannelButton();


    }

}
async function AppendToButton(content) {
    console.log('append button',content)
    document.querySelector('.login-button').innerHTML+=content;
}
async function AddPannelButton() {
    const newContainer = document.createElement('div');
    newContainer.classList.add('browser-menu-button');
    newContainer.innerHTML = `
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m620-284 56-56q6-6 6-14t-6-14L540-505q4-11 6-22t2-25q0-57-40.5-97.5T410-690q-17 0-34 4.5T343-673l94 94-56 56-94-94q-8 16-12.5 33t-4.5 34q0 57 40.5 97.5T408-412q13 0 24.5-2t22.5-6l137 136q6 6 14 6t14-6ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </div>
        <div class="text">
            Open pannel
        </div>
    `;

    document.querySelector('#adminTools').appendChild(newContainer);
}
