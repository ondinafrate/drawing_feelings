// var $target = $('.wrapper');
// inView('.section').on('enter', function(el){
//   var color = $(el).attr('data-background-color');
//   $target.css('background-color', color );
// });




$(function() {
    $("#c1out").load("day1out.html", function() {
        var right = document.getElementById('wheelR');

        var element = SVG.adopt(right);
        element.on('mouseover', function() {
            element.animate().rotate(360);
        });

        var left = document.getElementById('wheelL');
        var wheel = SVG.adopt(left);
        wheel.on('mouseover', function() {
            wheel.animate().rotate(360);
        });
    });
});

$(function() {
    $("#c1in").load("day1in.html");
});

$(function() {
    $("#c2out").load("day2out.html");
});

$(function() {
    $("#c2in").load("day2in.html");
});

$(function() {
    $("#c3out").load("day3out.html");
});

$(function() {
    $("#c3in").load("day3in.html");
});

$(function() {
    $("#c4out").load("day4out.html");
});

$(function() {
    $("#c4in").load("day4in.html");
});

$(function() {
    $("#c5out").load("day5out.html");
});

$(function() {
    $("#c5in").load("day5in.html", function() {
        var bulb1 = document.getElementById('bulb1');

        var element = SVG.adopt(bulb1);
        element.on('mouseover', function() {
            element.animate().rotate(10).after(function(situation) {
              this.animate().rotate(-10);
            })
        });
    });
});


$(function() {
    $("#c6in").load("day6in.html");
});

$(function() {
    $("#c6out").load("day6out.html");
});
//
// $(function() {
// $("#c13in").load("day13in.html");
// });

$(function() {
    $("#c7in").load("day7in.html");
});


$(function() {
    $("#c7out").load("day7out.html");
});


$(function() {
    $("#c8in").load("day8in.html");
});


$(function() {
    $("#c8out").load("day8out.html");
});

$(function() {
    $("#c9in").load("day9in.html");
});


$(function() {
    $("#c9out").load("day9out.html");
});

$(function() {
    $("#c10in").load("day10in.html");
});


$(function() {
    $("#c10out").load("day10out.html");
});

$(function() {
    $("#c11in").load("day11in.html");
});


$(function() {
    $("#c11out").load("day11out.html");
});

$(function() {
    $("#c12in").load("day12in.html");
});


$(function() {
    $("#c12out").load("day12out.html");
});

$(function() {
    $("#c13out").load("day13out.html");
});

$(function() {
    $("#c13in").load("day13in.html");
});

$(function() {
    $("#c14out").load("day14out.html");
});

$(function() {
    $("#c14in").load("day14in.html");
});

$(function() {
    $("#c15out").load("day15out.html");
});

$(function() {
    $("#c15in").load("day15in.html");
});

$(function() {
    $("#c16out").load("day16out.html");
});

$(function() {
    $("#c16in").load("day16in.html");
});

$(function() {
    $("#c17out").load("day17out.html");
});

$(function() {
    $("#c17in").load("day17in.html");
});

$(function() {
    $("#c18out").load("day18out.html");
});

$(function() {
    $("#c18in").load("day18in.html");
});

$(function() {
    $("#c19out").load("day19out.html");
});

$(function() {
    $("#c19in").load("day19in.html");
});

$(function() {
    $("#c20out").load("day20out.html");
});

$(function() {
    $("#c20in").load("day20in.html");
});

$(function() {
    $("#c21out").load("day21out.html");
});

$(function() {
    $("#c21in").load("day21in.html");
});


$(function() {
    $("#c22out").load("day22out.html");
});

$(function() {
    $("#c22in").load("day22in.html");
});

$(function() {
    $("#c23out").load("day23out.html");
});

$(function() {
    $("#c23in").load("day23in.html");
});

$(function() {
    $("#c24out").load("day24out.html");
});

$(function() {
    $("#c24in").load("day24in.html");
});

$(function() {
    $("#c25out").load("day25out.html");
});

$(function() {
    $("#c25in").load("day25in.html");
});

$(function() {
    $("#c26out").load("day26out.html");
});

$(function() {
    $("#c26in").load("day26in.html");
});

$(function() {
    $("#c27out").load("day27out.html");
});

$(function() {
    $("#c27in").load("day27in.html");
});

$(function() {
    $("#c28out").load("day28out.html");
});

$(function() {
    $("#c28in").load("day28in.html");
});

$(function() {
    $("#c29out").load("day29out.html");
});

$(function() {
    $("#c29in").load("day29in.html");
});

$(function() {
    $("#c30out").load("day30out.html");
});

$(function() {
    $("#c30in").load("day30in.html", function() {

    });
});


$(document).ready(function() {
    $(".container").addClass("normal");
    $(".container article").click(function() {
        $(".container").toggleClass("normal");
    });
    $('#nav-container').fullpage({
        scrollOverflow: true,
        menu: "#listDays",

    });
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#listDays a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            //$('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
