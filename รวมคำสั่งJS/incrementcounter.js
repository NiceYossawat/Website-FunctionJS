// Increment Counter การเพิ่มจำนวนแบบเรียลไทม์

const counters = document.querySelectorAll('.counter');
const startFollow = document.getElementById('btn4-start')
const resetFollow = document.getElementById('btn4-reset')

counters.forEach(counters=>{ // วนลูปค่า Array
    counters.innerText = '0'
    const updateCounter = ()=>{
        const target = +counters.getAttribute("data-target") // เรียกค่า value data-target แปลงเป็น number จบที่ target
        const start = +counters.innerText // ค่าเริ่มต้น 0 
        const increment = target/200 // ให้เพิ่มขึ้น ทีละ 
        if(start<target){
            counters.innerHTML = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counters.innerText = target
        }
    }
    startFollow.addEventListener('click', updateCounter)
    resetFollow.addEventListener('click', ()=>{
        counters.innerText = '0'
    })
})