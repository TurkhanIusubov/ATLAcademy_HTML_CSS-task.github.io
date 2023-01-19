const btn = document.querySelector('button')
const nav = document.querySelector('nav')
btn.addEventListener('click', (e)=>{
    e.target.classList.toggle('active')
    e.target.classList.contains('active') ? nav.classList.add('active') : nav.classList.remove('active')
})