<?php

$conn = new PDO('sqlite:db.sqlite3');



  
  $sql = 'SELECT rowid, name FROM users';
  
  $stmt = $conn->query($sql);
  
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  
  
  if ( $result) {
    echo json_encode($result);
  } else {
    echo 'error';
  }
  





// if(isset($_POST['name'])) {
//   $name = htmlspecialchars($_POST['name'], ENT_QUOTES);
  
//   $sql = 'INSERT INTO users(name) VALUES(?)';
  
//   $stmt = $conn->prepare($sql);
  
//   if ($stmt->execute([$name])) {
//     echo 'user added';
//   } else {
//     echo 'error';
//   }
  
// }