let contributions = {
    "Game developer" : "rgba(181, 0, 0, 0.4)",
    "Team mode coder" : "rgba(79, 79, 79, 1)",
    "Survival coder" : "rgba(79, 79, 79, 1)",
    "Racing coder" : "rgba(79, 79, 79, 1)",
    "Deathmatch coder" : "rgba(79, 79, 79, 1)",
    "Event creator" : "rgb(8, 117, 0)",
    "Graphisms" : "rgba(210, 217, 0, 1)",
    "Mod creator" : "rgba(217, 165, 0, 1)",
    "Discord contributor" : "rgba(170, 0, 196, 1)",
    "Discord staff" : "rgba(144, 144, 144, 1)",
    "Tool creator" : "rgba(216, 106, 0, 1)",
    "Translator" : "rgba(216, 106, 0, 1)",
    "Ship creator" : "rgba(216, 106, 0, 1)",
    "Codes creator" : "rgba(216, 106, 0, 1)",
    "Wiki" : "rgba(216, 0, 128, 1)",
    "Reddit mod" : "rgba(204, 83, 0, 1)",
    "Youtube":"rgba(183, 0, 0, 1)",
    "Youtube+":"rgba(183, 0, 0, 1)",
    "Bot developer" : "rgba(54, 54, 54, 1)",
};

let users = {
    "Gilles" : {
        roles : [
            "Game developer","Team mode coder","Survival coder","Racing coder",
            "Deathmatch coder","Event creator","Mod creator","Discord contributor","Tool creator",
            "Ship creator","Codes creator"
        ],
        star : "UCP Holder",
    },
    "X-27" : {
        roles : [
            "Discord contributor","Discord staff","Youtube","Youtube+"
        ],
        star : "UCP Holder (1st)",
    },
    "Tournebulle" : {
        roles : [
            "Graphisms"
        ],
        star : "UCP Holder",
    },
    "Oh_" : {
        roles : [
            "Discord contributor","Discord staff","Bot developer"
        ],
        star : "UCP Holder",
    },
    "Dimed" : {
        roles : [
            "Discord contributor","Discord staff","Wiki","Reddit mod"
        ],
        star : "UCP Holder",
    },
    "Finalizer" : {
        roles : [
            "Discord contributor","Discord staff","Ship creator","Mod creator","Codes creator","Wiki","Reddit mod"
        ],
        star : "UCP Holder",
    },
    "ChickenMan" : {
        roles : [
            "Mod creator","Discord contributor",
            "Ship creator","Codes creator","Wiki"
        ],
        star : "UCP Holder",
    },
    "Bhpsngum" : {
        roles : [
            "Mod creator","Discord contributor",
            "Codes creator", "Tool creator","Mod creator","Discord staff",
            "Wiki"
        ],
        star : "UCP Holder",
    },
    "Carme" : {
        roles : [
            "Discord contributor"
        ],
        star : "UCP Holder",
    },
    "Dmitron" : {
        roles : [
            "Discord contributor","Tool creator","Mod creator","Wiki"
        ],
        star : "UCP Holder",
    },
    "Acarii" : {
        roles : [
            "Discord contributor", "Discord staff",
        ],
        star : "UCP Holder",
    },
    "Notus" : {
        roles : [
            "Mod creator",
            "Codes creator", "Mod creator","Discord contributor","Discord staff",
            "Wiki","Reddit mod"
        ],
        star : "UCP Holder",
    },
    "Megalodon" : {
        roles : [
            "Discord contributor","Youtube"
        ],
        star : "sUCP Holder",
    },
    "Partytime" : {
        roles : [
            "Discord contributor","Discord staff"
        ],
        star : "sUCP Holder",
    },
    "xys!" : {
        roles : [
            "Discord contributor","Youtube","Ship creator","Wiki"
        ],
        star : "sUCP Holder",
    },
    "Serendibite" : {
        roles : [
            "Discord contributor","Ship creator"
        ],
        star : "sUCP Holder",
    },
    "Supernova" : {
        roles : [
            "Discord contributor","Ship creator"
        ],
        star : "sUCP Holder",
    },
    "Endersult" : {
        roles : [
            "Discord contributor","Ship creator"
        ],
        star : "sUCP Holder",
    },
    "201x Captain" : {
        roles : [
            "Discord contributor","Translator"
        ],
        star : "sUCP Holder",
    },
    "Admiral" : {
        roles : [
            "Discord contributor", "Discord staff","Ship creator","Wiki"
        ],
        star : "sUCP Holder"
    },
    "Kaleo" : {
        roles : [
            "Discord contributor"
        ],
        star : "",
    },
    "Naf" : {
        roles : [
            "Discord contributor", "Discord staff","Tool creator","Wiki","Codes creator"
        ],
        star : "",
    },
    "()" : {
        roles : [
            "Discord contributor"
        ],
        star : "",
    },
    "Glitch" : {
        roles : [
            "Discord contributor", "Discord staff","Reddit mod"
        ],
        star : "",
    },
    "DSE" : {
        roles : [
            "Discord contributor", "Discord staff"
        ],
        star : "",
    },
    "Badger" : {
        roles : [
            "Discord contributor"
        ],
        star : "",
    },
    "Daweilicious" : {
        roles : [
            "Discord contributor", "Discord staff","Youtube"
        ],
        star : "",
    },
    "Emperor" : {
        roles : [
            "Discord contributor", "Youtube"
        ],
        star : "",
    },
    "Tez" : {
        roles : [
            "Discord contributor","Ship creator"
        ],
        star : "",
    },
    "Nevadan" : {
        roles : [
            "Discord contributor","Discord staff"
        ],
        star : "",
    },
    "JavRedstone" : {
        roles : [
            "Discord contributor","Mod creator","Codes creator"
        ],
        star : "",
    },
    "NukePhysics" : {
        roles : [
            "Discord contributor","Youtube","Youtube+"
        ],
        star : "",
    },
    "Orio" : {
        roles : [
            "Discord contributor"
        ],
        star : "",
    },
    "Otsu" : {
        roles : [
            "Discord contributor","Ship creator"
        ],
        star : "",
    },
    "Tsukii^^" : {
        roles : [
            "Discord contributor"
        ],
        star : "",
    },
    "Twidash" : {
        roles : [
            "Discord contributor","Youtube"
        ],
        star : "",
    },
    "Thuliux" : {
        roles : [
            "Youtube"
        ],
        star : "",
    },
    "Ayaka Aram" : {
        roles : [
            "Youtube","Youtube+"
        ],
        star : "",
    },
    "Trollbaba" : {
        roles : [
            "Youtube","Youtube+"
        ],
        star : "",
    },
};


