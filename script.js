/*this javascript controls what s universal between pages like the burger menu , switching between languages etc.*/

/* text in different languages */

let itaText = document.querySelectorAll('.ita')
let engText = document.querySelectorAll('.eng')
let itaSample = document.querySelector('.ita')
let engSample = document.querySelector('.eng')



// get the navigation buttons, need them later to get get original href, so that the language setting can be passed to these
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


// update url with click on language button. This is the most detailed code, no loop, no advance

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
        } else { //overwrite
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

// get the language setting in the URL
let originalUrl = new URLSearchParams(window.location.search);
let languageSet = originalUrl.get("lang");
if(!languageSet || languageSet == "en" || languageChosen == "en"){
    // set en span as active
    document.querySelector('.enSet').className = "enSet lanactive";
    document.querySelector('.itSet').className = "itSet";
//    setLanguage();

    naviHome.setAttribute('href', 'index.html?lang=en');
    naviArtist.setAttribute('href', 'about.html?lang=en');
    naviPortforlio.setAttribute('href', 'portfolio.html?lang=en');
    naviTimeline.setAttribute('href', 'timeline.html?lang=en');
    naviExhibition.setAttribute('href', 'timeline.html?lang=en');
    naviExperience.setAttribute('href', 'timeline.html?lang=en');
    naviPress.setAttribute('href', 'timeline.html?lang=en');
    naviAll.setAttribute('href', 'timeline.html?lang=en');
} else if(languageSet == "it" || languageChosen == "it"){
    // set it span as active
    document.querySelector('.enSet').className = "enSet";
    document.querySelector('.itSet').className = "itSet lanactive";
//    setLanguage();

    itaText.forEach((ita) => {
        ita.classList.toggle('hide')
    })
    engText.forEach((eng) => {
        eng.classList.toggle('hide')
    });

//    $('.itSet').toggleClass('lanactive');
//    $('.enSet').toggleClass('lanactive');

    naviHome.setAttribute('href', 'index.html?lang=it');
    naviArtist.setAttribute('href', 'about.html?lang=it');
    naviPortforlio.setAttribute('href', 'portfolio.html?lang=it');
    naviTimeline.setAttribute('href', 'timeline.html?lang=it');
    naviExhibition.setAttribute('href', 'timeline.html?lang=it');
    naviExperience.setAttribute('href', 'timeline.html?lang=it');
    naviPress.setAttribute('href', 'timeline.html?lang=it');
    naviAll.setAttribute('href', 'timeline.html?lang=it');
}
console.log(document.querySelector('.lanactive'));


function setLanguage(e) {


    /*with this if statement I check if what I clicked was the italian button and the italian version is NOT already displayed, or if the english button was pressed and the english version is NOT already displayed, then execute my code, which toggles the class hide*/

    if (itaSample.classList.contains('hide') && e.target.classList.contains('itSet') || engSample.classList.contains('hide') && e.target.classList.contains('enSet')) {
        itaText.forEach((ita) => {
            ita.classList.toggle('hide')
        })
        engText.forEach((eng) => {
            eng.classList.toggle('hide')
        });

//        $('.itSet').toggleClass('lanactive');
//        $('.enSet').toggleClass('lanactive');
    }

}

// get event type
let types = document.querySelectorAll('.subMenu>a');
types[0].addEventListener('click', types[0].setAttribute('type', 'experience'));
types[1].addEventListener('click', types[1].setAttribute('type', 'exhibition'));
types[2].addEventListener('click', types[2].setAttribute('type', 'press'));
types.forEach(chooseType);
function chooseType(t){
    t.addEventListener('click', updateURL);
    function updateURL(){
        let oldHref = t.getAttribute('href');
        let newHref;
        newHref = oldHref + '&type=' + t.getAttribute('type');
        t.setAttribute('href', newHref);
    }
}
/*burger menu */

$('.burger').on('click', () => {
    $('.navMenu').toggleClass('openNav');
    $('.navMenu').toggleClass('closeNav');
})

//$('.timelineNav').on('mouseenter', openSubMenu);
//$('.subMenu').on('mouseleave', closeSubMenu);



function openSubMenu() {
    $('.subMenu').addClass('openMe');
    $('.subMenu').removeClass('closeMe');

}

function closeSubMenu(){
    $('.subMenu').addClass('closeMe');
    $('.subMenu').removeClass('openMe');
}
