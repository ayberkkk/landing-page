<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <title>
      Landing Pages
   </title>
</head>
<? include 'assets/assets.php'; ?>
<div id="overlay">
   <div class="spinner"></div>
</div>
<!-- Top Button -->
<i id="topButton" class="icon icon-up3 over-top-i" style="opacity:0;"></i>
<!-- Top Button End -->

<body class="main">
   <? include 'modules/layouts/header.php'; ?>
   <main>
      <content class="content">
         <? include 'modules/headline.php';?>
         <? include 'modules/client.php';?>
         <? include 'modules/features.php';?>
         <? include 'modules/wallet.php';?>
         <? include 'modules/security.php';?>
         <? include 'modules/choice.php';?>
         <? include 'modules/card.php';?>
         <? include 'modules/how.php';?>
         <? include 'modules/app.php';?>
         <? include 'modules/plans.php';?>
         <? include 'modules/apk.php';?>
      </content>
   </main>
   <? include 'modules/layouts/footer.php'; 
   ?>
   <div id="closeToggle" style="display: none;"></div>
   <script>
      sal();
   </script>
</body>

</html>