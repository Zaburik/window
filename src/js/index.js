require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let callMeasurer = require('./parts/callMeasurer'),
        tabs = require('./parts/tabs'),
        popup = require('./parts/popup'),
        timer = require('./parts/timer'),
        sixForms = require('./parts/sixForms'),
        glazTabs = require('./parts/glazTabs'),
        popupTime = require('./parts/popupTime'),
        gallery = require('./parts/gallery'),
        calc = require('./parts/calc');

    callMeasurer();
    tabs();
    popup();
    timer();
    sixForms();
    glazTabs();
    popupTime();
    gallery();
    calc();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}