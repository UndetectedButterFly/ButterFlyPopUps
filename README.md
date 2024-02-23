<h1 align="center">ButterFlyPopUps</h1>

<p align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/JQuery-ver_3.6-orange?style=for-the-badge&logo=jquery&label=JQuery&color=yellow">
    <img alt="Static Badge" src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=github">
</p>

This is a simple js popup script. </br>
See english instruction here: <a href="#">No instructions in English yet</a>

***Содержание***
- [Введение](#introduction)
- [Установка](#installation)
- [Документация](#documentation)


## Введение <a name="introduction"></a>
**ButterFlyPopUps** - это простой скрипт для создания всплывающих окон на вашем сайте.</br>
В базовый функционал входит: </br>
- Открытие всплывающего окна по нажатию на кнопку(или ссылку) с id нужного окна.
  - Предусмотрена возможность открывать 1 всплывающее окно из другого.
  - Предусмотрен вариант множественных нажатий, после первого нажатия на ссылку, страница блокируется и не позволяет открыть более 1 окна.
- Закрытие всплывающего окна по нажатию на: 1) кнопку закрытия; 2) клавишу ESC; 3) темный фон вокруг окна;
- Открытие всплывающего окна сопровождается блокировкой всего заднего фона, включая скроллбар.

## Установка <a name="installation"></a>

Для установки **ButterFlyPopUps** на ваш проект потребуется:

Подключить Jquery версии 3.6+
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

Подключить popup.js и popup_style.css(замените pathToStyles/popup_style.css и pathToScripts/popup.js на нужные вам)
```html
<link rel="stylesheet" href="pathToStyles/popup_style.css">
<script src="pathToScripts/popup.js"></script>
```

Создайте по шаблону из **test.html** всплывающее окно, например:
```html
<div class="popup" id="popup-test">
    <div class="popup__body">
        <div class="popup__content">
            <div class="popup__close">✖</div>
            <!-- here may be whatever you want -->
            <span>Hello world!</span>
            <!-- here may be whatever you want -->
        </div>
    </div>
</div>
```

Привяжите любую кнопку, ссылку или другой объект к этому окну по шаблону из **test.html**, например: 
```html
<a id="popup-test" class="popup-link">Open test popup</a>
```

## Документация <a name="documentation"></a>
#### popup.js functions:

popupOpen() - Открывает всплывающее окно и по надобности вызывает блокировку body.</br>
```
Обязательные аргументы:
1) popup - jquery объект всплывающего окна
Опциональные аргументы:
Нет
```
popupClose() - Закрывает всплывающее окно и по надобности вызывает разблокировку body.
```
Обязательные аргументы:
1) popup - jquery объект всплывающего окна
Опциональные аргументы:
1) doUnlock - boolean, индикатор, на случай открытия одного окна внутри другого(ведь разблокировать body не нужно)
```
bodyLock() - Блокирует взаимодействие с body и скроллбар страницы.
```
Обязательные аргументы:
Нет
Опциональные аргументы:
Нет
```
bodyUnlock() - Разблокирует взаимодействие с body и скроллбар страницы.
```
Обязательные аргументы:
Нет
Опциональные аргументы:
Нет
```

## Разработчики
- [Borozdin Pavel](https://github.com/UndetectedButterFly)

## License

Project ButterFlyPopUps is distributed under the MIT License.
