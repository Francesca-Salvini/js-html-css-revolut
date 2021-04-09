// CONSEGNA

// Ricreare la navbar di Revolut 
// Esercizio sul dropdown (menu a tendina)

$(document).ready(function(){

    // quando passo con il mouse sull'elemento li con un "figlio"
    // con classe .dropdown, allora il menu a tendina passa a display:block
$('.menu li').mouseenter(function(){
    $(this).children('.dropdown').addClass('active');
});

    // quando il mouse esce dall'elemento, il menu a tendina scompare
$('.menu li').mouseleave(function(){
    $(this).children('.dropdown').removeClass('active');
});

});