const search = document.querySelector('.icons i:nth-child(2)')
const searchContent = document.querySelector('.search')
search.addEventListener('click', function(e){
    searchContent.style.display = 'block'
    searchContent.classList.toggle('active')
})

const cart = document.querySelector('.icons i:nth-child(1)')
const menu = document.querySelector('.menu-content')

cart.addEventListener('click', function(event){
    // menu.style.transform = 'translateX(0)'
    
    menu.classList.toggle('reset-menu')
})