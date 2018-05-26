/*this javascript controls what s universal between pages like the burger menu , switching between languages etc.*/



/*language settings*/

let itaText = document.querySelectorAll('.ita')
let engText = document.querySelectorAll('.eng')
let itaSample = document.querySelector('.ita')
let engSample = document.querySelector('.eng')

$('.itSet').on('click', setLanguage)
$('.enSet').on('click', setLanguage)

function setLanguage(e) {
   /*with this if statement I check if what I clicked was the italian button and the italian version is NOT already displayed, or if the english button was pressed and the english version is NOT already displayed, then execute my code, which toggles the class hide*/

    if (itaSample.classList.contains('hide')&&e.target.classList.contains('itSet') || engSample.classList.contains('hide')&&e.target.classList.contains('enSet')) {
        itaText.forEach((ita) => {
            ita.classList.toggle('hide')
        })
        engText.forEach((eng) => {
            eng.classList.toggle('hide')
        });

        $('.itSet').toggleClass('active');
$('.enSet').toggleClass('active');
    }

}



/*burger menu*/

$('.burger').on('click', () => {
    $('.navMenu').toggleClass('openNav')
    $('.navMenu').toggleClass('closeNav')
})

$('.timelineNav').on('click', toggleSubMenu)
$('.timelineNav').on('mouseover', toggleSubMenu)



function toggleSubMenu() {
    $('.subMenu').toggleClass('openMe')
 $('.subMenu').toggleClass('closeMe')
}

