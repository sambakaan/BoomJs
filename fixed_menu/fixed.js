(function(){

    //Retourne la position de la page en Y
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    }

    //LEs variables 
    var menu = document.querySelector('.menu');
    var rect = menu.getBoundingClientRect();
    var top = rect.top + scrollY();
    var fake = document.createElement('div');
    fake.style.width = rect.width + "px";
    fake.style.height = rect.height + "px";

    //LEs fonctions 
    var onScroll = function () {
        var hasScrollClass = menu.classList.contains('fixed');
        if (scrollY() > top && !hasScrollClass) {
            menu.classList.add('fixed');
            menu.style.width = rect.with + "px";
            menu.parentNode.insertBefore(fake,menu);
        } else if (scrollY() < top && hasScrollClass) {
            menu.classList.remove('fixed');
            menu.parentNode.removeChild(fake);
        }
    }

    var onResize = function(){
        // menu.style.width = "auto";
        // menu.classList.remove('fixed');
        // fake.style.display = "none";
        // rect = menu.getBoundingClientRect();
        // top = rect.top + scrollY();
        // fake.style.width = rect.width + "px";
        // fake.style.height = rect.height + "px";
        // fake.style.display = "block";
        // onScroll();

    }

    // Les listennes 
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize',onResize);
})();
