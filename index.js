const title = document.getElementById("title");
const btn = document.getElementById("btn");

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie =
    name + "=" + value + expires + "; path=/; SameSite=None; Secure";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

let cookieValue = getCookie("username");

function handleClick() {
  title.textContent = "This is " + cookieValue;
}

setCookie("username", "John", 7);
