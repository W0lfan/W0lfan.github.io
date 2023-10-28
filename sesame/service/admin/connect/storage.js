export function SessionState() {
    if (!localStorage.getItem('SesameLocalAdminSession')) {
        localStorage.setItem('SesameLocalAdminSession',JSON.stringify({
            name : '',
            token : '',
            active : false,
            library : {
                pushes : [],
                deletions : []
            }
        }));
        return false;
    } else {
        return true;
    }
}

export function GetSession(name) {
    SessionState();
    return JSON.parse(localStorage.getItem(name));
}

export function SetSession(to,session) {
    SessionState();
    localStorage.setItem(to,JSON.stringify(session));

}

export function RemoveSession(name) {
    SessionState();
    localStorage.removeItem(name);
}