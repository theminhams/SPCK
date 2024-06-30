const query = new URLSearchParams(window.location.search); // tro vao id =3
console.log(query);
const id = query.get("id"); // lay ra id =3
const productDetail = document.querySelector("body");
fetch(`https://65859ecf022766bcb8c90509.mockapi.io/services/${id}`, {
  method: "GET",
  headers: { "content-type": "application/json" },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    // handle error 
  })
  .then((product) => {
    // Do something with the list of tasks
console.log(product)
    productDetail.innerHTML = `
    <!-- Navber -->
    <div class="nav">
        <ul class="nav-list">
            <li class="nav-item"><a href="/project/index.html">Trang chủ</a></li>
            <li class="nav-item"><a href="/project/code/intro.html">Giới thiệu</a></li>
            <li class="nav-item">Nhà sáng lập</li>
        </ul>
        <marquee class="nav-scroll" behavior="scroll" direction="left">
            Chào mừng bạn đến với tạp chí hóa học vui vẻ, nơi mang lại cảm hứng hóa học
        </marquee>
        <ul class="nav-list">
            <li class="signup nav-item"><a href="./signup.html" target="_blank">Đăng ký</a></li>
            <li class="login nav-item"><a href="./login.html" target="_blank">Đăng nhập</a></li>
        </ul>
    </div>
    <!-- Title -->
    <div class="title">
        <h2 class="title__head">${product.title}</h2>
        <p class="title__info">${product.text}</p>
    </div>
    <!-- Content -->
    <div class="content">
        <h1 class="content__intro">${product.title1}</h1>
        <div class="content1">
        ${product.content1}
        </div>
        <div class="content__img">
            <img src="${product.img1}" alt="">
            <i class="content__des">${product.des1}</i>
        </div>
        <div class="content1">
            ${product.content2}
        </div>
        <h1 class="content__intro">${product.title2}</h1>
        <div class="content1">
            ${product.content3}
        </div>
        <div class="content__img">
            <img src="${product.img2}" alt="">
            <i class="content__des">${product.des2}</i>
        </div>
        <div class="content1">${product.content4}</div>
        <h1 class="content__intro">${product.title3}</h1>
        <div class="content1">
            ${product.content5}
        </div>
        <div class="content__img">
            <img src="${product.img3}" alt="">
            <i class="content__des">${product.des3}</i>
        </div>
        <div class="content1">
            ${product.content6}
        </div>
        <i class="content__quote">${product.sou}</i>
    </div>
    <!-- Comment -->
     <div class="social-comment">
     </div>
     <form action="" class="comment-container">
        <div class="comment-filling">
            <label for="username">Hãy nhập username/email của bạn vào</label>
            <input type="text" name="username" id="username" placeholder="Hãy nhập username/email của bạn vào">
            <label for="content">Hãy nhập comment của bạn vào</label>
            <input type="text" name="content" id="content" placeholder="Hãy nhập comment của bạn vào">
            <button class="btn">Gửi bình luận</button>
            <label for="">Hãy đánh giá bài viết của chúng tôi</label>
        </div>
        <div class="rating">
            <input type="radio" id="star-1" name="star-radio" value="star-1">
            <label for="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value="star-1">
            <label for="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value="star-1">
            <label for="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-4" name="star-radio" value="star-1">
            <label for="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-5" name="star-radio" value="star-1">
            <label for="star-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
          </div>
     </form>
    <!-- Linking -->
    <div class="link">
        <div class="link__content">
            <img  class="link__img" src="${product.num1}" alt="">
            <div class="link__des">
                <h4>${product.numtitle1}</h4>
                <p>${product.numdes1}</p>
            </div>
        </div>
        <div class="link__content">
            <img  class="link__img" src="${product.num2}" alt="">
            <div class="link__des">
                <h4>${product.numtitle2}</h4>
                <p>${product.numdes2}</p>
            </div>
        </div>
    </div>
        <!-- Footer -->
        <div class="footer">
            <div class="footer__rev">
                <h3>Tạp chí hóa học vui vẻ</h3>
                <p>Nhà sáng lập</p>
                <p>Nguyễn Thế Minh</p>
            </div>
            <div class="footer__info"> 
                <h3>Thông tin liên hệ</h3>
                <p>Số điện thoại : 0818139989</p>
                <p>Email: theminhams@gmail.com</p>
            </div>
            <div class="footer__register">
                <h3>Đăng nhập</h3>
                <form action="" class="footer__form">
                    <label for="">Tên tài khoản</label>
                    <input type="text" class="footer__name info" placeholder="Tên tài khoản">
                    <label for="">Mật khẩu</label>
                    <input type="password" class="footer__pass info" placeholder="Mật khẩu">
                    <input type="submit" value="Đăng nhập" class="footer__btn">
                </form>
            </div>
        </div>
        <!-- Copyright -->
        <div class="copyright">
            COPYRIGHT © 2023-2026 BY THE MINH
        </div>
         <script src="./comment.js"></script>
                `;
  });
