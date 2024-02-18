// popup images

const smallImg = document.querySelectorAll('.img-container img')
const fullImg = document.querySelector('.full-image')
const modal = document.querySelector('.modalImg')

smallImg.forEach(img => {
    img.addEventListener('click', () =>{
        const fullSize = img.getAttribute("src")
        console.log(fullSize);
        fullImg.src = fullSize 
        modal.classList.add('open')
    })
})
modal.addEventListener('click', (event) =>{
    if(event.target.classList.contains('modalImg')){
        modal.classList.remove('open')
    }
})