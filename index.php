<!--?php

$backend = "Ez már backend-nek számít";

?-->
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Metadata -->
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="mysource_files/favicon.ico">

  <!-- Page Name and Site Name -->
  <title>Animal example</title>

  <!-- CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
  
  <!--JS-->
  <script src="script.js"></script>
</head>

<body>

  <div class="container">

    <header class="header clearfix" style="background-color: #ffffff">

      <!-- Main Menu -->
      <nav>
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="form.html">Form</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <!-- Site Name -->
      <h1 class="h3 text-muted">Site name</h1>

    </header>

    <div class="page-heading">

      <!-- Page Heading -->
      <h1>Home</h1>

    </div>

    <div class="row">

      <div class="col-sm-3">

        <!-- Sub Navigation -->
        <ul class="nav nav-pills nav-stacked">
          <li class="article active"><a href="#" data-id="0">Article 1</a></li>
          <li class="article"><a href="#" data-id="1">Article 2</a></li>
          <li class="article"><a href="#" data-id="2">Article 3</a></li>
        </ul>

      </div>

      <div class="col-sm-6">

        <div class="page-contents"></div>

      </div>

      <div class="col-sm-3">

        <!-- Login Section -->
        <input type="text" class="form-control" name="login" id="login" placeholder="Login" style="margin-bottom: 5px">

        <!-- Search Section -->
        <input type="search" class="form-control" name="search" id="search" placeholder="Search">

        <!-- Nested Right Column Content -->

      </div>

    </div>

    <footer class="footer">
      <p class="pull-right">
        <!-- Last Updated Design Area-->
        Last Updated: Friday, September 4, 2020
      </p>
      <p>&copy; 2020 Company, Inc.</p>
    </footer>

  </div> <!-- /container -->

</body>

</html>