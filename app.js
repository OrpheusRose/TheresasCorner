
let intro = document.querySelector('.landing__img');
let background = document.querySelector('.landing__people');
let img = document.querySelectorAll('.main');
let imgRemove = document.querySelectorAll('.main__remove');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        img.forEach((div, idx)=>{

            setTimeout(()=>{
                div.classList.add('active')
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            imgRemove.forEach((div, idx)=>{
                
                setTimeout(()=>{
                    div.classList.remove('active');
                    div.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 7000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 7300);

    })
})