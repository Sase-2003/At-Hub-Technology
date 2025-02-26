// function validateForm() {
//   var firstName = document.getElementById("first_name").value;
//   var lastName = document.getElementById("last_name").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;
//   var comments = document.getElementById("comments").value;

//   if (
//     firstName == "" ||
//     lastName == "" ||
//     email == "" ||
//     phone == "" ||
//     comments == ""
//   ) {
//     alert("All fields are required!");
//     return false;
//   }
//   return true;
// }
document.getElementById("contactform").onsubmit = function (event) {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var comments = document.getElementById("comments").value;

  if (!firstName || !lastName || !email || !phone || !comments) {
    alert("Please fill out all fields.");
    event.preventDefault();
    return false;
  }

  // Additional validation logic here
};
