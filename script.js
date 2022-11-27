const toggleSearch = () => {
   document.body.dataset.search = document.body.dataset.search === "true" ? "false" : "true";
}

const navigate = (location) => {
   window.location.href = location;
}

const loginForm = document.getElementById("signin-form");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error");

window.addEventListener('resize', function(event) {
   document.body.dataset.search = "false";
}, true);


loginButton.addEventListener("click", (e) => {
   e.preventDefault();
   const username = loginForm.username.value;
   const password = loginForm.password.value;

   if (username === "user" && password === "web_dev") {
       alert("You have successfully logged in.");
       location.reload();
   } else {
       loginErrorMsg.style.opacity = 1;
   }
})
