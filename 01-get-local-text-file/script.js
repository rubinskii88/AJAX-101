// create event listener 
document.getElementById('btn-get-text').addEventListener('click', () => {
  // console.log('btn-get-text clicked');
  // create xhr object
  const xhr = new XMLHttpRequest;
  // open request
  xhr.open('GET', 'sample.txt', true);
  // old way - onreadystatechange
  // readyState vals
  // 0 - req not init
  // 1 - server conn established
  // 2 - req received
  // 3 - processing req
  // 4 - req finished and resp is ready
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     console.log(xhr.responseText);
  //   }
  // };
  
  // loading state
  // xhr.onprogress = () => {
  //   console.log('readyState:', xhr.readyState);
  // };
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      // console.log(xhr.responseText);
      document.getElementById('output').innerText = xhr.responseText;
    } else if (xhr.status === 404) {
      document.getElementById('output').innerText = 'text file not found';
    }
  };
  
  // error handling
  xhr.onerror = () => {
    console.log('request err');
  };
  
  xhr.send();
  
});