let goBack;
window.addEventListener('DOMContentLoaded', function() {
    goBack = document.querySelector('.go-back');
    goBack.style.display = "none";
    goBack.addEventListener('click',function() {
        location.reload()
    });


    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/W0lfan/SesameAPI/main/api/building.js';
    script.type = 'text/javascript';
    
    // Append the script element to the document's head or body
    document.head.appendChild(script);
    let linkel = {
        integration : document.querySelector('.linkel-container')
    }
    if (company.name && company.src.website) {
        const datasGatheringDiv = document.createElement("div");
        const pick = document.createElement("div");
        const informationDiv = document.createElement("div");
        const SVGDiv = document.createElement("div");

        datasGatheringDiv.classList.add("datas-gathering");
        pick.classList.add("check_choose");
        informationDiv.classList.add("information");
        SVGDiv.classList.add("SVG-Medium");

        for (let i = 0; i < company.datas.length; i++) {
            const choice = company.datas[i];
            const DIV = document.createElement("div");
            DIV.id = choice.name + "_formating_choice";
            DIV.classList.add("choice_format")
            DIV.innerHTML += `
                <div class="frm-choice">
                    <div class="frm-name">
                        ${choice.name}
                    </div>
                    <div class="frm-description">
                        ${choice.description}
                    </div>
                </div>
            `;
            DIV.animate([{opacity : 0}, {opacity: 1}], {duration:1000,fill:"forwards",delay:200*i});
            DIV.addEventListener('click',function() {
                Form(choice);
            });
            pick.appendChild(DIV);
        }

        SVGDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>';
        informationDiv.innerHTML = `
            <a href="${company.src.website}">${company.name}</a> datas gathering is not affiliated with Linkel
        `;

        let div = document.createElement('div');
        div.className = "back-to-website";
        div.innerHTML = `Go back to ${company.name}`;
        div.addEventListener('click',function() {
            window.location = company.src.website;
        });


        datasGatheringDiv.appendChild(pick);
        datasGatheringDiv.appendChild(div);
        datasGatheringDiv.appendChild(informationDiv);

        linkel.integration.appendChild(datasGatheringDiv);
    }
});