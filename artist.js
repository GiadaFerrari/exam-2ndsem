let main = document.querySelector('main');
let infoPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/about_yourself_en';
let infoPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/about_yourself_it'


function fetchInfo(exp, fnc) {
    console.log('im fetching')
    lookingForData = true;
    fetch(exp).then(e => e.json()).then(fnc)
}

function fillInfo(info){

    info.forEach((i)=>{
    document.querySelector('.metaphor').innerHTML = i.acf.personal_metaphor;

    document.querySelector('.edu').textContent = i.acf.education;

    document.querySelector('.country').textContent = i.acf.address_country;

    document.querySelector('.city').textContent = i.acf.address_city;

    document.querySelector('.email').textContent = i.acf.email_address;


    })


}

fetchInfo(infoPathEn, fillInfo);

/*set language*/

$('.enSet').on('click', () => { fetchInfo(infoPathEn, fillInfo)

})

$('.itSet').on('click', () => {    fetchInfo(infoPathIt, fillInfo)

})
