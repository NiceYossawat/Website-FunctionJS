// count text Character
const count = document.querySelector('.count');
const input = document.getElementById('inputCount');

input.addEventListener('keyup', () =>{ // ฟังก์ชั่นการกดคีบอร์ด
    count.innerHTML = input.value.length
})