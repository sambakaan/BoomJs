
// var button = document.querySelector('button');
//     button.addEventListener('click',function(){
//         button.nextElementSibling.classList.add('visible');
//         button.parentNode.removeChild(this);
//     })


var createStrucspoiler = function(spoiler){

    //create d'un button 
    var button = document.createElement('button');
    button.textContent = "Afficher Spoiler...";
    
    //creation du apan pour le contenu 
    var span = document.createElement('span');
    span.className = "spoiler-content";
    span.innerHTML = spoiler.textContent;
    
    //Ajout des Elements aux niveaux du DOM
    spoiler.textContent = ""
    spoiler.appendChild(button);
    spoiler.appendChild(span);

    button.addEventListener('click',function(){
        this.parentNode.removeChild(button);
        span.classList.add('visible');
    })
}

var spoilers = document.querySelectorAll('.spoiler');
for (let i = 0; i < spoilers.length; i++) {
    createStrucspoiler(spoilers[i]) ;
}