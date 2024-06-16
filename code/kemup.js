document.addEventListener("DOMContentLoaded", function() {
const imgInput = document.querySelector('#img1')
const titleInput = document.querySelector('#title1')
const desInput = document.querySelector('#description1')
const title1Input = document.querySelector('#title11')
const title2Input = document.querySelector('#title12')
const title3Input = document.querySelector('#title13')
const content1Input = document.querySelector('#content1')
const content2Input = document.querySelector('#content2')
const content3Input = document.querySelector('#content3')
const content4Input = document.querySelector('#content4')
const content5Input = document.querySelector('#content5')
const content6Input = document.querySelector('#content6')
const img1Input = document.querySelector('#img11')
const img2Input = document.querySelector('#img12')
const img3Input = document.querySelector('#img13')
const des1Input = document.querySelector('#des1')
const des2Input = document.querySelector('#des2')
const des3Input = document.querySelector('#des3')
const souInput = document.querySelector('#sou')
const buttonInput = document.querySelector('#btn12');
buttonInput.addEventListener('click', 
    (e) => {
        e.preventDefault();
        const imgValue = imgInput.value 
        const titleValue = titleInput.value 
        const desValue = desInput.value 
        const title1Value = title1Input.value 
        const title2Value = title2Input.value 
        const title3Value = title3Input.value 
        const content1Value = content1Input.value 
        const content2Value = content2Input.value 
        const content3Value = content3Input.value 
        const content4Value = content4Input.value 
        const content5Value = content5Input.value 
        const content6Value = content6Input.value 
        const img1Value = img1Input.value 
        const img2Value = img2Input.value 
        const img3Value = img3Input.value 
        const des1Value = des1Input.value 
        const des2Value = des2Input.value 
        const des3Value = des3Input.value 
        const souValue = souInput.value 
        const add = { 
            img: imgValue,
            img1: img1Value,
            img2: img2Value,
            img3: img3Value,
            title: titleValue,
            title1: title1Value,
            title2: title2Value,
            title3: title3Value,
            text: desValue,
            des1: des1Value,
            des2: des2Value,
            des3: des3Value,
            content1: content1Value,
            content2: content2Value,
            content3: content3Value,
            content4: content4Value,
            content5: content5Value,
            content6: content6Value,
            sou: souValue,
        };
        fetch('https://65859ecf022766bcb8c90509.mockapi.io/services', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(add)
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
})