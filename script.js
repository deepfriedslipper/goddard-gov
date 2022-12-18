const toggleSearch = () => {
   document.body.dataset.search = document.body.dataset.search === "true" ? "false" : "true";
}

const navigate = (location) => {
   window.location.href = location;
}

const loginForm = document.getElementById("signin-form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error");

window.addEventListener('resize', function (event) {
   document.body.dataset.search = "false";
}, true);


loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;

   if (username === "tombo" && password === "password") {
      alert("You have successfully logged in.");
      location.reload();
   } else {
      loginErrorMsg.style.display = 'block';
      setTimeout(() => {
         loginErrorMsg.style.display = 'none';
      }, 3000);
   }
})

function switchTab(tab) {
   var i;
   var x = document.getElementsByClassName("tab-content");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   document.getElementById(tab).style.display = "block";

   x = document.getElementsByClassName("tab");
   for (i = 0; i < x.length; i++) {
      x[i].style.color = "gray";
      x[i].style.backgroundColor = "#1e2125";
   }
   document.getElementById(tab + "-btn").style.color = "white";
   document.getElementById(tab + "-btn").style.backgroundColor = "#343a40";

   document.body.dataset.tab = (tab.charAt(3));
}
