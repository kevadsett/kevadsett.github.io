var millisecondsPerYear = 31449600000; // ignoring leap years

function toggleForMobile($item) {
    var width = window.innerWidth;
    if (width < 725){
        if(!$item.hasClass('hidden')) {
            hideItem($item, false);
        }
    } else {
        if($item.hasClass('hidden')) {
            showItem($item, false);
        }
    }
}

function onWindowResize() {
    toggleForMobile($('.nav-bar ul'));
    toggleForMobile($('ol.chapters'));
}

function getCurrentAge() {
    var birthday = new Date("1986-10-26T22:28:00");
    return Math.floor((Date.now() - birthday) / millisecondsPerYear);
}

function getCopyrightYear() {
    var now = new Date();
    copyrightYearString = "2013";
    if (now.getFullYear().toString() !== "2013") {
        copyrightYearString += " – " + now.getFullYear();
    }
    return copyrightYearString;
}

function toggleItem($item) {
    if($item.hasClass('hidden')) {
        showItem($item, true);
    } else {
        hideItem($item, true);
    }
}

function showItem($item, slide) {
    if(slide) {
        $item.stop().slideDown(200);
    } else {
        $item.show();
    }
    $item.removeClass('hidden');
}

function hideItem($item, slide) {
    if(slide) {
        $item.stop().slideUp(200);
    } else {
        $item.hide();
    }
    $item.addClass('hidden');
}

$(document).on('ready', function() {
    $('.what-i-do .age').html(getCurrentAge());
    $('.copyright .year').html(getCopyrightYear());
    
    $('.menu-bar a').on('click', function(event) {
        event.preventDefault();
        toggleItem($('.nav-bar ul'));
    });
    onWindowResize();
    $(window).resize(onWindowResize);
});