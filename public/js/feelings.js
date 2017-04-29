var happyFeelingsIn = 0;
var happyFeelingsOut = 0;
var tiredFeelingsIn = 0;
var tiredFeelingsOut = 0;
var gratefulFeelingsIn = 0;
var gratefulFeelingsOut = 0;
var productiveFeelingsIn = 0;
var productiveFeelingsOut = 0;
var excitedFeelingsOut = 0;
var excitedFeelingsIn = 0;
var sadFeelingsOut = 0;
var sadFeelingsIn = 0;
var stressedFeelingsOut = 0;
var stressedFeelingsIn = 0;
var confidentFeelingsOut = 0;
var confidentFeelingsIn = 0;
var inspiredFeelingsOut = 0;
var inspiredFeelingsIn = 0;
var exhaustedFeelingsOut = 0;
var exhaustedFeelingsIn = 0;
var enlightenedFeelingsOut = 0;
var enlightenedFeelingsIn = 0;
var hungryFeelingsOut = 0;
var hungryFeelingsIn = 0;
var worriedFeelingsOut = 0;
var worriedFeelingsIn = 0;
var relaxedFeelingsOut = 0;
var relaxedFeelingsIn = 0;
var emotionalFeelingsOut = 0;
var emotionalFeelingsIn = 0;
var indecisiveFeelingsOut = 0;
var indecisiveFeelingsIn = 0;
var accomplishedFeelingsOut = 0;
var accomplishedFeelingsIn = 0;
var frustratedFeelingsOut = 0;
var frustratedFeelingsIn = 0;
var balancedFeelingsOut = 0;
var balancedFeelingsIn = 0;
var positiveFeelingsOut = 0;
var positiveFeelingsIn = 0;
var annoyedFeelingsOut = 0;
var annoyedFeelingsIn = 0;
var hurtFeelingsOut = 0;
var hurtFeelingsIn = 0;
var lostFeelingsOut = 0;
var lostFeelingsIn = 0;
var inloveFeelingsOut = 0;
var inloveFeelingsIn = 0;
var doubtfulFeelingsOut = 0;
var doubtfulFeelingsIn = 0;

