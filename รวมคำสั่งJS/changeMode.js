// Change Mode Dark/Light
const timeEl = document.querySelector('.time')
const btnToggle = document.querySelector('.toggle')
const bg = document.querySelector('.mode')

function setTime(){
    const time = new Date(); //เรียกใช้ obj ของ/วันเวลา
    const houres = time.getHours() // กรอง
    const minutes = time.getMinutes()
    const seconds  = time.getSeconds()
    timeEl.innerHTML = `${houres < 10 ? `0${houres}` : houres} : 
    ${minutes < 10 ? `0${minutes}` : minutes} : 
    ${seconds < 10 ? `0${seconds}` : seconds}`
    // if (houres >= 18) {
    //     bg.classList.add('dark')
    //  } else {
    //     bg.classList.remove('dark')
    //  }  
}
btnToggle.addEventListener('click', (event)=>{
    if(bg.classList.contains('dark')){
        bg.classList.remove('dark')
        event.target.innerHTML = 'โหมดกลางคืน'
    }else{
        bg.classList.add('dark')
        event.target.innerHTML = 'โหมดกลางวัน'
    }
})

setTime();
setInterval(setTime,1000); // เรียกใช้ function ทุกๆ 1s