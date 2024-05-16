document.getElementById('btn-get-php-data').addEventListener('click',  () => {
  const xhr = new XMLHttpRequest;
  
  xhr.open('GET', 'process.php?name=Kos', true);
  
  xhr.onload = () => {
    console.log(xhr.responseText);
  }
  
  xhr.send();
});


document.getElementById('form-php-ajax').addEventListener('submit',  (event) => {
  event.preventDefault();
  
  const userName = document.getElementById('name').value;
  
  const xhr = new XMLHttpRequest;
  
  xhr.open('GET', 'process.php?name=' + userName , true);
  
  xhr.onload = () => {
    console.log(xhr.responseText);
  }
  
  xhr.send();
});