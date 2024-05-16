document.getElementById('postForm').addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const name = document.getElementById('nameAjax').value;
  const params = 'name=' + name;
  
  const xhr = new XMLHttpRequest;
  
  xhr.open('POST', 'process.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  xhr.onload = () => {
    console.log(xhr.responseText);
  };
  
  xhr.send(params);
});