let search = function() {
    let area = document.getElementById('results');
    let v = document.getElementById('searchBy');
    let txtarea = document.getElementById('research_textarea');
    area.innerHTML="";
    let roles = [];
    console.log(v.value)
    function getTextAreaValue() {
        for (let i of Object.keys(contributions)) {
            let n = i.toLowerCase();
            if (n.includes(txtarea.value.toLowerCase()) && txtarea.value != "") {
                roles.push(i);
                console.log(i)
            }
        }
    }
    getTextAreaValue();
    if (roles.length === 0) {
        roles.push(v.value);
    }
    function returnUsers() {
        let u = [];
        for (let i of Object.keys(users)) {
            for (let j of roles) {
                if (users[`${i}`].roles.includes(`${j}`) && u.includes(i) != true) {
                    u.push(i);
                }
            }
        }
        return u;
    }
    let u = returnUsers();
    Draw(u);
};
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
function Draw(u) {
    let area = document.getElementById('results');

    for (let i = 0; i < u.length; i++) {
        let ship = `starblast-ships/${getRandomArbitrary(601,609)}.png`;
        let pattern = `
        <div class="user">
            <div class="body">
                <div class="pfp-and-name">
                    <div class="pfp">
                        <img src=${users[u[i]].profile ? users[u[i]].profile : ship} style="transform:rotate(${users[u[i]].profile ? "0deg" : "30deg"}); width: ${users[u[i]].profile ? "100%" : "80%"} ;height: ${users[u[i]].profile ? "100%" : "80%"}">
                    </div>
                    <div class="name">
                        ${u[i]}
                    </div>
            
                </div>
                <div class="distinctions" id="distinctions_${u[i]}">
                </div>
                <div class="ecp" id="ecp_${u[i]}">
                    <p id="star">&#9733</p> ${users[u[i]].star}
                </div>
            </div>
        </div>
        `;
        area.innerHTML = area.innerHTML + pattern;
        let d = document.getElementById(`distinctions_${u[i]}`);
        let p = users[u[i]].roles;
        for (let j = 0; j < p.length; j++) {
            d.innerHTML = d.innerHTML + `
                <div class="distinctions-content" style="background-color : ${contributions[`${p[j]}`]}">
                    ${p[j]}
                </div>
            `
        }
    }
}



window.onload = function() {
    for (let i of Object.keys(contributions)) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        document.getElementById('searchBy').appendChild(opt);
    }
    let u = [];
    for (let i of Object.keys(users)) {
        u.push(i)
    }
    Draw(u)
}

