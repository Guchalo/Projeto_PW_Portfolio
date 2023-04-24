function dark_light(e) {
  var btn = document.querySelector("#btn");
  var content = document.getElementById("content").style;
  var title = document.getElementById("title").style;
  if (btn.className == "fa-solid fa-sun fa-xl") {
    btn.className = "fa-solid fa-moon fa-xl";
    btn.innerHTML = " Dark";
    btn.style.color = "#000000";
    title.color = "#000000";
    content.color = "#000000";
    content.fontWeight = "bold";
    content.backgroundColor = "#ffffffb9";
  } else {
    btn.className = "fa-solid fa-sun fa-xl";
    title.color = "#ffffff";
    btn.innerHTML = " Light";
    btn.style.color = "#ffffff";
    content.color = "#ffffff";
    content.fontWeight = "bold";
    content.backgroundColor = "#000000b9";
  }
}

function calculate(e) {
  var exp = document.getElementById("exp").value;
  var result = document.getElementById("result");
  var exp_result = eval(exp);
  if (exp_result == undefined) {
    result.innerHTML = "O resultado é = 0";
  } else {
    result.innerHTML = "O resultado é = " + exp_result;
  }
}

function clearExp(e) {
  document.getElementById("exp").value = "";
  document.getElementById("result").innerHTML = "O resultado é = 0";
}
