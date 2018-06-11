(function(){
    var tabs = document.querySelectorAll('.tabs-link a');

    var afficheContenuOnglet = function (a) {
        var div = a.parentNode.parentNode.parentNode;
        var li = a.parentNode;

        if (li.classList.contains('active')) {
            return false;
        }

        //On retire la class active sur l'element qui est deja active
        div.querySelector('.tabs-link .active').classList.remove('active');
        //On ajoute la classactive sur le lien actuel
        li.classList.add('active')

        //On retire la classe active au contenu qui actuellement la classe active 
        div.querySelector('.tab-content.active').classList.remove('active');

        //On ajoute la classe active au contenu en cour
        div.querySelector(a.getAttribute('href')).classList.add('active');
    }
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            afficheContenuOnglet(this);
        })
    })

    /**
     * pour afficher automatique le contenu correcte apres reactaulisation 
     */

    var hash = window.location.hash;
    var a = document.querySelector('a[href="' + hash + '"]');

    if (a !== null && !a.parentNode.classList.contains('active')) {
        afficheContenuOnglet(a);
    }
})()