let box = document.createElement("div");
box.className = "inline";
box.id = "contain";
document.body.append(box);

let coords_map = new Map();

function newButton(){
  alert("I am a new button");
}

document.onclick = function(e) { // shows click coordinates
  //coords.innerHTML = e.clientX + ':' + e.clientY;
  coord = e.clientX + ":" + e.clientY;
  let note = document.createElement("div");
  note.className = "note";
  document.body.append(note);
  r = 102;
  g = 140;
  b = 223;
  rgb = "rgb(" + r + "," + g + "," + b + ")";
  note.style.background = rgb;
  note.style.left = e.clientX + "px";
  note.style.top = e.clientY + "px";

  let bookmark = document.createElement("input");
  bookmark.type = "button";
  bookmark.className = "label";
  bookmark.style.background = rgb;
  box.append(bookmark);
  
  coords_map.set(coord, rgb);

  console.log("store coordinate (" + e.clientX + ":" + e.clientY + ") to coords_map");
  alert(coords_map.get(coord));
  console.log(coords_map);
};
