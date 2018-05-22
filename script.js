/*this javascript controls what s universal between pages like the burger menu , switching between languages etc.*/

let itaText = document.querySelectorAll('.ita')
let engText = document.querySelectorAll('.eng')



/*language settings*/

$('.enSet').on('click', setLanguage)

function setLanguage(){

    itaText.forEach((ita)=> {ita.classList.toggle('hide')})
    engText.forEach((eng)=> {eng.classList.toggle('hide')});



}

$('.itSet').on('click', setLanguage)





/*burger menu*/

$('.burger').on ('click',()=>{
    $('nav').toggleClass('openNav')
    $('nav').toggleClass('closeNav')
})

