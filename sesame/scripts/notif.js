let notificationTimeout; // Declare a variable to store the timeout ID

function DisplayNotif(message, seconds) {
    console.log('seconds ', seconds);
    let notif = document.querySelector('.notification-information');
    
    if (!notif) {
        const notifElement = document.createElement('div');
        notifElement.className = 'notification-information';
        notifElement.style.opacity = 0;
        notifElement.style.display ="flex";
        notifElement.innerHTML = `
            <div class="header">
                Sesame informs you
            </div>
            <div class="message">
                ${message}
            </div>
        `;
        
        document.body.appendChild(notifElement);
    } 
    setTimeout(() => {
        console.log('animate notif')
        document.querySelector('.message').innerHTML = message;
        document.querySelector('.notification-information').style.opacity = 1;
    }, 200);

    
    // Clear the previous timeout if it exists
    clearTimeout(notificationTimeout);


    
    notificationTimeout = setTimeout(() => {
        console.log('hiding notif');
        document.querySelector('.notification-information').style.opacity = 0;
    }, seconds * 1000);
}