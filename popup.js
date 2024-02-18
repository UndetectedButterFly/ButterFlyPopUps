let popupLinks;  // Все кнопки, вызывающие всплывающие окна
let popupClosers;  // Все кнопки для закрытия всплывающих окон

let unlock = true;

const timeout = 800;

////////////////////////////////////////
// lockPadding не работает на .lock-pd//
// - fix lockPadding                  //
// - need more tests                  //
////////////////////////////////////////

$(document).ready(function(){
    const popupLinks = $('.popup-link');
    const popupClosers = $('.popup__close');
    const body = $('body');
    const lockPadding = $('.lock-pd');

    if( popupLinks ){
        popupLinks.each(function(){
            $(this).on('click', function() {
                let link = '#' + $(this).attr('id') + '.popup';
                let popup = $(link);
                
                popupOpen(popup);
            })
        });
    }

    if( popupClosers ){
        popupClosers.each(function(){
            $(this).on('click', function(){
                let popup = $(this).closest('.popup');

                popupClose(popup);
            })
        });
    }

    $(document).on('keydown', function(event){
        if( event.which === 27){
            popupClose($('.popup.active'));
        }
    });

});

function popupOpen(popup){
    if( popup && unlock ) {
        const popupActive = $('.popup.active');
        if( popupActive.length ){
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        popup.addClass('active');
        popup.on('click', function(event){
            const target = event.target;
            if( !target.closest('.popup__content') ){
                popupClose($(target.closest('.popup')));
            }
        })
    }
}

function popupClose(popup, doUnlock = true){
    if( unlock ){
        popup.removeClass('active');

        if (doUnlock){
            bodyUnlock();
        }
    }
}

function bodyLock(){
    $('body').addClass('lock');

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

function bodyUnlock(){
    setTimeout(function(){
        $('body').removeClass('lock');
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}