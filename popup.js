let popupLinks;  // Все кнопки, вызывающие всплывающие окна
let popupClosers;  // Все кнопки для закрытия всплывающих окон

var scrollValue;  // Переменная для сохранения скролла, т.к он блокируется при открытии popup

let unlock = true;  // Индикатор, предотвращающий множественные открытия после нескольких кликов

const timeout = 800;  // Скорость анимации transition, которая указывает когда разблокировать скролл

$(document).ready(function(){
    const popupLinks = $('.popup-link');
    const popupClosers = $('.popup__close');

    // Обрабатываем клик на кнопку, открывающую popup
    if( popupLinks.length ){
        popupLinks.each(function(){
            $(this).on('click', function() {
                let link = '#' + $(this).attr('id') + '.popup';
                let popup = $(link);
                
                // Сохраняем значение скролла, чтобы при закрытии переместить пользователя к предыдущей точке
                scrollValue = $('html').scrollTop();

                popupOpen(popup);
            })
        });
    }

    // Обрабатываем клик на кнопку, закрывающую popup
    if( popupClosers.length ){
        popupClosers.each(function(){
            $(this).on('click', function(){
                let popup = $(this).closest('.popup');

                popupClose(popup);
            });
        });
    }

    // Обрабатываем закрытие popup на клавишу ESC
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
    $('body').css('--st', -($(document).scrollTop()) + 'px');
    $('body').addClass('lock');

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}

function bodyUnlock(){
    setTimeout(function(){
        $('body').removeClass('lock');
        $('html').scrollTop(scrollValue);
    }, timeout);

    unlock = false;
    setTimeout(function(){
        unlock = true;
    }, timeout);
}