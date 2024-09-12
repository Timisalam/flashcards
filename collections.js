const saveCollection = document.querySelector('.btn.btn-saveCollection');
let library = [];
const collectionTitle = document.querySelector('.collection-title');

saveCollections = (title) =>{
    let collection = {
        title: title,
        cards: []
    };
    library.push({data: collection})
    localStorage.setItem('library',JSON.stringify(library));
}

saveCollection.addEventListener('click',e => {
    e.preventDefault();
    console.log('clicked');
    saveCollections(collectionTitle.value);
    collectionTitle.value = '';

})
