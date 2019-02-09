(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Dropdown = factory(global.jQuery,global.Popper,global.Util));
}(this, (function ($,Popper,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_9zddcyc80 = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/dropdown.js",
        hash = "b6bf8eb2420385bf84ad100f13bb1541c8deeaa4",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 493,
            column: 13
          }
        },
        "1": {
          start: {
            line: 19,
            column: 35
          },
          end: {
            line: 19,
            column: 45
          }
        },
        "2": {
          start: {
            line: 20,
            column: 35
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "3": {
          start: {
            line: 21,
            column: 35
          },
          end: {
            line: 21,
            column: 48
          }
        },
        "4": {
          start: {
            line: 22,
            column: 35
          },
          end: {
            line: 22,
            column: 49
          }
        },
        "5": {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 23,
            column: 46
          }
        },
        "6": {
          start: {
            line: 24,
            column: 35
          },
          end: {
            line: 24,
            column: 45
          }
        },
        "7": {
          start: {
            line: 25,
            column: 35
          },
          end: {
            line: 25,
            column: 37
          }
        },
        "8": {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 26,
            column: 37
          }
        },
        "9": {
          start: {
            line: 27,
            column: 35
          },
          end: {
            line: 27,
            column: 36
          }
        },
        "10": {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 28,
            column: 37
          }
        },
        "11": {
          start: {
            line: 29,
            column: 35
          },
          end: {
            line: 29,
            column: 37
          }
        },
        "12": {
          start: {
            line: 30,
            column: 35
          },
          end: {
            line: 30,
            column: 36
          }
        },
        "13": {
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 31,
            column: 108
          }
        },
        "14": {
          start: {
            line: 32,
            column: 35
          },
          end: {
            line: 32,
            column: 73
          }
        },
        "15": {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 43,
            column: 3
          }
        },
        "16": {
          start: {
            line: 45,
            column: 20
          },
          end: {
            line: 54,
            column: 3
          }
        },
        "17": {
          start: {
            line: 56,
            column: 19
          },
          end: {
            line: 62,
            column: 3
          }
        },
        "18": {
          start: {
            line: 64,
            column: 24
          },
          end: {
            line: 73,
            column: 3
          }
        },
        "19": {
          start: {
            line: 75,
            column: 18
          },
          end: {
            line: 81,
            column: 3
          }
        },
        "20": {
          start: {
            line: 83,
            column: 22
          },
          end: {
            line: 89,
            column: 3
          }
        },
        "21": {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 99,
            column: 30
          }
        },
        "22": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 27
          }
        },
        "23": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 46
          }
        },
        "24": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 45
          }
        },
        "25": {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 103,
            column: 43
          }
        },
        "26": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 105,
            column: 31
          }
        },
        "27": {
          start: {
            line: 111,
            column: 6
          },
          end: {
            line: 111,
            column: 20
          }
        },
        "28": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 20
          }
        },
        "29": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 24
          }
        },
        "30": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 127,
            column: 7
          }
        },
        "31": {
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 126,
            column: 14
          }
        },
        "32": {
          start: {
            line: 129,
            column: 23
          },
          end: {
            line: 129,
            column: 68
          }
        },
        "33": {
          start: {
            line: 130,
            column: 23
          },
          end: {
            line: 130,
            column: 61
          }
        },
        "34": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 28
          }
        },
        "35": {
          start: {
            line: 134,
            column: 6
          },
          end: {
            line: 136,
            column: 7
          }
        },
        "36": {
          start: {
            line: 135,
            column: 8
          },
          end: {
            line: 135,
            column: 14
          }
        },
        "37": {
          start: {
            line: 138,
            column: 28
          },
          end: {
            line: 140,
            column: 7
          }
        },
        "38": {
          start: {
            line: 141,
            column: 24
          },
          end: {
            line: 141,
            column: 58
          }
        },
        "39": {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 34
          }
        },
        "40": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 147,
            column: 7
          }
        },
        "41": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 14
          }
        },
        "42": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 179,
            column: 7
          }
        },
        "43": {
          start: {
            line: 155,
            column: 8
          },
          end: {
            line: 157,
            column: 9
          }
        },
        "44": {
          start: {
            line: 156,
            column: 10
          },
          end: {
            line: 156,
            column: 93
          }
        },
        "45": {
          start: {
            line: 159,
            column: 31
          },
          end: {
            line: 159,
            column: 44
          }
        },
        "46": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 170,
            column: 9
          }
        },
        "47": {
          start: {
            line: 162,
            column: 10
          },
          end: {
            line: 162,
            column: 35
          }
        },
        "48": {
          start: {
            line: 163,
            column: 15
          },
          end: {
            line: 170,
            column: 9
          }
        },
        "49": {
          start: {
            line: 164,
            column: 10
          },
          end: {
            line: 164,
            column: 51
          }
        },
        "50": {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 169,
            column: 11
          }
        },
        "51": {
          start: {
            line: 168,
            column: 12
          },
          end: {
            line: 168,
            column: 56
          }
        },
        "52": {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        },
        "53": {
          start: {
            line: 176,
            column: 10
          },
          end: {
            line: 176,
            column: 55
          }
        },
        "54": {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 178,
            column: 88
          }
        },
        "55": {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 188,
            column: 7
          }
        },
        "56": {
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 187,
            column: 65
          }
        },
        "57": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 27
          }
        },
        "58": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 191,
            column: 55
          }
        },
        "59": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 193,
            column: 47
          }
        },
        "60": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 196,
            column: 53
          }
        },
        "61": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 43
          }
        },
        "62": {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 201,
            column: 37
          }
        },
        "63": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 26
          }
        },
        "64": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 23
          }
        },
        "65": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 207,
            column: 7
          }
        },
        "66": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 30
          }
        },
        "67": {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 206,
            column: 27
          }
        },
        "68": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 43
          }
        },
        "69": {
          start: {
            line: 212,
            column: 6
          },
          end: {
            line: 214,
            column: 7
          }
        },
        "70": {
          start: {
            line: 213,
            column: 8
          },
          end: {
            line: 213,
            column: 37
          }
        },
        "71": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 224,
            column: 8
          }
        },
        "72": {
          start: {
            line: 221,
            column: 8
          },
          end: {
            line: 221,
            column: 30
          }
        },
        "73": {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 222,
            column: 31
          }
        },
        "74": {
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 223,
            column: 21
          }
        },
        "75": {
          start: {
            line: 228,
            column: 6
          },
          end: {
            line: 232,
            column: 7
          }
        },
        "76": {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 238,
            column: 7
          }
        },
        "77": {
          start: {
            line: 240,
            column: 6
          },
          end: {
            line: 240,
            column: 19
          }
        },
        "78": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 249,
            column: 7
          }
        },
        "79": {
          start: {
            line: 245,
            column: 23
          },
          end: {
            line: 245,
            column: 68
          }
        },
        "80": {
          start: {
            line: 246,
            column: 8
          },
          end: {
            line: 248,
            column: 9
          }
        },
        "81": {
          start: {
            line: 247,
            column: 10
          },
          end: {
            line: 247,
            column: 58
          }
        },
        "82": {
          start: {
            line: 250,
            column: 6
          },
          end: {
            line: 250,
            column: 23
          }
        },
        "83": {
          start: {
            line: 254,
            column: 30
          },
          end: {
            line: 254,
            column: 57
          }
        },
        "84": {
          start: {
            line: 255,
            column: 22
          },
          end: {
            line: 255,
            column: 42
          }
        },
        "85": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 269,
            column: 7
          }
        },
        "86": {
          start: {
            line: 259,
            column: 8
          },
          end: {
            line: 259,
            column: 37
          }
        },
        "87": {
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 262,
            column: 9
          }
        },
        "88": {
          start: {
            line: 261,
            column: 10
          },
          end: {
            line: 261,
            column: 42
          }
        },
        "89": {
          start: {
            line: 263,
            column: 13
          },
          end: {
            line: 269,
            column: 7
          }
        },
        "90": {
          start: {
            line: 264,
            column: 8
          },
          end: {
            line: 264,
            column: 39
          }
        },
        "91": {
          start: {
            line: 265,
            column: 13
          },
          end: {
            line: 269,
            column: 7
          }
        },
        "92": {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 266,
            column: 38
          }
        },
        "93": {
          start: {
            line: 267,
            column: 13
          },
          end: {
            line: 269,
            column: 7
          }
        },
        "94": {
          start: {
            line: 268,
            column: 8
          },
          end: {
            line: 268,
            column: 43
          }
        },
        "95": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 270,
            column: 22
          }
        },
        "96": {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 274,
            column: 59
          }
        },
        "97": {
          start: {
            line: 278,
            column: 25
          },
          end: {
            line: 278,
            column: 27
          }
        },
        "98": {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 289,
            column: 7
          }
        },
        "99": {
          start: {
            line: 280,
            column: 8
          },
          end: {
            line: 286,
            column: 9
          }
        },
        "100": {
          start: {
            line: 281,
            column: 10
          },
          end: {
            line: 284,
            column: 11
          }
        },
        "101": {
          start: {
            line: 285,
            column: 10
          },
          end: {
            line: 285,
            column: 21
          }
        },
        "102": {
          start: {
            line: 288,
            column: 8
          },
          end: {
            line: 288,
            column: 47
          }
        },
        "103": {
          start: {
            line: 291,
            column: 27
          },
          end: {
            line: 302,
            column: 7
          }
        },
        "104": {
          start: {
            line: 305,
            column: 6
          },
          end: {
            line: 309,
            column: 7
          }
        },
        "105": {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 308,
            column: 9
          }
        },
        "106": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 25
          }
        },
        "107": {
          start: {
            line: 316,
            column: 6
          },
          end: {
            line: 331,
            column: 8
          }
        },
        "108": {
          start: {
            line: 317,
            column: 19
          },
          end: {
            line: 317,
            column: 41
          }
        },
        "109": {
          start: {
            line: 318,
            column: 24
          },
          end: {
            line: 318,
            column: 66
          }
        },
        "110": {
          start: {
            line: 320,
            column: 8
          },
          end: {
            line: 323,
            column: 9
          }
        },
        "111": {
          start: {
            line: 321,
            column: 10
          },
          end: {
            line: 321,
            column: 44
          }
        },
        "112": {
          start: {
            line: 322,
            column: 10
          },
          end: {
            line: 322,
            column: 38
          }
        },
        "113": {
          start: {
            line: 325,
            column: 8
          },
          end: {
            line: 330,
            column: 9
          }
        },
        "114": {
          start: {
            line: 326,
            column: 10
          },
          end: {
            line: 328,
            column: 11
          }
        },
        "115": {
          start: {
            line: 327,
            column: 12
          },
          end: {
            line: 327,
            column: 62
          }
        },
        "116": {
          start: {
            line: 329,
            column: 10
          },
          end: {
            line: 329,
            column: 24
          }
        },
        "117": {
          start: {
            line: 335,
            column: 6
          },
          end: {
            line: 338,
            column: 7
          }
        },
        "118": {
          start: {
            line: 337,
            column: 8
          },
          end: {
            line: 337,
            column: 14
          }
        },
        "119": {
          start: {
            line: 340,
            column: 22
          },
          end: {
            line: 340,
            column: 84
          }
        },
        "120": {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 385,
            column: 7
          }
        },
        "121": {
          start: {
            line: 342,
            column: 23
          },
          end: {
            line: 342,
            column: 65
          }
        },
        "122": {
          start: {
            line: 343,
            column: 24
          },
          end: {
            line: 343,
            column: 52
          }
        },
        "123": {
          start: {
            line: 344,
            column: 30
          },
          end: {
            line: 346,
            column: 9
          }
        },
        "124": {
          start: {
            line: 348,
            column: 8
          },
          end: {
            line: 350,
            column: 9
          }
        },
        "125": {
          start: {
            line: 349,
            column: 10
          },
          end: {
            line: 349,
            column: 42
          }
        },
        "126": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 354,
            column: 9
          }
        },
        "127": {
          start: {
            line: 353,
            column: 10
          },
          end: {
            line: 353,
            column: 18
          }
        },
        "128": {
          start: {
            line: 356,
            column: 29
          },
          end: {
            line: 356,
            column: 42
          }
        },
        "129": {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 359,
            column: 9
          }
        },
        "130": {
          start: {
            line: 358,
            column: 10
          },
          end: {
            line: 358,
            column: 18
          }
        },
        "131": {
          start: {
            line: 361,
            column: 8
          },
          end: {
            line: 365,
            column: 9
          }
        },
        "132": {
          start: {
            line: 364,
            column: 10
          },
          end: {
            line: 364,
            column: 18
          }
        },
        "133": {
          start: {
            line: 367,
            column: 26
          },
          end: {
            line: 367,
            column: 60
          }
        },
        "134": {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 368,
            column: 36
          }
        },
        "135": {
          start: {
            line: 369,
            column: 8
          },
          end: {
            line: 371,
            column: 9
          }
        },
        "136": {
          start: {
            line: 370,
            column: 10
          },
          end: {
            line: 370,
            column: 18
          }
        },
        "137": {
          start: {
            line: 375,
            column: 8
          },
          end: {
            line: 377,
            column: 9
          }
        },
        "138": {
          start: {
            line: 376,
            column: 10
          },
          end: {
            line: 376,
            column: 68
          }
        },
        "139": {
          start: {
            line: 379,
            column: 8
          },
          end: {
            line: 379,
            column: 57
          }
        },
        "140": {
          start: {
            line: 381,
            column: 8
          },
          end: {
            line: 381,
            column: 51
          }
        },
        "141": {
          start: {
            line: 382,
            column: 8
          },
          end: {
            line: 384,
            column: 56
          }
        },
        "142": {
          start: {
            line: 390,
            column: 23
          },
          end: {
            line: 390,
            column: 59
          }
        },
        "143": {
          start: {
            line: 392,
            column: 6
          },
          end: {
            line: 394,
            column: 7
          }
        },
        "144": {
          start: {
            line: 393,
            column: 8
          },
          end: {
            line: 393,
            column: 49
          }
        },
        "145": {
          start: {
            line: 396,
            column: 6
          },
          end: {
            line: 396,
            column: 41
          }
        },
        "146": {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 413,
            column: 7
          }
        },
        "147": {
          start: {
            line: 412,
            column: 8
          },
          end: {
            line: 412,
            column: 14
          }
        },
        "148": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 28
          }
        },
        "149": {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 416,
            column: 29
          }
        },
        "150": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 420,
            column: 7
          }
        },
        "151": {
          start: {
            line: 419,
            column: 8
          },
          end: {
            line: 419,
            column: 14
          }
        },
        "152": {
          start: {
            line: 422,
            column: 23
          },
          end: {
            line: 422,
            column: 59
          }
        },
        "153": {
          start: {
            line: 423,
            column: 23
          },
          end: {
            line: 423,
            column: 57
          }
        },
        "154": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 434,
            column: 7
          }
        },
        "155": {
          start: {
            line: 427,
            column: 8
          },
          end: {
            line: 430,
            column: 9
          }
        },
        "156": {
          start: {
            line: 428,
            column: 25
          },
          end: {
            line: 428,
            column: 67
          }
        },
        "157": {
          start: {
            line: 429,
            column: 10
          },
          end: {
            line: 429,
            column: 36
          }
        },
        "158": {
          start: {
            line: 432,
            column: 8
          },
          end: {
            line: 432,
            column: 32
          }
        },
        "159": {
          start: {
            line: 433,
            column: 8
          },
          end: {
            line: 433,
            column: 14
          }
        },
        "160": {
          start: {
            line: 436,
            column: 20
          },
          end: {
            line: 436,
            column: 82
          }
        },
        "161": {
          start: {
            line: 438,
            column: 6
          },
          end: {
            line: 440,
            column: 7
          }
        },
        "162": {
          start: {
            line: 439,
            column: 8
          },
          end: {
            line: 439,
            column: 14
          }
        },
        "163": {
          start: {
            line: 442,
            column: 18
          },
          end: {
            line: 442,
            column: 45
          }
        },
        "164": {
          start: {
            line: 444,
            column: 6
          },
          end: {
            line: 446,
            column: 7
          }
        },
        "165": {
          start: {
            line: 445,
            column: 8
          },
          end: {
            line: 445,
            column: 15
          }
        },
        "166": {
          start: {
            line: 448,
            column: 6
          },
          end: {
            line: 450,
            column: 7
          }
        },
        "167": {
          start: {
            line: 449,
            column: 8
          },
          end: {
            line: 449,
            column: 15
          }
        },
        "168": {
          start: {
            line: 452,
            column: 6
          },
          end: {
            line: 454,
            column: 7
          }
        },
        "169": {
          start: {
            line: 453,
            column: 8
          },
          end: {
            line: 453,
            column: 17
          }
        },
        "170": {
          start: {
            line: 456,
            column: 6
          },
          end: {
            line: 456,
            column: 26
          }
        },
        "171": {
          start: {
            line: 466,
            column: 2
          },
          end: {
            line: 477,
            column: 6
          }
        },
        "172": {
          start: {
            line: 471,
            column: 6
          },
          end: {
            line: 471,
            column: 28
          }
        },
        "173": {
          start: {
            line: 472,
            column: 6
          },
          end: {
            line: 472,
            column: 29
          }
        },
        "174": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 473,
            column: 55
          }
        },
        "175": {
          start: {
            line: 476,
            column: 6
          },
          end: {
            line: 476,
            column: 25
          }
        },
        "176": {
          start: {
            line: 485,
            column: 2
          },
          end: {
            line: 485,
            column: 40
          }
        },
        "177": {
          start: {
            line: 486,
            column: 2
          },
          end: {
            line: 486,
            column: 35
          }
        },
        "178": {
          start: {
            line: 487,
            column: 2
          },
          end: {
            line: 490,
            column: 3
          }
        },
        "179": {
          start: {
            line: 488,
            column: 4
          },
          end: {
            line: 488,
            column: 35
          }
        },
        "180": {
          start: {
            line: 489,
            column: 4
          },
          end: {
            line: 489,
            column: 36
          }
        },
        "181": {
          start: {
            line: 492,
            column: 2
          },
          end: {
            line: 492,
            column: 17
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 12,
              column: 18
            },
            end: {
              line: 12,
              column: 19
            }
          },
          loc: {
            start: {
              line: 12,
              column: 25
            },
            end: {
              line: 493,
              column: 1
            }
          },
          line: 12
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 98,
              column: 4
            },
            end: {
              line: 98,
              column: 5
            }
          },
          loc: {
            start: {
              line: 98,
              column: 33
            },
            end: {
              line: 106,
              column: 5
            }
          },
          line: 98
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 110,
              column: 4
            },
            end: {
              line: 110,
              column: 5
            }
          },
          loc: {
            start: {
              line: 110,
              column: 25
            },
            end: {
              line: 112,
              column: 5
            }
          },
          line: 110
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 114,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          },
          loc: {
            start: {
              line: 114,
              column: 25
            },
            end: {
              line: 116,
              column: 5
            }
          },
          line: 114
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 118,
              column: 5
            }
          },
          loc: {
            start: {
              line: 118,
              column: 29
            },
            end: {
              line: 120,
              column: 5
            }
          },
          line: 118
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 124,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          loc: {
            start: {
              line: 124,
              column: 13
            },
            end: {
              line: 197,
              column: 5
            }
          },
          line: 124
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 199,
              column: 4
            },
            end: {
              line: 199,
              column: 5
            }
          },
          loc: {
            start: {
              line: 199,
              column: 14
            },
            end: {
              line: 208,
              column: 5
            }
          },
          line: 199
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 210,
              column: 4
            },
            end: {
              line: 210,
              column: 5
            }
          },
          loc: {
            start: {
              line: 210,
              column: 13
            },
            end: {
              line: 215,
              column: 5
            }
          },
          line: 210
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 219,
              column: 4
            },
            end: {
              line: 219,
              column: 5
            }
          },
          loc: {
            start: {
              line: 219,
              column: 25
            },
            end: {
              line: 225,
              column: 5
            }
          },
          line: 219
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 220,
              column: 39
            },
            end: {
              line: 220,
              column: 40
            }
          },
          loc: {
            start: {
              line: 220,
              column: 50
            },
            end: {
              line: 224,
              column: 7
            }
          },
          line: 220
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 227,
              column: 4
            },
            end: {
              line: 227,
              column: 5
            }
          },
          loc: {
            start: {
              line: 227,
              column: 23
            },
            end: {
              line: 241,
              column: 5
            }
          },
          line: 227
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 243,
              column: 4
            },
            end: {
              line: 243,
              column: 5
            }
          },
          loc: {
            start: {
              line: 243,
              column: 22
            },
            end: {
              line: 251,
              column: 5
            }
          },
          line: 243
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 253,
              column: 4
            },
            end: {
              line: 253,
              column: 5
            }
          },
          loc: {
            start: {
              line: 253,
              column: 20
            },
            end: {
              line: 271,
              column: 5
            }
          },
          line: 253
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 273,
              column: 4
            },
            end: {
              line: 273,
              column: 5
            }
          },
          loc: {
            start: {
              line: 273,
              column: 20
            },
            end: {
              line: 275,
              column: 5
            }
          },
          line: 273
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 277,
              column: 4
            },
            end: {
              line: 277,
              column: 5
            }
          },
          loc: {
            start: {
              line: 277,
              column: 23
            },
            end: {
              line: 311,
              column: 5
            }
          },
          line: 277
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 280,
              column: 24
            },
            end: {
              line: 280,
              column: 25
            }
          },
          loc: {
            start: {
              line: 280,
              column: 34
            },
            end: {
              line: 286,
              column: 9
            }
          },
          line: 280
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 315,
              column: 4
            },
            end: {
              line: 315,
              column: 5
            }
          },
          loc: {
            start: {
              line: 315,
              column: 36
            },
            end: {
              line: 332,
              column: 5
            }
          },
          line: 315
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 316,
              column: 23
            },
            end: {
              line: 316,
              column: 24
            }
          },
          loc: {
            start: {
              line: 316,
              column: 35
            },
            end: {
              line: 331,
              column: 7
            }
          },
          line: 316
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 334,
              column: 4
            },
            end: {
              line: 334,
              column: 5
            }
          },
          loc: {
            start: {
              line: 334,
              column: 30
            },
            end: {
              line: 386,
              column: 5
            }
          },
          line: 334
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 388,
              column: 4
            },
            end: {
              line: 388,
              column: 5
            }
          },
          loc: {
            start: {
              line: 388,
              column: 42
            },
            end: {
              line: 397,
              column: 5
            }
          },
          line: 388
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 400,
              column: 4
            },
            end: {
              line: 400,
              column: 5
            }
          },
          loc: {
            start: {
              line: 400,
              column: 41
            },
            end: {
              line: 457,
              column: 5
            }
          },
          line: 400
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 470,
              column: 52
            },
            end: {
              line: 470,
              column: 53
            }
          },
          loc: {
            start: {
              line: 470,
              column: 69
            },
            end: {
              line: 474,
              column: 5
            }
          },
          line: 470
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 475,
              column: 51
            },
            end: {
              line: 475,
              column: 52
            }
          },
          loc: {
            start: {
              line: 475,
              column: 58
            },
            end: {
              line: 477,
              column: 5
            }
          },
          line: 475
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 487,
              column: 26
            },
            end: {
              line: 487,
              column: 27
            }
          },
          loc: {
            start: {
              line: 487,
              column: 38
            },
            end: {
              line: 490,
              column: 3
            }
          },
          line: 487
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 65,
              column: 5
            },
            end: {
              line: 65,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 65,
              column: 11
            },
            end: {
              line: 65,
              column: 19
            }
          }, {
            start: {
              line: 65,
              column: 22
            },
            end: {
              line: 65,
              column: 27
            }
          }],
          line: 65
        },
        "1": {
          loc: {
            start: {
              line: 66,
              column: 5
            },
            end: {
              line: 66,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 66,
              column: 11
            },
            end: {
              line: 66,
              column: 16
            }
          }, {
            start: {
              line: 66,
              column: 19
            },
            end: {
              line: 66,
              column: 27
            }
          }],
          line: 66
        },
        "2": {
          loc: {
            start: {
              line: 67,
              column: 5
            },
            end: {
              line: 67,
              column: 33
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 67,
              column: 11
            },
            end: {
              line: 67,
              column: 22
            }
          }, {
            start: {
              line: 67,
              column: 25
            },
            end: {
              line: 67,
              column: 33
            }
          }],
          line: 67
        },
        "3": {
          loc: {
            start: {
              line: 68,
              column: 5
            },
            end: {
              line: 68,
              column: 33
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 68,
              column: 11
            },
            end: {
              line: 68,
              column: 19
            }
          }, {
            start: {
              line: 68,
              column: 22
            },
            end: {
              line: 68,
              column: 33
            }
          }],
          line: 68
        },
        "4": {
          loc: {
            start: {
              line: 69,
              column: 5
            },
            end: {
              line: 69,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 69,
              column: 11
            },
            end: {
              line: 69,
              column: 17
            }
          }, {
            start: {
              line: 69,
              column: 20
            },
            end: {
              line: 69,
              column: 27
            }
          }],
          line: 69
        },
        "5": {
          loc: {
            start: {
              line: 70,
              column: 5
            },
            end: {
              line: 70,
              column: 33
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 70,
              column: 11
            },
            end: {
              line: 70,
              column: 20
            }
          }, {
            start: {
              line: 70,
              column: 23
            },
            end: {
              line: 70,
              column: 33
            }
          }],
          line: 70
        },
        "6": {
          loc: {
            start: {
              line: 71,
              column: 5
            },
            end: {
              line: 71,
              column: 27
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 71,
              column: 11
            },
            end: {
              line: 71,
              column: 18
            }
          }, {
            start: {
              line: 71,
              column: 21
            },
            end: {
              line: 71,
              column: 27
            }
          }],
          line: 71
        },
        "7": {
          loc: {
            start: {
              line: 72,
              column: 5
            },
            end: {
              line: 72,
              column: 33
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 72,
              column: 11
            },
            end: {
              line: 72,
              column: 21
            }
          }, {
            start: {
              line: 72,
              column: 24
            },
            end: {
              line: 72,
              column: 33
            }
          }],
          line: 72
        },
        "8": {
          loc: {
            start: {
              line: 125,
              column: 6
            },
            end: {
              line: 127,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 125,
              column: 6
            },
            end: {
              line: 127,
              column: 7
            }
          }, {
            start: {
              line: 125,
              column: 6
            },
            end: {
              line: 127,
              column: 7
            }
          }],
          line: 125
        },
        "9": {
          loc: {
            start: {
              line: 125,
              column: 10
            },
            end: {
              line: 125,
              column: 81
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 125,
              column: 10
            },
            end: {
              line: 125,
              column: 32
            }
          }, {
            start: {
              line: 125,
              column: 36
            },
            end: {
              line: 125,
              column: 81
            }
          }],
          line: 125
        },
        "10": {
          loc: {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          }, {
            start: {
              line: 134,
              column: 6
            },
            end: {
              line: 136,
              column: 7
            }
          }],
          line: 134
        },
        "11": {
          loc: {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }, {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 147,
              column: 7
            }
          }],
          line: 145
        },
        "12": {
          loc: {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }, {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }],
          line: 150
        },
        "13": {
          loc: {
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 157,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 157,
              column: 9
            }
          }, {
            start: {
              line: 155,
              column: 8
            },
            end: {
              line: 157,
              column: 9
            }
          }],
          line: 155
        },
        "14": {
          loc: {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          }, {
            start: {
              line: 161,
              column: 8
            },
            end: {
              line: 170,
              column: 9
            }
          }],
          line: 161
        },
        "15": {
          loc: {
            start: {
              line: 163,
              column: 15
            },
            end: {
              line: 170,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 163,
              column: 15
            },
            end: {
              line: 170,
              column: 9
            }
          }, {
            start: {
              line: 163,
              column: 15
            },
            end: {
              line: 170,
              column: 9
            }
          }],
          line: 163
        },
        "16": {
          loc: {
            start: {
              line: 167,
              column: 10
            },
            end: {
              line: 169,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 167,
              column: 10
            },
            end: {
              line: 169,
              column: 11
            }
          }, {
            start: {
              line: 167,
              column: 10
            },
            end: {
              line: 169,
              column: 11
            }
          }],
          line: 167
        },
        "17": {
          loc: {
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          }, {
            start: {
              line: 175,
              column: 8
            },
            end: {
              line: 177,
              column: 9
            }
          }],
          line: 175
        },
        "18": {
          loc: {
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 188,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 188,
              column: 7
            }
          }, {
            start: {
              line: 185,
              column: 6
            },
            end: {
              line: 188,
              column: 7
            }
          }],
          line: 185
        },
        "19": {
          loc: {
            start: {
              line: 185,
              column: 10
            },
            end: {
              line: 186,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 185,
              column: 10
            },
            end: {
              line: 185,
              column: 52
            }
          }, {
            start: {
              line: 186,
              column: 9
            },
            end: {
              line: 186,
              column: 60
            }
          }],
          line: 185
        },
        "20": {
          loc: {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }, {
            start: {
              line: 204,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }],
          line: 204
        },
        "21": {
          loc: {
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 214,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 214,
              column: 7
            }
          }, {
            start: {
              line: 212,
              column: 6
            },
            end: {
              line: 214,
              column: 7
            }
          }],
          line: 212
        },
        "22": {
          loc: {
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 249,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 249,
              column: 7
            }
          }, {
            start: {
              line: 244,
              column: 6
            },
            end: {
              line: 249,
              column: 7
            }
          }],
          line: 244
        },
        "23": {
          loc: {
            start: {
              line: 246,
              column: 8
            },
            end: {
              line: 248,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 246,
              column: 8
            },
            end: {
              line: 248,
              column: 9
            }
          }, {
            start: {
              line: 246,
              column: 8
            },
            end: {
              line: 248,
              column: 9
            }
          }],
          line: 246
        },
        "24": {
          loc: {
            start: {
              line: 258,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 258,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          }, {
            start: {
              line: 258,
              column: 6
            },
            end: {
              line: 269,
              column: 7
            }
          }],
          line: 258
        },
        "25": {
          loc: {
            start: {
              line: 260,
              column: 8
            },
            end: {
              line: 262,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 260,
              column: 8
            },
            end: {
              line: 262,
              column: 9
            }
          }, {
            start: {
              line: 260,
              column: 8
            },
            end: {
              line: 262,
              column: 9
            }
          }],
          line: 260
        },
        "26": {
          loc: {
            start: {
              line: 263,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 263,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }, {
            start: {
              line: 263,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }],
          line: 263
        },
        "27": {
          loc: {
            start: {
              line: 265,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 265,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }, {
            start: {
              line: 265,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }],
          line: 265
        },
        "28": {
          loc: {
            start: {
              line: 267,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 267,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }, {
            start: {
              line: 267,
              column: 13
            },
            end: {
              line: 269,
              column: 7
            }
          }],
          line: 267
        },
        "29": {
          loc: {
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 289,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 289,
              column: 7
            }
          }, {
            start: {
              line: 279,
              column: 6
            },
            end: {
              line: 289,
              column: 7
            }
          }],
          line: 279
        },
        "30": {
          loc: {
            start: {
              line: 283,
              column: 15
            },
            end: {
              line: 283,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 283,
              column: 15
            },
            end: {
              line: 283,
              column: 48
            }
          }, {
            start: {
              line: 283,
              column: 52
            },
            end: {
              line: 283,
              column: 54
            }
          }],
          line: 283
        },
        "31": {
          loc: {
            start: {
              line: 305,
              column: 6
            },
            end: {
              line: 309,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 305,
              column: 6
            },
            end: {
              line: 309,
              column: 7
            }
          }, {
            start: {
              line: 305,
              column: 6
            },
            end: {
              line: 309,
              column: 7
            }
          }],
          line: 305
        },
        "32": {
          loc: {
            start: {
              line: 318,
              column: 24
            },
            end: {
              line: 318,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 318,
              column: 53
            },
            end: {
              line: 318,
              column: 59
            }
          }, {
            start: {
              line: 318,
              column: 62
            },
            end: {
              line: 318,
              column: 66
            }
          }],
          line: 318
        },
        "33": {
          loc: {
            start: {
              line: 320,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 320,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          }, {
            start: {
              line: 320,
              column: 8
            },
            end: {
              line: 323,
              column: 9
            }
          }],
          line: 320
        },
        "34": {
          loc: {
            start: {
              line: 325,
              column: 8
            },
            end: {
              line: 330,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 325,
              column: 8
            },
            end: {
              line: 330,
              column: 9
            }
          }, {
            start: {
              line: 325,
              column: 8
            },
            end: {
              line: 330,
              column: 9
            }
          }],
          line: 325
        },
        "35": {
          loc: {
            start: {
              line: 326,
              column: 10
            },
            end: {
              line: 328,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 326,
              column: 10
            },
            end: {
              line: 328,
              column: 11
            }
          }, {
            start: {
              line: 326,
              column: 10
            },
            end: {
              line: 328,
              column: 11
            }
          }],
          line: 326
        },
        "36": {
          loc: {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }, {
            start: {
              line: 335,
              column: 6
            },
            end: {
              line: 338,
              column: 7
            }
          }],
          line: 335
        },
        "37": {
          loc: {
            start: {
              line: 335,
              column: 10
            },
            end: {
              line: 336,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 335,
              column: 10
            },
            end: {
              line: 335,
              column: 15
            }
          }, {
            start: {
              line: 335,
              column: 20
            },
            end: {
              line: 335,
              column: 60
            }
          }, {
            start: {
              line: 336,
              column: 8
            },
            end: {
              line: 336,
              column: 30
            }
          }, {
            start: {
              line: 336,
              column: 34
            },
            end: {
              line: 336,
              column: 61
            }
          }],
          line: 335
        },
        "38": {
          loc: {
            start: {
              line: 348,
              column: 8
            },
            end: {
              line: 350,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 348,
              column: 8
            },
            end: {
              line: 350,
              column: 9
            }
          }, {
            start: {
              line: 348,
              column: 8
            },
            end: {
              line: 350,
              column: 9
            }
          }],
          line: 348
        },
        "39": {
          loc: {
            start: {
              line: 348,
              column: 12
            },
            end: {
              line: 348,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 348,
              column: 12
            },
            end: {
              line: 348,
              column: 17
            }
          }, {
            start: {
              line: 348,
              column: 21
            },
            end: {
              line: 348,
              column: 43
            }
          }],
          line: 348
        },
        "40": {
          loc: {
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 354,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 354,
              column: 9
            }
          }, {
            start: {
              line: 352,
              column: 8
            },
            end: {
              line: 354,
              column: 9
            }
          }],
          line: 352
        },
        "41": {
          loc: {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 359,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 359,
              column: 9
            }
          }, {
            start: {
              line: 357,
              column: 8
            },
            end: {
              line: 359,
              column: 9
            }
          }],
          line: 357
        },
        "42": {
          loc: {
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          }, {
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 365,
              column: 9
            }
          }],
          line: 361
        },
        "43": {
          loc: {
            start: {
              line: 361,
              column: 12
            },
            end: {
              line: 363,
              column: 44
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 361,
              column: 12
            },
            end: {
              line: 361,
              column: 17
            }
          }, {
            start: {
              line: 361,
              column: 22
            },
            end: {
              line: 361,
              column: 44
            }
          }, {
            start: {
              line: 362,
              column: 12
            },
            end: {
              line: 362,
              column: 56
            }
          }, {
            start: {
              line: 362,
              column: 60
            },
            end: {
              line: 362,
              column: 82
            }
          }, {
            start: {
              line: 362,
              column: 86
            },
            end: {
              line: 362,
              column: 113
            }
          }, {
            start: {
              line: 363,
              column: 12
            },
            end: {
              line: 363,
              column: 44
            }
          }],
          line: 361
        },
        "44": {
          loc: {
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 371,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 371,
              column: 9
            }
          }, {
            start: {
              line: 369,
              column: 8
            },
            end: {
              line: 371,
              column: 9
            }
          }],
          line: 369
        },
        "45": {
          loc: {
            start: {
              line: 375,
              column: 8
            },
            end: {
              line: 377,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 375,
              column: 8
            },
            end: {
              line: 377,
              column: 9
            }
          }, {
            start: {
              line: 375,
              column: 8
            },
            end: {
              line: 377,
              column: 9
            }
          }],
          line: 375
        },
        "46": {
          loc: {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }, {
            start: {
              line: 392,
              column: 6
            },
            end: {
              line: 394,
              column: 7
            }
          }],
          line: 392
        },
        "47": {
          loc: {
            start: {
              line: 396,
              column: 13
            },
            end: {
              line: 396,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 396,
              column: 13
            },
            end: {
              line: 396,
              column: 19
            }
          }, {
            start: {
              line: 396,
              column: 23
            },
            end: {
              line: 396,
              column: 41
            }
          }],
          line: 396
        },
        "48": {
          loc: {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }, {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }],
          line: 408
        },
        "49": {
          loc: {
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 411,
              column: 92
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 409,
              column: 10
            },
            end: {
              line: 411,
              column: 56
            }
          }, {
            start: {
              line: 411,
              column: 59
            },
            end: {
              line: 411,
              column: 92
            }
          }],
          line: 408
        },
        "50": {
          loc: {
            start: {
              line: 409,
              column: 10
            },
            end: {
              line: 411,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 409,
              column: 10
            },
            end: {
              line: 409,
              column: 39
            }
          }, {
            start: {
              line: 409,
              column: 43
            },
            end: {
              line: 409,
              column: 73
            }
          }, {
            start: {
              line: 410,
              column: 9
            },
            end: {
              line: 410,
              column: 43
            }
          }, {
            start: {
              line: 410,
              column: 47
            },
            end: {
              line: 410,
              column: 79
            }
          }, {
            start: {
              line: 411,
              column: 10
            },
            end: {
              line: 411,
              column: 55
            }
          }],
          line: 409
        },
        "51": {
          loc: {
            start: {
              line: 418,
              column: 6
            },
            end: {
              line: 420,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 418,
              column: 6
            },
            end: {
              line: 420,
              column: 7
            }
          }, {
            start: {
              line: 418,
              column: 6
            },
            end: {
              line: 420,
              column: 7
            }
          }],
          line: 418
        },
        "52": {
          loc: {
            start: {
              line: 418,
              column: 10
            },
            end: {
              line: 418,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 418,
              column: 10
            },
            end: {
              line: 418,
              column: 23
            }
          }, {
            start: {
              line: 418,
              column: 27
            },
            end: {
              line: 418,
              column: 63
            }
          }],
          line: 418
        },
        "53": {
          loc: {
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 434,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 434,
              column: 7
            }
          }, {
            start: {
              line: 425,
              column: 6
            },
            end: {
              line: 434,
              column: 7
            }
          }],
          line: 425
        },
        "54": {
          loc: {
            start: {
              line: 425,
              column: 10
            },
            end: {
              line: 426,
              column: 88
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 425,
              column: 10
            },
            end: {
              line: 425,
              column: 19
            }
          }, {
            start: {
              line: 425,
              column: 24
            },
            end: {
              line: 425,
              column: 54
            }
          }, {
            start: {
              line: 425,
              column: 58
            },
            end: {
              line: 425,
              column: 87
            }
          }, {
            start: {
              line: 426,
              column: 11
            },
            end: {
              line: 426,
              column: 19
            }
          }, {
            start: {
              line: 426,
              column: 24
            },
            end: {
              line: 426,
              column: 54
            }
          }, {
            start: {
              line: 426,
              column: 58
            },
            end: {
              line: 426,
              column: 87
            }
          }],
          line: 425
        },
        "55": {
          loc: {
            start: {
              line: 427,
              column: 8
            },
            end: {
              line: 430,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 427,
              column: 8
            },
            end: {
              line: 430,
              column: 9
            }
          }, {
            start: {
              line: 427,
              column: 8
            },
            end: {
              line: 430,
              column: 9
            }
          }],
          line: 427
        },
        "56": {
          loc: {
            start: {
              line: 438,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 438,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          }, {
            start: {
              line: 438,
              column: 6
            },
            end: {
              line: 440,
              column: 7
            }
          }],
          line: 438
        },
        "57": {
          loc: {
            start: {
              line: 444,
              column: 6
            },
            end: {
              line: 446,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 444,
              column: 6
            },
            end: {
              line: 446,
              column: 7
            }
          }, {
            start: {
              line: 444,
              column: 6
            },
            end: {
              line: 446,
              column: 7
            }
          }],
          line: 444
        },
        "58": {
          loc: {
            start: {
              line: 444,
              column: 10
            },
            end: {
              line: 444,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 444,
              column: 10
            },
            end: {
              line: 444,
              column: 42
            }
          }, {
            start: {
              line: 444,
              column: 46
            },
            end: {
              line: 444,
              column: 55
            }
          }],
          line: 444
        },
        "59": {
          loc: {
            start: {
              line: 448,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 448,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          }, {
            start: {
              line: 448,
              column: 6
            },
            end: {
              line: 450,
              column: 7
            }
          }],
          line: 448
        },
        "60": {
          loc: {
            start: {
              line: 448,
              column: 10
            },
            end: {
              line: 448,
              column: 72
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 448,
              column: 10
            },
            end: {
              line: 448,
              column: 44
            }
          }, {
            start: {
              line: 448,
              column: 48
            },
            end: {
              line: 448,
              column: 72
            }
          }],
          line: 448
        },
        "61": {
          loc: {
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 454,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 454,
              column: 7
            }
          }, {
            start: {
              line: 452,
              column: 6
            },
            end: {
              line: 454,
              column: 7
            }
          }],
          line: 452
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0,
        "181": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0, 0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0, 0, 0, 0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0, 0, 0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0, 0, 0, 0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = (cov_9zddcyc80.s[0]++, function ($$$1) {
    var _ref;

    cov_9zddcyc80.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_9zddcyc80.s[1]++, 'dropdown');
    var VERSION = (cov_9zddcyc80.s[2]++, '4.1.3');
    var DATA_KEY = (cov_9zddcyc80.s[3]++, 'bs.dropdown');
    var EVENT_KEY = (cov_9zddcyc80.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_9zddcyc80.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_9zddcyc80.s[6]++, $$$1.fn[NAME]);
    var ESCAPE_KEYCODE = (cov_9zddcyc80.s[7]++, 27); // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = (cov_9zddcyc80.s[8]++, 32); // KeyboardEvent.which value for space key

    var TAB_KEYCODE = (cov_9zddcyc80.s[9]++, 9); // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = (cov_9zddcyc80.s[10]++, 38); // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = (cov_9zddcyc80.s[11]++, 40); // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = (cov_9zddcyc80.s[12]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = (cov_9zddcyc80.s[13]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
    var RTL = (cov_9zddcyc80.s[14]++, document.documentElement.dir === 'rtl');
    var Event = (cov_9zddcyc80.s[15]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_9zddcyc80.s[16]++, {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    });
    var Selector = (cov_9zddcyc80.s[17]++, {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    });
    var AttachmentMap = (cov_9zddcyc80.s[18]++, (_ref = {}, _ref[RTL ? (cov_9zddcyc80.b[0][0]++, 'TOPEND') : (cov_9zddcyc80.b[0][1]++, 'TOP')] = 'top-start', _ref[RTL ? (cov_9zddcyc80.b[1][0]++, 'TOP') : (cov_9zddcyc80.b[1][1]++, 'TOPEND')] = 'top-end', _ref[RTL ? (cov_9zddcyc80.b[2][0]++, 'BOTTOMEND') : (cov_9zddcyc80.b[2][1]++, 'BOTTOM')] = 'bottom-start', _ref[RTL ? (cov_9zddcyc80.b[3][0]++, 'BOTTOM') : (cov_9zddcyc80.b[3][1]++, 'BOTTOMEND')] = 'bottom-end', _ref[RTL ? (cov_9zddcyc80.b[4][0]++, 'LEFT') : (cov_9zddcyc80.b[4][1]++, 'RIGHT')] = 'right-start', _ref[RTL ? (cov_9zddcyc80.b[5][0]++, 'LEFTEND') : (cov_9zddcyc80.b[5][1]++, 'RIGHTEND')] = 'right-end', _ref[RTL ? (cov_9zddcyc80.b[6][0]++, 'RIGHT') : (cov_9zddcyc80.b[6][1]++, 'LEFT')] = 'left-start', _ref[RTL ? (cov_9zddcyc80.b[7][0]++, 'RIGHTEND') : (cov_9zddcyc80.b[7][1]++, 'LEFTEND')] = 'left-end', _ref));
    var Default = (cov_9zddcyc80.s[19]++, {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    });
    var DefaultType = (cov_9zddcyc80.s[20]++, {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        cov_9zddcyc80.f[1]++;
        cov_9zddcyc80.s[21]++;
        this._element = element;
        cov_9zddcyc80.s[22]++;
        this._popper = null;
        cov_9zddcyc80.s[23]++;
        this._config = this._getConfig(config);
        cov_9zddcyc80.s[24]++;
        this._menu = this._getMenuElement();
        cov_9zddcyc80.s[25]++;
        this._inNavbar = this._detectNavbar();
        cov_9zddcyc80.s[26]++;

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        cov_9zddcyc80.f[5]++;
        cov_9zddcyc80.s[30]++;

        if ((cov_9zddcyc80.b[9][0]++, this._element.disabled) || (cov_9zddcyc80.b[9][1]++, $$$1(this._element).hasClass(ClassName.DISABLED))) {
          cov_9zddcyc80.b[8][0]++;
          cov_9zddcyc80.s[31]++;
          return;
        } else {
          cov_9zddcyc80.b[8][1]++;
        }

        var parent = (cov_9zddcyc80.s[32]++, Dropdown._getParentFromElement(this._element));
        var isActive = (cov_9zddcyc80.s[33]++, $$$1(this._menu).hasClass(ClassName.SHOW));
        cov_9zddcyc80.s[34]++;

        Dropdown._clearMenus();

        cov_9zddcyc80.s[35]++;

        if (isActive) {
          cov_9zddcyc80.b[10][0]++;
          cov_9zddcyc80.s[36]++;
          return;
        } else {
          cov_9zddcyc80.b[10][1]++;
        }

        var relatedTarget = (cov_9zddcyc80.s[37]++, {
          relatedTarget: this._element
        });
        var showEvent = (cov_9zddcyc80.s[38]++, $$$1.Event(Event.SHOW, relatedTarget));
        cov_9zddcyc80.s[39]++;
        $$$1(parent).trigger(showEvent);
        cov_9zddcyc80.s[40]++;

        if (showEvent.isDefaultPrevented()) {
          cov_9zddcyc80.b[11][0]++;
          cov_9zddcyc80.s[41]++;
          return;
        } else {
          cov_9zddcyc80.b[11][1]++;
        } // Disable totally Popper.js for Dropdown in Navbar


        cov_9zddcyc80.s[42]++;

        if (!this._inNavbar) {
          cov_9zddcyc80.b[12][0]++;
          cov_9zddcyc80.s[43]++;

          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            cov_9zddcyc80.b[13][0]++;
            cov_9zddcyc80.s[44]++;
            throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
          } else {
            cov_9zddcyc80.b[13][1]++;
          }

          var referenceElement = (cov_9zddcyc80.s[45]++, this._element);
          cov_9zddcyc80.s[46]++;

          if (this._config.reference === 'parent') {
            cov_9zddcyc80.b[14][0]++;
            cov_9zddcyc80.s[47]++;
            referenceElement = parent;
          } else {
            cov_9zddcyc80.b[14][1]++;
            cov_9zddcyc80.s[48]++;

            if (Util.isElement(this._config.reference)) {
              cov_9zddcyc80.b[15][0]++;
              cov_9zddcyc80.s[49]++;
              referenceElement = this._config.reference; // Check if it's jQuery element

              cov_9zddcyc80.s[50]++;

              if (typeof this._config.reference.jquery !== 'undefined') {
                cov_9zddcyc80.b[16][0]++;
                cov_9zddcyc80.s[51]++;
                referenceElement = this._config.reference[0];
              } else {
                cov_9zddcyc80.b[16][1]++;
              }
            } else {
              cov_9zddcyc80.b[15][1]++;
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          cov_9zddcyc80.s[52]++;

          if (this._config.boundary !== 'scrollParent') {
            cov_9zddcyc80.b[17][0]++;
            cov_9zddcyc80.s[53]++;
            $$$1(parent).addClass(ClassName.POSITION_STATIC);
          } else {
            cov_9zddcyc80.b[17][1]++;
          }

          cov_9zddcyc80.s[54]++;
          this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
        } else {
          cov_9zddcyc80.b[12][1]++;
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        cov_9zddcyc80.s[55]++;

        if ((cov_9zddcyc80.b[19][0]++, 'ontouchstart' in document.documentElement) && (cov_9zddcyc80.b[19][1]++, $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0)) {
          cov_9zddcyc80.b[18][0]++;
          cov_9zddcyc80.s[56]++;
          $$$1(document.body).children().on('mouseover', null, $$$1.noop);
        } else {
          cov_9zddcyc80.b[18][1]++;
        }

        cov_9zddcyc80.s[57]++;

        this._element.focus();

        cov_9zddcyc80.s[58]++;

        this._element.setAttribute('aria-expanded', true);

        cov_9zddcyc80.s[59]++;
        $$$1(this._menu).toggleClass(ClassName.SHOW);
        cov_9zddcyc80.s[60]++;
        $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        cov_9zddcyc80.f[6]++;
        cov_9zddcyc80.s[61]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_9zddcyc80.s[62]++;
        $$$1(this._element).off(EVENT_KEY);
        cov_9zddcyc80.s[63]++;
        this._element = null;
        cov_9zddcyc80.s[64]++;
        this._menu = null;
        cov_9zddcyc80.s[65]++;

        if (this._popper !== null) {
          cov_9zddcyc80.b[20][0]++;
          cov_9zddcyc80.s[66]++;

          this._popper.destroy();

          cov_9zddcyc80.s[67]++;
          this._popper = null;
        } else {
          cov_9zddcyc80.b[20][1]++;
        }
      };

      _proto.update = function update() {
        cov_9zddcyc80.f[7]++;
        cov_9zddcyc80.s[68]++;
        this._inNavbar = this._detectNavbar();
        cov_9zddcyc80.s[69]++;

        if (this._popper !== null) {
          cov_9zddcyc80.b[21][0]++;
          cov_9zddcyc80.s[70]++;

          this._popper.scheduleUpdate();
        } else {
          cov_9zddcyc80.b[21][1]++;
        }
      }; // Private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        cov_9zddcyc80.f[8]++;
        cov_9zddcyc80.s[71]++;
        $$$1(this._element).on(Event.CLICK, function (event) {
          cov_9zddcyc80.f[9]++;
          cov_9zddcyc80.s[72]++;
          event.preventDefault();
          cov_9zddcyc80.s[73]++;
          event.stopPropagation();
          cov_9zddcyc80.s[74]++;

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        cov_9zddcyc80.f[10]++;
        cov_9zddcyc80.s[75]++;
        config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
        cov_9zddcyc80.s[76]++;
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        cov_9zddcyc80.s[77]++;
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        cov_9zddcyc80.f[11]++;
        cov_9zddcyc80.s[78]++;

        if (!this._menu) {
          cov_9zddcyc80.b[22][0]++;
          var parent = (cov_9zddcyc80.s[79]++, Dropdown._getParentFromElement(this._element));
          cov_9zddcyc80.s[80]++;

          if (parent) {
            cov_9zddcyc80.b[23][0]++;
            cov_9zddcyc80.s[81]++;
            this._menu = parent.querySelector(Selector.MENU);
          } else {
            cov_9zddcyc80.b[23][1]++;
          }
        } else {
          cov_9zddcyc80.b[22][1]++;
        }

        cov_9zddcyc80.s[82]++;
        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        cov_9zddcyc80.f[12]++;
        var $parentDropdown = (cov_9zddcyc80.s[83]++, $$$1(this._element.parentNode));
        var placement = (cov_9zddcyc80.s[84]++, AttachmentMap.BOTTOM); // Handle dropup

        cov_9zddcyc80.s[85]++;

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          cov_9zddcyc80.b[24][0]++;
          cov_9zddcyc80.s[86]++;
          placement = AttachmentMap.TOP;
          cov_9zddcyc80.s[87]++;

          if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            cov_9zddcyc80.b[25][0]++;
            cov_9zddcyc80.s[88]++;
            placement = AttachmentMap.TOPEND;
          } else {
            cov_9zddcyc80.b[25][1]++;
          }
        } else {
          cov_9zddcyc80.b[24][1]++;
          cov_9zddcyc80.s[89]++;

          if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
            cov_9zddcyc80.b[26][0]++;
            cov_9zddcyc80.s[90]++;
            placement = AttachmentMap.RIGHT;
          } else {
            cov_9zddcyc80.b[26][1]++;
            cov_9zddcyc80.s[91]++;

            if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
              cov_9zddcyc80.b[27][0]++;
              cov_9zddcyc80.s[92]++;
              placement = AttachmentMap.LEFT;
            } else {
              cov_9zddcyc80.b[27][1]++;
              cov_9zddcyc80.s[93]++;

              if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                cov_9zddcyc80.b[28][0]++;
                cov_9zddcyc80.s[94]++;
                placement = AttachmentMap.BOTTOMEND;
              } else {
                cov_9zddcyc80.b[28][1]++;
              }
            }
          }
        }

        cov_9zddcyc80.s[95]++;
        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        cov_9zddcyc80.f[13]++;
        cov_9zddcyc80.s[96]++;
        return $$$1(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        cov_9zddcyc80.f[14]++;
        var offsetConf = (cov_9zddcyc80.s[97]++, {});
        cov_9zddcyc80.s[98]++;

        if (typeof this._config.offset === 'function') {
          cov_9zddcyc80.b[29][0]++;
          cov_9zddcyc80.s[99]++;

          offsetConf.fn = function (data) {
            cov_9zddcyc80.f[15]++;
            cov_9zddcyc80.s[100]++;
            data.offsets = _objectSpread({}, data.offsets, (cov_9zddcyc80.b[30][0]++, _this2._config.offset(data.offsets)) || (cov_9zddcyc80.b[30][1]++, {}));
            cov_9zddcyc80.s[101]++;
            return data;
          };
        } else {
          cov_9zddcyc80.b[29][1]++;
          cov_9zddcyc80.s[102]++;
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = (cov_9zddcyc80.s[103]++, {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          } // Disable Popper.js if we have a static display

        });
        cov_9zddcyc80.s[104]++;

        if (this._config.display === 'static') {
          cov_9zddcyc80.b[31][0]++;
          cov_9zddcyc80.s[105]++;
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        } else {
          cov_9zddcyc80.b[31][1]++;
        }

        cov_9zddcyc80.s[106]++;
        return popperConfig;
      }; // Static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        cov_9zddcyc80.f[16]++;
        cov_9zddcyc80.s[107]++;
        return this.each(function () {
          cov_9zddcyc80.f[17]++;
          var data = (cov_9zddcyc80.s[108]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_9zddcyc80.s[109]++, typeof config === 'object' ? (cov_9zddcyc80.b[32][0]++, config) : (cov_9zddcyc80.b[32][1]++, null));

          cov_9zddcyc80.s[110]++;

          if (!data) {
            cov_9zddcyc80.b[33][0]++;
            cov_9zddcyc80.s[111]++;
            data = new Dropdown(this, _config);
            cov_9zddcyc80.s[112]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_9zddcyc80.b[33][1]++;
          }

          cov_9zddcyc80.s[113]++;

          if (typeof config === 'string') {
            cov_9zddcyc80.b[34][0]++;
            cov_9zddcyc80.s[114]++;

            if (typeof data[config] === 'undefined') {
              cov_9zddcyc80.b[35][0]++;
              cov_9zddcyc80.s[115]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_9zddcyc80.b[35][1]++;
            }

            cov_9zddcyc80.s[116]++;
            data[config]();
          } else {
            cov_9zddcyc80.b[34][1]++;
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        cov_9zddcyc80.f[18]++;
        cov_9zddcyc80.s[117]++;

        if ((cov_9zddcyc80.b[37][0]++, event) && ((cov_9zddcyc80.b[37][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_9zddcyc80.b[37][2]++, event.type === 'keyup') && (cov_9zddcyc80.b[37][3]++, event.which !== TAB_KEYCODE))) {
          cov_9zddcyc80.b[36][0]++;
          cov_9zddcyc80.s[118]++;
          return;
        } else {
          cov_9zddcyc80.b[36][1]++;
        }

        var toggles = (cov_9zddcyc80.s[119]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
        cov_9zddcyc80.s[120]++;

        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = (cov_9zddcyc80.s[121]++, Dropdown._getParentFromElement(toggles[i]));
          var context = (cov_9zddcyc80.s[122]++, $$$1(toggles[i]).data(DATA_KEY));
          var relatedTarget = (cov_9zddcyc80.s[123]++, {
            relatedTarget: toggles[i]
          });
          cov_9zddcyc80.s[124]++;

          if ((cov_9zddcyc80.b[39][0]++, event) && (cov_9zddcyc80.b[39][1]++, event.type === 'click')) {
            cov_9zddcyc80.b[38][0]++;
            cov_9zddcyc80.s[125]++;
            relatedTarget.clickEvent = event;
          } else {
            cov_9zddcyc80.b[38][1]++;
          }

          cov_9zddcyc80.s[126]++;

          if (!context) {
            cov_9zddcyc80.b[40][0]++;
            cov_9zddcyc80.s[127]++;
            continue;
          } else {
            cov_9zddcyc80.b[40][1]++;
          }

          var dropdownMenu = (cov_9zddcyc80.s[128]++, context._menu);
          cov_9zddcyc80.s[129]++;

          if (!$$$1(parent).hasClass(ClassName.SHOW)) {
            cov_9zddcyc80.b[41][0]++;
            cov_9zddcyc80.s[130]++;
            continue;
          } else {
            cov_9zddcyc80.b[41][1]++;
          }

          cov_9zddcyc80.s[131]++;

          if ((cov_9zddcyc80.b[43][0]++, event) && ((cov_9zddcyc80.b[43][1]++, event.type === 'click') && (cov_9zddcyc80.b[43][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_9zddcyc80.b[43][3]++, event.type === 'keyup') && (cov_9zddcyc80.b[43][4]++, event.which === TAB_KEYCODE)) && (cov_9zddcyc80.b[43][5]++, $$$1.contains(parent, event.target))) {
            cov_9zddcyc80.b[42][0]++;
            cov_9zddcyc80.s[132]++;
            continue;
          } else {
            cov_9zddcyc80.b[42][1]++;
          }

          var hideEvent = (cov_9zddcyc80.s[133]++, $$$1.Event(Event.HIDE, relatedTarget));
          cov_9zddcyc80.s[134]++;
          $$$1(parent).trigger(hideEvent);
          cov_9zddcyc80.s[135]++;

          if (hideEvent.isDefaultPrevented()) {
            cov_9zddcyc80.b[44][0]++;
            cov_9zddcyc80.s[136]++;
            continue;
          } else {
            cov_9zddcyc80.b[44][1]++;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          cov_9zddcyc80.s[137]++;

          if ('ontouchstart' in document.documentElement) {
            cov_9zddcyc80.b[45][0]++;
            cov_9zddcyc80.s[138]++;
            $$$1(document.body).children().off('mouseover', null, $$$1.noop);
          } else {
            cov_9zddcyc80.b[45][1]++;
          }

          cov_9zddcyc80.s[139]++;
          toggles[i].setAttribute('aria-expanded', 'false');
          cov_9zddcyc80.s[140]++;
          $$$1(dropdownMenu).removeClass(ClassName.SHOW);
          cov_9zddcyc80.s[141]++;
          $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        cov_9zddcyc80.f[19]++;
        var parent;
        var selector = (cov_9zddcyc80.s[142]++, Util.getSelectorFromElement(element));
        cov_9zddcyc80.s[143]++;

        if (selector) {
          cov_9zddcyc80.b[46][0]++;
          cov_9zddcyc80.s[144]++;
          parent = document.querySelector(selector);
        } else {
          cov_9zddcyc80.b[46][1]++;
        }

        cov_9zddcyc80.s[145]++;
        return (cov_9zddcyc80.b[47][0]++, parent) || (cov_9zddcyc80.b[47][1]++, element.parentNode);
      }; // eslint-disable-next-line complexity


      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        cov_9zddcyc80.f[20]++;
        cov_9zddcyc80.s[146]++;

        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? (cov_9zddcyc80.b[49][0]++, (cov_9zddcyc80.b[50][0]++, event.which === SPACE_KEYCODE) || (cov_9zddcyc80.b[50][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_9zddcyc80.b[50][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_9zddcyc80.b[50][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_9zddcyc80.b[50][4]++, $$$1(event.target).closest(Selector.MENU).length))) : (cov_9zddcyc80.b[49][1]++, !REGEXP_KEYDOWN.test(event.which))) {
          cov_9zddcyc80.b[48][0]++;
          cov_9zddcyc80.s[147]++;
          return;
        } else {
          cov_9zddcyc80.b[48][1]++;
        }

        cov_9zddcyc80.s[148]++;
        event.preventDefault();
        cov_9zddcyc80.s[149]++;
        event.stopPropagation();
        cov_9zddcyc80.s[150]++;

        if ((cov_9zddcyc80.b[52][0]++, this.disabled) || (cov_9zddcyc80.b[52][1]++, $$$1(this).hasClass(ClassName.DISABLED))) {
          cov_9zddcyc80.b[51][0]++;
          cov_9zddcyc80.s[151]++;
          return;
        } else {
          cov_9zddcyc80.b[51][1]++;
        }

        var parent = (cov_9zddcyc80.s[152]++, Dropdown._getParentFromElement(this));
        var isActive = (cov_9zddcyc80.s[153]++, $$$1(parent).hasClass(ClassName.SHOW));
        cov_9zddcyc80.s[154]++;

        if ((cov_9zddcyc80.b[54][0]++, !isActive) && ((cov_9zddcyc80.b[54][1]++, event.which !== ESCAPE_KEYCODE) || (cov_9zddcyc80.b[54][2]++, event.which !== SPACE_KEYCODE)) || (cov_9zddcyc80.b[54][3]++, isActive) && ((cov_9zddcyc80.b[54][4]++, event.which === ESCAPE_KEYCODE) || (cov_9zddcyc80.b[54][5]++, event.which === SPACE_KEYCODE))) {
          cov_9zddcyc80.b[53][0]++;
          cov_9zddcyc80.s[155]++;

          if (event.which === ESCAPE_KEYCODE) {
            cov_9zddcyc80.b[55][0]++;
            var toggle = (cov_9zddcyc80.s[156]++, parent.querySelector(Selector.DATA_TOGGLE));
            cov_9zddcyc80.s[157]++;
            $$$1(toggle).trigger('focus');
          } else {
            cov_9zddcyc80.b[55][1]++;
          }

          cov_9zddcyc80.s[158]++;
          $$$1(this).trigger('click');
          cov_9zddcyc80.s[159]++;
          return;
        } else {
          cov_9zddcyc80.b[53][1]++;
        }

        var items = (cov_9zddcyc80.s[160]++, [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS)));
        cov_9zddcyc80.s[161]++;

        if (items.length === 0) {
          cov_9zddcyc80.b[56][0]++;
          cov_9zddcyc80.s[162]++;
          return;
        } else {
          cov_9zddcyc80.b[56][1]++;
        }

        var index = (cov_9zddcyc80.s[163]++, items.indexOf(event.target));
        cov_9zddcyc80.s[164]++;

        if ((cov_9zddcyc80.b[58][0]++, event.which === ARROW_UP_KEYCODE) && (cov_9zddcyc80.b[58][1]++, index > 0)) {
          cov_9zddcyc80.b[57][0]++;
          cov_9zddcyc80.s[165]++;
          // Up
          index--;
        } else {
          cov_9zddcyc80.b[57][1]++;
        }

        cov_9zddcyc80.s[166]++;

        if ((cov_9zddcyc80.b[60][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_9zddcyc80.b[60][1]++, index < items.length - 1)) {
          cov_9zddcyc80.b[59][0]++;
          cov_9zddcyc80.s[167]++;
          // Down
          index++;
        } else {
          cov_9zddcyc80.b[59][1]++;
        }

        cov_9zddcyc80.s[168]++;

        if (index < 0) {
          cov_9zddcyc80.b[61][0]++;
          cov_9zddcyc80.s[169]++;
          index = 0;
        } else {
          cov_9zddcyc80.b[61][1]++;
        }

        cov_9zddcyc80.s[170]++;
        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          cov_9zddcyc80.f[2]++;
          cov_9zddcyc80.s[27]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_9zddcyc80.f[3]++;
          cov_9zddcyc80.s[28]++;
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          cov_9zddcyc80.f[4]++;
          cov_9zddcyc80.s[29]++;
          return DefaultType;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_9zddcyc80.s[171]++;
    $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      cov_9zddcyc80.f[21]++;
      cov_9zddcyc80.s[172]++;
      event.preventDefault();
      cov_9zddcyc80.s[173]++;
      event.stopPropagation();
      cov_9zddcyc80.s[174]++;

      Dropdown._jQueryInterface.call($$$1(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      cov_9zddcyc80.f[22]++;
      cov_9zddcyc80.s[175]++;
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_9zddcyc80.s[176]++;
    $$$1.fn[NAME] = Dropdown._jQueryInterface;
    cov_9zddcyc80.s[177]++;
    $$$1.fn[NAME].Constructor = Dropdown;
    cov_9zddcyc80.s[178]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_9zddcyc80.f[23]++;
      cov_9zddcyc80.s[179]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_9zddcyc80.s[180]++;
      return Dropdown._jQueryInterface;
    };

    cov_9zddcyc80.s[181]++;
    return Dropdown;
  }($, Popper));

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map
