<?php

  $getConfirm = $_POST["confirmation-siteform"];
  $getZipcode = $_POST["zipcode-siteform"];
  $getCity = $_POST["city-siteform"];
  $getState = $_POST["state-siteform"];
  $getType = $_POST["type-siteform"];
  $getFloor = $_POST["floor-siteform"];
  $getTiming = $_POST["timing-siteform"];
  $getEmail = $_POST["email-siteform"];
  $getFirstName = $_POST["firstname-siteform"];
  $getLastName = $_POST["lastname-siteform"];
  $getPhone = $_POST["phone-siteform"];
////////////////////////////////////////////////
  $toTFR = 'flooringservicesflorida@gmail.com';

  $subject = 'New Customer';

  $message = 'Tampa Floor - Website Contact Form';
  $message .= 'You received a new contact form from a new customer: <br><br>';
  $message .= "CONFIRMATION: ".$getConfirm."<br><br>";
  $message .= "ZIPCODE: ".$getZipcode."<br><br>";
  $message .= "CITY: ".$getCity."<br><br>";
  $message .= "STATE: ".$getState."<br><br>";
  $message .= "TYPE: ".$getType."<br><br>";
  $message .= "FLOOR: ".$getFloor."<br><br>";
  $message .= "TIMING: ".$getTiming."<br><br>";
  $message .= "EMAIL: ".$getEmail."<br><br>";
  $message .= "FIRST NAME: ".$getFirstName."<br><br>";
  $message .= "LAST NAME: ".$getLastName."<br><br>";
  $message .= "PHONE NUMBER: ".$getPhone."<br><br>";

  $headers = "From: Connection Websites <connectionwebsites1@gmail.com>\r\n";
  $headers .= "Reply-To: connectionwebsites1@gmail.com\r\n";
  $headers .= "Content-type: text/html\r\n";

  mail($toTFR, $subject, $message, $headers);

  echo "true"

?>


