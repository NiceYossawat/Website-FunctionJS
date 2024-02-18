// สำหรับ Home Page 
const modeBtn = document.querySelector('.btn')
const content1 = document.getElementById('slide1')

modeBtn.addEventListener('click', () =>{
    content1.classList.toggle('showBg1')
})
