var controller = new ScrollMagic.Controller();


var t1 = new TimelineMax();
var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
var t5 = new TimelineMax();
var t6 = new TimelineMax();
var t7 = new TimelineMax();
var t8 = new TimelineMax();
var t9 = new TimelineMax();
var t10 = new TimelineMax();

var blatt = new TimelineMax();


t1.to('.Pflanze', 2.5, {ease: Power2.easeInOut, bottom: '-100vh'})
    .to('.colRahmen', 2.5, {ease: Power2.easeInOut, bottom: '-100vh'}, 0);
t6.from('.schriftl1', 1, {left: '-=100vw'})
    .from('.schriftr1, .seite1', 1, {left: '+=100vw'}, 0)


t2.to('.Pflanze', 2.5, {ease: Power2.easeInOut, bottom: '-300vh'})
    .to('.colRahmen', 2.5, {ease: Power2.easeInOut, bottom: '-200vh'}, 0);
t7.from('.schriftl2', 1, {left: '-=100vw'},)
    .from('.schriftr2 , .seite2', 1, {left: '+=100vw'}, 0);

t3      .to('.Pflanze', 2.5, {ease: Power2.easeInOut, bottom: '-496vh'})
        .to('.colRahmen', 2.5, {ease: Power2.easeInOut, bottom: '-300vh'}, 0);
t8      .from('.schriftl3', 1, {left: '-=100vw'},)
        .from('.schriftr3, .seite3', 1, {left: '+=100vw'}, 0);

t4  .to('.Pflanze', 2.5, {ease: Power2.easeInOut, bottom: '-700vh'})
    .to('.colRahmen', 2.5, {ease: Power2.easeInOut, bottom: '-400vh'}, 0);

t9.from('.schriftl4', 1, {left: '-=100vw'},)
    .from('.schriftr4, .seite4', 1, {left: '+=100vw'}, 0);

t5.to('.Pflanze', 2.5, {ease: Power2.easeInOut, bottom: '-895vh'})
    .to('.colRahmen', 2.5, {ease: Power2.easeInOut, bottom: '-500vh'}, 0)
    .from('.seite5', 1, {left: '+=100vw'}, 0);

t10.from('#haschischSchrift', 1, {
    ease: Power0.easeNone,
    left: '-=10vw',
    rotation: 500,
    opacity:0
})
    .from('#konsumSchrift', 1, {
        ease: Power0.easeNone,
        left: '+=40vw',
        bootom: '-=60vh',
        rotation: -500,
        opacity:0
    },0)
    .from('#marihuanaSchrift', 1, {
        ease: Power0.easeNone,
        left: '10vw',
        rotation: -500,
        opacity:0
    }, 0);


var scrollPos = 0;
$(window).scroll(function () {
    var x = document.body.offsetHeight;
    var y = $(document).scrollTop();
    scrollPos = (y / x) * 100;
});

var soundPflanze = new Howl({
    src: ['Ton/SoundHanfpflanze.mp3'],
    preload: true,
    volume: 0,
    loop: true,
    autoplay: false
});
/*var Flaeche = new Howl({
    src: ['Ton/Musikbett.mp3'],
    preload: true,
    volume: 80,
    loop: true,
    autoplay: false

});*/

var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger01", triggerHook: 0.2, duration: 2000})
    //.addIndicators()
    .setTween(t1)
    .addTo(controller)
;
var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger06", triggerHook: 0.2, reverse:false})
    //.addIndicators()
    .setTween(t6)
    .addTo(controller)
;

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger02", triggerHook: 0.2, duration: 2000})
    //.addIndicators()
    .setTween(t2)
    .addTo(controller)
;
var scene7 = new ScrollMagic.Scene({triggerElement: "#trigger07", triggerHook: 0.2, reverse:false})
    //.addIndicators()
    .setTween(t7)
    .addTo(controller)
;

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger03", triggerHook: 0.2 ,duration: 2000} )
    //.addIndicators()
    .setTween(t3)
    .addTo(controller)
;
var scene8 = new ScrollMagic.Scene({triggerElement: "#trigger08", triggerHook: 0.2, reverse:false})
    //.addIndicators()
    .setTween(t8)
    .addTo(controller)
