let templateExp = document.querySelector('template.experiences').content;
let templateExhi = document.querySelector('template.exhibition').content;
let templatePress = document.querySelector('template.press').content;
let main = document.querySelector('main');
let expPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/experience_en?_embed';
let expPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/experience_it?_embed';
let exhiPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/exhibition_en?embed';
let exhiPathIt = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/exhibition_it?embed';
let pressPathEn = 'http://designki.dk/CMS/wordpress/wp-json/wp/v2/press_it?_embed';
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

        clone.querySelector('.job').textContent = e.acf.your_role_at_activity
        clone.querySelector('.collaborators').textContent = e.acf.what_did_you_do;
        clone.querySelector('.description').textContent = e.acf.place






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

        clone.querySelector('.title').textContent = ""
        clone.querySelector('.year').textContent = ""
        clone.querySelector('.address').textContent = ""
        /*if ( /*link exhists ) {
            clone.querySelector('.link').textContent =
        } */


        main.appendChild(clone)

    })
}

/*press*/
function showPress(press) {
    press.forEach((p) => {

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

        let publicationDate = p.acf.start_date.substring(6, 8) + " / " + e.acf.start_date.substring(4, 6) + " / " + e.acf.start_date.substring(0, 4)

        clone.querySelector('.date').textContent = publicationDateDate

        clone.querySelector('.title').textContent = ""
        clone.querySelector('.year').textContent = "(" + ")"
        clone.querySelector('.titleArticle').textContent = ""
        /*if ( /*link exhists ) {
            clone.querySelector('.link').textContent =
        } */


        main.appendChild(clone)

    })
}


fetchTimeline(expPathEn, showExp)
fetchTimeline(expPathEn, showExp)
fetchTimeline(expPathEn, showExp)

/*fetchTimeline(exhiPathEn, showExhi)
fetchTimeline(pressPathEn, showPress)*/

/*filters*/

$('.expFilter').on('click', () => {
    main.innerHTML = " "
    fetchTimeline(expPathEn, showExp)})
$('.exhiFilter').on('click', () => {
    main.innerHTML = " "
    fetchTimeline(exhiPathEn, showExhi)})
$('.pressFilter').on('click', ()=> {
    main.innerHTML = " "
    fetchTimeline(pressPathEn, showPress)
})



/*set language*/

$('.enSet').on('click', () => {
    main.innerHTML = " "
    fetchTimeline(expPathEn, showExp)
    /*fetchTimeline(exhiPathEn, showExhi)
fetchTimeline(pressPathEn, showPress)*/
})

$('.itSet').on('click', () => {
    main.innerHTML = " "
    fetchTimeline(expPathIt, showExp)
    /*fetchTimeline(exhiPathIt, showExhi)
fetchTimeline(pressPathIt, showPress)*/
})
