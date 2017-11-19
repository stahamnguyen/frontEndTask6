var controller = (function() {
    
    const DOMString = {
        addBtnID: 'add',
        changeBtnID: 'change',
        toggleBtnID: 'toggle',
        redClass: 'red',
        blueClass: 'blue',
        greenClass: 'green'
    }
    
    var addBtn = document.getElementById(DOMString.addBtn);
    var pTags = document.getElementsByTagName('p');
    var firstPTag = pTags[0];
    var secondPTag = pTags[1];
    var thirdPTag = pTags[2];
    
    document.getElementById(DOMString.addBtnID).addEventListener('click', function() {
        firstPTag.classList.add(DOMString.redClass);
    });
    
    document.getElementById(DOMString.changeBtnID).addEventListener('click', function() {
        secondPTag.classList.toggle(DOMString.redClass);
        secondPTag.classList.toggle(DOMString.blueClass);
    });
    
    document.getElementById(DOMString.toggleBtnID).addEventListener('click', function() {
        thirdPTag.classList.toggle(DOMString.greenClass);
    });
    
})();