;

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger04", triggerHook: 0.2,  duration: 2000})
   // .addIndicators()
    .setTween(t4)
    .addTo(controller)
;
var scene9 = new ScrollMagic.Scene({triggerElement: "#trigger09", triggerHook: 0.2, reverse:false})
   // .addIndicators()
    .setTween(t9)
    .addTo(controller)
;

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger05", triggerHook: 0.2,  duration: 2000})
   // .addIndicators()
    .setTween(t5)
    .addTo(controller)
;
var scene10 = new ScrollMagic.Scene({triggerElement: "#trigger10", triggerHook: 0.2, reverse:false })
   // .addIndicators()
    .setTween(t10)
    .addTo(controller)
;


/*
var scene7 = new ScrollMagic.Scene({triggerElement: "#trigger07", triggerHook: 0.2})
    .addIndicators()
    .setTween(t7)
    .addTo(controller)
;
var scene8 = new ScrollMagic.Scene({triggerElement: "#trigger08", triggerHook: 0.2})
    .addIndicators()
    .setTween(t8)
    .addTo(controller)
;


/*var tween = TweenMax.to(".Hauptpflanze",0.5,{ease: Power2.easeOut, scale: 1.2});

var scene = new ScrollMagic.Scene ({triggerElement:"#trigger01", triggerHook:0.2})
    .addIndicators()
    .setTween(tween)
    .setTween(timeline)
    .addTo(controller)
;





    var Scene = new ScrollMagic.Scene ({triggerElement: "#trigger01",triggerHook: 0.02, duration: "100%"})
        .addTo(controller);

    var Scene = new ScrollMagic.Scene ({triggerElement: "#trigger01",triggerHook: 0.02, duration: "400%"})
        .addIndicators()
        .setPin("#pin")
        .addTo(controller);
        */
var audio = false;
var icon = false
var i = 1;

$('.AudioIcon').click(function SoundAnAus() {

    //alert('audioIcon wurde gedrückt');

    if (audio === true) {
        if (i === 1) {
            soundPflanze.play();
        }
        $('.Off').css('opacity', '1');
        $('.On').css('opacity', '0');

        audio = false;
        i++;
    }
    else {
        $('.Off').css('opacity', '0');
        $('.On').css('opacity', '1');
        //Flaeche.volume(0);
        audio = true;
    }
});


/*$('#antike').mouseover(function () {
    $('#s2_1,#s2_2').css('opacity', '1');
    $('#antike,#muskelaufbau,#hanfoelKüche,#proteinquelle').css('opacity', '0');
    //TweenMax.to('.Pflanze', 1, {css: {rotation: grad, transformOrigin: '50% 100%'}});
});

$('body').click(function () {
    $('#s2_1, #s2_2').css('opacity', '0');
    $('#antike, #muskelaufbau, #hanfoelKüche, #proteinquelle').css('opacity', '1');
});
*/

// Funktion die das Ende der Mausbewegung erkennt
(function ($) {
    var timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            // trigger the new event on event.target, so that it can bubble appropriately
            $(event.target).trigger('mousemoveend');
        }, 100);
    });
}(jQuery));


var altePosition = 0; // Variabel die die DB-Zahl immer wieder auf Null zurückrechnet

$('body').mousemove(function () {

    var x = document.all ? event.offsetX : event.pageX;
    var b = browserWidth = $(window).width();
    var grad = -(x / b - 0.5);

    db = DB();
    $('#testzahl').html(scrollPos);
    //alert("Mausposition: " + x + " Fensterbreite: " + b + " ergebnis: " + grad);

    TweenMax.to('.Pflanze', 1, {css: {rotation: grad, transformOrigin: '50% 100%'}});

    if (audio === true && scrollPos > 2.24) {
        soundPflanze.volume(db);
    }
    else {
        soundPflanze.volume(0);
    }

})
    .on('mousemoveend', function () {
        //alert('Maus ist stehen geblieben!')

        $('#testzahl').html(scrollPos);
        //var db = DB();
        //soundPflanze.fade(db, 0, 10);
        soundPflanze.volume(0);


    })
    .mouseout(function () {
        soundPflanze.volume(0);
        $('#testzahl').html(0);
    })
    .click(function () {
        //alert(opa);
    })


