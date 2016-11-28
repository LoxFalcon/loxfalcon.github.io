$(function() {
    $('#bioButton').click(function() {
        var pos = $('#perfil').offset().top;
        $('html, body').animate({'scrollTop' : pos}, 1000);
            return false;
    });
    $('#skillsButton').click(function() {
        var pos = $('#services').offset().top;
        $('html, body').animate({'scrollTop' : pos}, 1000);
            return false;
    });
    $('#portfolioButton').click(function() {
        var pos = $('#projects').offset().top;
        $('html, body').animate({'scrollTop' : pos}, 1000);
            return false;
    });
    $('#contactButton').click(function() {
        var pos = $('footer').offset().top;
        $('html, body').animate({'scrollTop' : pos}, 1000);
            return false;
    });
});