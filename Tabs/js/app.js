(function(){
    var tabs = document.querySelectorAll('.tabs-link a');

    var afficheContenuOnglet = function (a, animations) {
        if (animations == undefined) {
            animations = true;
        }

        var divParent = a.parentNode.parentNode.parentNode;
        var li = a.parentNode;
        var activeTab = divParent.querySelector('.tab-content.active');
        var aAfficher = divParent.querySelector(a.getAttribute('href'));
        if (li.classList.contains('active')) {
            return false;
        }

        //On retire la class active sur l'element qui est deja active
        divParent.querySelector('.tabs-link .active').classList.remove('active');
        //On ajoute la classactive sur le lien actuel
        li.classList.add('active')


        //Effet animation des tabs 
         var transitionEffect = function () {
            this.classList.remove('active');
            this.classList.remove('fade');
            aAfficher.classList.add('active');
            aAfficher.classList.add('fade');
            aAfficher.offsetWith
            aAfficher.classList.add('in');
            activeTab.removeEventListener('transitionend', transitionEffect)
         }

        //affectation de l'affichage 
        if (animations) {
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            activeTab.addEventListener('transitionend', transitionEffect)
        }else{
            aAfficher.classList.add('active');
            activeTab.classList.remove('active');
        }
    }


    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            afficheContenuOnglet(this,true);
        })
    })

    /**
     * pour afficher automatique le contenu correcte apres reactaulisation 
     */

    var reloadContentOnHashChange = function(e){
        var hash = window.location.hash;
        var a = document.querySelector('a[href="' + hash + '"]');
        if (a !== null && !a.parentNode.classList.contains('active')) {
            afficheContenuOnglet(a, e !== undefined);
        }
    }

    window.addEventListener('hashchange', reloadContentOnHashChange);
    reloadContentOnHashChange();

})()