import { TokenVerification } from "/sesame/service/admin/connect/token_verif.js";
import { FetchContent } from "/utils/NFC-modules/scripts/init/provider.js";
import { LoadUI } from "/sesame/scripts/utils/UI.js";
import { SessionState, GetSession,SetSession } from "/sesame/service/admin/connect/storage.js";


export async function AddInitListeners() {
    const LogIn = document.querySelector('#LogInSesame');
    const KeepLogin = document.querySelector('.check .icon');


    KeepLogin.addEventListener('click',function() {
        const round = this.querySelector('.toggle');
        let session = GetSession(parameters.adminSession.name);

        if (!round.classList.contains('on')) {
            round.classList.add('on');
            session.active = true;
        } else {
            round.classList.remove('on');
            session.active = false;
        }
        SetSession(parameters.adminSession.name,session);
    })


    LogIn.addEventListener('click',async function() {
        const token = document.querySelector('#Token').value;
        const userName = document.querySelector('#UserName').value;
        const loginContainer = document.querySelector('.login-container');
        const verification = await TokenVerification(token,userName);

        let session = GetSession(parameters.adminSession.name);

        await DisplayTokenResult();

        async function DisplayTokenResult() {
            let contentLoad;

            if (verification) {
                contentLoad = await FetchContent('/utils/uis/sesame/admin/connect/success.txt',"txt");
                session.name = userName;
                session.token = token;
                SetSession(parameters.adminSession.name,session);
            } else {
                contentLoad = await FetchContent('/utils/uis/sesame/admin/connect/failure.txt',"txt");
            }
            loginContainer.innerHTML = '';
            await LoadUI(contentLoad,loginContainer);

            setTimeout(() => {
                window.location = "/sesame/index.html";
            }, 5000);

        };
    });
}