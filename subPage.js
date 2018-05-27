let template = document.querySelector('template').content;
let main = document.querySelector('main');
let artPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_en/';
let artPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_it/';

 let urlParams = new URLSearchParams(window.location.search);
  let id= urlParams.get("id");





function fetchArt(lan) {
    lookingForData = true;
    console.log('i am fetching from' + lan)

    fetch(lan+id).then(e => e.json()).then(showArt)

}


function showArt(a) {

    main.innerHTML = ' ';

        /*I define my local variables, in which we have the paths to the different images. by having them in variables it s easier to avoid typos*/
        let clone = template.cloneNode(true);
        let mainPicPath = a.acf.image1.sizes.medium;
        let thumNail1 = a.acf.image2
        let thumNail2 = a.acf.image3
        let thumNail3 = a.acf.image4
        let thumNail4 = a.acf.image5
        let thumNail5 = a.acf.image6



        clone.querySelector('.title').textContent = a.acf.title_of_artwork;
        clone.querySelector('.year').textContent = "(" + a.acf.year_of_work + ")"
        clone.querySelector('.height').textContent = a.acf.dimension_height;
        clone.querySelector('.length').textContent =
            a.acf.dimension_length;
        clone.querySelector('.width').textContent = a.acf.dimension_width;
        clone.querySelector('.sculpture').src = mainPicPath;
        /*ask yan about loop
        for (i=1; 'thumNail'+i == true; i++){
        clone.createElement('img').src = thumNail+i.sizes.medium
        }
       */

        clone.querySelector('.des').nextElementSibling.textContent = a.acf.technical_description;
        clone.querySelector('.con').nextElementSibling.innerHTML = a.acf.concept;


        main.appendChild(clone)

    }



fetchArt(artPathEn);




/*language setting*/


$('.enSet').on('click', ()=>{fetchArt(artPathEn)})

$('.itSet').on('click', ()=>{fetchArt(artPathIt)})
