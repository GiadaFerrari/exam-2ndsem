

let main = document.querySelector('main');
let section = document.querySelector('section');
let artPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_en/';
let artPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_it/';

let urlParams = new URLSearchParams(window.location.search);
let id= urlParams.get("id");

// loader
let fetching;
function notFetching(){
    fetching=false
    //loader
let loader = document.querySelector(".loader");
if (fetching ==false){
    console.log("smth")
loader.classList.add("hide");}
}



function fetchArt(lan) {
    fetching = true;
    lookingForData = true;
    console.log('i am fetching from' + lan)

    fetch(lan+id).then(e => e.json()).then(showArt)

}


function showArt(a) {


        /*I define my local variables, in which we have the paths to the different images. by having them in variables it s easier to avoid typos*/
        let mainPicPath = a.acf.image1.sizes.medium;




        // dynamic generate page title using artwork name, plus artist name and type of work, for SEO
        document.title = a.acf.title_of_artwork + '| Gabriele Nicola | Conceptual Sculpture';






        section.querySelector('.title').innerHTML = a.acf.title_of_artwork;
        section.querySelector('.year').textContent = "(" + a.acf.year_of_work + ")"
        section.querySelector('.height').textContent = a.acf.dimension_height;
        section.querySelector('.length').textContent =
            a.acf.dimension_length;
        section.querySelector('.width').textContent = a.acf.dimension_width;
        section.querySelector('.sculpture').src = mainPicPath;
        /*ask yan about loop
        for (i=1; a.acf.image+i !== Nan; i++){
            console.log(i)
         console.log(a.acf.image+i)
        let image = a.acf.image+i
        let imageSize = ".sizes.medium"
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = image+imageSize
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);

        }*/

       if(a.acf.image2 !== false){
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = a.acf.image2.sizes.medium
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);
       }
      if(a.acf.image3 !== false){
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = a.acf.image3.sizes.medium
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);
       }
         if(a.acf.image4 !== false){
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = a.acf.image4.sizes.medium
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);
       }
      if(a.acf.image5 !== false){
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = a.acf.image5.sizes.medium
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);
       }
      if(a.acf.image6 !== false){
        let imgThumb = document.createElement('img')
        let divThumb = document.createElement('div')
        let gallery = section.querySelector('.gallery')

        imgThumb.src = a.acf.image6.sizes.medium
        divThumb.classList.add('mainImg')

            divThumb.appendChild(imgThumb);
            gallery.appendChild(divThumb);
       }

        section.querySelector('.des').nextElementSibling.textContent = a.acf.technical_description;
        section.querySelector('.con').nextElementSibling.innerHTML = a.acf.concept;
        notFetching()
    }



fetchArt(artPathEn);

/*modal*/

    let inquireBtns = document.querySelectorAll('button.inquire')

    inquireBtns.forEach((btn) => {

        btn.addEventListener('click', () => {
            console.log('i m showing modal')
            $('aside').toggleClass('hideModal')
            $('aside').toggleClass('showModal')

        })


    })



$('.closeMe').on('click', closeModal)

function closeModal(){


    $('aside').toggleClass('hideModal')
    $('aside').toggleClass('showModal')

}


/*language setting*/


$('.enSet').on('click', ()=>{fetchArt(artPathEn)})

$('.itSet').on('click', ()=>{fetchArt(artPathIt)})