function swingLeaf(x) {
    blatt.add([
        TweenMax.to(x, 1.5, {
            left: "+=300",
            rotation: -5,
            ease: Power1.easeInOut
        }),
        TweenMax.to(x, 1.5, {
            top: "+=155",
            ease: Power1.easeOut
        })
    ]).add([
        TweenMax.to(x, 1.5, {
            left: "-=300",
            rotation: 5,
            ease: Power1.easeInOut
        }),
        TweenMax.to(x, 1.5, {
            top: "+=155",
            ease: Power1.easeOut
        })
    ])
}

function swingLeafN(x) {
    blatt.add([
        TweenMax.to(x, 1.5, {
            left: "-=300",
            rotation: -5,
            ease: Power1.easeInOut
        }),
        TweenMax.to(x, 1.5, {
            top: "+=155",
            ease: Power1.easeOut
        })
    ]).add([
        TweenMax.to(x, 1.5, {
            left: "+=300",
            rotation: 5,
            ease: Power1.easeInOut
        }),
        TweenMax.to(x, 1.5, {
            top: "+=155",
            ease: Power1.easeOut
        })
    ])
}

function clear(x) {
    TweenMax.to(x, 1, {
        left: '+=10000',
        delay: 10
    });
}

var blatt2 = false;
var blatt3 = false;
var blatt4 = false;
var blatt5 = false;
$('#onclick1')
    .click(function () {
        clear('#onclick1');
        blatt.set('#blatt1', {rotation: 5});
        swingLeaf('#blatt1');
        swingLeaf('#blatt1');
        swingLeaf('#blatt1');
        clear('#blatt1');
    });

$('#onclick2')
    .click(function () {
        blatt2 = true;
        clear('#onclick2');
        blatt.set('#blatt2', {rotation: 5});
        swingLeafN('#blatt2');
        swingLeafN('#blatt2');
        swingLeafN('#blatt2');
        clear('#blatt2');
    });

$('#onclick3')
    .click(function () {
        blatt3 = true;
        clear('#onclick3');
        blatt.set('#blatt3', {rotation: 5});
        swingLeaf('#blatt3');
        swingLeaf('#blatt3');
        swingLeaf('#blatt3');
        clear('#blatt3');
    });

$('#onclick4')
    .click(function () {
        blatt4 = true;
        clear('#onclick4');
        blatt.set('#blatt4', {rotation: 5});
        swingLeafN('#blatt4');
        swingLeafN('#blatt4');
        swingLeafN('#blatt4');
        clear('#blatt4');
    });
$('#onclick5')
    .click(function () {
        blatt5 = true;
        clear('#onclick5');
        blatt.set('#blatt5', {rotation: 5});
        swingLeafN('#blatt5');
        swingLeafN('#blatt5');
        swingLeafN('#blatt5');
        clear('#blatt5');
    });


/**
 * @return {number}
 */
function DB() {

    var x = document.all ? event.offsetX : event.pageX; //x-Punkt auf Bildschirm
    var breite = browserWidth = $(window).width();      //Bildschirmbreite
    var position = x * 100 / breite;        //x-Punkt auf Bildschirm in Prozent
    var distanz;
    distanz = (position - altePosition) / 100;
    altePosition = position;
    i++;
    if (distanz < 0) {
        distanz = distanz * (-1);
    }
    if (distanz > 1) {
        distanz = 1;
    }
    return distanz;

}

//Texte
//pic ist der schriftzug,
//click die div-fläche auf die geklickt wird
//back der hintergrund
function texte(text, pic, textb) {


    if ($(text).css('opacity') == 0) {
        TweenMax.to(pic, 1, {css: {opacity: 0}});
        TweenMax.to(text, 1, {css: {opacity: 1}});
        //TweenMax.to(textb, 1, {css: {opacity: 0.6}});

    }
    else {
        TweenMax.to(pic, 1, {css: {opacity: 1}});
        TweenMax.to(text, 1, {css: {opacity: 0}});
        //TweenMax.to(textb, 1, {css: {opacity: 0}});
    }
}

