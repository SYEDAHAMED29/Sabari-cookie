function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

// Example: Set a cookie named "username" with the value "John" that expires in 7 days
setCookie("username", "John", 7);

const btn = document.getElementById("btn");

btn.addEventListener("click", setCookie("username", "John", 7));
