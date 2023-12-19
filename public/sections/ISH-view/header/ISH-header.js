//Header Inputs Focus and Blur Events
//Search Input
ishDOM[".search-input__input"].addEventListener('focus', function() {
    ishDOM[".search-input__input"].closest('.search-input').classList.add('focused');
});
ishDOM[".search-input__input"].addEventListener('blur', function() {
    ishDOM[".search-input__input"].closest('.search-input').classList.remove('focused');
});
//Add Item Input
ishDOM[".add-item__input"].addEventListener('focus', function() {
    ishDOM[".add-item__input"].closest('.add-item').classList.add('focused');
});
ishDOM[".add-item__input"].addEventListener('blur', function() {
    ishDOM[".add-item__input"].closest('.add-item').classList.remove('focused');
});