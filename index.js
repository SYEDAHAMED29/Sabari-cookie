function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setTitle() {
  document.getElementById("title").innerHTML =
    "This is " + getCookie("username");
}

// // Example: Set a cookie named "username" with the value "John" that expires in 7 days
// setCookie("username", "John", 7);

const btn = document.getElementById("btn");

btn.addEventListener("click", setCookie("username", "John", 7));
