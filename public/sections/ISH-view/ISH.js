const searchInput = document.querySelector('.search-input__input');

searchInput.addEventListener('focus', function() {
    searchInput.closest('.search-input').classList.add('focused');
});

searchInput.addEventListener('blur', function() {
    searchInput.closest('.search-input').classList.remove('focused');
});

const addItemInput = document.querySelector('.add-item__input'); 

addItemInput.addEventListener('focus', function() {
    addItemInput.closest('.add-item').classList.add('focused');
});

addItemInput.addEventListener('blur', function() {
    addItemInput.closest('.add-item').classList.remove('focused');
});







