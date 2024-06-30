const productList = document.querySelector(".main");

fetch("https://65859ecf022766bcb8c90509.mockapi.io/services", {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  }) 
  .then((tasks) => { 
    tasks.forEach((task) => {
      const carouselContainer = document.createElement("div");
      carouselContainer.classList.add("main__card");
      carouselContainer.innerHTML = `
        <div class="img">
                <img class="img" src="${task.img}" alt="">
                <span class="card--seller">Must try</span>
        </div>
        <div class="card--body">
            <h3 class="card--title">${task.title}</h3>
            <p class="card--text">${task.text}</p>
            <button class="card--btn de">Truy cập</button>
            <button class="card--btn xoa">Xóa</button>
        </div> 
        `;
      // Append the carouselContainer inside the loop
      productList.appendChild(carouselContainer);
       const btn2 = carouselContainer.querySelector(".de");
       console.log(btn2)
      btn2.addEventListener("click", () => {
        fetch(
          `https://65859ecf022766bcb8c90509.mockapi.io/services/${task.id}`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            // handle error
          })
          .then((product) => {
            // Do something with the list of tasks
            window.location.href = `code/kemdetail.html?id=${task.id}`;
          })
          .catch((error) => {
            // handle error
          });
      });
      const button = carouselContainer.querySelector('.xoa')
      button.addEventListener('click', ()=>{
      fetch(`https://65859ecf022766bcb8c90509.mockapi.io/services/${task.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // Do something with deleted task
      }).catch(error => {
        // handle error
      })
        })
    });
  })
  .catch((error) => {
    // handle error
  });

  
 
