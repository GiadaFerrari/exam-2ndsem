let template = document.querySelector('template').content;
let main = document.querySelector('main');
let artPathEn ='http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_en?_embed';
let artPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_it?_embed';
let lookingForData = false;


/*REST API*/

function fetchEvents() {
    lookingForData = true;

    console.log('im fetching')
    fetch(artPathEn).then(e => e.json()).then(showArt)

}


function showArt (art){

    art.forEach((a)=>{
        /*I define my local variables, in which we have the paths to the different images. by having them in variables it s easier to avoid typos*/
        let clone = template.cloneNode(true);
        let mainPicPath = a.acf.image1.sizes.medium;
        let thumNail1 = a.acf.image2.sizes.medium;
        let thumNail2 = a.acf.image3.sizes.medium;
        let thumNail3 = a.acf.image4.sizes.medium;
        let thumNail4 = a.acf.image5.sizes.medium;
        let thumNail5 = a.acf.image6.sizes.medium;

        clone.querySelector('title').textContent = a.title_of_artwork;



















    })

}
