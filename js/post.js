function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}
// must call function to see the data;
loadPosts();

function displayData(posts) {
  const section = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      `;
    section.appendChild(div);
    console.log(post);
  }
}
