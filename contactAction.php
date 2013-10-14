<?php

// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
 
  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  $message = 'Name: '.$_POST['name']."\n\n".
            'Number: '.$_POST['phone']."\n\n".
            'Email: '.$_POST['email']."\n\n".
            'Inquiry: '.$_POST['inquiry']."\n\n";
  
  //send email
  mail( "faisal@pixelkitlabs.com", "Contact Form: ".$_POST['name'], $message, "PixelPeople Contact" );

  echo '<h2 style="color: gray;">&nbsp;E-mail Sent ! We will make sure to get back to you as soon as possible.</h2>';
   
}

?>