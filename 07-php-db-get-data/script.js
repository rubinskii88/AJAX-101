// document.getElementById('btn-get-user').addEventListener('click', () => {
//   const xhr = new XMLHttpRequest;
  
//   xhr.open('GET', 'user.json', true);
  
//   xhr.onload = () => {
//     if(xhr.status === 200) {
//       console.log(xhr.responseText);
//       const user = JSON.parse(xhr.responseText);
//       console.log(user.name);
      
//       let output = '';
      
//       output += '<ul>' +
//         '<li> ID: ' + user.id + '</li>' +
//         '<li> Name: ' + user.name + '</li>' +
//         '<li> Email: ' + user.email + '</li>' +
//       '</ul';
      
//       document.getElementById('output-get-user').innerHTML = output;
//     }
//   };
  
//   xhr.send();
// });

document.getElementById('btn-get-users-php').addEventListener('click', () => {
  const xhr = new XMLHttpRequest;
  
  xhr.open('GET', 'users.php', true);
  
  xhr.onload = () => {
    if(xhr.status === 200) {
      console.log(xhr.responseText);
      
      const users = JSON.parse(xhr.responseText);
      
      console.log(users);
      
      let output = '';
      
      for (let i in users) {
        output += '<ul>' +
        '<li> ID: ' + users[i].rowid + '</li>' +
        '<li> Name: ' + users[i].name + '</li>' +
        // '<li> Email: ' + users[i].email + '</li>' +
      '</ul><br>';
      }
      
      document.getElementById('output-get-users-php').innerHTML = output;
    }
  };
  
  xhr.send();
});