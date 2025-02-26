<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "enrollment_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $course = htmlspecialchars($_POST['course']);

  $sql = "INSERT INTO enrollments (name, email, course) VALUES ('$name', '$email', '$course')";

  if ($conn->query($sql) === TRUE) {
    echo "Thank you for enrolling. We will get back to you shortly.";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>
