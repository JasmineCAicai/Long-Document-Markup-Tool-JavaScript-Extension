let coords_map = new Map();

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

  coords_map.set(coord, rgb);

  console.log("store coordinate (" + e.clientX + ":" + e.clientY + ") to coords_map");
  alert(coords_map.get(coord));
  console.log(coords_map);
};