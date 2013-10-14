<?php

// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['testing-email']) && filter_var($_POST['testing-email'], FILTER_VALIDATE_EMAIL) ) {
 
  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }
  
  //send email
  mail( "faisal@pixelkitlabs.com", "Testing Sign up: \n\n From:" . $_POST['testing-email'] ,
   'Testing Sign up: \n\n From:' . $_POST['testing-email']);

  echo 'E-mail Sent ! We will make sure to get back to you as soon as possible.';
   
}

?>