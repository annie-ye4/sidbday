// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// checks if the password is correct
document.querySelector("button").addEventListener("click", function () {
  var password = document.querySelector("input").value;
  if (password === "9102023") {
    window.location.replace("connectionPage.html");
  } else {
    var rndNamber = Math.floor(Math.random() * 3) + 1;
    switch (rndNamber) {
      case 1:
        alert("wrong :( </3");
        break;
      case 2:
        alert("this is embarrassing for you... please lock in sid");
        break;
      case 3:
        alert("it's not that hard bae");
        break;
    }
  }
});
