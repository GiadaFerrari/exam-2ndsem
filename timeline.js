let templateExp = document.querySelector('template.experiences').content;
let templateExhi = document.querySelector('template.exhibition').content;
let templatePress = document.querySelector('template.press').content;
let main = document.querySelector('main');
let expPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/experience_en?_embed';
let expPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/experience_it?_embed';
let exhiPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/exhibition_en?embed';
let exhiPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/exhibition_it?embed';
let pressPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/press_en?_embed';
let pressPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/press_it?_embed';
let lookingForData = false;
let counter = 0

/*REST API*/
function fetchTimeline(exp, fnc) {
    lookingForData = true;
    fetch(exp).then(e => e.json()).then(fnc)

}
/*experience*/

function showExp(exp) {
    exp.forEach((e) => {

        let clone = templateExp.cloneNode(true);
        counter++

        /*the isOdd function I have found on stackoverflow.(https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript) It returns a value of 0 or 1 which can be also read as true or false.*/

        function isOdd(num) {
            return num % 2;
        }

        if (isOdd(counter)) {
            clone.querySelector('article').classList.add('right')
        } else {
            clone.querySelector('article').classList.add('left')

        }







        let startDate = e.acf.start_date.substring(6, 8) + " / " + e.acf.start_date.substring(4, 6) + " / " + e.acf.start_date.substring(0, 4)
        /*this function I took and slightly modified from stackoverflow https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript. It's functionality is to link to a JS built in object and return the current date*/
        /*define today*/
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();


        today = yyyy + mm + dd

        let endDate = e.acf.end_date.substring(6, 8) + " / " + e.acf.end_date.substring(4, 6) + " / " + e.acf.end_date.substring(0, 4)

        clone.querySelector('.startDate').textContent = startDate
        clone.querySelector('.endDate').textContent = endDate

        if (startDate < today < endDate) {
            clone.querySelector('.now').style.cssText = "display:block;"
            clone.querySelector('.startDate').style.cssText = "display:none;"
            clone.querySelector('.endDate').style.cssText = "display:none;"
        }

        clone.querySelector('.job').innerHTML = e.acf.your_role_at_activity
        clone.querySelector('.collaborators').innerHTML = e.acf.what_did_you_do;
        clone.querySelector('.description').innerHTML = e.acf.place






        main.appendChild(clone)

    })
}

/*exhibition*/

function showExhi(exhi) {
    exhi.forEach((e) => {

        let clone = templateExhi.cloneNode(true);
        counter++

        /*the isOdd function I have found on stackoverflow.(https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript) It returns a value of 0 or 1 which can be also read as true or false.*/

        function isOdd(num) {
            return num % 2;
        }

        if (isOdd(counter)) {
            clone.querySelector('article').classList.add('right')
        } else {
            clone.querySelector('article').classList.add('left')

        }

        let startDate = e.acf.start_date.substring(6, 8) + " / " + e.acf.start_date.substring(4, 6) + " / " + e.acf.start_date.substring(0, 4)

        /*define today*/
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();


        today = yyyy + mm + dd

        let endDate = e.acf.end_date.substring(6, 8) + " / " + e.acf.end_date.substring(4, 6) + " / " + e.acf.end_date.substring(0, 4)

        clone.querySelector('.startDate').textContent = startDate
        clone.querySelector('.endDate').textContent = endDate


        clone.querySelector('.title').innerHTML = e.acf.gallery_name;
        clone.querySelector('.address').innerHTML = e.acf.address_of_exhibition

        console.log(e.acf.address_of_exhibition)

        if (e.link_of_exhibition == undefined) {
            console.log('im not defined')
            clone.querySelector('.linkIcon').classList.add('hide')
        } else {
            clone.querySelector('.link').innerHTML = e.acf.link_of_exhibition;
            clone.querySelector('.linkIcon').classList.remove('hide');
        }


        main.appendChild(clone)

    })
}

