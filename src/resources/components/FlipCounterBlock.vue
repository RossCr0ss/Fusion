<template>
    <div class="block">
        <div class="counter-wrapper">
            <ul class="flip-counter default" id="myCounter"></ul>
        </div>
    </div>
</template>

<script>

$(function () {
    var myCounter = new flipCounter('myCounter', { value: 1245522350, inc: 0.01, pace: 50, auto: true });
});
var flipCounter = function (d, options) {

    var defaults = {
        value: 0,
        inc: 1,
        pace: 0,
        auto: true,
        decimals: 2,
        places: 0
    };

    var counter = options || {};
    var doc = window.document;

    for (var opt in defaults) {
        counter[opt] = counter.hasOwnProperty(opt) ? counter[opt] : defaults[opt];
    }

    var digitsOld = [],
        digitsNew = [],
        decimalsOld = [],
        decimalsNew = [],
        digitsAnimate = [],
        x, y, lastTimeout, nextCount = null;

    var div = d;
    if (typeof d === 'string') {
        div = doc.getElementById(d);
    }

    this.setValue = function (n) {
        if (_isNumber(n)) {
            x = counter.value;
            y = counter.value = n;
            _digitCheck(x, y);
        }
        return this;
    };

    this.setIncrement = function (n) {
        counter.inc = _isNumber(n) ? n : defaults.inc;
        return this;
    };

    this.setPace = function (n) {
        counter.pace = _isNumber(n) ? n : defaults.pace;
        return this;
    };

    this.setAuto = function (a) {
        var sa = typeof a !== "boolean" ? true : a;
        if (counter.auto) {
            if (!sa) {
                if (nextCount) _clearNext();
                counter.auto = false;
            }
        } else {
            if (sa) {
                if (nextCount) _clearNext();
                counter.auto = true;
                _doCount();
            }
        }
        return this;
    };

    this.step = function () {
        if (!counter.auto) _doCount();
        return this;
    };

    this.add = function (n) {
        if (_isNumber(n)) {
            x = counter.value;
            counter.value += n;
            y = counter.value;
            _digitCheck(x, y);
        }
        return this;
    };

    this.subtract = function (n) {
        if (_isNumber(n)) {
            x = counter.value;
            counter.value -= n;
            if (counter.value >= 0) {
                y = counter.value;
            } else {
                y = "0";
                counter.value = 0;
            }
            _digitCheck(x, y);
        }
        return this;
    };

    this.getValue = function () {
        return counter.value;
    };

    this.stop = function () {
        if (nextCount) _clearNext();
        return this;
    };

    function _doCount(first) {
        var first_run = typeof first === "undefined" ? false : first;

        x = counter.value.toFixed(counter.decimals);

        if (!first_run) counter.value += counter.inc;
        y = counter.value.toFixed(counter.decimals);
        _digitCheck(x, y);
        if (counter.auto === true) nextCount = setTimeout(_doCount, counter.pace);
    }

    function _digitCheck(x, y) {

        if (counter.decimals) {
            x = x.toString().split('.');
            y = y.toString().split('.');

            decimalsOld = _toArray(x[1]);
            decimalsNew = _toArray(y[1]);
            digitsOld = _toArray(x[0]);
            digitsNew = _toArray(y[0]);
        } else {
            digitsOld = _toArray(x);
            digitsNew = _toArray(y);
        }

        var ylen = digitsNew.length;
        var dlen = 0;
        if (counter.decimals) {
            ylen += decimalsNew.length;
            dlen = decimalsNew.length;
        }

        digitsAnimate = [];
        for (var i = 0; i < ylen; i++) {

            if (i < dlen) {
                digitsAnimate[i] = decimalsNew[i] != decimalsOld[i];
            } else {
                var j = i - dlen;
                digitsAnimate[i] = digitsNew[j] != digitsOld[j];
            }
        }
        _drawCounter();
    }

    function _toArray(input) {
        var output = input.toString().split('').reverse();
        if (counter.places > 0 && output.length < counter.places) {
            for (var i = output.length; i < counter.places; i++) {
                output.push('0');
            }
        }
        return output;
    }

    function _drawCounter() {
        var bit = 1,
            html = '',
            dNew, dOld;

        var i = 0;
        if (counter.decimals) {
            for (i = 0; i < counter.decimals; i++) {
                dNew = _isNumber(decimalsNew[i]) ? decimalsNew[i] : '';
                dOld = _isNumber(decimalsOld[i]) ? decimalsOld[i] : '';
                html += '<li class="digit" id="' + d + '-digit-a' + i + '">' +
                    '<div class="line"></div>' +
                    '<span class="front">' + dNew + '</span>' +
                    '<span class="back">' + dOld + '</span>' +
                    '<div class="hinge-wrap"><div class="hinge">' +
                    '<span class="front">' + dOld + '</span>' +
                    '<span class="back">' + dNew + '</span>' +
                    '</div></div>' +
                    '</li>';
            }
            html += '<li class="digit-delimiter dot">.</li>'
        }

        var count = digitsNew.length;
        for (i; i < digitsAnimate.length; i++) {
            var j = i - (digitsAnimate.length - digitsNew.length);
            dNew = _isNumber(digitsNew[j]) ? digitsNew[j] : '';
            dOld = _isNumber(digitsOld[j]) ? digitsOld[j] : '';
            html += '<li class="digit" id="' + d + '-digit-a' + i + '">' +
                        '<div class="line"></div>' +
                        '<span class="front">' + dNew + '</span>' +
                        '<span class="back">' + dOld + '</span>' +
                        '<div class="hinge-wrap"><div class="hinge">' +
                        '<span class="front">' + dOld + '</span>' +
                        '<span class="back">' + dNew + '</span>' +
                        '</div></div>' +
                    '</li>';
            if (bit !== count && bit % 3 === 0) {
                html += "<li class='digit-delimiter'>'</li>";
            }
            bit++;
        }
        html += '<li class="digit">' +
                    '<div class="line"></div>' +
                    '<span class="front">' + `$` + '</span>' +
                    '<span class="back">' + `$` + '</span>' +
                    '</li>'

        div.innerHTML = html;

        var alen = digitsAnimate.length;

        if (lastTimeout) {
            clearTimeout(lastTimeout);
            lastTimeout = null;
        }
        lastTimeout = setTimeout(function () {
            for (var i = 0; i < alen; i++) {
                if (digitsAnimate[i]) {
                    var a = doc.getElementById(d + '-digit-a' + i);
                    a.className = a.className + ' animate';
                }
            }
        }, 20)

    }

    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _clearNext() {
        clearTimeout(nextCount);
        nextCount = null;
    }

    _doCount(true);
};
</script>