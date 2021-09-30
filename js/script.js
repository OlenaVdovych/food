require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './Modules/tabs';
import modal from './Modules/modal';
import timer from './Modules/timer';
import calc from './Modules/calc';
import cards from './Modules/cards';
import forms from './Modules/forms';
import slider from './Modules/slider';
import {openModal} from './Modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
<<<<<<< HEAD

    // const modalTimer = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    //Classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = +this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Вартість:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фітнес"',
        'Меню "Фітнес" - це новий підхід до приготування страв: більше свіжих овочів і фруктів. Продукт активних і здорових людей. Це абсолютно новий продукт з оптимальною ціною і високою якістю!',
        9,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Преміум”',
        'В меню "Преміум" ми використовуємо не тільки гарний дизайн упаковки, але і якісне виконання страв. Червона риба, морепродукти, фрукти - ресторанне меню без походу в ресторан!',
        18,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Пісне"',
        'Меню "Пісне" - це ретельний підбір інгредієнтів: повна відсутність продуктів тваринного походження, молоко з мигдалю, вівса, кокоса або гречки, правильна кількість білків за рахунок тофу і імпортних вегетаріанських стейків. ',
        12,
        '.menu .container',
        'menu__item'
    ).render();
=======
>>>>>>> b038b6b18183d0c400a5013bcdb9bf09bf3defef
});