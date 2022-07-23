function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json, json.title));
}

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    //sending data to a function
    .then((data) => displayPosts(data));
}

//below function will get data parameter from json data
function displayPosts(datam) {
  console.log(datam);
}
