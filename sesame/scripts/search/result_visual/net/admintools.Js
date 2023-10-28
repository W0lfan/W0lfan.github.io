export async function adminTools(d) {
    const data = d.data;

    const adminAccess = document.createElement('div');
    adminAccess.classList.add('adminAccess');
    adminAccess.classList.add('adminAccessHide');

    const buttonsContent = document.createElement('div');
    buttonsContent.classList.add('adminsTools');

    const adminToolOPen = document.createElement('div');
    adminToolOPen.classList.add('openTools');
    adminToolOPen.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
    `;
    adminToolOPen.addEventListener('click',function() {
        if (adminAccess.classList.contains('adminAccessHide')) {
            adminAccess.classList.remove('adminAccessHide');
        } else {
            adminAccess.classList.add('adminAccessHide');
        }
    });

    adminAccess.append(adminToolOPen);


    const editButton = document.createElement('div');
    editButton.classList.add('admin-tool');
    editButton.id = "edit";

    editButton.innerHTML = `
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M772-603 602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Z"/></svg>
        </div>
        <div class="text">
            Edit
        </div>
    `;


    const shadowBanButton = document.createElement('div');
    shadowBanButton.classList.add('admin-tool');
    shadowBanButton.id = "delete";
    console.log(data)
    if (data.processus.shadowBan.state == false) {
        shadowBanButton.innerHTML = `
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M792-56 624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM480-320q11 0 20.5-1t20.5-4L305-541q-3 11-4 20.5t-1 20.5q0 75 52.5 127.5T480-320Zm292 18L645-428q7-17 11-34.5t4-37.5q0-75-52.5-127.5T480-680q-20 0-37.5 4T408-664L306-766q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302ZM587-486 467-606q28-5 51.5 4.5T559-574q17 18 24.5 41.5T587-486Z"/></svg>
            </div>
            <div class="text">
                Enable data ban
            </div>
        `;
    } else {
        shadowBanButton.innerHTML = `
            <div class="icon">
             <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z"/></svg>
            </div>
            <div class="text">
                Disable data ban
            </div>
        `;
    }

    buttonsContent.appendChild(editButton);
    buttonsContent.appendChild(shadowBanButton);
    adminAccess.appendChild(buttonsContent);

    const netResult = document.querySelector('.net-result');

    netResult.appendChild(adminAccess);

};