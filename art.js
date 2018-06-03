

let template = document.querySelector('template').content;
let page = 1;
let main = document.querySelector('main');
let lookingForData = false;



// get the language setting in the URL
let Urlpassed = new URLSearchParams(window.location.search);
let languagePassed = Urlpassed.get("lang");
// fetch data based on language setting in the url
let defaultPath = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_' + languagePassed + '?_embed&order=asc&per_page=3&page=';
fetchArt(defaultPath);




let artPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_en?_embed&order=asc&per_page=3&page=';
let artPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/artwork_it?_embed&order=asc&per_page=3&page=';


/*REST API*/

function fetchArt(path) {
    lookingForData = true;
    fetch(path + page).then(e => e.json()).then(showArt)

}


function showArt(art) {
    lookingForData = false;


    art.forEach((a) => {
        /*I define my local variables, in which we have the paths to the different images. by having them in variables it s easier to avoid typos*/
        let clone = template.cloneNode(true);
        let mainPicPath = a.acf.image1.sizes.large;
        let thumNail1 = a.acf.image2
        let thumNail2 = a.acf.image3
        let thumNail3 = a.acf.image4
        let thumNail4 = a.acf.image5
        let thumNail5 = a.acf.image6

        clone.querySelector('section a').href = "Subpage.html?id=" + a.id;

        clone.querySelector('.title').textContent = a.acf.title_of_artwork;
        clone.querySelector('.year').textContent = "(" + a.acf.year_of_work + ")"
        clone.querySelector('.height').textContent = a.acf.dimension_height;
        clone.querySelector('.length').textContent =
            a.acf.dimension_length;
        clone.querySelector('.width').textContent = a.acf.dimension_width;
        clone.querySelector('.sculpture').src = mainPicPath;
        /*ask yan about loop
        for (i=1; 'thumNail'+i == true; i++){
        clone.createElement('img').src = thumNail+i.sizes.thumbnail
        }
       */
        if (a.acf.image2 !== false) {
            let imgThumb = document.createElement('img')
            let divThumb = document.createElement('div')
            let thumbGallery = clone.querySelector('.thumbNails')

            imgThumb.src = a.acf.image2.sizes.large
            divThumb.classList.add('thumbImg')
            divThumb.appendChild(imgThumb);
            thumbGallery.appendChild(divThumb);
        }
        if (a.acf.image3 !== false) {
            let imgThumb = document.createElement('img')
            let divThumb = document.createElement('div')
            let thumbGallery = clone.querySelector('.thumbNails')

            imgThumb.src = a.acf.image3.sizes.large
            divThumb.classList.add('thumbImg')

            divThumb.appendChild(imgThumb);
            thumbGallery.appendChild(divThumb);
        }
        if (a.acf.image4 !== false) {
            let imgThumb = document.createElement('img')
            let divThumb = document.createElement('div')
            let thumbGallery = clone.querySelector('.thumbNails')

            imgThumb.src = a.acf.image4.sizes.large
            divThumb.classList.add('thumbImg')
            divThumb.appendChild(imgThumb);
            thumbGallery.appendChild(divThumb);
        }
        if (a.acf.image5 !== false) {
            let imgThumb = document.createElement('img')
            let divThumb = document.createElement('div')
            let thumbGallery = clone.querySelector('.thumbNails')

            imgThumb.src = a.acf.image5.sizes.large
            divThumb.classList.add('thumbImg')
            divThumb.appendChild(imgThumb);
            thumbGallery.appendChild(divThumb);
        }
        if (a.acf.image6 !== false) {
            let imgThumb = document.createElement('img')
            let divThumb = document.createElement('div')
            let thumbGallery = clone.querySelector('.thumbNails')

            imgThumb.src = a.acf.image6.sizes.large
            divThumb.classList.add('thumbImg')
            divThumb.appendChild(imgThumb);
            thumbGallery.appendChild(divThumb);
        }


        clone.querySelector('.des').nextElementSibling.textContent = a.acf.technical_description;
        clone.querySelector('.con').nextElementSibling.innerHTML = a.acf.concept;


        main.appendChild(clone)

    })

}




/*language setting*/
$('.enSet').on('click', () => {
    main.innerHTML = " "

    fetchArt(artPathEn)
})

$('.itSet').on('click', () => {
    main.innerHTML = ""
    fetchArt(artPathIt)
})


/*modal*/
setTimeout(setInquire, 2000)

function setInquire() {
    let inquireBtns = document.querySelectorAll('button.inquire')

    inquireBtns.forEach((btn) => {

        btn.addEventListener('click', () => {
            console.log('i m showing modal')
            $('aside').toggleClass('hideModal')
            $('aside').toggleClass('showModal')

        })


    })
}


$('.submit').on('click', closeModal)
$('.closeMe').on('click', closeModal)

function closeModal() {


    $('aside').toggleClass('hideModal')
    $('aside').toggleClass('showModal')

}

/*slideshow*/
setTimeout(placeClick, 2000)

function placeClick() {

    let sections = document.querySelectorAll('section')

    sections.forEach((s) => {
        let imgsArray = [];

        s.querySelectorAll(".gallery img").forEach((img) => {
            let imgSrc = img.src;
            imgsArray.push(imgSrc);
            img.addEventListener('click', function () {
                openSlide(imgSrc)
            })
            /*how to find out the indedx ofeach pic*/

        })

        function openSlide(src) {
            $('.slideshow').addClass('openSlideshow');
            $('.slideshow').removeClass('closeSlideshow');
            document.querySelector('.imgSlide').src = src;
            $('.bckBtn').on('click', function () {
                scrollSlideBack()
            });
              $('.frwBtn').on('click', function () {
                scrollSlideFrw()
            });
        }

        function scrollSlideFrw() {
            console.log('FRW me')
            let arrayLength = imgsArray.length
            let index = imgsArray.indexOf(document.querySelector('.imgSlide').src);
            console.log(index)
            if (index === arrayLength-1) {

                let newIndex = 0;
                console.log(newIndex)
                document.querySelector('.imgSlide').src = imgsArray[newIndex]

            } else {


             document.querySelector('.imgSlide').src = imgsArray[index+1];
            }



        }
        function scrollSlideBack() {
            let arrayLength = imgsArray.length
            let index = imgsArray.indexOf(document.querySelector('.imgSlide').src);
            if (index === 0) {

                let newIndex = index + arrayLength - 1;
                console.log(newIndex)
                document.querySelector('.imgSlide').src = imgsArray[newIndex]

            } else {


             document.querySelector('.imgSlide').src = imgsArray[index-1];
            }



        }

    })

}

$('.closeMeSlide').on('click', () => {
    $('.slideshow').removeClass('openSlideshow');
    $('.slideshow').addClass('closeSlideshow');
})


/*infinite scroll

this function was given to us by JOnas during the semester to calculate when we reached the bottom of the page*/

function loadMore() {


    if (bottomVisible() && lookingForData === false) {
        page++
        fetchArt(defaultPath);
    }
}

setInterval(loadMore, 100)

if (bottomVisible()) {
    clearInterval(loadMore, 100)
};

function bottomVisible() {
    const scrollY = window.scrollY;
    const visible = document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible;

}
