<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your email address
    $to = "srinivasbk850@gmail.com"; 

    // Subject of the email
    $subject = "New Chat Form Submission";

    // Collect and sanitize form inputs
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Message content
    $message = "You have received a new message from the chat form:\n\n";
    $message .= "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";

    // Headers
    $headers = "From: no-reply@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send the message. Please try again.'); window.location.href='index.html';</script>";
    }
}
?>
