// search widget ซ่อนแสดงผลข้อมูล 

const searchBtn = document.querySelector('.btn8')
const inputEl = document.querySelector('.input')
const search = document.querySelector('.search')

searchBtn.addEventListener('click', () =>{
    search.classList.toggle('active')
    inputEl.focus()
})
