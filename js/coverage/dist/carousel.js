(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Carousel = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
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

  var cov_1vad5v4mxo = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/carousel.js",
        hash = "e6e503b694b5bad11cadd2c4a40621e9468cc096",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/carousel.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 518,
            column: 5
          }
        },
        "1": {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 18,
            column: 43
          }
        },
        "2": {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 19,
            column: 40
          }
        },
        "3": {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 46
          }
        },
        "4": {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 47
          }
        },
        "5": {
          start: {
            line: 22,
            column: 33
          },
          end: {
            line: 22,
            column: 44
          }
        },
        "6": {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 43
          }
        },
        "7": {
          start: {
            line: 24,
            column: 33
          },
          end: {
            line: 24,
            column: 35
          }
        },
        "8": {
          start: {
            line: 25,
            column: 33
          },
          end: {
            line: 25,
            column: 35
          }
        },
        "9": {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 36
          }
        },
        "10": {
          start: {
            line: 28,
            column: 18
          },
          end: {
            line: 34,
            column: 3
          }
        },
        "11": {
          start: {
            line: 36,
            column: 22
          },
          end: {
            line: 42,
            column: 3
          }
        },
        "12": {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 49,
            column: 3
          }
        },
        "13": {
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 60,
            column: 3
          }
        },
        "14": {
          start: {
            line: 62,
            column: 20
          },
          end: {
            line: 71,
            column: 3
          }
        },
        "15": {
          start: {
            line: 73,
            column: 19
          },
          end: {
            line: 81,
            column: 3
          }
        },
        "16": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 37
          }
        },
        "17": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 37
          }
        },
        "18": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 93,
            column: 37
          }
        },
        "19": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 38
          }
        },
        "20": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 38
          }
        },
        "21": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 37
          }
        },
        "22": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 56
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
            column: 81
          }
        },
        "25": {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 31
          }
        },
        "26": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 20
          }
        },
        "27": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 20
          }
        },
        "28": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 122,
            column: 7
          }
        },
        "29": {
          start: {
            line: 121,
            column: 8
          },
          end: {
            line: 121,
            column: 35
          }
        },
        "30": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        },
        "31": {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 130,
            column: 19
          }
        },
        "32": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 137,
            column: 7
          }
        },
        "33": {
          start: {
            line: 136,
            column: 8
          },
          end: {
            line: 136,
            column: 35
          }
        },
        "34": {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 143,
            column: 7
          }
        },
        "35": {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 142,
            column: 29
          }
        },
        "36": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 148,
            column: 7
          }
        },
        "37": {
          start: {
            line: 146,
            column: 8
          },
          end: {
            line: 146,
            column: 48
          }
        },
        "38": {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 24
          }
        },
        "39": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 35
          }
        },
        "40": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 151,
            column: 27
          }
        },
        "41": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 157,
            column: 7
          }
        },
        "42": {
          start: {
            line: 156,
            column: 8
          },
          end: {
            line: 156,
            column: 30
          }
        },
        "43": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 162,
            column: 7
          }
        },
        "44": {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 160,
            column: 37
          }
        },
        "45": {
          start: {
            line: 161,
            column: 8
          },
          end: {
            line: 161,
            column: 29
          }
        },
        "46": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        "47": {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        },
        "48": {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 173,
            column: 77
          }
        },
        "49": {
          start: {
            line: 175,
            column: 26
          },
          end: {
            line: 175,
            column: 65
          }
        },
        "50": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 179,
            column: 7
          }
        },
        "51": {
          start: {
            line: 178,
            column: 8
          },
          end: {
            line: 178,
            column: 14
          }
        },
        "52": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 184,
            column: 7
          }
        },
        "53": {
          start: {
            line: 182,
            column: 8
          },
          end: {
            line: 182,
            column: 62
          }
        },
        "54": {
          start: {
            line: 182,
            column: 47
          },
          end: {
            line: 182,
            column: 61
          }
        },
        "55": {
          start: {
            line: 183,
            column: 8
          },
          end: {
            line: 183,
            column: 14
          }
        },
        "56": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 190,
            column: 7
          }
        },
        "57": {
          start: {
            line: 187,
            column: 8
          },
          end: {
            line: 187,
            column: 20
          }
        },
        "58": {
          start: {
            line: 188,
            column: 8
          },
          end: {
            line: 188,
            column: 20
          }
        },
        "59": {
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 189,
            column: 14
          }
        },
        "60": {
          start: {
            line: 192,
            column: 24
          },
          end: {
            line: 194,
            column: 24
          }
        },
        "61": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 48
          }
        },
        "62": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 37
          }
        },
        "63": {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 201,
            column: 43
          }
        },
        "64": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 36
          }
        },
        "65": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 36
          }
        },
        "66": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 205,
            column: 36
          }
        },
        "67": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 206,
            column: 36
          }
        },
        "68": {
          start: {
            line: 207,
            column: 6
          },
          end: {
            line: 207,
            column: 36
          }
        },
        "69": {
          start: {
            line: 208,
            column: 6
          },
          end: {
            line: 208,
            column: 36
          }
        },
        "70": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 36
          }
        },
        "71": {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 210,
            column: 36
          }
        },
        "72": {
          start: {
            line: 216,
            column: 6
          },
          end: {
            line: 219,
            column: 7
          }
        },
        "73": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 220,
            column: 53
          }
        },
        "74": {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 221,
            column: 19
          }
        },
        "75": {
          start: {
            line: 225,
            column: 6
          },
          end: {
            line: 228,
            column: 7
          }
        },
        "76": {
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 227,
            column: 61
          }
        },
        "77": {
          start: {
            line: 227,
            column: 40
          },
          end: {
            line: 227,
            column: 60
          }
        },
        "78": {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 250,
            column: 7
          }
        },
        "79": {
          start: {
            line: 231,
            column: 8
          },
          end: {
            line: 233,
            column: 61
          }
        },
        "80": {
          start: {
            line: 232,
            column: 43
          },
          end: {
            line: 232,
            column: 60
          }
        },
        "81": {
          start: {
            line: 233,
            column: 43
          },
          end: {
            line: 233,
            column: 60
          }
        },
        "82": {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 249,
            column: 9
          }
        },
        "83": {
          start: {
            line: 242,
            column: 10
          },
          end: {
            line: 248,
            column: 12
          }
        },
        "84": {
          start: {
            line: 243,
            column: 12
          },
          end: {
            line: 243,
            column: 24
          }
        },
        "85": {
          start: {
            line: 244,
            column: 12
          },
          end: {
            line: 246,
            column: 13
          }
        },
        "86": {
          start: {
            line: 245,
            column: 14
          },
          end: {
            line: 245,
            column: 45
          }
        },
        "87": {
          start: {
            line: 247,
            column: 12
          },
          end: {
            line: 247,
            column: 120
          }
        },
        "88": {
          start: {
            line: 247,
            column: 54
          },
          end: {
            line: 247,
            column: 71
          }
        },
        "89": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 256,
            column: 7
          }
        },
        "90": {
          start: {
            line: 255,
            column: 8
          },
          end: {
            line: 255,
            column: 14
          }
        },
        "91": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "92": {
          start: {
            line: 260,
            column: 10
          },
          end: {
            line: 260,
            column: 32
          }
        },
        "93": {
          start: {
            line: 261,
            column: 10
          },
          end: {
            line: 261,
            column: 21
          }
        },
        "94": {
          start: {
            line: 262,
            column: 10
          },
          end: {
            line: 262,
            column: 15
          }
        },
        "95": {
          start: {
            line: 264,
            column: 10
          },
          end: {
            line: 264,
            column: 32
          }
        },
        "96": {
          start: {
            line: 265,
            column: 10
          },
          end: {
            line: 265,
            column: 21
          }
        },
        "97": {
          start: {
            line: 266,
            column: 10
          },
          end: {
            line: 266,
            column: 15
          }
        },
        "98": {
          start: {
            line: 272,
            column: 6
          },
          end: {
            line: 274,
            column: 12
          }
        },
        "99": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 41
          }
        },
        "100": {
          start: {
            line: 279,
            column: 30
          },
          end: {
            line: 279,
            column: 58
          }
        },
        "101": {
          start: {
            line: 280,
            column: 30
          },
          end: {
            line: 280,
            column: 58
          }
        },
        "102": {
          start: {
            line: 281,
            column: 30
          },
          end: {
            line: 281,
            column: 63
          }
        },
        "103": {
          start: {
            line: 282,
            column: 30
          },
          end: {
            line: 282,
            column: 52
          }
        },
        "104": {
          start: {
            line: 283,
            column: 30
          },
          end: {
            line: 284,
            column: 78
          }
        },
        "105": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "106": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 28
          }
        },
        "107": {
          start: {
            line: 290,
            column: 24
          },
          end: {
            line: 290,
            column: 61
          }
        },
        "108": {
          start: {
            line: 291,
            column: 24
          },
          end: {
            line: 291,
            column: 66
          }
        },
        "109": {
          start: {
            line: 293,
            column: 6
          },
          end: {
            line: 294,
            column: 70
          }
        },
        "110": {
          start: {
            line: 298,
            column: 26
          },
          end: {
            line: 298,
            column: 59
          }
        },
        "111": {
          start: {
            line: 299,
            column: 24
          },
          end: {
            line: 299,
            column: 93
          }
        },
        "112": {
          start: {
            line: 300,
            column: 25
          },
          end: {
            line: 305,
            column: 8
          }
        },
        "113": {
          start: {
            line: 307,
            column: 6
          },
          end: {
            line: 307,
            column: 42
          }
        },
        "114": {
          start: {
            line: 309,
            column: 6
          },
          end: {
            line: 309,
            column: 23
          }
        },
        "115": {
          start: {
            line: 313,
            column: 6
          },
          end: {
            line: 325,
            column: 7
          }
        },
        "116": {
          start: {
            line: 314,
            column: 27
          },
          end: {
            line: 314,
            column: 99
          }
        },
        "117": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 316,
            column: 40
          }
        },
        "118": {
          start: {
            line: 318,
            column: 30
          },
          end: {
            line: 320,
            column: 9
          }
        },
        "119": {
          start: {
            line: 322,
            column: 8
          },
          end: {
            line: 324,
            column: 9
          }
        },
        "120": {
          start: {
            line: 323,
            column: 10
          },
          end: {
            line: 323,
            column: 53
          }
        },
        "121": {
          start: {
            line: 329,
            column: 28
          },
          end: {
            line: 329,
            column: 77
          }
        },
        "122": {
          start: {
            line: 330,
            column: 33
          },
          end: {
            line: 330,
            column: 66
          }
        },
        "123": {
          start: {
            line: 331,
            column: 28
          },
          end: {
            line: 332,
            column: 58
          }
        },
        "124": {
          start: {
            line: 333,
            column: 31
          },
          end: {
            line: 333,
            column: 62
          }
        },
        "125": {
          start: {
            line: 334,
            column: 24
          },
          end: {
            line: 334,
            column: 47
          }
        },
        "126": {
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 348,
            column: 7
          }
        },
        "127": {
          start: {
            line: 341,
            column: 8
          },
          end: {
            line: 341,
            column: 45
          }
        },
        "128": {
          start: {
            line: 342,
            column: 8
          },
          end: {
            line: 342,
            column: 39
          }
        },
        "129": {
          start: {
            line: 343,
            column: 8
          },
          end: {
            line: 343,
            column: 43
          }
        },
        "130": {
          start: {
            line: 345,
            column: 8
          },
          end: {
            line: 345,
            column: 46
          }
        },
        "131": {
          start: {
            line: 346,
            column: 8
          },
          end: {
            line: 346,
            column: 39
          }
        },
        "132": {
          start: {
            line: 347,
            column: 8
          },
          end: {
            line: 347,
            column: 44
          }
        },
        "133": {
          start: {
            line: 350,
            column: 6
          },
          end: {
            line: 353,
            column: 7
          }
        },
        "134": {
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 351,
            column: 31
          }
        },
        "135": {
          start: {
            line: 352,
            column: 8
          },
          end: {
            line: 352,
            column: 14
          }
        },
        "136": {
          start: {
            line: 355,
            column: 25
          },
          end: {
            line: 355,
            column: 81
          }
        },
        "137": {
          start: {
            line: 356,
            column: 6
          },
          end: {
            line: 358,
            column: 7
          }
        },
        "138": {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 357,
            column: 14
          }
        },
        "139": {
          start: {
            line: 360,
            column: 6
          },
          end: {
            line: 363,
            column: 7
          }
        },
        "140": {
          start: {
            line: 362,
            column: 8
          },
          end: {
            line: 362,
            column: 14
          }
        },
        "141": {
          start: {
            line: 365,
            column: 6
          },
          end: {
            line: 365,
            column: 28
          }
        },
        "142": {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 369,
            column: 7
          }
        },
        "143": {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 368,
            column: 20
          }
        },
        "144": {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 371,
            column: 50
          }
        },
        "145": {
          start: {
            line: 373,
            column: 24
          },
          end: {
            line: 378,
            column: 8
          }
        },
        "146": {
          start: {
            line: 380,
            column: 6
          },
          end: {
            line: 409,
            column: 7
          }
        },
        "147": {
          start: {
            line: 381,
            column: 8
          },
          end: {
            line: 381,
            column: 47
          }
        },
        "148": {
          start: {
            line: 383,
            column: 8
          },
          end: {
            line: 383,
            column: 32
          }
        },
        "149": {
          start: {
            line: 385,
            column: 8
          },
          end: {
            line: 385,
            column: 55
          }
        },
        "150": {
          start: {
            line: 386,
            column: 8
          },
          end: {
            line: 386,
            column: 53
          }
        },
        "151": {
          start: {
            line: 388,
            column: 35
          },
          end: {
            line: 388,
            column: 87
          }
        },
        "152": {
          start: {
            line: 390,
            column: 8
          },
          end: {
            line: 402,
            column: 51
          }
        },
        "153": {
          start: {
            line: 392,
            column: 12
          },
          end: {
            line: 394,
            column: 41
          }
        },
        "154": {
          start: {
            line: 396,
            column: 12
          },
          end: {
            line: 396,
            column: 105
          }
        },
        "155": {
          start: {
            line: 398,
            column: 12
          },
          end: {
            line: 398,
            column: 35
          }
        },
        "156": {
          start: {
            line: 400,
            column: 12
          },
          end: {
            line: 400,
            column: 68
          }
        },
        "157": {
          start: {
            line: 400,
            column: 29
          },
          end: {
            line: 400,
            column: 64
          }
        },
        "158": {
          start: {
            line: 404,
            column: 8
          },
          end: {
            line: 404,
            column: 54
          }
        },
        "159": {
          start: {
            line: 405,
            column: 8
          },
          end: {
            line: 405,
            column: 49
          }
        },
        "160": {
          start: {
            line: 407,
            column: 8
          },
          end: {
            line: 407,
            column: 31
          }
        },
        "161": {
          start: {
            line: 408,
            column: 8
          },
          end: {
            line: 408,
            column: 43
          }
        },
        "162": {
          start: {
            line: 411,
            column: 6
          },
          end: {
            line: 413,
            column: 7
          }
        },
        "163": {
          start: {
            line: 412,
            column: 8
          },
          end: {
            line: 412,
            column: 20
          }
        },
        "164": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 451,
            column: 8
          }
        },
        "165": {
          start: {
            line: 420,
            column: 19
          },
          end: {
            line: 420,
            column: 41
          }
        },
        "166": {
          start: {
            line: 421,
            column: 22
          },
          end: {
            line: 424,
            column: 9
          }
        },
        "167": {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 431,
            column: 9
          }
        },
        "168": {
          start: {
            line: 427,
            column: 10
          },
          end: {
            line: 430,
            column: 11
          }
        },
        "169": {
          start: {
            line: 433,
            column: 23
          },
          end: {
            line: 433,
            column: 74
          }
        },
        "170": {
          start: {
            line: 435,
            column: 8
          },
          end: {
            line: 438,
            column: 9
          }
        },
        "171": {
          start: {
            line: 436,
            column: 10
          },
          end: {
            line: 436,
            column: 44
          }
        },
        "172": {
          start: {
            line: 437,
            column: 10
          },
          end: {
            line: 437,
            column: 38
          }
        },
        "173": {
          start: {
            line: 440,
            column: 8
          },
          end: {
            line: 450,
            column: 9
          }
        },
        "174": {
          start: {
            line: 441,
            column: 10
          },
          end: {
            line: 441,
            column: 25
          }
        },
        "175": {
          start: {
            line: 442,
            column: 15
          },
          end: {
            line: 450,
            column: 9
          }
        },
        "176": {
          start: {
            line: 443,
            column: 10
          },
          end: {
            line: 445,
            column: 11
          }
        },
        "177": {
          start: {
            line: 444,
            column: 12
          },
          end: {
            line: 444,
            column: 62
          }
        },
        "178": {
          start: {
            line: 446,
            column: 10
          },
          end: {
            line: 446,
            column: 24
          }
        },
        "179": {
          start: {
            line: 447,
            column: 15
          },
          end: {
            line: 450,
            column: 9
          }
        },
        "180": {
          start: {
            line: 448,
            column: 10
          },
          end: {
            line: 448,
            column: 22
          }
        },
        "181": {
          start: {
            line: 449,
            column: 10
          },
          end: {
            line: 449,
            column: 22
          }
        },
        "182": {
          start: {
            line: 455,
            column: 23
          },
          end: {
            line: 455,
            column: 56
          }
        },
        "183": {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 459,
            column: 7
          }
        },
        "184": {
          start: {
            line: 458,
            column: 8
          },
          end: {
            line: 458,
            column: 14
          }
        },
        "185": {
          start: {
            line: 461,
            column: 21
          },
          end: {
            line: 461,
            column: 35
          }
        },
        "186": {
          start: {
            line: 463,
            column: 6
          },
          end: {
            line: 465,
            column: 7
          }
        },
        "187": {
          start: {
            line: 464,
            column: 8
          },
          end: {
            line: 464,
            column: 14
          }
        },
        "188": {
          start: {
            line: 467,
            column: 21
          },
          end: {
            line: 470,
            column: 7
          }
        },
        "189": {
          start: {
            line: 471,
            column: 25
          },
          end: {
            line: 471,
            column: 59
          }
        },
        "190": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 475,
            column: 7
          }
        },
        "191": {
          start: {
            line: 474,
            column: 8
          },
          end: {
            line: 474,
            column: 31
          }
        },
        "192": {
          start: {
            line: 477,
            column: 6
          },
          end: {
            line: 477,
            column: 55
          }
        },
        "193": {
          start: {
            line: 479,
            column: 6
          },
          end: {
            line: 481,
            column: 7
          }
        },
        "194": {
          start: {
            line: 480,
            column: 8
          },
          end: {
            line: 480,
            column: 47
          }
        },
        "195": {
          start: {
            line: 483,
            column: 6
          },
          end: {
            line: 483,
            column: 28
          }
        },
        "196": {
          start: {
            line: 493,
            column: 2
          },
          end: {
            line: 494,
            column: 81
          }
        },
        "197": {
          start: {
            line: 496,
            column: 2
          },
          end: {
            line: 502,
            column: 4
          }
        },
        "198": {
          start: {
            line: 497,
            column: 22
          },
          end: {
            line: 497,
            column: 82
          }
        },
        "199": {
          start: {
            line: 498,
            column: 4
          },
          end: {
            line: 501,
            column: 5
          }
        },
        "200": {
          start: {
            line: 499,
            column: 24
          },
          end: {
            line: 499,
            column: 39
          }
        },
        "201": {
          start: {
            line: 500,
            column: 6
          },
          end: {
            line: 500,
            column: 65
          }
        },
        "202": {
          start: {
            line: 510,
            column: 2
          },
          end: {
            line: 510,
            column: 40
          }
        },
        "203": {
          start: {
            line: 511,
            column: 2
          },
          end: {
            line: 511,
            column: 35
          }
        },
        "204": {
          start: {
            line: 512,
            column: 2
          },
          end: {
            line: 515,
            column: 3
          }
        },
        "205": {
          start: {
            line: 513,
            column: 4
          },
          end: {
            line: 513,
            column: 35
          }
        },
        "206": {
          start: {
            line: 514,
            column: 4
          },
          end: {
            line: 514,
            column: 36
          }
        },
        "207": {
          start: {
            line: 517,
            column: 2
          },
          end: {
            line: 517,
            column: 17
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 18
            },
            end: {
              line: 11,
              column: 19
            }
          },
          loc: {
            start: {
              line: 11,
              column: 25
            },
            end: {
              line: 518,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 90,
              column: 4
            },
            end: {
              line: 90,
              column: 5
            }
          },
          loc: {
            start: {
              line: 90,
              column: 33
            },
            end: {
              line: 105,
              column: 5
            }
          },
          line: 90
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          loc: {
            start: {
              line: 109,
              column: 25
            },
            end: {
              line: 111,
              column: 5
            }
          },
          line: 109
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 113,
              column: 5
            }
          },
          loc: {
            start: {
              line: 113,
              column: 25
            },
            end: {
              line: 115,
              column: 5
            }
          },
          line: 113
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 119,
              column: 4
            },
            end: {
              line: 119,
              column: 5
            }
          },
          loc: {
            start: {
              line: 119,
              column: 11
            },
            end: {
              line: 123,
              column: 5
            }
          },
          line: 119
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 125,
              column: 4
            },
            end: {
              line: 125,
              column: 5
            }
          },
          loc: {
            start: {
              line: 125,
              column: 22
            },
            end: {
              line: 132,
              column: 5
            }
          },
          line: 125
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 134,
              column: 4
            },
            end: {
              line: 134,
              column: 5
            }
          },
          loc: {
            start: {
              line: 134,
              column: 11
            },
            end: {
              line: 138,
              column: 5
            }
          },
          line: 134
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 140,
              column: 4
            },
            end: {
              line: 140,
              column: 5
            }
          },
          loc: {
            start: {
              line: 140,
              column: 17
            },
            end: {
              line: 152,
              column: 5
            }
          },
          line: 140
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 154,
              column: 4
            },
            end: {
              line: 154,
              column: 5
            }
          },
          loc: {
            start: {
              line: 154,
              column: 17
            },
            end: {
              line: 170,
              column: 5
            }
          },
          line: 154
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 172,
              column: 4
            },
            end: {
              line: 172,
              column: 5
            }
          },
          loc: {
            start: {
              line: 172,
              column: 14
            },
            end: {
              line: 197,
              column: 5
            }
          },
          line: 172
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 182,
              column: 41
            },
            end: {
              line: 182,
              column: 42
            }
          },
          loc: {
            start: {
              line: 182,
              column: 47
            },
            end: {
              line: 182,
              column: 61
            }
          },
          line: 182
        },
        "11": {
          name: "(anonymous_11)",
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
              line: 211,
              column: 5
            }
          },
          line: 199
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 215,
              column: 4
            },
            end: {
              line: 215,
              column: 5
            }
          },
          loc: {
            start: {
              line: 215,
              column: 23
            },
            end: {
              line: 222,
              column: 5
            }
          },
          line: 215
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 224,
              column: 4
            },
            end: {
              line: 224,
              column: 5
            }
          },
          loc: {
            start: {
              line: 224,
              column: 25
            },
            end: {
              line: 251,
              column: 5
            }
          },
          line: 224
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 227,
              column: 29
            },
            end: {
              line: 227,
              column: 30
            }
          },
          loc: {
            start: {
              line: 227,
              column: 40
            },
            end: {
              line: 227,
              column: 60
            }
          },
          line: 227
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 232,
              column: 32
            },
            end: {
              line: 232,
              column: 33
            }
          },
          loc: {
            start: {
              line: 232,
              column: 43
            },
            end: {
              line: 232,
              column: 60
            }
          },
          line: 232
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 233,
              column: 32
            },
            end: {
              line: 233,
              column: 33
            }
          },
          loc: {
            start: {
              line: 233,
              column: 43
            },
            end: {
              line: 233,
              column: 60
            }
          },
          line: 233
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 242,
              column: 46
            },
            end: {
              line: 242,
              column: 47
            }
          },
          loc: {
            start: {
              line: 242,
              column: 52
            },
            end: {
              line: 248,
              column: 11
            }
          },
          line: 242
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 247,
              column: 43
            },
            end: {
              line: 247,
              column: 44
            }
          },
          loc: {
            start: {
              line: 247,
              column: 54
            },
            end: {
              line: 247,
              column: 71
            }
          },
          line: 247
        },
        "19": {
          name: "(anonymous_19)",
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
              line: 269,
              column: 5
            }
          },
          line: 253
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 271,
              column: 4
            },
            end: {
              line: 271,
              column: 5
            }
          },
          loc: {
            start: {
              line: 271,
              column: 27
            },
            end: {
              line: 276,
              column: 5
            }
          },
          line: 271
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 278,
              column: 4
            },
            end: {
              line: 278,
              column: 5
            }
          },
          loc: {
            start: {
              line: 278,
              column: 50
            },
            end: {
              line: 295,
              column: 5
            }
          },
          line: 278
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 297,
              column: 4
            },
            end: {
              line: 297,
              column: 5
            }
          },
          loc: {
            start: {
              line: 297,
              column: 58
            },
            end: {
              line: 310,
              column: 5
            }
          },
          line: 297
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 312,
              column: 4
            },
            end: {
              line: 312,
              column: 5
            }
          },
          loc: {
            start: {
              line: 312,
              column: 40
            },
            end: {
              line: 326,
              column: 5
            }
          },
          line: 312
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 328,
              column: 4
            },
            end: {
              line: 328,
              column: 5
            }
          },
          loc: {
            start: {
              line: 328,
              column: 31
            },
            end: {
              line: 414,
              column: 5
            }
          },
          line: 328
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 391,
              column: 36
            },
            end: {
              line: 391,
              column: 37
            }
          },
          loc: {
            start: {
              line: 391,
              column: 42
            },
            end: {
              line: 401,
              column: 11
            }
          },
          line: 391
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 400,
              column: 23
            },
            end: {
              line: 400,
              column: 24
            }
          },
          loc: {
            start: {
              line: 400,
              column: 29
            },
            end: {
              line: 400,
              column: 64
            }
          },
          line: 400
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 418,
              column: 4
            },
            end: {
              line: 418,
              column: 5
            }
          },
          loc: {
            start: {
              line: 418,
              column: 36
            },
            end: {
              line: 452,
              column: 5
            }
          },
          line: 418
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 419,
              column: 23
            },
            end: {
              line: 419,
              column: 24
            }
          },
          loc: {
            start: {
              line: 419,
              column: 35
            },
            end: {
              line: 451,
              column: 7
            }
          },
          line: 419
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 454,
              column: 4
            },
            end: {
              line: 454,
              column: 5
            }
          },
          loc: {
            start: {
              line: 454,
              column: 39
            },
            end: {
              line: 484,
              column: 5
            }
          },
          line: 454
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 496,
              column: 36
            },
            end: {
              line: 496,
              column: 37
            }
          },
          loc: {
            start: {
              line: 496,
              column: 42
            },
            end: {
              line: 502,
              column: 3
            }
          },
          line: 496
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 512,
              column: 26
            },
            end: {
              line: 512,
              column: 27
            }
          },
          loc: {
            start: {
              line: 512,
              column: 38
            },
            end: {
              line: 515,
              column: 3
            }
          },
          line: 512
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }, {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 122,
              column: 7
            }
          }],
          line: 120
        },
        "1": {
          loc: {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 131,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 131,
              column: 7
            }
          }, {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 131,
              column: 7
            }
          }],
          line: 128
        },
        "2": {
          loc: {
            start: {
              line: 128,
              column: 10
            },
            end: {
              line: 129,
              column: 92
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 128,
              column: 10
            },
            end: {
              line: 128,
              column: 26
            }
          }, {
            start: {
              line: 129,
              column: 9
            },
            end: {
              line: 129,
              column: 40
            }
          }, {
            start: {
              line: 129,
              column: 44
            },
            end: {
              line: 129,
              column: 91
            }
          }],
          line: 128
        },
        "3": {
          loc: {
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 137,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 137,
              column: 7
            }
          }, {
            start: {
              line: 135,
              column: 6
            },
            end: {
              line: 137,
              column: 7
            }
          }],
          line: 135
        },
        "4": {
          loc: {
            start: {
              line: 141,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 141,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          }, {
            start: {
              line: 141,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          }],
          line: 141
        },
        "5": {
          loc: {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 148,
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
              line: 148,
              column: 7
            }
          }, {
            start: {
              line: 145,
              column: 6
            },
            end: {
              line: 148,
              column: 7
            }
          }],
          line: 145
        },
        "6": {
          loc: {
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          }, {
            start: {
              line: 155,
              column: 6
            },
            end: {
              line: 157,
              column: 7
            }
          }],
          line: 155
        },
        "7": {
          loc: {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          }, {
            start: {
              line: 159,
              column: 6
            },
            end: {
              line: 162,
              column: 7
            }
          }],
          line: 159
        },
        "8": {
          loc: {
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }, {
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }],
          line: 164
        },
        "9": {
          loc: {
            start: {
              line: 164,
              column: 10
            },
            end: {
              line: 164,
              column: 50
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 164,
              column: 10
            },
            end: {
              line: 164,
              column: 31
            }
          }, {
            start: {
              line: 164,
              column: 35
            },
            end: {
              line: 164,
              column: 50
            }
          }],
          line: 164
        },
        "10": {
          loc: {
            start: {
              line: 166,
              column: 11
            },
            end: {
              line: 166,
              column: 70
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 166,
              column: 38
            },
            end: {
              line: 166,
              column: 58
            }
          }, {
            start: {
              line: 166,
              column: 61
            },
            end: {
              line: 166,
              column: 70
            }
          }],
          line: 166
        },
        "11": {
          loc: {
            start: {
              line: 177,
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
              line: 177,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }, {
            start: {
              line: 177,
              column: 6
            },
            end: {
              line: 179,
              column: 7
            }
          }],
          line: 177
        },
        "12": {
          loc: {
            start: {
              line: 177,
              column: 10
            },
            end: {
              line: 177,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 177,
              column: 10
            },
            end: {
              line: 177,
              column: 40
            }
          }, {
            start: {
              line: 177,
              column: 44
            },
            end: {
              line: 177,
              column: 53
            }
          }],
          line: 177
        },
        "13": {
          loc: {
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 184,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 184,
              column: 7
            }
          }, {
            start: {
              line: 181,
              column: 6
            },
            end: {
              line: 184,
              column: 7
            }
          }],
          line: 181
        },
        "14": {
          loc: {
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          }, {
            start: {
              line: 186,
              column: 6
            },
            end: {
              line: 190,
              column: 7
            }
          }],
          line: 186
        },
        "15": {
          loc: {
            start: {
              line: 192,
              column: 24
            },
            end: {
              line: 194,
              column: 24
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 193,
              column: 10
            },
            end: {
              line: 193,
              column: 24
            }
          }, {
            start: {
              line: 194,
              column: 10
            },
            end: {
              line: 194,
              column: 24
            }
          }],
          line: 192
        },
        "16": {
          loc: {
            start: {
              line: 225,
              column: 6
            },
            end: {
              line: 228,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 225,
              column: 6
            },
            end: {
              line: 228,
              column: 7
            }
          }, {
            start: {
              line: 225,
              column: 6
            },
            end: {
              line: 228,
              column: 7
            }
          }],
          line: 225
        },
        "17": {
          loc: {
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 250,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 250,
              column: 7
            }
          }, {
            start: {
              line: 230,
              column: 6
            },
            end: {
              line: 250,
              column: 7
            }
          }],
          line: 230
        },
        "18": {
          loc: {
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          }, {
            start: {
              line: 234,
              column: 8
            },
            end: {
              line: 249,
              column: 9
            }
          }],
          line: 234
        },
        "19": {
          loc: {
            start: {
              line: 244,
              column: 12
            },
            end: {
              line: 246,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 244,
              column: 12
            },
            end: {
              line: 246,
              column: 13
            }
          }, {
            start: {
              line: 244,
              column: 12
            },
            end: {
              line: 246,
              column: 13
            }
          }],
          line: 244
        },
        "20": {
          loc: {
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          }, {
            start: {
              line: 254,
              column: 6
            },
            end: {
              line: 256,
              column: 7
            }
          }],
          line: 254
        },
        "21": {
          loc: {
            start: {
              line: 258,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "switch",
          locations: [{
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 262,
              column: 15
            }
          }, {
            start: {
              line: 263,
              column: 8
            },
            end: {
              line: 266,
              column: 15
            }
          }, {
            start: {
              line: 267,
              column: 8
            },
            end: {
              line: 267,
              column: 16
            }
          }],
          line: 258
        },
        "22": {
          loc: {
            start: {
              line: 272,
              column: 20
            },
            end: {
              line: 274,
              column: 12
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 273,
              column: 10
            },
            end: {
              line: 273,
              column: 75
            }
          }, {
            start: {
              line: 274,
              column: 10
            },
            end: {
              line: 274,
              column: 12
            }
          }],
          line: 272
        },
        "23": {
          loc: {
            start: {
              line: 272,
              column: 20
            },
            end: {
              line: 272,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 272,
              column: 20
            },
            end: {
              line: 272,
              column: 27
            }
          }, {
            start: {
              line: 272,
              column: 31
            },
            end: {
              line: 272,
              column: 49
            }
          }],
          line: 272
        },
        "24": {
          loc: {
            start: {
              line: 283,
              column: 30
            },
            end: {
              line: 284,
              column: 78
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 283,
              column: 30
            },
            end: {
              line: 283,
              column: 45
            }
          }, {
            start: {
              line: 283,
              column: 49
            },
            end: {
              line: 283,
              column: 66
            }
          }, {
            start: {
              line: 284,
              column: 30
            },
            end: {
              line: 284,
              column: 45
            }
          }, {
            start: {
              line: 284,
              column: 49
            },
            end: {
              line: 284,
              column: 78
            }
          }],
          line: 283
        },
        "25": {
          loc: {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }, {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }],
          line: 286
        },
        "26": {
          loc: {
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 286,
              column: 10
            },
            end: {
              line: 286,
              column: 23
            }
          }, {
            start: {
              line: 286,
              column: 27
            },
            end: {
              line: 286,
              column: 45
            }
          }],
          line: 286
        },
        "27": {
          loc: {
            start: {
              line: 290,
              column: 24
            },
            end: {
              line: 290,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 290,
              column: 55
            },
            end: {
              line: 290,
              column: 57
            }
          }, {
            start: {
              line: 290,
              column: 60
            },
            end: {
              line: 290,
              column: 61
            }
          }],
          line: 290
        },
        "28": {
          loc: {
            start: {
              line: 293,
              column: 13
            },
            end: {
              line: 294,
              column: 70
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 294,
              column: 10
            },
            end: {
              line: 294,
              column: 45
            }
          }, {
            start: {
              line: 294,
              column: 48
            },
            end: {
              line: 294,
              column: 70
            }
          }],
          line: 293
        },
        "29": {
          loc: {
            start: {
              line: 313,
              column: 6
            },
            end: {
              line: 325,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 313,
              column: 6
            },
            end: {
              line: 325,
              column: 7
            }
          }, {
            start: {
              line: 313,
              column: 6
            },
            end: {
              line: 325,
              column: 7
            }
          }],
          line: 313
        },
        "30": {
          loc: {
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          }, {
            start: {
              line: 322,
              column: 8
            },
            end: {
              line: 324,
              column: 9
            }
          }],
          line: 322
        },
        "31": {
          loc: {
            start: {
              line: 331,
              column: 28
            },
            end: {
              line: 332,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 331,
              column: 28
            },
            end: {
              line: 331,
              column: 35
            }
          }, {
            start: {
              line: 331,
              column: 39
            },
            end: {
              line: 331,
              column: 52
            }
          }, {
            start: {
              line: 332,
              column: 8
            },
            end: {
              line: 332,
              column: 58
            }
          }],
          line: 331
        },
        "32": {
          loc: {
            start: {
              line: 340,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 340,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          }, {
            start: {
              line: 340,
              column: 6
            },
            end: {
              line: 348,
              column: 7
            }
          }],
          line: 340
        },
        "33": {
          loc: {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }, {
            start: {
              line: 350,
              column: 6
            },
            end: {
              line: 353,
              column: 7
            }
          }],
          line: 350
        },
        "34": {
          loc: {
            start: {
              line: 350,
              column: 10
            },
            end: {
              line: 350,
              column: 66
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 350,
              column: 10
            },
            end: {
              line: 350,
              column: 21
            }
          }, {
            start: {
              line: 350,
              column: 25
            },
            end: {
              line: 350,
              column: 66
            }
          }],
          line: 350
        },
        "35": {
          loc: {
            start: {
              line: 356,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 356,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          }, {
            start: {
              line: 356,
              column: 6
            },
            end: {
              line: 358,
              column: 7
            }
          }],
          line: 356
        },
        "36": {
          loc: {
            start: {
              line: 360,
              column: 6
            },
            end: {
              line: 363,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 360,
              column: 6
            },
            end: {
              line: 363,
              column: 7
            }
          }, {
            start: {
              line: 360,
              column: 6
            },
            end: {
              line: 363,
              column: 7
            }
          }],
          line: 360
        },
        "37": {
          loc: {
            start: {
              line: 360,
              column: 10
            },
            end: {
              line: 360,
              column: 40
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 360,
              column: 10
            },
            end: {
              line: 360,
              column: 24
            }
          }, {
            start: {
              line: 360,
              column: 28
            },
            end: {
              line: 360,
              column: 40
            }
          }],
          line: 360
        },
        "38": {
          loc: {
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }, {
            start: {
              line: 367,
              column: 6
            },
            end: {
              line: 369,
              column: 7
            }
          }],
          line: 367
        },
        "39": {
          loc: {
            start: {
              line: 380,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 380,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }, {
            start: {
              line: 380,
              column: 6
            },
            end: {
              line: 409,
              column: 7
            }
          }],
          line: 380
        },
        "40": {
          loc: {
            start: {
              line: 411,
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
              line: 411,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }, {
            start: {
              line: 411,
              column: 6
            },
            end: {
              line: 413,
              column: 7
            }
          }],
          line: 411
        },
        "41": {
          loc: {
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 431,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 431,
              column: 9
            }
          }, {
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 431,
              column: 9
            }
          }],
          line: 426
        },
        "42": {
          loc: {
            start: {
              line: 433,
              column: 23
            },
            end: {
              line: 433,
              column: 74
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 433,
              column: 52
            },
            end: {
              line: 433,
              column: 58
            }
          }, {
            start: {
              line: 433,
              column: 61
            },
            end: {
              line: 433,
              column: 74
            }
          }],
          line: 433
        },
        "43": {
          loc: {
            start: {
              line: 435,
              column: 8
            },
            end: {
              line: 438,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 435,
              column: 8
            },
            end: {
              line: 438,
              column: 9
            }
          }, {
            start: {
              line: 435,
              column: 8
            },
            end: {
              line: 438,
              column: 9
            }
          }],
          line: 435
        },
        "44": {
          loc: {
            start: {
              line: 440,
              column: 8
            },
            end: {
              line: 450,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 440,
              column: 8
            },
            end: {
              line: 450,
              column: 9
            }
          }, {
            start: {
              line: 440,
              column: 8
            },
            end: {
              line: 450,
              column: 9
            }
          }],
          line: 440
        },
        "45": {
          loc: {
            start: {
              line: 442,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 442,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          }, {
            start: {
              line: 442,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          }],
          line: 442
        },
        "46": {
          loc: {
            start: {
              line: 443,
              column: 10
            },
            end: {
              line: 445,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 443,
              column: 10
            },
            end: {
              line: 445,
              column: 11
            }
          }, {
            start: {
              line: 443,
              column: 10
            },
            end: {
              line: 445,
              column: 11
            }
          }],
          line: 443
        },
        "47": {
          loc: {
            start: {
              line: 447,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 447,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          }, {
            start: {
              line: 447,
              column: 15
            },
            end: {
              line: 450,
              column: 9
            }
          }],
          line: 447
        },
        "48": {
          loc: {
            start: {
              line: 457,
              column: 6
            },
            end: {
              line: 459,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 457,
              column: 6
            },
            end: {
              line: 459,
              column: 7
            }
          }, {
            start: {
              line: 457,
              column: 6
            },
            end: {
              line: 459,
              column: 7
            }
          }],
          line: 457
        },
        "49": {
          loc: {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 465,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 465,
              column: 7
            }
          }, {
            start: {
              line: 463,
              column: 6
            },
            end: {
              line: 465,
              column: 7
            }
          }],
          line: 463
        },
        "50": {
          loc: {
            start: {
              line: 463,
              column: 10
            },
            end: {
              line: 463,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 463,
              column: 10
            },
            end: {
              line: 463,
              column: 17
            }
          }, {
            start: {
              line: 463,
              column: 21
            },
            end: {
              line: 463,
              column: 60
            }
          }],
          line: 463
        },
        "51": {
          loc: {
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          }, {
            start: {
              line: 473,
              column: 6
            },
            end: {
              line: 475,
              column: 7
            }
          }],
          line: 473
        },
        "52": {
          loc: {
            start: {
              line: 479,
              column: 6
            },
            end: {
              line: 481,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 479,
              column: 6
            },
            end: {
              line: 481,
              column: 7
            }
          }, {
            start: {
              line: 479,
              column: 6
            },
            end: {
              line: 481,
              column: 7
            }
          }],
          line: 479
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
        "181": 0,
        "182": 0,
        "183": 0,
        "184": 0,
        "185": 0,
        "186": 0,
        "187": 0,
        "188": 0,
        "189": 0,
        "190": 0,
        "191": 0,
        "192": 0,
        "193": 0,
        "194": 0,
        "195": 0,
        "196": 0,
        "197": 0,
        "198": 0,
        "199": 0,
        "200": 0,
        "201": 0,
        "202": 0,
        "203": 0,
        "204": 0,
        "205": 0,
        "206": 0,
        "207": 0
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
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0, 0],
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
        "21": [0, 0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0, 0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0],
        "30": [0, 0],
        "31": [0, 0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0]
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
   * Bootstrap (v4.1.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = (cov_1vad5v4mxo.s[0]++, function ($$$1) {
    cov_1vad5v4mxo.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_1vad5v4mxo.s[1]++, 'carousel');
    var VERSION = (cov_1vad5v4mxo.s[2]++, '4.1.3');
    var DATA_KEY = (cov_1vad5v4mxo.s[3]++, 'bs.carousel');
    var EVENT_KEY = (cov_1vad5v4mxo.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_1vad5v4mxo.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_1vad5v4mxo.s[6]++, $$$1.fn[NAME]);
    var ARROW_LEFT_KEYCODE = (cov_1vad5v4mxo.s[7]++, 37); // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = (cov_1vad5v4mxo.s[8]++, 39); // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = (cov_1vad5v4mxo.s[9]++, 500); // Time for mouse compat events to fire after touch

    var Default = (cov_1vad5v4mxo.s[10]++, {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    });
    var DefaultType = (cov_1vad5v4mxo.s[11]++, {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    });
    var Direction = (cov_1vad5v4mxo.s[12]++, {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    });
    var Event = (cov_1vad5v4mxo.s[13]++, {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_1vad5v4mxo.s[14]++, {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    });
    var Selector = (cov_1vad5v4mxo.s[15]++, {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Carousel =
    /*#__PURE__*/
    function () {
      function Carousel(element, config) {
        cov_1vad5v4mxo.f[1]++;
        cov_1vad5v4mxo.s[16]++;
        this._items = null;
        cov_1vad5v4mxo.s[17]++;
        this._interval = null;
        cov_1vad5v4mxo.s[18]++;
        this._activeElement = null;
        cov_1vad5v4mxo.s[19]++;
        this._isPaused = false;
        cov_1vad5v4mxo.s[20]++;
        this._isSliding = false;
        cov_1vad5v4mxo.s[21]++;
        this.touchTimeout = null;
        cov_1vad5v4mxo.s[22]++;
        this._config = this._getConfig(config);
        cov_1vad5v4mxo.s[23]++;
        this._element = $$$1(element)[0];
        cov_1vad5v4mxo.s[24]++;
        this._indicatorsElement = this._element.querySelector(Selector.INDICATORS);
        cov_1vad5v4mxo.s[25]++;

        this._addEventListeners();
      } // Getters


      var _proto = Carousel.prototype;

      // Public
      _proto.next = function next() {
        cov_1vad5v4mxo.f[4]++;
        cov_1vad5v4mxo.s[28]++;

        if (!this._isSliding) {
          cov_1vad5v4mxo.b[0][0]++;
          cov_1vad5v4mxo.s[29]++;

          this._slide(Direction.NEXT);
        } else {
          cov_1vad5v4mxo.b[0][1]++;
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        cov_1vad5v4mxo.f[5]++;
        cov_1vad5v4mxo.s[30]++;

        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if ((cov_1vad5v4mxo.b[2][0]++, !document.hidden) && (cov_1vad5v4mxo.b[2][1]++, $$$1(this._element).is(':visible')) && (cov_1vad5v4mxo.b[2][2]++, $$$1(this._element).css('visibility') !== 'hidden')) {
          cov_1vad5v4mxo.b[1][0]++;
          cov_1vad5v4mxo.s[31]++;
          this.next();
        } else {
          cov_1vad5v4mxo.b[1][1]++;
        }
      };

      _proto.prev = function prev() {
        cov_1vad5v4mxo.f[6]++;
        cov_1vad5v4mxo.s[32]++;

        if (!this._isSliding) {
          cov_1vad5v4mxo.b[3][0]++;
          cov_1vad5v4mxo.s[33]++;

          this._slide(Direction.PREV);
        } else {
          cov_1vad5v4mxo.b[3][1]++;
        }
      };

      _proto.pause = function pause(event) {
        cov_1vad5v4mxo.f[7]++;
        cov_1vad5v4mxo.s[34]++;

        if (!event) {
          cov_1vad5v4mxo.b[4][0]++;
          cov_1vad5v4mxo.s[35]++;
          this._isPaused = true;
        } else {
          cov_1vad5v4mxo.b[4][1]++;
        }

        cov_1vad5v4mxo.s[36]++;

        if (this._element.querySelector(Selector.NEXT_PREV)) {
          cov_1vad5v4mxo.b[5][0]++;
          cov_1vad5v4mxo.s[37]++;
          Util.triggerTransitionEnd(this._element);
          cov_1vad5v4mxo.s[38]++;
          this.cycle(true);
        } else {
          cov_1vad5v4mxo.b[5][1]++;
        }

        cov_1vad5v4mxo.s[39]++;
        clearInterval(this._interval);
        cov_1vad5v4mxo.s[40]++;
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        cov_1vad5v4mxo.f[8]++;
        cov_1vad5v4mxo.s[41]++;

        if (!event) {
          cov_1vad5v4mxo.b[6][0]++;
          cov_1vad5v4mxo.s[42]++;
          this._isPaused = false;
        } else {
          cov_1vad5v4mxo.b[6][1]++;
        }

        cov_1vad5v4mxo.s[43]++;

        if (this._interval) {
          cov_1vad5v4mxo.b[7][0]++;
          cov_1vad5v4mxo.s[44]++;
          clearInterval(this._interval);
          cov_1vad5v4mxo.s[45]++;
          this._interval = null;
        } else {
          cov_1vad5v4mxo.b[7][1]++;
        }

        cov_1vad5v4mxo.s[46]++;

        if ((cov_1vad5v4mxo.b[9][0]++, this._config.interval) && (cov_1vad5v4mxo.b[9][1]++, !this._isPaused)) {
          cov_1vad5v4mxo.b[8][0]++;
          cov_1vad5v4mxo.s[47]++;
          this._interval = setInterval((document.visibilityState ? (cov_1vad5v4mxo.b[10][0]++, this.nextWhenVisible) : (cov_1vad5v4mxo.b[10][1]++, this.next)).bind(this), this._config.interval);
        } else {
          cov_1vad5v4mxo.b[8][1]++;
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        cov_1vad5v4mxo.f[9]++;
        cov_1vad5v4mxo.s[48]++;
        this._activeElement = this._element.querySelector(Selector.ACTIVE_ITEM);
        var activeIndex = (cov_1vad5v4mxo.s[49]++, this._getItemIndex(this._activeElement));
        cov_1vad5v4mxo.s[50]++;

        if ((cov_1vad5v4mxo.b[12][0]++, index > this._items.length - 1) || (cov_1vad5v4mxo.b[12][1]++, index < 0)) {
          cov_1vad5v4mxo.b[11][0]++;
          cov_1vad5v4mxo.s[51]++;
          return;
        } else {
          cov_1vad5v4mxo.b[11][1]++;
        }

        cov_1vad5v4mxo.s[52]++;

        if (this._isSliding) {
          cov_1vad5v4mxo.b[13][0]++;
          cov_1vad5v4mxo.s[53]++;
          $$$1(this._element).one(Event.SLID, function () {
            cov_1vad5v4mxo.f[10]++;
            cov_1vad5v4mxo.s[54]++;
            return _this.to(index);
          });
          cov_1vad5v4mxo.s[55]++;
          return;
        } else {
          cov_1vad5v4mxo.b[13][1]++;
        }

        cov_1vad5v4mxo.s[56]++;

        if (activeIndex === index) {
          cov_1vad5v4mxo.b[14][0]++;
          cov_1vad5v4mxo.s[57]++;
          this.pause();
          cov_1vad5v4mxo.s[58]++;
          this.cycle();
          cov_1vad5v4mxo.s[59]++;
          return;
        } else {
          cov_1vad5v4mxo.b[14][1]++;
        }

        var direction = (cov_1vad5v4mxo.s[60]++, index > activeIndex ? (cov_1vad5v4mxo.b[15][0]++, Direction.NEXT) : (cov_1vad5v4mxo.b[15][1]++, Direction.PREV));
        cov_1vad5v4mxo.s[61]++;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        cov_1vad5v4mxo.f[11]++;
        cov_1vad5v4mxo.s[62]++;
        $$$1(this._element).off(EVENT_KEY);
        cov_1vad5v4mxo.s[63]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_1vad5v4mxo.s[64]++;
        this._items = null;
        cov_1vad5v4mxo.s[65]++;
        this._config = null;
        cov_1vad5v4mxo.s[66]++;
        this._element = null;
        cov_1vad5v4mxo.s[67]++;
        this._interval = null;
        cov_1vad5v4mxo.s[68]++;
        this._isPaused = null;
        cov_1vad5v4mxo.s[69]++;
        this._isSliding = null;
        cov_1vad5v4mxo.s[70]++;
        this._activeElement = null;
        cov_1vad5v4mxo.s[71]++;
        this._indicatorsElement = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        cov_1vad5v4mxo.f[12]++;
        cov_1vad5v4mxo.s[72]++;
        config = _objectSpread({}, Default, config);
        cov_1vad5v4mxo.s[73]++;
        Util.typeCheckConfig(NAME, config, DefaultType);
        cov_1vad5v4mxo.s[74]++;
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        cov_1vad5v4mxo.f[13]++;
        cov_1vad5v4mxo.s[75]++;

        if (this._config.keyboard) {
          cov_1vad5v4mxo.b[16][0]++;
          cov_1vad5v4mxo.s[76]++;
          $$$1(this._element).on(Event.KEYDOWN, function (event) {
            cov_1vad5v4mxo.f[14]++;
            cov_1vad5v4mxo.s[77]++;
            return _this2._keydown(event);
          });
        } else {
          cov_1vad5v4mxo.b[16][1]++;
        }

        cov_1vad5v4mxo.s[78]++;

        if (this._config.pause === 'hover') {
          cov_1vad5v4mxo.b[17][0]++;
          cov_1vad5v4mxo.s[79]++;
          $$$1(this._element).on(Event.MOUSEENTER, function (event) {
            cov_1vad5v4mxo.f[15]++;
            cov_1vad5v4mxo.s[80]++;
            return _this2.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            cov_1vad5v4mxo.f[16]++;
            cov_1vad5v4mxo.s[81]++;
            return _this2.cycle(event);
          });
          cov_1vad5v4mxo.s[82]++;

          if ('ontouchstart' in document.documentElement) {
            cov_1vad5v4mxo.b[18][0]++;
            cov_1vad5v4mxo.s[83]++;
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            $$$1(this._element).on(Event.TOUCHEND, function () {
              cov_1vad5v4mxo.f[17]++;
              cov_1vad5v4mxo.s[84]++;

              _this2.pause();

              cov_1vad5v4mxo.s[85]++;

              if (_this2.touchTimeout) {
                cov_1vad5v4mxo.b[19][0]++;
                cov_1vad5v4mxo.s[86]++;
                clearTimeout(_this2.touchTimeout);
              } else {
                cov_1vad5v4mxo.b[19][1]++;
              }

              cov_1vad5v4mxo.s[87]++;
              _this2.touchTimeout = setTimeout(function (event) {
                cov_1vad5v4mxo.f[18]++;
                cov_1vad5v4mxo.s[88]++;
                return _this2.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
            });
          } else {
            cov_1vad5v4mxo.b[18][1]++;
          }
        } else {
          cov_1vad5v4mxo.b[17][1]++;
        }
      };

      _proto._keydown = function _keydown(event) {
        cov_1vad5v4mxo.f[19]++;
        cov_1vad5v4mxo.s[89]++;

        if (/input|textarea/i.test(event.target.tagName)) {
          cov_1vad5v4mxo.b[20][0]++;
          cov_1vad5v4mxo.s[90]++;
          return;
        } else {
          cov_1vad5v4mxo.b[20][1]++;
        }

        cov_1vad5v4mxo.s[91]++;

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            cov_1vad5v4mxo.b[21][0]++;
            cov_1vad5v4mxo.s[92]++;
            event.preventDefault();
            cov_1vad5v4mxo.s[93]++;
            this.prev();
            cov_1vad5v4mxo.s[94]++;
            break;

          case ARROW_RIGHT_KEYCODE:
            cov_1vad5v4mxo.b[21][1]++;
            cov_1vad5v4mxo.s[95]++;
            event.preventDefault();
            cov_1vad5v4mxo.s[96]++;
            this.next();
            cov_1vad5v4mxo.s[97]++;
            break;

          default:
            cov_1vad5v4mxo.b[21][2]++;
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        cov_1vad5v4mxo.f[20]++;
        cov_1vad5v4mxo.s[98]++;
        this._items = (cov_1vad5v4mxo.b[23][0]++, element) && (cov_1vad5v4mxo.b[23][1]++, element.parentNode) ? (cov_1vad5v4mxo.b[22][0]++, [].slice.call(element.parentNode.querySelectorAll(Selector.ITEM))) : (cov_1vad5v4mxo.b[22][1]++, []);
        cov_1vad5v4mxo.s[99]++;
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        cov_1vad5v4mxo.f[21]++;
        var isNextDirection = (cov_1vad5v4mxo.s[100]++, direction === Direction.NEXT);
        var isPrevDirection = (cov_1vad5v4mxo.s[101]++, direction === Direction.PREV);
        var activeIndex = (cov_1vad5v4mxo.s[102]++, this._getItemIndex(activeElement));
        var lastItemIndex = (cov_1vad5v4mxo.s[103]++, this._items.length - 1);
        var isGoingToWrap = (cov_1vad5v4mxo.s[104]++, (cov_1vad5v4mxo.b[24][0]++, isPrevDirection) && (cov_1vad5v4mxo.b[24][1]++, activeIndex === 0) || (cov_1vad5v4mxo.b[24][2]++, isNextDirection) && (cov_1vad5v4mxo.b[24][3]++, activeIndex === lastItemIndex));
        cov_1vad5v4mxo.s[105]++;

        if ((cov_1vad5v4mxo.b[26][0]++, isGoingToWrap) && (cov_1vad5v4mxo.b[26][1]++, !this._config.wrap)) {
          cov_1vad5v4mxo.b[25][0]++;
          cov_1vad5v4mxo.s[106]++;
          return activeElement;
        } else {
          cov_1vad5v4mxo.b[25][1]++;
        }

        var delta = (cov_1vad5v4mxo.s[107]++, direction === Direction.PREV ? (cov_1vad5v4mxo.b[27][0]++, -1) : (cov_1vad5v4mxo.b[27][1]++, 1));
        var itemIndex = (cov_1vad5v4mxo.s[108]++, (activeIndex + delta) % this._items.length);
        cov_1vad5v4mxo.s[109]++;
        return itemIndex === -1 ? (cov_1vad5v4mxo.b[28][0]++, this._items[this._items.length - 1]) : (cov_1vad5v4mxo.b[28][1]++, this._items[itemIndex]);
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        cov_1vad5v4mxo.f[22]++;
        var targetIndex = (cov_1vad5v4mxo.s[110]++, this._getItemIndex(relatedTarget));
        var fromIndex = (cov_1vad5v4mxo.s[111]++, this._getItemIndex(this._element.querySelector(Selector.ACTIVE_ITEM)));
        var slideEvent = (cov_1vad5v4mxo.s[112]++, $$$1.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        }));
        cov_1vad5v4mxo.s[113]++;
        $$$1(this._element).trigger(slideEvent);
        cov_1vad5v4mxo.s[114]++;
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        cov_1vad5v4mxo.f[23]++;
        cov_1vad5v4mxo.s[115]++;

        if (this._indicatorsElement) {
          cov_1vad5v4mxo.b[29][0]++;
          var indicators = (cov_1vad5v4mxo.s[116]++, [].slice.call(this._indicatorsElement.querySelectorAll(Selector.ACTIVE)));
          cov_1vad5v4mxo.s[117]++;
          $$$1(indicators).removeClass(ClassName.ACTIVE);
          var nextIndicator = (cov_1vad5v4mxo.s[118]++, this._indicatorsElement.children[this._getItemIndex(element)]);
          cov_1vad5v4mxo.s[119]++;

          if (nextIndicator) {
            cov_1vad5v4mxo.b[30][0]++;
            cov_1vad5v4mxo.s[120]++;
            $$$1(nextIndicator).addClass(ClassName.ACTIVE);
          } else {
            cov_1vad5v4mxo.b[30][1]++;
          }
        } else {
          cov_1vad5v4mxo.b[29][1]++;
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this3 = this;

        cov_1vad5v4mxo.f[24]++;
        var activeElement = (cov_1vad5v4mxo.s[121]++, this._element.querySelector(Selector.ACTIVE_ITEM));
        var activeElementIndex = (cov_1vad5v4mxo.s[122]++, this._getItemIndex(activeElement));
        var nextElement = (cov_1vad5v4mxo.s[123]++, (cov_1vad5v4mxo.b[31][0]++, element) || (cov_1vad5v4mxo.b[31][1]++, activeElement) && (cov_1vad5v4mxo.b[31][2]++, this._getItemByDirection(direction, activeElement)));
        var nextElementIndex = (cov_1vad5v4mxo.s[124]++, this._getItemIndex(nextElement));
        var isCycling = (cov_1vad5v4mxo.s[125]++, Boolean(this._interval));
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;
        cov_1vad5v4mxo.s[126]++;

        if (direction === Direction.NEXT) {
          cov_1vad5v4mxo.b[32][0]++;
          cov_1vad5v4mxo.s[127]++;
          directionalClassName = ClassName.LEFT;
          cov_1vad5v4mxo.s[128]++;
          orderClassName = ClassName.NEXT;
          cov_1vad5v4mxo.s[129]++;
          eventDirectionName = Direction.LEFT;
        } else {
          cov_1vad5v4mxo.b[32][1]++;
          cov_1vad5v4mxo.s[130]++;
          directionalClassName = ClassName.RIGHT;
          cov_1vad5v4mxo.s[131]++;
          orderClassName = ClassName.PREV;
          cov_1vad5v4mxo.s[132]++;
          eventDirectionName = Direction.RIGHT;
        }

        cov_1vad5v4mxo.s[133]++;

        if ((cov_1vad5v4mxo.b[34][0]++, nextElement) && (cov_1vad5v4mxo.b[34][1]++, $$$1(nextElement).hasClass(ClassName.ACTIVE))) {
          cov_1vad5v4mxo.b[33][0]++;
          cov_1vad5v4mxo.s[134]++;
          this._isSliding = false;
          cov_1vad5v4mxo.s[135]++;
          return;
        } else {
          cov_1vad5v4mxo.b[33][1]++;
        }

        var slideEvent = (cov_1vad5v4mxo.s[136]++, this._triggerSlideEvent(nextElement, eventDirectionName));
        cov_1vad5v4mxo.s[137]++;

        if (slideEvent.isDefaultPrevented()) {
          cov_1vad5v4mxo.b[35][0]++;
          cov_1vad5v4mxo.s[138]++;
          return;
        } else {
          cov_1vad5v4mxo.b[35][1]++;
        }

        cov_1vad5v4mxo.s[139]++;

        if ((cov_1vad5v4mxo.b[37][0]++, !activeElement) || (cov_1vad5v4mxo.b[37][1]++, !nextElement)) {
          cov_1vad5v4mxo.b[36][0]++;
          cov_1vad5v4mxo.s[140]++;
          // Some weirdness is happening, so we bail
          return;
        } else {
          cov_1vad5v4mxo.b[36][1]++;
        }

        cov_1vad5v4mxo.s[141]++;
        this._isSliding = true;
        cov_1vad5v4mxo.s[142]++;

        if (isCycling) {
          cov_1vad5v4mxo.b[38][0]++;
          cov_1vad5v4mxo.s[143]++;
          this.pause();
        } else {
          cov_1vad5v4mxo.b[38][1]++;
        }

        cov_1vad5v4mxo.s[144]++;

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = (cov_1vad5v4mxo.s[145]++, $$$1.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        }));
        cov_1vad5v4mxo.s[146]++;

        if ($$$1(this._element).hasClass(ClassName.SLIDE)) {
          cov_1vad5v4mxo.b[39][0]++;
          cov_1vad5v4mxo.s[147]++;
          $$$1(nextElement).addClass(orderClassName);
          cov_1vad5v4mxo.s[148]++;
          Util.reflow(nextElement);
          cov_1vad5v4mxo.s[149]++;
          $$$1(activeElement).addClass(directionalClassName);
          cov_1vad5v4mxo.s[150]++;
          $$$1(nextElement).addClass(directionalClassName);
          var transitionDuration = (cov_1vad5v4mxo.s[151]++, Util.getTransitionDurationFromElement(activeElement));
          cov_1vad5v4mxo.s[152]++;
          $$$1(activeElement).one(Util.TRANSITION_END, function () {
            cov_1vad5v4mxo.f[25]++;
            cov_1vad5v4mxo.s[153]++;
            $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
            cov_1vad5v4mxo.s[154]++;
            $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
            cov_1vad5v4mxo.s[155]++;
            _this3._isSliding = false;
            cov_1vad5v4mxo.s[156]++;
            setTimeout(function () {
              cov_1vad5v4mxo.f[26]++;
              cov_1vad5v4mxo.s[157]++;
              return $$$1(_this3._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1vad5v4mxo.b[39][1]++;
          cov_1vad5v4mxo.s[158]++;
          $$$1(activeElement).removeClass(ClassName.ACTIVE);
          cov_1vad5v4mxo.s[159]++;
          $$$1(nextElement).addClass(ClassName.ACTIVE);
          cov_1vad5v4mxo.s[160]++;
          this._isSliding = false;
          cov_1vad5v4mxo.s[161]++;
          $$$1(this._element).trigger(slidEvent);
        }

        cov_1vad5v4mxo.s[162]++;

        if (isCycling) {
          cov_1vad5v4mxo.b[40][0]++;
          cov_1vad5v4mxo.s[163]++;
          this.cycle();
        } else {
          cov_1vad5v4mxo.b[40][1]++;
        }
      }; // Static


      Carousel._jQueryInterface = function _jQueryInterface(config) {
        cov_1vad5v4mxo.f[27]++;
        cov_1vad5v4mxo.s[164]++;
        return this.each(function () {
          cov_1vad5v4mxo.f[28]++;
          var data = (cov_1vad5v4mxo.s[165]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_1vad5v4mxo.s[166]++, _objectSpread({}, Default, $$$1(this).data()));

          cov_1vad5v4mxo.s[167]++;

          if (typeof config === 'object') {
            cov_1vad5v4mxo.b[41][0]++;
            cov_1vad5v4mxo.s[168]++;
            _config = _objectSpread({}, _config, config);
          } else {
            cov_1vad5v4mxo.b[41][1]++;
          }

          var action = (cov_1vad5v4mxo.s[169]++, typeof config === 'string' ? (cov_1vad5v4mxo.b[42][0]++, config) : (cov_1vad5v4mxo.b[42][1]++, _config.slide));
          cov_1vad5v4mxo.s[170]++;

          if (!data) {
            cov_1vad5v4mxo.b[43][0]++;
            cov_1vad5v4mxo.s[171]++;
            data = new Carousel(this, _config);
            cov_1vad5v4mxo.s[172]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_1vad5v4mxo.b[43][1]++;
          }

          cov_1vad5v4mxo.s[173]++;

          if (typeof config === 'number') {
            cov_1vad5v4mxo.b[44][0]++;
            cov_1vad5v4mxo.s[174]++;
            data.to(config);
          } else {
            cov_1vad5v4mxo.b[44][1]++;
            cov_1vad5v4mxo.s[175]++;

            if (typeof action === 'string') {
              cov_1vad5v4mxo.b[45][0]++;
              cov_1vad5v4mxo.s[176]++;

              if (typeof data[action] === 'undefined') {
                cov_1vad5v4mxo.b[46][0]++;
                cov_1vad5v4mxo.s[177]++;
                throw new TypeError("No method named \"" + action + "\"");
              } else {
                cov_1vad5v4mxo.b[46][1]++;
              }

              cov_1vad5v4mxo.s[178]++;
              data[action]();
            } else {
              cov_1vad5v4mxo.b[45][1]++;
              cov_1vad5v4mxo.s[179]++;

              if (_config.interval) {
                cov_1vad5v4mxo.b[47][0]++;
                cov_1vad5v4mxo.s[180]++;
                data.pause();
                cov_1vad5v4mxo.s[181]++;
                data.cycle();
              } else {
                cov_1vad5v4mxo.b[47][1]++;
              }
            }
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        cov_1vad5v4mxo.f[29]++;
        var selector = (cov_1vad5v4mxo.s[182]++, Util.getSelectorFromElement(this));
        cov_1vad5v4mxo.s[183]++;

        if (!selector) {
          cov_1vad5v4mxo.b[48][0]++;
          cov_1vad5v4mxo.s[184]++;
          return;
        } else {
          cov_1vad5v4mxo.b[48][1]++;
        }

        var target = (cov_1vad5v4mxo.s[185]++, $$$1(selector)[0]);
        cov_1vad5v4mxo.s[186]++;

        if ((cov_1vad5v4mxo.b[50][0]++, !target) || (cov_1vad5v4mxo.b[50][1]++, !$$$1(target).hasClass(ClassName.CAROUSEL))) {
          cov_1vad5v4mxo.b[49][0]++;
          cov_1vad5v4mxo.s[187]++;
          return;
        } else {
          cov_1vad5v4mxo.b[49][1]++;
        }

        var config = (cov_1vad5v4mxo.s[188]++, _objectSpread({}, $$$1(target).data(), $$$1(this).data()));
        var slideIndex = (cov_1vad5v4mxo.s[189]++, this.getAttribute('data-slide-to'));
        cov_1vad5v4mxo.s[190]++;

        if (slideIndex) {
          cov_1vad5v4mxo.b[51][0]++;
          cov_1vad5v4mxo.s[191]++;
          config.interval = false;
        } else {
          cov_1vad5v4mxo.b[51][1]++;
        }

        cov_1vad5v4mxo.s[192]++;

        Carousel._jQueryInterface.call($$$1(target), config);

        cov_1vad5v4mxo.s[193]++;

        if (slideIndex) {
          cov_1vad5v4mxo.b[52][0]++;
          cov_1vad5v4mxo.s[194]++;
          $$$1(target).data(DATA_KEY).to(slideIndex);
        } else {
          cov_1vad5v4mxo.b[52][1]++;
        }

        cov_1vad5v4mxo.s[195]++;
        event.preventDefault();
      };

      _createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          cov_1vad5v4mxo.f[2]++;
          cov_1vad5v4mxo.s[26]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_1vad5v4mxo.f[3]++;
          cov_1vad5v4mxo.s[27]++;
          return Default;
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_1vad5v4mxo.s[196]++;
    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    cov_1vad5v4mxo.s[197]++;
    $$$1(window).on(Event.LOAD_DATA_API, function () {
      cov_1vad5v4mxo.f[30]++;
      var carousels = (cov_1vad5v4mxo.s[198]++, [].slice.call(document.querySelectorAll(Selector.DATA_RIDE)));
      cov_1vad5v4mxo.s[199]++;

      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = (cov_1vad5v4mxo.s[200]++, $$$1(carousels[i]));
        cov_1vad5v4mxo.s[201]++;

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_1vad5v4mxo.s[202]++;
    $$$1.fn[NAME] = Carousel._jQueryInterface;
    cov_1vad5v4mxo.s[203]++;
    $$$1.fn[NAME].Constructor = Carousel;
    cov_1vad5v4mxo.s[204]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_1vad5v4mxo.f[31]++;
      cov_1vad5v4mxo.s[205]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1vad5v4mxo.s[206]++;
      return Carousel._jQueryInterface;
    };

    cov_1vad5v4mxo.s[207]++;
    return Carousel;
  }($));

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map
