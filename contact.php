<?php
$servername = "localhost";
$username = "root"; // Default username for XAMPP/WAMP/MAMP
$password = ""; // Default password for XAMPP/WAMP/MAMP
$dbname = "Contact_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstName = htmlspecialchars($_POST['first_name']);
  $lastName = htmlspecialchars($_POST['last_name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $comments = htmlspecialchars($_POST['comments']);

  $sql = "INSERT INTO contacts (first_name, last_name, email, phone, comments)
          VALUES ('$firstName', '$lastName', '$email', '$phone', '$comments')";

  if ($conn->query($sql) === TRUE) {
    echo "Thank you for your message. We will get back to you shortly.";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>
