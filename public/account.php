<?php require_once('validate.php'); ?>
<!doctype html>
<html lang="en">
<head>
  <title>Night Knights - Account Management</title>

  <?php include("modules/commonHead.html"); ?>
  <script src="/js/account.js"> </script>
  <link rel="stylesheet" type="text/css" href="/css/account.css">
</head>
<body>
<div id="wrapper">
  <?php include("modules/navbar.html"); ?>

  <div class="twocol" id="accountwrapper">
    <div class="left" id="accountleft">

      <p class="infocaption">My Night Knights Account</p>
      <div class="infobox" id="accountstats">
        <p>Username: <?php echo $_SESSION['username']; ?></p>
        <p>Email: <?php echo $_SESSION['email']; ?></p>
      </div>

    </div>

    <div class="right" id="accountright">

      <p class="infocaption">Change Password</p>
      <div class="infobox" id="accountpasswordreset">
        <form method="" id="passwordresetform">
          <ul>
            <li><label for="newpassword">New Password: </label><input type="password" name="password" required></li>
            <li><label for="repeatpassword">Repeat: </label><input type="password" name="repeatpassword" required></li>
            <li><input type="submit" id="changepassword" value="Change Password"></li>
          </ul>
        </form>
      </div>
    </div>
  </div>
  <div id="push"></div>
</div>
  <?php include("modules/copyright.html"); ?>

</body>
</html>