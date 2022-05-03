function Draw(element, Rect) {
    let ctx = element.getContext("2d");
    //HTML_Alert(2, 600,element)
    ctx.fillStyle=Rect[0];
    ctx.fillRect(Rect[1], Rect[2], Rect[3],Rect[4]);
}



function New(Type = String, Custom_Id = String, Action = String, BodyPlace, Style = String, Content, More/* [[Fill,x,y,w,z], Button input, func]*/) {
    if (BodyPlace) {
        if (Action=="add") {
            if (Action.toLowerCase()=="add") {
                var newElement = document.createElement(Type.toLowerCase());
                newElement.id = Custom_Id;
                newElement.style = Style;
                if (Content) {
                    Type.toLowerCase()=="div" ? newElement.textContent=Content : newElement.innerHTML=Content;
                }
                if (Type.toLowerCase()=="button"||Type.toLowerCase()=="input") {
                    newElement.type=More[1]
                    newElement.name=Custom_Id+"_";
                    if (More[2]!="") {
                        newElement.onclick=More[2];
                    }
                    if (More[1].toLowerCase('')=='color') {
                        newElement.value=More[0][0];
                    }
                }
                if (More[0].length>1) {
                    Draw(newElement,More[0]);
                }
                BodyPlace.appendChild(newElement);
            } 
        } else {
            alert('Error. Please report this to the developer.\nError type: Allowed{}.')
        }
    } else alert('Error. Please report this to the developer.\nError type: unknown "BodyPlace" element.')
}
function Del(Custom_Id) {
    if (document.getElementById(Custom_Id)) {
        document.getElementById(Custom_Id).remove();
    } else alert('Error. Please report this to the developer.\nError type: unknown Custom Id to delete.')
}


/*
Minified:
function New(e=String,t=String,r=String,o,n=String,a,l){if(o)if("add"==r){if("add"==r.toLowerCase()){var i=document.createElement(e.toLowerCase());i.id=t,i.style=n,a&&("div"==e.toLowerCase()?i.textContent=a:i.innerHTML=a),"button"!=e.toLowerCase()&&"input"!=e.toLowerCase()||(i.type=l[1],i.name=t+"_",""!=l[2]&&(i.onclick=l[2]),"color"==l[1].toLowerCase("")&&(i.value=l[0][0])),l[0].length>1&&Draw(i,l[0]),o.appendChild(i)}}else alert("Error. Please report this to the developer.\nError type: Allowed{}.");else alert('Error. Please report this to the developer.\nError type: unknown "BodyPlace" element.')}

*/
