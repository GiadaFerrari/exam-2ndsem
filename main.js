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
document.querySelector('.timeline').addEventListener('mouseleave', pullUp);
function pullUp(){
    document.querySelector('.subMenu').classList.remove('drop-down');
    document.querySelector('header').style.overflow = 'hidden';
}

// switch hard-code part between en and it
let enButton = document.querySelector('.enSet');
let itButton = document.querySelector('.itSet');
let allIt = document.querySelectorAll('.ita');
let allEn = document.querySelectorAll('.eng');
enButton.addEventListener('click', showEn);
itButton.addEventListener('click', showIt);
function showEn(){
    enButton.className = 'enSet lanactive';
    itButton.className = 'itSet';
    allIt.forEach(function(it){it.className = 'ita hide'});
    allEn.forEach(function(it){it.className = 'eng'});
}
function showIt(){
    itButton.className = 'itSet lanactive';
    enButton.className = 'enSet';
    allIt.forEach(function(it){it.className = 'ita'});
    allEn.forEach(function(it){it.className = 'eng hide'});
}

// get the language setting in the URL
let Urlpassed = new URLSearchParams(window.location.search);
let languagePassed = Urlpassed.get("lang");
// if there is no language argument in the URL, set it to english version
if(!languagePassed || languagePassed == 'en'){
    languagePassed = "en";
    showEn();
} else if (languagePassed && languagePassed == "it"){
    showIt();
}
