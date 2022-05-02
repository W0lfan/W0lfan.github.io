function produceBeep() {
    var audio = new Audio('announce.mp3');
    audio.volume=0.05;
    audio.play();
}

function setImage(init=false) {
    if (document.getElementById('soundPic')) document.getElementById('soundPic').remove();
    let Sound_ = localStorage.getItem('sound');
    if (init) {
        var x = document.createElement("IMG");
        Sound_ == "false" ? x.src="Icons_And_Pics/speaker_off.png" : x.src="Icons_And_Pics/speaker_on.png"
        x.style = "    position: absolute;margin-left: 25px;color:aliceblue;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"
        x.style.width="25px";
        x.id = "soundPic"
        x.style.position="absolute";
        x.style.marginTop="-450px";
        x.style.marginLeft="950px";

        x.onclick=function() {
            setImage();
        };
        document.body.appendChild(x);
    } else {
        Sound_ == "true" ? localStorage.setItem('sound','false') : localStorage.setItem('sound','true');
        setImage(true);
    }
}

function HTML_Alert(UntilHide=5, placement=600,sentence="Hi!") {
    if (localStorage.getItem('NewPop') != "true") {
        localStorage.getItem('sound') == "true" ? produceBeep() : 0;
        let ThisPosY = -500;
        let ThisPosY_Txt = -485;
        let max = 15;
        localStorage.setItem('NewPop','true')
        for (let i = 0; i < max; i++) {
            setTimeout(function() { 
                for (let j=0; j < 3; j++) {
                    var x = document.createElement("canvas");
                    x.id = `AlertBox_${i}_${j}`;
                    x.style.position="absolute";
                    x.style.marginLeft=`${350+j*100}px`;
                    x.style.marginTop=`${ThisPosY}px`
                    x.style.borderColor="#046695"
                    var ctx = x.getContext("2d");
                    ctx.fillStyle = "#0D577B";
                    ctx.fillRect(100, 0, 1000,50);
                    document.body.appendChild(x);
                }
                const el = document.createElement('div');
                el.style = "color:#CDE;"
                el.id = "Sentence_Alert_Box";
                el.textContent = sentence;
                el.style.position = "absolute"
                el.style.marginTop = `${ThisPosY_Txt}px`;
                el.style.marginLeft=`${placement}px`;
                el.style.fontSize="15px"
                document.body.appendChild(el);
                ThisPosY+=5;
                ThisPosY_Txt+=5;
                i != 0 ? (document.getElementById('Sentence_Alert_Box').remove(),document.getElementById(`AlertBox_${i-1}_${0}`).remove(),document.getElementById(`AlertBox_${i-1}_${2}`).remove(),document.getElementById(`AlertBox_${i-1}_${1}`).remove()) : true;
            }, i * 50);
        }
        setTimeout(function() {
            hideLast()
            for (let i = 0; i < max; i++) {
                setTimeout(function() { 
                    for (let j=0; j < 3; j++) {
                        var x = document.createElement("canvas");
                        x.id = `AlertBox_${i}_${j}`;
                        x.style.position="absolute";
                        x.style.marginLeft=`${350+j*100}px`;
                        x.style.marginTop=`${ThisPosY}px`
                        x.style.borderColor="#046695"
                        var ctx = x.getContext("2d");
                        ctx.fillStyle = "#0D577B";
                        ctx.fillRect(100, 0, 1000,50);
                        document.body.appendChild(x);
                     }
                    const el = document.createElement('div');
                    el.style = "color:#CDE;"
                    el.id = "Sentence_Alert_Box";
                    el.textContent = sentence;
                    el.style.position = "absolute"
                    el.style.marginTop = `${ThisPosY_Txt}px`;
                    el.style.marginLeft=`${placement}px`;
                    el.style.fontSize="15px"
                    document.body.appendChild(el);
                    ThisPosY-=5;
                    ThisPosY_Txt-=5;
                    i != 0 ? (
                        document.getElementById('Sentence_Alert_Box').remove(),
                        document.getElementById(`AlertBox_${i-1}_${0}`).remove(),
                        document.getElementById(`AlertBox_${i-1}_${2}`).remove(),
                        document.getElementById(`AlertBox_${i-1}_${1}`).remove()) : 0;
                    i == max-1 ? (
                        hideLast()
                    ) : 0;
                }, i * 50);
            }
            localStorage.setItem('NewPop','false')
        },UntilHide*1000);
    }
}

function hideLast () {
    if (document.getElementById('Sentence_Alert_Box'))document.getElementById('Sentence_Alert_Box').remove();
    for (let i = 14; i<18;i++) {
        if (i!=15) {
            for (let j = 0; j<3; j++) {
                if (document.getElementById(`AlertBox_${i}_${j}`)) {
                    document.getElementById(`AlertBox_${i}_${j}`).remove();
                }
            }
        }
    }
}