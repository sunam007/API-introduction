function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} , Email: ${user.email} `;
    ul.appendChild(li);
  }
}
