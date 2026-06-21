let posts = [];
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => showUser(json));

  function showUser(userArray) {
    // console.log(userArray);
    const usersEl = document.getElementById('usersList');

    userArray.forEach((user) => {
        usersEl.innerHTML += `<div onclick="c(${user.id})" class="px-2 py-4 bg-slate-600" key=${user.id}>${user.name}</div>`;
    });
  }
  

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>{
    posts = json;
// showPost(json)
  } );

//   function showPost(postArray) {
   
//     postArray.forEach((post) => {
        
//     });
//   }

function c(id) {
   let postUser= posts.filter((post) => post.userId === id);
   const postsEl = document.getElementById('postsList');
   postsEl.innerHTML += `
        <article class="border-4 bg-neutral-400 border-yellow-200 p-4 rounded-lg relative hover:-translate-y-2 hover:shadow-lg hover:bg-yellow-200 hover:border-zinc-700 transition-all">
            <h2 class="font-bold text-xl mb-4 line-clamp-1 text-yellow-400">${post.title}</h2>
            <p class="text-gray-700 line-clamp-4 mb-3">${post.body}</p>
            <span class="text-sm absolute top-0 right-0 px-2 py-1 text-yellow-200 bg-gray-800 rounded-full translate-x-1/2 -translate-y-1/2">${post.userId}</span>
        </article>`;
}
