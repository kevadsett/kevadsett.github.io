var millisecondsPerYear = 31449600000; // ignoring leap years

$(document).on('ready', function() {
    var age = getCurrentAge();
    $('.what-i-do .age').html(age);
    
    $('.menu-bar a').on('click', function(event) {
        event.preventDefault();
        toggleMenu();
    });
});

function getCurrentAge() {
    var birthday = new Date("1986-10-26T22:28:00");
    return Math.floor((Date.now() - birthday) / millisecondsPerYear);
}

function toggleMenu() {
    if($('.menu-bar').hasClass('hidden')) {
        $('.nav-bar ul').stop().slideDown();
        $('.menu-bar').removeClass('hidden');
    } else {
        $('.nav-bar ul').stop().slideUp();
        $('.menu-bar').addClass('hidden');
    }
}