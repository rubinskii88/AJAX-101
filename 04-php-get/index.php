<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button type="button" id="btn-get-php-data">get data from PHP</button>
  <hr>
  <h3>form no ajax</h3>
  <form action="process.php" method="get">
    <input type="text" name="name" id="">
    <input type="submit" value="submit-get">
  </form>
  <h3>form ajax</h3>
  <form id="form-php-ajax">
    <input type="text" name="name" id="name">
    <input type="submit" value="submit-get">
  </form>
  <script src="script.js"></script>
</body>
</html>