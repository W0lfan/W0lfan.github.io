window.addEventListener('DOMContentLoaded',function() {

    let calendar = document.querySelector('.calendar')
    __CALENDAR__.forEach((task,index) => {
        let update = document.createElement('div');
        update.classList.add('update');
        update.innerHTML = `

            <div class="title">
                <div class="up-title">
                    ${
                        task.finished ? `
                            <div class="icon-update-done">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
                            </div>
                        ` : (!task.finished && !document.querySelector('.task-running')) ? `
                            <div class="icon-update-running">
                                <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Z"/></svg>
                                </div>
                                <div class="text">Running</div>
                            </div>
                        `  : ''
                    }
                    <div class="name">
                        ${task.title}
                    </div>
                </div>
                <div class="down-title">
                    ${task.description}
                </div>
                <div class="mid-title">
                    ${task.finished ? `
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/></svg>
                        </div>
                        <div class="text">Ended on ${task.date}</div>
                    ` : `
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
                        </div>
                        <div class="text">Ending on ${task.date}</div>
                    `}
                </div>
            </div>

        `;
        if (!task.finished && !document.querySelector('.task-running')) {
            update.classList.add('task-running');
        }

        let tasksOfUpdate = document.createElement('div');
        tasksOfUpdate.classList.add('tasks');
        tasksOfUpdate.innerHTML = `
            <div class="info">
                This update contains
            </div>
        `;
        task.content.forEach((t,i) => {
            let Task = document.createElement('div');
            Task.classList.add("Task");
            Task.innerHTML = `
                <div class="icon">
                    ${t.svg}
                </div>
                <div class="text">
                   <div class="title">
                        ${t.txt.title}
                   </div>
                   <div class="description">
                        ${t.txt.description}
                   </div>
                </div>
            `;
            tasksOfUpdate.appendChild(Task);
        });

        update.appendChild(tasksOfUpdate);
        calendar.appendChild(update);


        if (index + 1 < __CALENDAR__.length) {
            let nextStep = document.createElement('div');
            nextStep.classList.add('next-step');
            nextStep.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>';
            calendar.appendChild(nextStep);
        }
    });


});