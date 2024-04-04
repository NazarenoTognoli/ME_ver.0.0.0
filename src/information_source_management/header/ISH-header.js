const informationSourceHandlerDOM = (selector) => document.querySelector(selector) //<--- LOL
//Header Inputs Focus and Blur Events
//Search Input
document.querySelector(".search-input__input").addEventListener('focus', function() {
    document.querySelector(".search-input__input").closest('.search-input').classList.add('focused');
});
document.querySelector(".search-input__input").addEventListener('blur', function() {
    document.querySelector(".search-input__input").closest('.search-input').classList.remove('focused');
});
//Add Item Input
document.querySelector(".add-item__input").addEventListener('focus', function() {
    document.querySelector(".add-item__input").closest('.add-item').classList.add('focused');
});
document.querySelector(".add-item__input").addEventListener('blur', function() {
    document.querySelector(".add-item__input").closest('.add-item').classList.remove('focused');
});