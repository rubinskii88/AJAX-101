<?php

echo 'Processing...';
echo "\n";
if (isset($_GET['name'])) {
  echo 'GET: your name is ' . $_GET['name'];
}