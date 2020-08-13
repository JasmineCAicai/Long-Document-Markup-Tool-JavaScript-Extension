let box = document.createElement("div");
box.className = "inline";
// box.id = "contain";
document.body.append(box);

let coords_map = new Map();

// Color array
let color = [
  [255, 228, 225],
  [188, 238, 104],
  [216, 191, 216],
  [255, 215, 0],
  [205, 201, 201],
  [100, 149, 237],
  [244, 164, 96],
  [255, 246, 143],
  [60, 179, 113]
]
let i = 0;
let j = 0;

// Label ID
let labelId = 1;
let noteId = 1;

let flag = true;
let clicked = false;
let text = null;

document.onclick = function(e) { // shows click coordinates
  if(clicked === false){
    text = prompt("输入标签文字：", "");
  }

  if(text !== null) {
    if(clicked === true) clicked = false;
    if(flag===true){
      //coords.innerHTML = e.clientX + ':' + e.clientY;
    coord = e.pageX + ":" + e.pageY;
    let note = document.createElement("input");
    note.type = "button";
    note.className = "note";
    note.id = "no" + noteId;
    note.title = "remove";
    document.body.append(note);
    rgb = "rgb(" + color[i][j++] + "," + color[i][j++] + "," + color[i][j] + ")";
    i++;
    j=0;
    if(i===9) i=0;
    note.style.background = rgb;
    note.style.color = rgb;
    note.style.left = e.pageX + "px";
    note.style.top = e.pageY + "px";
  
    let bookmark = document.createElement("input");
    bookmark.type = "button";
    bookmark.className = "label";
    bookmark.id = "la" + labelId;
    bookmark.style.background = rgb;
    bookmark.title = text;
    box.append(bookmark);
  
    coords_map.set(coord, bookmark.id);
  
    labelId++;
    noteId++;
  
    console.log("store coordinate (" + e.pageX + ":" + e.pageY + ") to coords_map");
    console.log(coords_map);
  
    // Assign click function: delete mark and label
    note.onclick = function() {
      flag = false;
      clicked = true;
      note.parentNode.removeChild(note);
      bookmark.parentNode.removeChild(bookmark);
    }
  
    // Assign click function: move to position marked
    bookmark.onclick = function() {
      flag = false;
      clicked = true;
      window.scrollTo(0, e.pageY);
    }
    }
    else {
      flag = true;
    }
  }
}

