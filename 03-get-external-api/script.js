document
  .getElementById("btn-load-github-users")
  .addEventListener("click", () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);

        let output = "";

        for (let i in users) {
          output += `
          <div class="user">
            <img src="${users[i].avatar_url}" width="50" height="50">
            <ul>
              <li>
                id: ${users[i].id}
              </li>
              <li>
                login: ${users[i].login}
              </li>
            </ul>
          </div>
        `;
        
        }
        
        document.getElementById('output').innerHTML = output;
        
      }
    };
    
    

    xhr.send();
  });
