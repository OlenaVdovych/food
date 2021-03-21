window.addEventListener('DOMContentLoaded', function () {
    const tabs = require('./Modules/tabs'),
        modal = require('./Modules/modal'),
        timer = require('./Modules/timer'),
        calc = require('./Modules/calc'),
        cards = require('./Modules/cards'),
        forms = require('./Modules/forms');
        slider = require('./Modules/slider');

    tabs();
    modal();
    timer();
    calc();
    cards();
    forms();
    slider();
});