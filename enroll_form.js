document.getElementById("enroll_form").onsubmit = function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;

  if (!name || !email || !course) {
    alert("Please fill out all fields.");
    event.preventDefault();
    return false;
  }

  // Additional validation logic here
};
