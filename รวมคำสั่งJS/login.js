// visibility eye login 

const eyeBtn = document.querySelector('#eye');
const password = document.querySelector('#password');

eyeBtn.addEventListener('click', () => {
    if(eyeBtn.classList.contains('fa-eye')){
        eyeBtn.classList.replace('fa-eye','fa-eye-slash')
        password.setAttribute('type','text')
    }else{
        eyeBtn.classList.replace('fa-eye-slash','fa-eye')
        password.setAttribute('type','password')
    }
})