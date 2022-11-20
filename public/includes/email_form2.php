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

  $subjectC = 'Quote';

  $messageC = "
<div style='float: left;width: 100%;height: auto;padding: 40px;background-color: #eee;'>
  <!--IMAGE-->
  <div style='float: left; width: 300px; height: 100px;'>
  <!------------------IMG-->
      <img src='https://flooringservicesflorida.com/resources/img/logo/logo1-noback.png' style='float: left;width: 100%;height: 100%;'>
  </div>
  <!--TEXT-->
  <div style='float: left; width: 100%;height: auto;padding: 40px 20px;'>
      <p>Hello Mr./Mrs. $getLastName</p>
      <p>Thank you for using our new find installer engine, here is the best professionals to complete the service at your area, they will contact you soon by email/phone.</p>
      <p>We attached bellow some of the informations of your installer's company, website and their social medias links </p>
      <p>Thanks again,</p>
      <p>Tampa Floor Remodeling</p>
  </div>
  <!--NEW COMPANY-->
  <div style='float: left; width: 350px; height: auto;margin-left: calc(50% - 350px/2);border: 2px solid #999;padding-bottom: 0px;'>
      
      <!--NEWCOMPANY-TOPIC-->
      <div style='float: left; width: 100%; height: auto;padding: 20px 20px 0px;'>
          <!--NEWCOMPANY-TOPIC-UNIT-->
          <div style='float: left; width: 100%; height: auto;padding-bottom: 25px;'>
              <span style='font-weight: 600;'>&#8811; </span>
              <span style='font-weight: 600;'>Website: </span><span><a href='https://flooringservicesflorida.com' style='color: #00f;text-decoration: underline;'>flooringservicesflorida.com</a></span>
          </div>
          <!--NEWCOMPANY-TOPIC-UNIT-->
          <div style='float: left; width: 100%; height: auto;padding-bottom: 25px;'>
              <span style='font-weight: 600;'>&#8811; </span>
              <span style='font-weight: 600;'>Company: </span><span>Flooring Services Florida LLC</span>
          </div>
          <!--NEWCOMPANY-TOPIC-UNIT-->
          <div style='float: left; width: 100%; height: auto;padding-bottom: 25px;'>
              <span style='font-weight: 600;'>&#8811; </span>
              <span style='font-weight: 600;'>Email: </span><span>contact@flooringservicesflorida.com</span>
          </div>
          <!--NEWCOMPANY-TOPIC-UNIT-->
          <div style='float: left; width: 100%; height: auto;padding-bottom: 25px;'>
              <span style='font-weight: 600;'>&#8811; </span>
              <span style='font-weight: 600;'>Phone: </span><span>+1(407)391-4169</span>
          </div>
      </div>
      <!--NEWCOMPANY-IMAGE-->
      <div style='float: left; width: 300px;height: 100px;margin: 25px 25px 50px;'>
          <!----------------NEWCOMPANY-IMG-->
          <img src='https://flooringservicesflorida.com/resources/img/logo/logo1-300x101-noback.png' style='float:left; width: 100%; height: 100%'>
      </div>
      <a href='#'>
          <!--SOCIAL-MEDIA-->
          <div style='float: left; width: 75px;height: 75px;margin-left: 10px;'>
              <!--SOCIAL-MEDIA-FB-->
              <img src='https://flooringservicesflorida.com/resources/img/socialmedia/facebook-75x.jpg' style='float: left;width: 100%;height: 100%;'>
          </div>
      </a>
      <a href='#'>
          <!--SOCIAL-MEDIA-->
          <div style='float: left; width: 75px;height: 75px;margin-left: 10px; background-color: #000;'>
              <!--SOCIAL-MEDIA-IG-->
              <img src='https://flooringservicesflorida.com/resources/img/socialmedia/instagram-75x.jpg' style='float: left;width: 100%;height: 100%;'>
          </div>
      </a>
      <a href='#'>
          <!--SOCIAL-MEDIA-->
          <div style='float: left; width: 75px;height: 75px;margin-left: 10px;background-color: #000;'>
              <!--SOCIAL-MEDIA-MSG-->
              <img src='https://flooringservicesflorida.com/resources/img/socialmedia/sms-75x.jpg' style='float: left;width: 100%;height: 100%;'>
              
          </div>
      </a>
      <a href='#'>
          <!--SOCIAL-MEDIA-->
          <div style='float: left; width: 75px;height: 75px;margin-left: 10px;background-color: #000;'>
              <!--SOCIAL-MEDIA-WAP-->
              <img src='https://flooringservicesflorida.com/resources/img/socialmedia/whatsapp-75x.jpg' style='float: left;width: 100%;height: 100%;'>
          </div>
      </a>
      <!--SOCIAL-MEDIA-TEXT-->
      <div style='float: left; width: 75px;height: 75px;margin-left: 10px;text-align: center;'>
          <span>Facebook</span>
      </div>
      <!--SOCIAL-MEDIA-TEXT-->
      <div style='float: left; width: 75px;height: 75px;margin-left: 10px;text-align: center;'>
          <span>Instagram</span>
      </div>
      <!--SOCIAL-MEDIA-TEXT-->
      <div style='float: left; width: 75px;height: 75px;margin-left: 10px;text-align: center;'>
          <span>Message</span>
      </div>
      <!--SOCIAL-MEDIA-TEXT-->
      <div style='float: left; width: 75px;height: 75px;margin-left: 10px;text-align: center;'>
          <span>Whatsapp</span>
      </div>
      
  </div>
</div>
  ";
  

  $headersC = "From: Flooring Services Florida <flooringservicesflorida@gmail.com>\r\n";
  $headersC .= "Reply-To: flooringservicesflorida@gmail.com\r\n";
  $headersC .= "Content-type: text/html\r\n";

  mail($getEmail, $subjectC, $messageC, $headersC);


  echo "true"

?>


