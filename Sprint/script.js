function IfNumber(t) {
    let u = document.getElementById(t);
    let v = isNaN(u.value);
    if (v) {
        u.style.border = "solid rgba(201, 0, 0, 0.6)";
    } else {
        if (u.style.border == "solid rgba(201, 0, 0, 0.6)") u.style.border = "solid rgba(255, 167, 0, 0.8)";
    }
};

function To0() {
    ["H","M","S"].forEach(i => {
        document.getElementById(`Time${i}`).value = "";
        IfNumber(`Time${i}`);
    });
    Announce("Time cleared",4,"rgba(247, 8, 8, 0.85)");
}

function Announce(a,t,c){
    document.getElementById('Com').style.color = c;
    document.getElementById('Com').innerHTML = a;
    setTimeout(function() {
        document.getElementById('Com').innerHTML="";
    },t*1000)
}

function Casual() {
    SetTime();
    Announce("Time loaded", 4, "rgba(81, 185, 255, 1)")
}
function InitLocalStorage() {
    localStorage.setItem('Parameters', JSON.stringify({Background : "",Optimal_Time : 1500}));return localStorage.getItem('Parameters');
};
function HMS(t) {
    let h = Math.floor(t / 60 / 60);
    let m = Math.floor(((t % 3600) - (t % 3600) % 60) / 60);
    let s = Math.floor(((t % 3600) % 60));
    return [h,m,s];
}
function Optimal() {
    let a = 0;
    let t = 0;
    ["H", "M", "S"].forEach(b => {
        let c = document.getElementById(`Time${b}`);
        IfNumber(`Time${b}`), "" == c.value && (c.style.border = "solid rgba(201, 0, 0, 0.6)", a++)
        if (c) {
            let C = Number(c.value);
            if (b=="H") t+=C*60*60;
            else if (b=="M") t+=C*60;
            else t+=C;
        }
    }), setTimeout(function() {
        ["H", "M", "S"].forEach(a => {
            document.getElementById(`Time${a}`).style.border = "solid rgba(255, 167, 0, 0.8)"
        })
    }, 1e3), 0 === a;
    let obj;
    if (localStorage.getItem('Parameters')) obj = JSON.parse(localStorage.getItem('Parameters'));
    else obj = JSON.parse(InitLocalStorage());
    obj["Optimal_Time"] = t;
    localStorage.setItem("Parameters", JSON.stringify(obj));
    let T = HMS(t);
    Announce(`Optimal time saved: ${T[0]}h ${T[1]}m ${T[2]}s`, 4, "rgba(81, 255, 155, 1)")
}
let Pause = !1;

function PauseOrResume() {
    Pause = !Pause;
    let a = document.getElementById("Pause"),
        b = document.getElementById("PauseOrResumeDiv");
    Pause ? (a.innerHTML = "play_arrow", b.innerHTML = "RESUME") : (a.innerHTML = "pause", b.innerHTML = "PAUSE")
}
function Stop(a,v) {
    let i = document.getElementById('Stop'),
        t = document.getElementById('StopDiv');
    i.innerHTML = a;
    t.innerHTML = v;
    Button[0].innerHTML = "drive_file_rename_outline", Button[1].innerHTML = "LET'S BE PRODUCTIVE";
    Button[2].innerHTML = "magic_button", Button[2].style.color = "rgb(216, 1, 235)";
    Button[3].innerHTML = "magic_button";
    StopClock = true;
    Start = false, Pause = false;
};
function Add5(){if (Time>0)Time+=300};
function Copy(){/*Naf#7792*/navigator.clipboard.writeText("Naf#7792")};

