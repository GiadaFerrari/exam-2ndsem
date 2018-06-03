

function sortAll(){
    let wrapper = document.querySelector('main.timeline');
    let neetSortS = document.querySelectorAll('.needSort');
    let sortArray = [];
    neetSortS.forEach(addToArray);
    function addToArray(s){
        sortArray.push(s);
    }
    sortArray.sort(// sort() gives "in place" result, read more on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        function (a,b){
            return b.getAttribute('date-string') - a.getAttribute('date-string');
        }
    )
    for(let i=0; i<sortArray.length; i++){
        wrapper.appendChild(sortArray[i]);
    }
    let sortedEven = document.querySelectorAll('.needSort:nth-of-type(2n)');
    sortedEven.forEach(e => e.classList.add('right'));
    let sortedOdd = document.querySelectorAll('.needSort:nth-of-type(2n+1)');
    sortedOdd.forEach(e => e.classList.add('left'));

}
setTimeout(sortAll, 2000);
