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
            <li class="nav-item"><a href="/project/code/kem.html">Trang chủ</a></li>
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
                `;
  });
