(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Modal = factory(global.jQuery,global.Util));
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

  var cov_1tzmjes1h1 = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/modal.js",
        hash = "fd1e9f956d4dffe0ed62e6628b874c33f468716b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/modal.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 577,
            column: 5
          }
        },
        "1": {
          start: {
            line: 18,
            column: 29
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "2": {
          start: {
            line: 19,
            column: 29
          },
          end: {
            line: 19,
            column: 36
          }
        },
        "3": {
          start: {
            line: 20,
            column: 29
          },
          end: {
            line: 20,
            column: 39
          }
        },
        "4": {
          start: {
            line: 21,
            column: 29
          },
          end: {
            line: 21,
            column: 43
          }
        },
        "5": {
          start: {
            line: 22,
            column: 29
          },
          end: {
            line: 22,
            column: 40
          }
        },
        "6": {
          start: {
            line: 23,
            column: 29
          },
          end: {
            line: 23,
            column: 39
          }
        },
        "7": {
          start: {
            line: 24,
            column: 29
          },
          end: {
            line: 24,
            column: 31
          }
        },
        "8": {
          start: {
            line: 26,
            column: 18
          },
          end: {
            line: 31,
            column: 3
          }
        },
        "9": {
          start: {
            line: 33,
            column: 22
          },
          end: {
            line: 38,
            column: 3
          }
        },
        "10": {
          start: {
            line: 40,
            column: 16
          },
          end: {
            line: 52,
            column: 3
          }
        },
        "11": {
          start: {
            line: 54,
            column: 20
          },
          end: {
            line: 60,
            column: 3
          }
        },
        "12": {
          start: {
            line: 62,
            column: 19
          },
          end: {
            line: 68,
            column: 3
          }
        },
        "13": {
          start: {
            line: 78,
            column: 6
          },
          end: {
            line: 78,
            column: 57
          }
        },
        "14": {
          start: {
            line: 79,
            column: 6
          },
          end: {
            line: 79,
            column: 41
          }
        },
        "15": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 72
          }
        },
        "16": {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 38
          }
        },
        "17": {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 39
          }
        },
        "18": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 39
          }
        },
        "19": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 39
          }
        },
        "20": {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 35
          }
        },
        "21": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 20
          }
        },
        "22": {
          start: {
            line: 95,
            column: 6
          },
          end: {
            line: 95,
            column: 20
          }
        },
        "23": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 67
          }
        },
        "24": {
          start: {
            line: 105,
            column: 6
          },
          end: {
            line: 107,
            column: 7
          }
        },
        "25": {
          start: {
            line: 106,
            column: 8
          },
          end: {
            line: 106,
            column: 14
          }
        },
        "26": {
          start: {
            line: 109,
            column: 6
          },
          end: {
            line: 111,
            column: 7
          }
        },
        "27": {
          start: {
            line: 110,
            column: 8
          },
          end: {
            line: 110,
            column: 36
          }
        },
        "28": {
          start: {
            line: 113,
            column: 24
          },
          end: {
            line: 115,
            column: 8
          }
        },
        "29": {
          start: {
            line: 117,
            column: 6
          },
          end: {
            line: 117,
            column: 41
          }
        },
        "30": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 121,
            column: 7
          }
        },
        "31": {
          start: {
            line: 120,
            column: 8
          },
          end: {
            line: 120,
            column: 14
          }
        },
        "32": {
          start: {
            line: 123,
            column: 6
          },
          end: {
            line: 123,
            column: 26
          }
        },
        "33": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 28
          }
        },
        "34": {
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 126,
            column: 26
          }
        },
        "35": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 128,
            column: 26
          }
        },
        "36": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 130,
            column: 47
          }
        },
        "37": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 28
          }
        },
        "38": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 133,
            column: 28
          }
        },
        "39": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        "40": {
          start: {
            line: 138,
            column: 19
          },
          end: {
            line: 138,
            column: 35
          }
        },
        "41": {
          start: {
            line: 141,
            column: 6
          },
          end: {
            line: 147,
            column: 8
          }
        },
        "42": {
          start: {
            line: 142,
            column: 8
          },
          end: {
            line: 146,
            column: 10
          }
        },
        "43": {
          start: {
            line: 143,
            column: 10
          },
          end: {
            line: 145,
            column: 11
          }
        },
        "44": {
          start: {
            line: 144,
            column: 12
          },
          end: {
            line: 144,
            column: 44
          }
        },
        "45": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 64
          }
        },
        "46": {
          start: {
            line: 149,
            column: 31
          },
          end: {
            line: 149,
            column: 63
          }
        },
        "47": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        },
        "48": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 30
          }
        },
        "49": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        "50": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 158,
            column: 14
          }
        },
        "51": {
          start: {
            line: 161,
            column: 24
          },
          end: {
            line: 161,
            column: 43
          }
        },
        "52": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 41
          }
        },
        "53": {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 167,
            column: 7
          }
        },
        "54": {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 166,
            column: 14
          }
        },
        "55": {
          start: {
            line: 169,
            column: 6
          },
          end: {
            line: 169,
            column: 27
          }
        },
        "56": {
          start: {
            line: 170,
            column: 25
          },
          end: {
            line: 170,
            column: 66
          }
        },
        "57": {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 174,
            column: 7
          }
        },
        "58": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 173,
            column: 36
          }
        },
        "59": {
          start: {
            line: 176,
            column: 6
          },
          end: {
            line: 176,
            column: 28
          }
        },
        "60": {
          start: {
            line: 177,
            column: 6
          },
          end: {
            line: 177,
            column: 28
          }
        },
        "61": {
          start: {
            line: 179,
            column: 6
          },
          end: {
            line: 179,
            column: 36
          }
        },
        "62": {
          start: {
            line: 181,
            column: 6
          },
          end: {
            line: 181,
            column: 50
          }
        },
        "63": {
          start: {
            line: 183,
            column: 6
          },
          end: {
            line: 183,
            column: 47
          }
        },
        "64": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 184,
            column: 50
          }
        },
        "65": {
          start: {
            line: 187,
            column: 6
          },
          end: {
            line: 195,
            column: 7
          }
        },
        "66": {
          start: {
            line: 188,
            column: 36
          },
          end: {
            line: 188,
            column: 88
          }
        },
        "67": {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 192,
            column: 51
          }
        },
        "68": {
          start: {
            line: 191,
            column: 47
          },
          end: {
            line: 191,
            column: 69
          }
        },
        "69": {
          start: {
            line: 194,
            column: 8
          },
          end: {
            line: 194,
            column: 25
          }
        },
        "70": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 43
          }
        },
        "71": {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 201,
            column: 71
          }
        },
        "72": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 203,
            column: 38
          }
        },
        "73": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 38
          }
        },
        "74": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 205,
            column: 38
          }
        },
        "75": {
          start: {
            line: 206,
            column: 6
          },
          end: {
            line: 206,
            column: 38
          }
        },
        "76": {
          start: {
            line: 207,
            column: 6
          },
          end: {
            line: 207,
            column: 38
          }
        },
        "77": {
          start: {
            line: 208,
            column: 6
          },
          end: {
            line: 208,
            column: 38
          }
        },
        "78": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 209,
            column: 38
          }
        },
        "79": {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 210,
            column: 38
          }
        },
        "80": {
          start: {
            line: 214,
            column: 6
          },
          end: {
            line: 214,
            column: 26
          }
        },
        "81": {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        "82": {
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 224,
            column: 53
          }
        },
        "83": {
          start: {
            line: 225,
            column: 6
          },
          end: {
            line: 225,
            column: 19
          }
        },
        "84": {
          start: {
            line: 229,
            column: 25
          },
          end: {
            line: 229,
            column: 66
          }
        },
        "85": {
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 235,
            column: 7
          }
        },
        "86": {
          start: {
            line: 234,
            column: 8
          },
          end: {
            line: 234,
            column: 48
          }
        },
        "87": {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 237,
            column: 43
          }
        },
        "88": {
          start: {
            line: 238,
            column: 6
          },
          end: {
            line: 238,
            column: 50
          }
        },
        "89": {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 239,
            column: 33
          }
        },
        "90": {
          start: {
            line: 241,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        },
        "91": {
          start: {
            line: 242,
            column: 8
          },
          end: {
            line: 242,
            column: 34
          }
        },
        "92": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 47
          }
        },
        "93": {
          start: {
            line: 247,
            column: 6
          },
          end: {
            line: 249,
            column: 7
          }
        },
        "94": {
          start: {
            line: 248,
            column: 8
          },
          end: {
            line: 248,
            column: 28
          }
        },
        "95": {
          start: {
            line: 251,
            column: 25
          },
          end: {
            line: 253,
            column: 8
          }
        },
        "96": {
          start: {
            line: 255,
            column: 33
          },
          end: {
            line: 261,
            column: 7
          }
        },
        "97": {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 258,
            column: 9
          }
        },
        "98": {
          start: {
            line: 257,
            column: 10
          },
          end: {
            line: 257,
            column: 31
          }
        },
        "99": {
          start: {
            line: 259,
            column: 8
          },
          end: {
            line: 259,
            column: 37
          }
        },
        "100": {
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 260,
            column: 44
          }
        },
        "101": {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 271,
            column: 7
          }
        },
        "102": {
          start: {
            line: 264,
            column: 36
          },
          end: {
            line: 264,
            column: 88
          }
        },
        "103": {
          start: {
            line: 266,
            column: 8
          },
          end: {
            line: 268,
            column: 51
          }
        },
        "104": {
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 270,
            column: 28
          }
        },
        "105": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 283,
            column: 10
          }
        },
        "106": {
          start: {
            line: 278,
            column: 10
          },
          end: {
            line: 282,
            column: 11
          }
        },
        "107": {
          start: {
            line: 281,
            column: 12
          },
          end: {
            line: 281,
            column: 33
          }
        },
        "108": {
          start: {
            line: 287,
            column: 6
          },
          end: {
            line: 296,
            column: 7
          }
        },
        "109": {
          start: {
            line: 288,
            column: 8
          },
          end: {
            line: 293,
            column: 10
          }
        },
        "110": {
          start: {
            line: 289,
            column: 10
          },
          end: {
            line: 292,
            column: 11
          }
        },
        "111": {
          start: {
            line: 290,
            column: 12
          },
          end: {
            line: 290,
            column: 34
          }
        },
        "112": {
          start: {
            line: 291,
            column: 12
          },
          end: {
            line: 291,
            column: 23
          }
        },
        "113": {
          start: {
            line: 294,
            column: 13
          },
          end: {
            line: 296,
            column: 7
          }
        },
        "114": {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 51
          }
        },
        "115": {
          start: {
            line: 300,
            column: 6
          },
          end: {
            line: 304,
            column: 7
          }
        },
        "116": {
          start: {
            line: 301,
            column: 8
          },
          end: {
            line: 301,
            column: 71
          }
        },
        "117": {
          start: {
            line: 301,
            column: 46
          },
          end: {
            line: 301,
            column: 70
          }
        },
        "118": {
          start: {
            line: 303,
            column: 8
          },
          end: {
            line: 303,
            column: 35
          }
        },
        "119": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 42
          }
        },
        "120": {
          start: {
            line: 309,
            column: 6
          },
          end: {
            line: 309,
            column: 53
          }
        },
        "121": {
          start: {
            line: 310,
            column: 6
          },
          end: {
            line: 310,
            column: 35
          }
        },
        "122": {
          start: {
            line: 311,
            column: 6
          },
          end: {
            line: 316,
            column: 8
          }
        },
        "123": {
          start: {
            line: 312,
            column: 8
          },
          end: {
            line: 312,
            column: 52
          }
        },
        "124": {
          start: {
            line: 313,
            column: 8
          },
          end: {
            line: 313,
            column: 32
          }
        },
        "125": {
          start: {
            line: 314,
            column: 8
          },
          end: {
            line: 314,
            column: 30
          }
        },
        "126": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 315,
            column: 46
          }
        },
        "127": {
          start: {
            line: 320,
            column: 6
          },
          end: {
            line: 323,
            column: 7
          }
        },
        "128": {
          start: {
            line: 321,
            column: 8
          },
          end: {
            line: 321,
            column: 34
          }
        },
        "129": {
          start: {
            line: 322,
            column: 8
          },
          end: {
            line: 322,
            column: 29
          }
        },
        "130": {
          start: {
            line: 327,
            column: 22
          },
          end: {
            line: 328,
            column: 29
          }
        },
        "131": {
          start: {
            line: 330,
            column: 6
          },
          end: {
            line: 396,
            column: 7
          }
        },
        "132": {
          start: {
            line: 331,
            column: 8
          },
          end: {
            line: 331,
            column: 54
          }
        },
        "133": {
          start: {
            line: 332,
            column: 8
          },
          end: {
            line: 332,
            column: 53
          }
        },
        "134": {
          start: {
            line: 334,
            column: 8
          },
          end: {
            line: 336,
            column: 9
          }
        },
        "135": {
          start: {
            line: 335,
            column: 10
          },
          end: {
            line: 335,
            column: 47
          }
        },
        "136": {
          start: {
            line: 338,
            column: 8
          },
          end: {
            line: 338,
            column: 49
          }
        },
        "137": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 353,
            column: 10
          }
        },
        "138": {
          start: {
            line: 341,
            column: 10
          },
          end: {
            line: 344,
            column: 11
          }
        },
        "139": {
          start: {
            line: 342,
            column: 12
          },
          end: {
            line: 342,
            column: 45
          }
        },
        "140": {
          start: {
            line: 343,
            column: 12
          },
          end: {
            line: 343,
            column: 18
          }
        },
        "141": {
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 347,
            column: 11
          }
        },
        "142": {
          start: {
            line: 346,
            column: 12
          },
          end: {
            line: 346,
            column: 18
          }
        },
        "143": {
          start: {
            line: 348,
            column: 10
          },
          end: {
            line: 352,
            column: 11
          }
        },
        "144": {
          start: {
            line: 349,
            column: 12
          },
          end: {
            line: 349,
            column: 33
          }
        },
        "145": {
          start: {
            line: 351,
            column: 12
          },
          end: {
            line: 351,
            column: 23
          }
        },
        "146": {
          start: {
            line: 355,
            column: 8
          },
          end: {
            line: 357,
            column: 9
          }
        },
        "147": {
          start: {
            line: 356,
            column: 10
          },
          end: {
            line: 356,
            column: 37
          }
        },
        "148": {
          start: {
            line: 359,
            column: 8
          },
          end: {
            line: 359,
            column: 50
          }
        },
        "149": {
          start: {
            line: 361,
            column: 8
          },
          end: {
            line: 363,
            column: 9
          }
        },
        "150": {
          start: {
            line: 362,
            column: 10
          },
          end: {
            line: 362,
            column: 16
          }
        },
        "151": {
          start: {
            line: 365,
            column: 8
          },
          end: {
            line: 368,
            column: 9
          }
        },
        "152": {
          start: {
            line: 366,
            column: 10
          },
          end: {
            line: 366,
            column: 20
          }
        },
        "153": {
          start: {
            line: 367,
            column: 10
          },
          end: {
            line: 367,
            column: 16
          }
        },
        "154": {
          start: {
            line: 370,
            column: 43
          },
          end: {
            line: 370,
            column: 96
          }
        },
        "155": {
          start: {
            line: 372,
            column: 8
          },
          end: {
            line: 374,
            column: 59
          }
        },
        "156": {
          start: {
            line: 375,
            column: 13
          },
          end: {
            line: 396,
            column: 7
          }
        },
        "157": {
          start: {
            line: 376,
            column: 8
          },
          end: {
            line: 376,
            column: 53
          }
        },
        "158": {
          start: {
            line: 378,
            column: 31
          },
          end: {
            line: 383,
            column: 9
          }
        },
        "159": {
          start: {
            line: 379,
            column: 10
          },
          end: {
            line: 379,
            column: 32
          }
        },
        "160": {
          start: {
            line: 380,
            column: 10
          },
          end: {
            line: 382,
            column: 11
          }
        },
        "161": {
          start: {
            line: 381,
            column: 12
          },
          end: {
            line: 381,
            column: 22
          }
        },
        "162": {
          start: {
            line: 385,
            column: 8
          },
          end: {
            line: 393,
            column: 9
          }
        },
        "163": {
          start: {
            line: 386,
            column: 45
          },
          end: {
            line: 386,
            column: 98
          }
        },
        "164": {
          start: {
            line: 388,
            column: 10
          },
          end: {
            line: 390,
            column: 61
          }
        },
        "165": {
          start: {
            line: 392,
            column: 10
          },
          end: {
            line: 392,
            column: 26
          }
        },
        "166": {
          start: {
            line: 394,
            column: 13
          },
          end: {
            line: 396,
            column: 7
          }
        },
        "167": {
          start: {
            line: 395,
            column: 8
          },
          end: {
            line: 395,
            column: 18
          }
        },
        "168": {
          start: {
            line: 406,
            column: 8
          },
          end: {
            line: 406,
            column: 74
          }
        },
        "169": {
          start: {
            line: 408,
            column: 6
          },
          end: {
            line: 410,
            column: 7
          }
        },
        "170": {
          start: {
            line: 409,
            column: 8
          },
          end: {
            line: 409,
            column: 69
          }
        },
        "171": {
          start: {
            line: 412,
            column: 6
          },
          end: {
            line: 414,
            column: 7
          }
        },
        "172": {
          start: {
            line: 413,
            column: 8
          },
          end: {
            line: 413,
            column: 70
          }
        },
        "173": {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 42
          }
        },
        "174": {
          start: {
            line: 419,
            column: 6
          },
          end: {
            line: 419,
            column: 43
          }
        },
        "175": {
          start: {
            line: 423,
            column: 19
          },
          end: {
            line: 423,
            column: 56
          }
        },
        "176": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 424,
            column: 74
          }
        },
        "177": {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 425,
            column: 54
          }
        },
        "178": {
          start: {
            line: 429,
            column: 6
          },
          end: {
            line: 459,
            column: 7
          }
        },
        "179": {
          start: {
            line: 432,
            column: 29
          },
          end: {
            line: 432,
            column: 93
          }
        },
        "180": {
          start: {
            line: 433,
            column: 30
          },
          end: {
            line: 433,
            column: 95
          }
        },
        "181": {
          start: {
            line: 436,
            column: 8
          },
          end: {
            line: 442,
            column: 10
          }
        },
        "182": {
          start: {
            line: 437,
            column: 32
          },
          end: {
            line: 437,
            column: 58
          }
        },
        "183": {
          start: {
            line: 438,
            column: 36
          },
          end: {
            line: 438,
            column: 67
          }
        },
        "184": {
          start: {
            line: 439,
            column: 10
          },
          end: {
            line: 441,
            column: 94
          }
        },
        "185": {
          start: {
            line: 445,
            column: 8
          },
          end: {
            line: 451,
            column: 10
          }
        },
        "186": {
          start: {
            line: 446,
            column: 31
          },
          end: {
            line: 446,
            column: 56
          }
        },
        "187": {
          start: {
            line: 447,
            column: 35
          },
          end: {
            line: 447,
            column: 65
          }
        },
        "188": {
          start: {
            line: 448,
            column: 10
          },
          end: {
            line: 450,
            column: 92
          }
        },
        "189": {
          start: {
            line: 454,
            column: 30
          },
          end: {
            line: 454,
            column: 62
          }
        },
        "190": {
          start: {
            line: 455,
            column: 34
          },
          end: {
            line: 455,
            column: 71
          }
        },
        "191": {
          start: {
            line: 456,
            column: 8
          },
          end: {
            line: 458,
            column: 92
          }
        },
        "192": {
          start: {
            line: 464,
            column: 27
          },
          end: {
            line: 464,
            column: 91
          }
        },
        "193": {
          start: {
            line: 465,
            column: 6
          },
          end: {
            line: 469,
            column: 8
          }
        },
        "194": {
          start: {
            line: 466,
            column: 24
          },
          end: {
            line: 466,
            column: 56
          }
        },
        "195": {
          start: {
            line: 467,
            column: 8
          },
          end: {
            line: 467,
            column: 46
          }
        },
        "196": {
          start: {
            line: 468,
            column: 8
          },
          end: {
            line: 468,
            column: 59
          }
        },
        "197": {
          start: {
            line: 472,
            column: 23
          },
          end: {
            line: 472,
            column: 93
          }
        },
        "198": {
          start: {
            line: 473,
            column: 6
          },
          end: {
            line: 478,
            column: 8
          }
        },
        "199": {
          start: {
            line: 474,
            column: 23
          },
          end: {
            line: 474,
            column: 54
          }
        },
        "200": {
          start: {
            line: 475,
            column: 8
          },
          end: {
            line: 477,
            column: 9
          }
        },
        "201": {
          start: {
            line: 476,
            column: 10
          },
          end: {
            line: 476,
            column: 75
          }
        },
        "202": {
          start: {
            line: 481,
            column: 22
          },
          end: {
            line: 481,
            column: 60
          }
        },
        "203": {
          start: {
            line: 482,
            column: 6
          },
          end: {
            line: 482,
            column: 50
          }
        },
        "204": {
          start: {
            line: 483,
            column: 6
          },
          end: {
            line: 483,
            column: 63
          }
        },
        "205": {
          start: {
            line: 487,
            column: 24
          },
          end: {
            line: 487,
            column: 53
          }
        },
        "206": {
          start: {
            line: 488,
            column: 6
          },
          end: {
            line: 488,
            column: 56
          }
        },
        "207": {
          start: {
            line: 489,
            column: 6
          },
          end: {
            line: 489,
            column: 42
          }
        },
        "208": {
          start: {
            line: 490,
            column: 29
          },
          end: {
            line: 490,
            column: 92
          }
        },
        "209": {
          start: {
            line: 491,
            column: 6
          },
          end: {
            line: 491,
            column: 42
          }
        },
        "210": {
          start: {
            line: 492,
            column: 6
          },
          end: {
            line: 492,
            column: 27
          }
        },
        "211": {
          start: {
            line: 498,
            column: 6
          },
          end: {
            line: 519,
            column: 8
          }
        },
        "212": {
          start: {
            line: 499,
            column: 19
          },
          end: {
            line: 499,
            column: 41
          }
        },
        "213": {
          start: {
            line: 500,
            column: 24
          },
          end: {
            line: 504,
            column: 9
          }
        },
        "214": {
          start: {
            line: 506,
            column: 8
          },
          end: {
            line: 509,
            column: 9
          }
        },
        "215": {
          start: {
            line: 507,
            column: 10
          },
          end: {
            line: 507,
            column: 41
          }
        },
        "216": {
          start: {
            line: 508,
            column: 10
          },
          end: {
            line: 508,
            column: 38
          }
        },
        "217": {
          start: {
            line: 511,
            column: 8
          },
          end: {
            line: 518,
            column: 9
          }
        },
        "218": {
          start: {
            line: 512,
            column: 10
          },
          end: {
            line: 514,
            column: 11
          }
        },
        "219": {
          start: {
            line: 513,
            column: 12
          },
          end: {
            line: 513,
            column: 62
          }
        },
        "220": {
          start: {
            line: 515,
            column: 10
          },
          end: {
            line: 515,
            column: 37
          }
        },
        "221": {
          start: {
            line: 516,
            column: 15
          },
          end: {
            line: 518,
            column: 9
          }
        },
        "222": {
          start: {
            line: 517,
            column: 10
          },
          end: {
            line: 517,
            column: 34
          }
        },
        "223": {
          start: {
            line: 529,
            column: 2
          },
          end: {
            line: 561,
            column: 4
          }
        },
        "224": {
          start: {
            line: 531,
            column: 21
          },
          end: {
            line: 531,
            column: 54
          }
        },
        "225": {
          start: {
            line: 533,
            column: 4
          },
          end: {
            line: 535,
            column: 5
          }
        },
        "226": {
          start: {
            line: 534,
            column: 6
          },
          end: {
            line: 534,
            column: 47
          }
        },
        "227": {
          start: {
            line: 537,
            column: 19
          },
          end: {
            line: 541,
            column: 7
          }
        },
        "228": {
          start: {
            line: 543,
            column: 4
          },
          end: {
            line: 545,
            column: 5
          }
        },
        "229": {
          start: {
            line: 544,
            column: 6
          },
          end: {
            line: 544,
            column: 28
          }
        },
        "230": {
          start: {
            line: 547,
            column: 20
          },
          end: {
            line: 558,
            column: 6
          }
        },
        "231": {
          start: {
            line: 548,
            column: 6
          },
          end: {
            line: 551,
            column: 7
          }
        },
        "232": {
          start: {
            line: 550,
            column: 8
          },
          end: {
            line: 550,
            column: 14
          }
        },
        "233": {
          start: {
            line: 553,
            column: 6
          },
          end: {
            line: 557,
            column: 8
          }
        },
        "234": {
          start: {
            line: 554,
            column: 8
          },
          end: {
            line: 556,
            column: 9
          }
        },
        "235": {
          start: {
            line: 555,
            column: 10
          },
          end: {
            line: 555,
            column: 22
          }
        },
        "236": {
          start: {
            line: 560,
            column: 4
          },
          end: {
            line: 560,
            column: 56
          }
        },
        "237": {
          start: {
            line: 569,
            column: 2
          },
          end: {
            line: 569,
            column: 37
          }
        },
        "238": {
          start: {
            line: 570,
            column: 2
          },
          end: {
            line: 570,
            column: 32
          }
        },
        "239": {
          start: {
            line: 571,
            column: 2
          },
          end: {
            line: 574,
            column: 3
          }
        },
        "240": {
          start: {
            line: 572,
            column: 4
          },
          end: {
            line: 572,
            column: 35
          }
        },
        "241": {
          start: {
            line: 573,
            column: 4
          },
          end: {
            line: 573,
            column: 33
          }
        },
        "242": {
          start: {
            line: 576,
            column: 2
          },
          end: {
            line: 576,
            column: 14
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 15
            },
            end: {
              line: 11,
              column: 16
            }
          },
          loc: {
            start: {
              line: 11,
              column: 22
            },
            end: {
              line: 577,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 77,
              column: 4
            },
            end: {
              line: 77,
              column: 5
            }
          },
          loc: {
            start: {
              line: 77,
              column: 33
            },
            end: {
              line: 86,
              column: 5
            }
          },
          line: 77
        },
        "2": {
          name: "(anonymous_2)",
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
              column: 25
            },
            end: {
              line: 92,
              column: 5
            }
          },
          line: 90
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 94,
              column: 4
            },
            end: {
              line: 94,
              column: 5
            }
          },
          loc: {
            start: {
              line: 94,
              column: 25
            },
            end: {
              line: 96,
              column: 5
            }
          },
          line: 94
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 100,
              column: 5
            }
          },
          loc: {
            start: {
              line: 100,
              column: 26
            },
            end: {
              line: 102,
              column: 5
            }
          },
          line: 100
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 104,
              column: 4
            },
            end: {
              line: 104,
              column: 5
            }
          },
          loc: {
            start: {
              line: 104,
              column: 24
            },
            end: {
              line: 150,
              column: 5
            }
          },
          line: 104
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 138,
              column: 8
            },
            end: {
              line: 138,
              column: 9
            }
          },
          loc: {
            start: {
              line: 138,
              column: 19
            },
            end: {
              line: 138,
              column: 35
            }
          },
          line: 138
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 141,
              column: 50
            },
            end: {
              line: 141,
              column: 51
            }
          },
          loc: {
            start: {
              line: 141,
              column: 56
            },
            end: {
              line: 147,
              column: 7
            }
          },
          line: 141
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 142,
              column: 52
            },
            end: {
              line: 142,
              column: 53
            }
          },
          loc: {
            start: {
              line: 142,
              column: 63
            },
            end: {
              line: 146,
              column: 9
            }
          },
          line: 142
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 149,
              column: 25
            },
            end: {
              line: 149,
              column: 26
            }
          },
          loc: {
            start: {
              line: 149,
              column: 31
            },
            end: {
              line: 149,
              column: 63
            }
          },
          line: 149
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 152,
              column: 4
            },
            end: {
              line: 152,
              column: 5
            }
          },
          loc: {
            start: {
              line: 152,
              column: 16
            },
            end: {
              line: 196,
              column: 5
            }
          },
          line: 152
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 191,
              column: 36
            },
            end: {
              line: 191,
              column: 37
            }
          },
          loc: {
            start: {
              line: 191,
              column: 47
            },
            end: {
              line: 191,
              column: 69
            }
          },
          line: 191
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 198,
              column: 5
            }
          },
          loc: {
            start: {
              line: 198,
              column: 14
            },
            end: {
              line: 211,
              column: 5
            }
          },
          line: 198
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 213,
              column: 4
            },
            end: {
              line: 213,
              column: 5
            }
          },
          loc: {
            start: {
              line: 213,
              column: 19
            },
            end: {
              line: 215,
              column: 5
            }
          },
          line: 213
        },
        "14": {
          name: "(anonymous_14)",
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
              column: 23
            },
            end: {
              line: 226,
              column: 5
            }
          },
          line: 219
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 228,
              column: 4
            },
            end: {
              line: 228,
              column: 5
            }
          },
          loc: {
            start: {
              line: 228,
              column: 32
            },
            end: {
              line: 272,
              column: 5
            }
          },
          line: 228
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 255,
              column: 33
            },
            end: {
              line: 255,
              column: 34
            }
          },
          loc: {
            start: {
              line: 255,
              column: 39
            },
            end: {
              line: 261,
              column: 7
            }
          },
          line: 255
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 274,
              column: 4
            },
            end: {
              line: 274,
              column: 5
            }
          },
          loc: {
            start: {
              line: 274,
              column: 20
            },
            end: {
              line: 284,
              column: 5
            }
          },
          line: 274
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 277,
              column: 27
            },
            end: {
              line: 277,
              column: 28
            }
          },
          loc: {
            start: {
              line: 277,
              column: 38
            },
            end: {
              line: 283,
              column: 9
            }
          },
          line: 277
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 286,
              column: 4
            },
            end: {
              line: 286,
              column: 5
            }
          },
          loc: {
            start: {
              line: 286,
              column: 22
            },
            end: {
              line: 297,
              column: 5
            }
          },
          line: 286
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 288,
              column: 51
            },
            end: {
              line: 288,
              column: 52
            }
          },
          loc: {
            start: {
              line: 288,
              column: 62
            },
            end: {
              line: 293,
              column: 9
            }
          },
          line: 288
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 299,
              column: 4
            },
            end: {
              line: 299,
              column: 5
            }
          },
          loc: {
            start: {
              line: 299,
              column: 22
            },
            end: {
              line: 305,
              column: 5
            }
          },
          line: 299
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 301,
              column: 35
            },
            end: {
              line: 301,
              column: 36
            }
          },
          loc: {
            start: {
              line: 301,
              column: 46
            },
            end: {
              line: 301,
              column: 70
            }
          },
          line: 301
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 307,
              column: 4
            },
            end: {
              line: 307,
              column: 5
            }
          },
          loc: {
            start: {
              line: 307,
              column: 17
            },
            end: {
              line: 317,
              column: 5
            }
          },
          line: 307
        },
        "24": {
          name: "(anonymous_24)",
          decl: {
            start: {
              line: 311,
              column: 25
            },
            end: {
              line: 311,
              column: 26
            }
          },
          loc: {
            start: {
              line: 311,
              column: 31
            },
            end: {
              line: 316,
              column: 7
            }
          },
          line: 311
        },
        "25": {
          name: "(anonymous_25)",
          decl: {
            start: {
              line: 319,
              column: 4
            },
            end: {
              line: 319,
              column: 5
            }
          },
          loc: {
            start: {
              line: 319,
              column: 22
            },
            end: {
              line: 324,
              column: 5
            }
          },
          line: 319
        },
        "26": {
          name: "(anonymous_26)",
          decl: {
            start: {
              line: 326,
              column: 4
            },
            end: {
              line: 326,
              column: 5
            }
          },
          loc: {
            start: {
              line: 326,
              column: 28
            },
            end: {
              line: 397,
              column: 5
            }
          },
          line: 326
        },
        "27": {
          name: "(anonymous_27)",
          decl: {
            start: {
              line: 340,
              column: 49
            },
            end: {
              line: 340,
              column: 50
            }
          },
          loc: {
            start: {
              line: 340,
              column: 60
            },
            end: {
              line: 353,
              column: 9
            }
          },
          line: 340
        },
        "28": {
          name: "(anonymous_28)",
          decl: {
            start: {
              line: 378,
              column: 31
            },
            end: {
              line: 378,
              column: 32
            }
          },
          loc: {
            start: {
              line: 378,
              column: 37
            },
            end: {
              line: 383,
              column: 9
            }
          },
          line: 378
        },
        "29": {
          name: "(anonymous_29)",
          decl: {
            start: {
              line: 404,
              column: 4
            },
            end: {
              line: 404,
              column: 5
            }
          },
          loc: {
            start: {
              line: 404,
              column: 20
            },
            end: {
              line: 415,
              column: 5
            }
          },
          line: 404
        },
        "30": {
          name: "(anonymous_30)",
          decl: {
            start: {
              line: 417,
              column: 4
            },
            end: {
              line: 417,
              column: 5
            }
          },
          loc: {
            start: {
              line: 417,
              column: 24
            },
            end: {
              line: 420,
              column: 5
            }
          },
          line: 417
        },
        "31": {
          name: "(anonymous_31)",
          decl: {
            start: {
              line: 422,
              column: 4
            },
            end: {
              line: 422,
              column: 5
            }
          },
          loc: {
            start: {
              line: 422,
              column: 22
            },
            end: {
              line: 426,
              column: 5
            }
          },
          line: 422
        },
        "32": {
          name: "(anonymous_32)",
          decl: {
            start: {
              line: 428,
              column: 4
            },
            end: {
              line: 428,
              column: 5
            }
          },
          loc: {
            start: {
              line: 428,
              column: 20
            },
            end: {
              line: 460,
              column: 5
            }
          },
          line: 428
        },
        "33": {
          name: "(anonymous_33)",
          decl: {
            start: {
              line: 436,
              column: 29
            },
            end: {
              line: 436,
              column: 30
            }
          },
          loc: {
            start: {
              line: 436,
              column: 49
            },
            end: {
              line: 442,
              column: 9
            }
          },
          line: 436
        },
        "34": {
          name: "(anonymous_34)",
          decl: {
            start: {
              line: 445,
              column: 30
            },
            end: {
              line: 445,
              column: 31
            }
          },
          loc: {
            start: {
              line: 445,
              column: 50
            },
            end: {
              line: 451,
              column: 9
            }
          },
          line: 445
        },
        "35": {
          name: "(anonymous_35)",
          decl: {
            start: {
              line: 462,
              column: 4
            },
            end: {
              line: 462,
              column: 5
            }
          },
          loc: {
            start: {
              line: 462,
              column: 22
            },
            end: {
              line: 484,
              column: 5
            }
          },
          line: 462
        },
        "36": {
          name: "(anonymous_36)",
          decl: {
            start: {
              line: 465,
              column: 27
            },
            end: {
              line: 465,
              column: 28
            }
          },
          loc: {
            start: {
              line: 465,
              column: 47
            },
            end: {
              line: 469,
              column: 7
            }
          },
          line: 465
        },
        "37": {
          name: "(anonymous_37)",
          decl: {
            start: {
              line: 473,
              column: 23
            },
            end: {
              line: 473,
              column: 24
            }
          },
          loc: {
            start: {
              line: 473,
              column: 43
            },
            end: {
              line: 478,
              column: 7
            }
          },
          line: 473
        },
        "38": {
          name: "(anonymous_38)",
          decl: {
            start: {
              line: 486,
              column: 4
            },
            end: {
              line: 486,
              column: 5
            }
          },
          loc: {
            start: {
              line: 486,
              column: 25
            },
            end: {
              line: 493,
              column: 5
            }
          },
          line: 486
        },
        "39": {
          name: "(anonymous_39)",
          decl: {
            start: {
              line: 497,
              column: 4
            },
            end: {
              line: 497,
              column: 5
            }
          },
          loc: {
            start: {
              line: 497,
              column: 51
            },
            end: {
              line: 520,
              column: 5
            }
          },
          line: 497
        },
        "40": {
          name: "(anonymous_40)",
          decl: {
            start: {
              line: 498,
              column: 23
            },
            end: {
              line: 498,
              column: 24
            }
          },
          loc: {
            start: {
              line: 498,
              column: 35
            },
            end: {
              line: 519,
              column: 7
            }
          },
          line: 498
        },
        "41": {
          name: "(anonymous_41)",
          decl: {
            start: {
              line: 529,
              column: 61
            },
            end: {
              line: 529,
              column: 62
            }
          },
          loc: {
            start: {
              line: 529,
              column: 78
            },
            end: {
              line: 561,
              column: 3
            }
          },
          line: 529
        },
        "42": {
          name: "(anonymous_42)",
          decl: {
            start: {
              line: 547,
              column: 46
            },
            end: {
              line: 547,
              column: 47
            }
          },
          loc: {
            start: {
              line: 547,
              column: 61
            },
            end: {
              line: 558,
              column: 5
            }
          },
          line: 547
        },
        "43": {
          name: "(anonymous_43)",
          decl: {
            start: {
              line: 553,
              column: 32
            },
            end: {
              line: 553,
              column: 33
            }
          },
          loc: {
            start: {
              line: 553,
              column: 38
            },
            end: {
              line: 557,
              column: 7
            }
          },
          line: 553
        },
        "44": {
          name: "(anonymous_44)",
          decl: {
            start: {
              line: 571,
              column: 26
            },
            end: {
              line: 571,
              column: 27
            }
          },
          loc: {
            start: {
              line: 571,
              column: 38
            },
            end: {
              line: 574,
              column: 3
            }
          },
          line: 571
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 101,
              column: 13
            },
            end: {
              line: 101,
              column: 67
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 101,
              column: 29
            },
            end: {
              line: 101,
              column: 40
            }
          }, {
            start: {
              line: 101,
              column: 43
            },
            end: {
              line: 101,
              column: 67
            }
          }],
          line: 101
        },
        "1": {
          loc: {
            start: {
              line: 105,
              column: 6
            },
            end: {
              line: 107,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 105,
              column: 6
            },
            end: {
              line: 107,
              column: 7
            }
          }, {
            start: {
              line: 105,
              column: 6
            },
            end: {
              line: 107,
              column: 7
            }
          }],
          line: 105
        },
        "2": {
          loc: {
            start: {
              line: 105,
              column: 10
            },
            end: {
              line: 105,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 105,
              column: 10
            },
            end: {
              line: 105,
              column: 31
            }
          }, {
            start: {
              line: 105,
              column: 35
            },
            end: {
              line: 105,
              column: 48
            }
          }],
          line: 105
        },
        "3": {
          loc: {
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 111,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 111,
              column: 7
            }
          }, {
            start: {
              line: 109,
              column: 6
            },
            end: {
              line: 111,
              column: 7
            }
          }],
          line: 109
        },
        "4": {
          loc: {
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          }, {
            start: {
              line: 119,
              column: 6
            },
            end: {
              line: 121,
              column: 7
            }
          }],
          line: 119
        },
        "5": {
          loc: {
            start: {
              line: 119,
              column: 10
            },
            end: {
              line: 119,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 119,
              column: 10
            },
            end: {
              line: 119,
              column: 23
            }
          }, {
            start: {
              line: 119,
              column: 27
            },
            end: {
              line: 119,
              column: 57
            }
          }],
          line: 119
        },
        "6": {
          loc: {
            start: {
              line: 143,
              column: 10
            },
            end: {
              line: 145,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 143,
              column: 10
            },
            end: {
              line: 145,
              column: 11
            }
          }, {
            start: {
              line: 143,
              column: 10
            },
            end: {
              line: 145,
              column: 11
            }
          }],
          line: 143
        },
        "7": {
          loc: {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }, {
            start: {
              line: 153,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }],
          line: 153
        },
        "8": {
          loc: {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          }, {
            start: {
              line: 157,
              column: 6
            },
            end: {
              line: 159,
              column: 7
            }
          }],
          line: 157
        },
        "9": {
          loc: {
            start: {
              line: 157,
              column: 10
            },
            end: {
              line: 157,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 157,
              column: 10
            },
            end: {
              line: 157,
              column: 31
            }
          }, {
            start: {
              line: 157,
              column: 35
            },
            end: {
              line: 157,
              column: 49
            }
          }],
          line: 157
        },
        "10": {
          loc: {
            start: {
              line: 165,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 165,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          }, {
            start: {
              line: 165,
              column: 6
            },
            end: {
              line: 167,
              column: 7
            }
          }],
          line: 165
        },
        "11": {
          loc: {
            start: {
              line: 165,
              column: 10
            },
            end: {
              line: 165,
              column: 58
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 165,
              column: 10
            },
            end: {
              line: 165,
              column: 24
            }
          }, {
            start: {
              line: 165,
              column: 28
            },
            end: {
              line: 165,
              column: 58
            }
          }],
          line: 165
        },
        "12": {
          loc: {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }, {
            start: {
              line: 172,
              column: 6
            },
            end: {
              line: 174,
              column: 7
            }
          }],
          line: 172
        },
        "13": {
          loc: {
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 195,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 195,
              column: 7
            }
          }, {
            start: {
              line: 187,
              column: 6
            },
            end: {
              line: 195,
              column: 7
            }
          }],
          line: 187
        },
        "14": {
          loc: {
            start: {
              line: 231,
              column: 6
            },
            end: {
              line: 235,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 231,
              column: 6
            },
            end: {
              line: 235,
              column: 7
            }
          }, {
            start: {
              line: 231,
              column: 6
            },
            end: {
              line: 235,
              column: 7
            }
          }],
          line: 231
        },
        "15": {
          loc: {
            start: {
              line: 231,
              column: 10
            },
            end: {
              line: 232,
              column: 64
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 231,
              column: 10
            },
            end: {
              line: 231,
              column: 35
            }
          }, {
            start: {
              line: 232,
              column: 9
            },
            end: {
              line: 232,
              column: 64
            }
          }],
          line: 231
        },
        "16": {
          loc: {
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          }, {
            start: {
              line: 241,
              column: 6
            },
            end: {
              line: 243,
              column: 7
            }
          }],
          line: 241
        },
        "17": {
          loc: {
            start: {
              line: 247,
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
              line: 247,
              column: 6
            },
            end: {
              line: 249,
              column: 7
            }
          }, {
            start: {
              line: 247,
              column: 6
            },
            end: {
              line: 249,
              column: 7
            }
          }],
          line: 247
        },
        "18": {
          loc: {
            start: {
              line: 256,
              column: 8
            },
            end: {
              line: 258,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 256,
              column: 8
            },
            end: {
              line: 258,
              column: 9
            }
          }, {
            start: {
              line: 256,
              column: 8
            },
            end: {
              line: 258,
              column: 9
            }
          }],
          line: 256
        },
        "19": {
          loc: {
            start: {
              line: 263,
              column: 6
            },
            end: {
              line: 271,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 263,
              column: 6
            },
            end: {
              line: 271,
              column: 7
            }
          }, {
            start: {
              line: 263,
              column: 6
            },
            end: {
              line: 271,
              column: 7
            }
          }],
          line: 263
        },
        "20": {
          loc: {
            start: {
              line: 278,
              column: 10
            },
            end: {
              line: 282,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 278,
              column: 10
            },
            end: {
              line: 282,
              column: 11
            }
          }, {
            start: {
              line: 278,
              column: 10
            },
            end: {
              line: 282,
              column: 11
            }
          }],
          line: 278
        },
        "21": {
          loc: {
            start: {
              line: 278,
              column: 14
            },
            end: {
              line: 280,
              column: 61
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 278,
              column: 14
            },
            end: {
              line: 278,
              column: 39
            }
          }, {
            start: {
              line: 279,
              column: 14
            },
            end: {
              line: 279,
              column: 44
            }
          }, {
            start: {
              line: 280,
              column: 14
            },
            end: {
              line: 280,
              column: 61
            }
          }],
          line: 278
        },
        "22": {
          loc: {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          }, {
            start: {
              line: 287,
              column: 6
            },
            end: {
              line: 296,
              column: 7
            }
          }],
          line: 287
        },
        "23": {
          loc: {
            start: {
              line: 287,
              column: 10
            },
            end: {
              line: 287,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 287,
              column: 10
            },
            end: {
              line: 287,
              column: 23
            }
          }, {
            start: {
              line: 287,
              column: 27
            },
            end: {
              line: 287,
              column: 48
            }
          }],
          line: 287
        },
        "24": {
          loc: {
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 292,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 292,
              column: 11
            }
          }, {
            start: {
              line: 289,
              column: 10
            },
            end: {
              line: 292,
              column: 11
            }
          }],
          line: 289
        },
        "25": {
          loc: {
            start: {
              line: 294,
              column: 13
            },
            end: {
              line: 296,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 294,
              column: 13
            },
            end: {
              line: 296,
              column: 7
            }
          }, {
            start: {
              line: 294,
              column: 13
            },
            end: {
              line: 296,
              column: 7
            }
          }],
          line: 294
        },
        "26": {
          loc: {
            start: {
              line: 300,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 300,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }, {
            start: {
              line: 300,
              column: 6
            },
            end: {
              line: 304,
              column: 7
            }
          }],
          line: 300
        },
        "27": {
          loc: {
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 323,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 323,
              column: 7
            }
          }, {
            start: {
              line: 320,
              column: 6
            },
            end: {
              line: 323,
              column: 7
            }
          }],
          line: 320
        },
        "28": {
          loc: {
            start: {
              line: 327,
              column: 22
            },
            end: {
              line: 328,
              column: 29
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 328,
              column: 10
            },
            end: {
              line: 328,
              column: 24
            }
          }, {
            start: {
              line: 328,
              column: 27
            },
            end: {
              line: 328,
              column: 29
            }
          }],
          line: 327
        },
        "29": {
          loc: {
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 396,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 396,
              column: 7
            }
          }, {
            start: {
              line: 330,
              column: 6
            },
            end: {
              line: 396,
              column: 7
            }
          }],
          line: 330
        },
        "30": {
          loc: {
            start: {
              line: 330,
              column: 10
            },
            end: {
              line: 330,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 330,
              column: 10
            },
            end: {
              line: 330,
              column: 23
            }
          }, {
            start: {
              line: 330,
              column: 27
            },
            end: {
              line: 330,
              column: 48
            }
          }],
          line: 330
        },
        "31": {
          loc: {
            start: {
              line: 334,
              column: 8
            },
            end: {
              line: 336,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 334,
              column: 8
            },
            end: {
              line: 336,
              column: 9
            }
          }, {
            start: {
              line: 334,
              column: 8
            },
            end: {
              line: 336,
              column: 9
            }
          }],
          line: 334
        },
        "32": {
          loc: {
            start: {
              line: 341,
              column: 10
            },
            end: {
              line: 344,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 341,
              column: 10
            },
            end: {
              line: 344,
              column: 11
            }
          }, {
            start: {
              line: 341,
              column: 10
            },
            end: {
              line: 344,
              column: 11
            }
          }],
          line: 341
        },
        "33": {
          loc: {
            start: {
              line: 345,
              column: 10
            },
            end: {
              line: 347,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 345,
              column: 10
            },
            end: {
              line: 347,
              column: 11
            }
          }, {
            start: {
              line: 345,
              column: 10
            },
            end: {
              line: 347,
              column: 11
            }
          }],
          line: 345
        },
        "34": {
          loc: {
            start: {
              line: 348,
              column: 10
            },
            end: {
              line: 352,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 348,
              column: 10
            },
            end: {
              line: 352,
              column: 11
            }
          }, {
            start: {
              line: 348,
              column: 10
            },
            end: {
              line: 352,
              column: 11
            }
          }],
          line: 348
        },
        "35": {
          loc: {
            start: {
              line: 355,
              column: 8
            },
            end: {
              line: 357,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 355,
              column: 8
            },
            end: {
              line: 357,
              column: 9
            }
          }, {
            start: {
              line: 355,
              column: 8
            },
            end: {
              line: 357,
              column: 9
            }
          }],
          line: 355
        },
        "36": {
          loc: {
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 363,
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
              line: 363,
              column: 9
            }
          }, {
            start: {
              line: 361,
              column: 8
            },
            end: {
              line: 363,
              column: 9
            }
          }],
          line: 361
        },
        "37": {
          loc: {
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 368,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 368,
              column: 9
            }
          }, {
            start: {
              line: 365,
              column: 8
            },
            end: {
              line: 368,
              column: 9
            }
          }],
          line: 365
        },
        "38": {
          loc: {
            start: {
              line: 375,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 375,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          }, {
            start: {
              line: 375,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          }],
          line: 375
        },
        "39": {
          loc: {
            start: {
              line: 375,
              column: 17
            },
            end: {
              line: 375,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 375,
              column: 17
            },
            end: {
              line: 375,
              column: 31
            }
          }, {
            start: {
              line: 375,
              column: 35
            },
            end: {
              line: 375,
              column: 49
            }
          }],
          line: 375
        },
        "40": {
          loc: {
            start: {
              line: 380,
              column: 10
            },
            end: {
              line: 382,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 380,
              column: 10
            },
            end: {
              line: 382,
              column: 11
            }
          }, {
            start: {
              line: 380,
              column: 10
            },
            end: {
              line: 382,
              column: 11
            }
          }],
          line: 380
        },
        "41": {
          loc: {
            start: {
              line: 385,
              column: 8
            },
            end: {
              line: 393,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 385,
              column: 8
            },
            end: {
              line: 393,
              column: 9
            }
          }, {
            start: {
              line: 385,
              column: 8
            },
            end: {
              line: 393,
              column: 9
            }
          }],
          line: 385
        },
        "42": {
          loc: {
            start: {
              line: 394,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 394,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          }, {
            start: {
              line: 394,
              column: 13
            },
            end: {
              line: 396,
              column: 7
            }
          }],
          line: 394
        },
        "43": {
          loc: {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 410,
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
              line: 410,
              column: 7
            }
          }, {
            start: {
              line: 408,
              column: 6
            },
            end: {
              line: 410,
              column: 7
            }
          }],
          line: 408
        },
        "44": {
          loc: {
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 408,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 408,
              column: 34
            }
          }, {
            start: {
              line: 408,
              column: 38
            },
            end: {
              line: 408,
              column: 56
            }
          }],
          line: 408
        },
        "45": {
          loc: {
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          }, {
            start: {
              line: 412,
              column: 6
            },
            end: {
              line: 414,
              column: 7
            }
          }],
          line: 412
        },
        "46": {
          loc: {
            start: {
              line: 412,
              column: 10
            },
            end: {
              line: 412,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 412,
              column: 10
            },
            end: {
              line: 412,
              column: 33
            }
          }, {
            start: {
              line: 412,
              column: 37
            },
            end: {
              line: 412,
              column: 56
            }
          }],
          line: 412
        },
        "47": {
          loc: {
            start: {
              line: 429,
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
              line: 429,
              column: 6
            },
            end: {
              line: 459,
              column: 7
            }
          }, {
            start: {
              line: 429,
              column: 6
            },
            end: {
              line: 459,
              column: 7
            }
          }],
          line: 429
        },
        "48": {
          loc: {
            start: {
              line: 468,
              column: 37
            },
            end: {
              line: 468,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 468,
              column: 47
            },
            end: {
              line: 468,
              column: 54
            }
          }, {
            start: {
              line: 468,
              column: 57
            },
            end: {
              line: 468,
              column: 59
            }
          }],
          line: 468
        },
        "49": {
          loc: {
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 477,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 477,
              column: 9
            }
          }, {
            start: {
              line: 475,
              column: 8
            },
            end: {
              line: 477,
              column: 9
            }
          }],
          line: 475
        },
        "50": {
          loc: {
            start: {
              line: 483,
              column: 41
            },
            end: {
              line: 483,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 483,
              column: 51
            },
            end: {
              line: 483,
              column: 58
            }
          }, {
            start: {
              line: 483,
              column: 61
            },
            end: {
              line: 483,
              column: 63
            }
          }],
          line: 483
        },
        "51": {
          loc: {
            start: {
              line: 503,
              column: 13
            },
            end: {
              line: 503,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 503,
              column: 52
            },
            end: {
              line: 503,
              column: 58
            }
          }, {
            start: {
              line: 503,
              column: 61
            },
            end: {
              line: 503,
              column: 63
            }
          }],
          line: 503
        },
        "52": {
          loc: {
            start: {
              line: 503,
              column: 13
            },
            end: {
              line: 503,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 503,
              column: 13
            },
            end: {
              line: 503,
              column: 39
            }
          }, {
            start: {
              line: 503,
              column: 43
            },
            end: {
              line: 503,
              column: 49
            }
          }],
          line: 503
        },
        "53": {
          loc: {
            start: {
              line: 506,
              column: 8
            },
            end: {
              line: 509,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 506,
              column: 8
            },
            end: {
              line: 509,
              column: 9
            }
          }, {
            start: {
              line: 506,
              column: 8
            },
            end: {
              line: 509,
              column: 9
            }
          }],
          line: 506
        },
        "54": {
          loc: {
            start: {
              line: 511,
              column: 8
            },
            end: {
              line: 518,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 511,
              column: 8
            },
            end: {
              line: 518,
              column: 9
            }
          }, {
            start: {
              line: 511,
              column: 8
            },
            end: {
              line: 518,
              column: 9
            }
          }],
          line: 511
        },
        "55": {
          loc: {
            start: {
              line: 512,
              column: 10
            },
            end: {
              line: 514,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 512,
              column: 10
            },
            end: {
              line: 514,
              column: 11
            }
          }, {
            start: {
              line: 512,
              column: 10
            },
            end: {
              line: 514,
              column: 11
            }
          }],
          line: 512
        },
        "56": {
          loc: {
            start: {
              line: 516,
              column: 15
            },
            end: {
              line: 518,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 516,
              column: 15
            },
            end: {
              line: 518,
              column: 9
            }
          }, {
            start: {
              line: 516,
              column: 15
            },
            end: {
              line: 518,
              column: 9
            }
          }],
          line: 516
        },
        "57": {
          loc: {
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 535,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 535,
              column: 5
            }
          }, {
            start: {
              line: 533,
              column: 4
            },
            end: {
              line: 535,
              column: 5
            }
          }],
          line: 533
        },
        "58": {
          loc: {
            start: {
              line: 537,
              column: 19
            },
            end: {
              line: 541,
              column: 7
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 538,
              column: 8
            },
            end: {
              line: 538,
              column: 16
            }
          }, {
            start: {
              line: 538,
              column: 19
            },
            end: {
              line: 541,
              column: 7
            }
          }],
          line: 537
        },
        "59": {
          loc: {
            start: {
              line: 543,
              column: 4
            },
            end: {
              line: 545,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 543,
              column: 4
            },
            end: {
              line: 545,
              column: 5
            }
          }, {
            start: {
              line: 543,
              column: 4
            },
            end: {
              line: 545,
              column: 5
            }
          }],
          line: 543
        },
        "60": {
          loc: {
            start: {
              line: 543,
              column: 8
            },
            end: {
              line: 543,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 543,
              column: 8
            },
            end: {
              line: 543,
              column: 28
            }
          }, {
            start: {
              line: 543,
              column: 32
            },
            end: {
              line: 543,
              column: 55
            }
          }],
          line: 543
        },
        "61": {
          loc: {
            start: {
              line: 548,
              column: 6
            },
            end: {
              line: 551,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 548,
              column: 6
            },
            end: {
              line: 551,
              column: 7
            }
          }, {
            start: {
              line: 548,
              column: 6
            },
            end: {
              line: 551,
              column: 7
            }
          }],
          line: 548
        },
        "62": {
          loc: {
            start: {
              line: 554,
              column: 8
            },
            end: {
              line: 556,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 554,
              column: 8
            },
            end: {
              line: 556,
              column: 9
            }
          }, {
            start: {
              line: 554,
              column: 8
            },
            end: {
              line: 556,
              column: 9
            }
          }],
          line: 554
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
        "207": 0,
        "208": 0,
        "209": 0,
        "210": 0,
        "211": 0,
        "212": 0,
        "213": 0,
        "214": 0,
        "215": 0,
        "216": 0,
        "217": 0,
        "218": 0,
        "219": 0,
        "220": 0,
        "221": 0,
        "222": 0,
        "223": 0,
        "224": 0,
        "225": 0,
        "226": 0,
        "227": 0,
        "228": 0,
        "229": 0,
        "230": 0,
        "231": 0,
        "232": 0,
        "233": 0,
        "234": 0,
        "235": 0,
        "236": 0,
        "237": 0,
        "238": 0,
        "239": 0,
        "240": 0,
        "241": 0,
        "242": 0
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
        "44": 0
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
        "21": [0, 0, 0],
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
        "52": [0, 0],
        "53": [0, 0],
        "54": [0, 0],
        "55": [0, 0],
        "56": [0, 0],
        "57": [0, 0],
        "58": [0, 0],
        "59": [0, 0],
        "60": [0, 0],
        "61": [0, 0],
        "62": [0, 0]
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
   * Bootstrap (v4.1.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = (cov_1tzmjes1h1.s[0]++, function ($$$1) {
    cov_1tzmjes1h1.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_1tzmjes1h1.s[1]++, 'modal');
    var VERSION = (cov_1tzmjes1h1.s[2]++, '4.1.3');
    var DATA_KEY = (cov_1tzmjes1h1.s[3]++, 'bs.modal');
    var EVENT_KEY = (cov_1tzmjes1h1.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_1tzmjes1h1.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_1tzmjes1h1.s[6]++, $$$1.fn[NAME]);
    var ESCAPE_KEYCODE = (cov_1tzmjes1h1.s[7]++, 27); // KeyboardEvent.which value for Escape (Esc) key

    var Default = (cov_1tzmjes1h1.s[8]++, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    });
    var DefaultType = (cov_1tzmjes1h1.s[9]++, {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    });
    var Event = (cov_1tzmjes1h1.s[10]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_1tzmjes1h1.s[11]++, {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    });
    var Selector = (cov_1tzmjes1h1.s[12]++, {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Modal =
    /*#__PURE__*/
    function () {
      function Modal(element, config) {
        cov_1tzmjes1h1.f[1]++;
        cov_1tzmjes1h1.s[13]++;
        this._config = this._getConfig(config);
        cov_1tzmjes1h1.s[14]++;
        this._element = element;
        cov_1tzmjes1h1.s[15]++;
        this._dialog = element.querySelector(Selector.DIALOG);
        cov_1tzmjes1h1.s[16]++;
        this._backdrop = null;
        cov_1tzmjes1h1.s[17]++;
        this._isShown = false;
        cov_1tzmjes1h1.s[18]++;
        this._isBodyOverflowing = false;
        cov_1tzmjes1h1.s[19]++;
        this._ignoreBackdropClick = false;
        cov_1tzmjes1h1.s[20]++;
        this._scrollbarWidth = 0;
      } // Getters


      var _proto = Modal.prototype;

      // Public
      _proto.toggle = function toggle(relatedTarget) {
        cov_1tzmjes1h1.f[4]++;
        cov_1tzmjes1h1.s[23]++;
        return this._isShown ? (cov_1tzmjes1h1.b[0][0]++, this.hide()) : (cov_1tzmjes1h1.b[0][1]++, this.show(relatedTarget));
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        cov_1tzmjes1h1.f[5]++;
        cov_1tzmjes1h1.s[24]++;

        if ((cov_1tzmjes1h1.b[2][0]++, this._isTransitioning) || (cov_1tzmjes1h1.b[2][1]++, this._isShown)) {
          cov_1tzmjes1h1.b[1][0]++;
          cov_1tzmjes1h1.s[25]++;
          return;
        } else {
          cov_1tzmjes1h1.b[1][1]++;
        }

        cov_1tzmjes1h1.s[26]++;

        if ($$$1(this._element).hasClass(ClassName.FADE)) {
          cov_1tzmjes1h1.b[3][0]++;
          cov_1tzmjes1h1.s[27]++;
          this._isTransitioning = true;
        } else {
          cov_1tzmjes1h1.b[3][1]++;
        }

        var showEvent = (cov_1tzmjes1h1.s[28]++, $$$1.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        }));
        cov_1tzmjes1h1.s[29]++;
        $$$1(this._element).trigger(showEvent);
        cov_1tzmjes1h1.s[30]++;

        if ((cov_1tzmjes1h1.b[5][0]++, this._isShown) || (cov_1tzmjes1h1.b[5][1]++, showEvent.isDefaultPrevented())) {
          cov_1tzmjes1h1.b[4][0]++;
          cov_1tzmjes1h1.s[31]++;
          return;
        } else {
          cov_1tzmjes1h1.b[4][1]++;
        }

        cov_1tzmjes1h1.s[32]++;
        this._isShown = true;
        cov_1tzmjes1h1.s[33]++;

        this._checkScrollbar();

        cov_1tzmjes1h1.s[34]++;

        this._setScrollbar();

        cov_1tzmjes1h1.s[35]++;

        this._adjustDialog();

        cov_1tzmjes1h1.s[36]++;
        $$$1(document.body).addClass(ClassName.OPEN);
        cov_1tzmjes1h1.s[37]++;

        this._setEscapeEvent();

        cov_1tzmjes1h1.s[38]++;

        this._setResizeEvent();

        cov_1tzmjes1h1.s[39]++;
        $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          cov_1tzmjes1h1.f[6]++;
          cov_1tzmjes1h1.s[40]++;
          return _this.hide(event);
        });
        cov_1tzmjes1h1.s[41]++;
        $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          cov_1tzmjes1h1.f[7]++;
          cov_1tzmjes1h1.s[42]++;
          $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            cov_1tzmjes1h1.f[8]++;
            cov_1tzmjes1h1.s[43]++;

            if ($$$1(event.target).is(_this._element)) {
              cov_1tzmjes1h1.b[6][0]++;
              cov_1tzmjes1h1.s[44]++;
              _this._ignoreBackdropClick = true;
            } else {
              cov_1tzmjes1h1.b[6][1]++;
            }
          });
        });
        cov_1tzmjes1h1.s[45]++;

        this._showBackdrop(function () {
          cov_1tzmjes1h1.f[9]++;
          cov_1tzmjes1h1.s[46]++;
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        cov_1tzmjes1h1.f[10]++;
        cov_1tzmjes1h1.s[47]++;

        if (event) {
          cov_1tzmjes1h1.b[7][0]++;
          cov_1tzmjes1h1.s[48]++;
          event.preventDefault();
        } else {
          cov_1tzmjes1h1.b[7][1]++;
        }

        cov_1tzmjes1h1.s[49]++;

        if ((cov_1tzmjes1h1.b[9][0]++, this._isTransitioning) || (cov_1tzmjes1h1.b[9][1]++, !this._isShown)) {
          cov_1tzmjes1h1.b[8][0]++;
          cov_1tzmjes1h1.s[50]++;
          return;
        } else {
          cov_1tzmjes1h1.b[8][1]++;
        }

        var hideEvent = (cov_1tzmjes1h1.s[51]++, $$$1.Event(Event.HIDE));
        cov_1tzmjes1h1.s[52]++;
        $$$1(this._element).trigger(hideEvent);
        cov_1tzmjes1h1.s[53]++;

        if ((cov_1tzmjes1h1.b[11][0]++, !this._isShown) || (cov_1tzmjes1h1.b[11][1]++, hideEvent.isDefaultPrevented())) {
          cov_1tzmjes1h1.b[10][0]++;
          cov_1tzmjes1h1.s[54]++;
          return;
        } else {
          cov_1tzmjes1h1.b[10][1]++;
        }

        cov_1tzmjes1h1.s[55]++;
        this._isShown = false;
        var transition = (cov_1tzmjes1h1.s[56]++, $$$1(this._element).hasClass(ClassName.FADE));
        cov_1tzmjes1h1.s[57]++;

        if (transition) {
          cov_1tzmjes1h1.b[12][0]++;
          cov_1tzmjes1h1.s[58]++;
          this._isTransitioning = true;
        } else {
          cov_1tzmjes1h1.b[12][1]++;
        }

        cov_1tzmjes1h1.s[59]++;

        this._setEscapeEvent();

        cov_1tzmjes1h1.s[60]++;

        this._setResizeEvent();

        cov_1tzmjes1h1.s[61]++;
        $$$1(document).off(Event.FOCUSIN);
        cov_1tzmjes1h1.s[62]++;
        $$$1(this._element).removeClass(ClassName.SHOW);
        cov_1tzmjes1h1.s[63]++;
        $$$1(this._element).off(Event.CLICK_DISMISS);
        cov_1tzmjes1h1.s[64]++;
        $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);
        cov_1tzmjes1h1.s[65]++;

        if (transition) {
          cov_1tzmjes1h1.b[13][0]++;
          var transitionDuration = (cov_1tzmjes1h1.s[66]++, Util.getTransitionDurationFromElement(this._element));
          cov_1tzmjes1h1.s[67]++;
          $$$1(this._element).one(Util.TRANSITION_END, function (event) {
            cov_1tzmjes1h1.f[11]++;
            cov_1tzmjes1h1.s[68]++;
            return _this2._hideModal(event);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1tzmjes1h1.b[13][1]++;
          cov_1tzmjes1h1.s[69]++;

          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        cov_1tzmjes1h1.f[12]++;
        cov_1tzmjes1h1.s[70]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_1tzmjes1h1.s[71]++;
        $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
        cov_1tzmjes1h1.s[72]++;
        this._config = null;
        cov_1tzmjes1h1.s[73]++;
        this._element = null;
        cov_1tzmjes1h1.s[74]++;
        this._dialog = null;
        cov_1tzmjes1h1.s[75]++;
        this._backdrop = null;
        cov_1tzmjes1h1.s[76]++;
        this._isShown = null;
        cov_1tzmjes1h1.s[77]++;
        this._isBodyOverflowing = null;
        cov_1tzmjes1h1.s[78]++;
        this._ignoreBackdropClick = null;
        cov_1tzmjes1h1.s[79]++;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        cov_1tzmjes1h1.f[13]++;
        cov_1tzmjes1h1.s[80]++;

        this._adjustDialog();
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        cov_1tzmjes1h1.f[14]++;
        cov_1tzmjes1h1.s[81]++;
        config = _objectSpread({}, Default, config);
        cov_1tzmjes1h1.s[82]++;
        Util.typeCheckConfig(NAME, config, DefaultType);
        cov_1tzmjes1h1.s[83]++;
        return config;
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this3 = this;

        cov_1tzmjes1h1.f[15]++;
        var transition = (cov_1tzmjes1h1.s[84]++, $$$1(this._element).hasClass(ClassName.FADE));
        cov_1tzmjes1h1.s[85]++;

        if ((cov_1tzmjes1h1.b[15][0]++, !this._element.parentNode) || (cov_1tzmjes1h1.b[15][1]++, this._element.parentNode.nodeType !== Node.ELEMENT_NODE)) {
          cov_1tzmjes1h1.b[14][0]++;
          cov_1tzmjes1h1.s[86]++;
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        } else {
          cov_1tzmjes1h1.b[14][1]++;
        }

        cov_1tzmjes1h1.s[87]++;
        this._element.style.display = 'block';
        cov_1tzmjes1h1.s[88]++;

        this._element.removeAttribute('aria-hidden');

        cov_1tzmjes1h1.s[89]++;
        this._element.scrollTop = 0;
        cov_1tzmjes1h1.s[90]++;

        if (transition) {
          cov_1tzmjes1h1.b[16][0]++;
          cov_1tzmjes1h1.s[91]++;
          Util.reflow(this._element);
        } else {
          cov_1tzmjes1h1.b[16][1]++;
        }

        cov_1tzmjes1h1.s[92]++;
        $$$1(this._element).addClass(ClassName.SHOW);
        cov_1tzmjes1h1.s[93]++;

        if (this._config.focus) {
          cov_1tzmjes1h1.b[17][0]++;
          cov_1tzmjes1h1.s[94]++;

          this._enforceFocus();
        } else {
          cov_1tzmjes1h1.b[17][1]++;
        }

        var shownEvent = (cov_1tzmjes1h1.s[95]++, $$$1.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        }));
        cov_1tzmjes1h1.s[96]++;

        var transitionComplete = function transitionComplete() {
          cov_1tzmjes1h1.f[16]++;
          cov_1tzmjes1h1.s[97]++;

          if (_this3._config.focus) {
            cov_1tzmjes1h1.b[18][0]++;
            cov_1tzmjes1h1.s[98]++;

            _this3._element.focus();
          } else {
            cov_1tzmjes1h1.b[18][1]++;
          }

          cov_1tzmjes1h1.s[99]++;
          _this3._isTransitioning = false;
          cov_1tzmjes1h1.s[100]++;
          $$$1(_this3._element).trigger(shownEvent);
        };

        cov_1tzmjes1h1.s[101]++;

        if (transition) {
          cov_1tzmjes1h1.b[19][0]++;
          var transitionDuration = (cov_1tzmjes1h1.s[102]++, Util.getTransitionDurationFromElement(this._element));
          cov_1tzmjes1h1.s[103]++;
          $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1tzmjes1h1.b[19][1]++;
          cov_1tzmjes1h1.s[104]++;
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this4 = this;

        cov_1tzmjes1h1.f[17]++;
        cov_1tzmjes1h1.s[105]++;
        $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          cov_1tzmjes1h1.f[18]++;
          cov_1tzmjes1h1.s[106]++;

          if ((cov_1tzmjes1h1.b[21][0]++, document !== event.target) && (cov_1tzmjes1h1.b[21][1]++, _this4._element !== event.target) && (cov_1tzmjes1h1.b[21][2]++, $$$1(_this4._element).has(event.target).length === 0)) {
            cov_1tzmjes1h1.b[20][0]++;
            cov_1tzmjes1h1.s[107]++;

            _this4._element.focus();
          } else {
            cov_1tzmjes1h1.b[20][1]++;
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this5 = this;

        cov_1tzmjes1h1.f[19]++;
        cov_1tzmjes1h1.s[108]++;

        if ((cov_1tzmjes1h1.b[23][0]++, this._isShown) && (cov_1tzmjes1h1.b[23][1]++, this._config.keyboard)) {
          cov_1tzmjes1h1.b[22][0]++;
          cov_1tzmjes1h1.s[109]++;
          $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            cov_1tzmjes1h1.f[20]++;
            cov_1tzmjes1h1.s[110]++;

            if (event.which === ESCAPE_KEYCODE) {
              cov_1tzmjes1h1.b[24][0]++;
              cov_1tzmjes1h1.s[111]++;
              event.preventDefault();
              cov_1tzmjes1h1.s[112]++;

              _this5.hide();
            } else {
              cov_1tzmjes1h1.b[24][1]++;
            }
          });
        } else {
          cov_1tzmjes1h1.b[22][1]++;
          cov_1tzmjes1h1.s[113]++;

          if (!this._isShown) {
            cov_1tzmjes1h1.b[25][0]++;
            cov_1tzmjes1h1.s[114]++;
            $$$1(this._element).off(Event.KEYDOWN_DISMISS);
          } else {
            cov_1tzmjes1h1.b[25][1]++;
          }
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this6 = this;

        cov_1tzmjes1h1.f[21]++;
        cov_1tzmjes1h1.s[115]++;

        if (this._isShown) {
          cov_1tzmjes1h1.b[26][0]++;
          cov_1tzmjes1h1.s[116]++;
          $$$1(window).on(Event.RESIZE, function (event) {
            cov_1tzmjes1h1.f[22]++;
            cov_1tzmjes1h1.s[117]++;
            return _this6.handleUpdate(event);
          });
        } else {
          cov_1tzmjes1h1.b[26][1]++;
          cov_1tzmjes1h1.s[118]++;
          $$$1(window).off(Event.RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this7 = this;

        cov_1tzmjes1h1.f[23]++;
        cov_1tzmjes1h1.s[119]++;
        this._element.style.display = 'none';
        cov_1tzmjes1h1.s[120]++;

        this._element.setAttribute('aria-hidden', true);

        cov_1tzmjes1h1.s[121]++;
        this._isTransitioning = false;
        cov_1tzmjes1h1.s[122]++;

        this._showBackdrop(function () {
          cov_1tzmjes1h1.f[24]++;
          cov_1tzmjes1h1.s[123]++;
          $$$1(document.body).removeClass(ClassName.OPEN);
          cov_1tzmjes1h1.s[124]++;

          _this7._resetAdjustments();

          cov_1tzmjes1h1.s[125]++;

          _this7._resetScrollbar();

          cov_1tzmjes1h1.s[126]++;
          $$$1(_this7._element).trigger(Event.HIDDEN);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        cov_1tzmjes1h1.f[25]++;
        cov_1tzmjes1h1.s[127]++;

        if (this._backdrop) {
          cov_1tzmjes1h1.b[27][0]++;
          cov_1tzmjes1h1.s[128]++;
          $$$1(this._backdrop).remove();
          cov_1tzmjes1h1.s[129]++;
          this._backdrop = null;
        } else {
          cov_1tzmjes1h1.b[27][1]++;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this8 = this;

        cov_1tzmjes1h1.f[26]++;
        var animate = (cov_1tzmjes1h1.s[130]++, $$$1(this._element).hasClass(ClassName.FADE) ? (cov_1tzmjes1h1.b[28][0]++, ClassName.FADE) : (cov_1tzmjes1h1.b[28][1]++, ''));
        cov_1tzmjes1h1.s[131]++;

        if ((cov_1tzmjes1h1.b[30][0]++, this._isShown) && (cov_1tzmjes1h1.b[30][1]++, this._config.backdrop)) {
          cov_1tzmjes1h1.b[29][0]++;
          cov_1tzmjes1h1.s[132]++;
          this._backdrop = document.createElement('div');
          cov_1tzmjes1h1.s[133]++;
          this._backdrop.className = ClassName.BACKDROP;
          cov_1tzmjes1h1.s[134]++;

          if (animate) {
            cov_1tzmjes1h1.b[31][0]++;
            cov_1tzmjes1h1.s[135]++;

            this._backdrop.classList.add(animate);
          } else {
            cov_1tzmjes1h1.b[31][1]++;
          }

          cov_1tzmjes1h1.s[136]++;
          $$$1(this._backdrop).appendTo(document.body);
          cov_1tzmjes1h1.s[137]++;
          $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
            cov_1tzmjes1h1.f[27]++;
            cov_1tzmjes1h1.s[138]++;

            if (_this8._ignoreBackdropClick) {
              cov_1tzmjes1h1.b[32][0]++;
              cov_1tzmjes1h1.s[139]++;
              _this8._ignoreBackdropClick = false;
              cov_1tzmjes1h1.s[140]++;
              return;
            } else {
              cov_1tzmjes1h1.b[32][1]++;
            }

            cov_1tzmjes1h1.s[141]++;

            if (event.target !== event.currentTarget) {
              cov_1tzmjes1h1.b[33][0]++;
              cov_1tzmjes1h1.s[142]++;
              return;
            } else {
              cov_1tzmjes1h1.b[33][1]++;
            }

            cov_1tzmjes1h1.s[143]++;

            if (_this8._config.backdrop === 'static') {
              cov_1tzmjes1h1.b[34][0]++;
              cov_1tzmjes1h1.s[144]++;

              _this8._element.focus();
            } else {
              cov_1tzmjes1h1.b[34][1]++;
              cov_1tzmjes1h1.s[145]++;

              _this8.hide();
            }
          });
          cov_1tzmjes1h1.s[146]++;

          if (animate) {
            cov_1tzmjes1h1.b[35][0]++;
            cov_1tzmjes1h1.s[147]++;
            Util.reflow(this._backdrop);
          } else {
            cov_1tzmjes1h1.b[35][1]++;
          }

          cov_1tzmjes1h1.s[148]++;
          $$$1(this._backdrop).addClass(ClassName.SHOW);
          cov_1tzmjes1h1.s[149]++;

          if (!callback) {
            cov_1tzmjes1h1.b[36][0]++;
            cov_1tzmjes1h1.s[150]++;
            return;
          } else {
            cov_1tzmjes1h1.b[36][1]++;
          }

          cov_1tzmjes1h1.s[151]++;

          if (!animate) {
            cov_1tzmjes1h1.b[37][0]++;
            cov_1tzmjes1h1.s[152]++;
            callback();
            cov_1tzmjes1h1.s[153]++;
            return;
          } else {
            cov_1tzmjes1h1.b[37][1]++;
          }

          var backdropTransitionDuration = (cov_1tzmjes1h1.s[154]++, Util.getTransitionDurationFromElement(this._backdrop));
          cov_1tzmjes1h1.s[155]++;
          $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else {
          cov_1tzmjes1h1.b[29][1]++;
          cov_1tzmjes1h1.s[156]++;

          if ((cov_1tzmjes1h1.b[39][0]++, !this._isShown) && (cov_1tzmjes1h1.b[39][1]++, this._backdrop)) {
            cov_1tzmjes1h1.b[38][0]++;
            cov_1tzmjes1h1.s[157]++;
            $$$1(this._backdrop).removeClass(ClassName.SHOW);
            cov_1tzmjes1h1.s[158]++;

            var callbackRemove = function callbackRemove() {
              cov_1tzmjes1h1.f[28]++;
              cov_1tzmjes1h1.s[159]++;

              _this8._removeBackdrop();

              cov_1tzmjes1h1.s[160]++;

              if (callback) {
                cov_1tzmjes1h1.b[40][0]++;
                cov_1tzmjes1h1.s[161]++;
                callback();
              } else {
                cov_1tzmjes1h1.b[40][1]++;
              }
            };

            cov_1tzmjes1h1.s[162]++;

            if ($$$1(this._element).hasClass(ClassName.FADE)) {
              cov_1tzmjes1h1.b[41][0]++;

              var _backdropTransitionDuration = (cov_1tzmjes1h1.s[163]++, Util.getTransitionDurationFromElement(this._backdrop));

              cov_1tzmjes1h1.s[164]++;
              $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
            } else {
              cov_1tzmjes1h1.b[41][1]++;
              cov_1tzmjes1h1.s[165]++;
              callbackRemove();
            }
          } else {
            cov_1tzmjes1h1.b[38][1]++;
            cov_1tzmjes1h1.s[166]++;

            if (callback) {
              cov_1tzmjes1h1.b[42][0]++;
              cov_1tzmjes1h1.s[167]++;
              callback();
            } else {
              cov_1tzmjes1h1.b[42][1]++;
            }
          }
        }
      }; // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------


      _proto._adjustDialog = function _adjustDialog() {
        cov_1tzmjes1h1.f[29]++;
        var isModalOverflowing = (cov_1tzmjes1h1.s[168]++, this._element.scrollHeight > document.documentElement.clientHeight);
        cov_1tzmjes1h1.s[169]++;

        if ((cov_1tzmjes1h1.b[44][0]++, !this._isBodyOverflowing) && (cov_1tzmjes1h1.b[44][1]++, isModalOverflowing)) {
          cov_1tzmjes1h1.b[43][0]++;
          cov_1tzmjes1h1.s[170]++;
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        } else {
          cov_1tzmjes1h1.b[43][1]++;
        }

        cov_1tzmjes1h1.s[171]++;

        if ((cov_1tzmjes1h1.b[46][0]++, this._isBodyOverflowing) && (cov_1tzmjes1h1.b[46][1]++, !isModalOverflowing)) {
          cov_1tzmjes1h1.b[45][0]++;
          cov_1tzmjes1h1.s[172]++;
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        } else {
          cov_1tzmjes1h1.b[45][1]++;
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        cov_1tzmjes1h1.f[30]++;
        cov_1tzmjes1h1.s[173]++;
        this._element.style.paddingLeft = '';
        cov_1tzmjes1h1.s[174]++;
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        cov_1tzmjes1h1.f[31]++;
        var rect = (cov_1tzmjes1h1.s[175]++, document.body.getBoundingClientRect());
        cov_1tzmjes1h1.s[176]++;
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        cov_1tzmjes1h1.s[177]++;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this9 = this;

        cov_1tzmjes1h1.f[32]++;
        cov_1tzmjes1h1.s[178]++;

        if (this._isBodyOverflowing) {
          cov_1tzmjes1h1.b[47][0]++;
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          var fixedContent = (cov_1tzmjes1h1.s[179]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
          var stickyContent = (cov_1tzmjes1h1.s[180]++, [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT))); // Adjust fixed content padding

          cov_1tzmjes1h1.s[181]++;
          $$$1(fixedContent).each(function (index, element) {
            cov_1tzmjes1h1.f[33]++;
            var actualPadding = (cov_1tzmjes1h1.s[182]++, element.style.paddingRight);
            var calculatedPadding = (cov_1tzmjes1h1.s[183]++, $$$1(element).css('padding-right'));
            cov_1tzmjes1h1.s[184]++;
            $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          cov_1tzmjes1h1.s[185]++;
          $$$1(stickyContent).each(function (index, element) {
            cov_1tzmjes1h1.f[34]++;
            var actualMargin = (cov_1tzmjes1h1.s[186]++, element.style.marginRight);
            var calculatedMargin = (cov_1tzmjes1h1.s[187]++, $$$1(element).css('margin-right'));
            cov_1tzmjes1h1.s[188]++;
            $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = (cov_1tzmjes1h1.s[189]++, document.body.style.paddingRight);
          var calculatedPadding = (cov_1tzmjes1h1.s[190]++, $$$1(document.body).css('padding-right'));
          cov_1tzmjes1h1.s[191]++;
          $$$1(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        } else {
          cov_1tzmjes1h1.b[47][1]++;
        }
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        cov_1tzmjes1h1.f[35]++;
        // Restore fixed content padding
        var fixedContent = (cov_1tzmjes1h1.s[192]++, [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT)));
        cov_1tzmjes1h1.s[193]++;
        $$$1(fixedContent).each(function (index, element) {
          cov_1tzmjes1h1.f[36]++;
          var padding = (cov_1tzmjes1h1.s[194]++, $$$1(element).data('padding-right'));
          cov_1tzmjes1h1.s[195]++;
          $$$1(element).removeData('padding-right');
          cov_1tzmjes1h1.s[196]++;
          element.style.paddingRight = padding ? (cov_1tzmjes1h1.b[48][0]++, padding) : (cov_1tzmjes1h1.b[48][1]++, '');
        }); // Restore sticky content

        var elements = (cov_1tzmjes1h1.s[197]++, [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT)));
        cov_1tzmjes1h1.s[198]++;
        $$$1(elements).each(function (index, element) {
          cov_1tzmjes1h1.f[37]++;
          var margin = (cov_1tzmjes1h1.s[199]++, $$$1(element).data('margin-right'));
          cov_1tzmjes1h1.s[200]++;

          if (typeof margin !== 'undefined') {
            cov_1tzmjes1h1.b[49][0]++;
            cov_1tzmjes1h1.s[201]++;
            $$$1(element).css('margin-right', margin).removeData('margin-right');
          } else {
            cov_1tzmjes1h1.b[49][1]++;
          }
        }); // Restore body padding

        var padding = (cov_1tzmjes1h1.s[202]++, $$$1(document.body).data('padding-right'));
        cov_1tzmjes1h1.s[203]++;
        $$$1(document.body).removeData('padding-right');
        cov_1tzmjes1h1.s[204]++;
        document.body.style.paddingRight = padding ? (cov_1tzmjes1h1.b[50][0]++, padding) : (cov_1tzmjes1h1.b[50][1]++, '');
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        cov_1tzmjes1h1.f[38]++;
        // thx d.walsh
        var scrollDiv = (cov_1tzmjes1h1.s[205]++, document.createElement('div'));
        cov_1tzmjes1h1.s[206]++;
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        cov_1tzmjes1h1.s[207]++;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = (cov_1tzmjes1h1.s[208]++, scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth);
        cov_1tzmjes1h1.s[209]++;
        document.body.removeChild(scrollDiv);
        cov_1tzmjes1h1.s[210]++;
        return scrollbarWidth;
      }; // Static


      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        cov_1tzmjes1h1.f[39]++;
        cov_1tzmjes1h1.s[211]++;
        return this.each(function () {
          cov_1tzmjes1h1.f[40]++;
          var data = (cov_1tzmjes1h1.s[212]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_1tzmjes1h1.s[213]++, _objectSpread({}, Default, $$$1(this).data(), (cov_1tzmjes1h1.b[52][0]++, typeof config === 'object') && (cov_1tzmjes1h1.b[52][1]++, config) ? (cov_1tzmjes1h1.b[51][0]++, config) : (cov_1tzmjes1h1.b[51][1]++, {})));

          cov_1tzmjes1h1.s[214]++;

          if (!data) {
            cov_1tzmjes1h1.b[53][0]++;
            cov_1tzmjes1h1.s[215]++;
            data = new Modal(this, _config);
            cov_1tzmjes1h1.s[216]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_1tzmjes1h1.b[53][1]++;
          }

          cov_1tzmjes1h1.s[217]++;

          if (typeof config === 'string') {
            cov_1tzmjes1h1.b[54][0]++;
            cov_1tzmjes1h1.s[218]++;

            if (typeof data[config] === 'undefined') {
              cov_1tzmjes1h1.b[55][0]++;
              cov_1tzmjes1h1.s[219]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_1tzmjes1h1.b[55][1]++;
            }

            cov_1tzmjes1h1.s[220]++;
            data[config](relatedTarget);
          } else {
            cov_1tzmjes1h1.b[54][1]++;
            cov_1tzmjes1h1.s[221]++;

            if (_config.show) {
              cov_1tzmjes1h1.b[56][0]++;
              cov_1tzmjes1h1.s[222]++;
              data.show(relatedTarget);
            } else {
              cov_1tzmjes1h1.b[56][1]++;
            }
          }
        });
      };

      _createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          cov_1tzmjes1h1.f[2]++;
          cov_1tzmjes1h1.s[21]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_1tzmjes1h1.f[3]++;
          cov_1tzmjes1h1.s[22]++;
          return Default;
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_1tzmjes1h1.s[223]++;
    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      cov_1tzmjes1h1.f[41]++;
      var target;
      var selector = (cov_1tzmjes1h1.s[224]++, Util.getSelectorFromElement(this));
      cov_1tzmjes1h1.s[225]++;

      if (selector) {
        cov_1tzmjes1h1.b[57][0]++;
        cov_1tzmjes1h1.s[226]++;
        target = document.querySelector(selector);
      } else {
        cov_1tzmjes1h1.b[57][1]++;
      }

      var config = (cov_1tzmjes1h1.s[227]++, $$$1(target).data(DATA_KEY) ? (cov_1tzmjes1h1.b[58][0]++, 'toggle') : (cov_1tzmjes1h1.b[58][1]++, _objectSpread({}, $$$1(target).data(), $$$1(this).data())));
      cov_1tzmjes1h1.s[228]++;

      if ((cov_1tzmjes1h1.b[60][0]++, this.tagName === 'A') || (cov_1tzmjes1h1.b[60][1]++, this.tagName === 'AREA')) {
        cov_1tzmjes1h1.b[59][0]++;
        cov_1tzmjes1h1.s[229]++;
        event.preventDefault();
      } else {
        cov_1tzmjes1h1.b[59][1]++;
      }

      var $target = (cov_1tzmjes1h1.s[230]++, $$$1(target).one(Event.SHOW, function (showEvent) {
        cov_1tzmjes1h1.f[42]++;
        cov_1tzmjes1h1.s[231]++;

        if (showEvent.isDefaultPrevented()) {
          cov_1tzmjes1h1.b[61][0]++;
          cov_1tzmjes1h1.s[232]++;
          // Only register focus restorer if modal will actually get shown
          return;
        } else {
          cov_1tzmjes1h1.b[61][1]++;
        }

        cov_1tzmjes1h1.s[233]++;
        $target.one(Event.HIDDEN, function () {
          cov_1tzmjes1h1.f[43]++;
          cov_1tzmjes1h1.s[234]++;

          if ($$$1(_this10).is(':visible')) {
            cov_1tzmjes1h1.b[62][0]++;
            cov_1tzmjes1h1.s[235]++;

            _this10.focus();
          } else {
            cov_1tzmjes1h1.b[62][1]++;
          }
        });
      }));
      cov_1tzmjes1h1.s[236]++;

      Modal._jQueryInterface.call($$$1(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_1tzmjes1h1.s[237]++;
    $$$1.fn[NAME] = Modal._jQueryInterface;
    cov_1tzmjes1h1.s[238]++;
    $$$1.fn[NAME].Constructor = Modal;
    cov_1tzmjes1h1.s[239]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_1tzmjes1h1.f[44]++;
      cov_1tzmjes1h1.s[240]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1tzmjes1h1.s[241]++;
      return Modal._jQueryInterface;
    };

    cov_1tzmjes1h1.s[242]++;
    return Modal;
  }($));

  return Modal;

})));
//# sourceMappingURL=modal.js.map
