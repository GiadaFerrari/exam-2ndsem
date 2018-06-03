// burger menu
let burger = document.querySelector('img.burger');
burger.addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu(){
    document.querySelector('nav').classList.toggle('expanded');
    document.querySelector('nav').classList.toggle('collapse');
}

// drop down menu
document.querySelector('.timeline').addEventListener('mouseenter', dropDown);
function dropDown(){
    document.querySelector('.subMenu').classList.add('drop-down');
    document.querySelector('header').style.overflow = 'visible';
}
document.querySelector('.timeline').addEventListener('mouseleave', pullUp);  // use mouseleave as trigger can cause issues when testing mobile version on computer. on real mobile it's fine, since there is no mouse
function pullUp(){
    document.querySelector('.subMenu').classList.remove('drop-down');
    document.querySelector('header').style.overflow = 'hidden';
}

// switch hard-code part between en and it with lang buttons
let enButton = document.querySelector('.enSet');
let itButton = document.querySelector('.itSet');
let allIta = document.querySelectorAll('.ita');
let allEng = document.querySelectorAll('.eng');
enButton.addEventListener('click', showEn);
itButton.addEventListener('click', showIt);
function showEn(){
    enButton.className = 'enSet lanactive';
    itButton.className = 'itSet';
    allIta.forEach(function(it){it.className = 'ita hide'});
    allEng.forEach(function(it){it.className = 'eng'});
}
function showIt(){
    itButton.className = 'itSet lanactive';
    enButton.className = 'enSet';
    allIta.forEach(function(it){it.className = 'ita'});
    allEng.forEach(function(it){it.className = 'eng hide'});
}

/*
// get the language setting in the URL
let Urlpassed = new URLSearchParams(window.location.search);
let languagePassed = Urlpassed.get("lang");
// if there is no language argument in the URL, set it to english version
if(!languagePassed || languagePassed == 'en'){
    languagePassed = "en";
    showEn();
    console.log(document.querySelectorAll('.navMenu span'));
} else if (languagePassed && languagePassed == "it"){
    //showIt();
    let allEng = document.querySelectorAll('.navMenu span.eng');
    console.log(allEng);
    allEng.forEach(addHide);
    function addHide(e){
        e.className='eng';
    alert('t');
    }
    let allIta = document.querySelectorAll('.navMenu span.ita');
    console.log(allIta);
    allIta.forEach(removeHide);
    function removeHide(e){
        e.className='ita';
    alert('t');
    }
}
*/
