let template = document.querySelector('template').content;
let page = 1;
let wrapper = document.querySelector('body');
let lookingForData = false;

// get the language setting in the URL. these 2 are already set in main.js, so remove from here
//let Urlpassed = new URLSearchParams(window.location.search);
//let languagePassed = Urlpassed.get("lang");
// if there is no language argument in the URL, set it to english version
if(!languagePassed){
    languagePassed = "en";
}
// fetch data based on language
let defaultPath = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_' + languagePassed + '?_embed&order=asc&per_page=3&page=';

fetchArt(defaultPath);

function fetchArt(path) {
    lookingForData = true;
    fetch(path + page).then(e => e.json()).then(showArts); // concatinate path and page to form the actual path
}

function showArts(arts){
    // the first time when no more data got fetched from backend, clear the interval of checking the bottom. no more data, no more need for checking
    if(!arts.length){
        clearInterval(checkInterval);
    }
    lookingForData = false;
    arts.forEach((eachArt) => {
        let clone = template.cloneNode(true);
        let largeImagePath = eachArt.acf.image1.sizes.large;
        let thumNail1 = eachArt.acf.image2
        let thumNail2 = eachArt.acf.image3
        let thumNail3 = eachArt.acf.image4
        let thumNail4 = eachArt.acf.image5
        let thumNail5 = eachArt.acf.image6

//        clone.querySelector('section a').href = "Subpage.html?id=" + a.id;

        // set which h3 and Inquire/share to use
        if(languagePassed == "en"){
            clone.querySelector('.description .eng').classList.remove('hide');
            clone.querySelector('.description .ita').classList.add('hide');
            clone.querySelector('.concept .eng').classList.remove('hide');
            clone.querySelector('.concept .ita').classList.add('hide');
            clone.querySelector('.inquire .eng').classList.remove('hide');
            clone.querySelector('.inquire .ita').classList.add('hide');
        } else if(languagePassed == "it"){
            clone.querySelector('.description .ita').classList.remove('hide');
            clone.querySelector('.description .eng').classList.add('hide');
            clone.querySelector('.concept .ita').classList.remove('hide');
            clone.querySelector('.concept .eng').classList.add('hide');
            clone.querySelector('.inquire .ita').classList.remove('hide');
            clone.querySelector('.inquire .eng').classList.add('hide');
        }
        clone.querySelector('h1.title').innerHTML = eachArt.acf.title_of_artwork;
        clone.querySelector('.year-of-creation').textContent = "( " + eachArt.acf.year_of_work + " )"
        clone.querySelector('.height').textContent = eachArt.acf.dimension_height;
        clone.querySelector('.length').textContent =
            eachArt.acf.dimension_length;
        clone.querySelector('.width').textContent = eachArt.acf.dimension_width;
        clone.querySelector('.big-image img').src = largeImagePath;
        // image 2-6 are not required, so check if each of these exsist, great thumbnail only when exsist
        let thumbnailWrapper = clone.querySelector('.small-images');
        if(eachArt.acf.image2 !== false){
            clone.querySelector('.thumbnail:nth-of-type(1) img').src = eachArt.acf.image2.sizes.large;
        }
        if(eachArt.acf.image3 !== false){
            clone.querySelector('.thumbnail:nth-of-type(2) img').src = eachArt.acf.image3.sizes.large;
        }
        if(eachArt.acf.image4 !== false){
            clone.querySelector('.thumbnail:nth-of-type(3) img').src = eachArt.acf.image4.sizes.large;
        }
        if(eachArt.acf.image5 !== false){
            clone.querySelector('.thumbnail:nth-of-type(4) img').src = eachArt.acf.image5.sizes.large;
        }
        if(eachArt.acf.image6 !== false){
            clone.querySelector('.thumbnail:nth-of-type(5) img').src = eachArt.acf.image6.sizes.large;
        }
        clone.querySelector('.description p').textContent = eachArt.acf.technical_description;
        clone.querySelector('.concept p').innerHTML = eachArt.acf.concept;

        wrapper.appendChild(clone);
    })
}


function loadMore() {
    if (bottomVisible() && lookingForData === false) {
        page++;
        fetchArt(defaultPath);
    }
}

let checkInterval = setInterval(loadMore, 100)

// detect when the scrolling has reached the bottom. used for trigger the fetch of next page
function bottomVisible() {
    const scrollY = window.scrollY;
    const visible = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible;
}


/* language setting */
document.querySelector('.enSet').addEventListener('click', changeToEn);
document.querySelector('.itSet').addEventListener('click', changeToIt);
function changeToEn(){
    languagePassed = "en";
    // remove exsisting section from previous fetch
    document.querySelectorAll('section').forEach(function(a){a.remove()});
    let path = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_en?_embed&order=asc&per_page=3&page=';
    fetchArt(path);
}
function changeToIt(){
    languagePassed = "it";
    // remove exsisting section from previous fetch
    document.querySelectorAll('section').forEach(function(a){a.remove()});
    let path = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_it?_embed&order=asc&per_page=3&page=';
    fetchArt(path);
}
