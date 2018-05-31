let main = document.querySelector('main');

// get the language setting in the URL
let Urlpassed = new URLSearchParams(window.location.search);
let languagePassed = Urlpassed.get("lang");
// fetch data based on language setting in the url
let defaultPath = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/about_yourself_' + languagePassed;
fetchInfo(defaultPath, fillInfo);

function fetchInfo(exp, fnc) {
    lookingForData = true;
    fetch(exp).then(e => e.json()).then(fnc)
}

// used for clicking on language buttons
let infoPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/about_yourself_en';
let infoPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/about_yourself_it'

function fillInfo(info){

    info.forEach((i)=>{
    document.querySelector('.metaphor').innerHTML = i.acf.personal_metaphor;

    document.querySelector('.edu').textContent = i.acf.education;

    document.querySelector('.country').textContent = i.acf.address_country;

    document.querySelector('.city').textContent = i.acf.address_city;

    document.querySelector('.email').textContent = i.acf.email_address;


    })


}


/*set language*/

$('.enSet').on('click', () => { fetchInfo(infoPathEn, fillInfo)

})

$('.itSet').on('click', () => { fetchInfo(infoPathIt, fillInfo)

})
