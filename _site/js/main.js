var millisecondsPerYear = 31449600000; // ignoring leap years

$(document).on('ready', function() {
    var age = getCurrentAge();
    $('.what-i-do .age').html(age);
});

function getCurrentAge() {
    var birthday = new Date("1986-10-26T22:28:00");
    return Math.floor((Date.now() - birthday) / millisecondsPerYear);
}