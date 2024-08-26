<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $location = $_POST['location'];
    $phone = $_POST['phone'];
    $payment = $_POST['payment'];
    $product = $_POST['product']; // Make sure this field is included in your form

    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Order from Glam Yarn";
    $message = "Name: $name\nLocation: $location\nPhone: $phone\nProduct: $product\nPayment Method: $payment";
    $headers = "From: no-reply@glamyarn.com";

    mail($to, $subject, $message, $headers);
}
?>