$.getJSON("/api/get", function(data) {

    var dataList = data.feelings;
    // console.log(dataList);
    dataList.forEach(function(e, i) {
        console.log(e);

        if (e.feelingsout.includes('happy')) {
            happyFeelingsOut += 1;
        }

        if (e.feelingsin.includes('happy')) {
            happyFeelingsIn += 1;
        }

        if (e.feelingsout.includes('tired')) {
            tiredFeelingsOut += 1;
        }

        if (e.feelingsin.includes('tired')) {
            tiredFeelingsIn += 1;
        }

        if (e.feelingsout.includes('grateful')) {
            gratefulFeelingsOut += 1;
        }

        if (e.feelingsin.includes('grateful')) {
            gratefulFeelingsIn += 1;
        }

        if (e.feelingsout.includes('productive')) {
            productiveFeelingsOut += 1;
        }

        if (e.feelingsin.includes('productive')) {
            productiveFeelingsIn += 1;
        }

        if (e.feelingsout.includes('excited')) {
            excitedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('excited')) {
            excitedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('sad')) {
            sadFeelingsOut += 1;
        }

        if (e.feelingsin.includes('sad')) {
            sadFeelingsIn += 1;
        }

        if (e.feelingsout.includes('stressed')) {
            stressedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('stressed')) {
            stressedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('confident')) {
            confidentFeelingsOut += 1;
        }

        if (e.feelingsin.includes('confident')) {
            confidentFeelingsIn += 1;
        }

        if (e.feelingsout.includes('inspired')) {
            inspiredFeelingsOut += 1;
        }

        if (e.feelingsin.includes('inspired')) {
            inspiredFeelingsIn += 1;
        }

        if (e.feelingsout.includes('exhausted')) {
            exhaustedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('exhausted')) {
            exhaustedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('enlightened')) {
            enlightenedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('enlightened')) {
            enlightenedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('hungry')) {
            hungryFeelingsOut += 1;
        }

        if (e.feelingsin.includes('hungry')) {
            hungryFeelingsIn += 1;
        }

        if (e.feelingsout.includes('worried')) {
            worriedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('worried')) {
            worriedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('relaxed')) {
            relaxedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('relaxed')) {
            relaxedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('emotional')) {
            emotionalFeelingsOut += 1;
        }

        if (e.feelingsin.includes('emotional')) {
            emotionalFeelingsIn += 1;
        }

        if (e.feelingsout.includes('indecisive')) {
            indecisiveFeelingsOut += 1;
        }

        if (e.feelingsin.includes('indecisive')) {
            indecisiveFeelingsIn += 1;
        }

        if (e.feelingsout.includes('accomplished')) {
            accomplishedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('accomplished')) {
            accomplishedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('frustrated')) {
            frustratedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('frustrated')) {
            frustratedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('balanced')) {
            balancedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('balanced')) {
            balancedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('positive')) {
            positiveFeelingsOut += 1;
        }

        if (e.feelingsin.includes('positive')) {
            positiveFeelingsIn += 1;
        }

        if (e.feelingsout.includes('annoyed')) {
            annoyedFeelingsOut += 1;
        }

        if (e.feelingsin.includes('annoyed')) {
            annoyedFeelingsIn += 1;
        }

        if (e.feelingsout.includes('hurt')) {
            hurtFeelingsOut += 1;
        }

        if (e.feelingsin.includes('hurt')) {
            hurtFeelingsIn += 1;
        }

        if (e.feelingsout.includes('lost')) {
            lostFeelingsOut += 1;
        }

        if (e.feelingsin.includes('lost')) {
            lostFeelingsIn += 1;
        }

        if (e.feelingsout.includes('inlove')) {
            inloveFeelingsOut += 1;
        }

        if (e.feelingsin.includes('inlove')) {
            inloveFeelingsIn += 1;
        }

        if (e.feelingsout.includes('doubtful')) {
            doubtfulFeelingsOut += 1;
        }

        if (e.feelingsin.includes('doubtful')) {
            doubtfulFeelingsIn += 1;
        }
    })


    for (var i = 0; i < happyFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/lightbulb.png" width="100%"/></div>'
        $('#happyOut').append(htmlToAppend);
    }

    for (var i = 0; i < happyFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/lightbulb.png" width="100%"/></div>'
        $('#happyIn').append(htmlToAppend);
    }

    for (var i = 0; i < tiredFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/turtle1.png" width="100%"/></div>'
        $('#tiredOut').append(htmlToAppend);
    }

    for (var i = -1; i < tiredFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-4 no-pad"><img src = "./img/turtle1.png" width="100%" style = "visibility:hidden"/></div>'
        $('#tiredIn').append(htmlToAppend);
    }

    for (var i = 0; i < gratefulFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/globe.png" width="100%"/></div>'
        $('#gratefulOut').append(htmlToAppend);
    }

    for (var i = 0; i < gratefulFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/globe.png" width="100%"/></div>'
        $('#gratefulIn').append(htmlToAppend);
    }

    for (var i = 0; i < productiveFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/cup.png" width="100%"/></div>'
        $('#productiveOut').append(htmlToAppend);
    }

    for (var i = 0; i < productiveFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/cup.png" width="100%"/></div>'
        $('#productiveIn').append(htmlToAppend);
    }

    for (var i = 0; i < excitedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/button2.png" width="100%"/></div>'
        $('#excitedOut').append(htmlToAppend);
    }

    for (var i = 0; i < excitedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/button2.png" width="100%"/></div>'
        $('#excitedIn').append(htmlToAppend);
    }

    for (var i = 0; i < sadFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cube.png" width="100%"/></div>'
        $('#sadOut').append(htmlToAppend);
    }

    for (var i = 0; i < sadFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cube.png" width="100%"/></div>'
        $('#sadIn').append(htmlToAppend);
    }

    for (var i = 0; i < stressedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/subway.png" width="100%"/></div>'
        $('#stressedOut').append(htmlToAppend);
    }

    for (var i = -1; i < stressedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/subway.png" width="100%" style = "visibility:hidden"/></div>'
        $('#stressedIn').append(htmlToAppend);
    }

    for (var i = 0; i < confidentFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/bonsai.png" width="100%"/></div>'
        $('#confidentOut').append(htmlToAppend);
    }

    for (var i = 0; i < confidentFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/bonsai.png" width="100%"/></div>'
        $('#confidentIn').append(htmlToAppend);
    }

    for (var i = 0; i < inspiredFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/bike.png" width="100%"/></div>'
        $('#inspiredOut').append(htmlToAppend);
    }

    for (var i = 0; i < inspiredFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/bike.png" width="100%"/></div>'
        $('#inspiredIn').append(htmlToAppend);
    }

    for (var i = 0; i < exhaustedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/penguin.png" width="100%"/></div>'
        $('#exhaustedOut').append(htmlToAppend);
    }

    for (var i = -1; i < exhaustedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/penguin.png" width="100%" style = "visibility:hidden"/></div>'
        $('#exhaustedIn').append(htmlToAppend);
    }

    // for (var i = -1; i < enlightenedFeelingsOut; i++) {
    //     var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cherry.png" width="100%" style = "visibility:hidden"/></div>'
    //     $('#enlightenedOut').append(htmlToAppend);
    // }
    //
    // for (var i = 0; i < enlightenedFeelingsIn; i++) {
    //     var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cherry.png" width="100%"/></div>'
    //     $('#enlightenedIn').append(htmlToAppend);
    // }

    for (var i = 0; i < hungryFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/cow.png" width="100%"/></div>'
        $('#hungryOut').append(htmlToAppend);
    }

    for (var i = -1; i < hungryFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/cow.png" width="100%" style = "visibility:hidden"/></div>'
        $('#hungryIn').append(htmlToAppend);
    }

    for (var i = 0; i < worriedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/chess.png" width="100%"/></div>'
        $('#worriedOut').append(htmlToAppend);
    }

    for (var i = 0; i < worriedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/chess.png" width="100%"/></div>'
        $('#worriedIn').append(htmlToAppend);
    }

    for (var i = 0; i < relaxedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/book.png" width="100%"/></div>'
        $('#relaxedOut').append(htmlToAppend);
    }

    for (var i = 0; i < relaxedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/book.png" width="100%"/></div>'
        $('#relaxedIn').append(htmlToAppend);
    }

    for (var i = 0; i < emotionalFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/letter.png" width="100%"/></div>'
        $('#emotionalOut').append(htmlToAppend);
    }

    for (var i = 0; i < emotionalFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/letter.png" width="100%"/></div>'
        $('#emotionalIn').append(htmlToAppend);
    }

    for (var i = 0; i < indecisiveFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/park.png" width="100%"/></div>'
        $('#indecisiveOut').append(htmlToAppend);
    }

    for (var i = 0; i < indecisiveFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/park.png" width="100%"/></div>'
        $('#indecisiveIn').append(htmlToAppend);
    }

    for (var i = 0; i < accomplishedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/orange.png" width="100%"/></div>'
        $('#accomplishedOut').append(htmlToAppend);
    }

    for (var i = 0; i < accomplishedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/orange.png" width="100%"/></div>'
        $('#accomplishedIn').append(htmlToAppend);
    }

    for (var i = 0; i < frustratedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/laundry.png" width="100%"/></div>'
        $('#frustratedOut').append(htmlToAppend);
    }

    for (var i = 0; i < frustratedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/laundry.png" width="100%"/></div>'
        $('#frustratedIn').append(htmlToAppend);
    }

    for (var i = 0; i < balancedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cherry.png" width="100%"/></div>'
        $('#balancedOut').append(htmlToAppend);
    }

    for (var i = 0; i < balancedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/cherry.png" width="100%"/></div>'
        $('#balancedIn').append(htmlToAppend);
    }

    // for (var i = 0; i < positiveFeelingsOut; i++) {
    //     var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/icecream.png" width="100%"/></div>'
    //     $('#positiveOut').append(htmlToAppend);
    // }
    //
    // for (var i = -1; i < positiveFeelingsIn; i++) {
    //     var htmlToAppend = '<div class="col-md-2 no-pad"><img src = "./img/icecream.png" width="100%" style = "visibility:hidden"/></div>'
    //     $('#positiveIn').append(htmlToAppend);
    // }

    for (var i = 0; i < annoyedFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/bathtub.png" width="100%"/></div>'
        $('#annoyedOut').append(htmlToAppend);
    }

    for (var i = -1; i < annoyedFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/bathtub.png" width="100%" style = "visibility:hidden"/></div>'
        $('#annoyedIn').append(htmlToAppend);
    }

    // for (var i = -1; i < hurtFeelingsOut; i++) {
    //     var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/sign.png" width="100%" style = "visibility:hidden"/></div>'
    //     $('#hurtOut').append(htmlToAppend);
    // }
    //
    // for (var i = 0; i < hurtFeelingsIn; i++) {
    //     var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/bathtub.png" width="100%"/></div>'
    //     $('#hurtIn').append(htmlToAppend);
    // }

    // for (var i = 0; i < lostFeelingsOut; i++) {
    //     var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/chess.png" width="100%"/></div>'
    //     $('#lostOut').append(htmlToAppend);
    // }
    //
    // for (var i = 0; i < lostFeelingsIn; i++) {
    //     var htmlToAppend = '<div class="col-md-1 no-pad"><img src = "./img/chess.png" width="100%"/></div>'
    //     $('#lostIn').append(htmlToAppend);
    // }

    // for (var i = 0; i < inloveFeelingsOut; i++) {
    //     var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/truck.png" width="100%"/></div>'
    //     $('#inloveOut').append(htmlToAppend);
    // }
    //
    // for (var i = 0; i < inloveFeelingsIn; i++) {
    //     var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/truck.png" width="100%"/></div>'
    //     $('#inloveIn').append(htmlToAppend);
    // }

    for (var i = 0; i < doubtfulFeelingsOut; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/truck.png" width="100%"/></div>'
        $('#doubtfulOut').append(htmlToAppend);
    }

    for (var i = -1; i < doubtfulFeelingsIn; i++) {
        var htmlToAppend = '<div class="col-md-3 no-pad"><img src = "./img/truck.png" width="100%" style = "visibility:hidden"/></div>'
        $('#doubtfulIn').append(htmlToAppend);
    }
});