function vergroessern(x, y, z) {
    //TweenMax.to(x, 0.2, {scale: 1.1});
    TweenMax.to(y, 0.2, {scale: 1.1});
    //TweenMax.to(z, 0.2, {scale: 1.1});*/
}

function verkleinern(x, y, z) {
    //TweenMax.to(x, 0.2, {scale: 1});
    TweenMax.to(y, 0.2, {scale: 1});
    //TweenMax.to(z, 0.2, {scale: 1});
}

$('#unsClick').mouseover(function () {
    vergroessern('#uns', '#uns', '#uns');
})
    .mouseout(function () {
        verkleinern('#uns', '#uns', '#uns');
    });
$('#datenschutzClick').mouseover(function () {
    vergroessern('#datenschutz', '#datenschutz', '#datenschutz');
})
    .mouseout(function () {
        verkleinern('#datenschutz', '#datenschutz', '#datenschutz');
    });
$('#impressumClick').mouseover(function () {
    vergroessern('#impressum', '#impressum', '#impressum');
})
    .mouseout(function () {
        verkleinern('#impressum', '#impressum', '#impressum');
    });
$('#antikeClick').click(function () {
    texte('#antike', '#antikeSchrift', '#antikeb');

})
    .mouseover(function () {
        vergroessern('#antike', '#antikeSchrift', '#antikeb');
    })
    .mouseout(function () {
        verkleinern('#antike', '#antikeSchrift', '#antikeb');
    });

$('#hierClick').click(function () {
    texte('#hierKlickenClick', '#hierKlickenSchrift', '#hierKlickenClickb');
    if ($('#s12').css('opacity') == 0) {
        TweenMax.to('#s12', 1, {opacity: 1});
    }
    else {
        TweenMax.to('#s12', 1, {opacity: 0});
    }
})
    .mouseover(function () {
        vergroessern('#hierKlickenClick', '#hierKlickenSchrift', '#hierKlickenClickb');
    })
    .mouseout(function () {
        verkleinern('#hierKlickenClick', '#hierKlickenSchrift', '#hierKlickenClickb');
    });

$('#muskelaufbauClick').click(function () {
    texte('#muskelaufbau', '#muskelaufbauSchrift', '#muskelaufbaub');
})
    .mouseover(function () {
        vergroessern('#muskelaufbau', '#muskelaufbauSchrift', '#muskelaufbaub');
    })
    .mouseout(function () {
        verkleinern('#muskelaufbau', '#muskelaufbauSchrift', '#muskelaufbaub');
    });

$('#kuecheClick').click(function () {
    texte('#kueche', '#kuecheSchrift', '#kuecheb');
})
    .mouseover(function () {
        vergroessern('#kueche', '#kuecheSchrift', '#kuecheb');
    })
    .mouseout(function () {
        verkleinern('#kueche', '#kuecheSchrift', '#kuecheb');
    });

$('#proteinquelleClick').click(function () {
    if (blatt2 == true) {
        texte('#proteinquelle', '#proteinquelleSchrift', '#proteinquelleb');
    }
})
    .mouseover(function () {
        if (blatt2 == true) {
            vergroessern('#proteinquelle', '#proteinquelleSchrift', '#proteinquelleb');
        }
    })
    .mouseout(function () {
        if (blatt2 == true) {
            verkleinern('#proteinquelle', '#proteinquelleSchrift', '#proteinquelleb');
        }
    });

$('#gutenberbibelClick').click(function () {
    texte('#gutenbergBibel', '#gutenbergbibelSchrift', '#gutenbergBibelb');
})
    .mouseover(function () {
        vergroessern('#gutenbergbibel', '#gutenbergbibelSchrift', '#gutenbergbibelb');
    })
    .mouseout(function () {
        verkleinern('#gutenbergbibel', '#gutenbergbibelSchrift', '#gutenbergbibelb');
    });