/*press*/
function showPress(press) {
    press.forEach((e) => {

        let clone = templatePress.cloneNode(true);
        counter++

        /*the isOdd function I have found on stackoverflow.(https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript) It returns a value of 0 or 1 which can be also read as true or false.*/

        function isOdd(num) {
            return num % 2;
        }

        if (isOdd(counter)) {
            clone.querySelector('article').classList.add('right')
        } else {
            clone.querySelector('article').classList.add('left')

        }

        let publicationDate = e.acf.time_of_publication.substring(6, 8) + " / " + e.acf.time_of_publication.substring(4, 6) + " / " + e.acf.time_of_publication.substring(0, 4)

        clone.querySelector('.date').textContent = publicationDate

        clone.querySelector('.title').innerHTML = e.acf.name_of_press
        clone.querySelector('.titleArticle').innerHTML = e.acf.title_of_article

        if (e.link_of_exhibition == undefined) {
            console.log('im not defined')
            clone.querySelector('.linkIcon').classList.add('hide')
        } else {
            clone.querySelector('.link').innerHTML = e.link_of_exhibition;
            clone.querySelector('.linkIcon').classList.remove('hide');
        }



        main.appendChild(clone)
        console.log($(window).height)

        $('.line').css('height', $(window).height)

    })
}


fetchTimeline(expPathEn, showExp)
fetchTimeline(exhiPathEn, showExhi)
fetchTimeline(pressPathEn, showPress)

let line = document.querySelector('.line')

setTimeout(() => {
    line.style.cssText = "height:" + $("main").height() + "px";
}, 2000)


/*scroll*/

window.addEventListener('scroll', checkScroll)


function checkScroll() {
    let scrolled = window.scrollY;
    if (scrolled > 55 && $('.menu').hasClass('fixMe') == false) {
        $('.menu').addClass('fixMe')
    } else if (scrolled < 55 && $('.menu').hasClass('fixMe')) {
        $('.menu').removeClass('fixMe');
    }

}


/*I took this basic function from stackoverflow https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly. It's fucntionality is to reorder numbers in an descendent way, and I will implement it in my code in order to order articles by date.



var numArray = [140000, 104, 99];
numArray.sort(sortNumber);

setTimeout(arrangeOrder, 1000)

let myArray = [];

function arrangeOrder() {
    let articles = document.querySelectorAll('article')

    articles.forEach((a) => {

        let sortDate = a.querySelector('.startDate').innerHTML

        let dates = sortDate.substring(10, 14) + sortDate.substring(5, 7) + sortDate.substring(0, 2)
        myArray.push(dates);


    })
      function compareNumbers(a, b) {
            return a - b;
        }
        console.log(myArray.sort(compareNumbers));

}




/*filters*/

$('.expFilter').on('click', () => {
    main.innerHTML = "<div class='line'></div> "
    fetchTimeline(expPathEn, showExp)
    $('.expFilter').addClass('active');
    $('.exhiFilter').removeClass('active');
    $('.pressFilter').removeClass('active');
    $('.allFilter').removeClass('active');


})
$('.exhiFilter').on('click', () => {
    main.innerHTML = "<div class='line'></div> "
    fetchTimeline(exhiPathEn, showExhi);
    $('.expFilter').removeClass('active');
    $('.exhiFilter').addClass('active');
    $('.pressFilter').removeClass('active');
    $('.allFilter').removeClass('active');

})
$('.pressFilter').on('click', () => {
    main.innerHTML = "<div class='line'></div> "
    fetchTimeline(pressPathEn, showPress)
    $('.expFilter').removeClass('active');
    $('.exhiFilter').removeClass('active');
    $('.pressFilter').addClass('active');
    $('.allFilter').removeClass('active');

})
$('.allFilter').on('click', () => {
    main.innerHTML = "<div class='line'></div> "
    fetchTimeline(expPathEn, showExp)
    fetchTimeline(exhiPathEn, showExhi)
    fetchTimeline(pressPathEn, showPress)
    $('.expFilter').removeClass('active');
    $('.exhiFilter').removeClass('active');
    $('.pressFilter').removeClass('active');
    $('.allFilter').addClass('active');

})





/*set language*/

$('.enSet').on('click', () => {
    main.innerHTML = "     <div class='line'></div>"
    fetchTimeline(expPathEn, showExp)
    fetchTimeline(exhiPathEn, showExhi)
    fetchTimeline(pressPathEn, showPress)
})

$('.itSet').on('click', () => {
    main.innerHTML = " <div class='line'></div>"
    fetchTimeline(expPathIt, showExp)
    fetchTimeline(exhiPathIt, showExhi)

    fetchTimeline(pressPathIt, showPress)
})
