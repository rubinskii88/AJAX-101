<?php

$conn = new PDO('sqlite:db.sqlite3');

if(isset($_POST['name'])) {
  $name = htmlspecialchars($_POST['name'], ENT_QUOTES);
  
  $sql = 'INSERT INTO users(name) VALUES(?)';
  
  $stmt = $conn->prepare($sql);
  
  if ($stmt->execute([$name])) {
    echo 'user added';
  } else {
    echo 'error';
  }
  
}