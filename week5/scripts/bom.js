const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter =>{
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChaperList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log(`I like to copy code instead of typing it out myself and trying to understand it.`);
}

function setChaperList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChaperList();
}