$('#holzClick').click(function () {
    texte('#holz', '#holzSchrift', '#holzb');
})
    .mouseover(function () {
        vergroessern('#holz', '#holzSchrift', '#holzb');
    })
    .mouseout(function () {
        verkleinern('#holz', '#holzSchrift', '#holzb');
    });

$('#umweltClick').click(function () {
    if (blatt3 == true) {
        texte('#umwelt', '#umweltSchrift', '#umweltb');
    }
})
    .mouseover(function () {
        if (blatt3 == true) {
            vergroessern('#umwelt', '#umweltSchrift', '#umweltb');
        }
    })
    .mouseout(function () {
        if (blatt3 == true) {
            verkleinern('#umwelt', '#umweltSchrift', '#umweltb');
        }
    });

$('#autoClick').click(function () {
    if (blatt4 === true) {
        texte('#auto', '#autoSchrift', '#autob');
    }
})
    .mouseover(function () {
        if (blatt4 === true) {
            vergroessern('#auto', '#autoSchrift', '#autob');
        }
    })
    .mouseout(function () {
        if (blatt4 === true) {
            verkleinern('#auto', '#autoSchrift', '#autob');
        }
    });

$('#daemmungClick').click(function () {
    texte('#daemmung', '#daemmungSchrift', '#daemmungb');
})
    .mouseover(function () {
        vergroessern('#daemmung', '#daemmungSchrift', '#daemmungb');
    })
    .mouseout(function () {
        verkleinern('#daemmung', '#daemmungSchrift', '#daemmungb');
    });

$('#plastikClick').click(function () {
    texte('#plastik', '#plastikSchrift', '#plastikb');
})
    .mouseover(function () {
        vergroessern('#plastik', '#plastikSchrift', '#plastikb');
    })
    .mouseout(function () {
        verkleinern('#plastik', '#plastikSchrift', '#plastikb');
    });

$('#apothekenpflichtClick').click(function () {
    if (blatt5 === true) {
        texte('#apothekenpflicht', '#apothekenpflichtSchrift', '#apothekenpflichtb');
    }
})
    .mouseover(function () {
        if (blatt5 === true) {
            vergroessern('#apothekenpflicht', '#apothekenpflichtSchrift', '#apothekenpflichtb');
        }
    })
    .mouseout(function () {
        if (blatt5 === true) {
            verkleinern('#apothekenpflicht', '#apothekenpflichtSchrift', '#apothekenpflichtb');
        }
    });

$('#anwendungClick').click(function () {
    texte('#anwendung', '#anwendungSchrift', '#anwendungb');
})
    .mouseover(function () {
        vergroessern('#anwendung', '#anwendungSchrift', '#anwendungb');
    })
    .mouseout(function () {
        verkleinern('#anwendung', '#anwendungSchrift', '#anwendungb');
    });

$('#forschungClick').click(function () {
    texte('#forschung', '#forschungSchrift', '#forschungb');
})
    .mouseover(function () {
        vergroessern('#forschung', '#forschungSchrift', '#forschungb');
    })
    .mouseout(function () {
        verkleinern('#forschung', '#forschungSchrift', '#forschungb');
    });

$('#konsumClick').click(function () {
    texte('#konsum', '#konsumSchrift', '#konsumb');
})
    .mouseover(function () {
        vergroessern('#konsum', '#konsumSchrift', '#konsumb');
    })
    .mouseout(function () {
        verkleinern('#konsum', '#konsumSchrift', '#konsumb');
    });

$('#marihuanaClick').click(function () {
    texte('#marihuana', '#marihuanaSchrift', '#marihuanab');
})
    .mouseover(function () {
        vergroessern('#marihuana', '#marihuanaSchrift', '#marihuanab');
    })
    .mouseout(function () {
        verkleinern('#marihuana', '#marihuanaSchrift', '#marihuanab');
    });

$('#haschischClick').click(function () {
    texte('#haschisch', '#haschischSchrift', '#haschischb');
})
    .mouseover(function () {
        vergroessern('#haschisch', '#haschischSchrift', '#haschischb');
    })
    .mouseout(function () {
        verkleinern('#haschisch', '#haschischSchrift', '#haschischb');
    });