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



function sort_alphabetical() {
   var div = document.getElementById('people-container');
   var childElements = div.children;
   var childElementsArray = Array.prototype.slice.call(childElements);

   childElementsArray.sort(function (a, b) {
      var idA = a.id.toLowerCase();
      var idB = b.id.toLowerCase();
      if (idA < idB) {
         return -1;
      }
      if (idA > idB) {
         return 1;
      }
      return 0;
   });

   childElementsArray.forEach(function (element) {
      div.appendChild(element);
   });
}


function sort_back_alphabetical() {
   var div = document.getElementById('people-container');
   var childElements = div.children;
   var childElementsArray = Array.prototype.slice.call(childElements);

   childElementsArray.sort(function (a, b) {
      var idA = a.id.toLowerCase();
      var idB = b.id.toLowerCase();
      if (idA < idB) {
         return 1;
      }
      if (idA > idB) {
         return -1;
      }
      return 0;
   });

   childElementsArray.forEach(function (element) {
      div.appendChild(element);
   });
}

function sort_importance() {
   var div = document.getElementById('people-container');

   var childElements = div.children;

   var childElementsArray = Array.prototype.slice.call(childElements);

   childElementsArray.sort(function (a, b) {
      var importanceA = a.dataset.importance;
      var importanceB = b.dataset.importance;
      if (importanceA < importanceB) {
         return -1;
      }
      if (importanceA > importanceB) {
         return 1;
      }
      return 0;
   });

   childElementsArray.forEach(function (element) {
      div.appendChild(element);
   });
}
