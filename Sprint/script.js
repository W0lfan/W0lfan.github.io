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
    let a = {
        H: "00",
        M: "25",
        S: "00"
    };
    ["H", "M", "S"].forEach(b => {
        document.getElementById(`Time${b}`).value = a[b], IfNumber(`Time${b}`)
    }), Announce("Time loaded", 4, "rgba(81, 185, 255, 1)")
}

function Optimal() {
    let a = 0;
    ["H", "M", "S"].forEach(b => {
        let c = document.getElementById(`Time${b}`);
        IfNumber(`Time${b}`), "" == c.value && (c.style.border = "solid rgba(201, 0, 0, 0.6)", a++)
    }), setTimeout(function() {
        ["H", "M", "S"].forEach(a => {
            document.getElementById(`Time${a}`).style.border = "solid rgba(255, 167, 0, 0.8)"
        })
    }, 1e3), 0 === a && (localStorage.setItem("Optimal Time", []), Announce("Time saved", 4, "rgba(81, 255, 155, 1)"))
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
    StopClock = true;
};
function Add5(){Time+=300}
function Copy(){/*Naf#7792*/navigator.clipboard.writeText("Naf#7792")}
