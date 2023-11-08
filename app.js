let intro = document.querySelector('.landing__img');
let background = document.querySelector('.landing__people');
let img = document.querySelectorAll('.main');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        img.forEach((div, idx)=>{
            setTimeout(()=>{
                div.classList.add('active')
            }, (idx + 1) * 500)
        });

    })
})