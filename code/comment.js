const comment = document.querySelector(".social-comment")
fetch('https://66779908145714a1bd751fe9.mockapi.io/comment', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then((tasks) => {
    tasks.forEach((task)=> {
        const commentcard = document.createElement("div");
        commentcard.classList.add("personal-comment")
        commentcard.innerHTML =`
        <div class="userinfo">
        <div class="info">
            <img src="${task.img}" alt="avatar">
            <div class="name">${task.name}</div>
        </div>
        <div class="com">
            <div class="com-content">${task.content}</div>
        </div>
        </div>
        `
        comment.appendChild(commentcard)
    })
  }).catch(error => {
    // handle error
  })
const buttonInput = document.querySelector(".btn")
const usernameInput = document.querySelector("#username")
const contentInput = document.querySelector("#content")
buttonInput.addEventListener('click', 
    (e) =>{
      e.preventDefault();
      const usernameValue = usernameInput.value 
      const contentValue = contentInput.value 
      const user = {
        name: usernameValue,
        content: contentValue,
      }
      fetch('https://66779908145714a1bd751fe9.mockapi.io/comment', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(user)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
      }).catch(error => {
        // handle error
      })
    }
)