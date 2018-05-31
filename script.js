/*this javascript controls what s universal between pages like the burger menu , switching between languages etc.*/



/* text in different languages */

let itaText = document.querySelectorAll('.ita')
let engText = document.querySelectorAll('.eng')
let itaSample = document.querySelector('.ita')
let engSample = document.querySelector('.eng')

// get the language setting in the URL
let originalUrl = new URLSearchParams(window.location.search);
let languageSet = originalUrl.get("lang");

// get the navigation buttons, need them later to get get original href, so that the language setting can to passed to these
let naviHome = document.querySelector('#navHome');
let naviArtist = document.querySelector('#navArtist');
let naviPortforlio = document.querySelector('#navArt');
let naviTimeline = document.querySelector('#navTimeline');
let naviExperience = document.querySelector('#navExperience');
let naviExhibition = document.querySelector('#navExhibition');
let naviPress = document.querySelector('#navPress');
let naviAll = document.querySelector('#navAll');

$('.itSet').on('click', setLanguage)
$('.enSet').on('click', setLanguage)

// get the language buttons
let langButtons = document.querySelectorAll('.lan button');
// for each language button, use the same function
langButtons.forEach(languageChosen);
function languageChosen(l){
    // listen to is the button is clicked, if clicked, change the language
    l.addEventListener('click', changeLang);
    function changeLang(){
        // in HTML the languages are shown wish uppercase, need to change to lowercase
        let languageChosen = l.innerHTML.toLowerCase();
        // get original href from each navigation button, for later use
        let homeLink = naviHome.getAttribute('href');
        let artistLink = naviArtist.getAttribute('href');
        let portfolioLink = naviPortforlio.getAttribute('href');
        let timelineLink = naviTimeline.getAttribute('href');
        let experienceLink = naviExperience.getAttribute('href');
        let exhibitionLink = naviExhibition.getAttribute('href');
        let pressLink = naviPress.getAttribute('href');
        let allLink = naviAll.getAttribute('href');
        // define new href here, DRY
        let newHomeLink;
        let newArtistLink;
        let newPortfolioLink;
        let newTimelineLink;
        let newExperienceLink;
        let newExhibitionLink;
        let newPressLink;
        let newAllLink;
        // chech to see if language setting already exist, if yes, overwrite with new language setting, if no, add language setting
        if(artistLink.indexOf('lang=')<0){ // chech just one is enough, since all of the href get updated at the same time, one has it, all have it.
            newHomeLink = homeLink + "?lang=" + languageChosen;
            newArtistLink = artistLink + "?lang=" + languageChosen;
            newPortfolioLink = portfolioLink + "?lang=" + languageChosen;
            newTimelineLink = timelineLink + "?lang=" + languageChosen;
            newExhibitionLink = exhibitionLink + "?lang=" + languageChosen;
            newExperienceLink = experienceLink + "?lang=" + languageChosen;
            newPressLink = pressLink + "?lang=" + languageChosen;
            newAllLink = allLink + "?lang=" + languageChosen;
        } else {
            newHomeLink = homeLink.slice(0, -2) + languageChosen;
            newArtistLink = artistLink.slice(0, -2) + languageChosen;
            newPortfolioLink = portfolioLink.slice(0, -2) + languageChosen;
            newTimelineLink = timelineLink.slice(0, -2) + languageChosen;
            newExhibitionLink = exhibitionLink.slice(0, -2) + languageChosen;
            newExperienceLink = experienceLink.slice(0, -2) + languageChosen;
            newPressLink = pressLink.slice(0, -2) + languageChosen;
            newAllLink = allLink.slice(0, -2) + languageChosen;
        }

        // update href with the new language setting
        naviHome.setAttribute('href', newHomeLink);
        naviArtist.setAttribute('href', newArtistLink);
        naviPortforlio.setAttribute('href', newPortfolioLink);
        naviTimeline.setAttribute('href', newTimelineLink);
        naviExhibition.setAttribute('href', newExhibitionLink);
        naviExperience.setAttribute('href', newExperienceLink);
        naviPress.setAttribute('href', newPressLink);
        naviAll.setAttribute('href', newAllLink);
    }
}

if(languageSet == "it" || languageChosen == "it"){
}



function setLanguage(e) {


    /*with this if statement I check if what I clicked was the italian button and the italian version is NOT already displayed, or if the english button was pressed and the english version is NOT already displayed, then execute my code, which toggles the class hide*/

    if (itaSample.classList.contains('hide') && e.target.classList.contains('itSet') || engSample.classList.contains('hide') && e.target.classList.contains('enSet')) {
        itaText.forEach((ita) => {
            ita.classList.toggle('hide')
        })
        engText.forEach((eng) => {
            eng.classList.toggle('hide')
        });

        $('.itSet').toggleClass('lanactive');
        $('.enSet').toggleClass('lanactive');
    }

}



/*burger menu*/

$('.burger').on('click', () => {
    $('.navMenu').toggleClass('openNav');
    $('.navMenu').toggleClass('closeNav');
})

$('.timelineNav').on('mouseenter', openSubMenu);
$('.subMenu').on('mouseleave', closeSubMenu);



function openSubMenu() {
    $('.subMenu').addClass('openMe');
    $('.subMenu').removeClass('closeMe');

}

function closeSubMenu(){
    $('.subMenu').addClass('closeMe');
    $('.subMenu').removeClass('openMe');
}
