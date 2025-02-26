<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    
    // Here you can add code to process the form data, like saving it to a database
    
    // Example response
    $response = "Enrollment successful for " . $name . " in the " . $course . " course.";
    echo $response;
}
?>
