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


// quando il mouse passa sopra IT, la freccia si sposta verso l'alto
$('li.lang').mouseenter(function() {
    var chevron = $(this).children('i').removeClass('fa-chevron-down');
    chevron.addClass('fa-chevron-up');
});
// quando il mouse esce da IT, la freccia torna verso il basso
$('li.lang').mouseleave(function() {
    var chevron = $(this).children('i').removeClass('fa-chevron-up');
    chevron.addClass('fa-chevron-down');
 });



});