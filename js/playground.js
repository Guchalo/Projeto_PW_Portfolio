function mostrar(e) {
     
  var btn = document.querySelector("#btn");
  var cor = document.getElementById("content").style;
  var title = document.getElementById("title").style;
  if (btn.className == "fa-solid fa-sun fa-fade fa-lg") {
    btn.className = "fa-solid fa-moon fa-fade fa-xl";
    title.color = "#000000";
    btn.style.color = "#000000";
    cor.backgroundColor = "#ffffffb9";
  } else {
    btn.className = "fa-solid fa-sun fa-fade fa-lg";
    title.color = "#ffffff";
    btn.style.color = "#ffffff";
    cor.backgroundColor = "#000000b9";
  }
}
