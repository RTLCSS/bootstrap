(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Collapse = factory(global.jQuery,global.Util));
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

  var cov_uf9p8qv60 = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/collapse.js",
        hash = "26a296a5812e4610da75474fcb368640c0b91ac9",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/collapse.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 396,
            column: 5
          }
        },
        "1": {
          start: {
            line: 18,
            column: 30
          },
          end: {
            line: 18,
            column: 40
          }
        },
        "2": {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "3": {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 43
          }
        },
        "4": {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 21,
            column: 44
          }
        },
        "5": {
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 41
          }
        },
        "6": {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 40
          }
        },
        "7": {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 28,
            column: 3
          }
        },
        "8": {
          start: {
            line: 30,
            column: 22
          },
          end: {
            line: 33,
            column: 3
          }
        },
        "9": {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 41,
            column: 3
          }
        },
        "10": {
          start: {
            line: 43,
            column: 20
          },
          end: {
            line: 48,
            column: 3
          }
        },
        "11": {
          start: {
            line: 50,
            column: 20
          },
          end: {
            line: 53,
            column: 3
          }
        },
        "12": {
          start: {
            line: 55,
            column: 19
          },
          end: {
            line: 58,
            column: 3
          }
        },
        "13": {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 68,
            column: 35
          }
        },
        "14": {
          start: {
            line: 69,
            column: 6
          },
          end: {
            line: 69,
            column: 37
          }
        },
        "15": {
          start: {
            line: 70,
            column: 6
          },
          end: {
            line: 70,
            column: 53
          }
        },
        "16": {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 74,
            column: 8
          }
        },
        "17": {
          start: {
            line: 75,
            column: 25
          },
          end: {
            line: 75,
            column: 87
          }
        },
        "18": {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        "19": {
          start: {
            line: 77,
            column: 21
          },
          end: {
            line: 77,
            column: 34
          }
        },
        "20": {
          start: {
            line: 78,
            column: 25
          },
          end: {
            line: 78,
            column: 58
          }
        },
        "21": {
          start: {
            line: 79,
            column: 30
          },
          end: {
            line: 80,
            column: 55
          }
        },
        "22": {
          start: {
            line: 80,
            column: 33
          },
          end: {
            line: 80,
            column: 54
          }
        },
        "23": {
          start: {
            line: 82,
            column: 8
          },
          end: {
            line: 85,
            column: 9
          }
        },
        "24": {
          start: {
            line: 83,
            column: 10
          },
          end: {
            line: 83,
            column: 35
          }
        },
        "25": {
          start: {
            line: 84,
            column: 10
          },
          end: {
            line: 84,
            column: 39
          }
        },
        "26": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 67
          }
        },
        "27": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 92,
            column: 7
          }
        },
        "28": {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 73
          }
        },
        "29": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 96,
            column: 7
          }
        },
        "30": {
          start: {
            line: 95,
            column: 8
          },
          end: {
            line: 95,
            column: 21
          }
        },
        "31": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 20
          }
        },
        "32": {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 20
          }
        },
        "33": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 116,
            column: 7
          }
        },
        "34": {
          start: {
            line: 113,
            column: 8
          },
          end: {
            line: 113,
            column: 19
          }
        },
        "35": {
          start: {
            line: 115,
            column: 8
          },
          end: {
            line: 115,
            column: 19
          }
        },
        "36": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 123,
            column: 7
          }
        },
        "37": {
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 122,
            column: 14
          }
        },
        "38": {
          start: {
            line: 128,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        "39": {
          start: {
            line: 129,
            column: 8
          },
          end: {
            line: 130,
            column: 85
          }
        },
        "40": {
          start: {
            line: 130,
            column: 28
          },
          end: {
            line: 130,
            column: 84
          }
        },
        "41": {
          start: {
            line: 132,
            column: 8
          },
          end: {
            line: 134,
            column: 9
          }
        },
        "42": {
          start: {
            line: 133,
            column: 10
          },
          end: {
            line: 133,
            column: 24
          }
        },
        "43": {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 142,
            column: 7
          }
        },
        "44": {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 67
          }
        },
        "45": {
          start: {
            line: 139,
            column: 8
          },
          end: {
            line: 141,
            column: 9
          }
        },
        "46": {
          start: {
            line: 140,
            column: 10
          },
          end: {
            line: 140,
            column: 16
          }
        },
        "47": {
          start: {
            line: 144,
            column: 25
          },
          end: {
            line: 144,
            column: 44
          }
        },
        "48": {
          start: {
            line: 145,
            column: 6
          },
          end: {
            line: 145,
            column: 42
          }
        },
        "49": {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 148,
            column: 7
          }
        },
        "50": {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 14
          }
        },
        "51": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        },
        "52": {
          start: {
            line: 151,
            column: 8
          },
          end: {
            line: 151,
            column: 78
          }
        },
        "53": {
          start: {
            line: 152,
            column: 8
          },
          end: {
            line: 154,
            column: 9
          }
        },
        "54": {
          start: {
            line: 153,
            column: 10
          },
          end: {
            line: 153,
            column: 41
          }
        },
        "55": {
          start: {
            line: 157,
            column: 24
          },
          end: {
            line: 157,
            column: 44
          }
        },
        "56": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 161,
            column: 39
          }
        },
        "57": {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 163,
            column: 40
          }
        },
        "58": {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        "59": {
          start: {
            line: 166,
            column: 8
          },
          end: {
            line: 168,
            column: 38
          }
        },
        "60": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 33
          }
        },
        "61": {
          start: {
            line: 173,
            column: 23
          },
          end: {
            line: 184,
            column: 7
          }
        },
        "62": {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 177,
            column: 35
          }
        },
        "63": {
          start: {
            line: 179,
            column: 8
          },
          end: {
            line: 179,
            column: 43
          }
        },
        "64": {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 181,
            column: 36
          }
        },
        "65": {
          start: {
            line: 183,
            column: 8
          },
          end: {
            line: 183,
            column: 45
          }
        },
        "66": {
          start: {
            line: 186,
            column: 35
          },
          end: {
            line: 186,
            column: 82
          }
        },
        "67": {
          start: {
            line: 187,
            column: 25
          },
          end: {
            line: 187,
            column: 56
          }
        },
        "68": {
          start: {
            line: 188,
            column: 33
          },
          end: {
            line: 188,
            column: 85
          }
        },
        "69": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 192,
            column: 49
          }
        },
        "70": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 194,
            column: 71
          }
        },
        "71": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 201,
            column: 7
          }
        },
        "72": {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 14
          }
        },
        "73": {
          start: {
            line: 203,
            column: 25
          },
          end: {
            line: 203,
            column: 44
          }
        },
        "74": {
          start: {
            line: 204,
            column: 6
          },
          end: {
            line: 204,
            column: 42
          }
        },
        "75": {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 207,
            column: 7
          }
        },
        "76": {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 206,
            column: 14
          }
        },
        "77": {
          start: {
            line: 209,
            column: 24
          },
          end: {
            line: 209,
            column: 44
          }
        },
        "78": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 211,
            column: 94
          }
        },
        "79": {
          start: {
            line: 213,
            column: 6
          },
          end: {
            line: 213,
            column: 32
          }
        },
        "80": {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 218,
            column: 36
          }
        },
        "81": {
          start: {
            line: 220,
            column: 33
          },
          end: {
            line: 220,
            column: 58
          }
        },
        "82": {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 233,
            column: 7
          }
        },
        "83": {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 232,
            column: 9
          }
        },
        "84": {
          start: {
            line: 223,
            column: 26
          },
          end: {
            line: 223,
            column: 47
          }
        },
        "85": {
          start: {
            line: 224,
            column: 27
          },
          end: {
            line: 224,
            column: 63
          }
        },
        "86": {
          start: {
            line: 225,
            column: 10
          },
          end: {
            line: 231,
            column: 11
          }
        },
        "87": {
          start: {
            line: 226,
            column: 26
          },
          end: {
            line: 226,
            column: 79
          }
        },
        "88": {
          start: {
            line: 227,
            column: 12
          },
          end: {
            line: 230,
            column: 13
          }
        },
        "89": {
          start: {
            line: 228,
            column: 14
          },
          end: {
            line: 229,
            column: 45
          }
        },
        "90": {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 235,
            column: 33
          }
        },
        "91": {
          start: {
            line: 237,
            column: 23
          },
          end: {
            line: 243,
            column: 7
          }
        },
        "92": {
          start: {
            line: 238,
            column: 8
          },
          end: {
            line: 238,
            column: 36
          }
        },
        "93": {
          start: {
            line: 239,
            column: 8
          },
          end: {
            line: 242,
            column: 32
          }
        },
        "94": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 41
          }
        },
        "95": {
          start: {
            line: 246,
            column: 33
          },
          end: {
            line: 246,
            column: 85
          }
        },
        "96": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 250,
            column: 49
          }
        },
        "97": {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 45
          }
        },
        "98": {
          start: {
            line: 258,
            column: 6
          },
          end: {
            line: 258,
            column: 43
          }
        },
        "99": {
          start: {
            line: 260,
            column: 6
          },
          end: {
            line: 260,
            column: 34
          }
        },
        "100": {
          start: {
            line: 261,
            column: 6
          },
          end: {
            line: 261,
            column: 34
          }
        },
        "101": {
          start: {
            line: 262,
            column: 6
          },
          end: {
            line: 262,
            column: 34
          }
        },
        "102": {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 263,
            column: 34
          }
        },
        "103": {
          start: {
            line: 264,
            column: 6
          },
          end: {
            line: 264,
            column: 34
          }
        },
        "104": {
          start: {
            line: 270,
            column: 6
          },
          end: {
            line: 273,
            column: 7
          }
        },
        "105": {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 274,
            column: 44
          }
        },
        "106": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 53
          }
        },
        "107": {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 19
          }
        },
        "108": {
          start: {
            line: 280,
            column: 23
          },
          end: {
            line: 280,
            column: 65
          }
        },
        "109": {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 281,
            column: 58
          }
        },
        "110": {
          start: {
            line: 285,
            column: 19
          },
          end: {
            line: 285,
            column: 23
          }
        },
        "111": {
          start: {
            line: 286,
            column: 6
          },
          end: {
            line: 295,
            column: 7
          }
        },
        "112": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 36
          }
        },
        "113": {
          start: {
            line: 290,
            column: 8
          },
          end: {
            line: 292,
            column: 9
          }
        },
        "114": {
          start: {
            line: 291,
            column: 10
          },
          end: {
            line: 291,
            column: 41
          }
        },
        "115": {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 60
          }
        },
        "116": {
          start: {
            line: 298,
            column: 8
          },
          end: {
            line: 298,
            column: 72
          }
        },
        "117": {
          start: {
            line: 300,
            column: 23
          },
          end: {
            line: 300,
            column: 71
          }
        },
        "118": {
          start: {
            line: 301,
            column: 6
          },
          end: {
            line: 306,
            column: 8
          }
        },
        "119": {
          start: {
            line: 302,
            column: 8
          },
          end: {
            line: 305,
            column: 9
          }
        },
        "120": {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 308,
            column: 19
          }
        },
        "121": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 320,
            column: 7
          }
        },
        "122": {
          start: {
            line: 313,
            column: 23
          },
          end: {
            line: 313,
            column: 58
          }
        },
        "123": {
          start: {
            line: 315,
            column: 8
          },
          end: {
            line: 319,
            column: 9
          }
        },
        "124": {
          start: {
            line: 316,
            column: 10
          },
          end: {
            line: 318,
            column: 42
          }
        },
        "125": {
          start: {
            line: 326,
            column: 23
          },
          end: {
            line: 326,
            column: 59
          }
        },
        "126": {
          start: {
            line: 327,
            column: 6
          },
          end: {
            line: 327,
            column: 63
          }
        },
        "127": {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 355,
            column: 8
          }
        },
        "128": {
          start: {
            line: 332,
            column: 24
          },
          end: {
            line: 332,
            column: 31
          }
        },
        "129": {
          start: {
            line: 333,
            column: 24
          },
          end: {
            line: 333,
            column: 44
          }
        },
        "130": {
          start: {
            line: 334,
            column: 24
          },
          end: {
            line: 338,
            column: 9
          }
        },
        "131": {
          start: {
            line: 340,
            column: 8
          },
          end: {
            line: 342,
            column: 9
          }
        },
        "132": {
          start: {
            line: 341,
            column: 10
          },
          end: {
            line: 341,
            column: 32
          }
        },
        "133": {
          start: {
            line: 344,
            column: 8
          },
          end: {
            line: 347,
            column: 9
          }
        },
        "134": {
          start: {
            line: 345,
            column: 10
          },
          end: {
            line: 345,
            column: 44
          }
        },
        "135": {
          start: {
            line: 346,
            column: 10
          },
          end: {
            line: 346,
            column: 36
          }
        },
        "136": {
          start: {
            line: 349,
            column: 8
          },
          end: {
            line: 354,
            column: 9
          }
        },
        "137": {
          start: {
            line: 350,
            column: 10
          },
          end: {
            line: 352,
            column: 11
          }
        },
        "138": {
          start: {
            line: 351,
            column: 12
          },
          end: {
            line: 351,
            column: 62
          }
        },
        "139": {
          start: {
            line: 353,
            column: 10
          },
          end: {
            line: 353,
            column: 24
          }
        },
        "140": {
          start: {
            line: 365,
            column: 2
          },
          end: {
            line: 380,
            column: 4
          }
        },
        "141": {
          start: {
            line: 367,
            column: 4
          },
          end: {
            line: 369,
            column: 5
          }
        },
        "142": {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 368,
            column: 28
          }
        },
        "143": {
          start: {
            line: 371,
            column: 21
          },
          end: {
            line: 371,
            column: 28
          }
        },
        "144": {
          start: {
            line: 372,
            column: 21
          },
          end: {
            line: 372,
            column: 54
          }
        },
        "145": {
          start: {
            line: 373,
            column: 22
          },
          end: {
            line: 373,
            column: 72
          }
        },
        "146": {
          start: {
            line: 374,
            column: 4
          },
          end: {
            line: 379,
            column: 6
          }
        },
        "147": {
          start: {
            line: 375,
            column: 22
          },
          end: {
            line: 375,
            column: 29
          }
        },
        "148": {
          start: {
            line: 376,
            column: 22
          },
          end: {
            line: 376,
            column: 44
          }
        },
        "149": {
          start: {
            line: 377,
            column: 22
          },
          end: {
            line: 377,
            column: 55
          }
        },
        "150": {
          start: {
            line: 378,
            column: 6
          },
          end: {
            line: 378,
            column: 53
          }
        },
        "151": {
          start: {
            line: 388,
            column: 2
          },
          end: {
            line: 388,
            column: 40
          }
        },
        "152": {
          start: {
            line: 389,
            column: 2
          },
          end: {
            line: 389,
            column: 35
          }
        },
        "153": {
          start: {
            line: 390,
            column: 2
          },
          end: {
            line: 393,
            column: 3
          }
        },
        "154": {
          start: {
            line: 391,
            column: 4
          },
          end: {
            line: 391,
            column: 35
          }
        },
        "155": {
          start: {
            line: 392,
            column: 4
          },
          end: {
            line: 392,
            column: 36
          }
        },
        "156": {
          start: {
            line: 395,
            column: 2
          },
          end: {
            line: 395,
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
              line: 396,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 67,
              column: 4
            },
            end: {
              line: 67,
              column: 5
            }
          },
          loc: {
            start: {
              line: 67,
              column: 33
            },
            end: {
              line: 97,
              column: 5
            }
          },
          line: 67
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 80,
              column: 18
            },
            end: {
              line: 80,
              column: 19
            }
          },
          loc: {
            start: {
              line: 80,
              column: 33
            },
            end: {
              line: 80,
              column: 54
            }
          },
          line: 80
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 101,
              column: 5
            }
          },
          loc: {
            start: {
              line: 101,
              column: 25
            },
            end: {
              line: 103,
              column: 5
            }
          },
          line: 101
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 105,
              column: 4
            },
            end: {
              line: 105,
              column: 5
            }
          },
          loc: {
            start: {
              line: 105,
              column: 25
            },
            end: {
              line: 107,
              column: 5
            }
          },
          line: 105
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 111,
              column: 4
            },
            end: {
              line: 111,
              column: 5
            }
          },
          loc: {
            start: {
              line: 111,
              column: 13
            },
            end: {
              line: 117,
              column: 5
            }
          },
          line: 111
        },
        "6": {
          name: "(anonymous_6)",
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
              line: 195,
              column: 5
            }
          },
          line: 119
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 130,
              column: 18
            },
            end: {
              line: 130,
              column: 19
            }
          },
          loc: {
            start: {
              line: 130,
              column: 28
            },
            end: {
              line: 130,
              column: 84
            }
          },
          line: 130
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 173,
              column: 23
            },
            end: {
              line: 173,
              column: 24
            }
          },
          loc: {
            start: {
              line: 173,
              column: 29
            },
            end: {
              line: 184,
              column: 7
            }
          },
          line: 173
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 197,
              column: 4
            },
            end: {
              line: 197,
              column: 5
            }
          },
          loc: {
            start: {
              line: 197,
              column: 11
            },
            end: {
              line: 251,
              column: 5
            }
          },
          line: 197
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 237,
              column: 23
            },
            end: {
              line: 237,
              column: 24
            }
          },
          loc: {
            start: {
              line: 237,
              column: 29
            },
            end: {
              line: 243,
              column: 7
            }
          },
          line: 237
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 38
            },
            end: {
              line: 255,
              column: 5
            }
          },
          line: 253
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 257,
              column: 4
            },
            end: {
              line: 257,
              column: 5
            }
          },
          loc: {
            start: {
              line: 257,
              column: 14
            },
            end: {
              line: 265,
              column: 5
            }
          },
          line: 257
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 269,
              column: 4
            },
            end: {
              line: 269,
              column: 5
            }
          },
          loc: {
            start: {
              line: 269,
              column: 23
            },
            end: {
              line: 277,
              column: 5
            }
          },
          line: 269
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 279,
              column: 4
            },
            end: {
              line: 279,
              column: 5
            }
          },
          loc: {
            start: {
              line: 279,
              column: 20
            },
            end: {
              line: 282,
              column: 5
            }
          },
          line: 279
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 284,
              column: 4
            },
            end: {
              line: 284,
              column: 5
            }
          },
          loc: {
            start: {
              line: 284,
              column: 17
            },
            end: {
              line: 309,
              column: 5
            }
          },
          line: 284
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 301,
              column: 23
            },
            end: {
              line: 301,
              column: 24
            }
          },
          loc: {
            start: {
              line: 301,
              column: 39
            },
            end: {
              line: 306,
              column: 7
            }
          },
          line: 301
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 311,
              column: 4
            },
            end: {
              line: 311,
              column: 5
            }
          },
          loc: {
            start: {
              line: 311,
              column: 53
            },
            end: {
              line: 321,
              column: 5
            }
          },
          line: 311
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 325,
              column: 4
            },
            end: {
              line: 325,
              column: 5
            }
          },
          loc: {
            start: {
              line: 325,
              column: 42
            },
            end: {
              line: 328,
              column: 5
            }
          },
          line: 325
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 330,
              column: 4
            },
            end: {
              line: 330,
              column: 5
            }
          },
          loc: {
            start: {
              line: 330,
              column: 36
            },
            end: {
              line: 356,
              column: 5
            }
          },
          line: 330
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 331,
              column: 23
            },
            end: {
              line: 331,
              column: 24
            }
          },
          loc: {
            start: {
              line: 331,
              column: 35
            },
            end: {
              line: 355,
              column: 7
            }
          },
          line: 331
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 365,
              column: 61
            },
            end: {
              line: 365,
              column: 62
            }
          },
          loc: {
            start: {
              line: 365,
              column: 78
            },
            end: {
              line: 380,
              column: 3
            }
          },
          line: 365
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 374,
              column: 22
            },
            end: {
              line: 374,
              column: 23
            }
          },
          loc: {
            start: {
              line: 374,
              column: 34
            },
            end: {
              line: 379,
              column: 5
            }
          },
          line: 374
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 390,
              column: 26
            },
            end: {
              line: 390,
              column: 27
            }
          },
          loc: {
            start: {
              line: 390,
              column: 38
            },
            end: {
              line: 393,
              column: 3
            }
          },
          line: 390
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 82,
              column: 8
            },
            end: {
              line: 85,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 82,
              column: 8
            },
            end: {
              line: 85,
              column: 9
            }
          }, {
            start: {
              line: 82,
              column: 8
            },
            end: {
              line: 85,
              column: 9
            }
          }],
          line: 82
        },
        "1": {
          loc: {
            start: {
              line: 82,
              column: 12
            },
            end: {
              line: 82,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 82,
              column: 12
            },
            end: {
              line: 82,
              column: 29
            }
          }, {
            start: {
              line: 82,
              column: 33
            },
            end: {
              line: 82,
              column: 57
            }
          }],
          line: 82
        },
        "2": {
          loc: {
            start: {
              line: 88,
              column: 21
            },
            end: {
              line: 88,
              column: 67
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 88,
              column: 43
            },
            end: {
              line: 88,
              column: 60
            }
          }, {
            start: {
              line: 88,
              column: 63
            },
            end: {
              line: 88,
              column: 67
            }
          }],
          line: 88
        },
        "3": {
          loc: {
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          }, {
            start: {
              line: 90,
              column: 6
            },
            end: {
              line: 92,
              column: 7
            }
          }],
          line: 90
        },
        "4": {
          loc: {
            start: {
              line: 94,
              column: 6
            },
            end: {
              line: 96,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 94,
              column: 6
            },
            end: {
              line: 96,
              column: 7
            }
          }, {
            start: {
              line: 94,
              column: 6
            },
            end: {
              line: 96,
              column: 7
            }
          }],
          line: 94
        },
        "5": {
          loc: {
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 116,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 116,
              column: 7
            }
          }, {
            start: {
              line: 112,
              column: 6
            },
            end: {
              line: 116,
              column: 7
            }
          }],
          line: 112
        },
        "6": {
          loc: {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 123,
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
              line: 123,
              column: 7
            }
          }, {
            start: {
              line: 120,
              column: 6
            },
            end: {
              line: 123,
              column: 7
            }
          }],
          line: 120
        },
        "7": {
          loc: {
            start: {
              line: 120,
              column: 10
            },
            end: {
              line: 121,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 120,
              column: 10
            },
            end: {
              line: 120,
              column: 31
            }
          }, {
            start: {
              line: 121,
              column: 8
            },
            end: {
              line: 121,
              column: 49
            }
          }],
          line: 120
        },
        "8": {
          loc: {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 135,
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
              line: 135,
              column: 7
            }
          }, {
            start: {
              line: 128,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }],
          line: 128
        },
        "9": {
          loc: {
            start: {
              line: 132,
              column: 8
            },
            end: {
              line: 134,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 132,
              column: 8
            },
            end: {
              line: 134,
              column: 9
            }
          }, {
            start: {
              line: 132,
              column: 8
            },
            end: {
              line: 134,
              column: 9
            }
          }],
          line: 132
        },
        "10": {
          loc: {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 142,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 142,
              column: 7
            }
          }, {
            start: {
              line: 137,
              column: 6
            },
            end: {
              line: 142,
              column: 7
            }
          }],
          line: 137
        },
        "11": {
          loc: {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }, {
            start: {
              line: 139,
              column: 8
            },
            end: {
              line: 141,
              column: 9
            }
          }],
          line: 139
        },
        "12": {
          loc: {
            start: {
              line: 139,
              column: 12
            },
            end: {
              line: 139,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 139,
              column: 12
            },
            end: {
              line: 139,
              column: 23
            }
          }, {
            start: {
              line: 139,
              column: 27
            },
            end: {
              line: 139,
              column: 55
            }
          }],
          line: 139
        },
        "13": {
          loc: {
            start: {
              line: 146,
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
              line: 146,
              column: 6
            },
            end: {
              line: 148,
              column: 7
            }
          }, {
            start: {
              line: 146,
              column: 6
            },
            end: {
              line: 148,
              column: 7
            }
          }],
          line: 146
        },
        "14": {
          loc: {
            start: {
              line: 150,
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
              line: 150,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }, {
            start: {
              line: 150,
              column: 6
            },
            end: {
              line: 155,
              column: 7
            }
          }],
          line: 150
        },
        "15": {
          loc: {
            start: {
              line: 152,
              column: 8
            },
            end: {
              line: 154,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 152,
              column: 8
            },
            end: {
              line: 154,
              column: 9
            }
          }, {
            start: {
              line: 152,
              column: 8
            },
            end: {
              line: 154,
              column: 9
            }
          }],
          line: 152
        },
        "16": {
          loc: {
            start: {
              line: 165,
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
              line: 165,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }, {
            start: {
              line: 165,
              column: 6
            },
            end: {
              line: 169,
              column: 7
            }
          }],
          line: 165
        },
        "17": {
          loc: {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }, {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 201,
              column: 7
            }
          }],
          line: 198
        },
        "18": {
          loc: {
            start: {
              line: 198,
              column: 10
            },
            end: {
              line: 199,
              column: 50
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 198,
              column: 10
            },
            end: {
              line: 198,
              column: 31
            }
          }, {
            start: {
              line: 199,
              column: 8
            },
            end: {
              line: 199,
              column: 50
            }
          }],
          line: 198
        },
        "19": {
          loc: {
            start: {
              line: 205,
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
              line: 205,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }, {
            start: {
              line: 205,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }],
          line: 205
        },
        "20": {
          loc: {
            start: {
              line: 221,
              column: 6
            },
            end: {
              line: 233,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 221,
              column: 6
            },
            end: {
              line: 233,
              column: 7
            }
          }, {
            start: {
              line: 221,
              column: 6
            },
            end: {
              line: 233,
              column: 7
            }
          }],
          line: 221
        },
        "21": {
          loc: {
            start: {
              line: 225,
              column: 10
            },
            end: {
              line: 231,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 225,
              column: 10
            },
            end: {
              line: 231,
              column: 11
            }
          }, {
            start: {
              line: 225,
              column: 10
            },
            end: {
              line: 231,
              column: 11
            }
          }],
          line: 225
        },
        "22": {
          loc: {
            start: {
              line: 227,
              column: 12
            },
            end: {
              line: 230,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 227,
              column: 12
            },
            end: {
              line: 230,
              column: 13
            }
          }, {
            start: {
              line: 227,
              column: 12
            },
            end: {
              line: 230,
              column: 13
            }
          }],
          line: 227
        },
        "23": {
          loc: {
            start: {
              line: 281,
              column: 13
            },
            end: {
              line: 281,
              column: 58
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 281,
              column: 24
            },
            end: {
              line: 281,
              column: 39
            }
          }, {
            start: {
              line: 281,
              column: 42
            },
            end: {
              line: 281,
              column: 58
            }
          }],
          line: 281
        },
        "24": {
          loc: {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 295,
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
              line: 295,
              column: 7
            }
          }, {
            start: {
              line: 286,
              column: 6
            },
            end: {
              line: 295,
              column: 7
            }
          }],
          line: 286
        },
        "25": {
          loc: {
            start: {
              line: 290,
              column: 8
            },
            end: {
              line: 292,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 290,
              column: 8
            },
            end: {
              line: 292,
              column: 9
            }
          }, {
            start: {
              line: 290,
              column: 8
            },
            end: {
              line: 292,
              column: 9
            }
          }],
          line: 290
        },
        "26": {
          loc: {
            start: {
              line: 312,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 312,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          }, {
            start: {
              line: 312,
              column: 6
            },
            end: {
              line: 320,
              column: 7
            }
          }],
          line: 312
        },
        "27": {
          loc: {
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 319,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 319,
              column: 9
            }
          }, {
            start: {
              line: 315,
              column: 8
            },
            end: {
              line: 319,
              column: 9
            }
          }],
          line: 315
        },
        "28": {
          loc: {
            start: {
              line: 327,
              column: 13
            },
            end: {
              line: 327,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 327,
              column: 24
            },
            end: {
              line: 327,
              column: 56
            }
          }, {
            start: {
              line: 327,
              column: 59
            },
            end: {
              line: 327,
              column: 63
            }
          }],
          line: 327
        },
        "29": {
          loc: {
            start: {
              line: 337,
              column: 13
            },
            end: {
              line: 337,
              column: 63
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 337,
              column: 52
            },
            end: {
              line: 337,
              column: 58
            }
          }, {
            start: {
              line: 337,
              column: 61
            },
            end: {
              line: 337,
              column: 63
            }
          }],
          line: 337
        },
        "30": {
          loc: {
            start: {
              line: 337,
              column: 13
            },
            end: {
              line: 337,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 337,
              column: 13
            },
            end: {
              line: 337,
              column: 39
            }
          }, {
            start: {
              line: 337,
              column: 43
            },
            end: {
              line: 337,
              column: 49
            }
          }],
          line: 337
        },
        "31": {
          loc: {
            start: {
              line: 340,
              column: 8
            },
            end: {
              line: 342,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 340,
              column: 8
            },
            end: {
              line: 342,
              column: 9
            }
          }, {
            start: {
              line: 340,
              column: 8
            },
            end: {
              line: 342,
              column: 9
            }
          }],
          line: 340
        },
        "32": {
          loc: {
            start: {
              line: 340,
              column: 12
            },
            end: {
              line: 340,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 340,
              column: 12
            },
            end: {
              line: 340,
              column: 17
            }
          }, {
            start: {
              line: 340,
              column: 21
            },
            end: {
              line: 340,
              column: 35
            }
          }, {
            start: {
              line: 340,
              column: 39
            },
            end: {
              line: 340,
              column: 63
            }
          }],
          line: 340
        },
        "33": {
          loc: {
            start: {
              line: 344,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 344,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          }, {
            start: {
              line: 344,
              column: 8
            },
            end: {
              line: 347,
              column: 9
            }
          }],
          line: 344
        },
        "34": {
          loc: {
            start: {
              line: 349,
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
              line: 349,
              column: 8
            },
            end: {
              line: 354,
              column: 9
            }
          }, {
            start: {
              line: 349,
              column: 8
            },
            end: {
              line: 354,
              column: 9
            }
          }],
          line: 349
        },
        "35": {
          loc: {
            start: {
              line: 350,
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
              line: 350,
              column: 10
            },
            end: {
              line: 352,
              column: 11
            }
          }, {
            start: {
              line: 350,
              column: 10
            },
            end: {
              line: 352,
              column: 11
            }
          }],
          line: 350
        },
        "36": {
          loc: {
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 369,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 369,
              column: 5
            }
          }, {
            start: {
              line: 367,
              column: 4
            },
            end: {
              line: 369,
              column: 5
            }
          }],
          line: 367
        },
        "37": {
          loc: {
            start: {
              line: 377,
              column: 22
            },
            end: {
              line: 377,
              column: 55
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 377,
              column: 29
            },
            end: {
              line: 377,
              column: 37
            }
          }, {
            start: {
              line: 377,
              column: 40
            },
            end: {
              line: 377,
              column: 55
            }
          }],
          line: 377
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
        "156": 0
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
        "32": [0, 0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0],
        "36": [0, 0],
        "37": [0, 0]
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
   * Bootstrap (v4.1.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = (cov_uf9p8qv60.s[0]++, function ($$$1) {
    cov_uf9p8qv60.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_uf9p8qv60.s[1]++, 'collapse');
    var VERSION = (cov_uf9p8qv60.s[2]++, '4.1.3');
    var DATA_KEY = (cov_uf9p8qv60.s[3]++, 'bs.collapse');
    var EVENT_KEY = (cov_uf9p8qv60.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_uf9p8qv60.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_uf9p8qv60.s[6]++, $$$1.fn[NAME]);
    var Default = (cov_uf9p8qv60.s[7]++, {
      toggle: true,
      parent: ''
    });
    var DefaultType = (cov_uf9p8qv60.s[8]++, {
      toggle: 'boolean',
      parent: '(string|element)'
    });
    var Event = (cov_uf9p8qv60.s[9]++, {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_uf9p8qv60.s[10]++, {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    });
    var Dimension = (cov_uf9p8qv60.s[11]++, {
      WIDTH: 'width',
      HEIGHT: 'height'
    });
    var Selector = (cov_uf9p8qv60.s[12]++, {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Collapse =
    /*#__PURE__*/
    function () {
      function Collapse(element, config) {
        cov_uf9p8qv60.f[1]++;
        cov_uf9p8qv60.s[13]++;
        this._isTransitioning = false;
        cov_uf9p8qv60.s[14]++;
        this._element = element;
        cov_uf9p8qv60.s[15]++;
        this._config = this._getConfig(config);
        cov_uf9p8qv60.s[16]++;
        this._triggerArray = $$$1.makeArray(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var toggleList = (cov_uf9p8qv60.s[17]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
        cov_uf9p8qv60.s[18]++;

        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = (cov_uf9p8qv60.s[19]++, toggleList[i]);
          var selector = (cov_uf9p8qv60.s[20]++, Util.getSelectorFromElement(elem));
          var filterElement = (cov_uf9p8qv60.s[21]++, [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
            cov_uf9p8qv60.f[2]++;
            cov_uf9p8qv60.s[22]++;
            return foundElem === element;
          }));
          cov_uf9p8qv60.s[23]++;

          if ((cov_uf9p8qv60.b[1][0]++, selector !== null) && (cov_uf9p8qv60.b[1][1]++, filterElement.length > 0)) {
            cov_uf9p8qv60.b[0][0]++;
            cov_uf9p8qv60.s[24]++;
            this._selector = selector;
            cov_uf9p8qv60.s[25]++;

            this._triggerArray.push(elem);
          } else {
            cov_uf9p8qv60.b[0][1]++;
          }
        }

        cov_uf9p8qv60.s[26]++;
        this._parent = this._config.parent ? (cov_uf9p8qv60.b[2][0]++, this._getParent()) : (cov_uf9p8qv60.b[2][1]++, null);
        cov_uf9p8qv60.s[27]++;

        if (!this._config.parent) {
          cov_uf9p8qv60.b[3][0]++;
          cov_uf9p8qv60.s[28]++;

          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        } else {
          cov_uf9p8qv60.b[3][1]++;
        }

        cov_uf9p8qv60.s[29]++;

        if (this._config.toggle) {
          cov_uf9p8qv60.b[4][0]++;
          cov_uf9p8qv60.s[30]++;
          this.toggle();
        } else {
          cov_uf9p8qv60.b[4][1]++;
        }
      } // Getters


      var _proto = Collapse.prototype;

      // Public
      _proto.toggle = function toggle() {
        cov_uf9p8qv60.f[5]++;
        cov_uf9p8qv60.s[33]++;

        if ($$$1(this._element).hasClass(ClassName.SHOW)) {
          cov_uf9p8qv60.b[5][0]++;
          cov_uf9p8qv60.s[34]++;
          this.hide();
        } else {
          cov_uf9p8qv60.b[5][1]++;
          cov_uf9p8qv60.s[35]++;
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        cov_uf9p8qv60.f[6]++;
        cov_uf9p8qv60.s[36]++;

        if ((cov_uf9p8qv60.b[7][0]++, this._isTransitioning) || (cov_uf9p8qv60.b[7][1]++, $$$1(this._element).hasClass(ClassName.SHOW))) {
          cov_uf9p8qv60.b[6][0]++;
          cov_uf9p8qv60.s[37]++;
          return;
        } else {
          cov_uf9p8qv60.b[6][1]++;
        }

        var actives;
        var activesData;
        cov_uf9p8qv60.s[38]++;

        if (this._parent) {
          cov_uf9p8qv60.b[8][0]++;
          cov_uf9p8qv60.s[39]++;
          actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
            cov_uf9p8qv60.f[7]++;
            cov_uf9p8qv60.s[40]++;
            return elem.getAttribute('data-parent') === _this._config.parent;
          });
          cov_uf9p8qv60.s[41]++;

          if (actives.length === 0) {
            cov_uf9p8qv60.b[9][0]++;
            cov_uf9p8qv60.s[42]++;
            actives = null;
          } else {
            cov_uf9p8qv60.b[9][1]++;
          }
        } else {
          cov_uf9p8qv60.b[8][1]++;
        }

        cov_uf9p8qv60.s[43]++;

        if (actives) {
          cov_uf9p8qv60.b[10][0]++;
          cov_uf9p8qv60.s[44]++;
          activesData = $$$1(actives).not(this._selector).data(DATA_KEY);
          cov_uf9p8qv60.s[45]++;

          if ((cov_uf9p8qv60.b[12][0]++, activesData) && (cov_uf9p8qv60.b[12][1]++, activesData._isTransitioning)) {
            cov_uf9p8qv60.b[11][0]++;
            cov_uf9p8qv60.s[46]++;
            return;
          } else {
            cov_uf9p8qv60.b[11][1]++;
          }
        } else {
          cov_uf9p8qv60.b[10][1]++;
        }

        var startEvent = (cov_uf9p8qv60.s[47]++, $$$1.Event(Event.SHOW));
        cov_uf9p8qv60.s[48]++;
        $$$1(this._element).trigger(startEvent);
        cov_uf9p8qv60.s[49]++;

        if (startEvent.isDefaultPrevented()) {
          cov_uf9p8qv60.b[13][0]++;
          cov_uf9p8qv60.s[50]++;
          return;
        } else {
          cov_uf9p8qv60.b[13][1]++;
        }

        cov_uf9p8qv60.s[51]++;

        if (actives) {
          cov_uf9p8qv60.b[14][0]++;
          cov_uf9p8qv60.s[52]++;

          Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

          cov_uf9p8qv60.s[53]++;

          if (!activesData) {
            cov_uf9p8qv60.b[15][0]++;
            cov_uf9p8qv60.s[54]++;
            $$$1(actives).data(DATA_KEY, null);
          } else {
            cov_uf9p8qv60.b[15][1]++;
          }
        } else {
          cov_uf9p8qv60.b[14][1]++;
        }

        var dimension = (cov_uf9p8qv60.s[55]++, this._getDimension());
        cov_uf9p8qv60.s[56]++;
        $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        cov_uf9p8qv60.s[57]++;
        this._element.style[dimension] = 0;
        cov_uf9p8qv60.s[58]++;

        if (this._triggerArray.length) {
          cov_uf9p8qv60.b[16][0]++;
          cov_uf9p8qv60.s[59]++;
          $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        } else {
          cov_uf9p8qv60.b[16][1]++;
        }

        cov_uf9p8qv60.s[60]++;
        this.setTransitioning(true);
        cov_uf9p8qv60.s[61]++;

        var complete = function complete() {
          cov_uf9p8qv60.f[8]++;
          cov_uf9p8qv60.s[62]++;
          $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          cov_uf9p8qv60.s[63]++;
          _this._element.style[dimension] = '';
          cov_uf9p8qv60.s[64]++;

          _this.setTransitioning(false);

          cov_uf9p8qv60.s[65]++;
          $$$1(_this._element).trigger(Event.SHOWN);
        };

        var capitalizedDimension = (cov_uf9p8qv60.s[66]++, dimension[0].toUpperCase() + dimension.slice(1));
        var scrollSize = (cov_uf9p8qv60.s[67]++, "scroll" + capitalizedDimension);
        var transitionDuration = (cov_uf9p8qv60.s[68]++, Util.getTransitionDurationFromElement(this._element));
        cov_uf9p8qv60.s[69]++;
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        cov_uf9p8qv60.s[70]++;
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        cov_uf9p8qv60.f[9]++;
        cov_uf9p8qv60.s[71]++;

        if ((cov_uf9p8qv60.b[18][0]++, this._isTransitioning) || (cov_uf9p8qv60.b[18][1]++, !$$$1(this._element).hasClass(ClassName.SHOW))) {
          cov_uf9p8qv60.b[17][0]++;
          cov_uf9p8qv60.s[72]++;
          return;
        } else {
          cov_uf9p8qv60.b[17][1]++;
        }

        var startEvent = (cov_uf9p8qv60.s[73]++, $$$1.Event(Event.HIDE));
        cov_uf9p8qv60.s[74]++;
        $$$1(this._element).trigger(startEvent);
        cov_uf9p8qv60.s[75]++;

        if (startEvent.isDefaultPrevented()) {
          cov_uf9p8qv60.b[19][0]++;
          cov_uf9p8qv60.s[76]++;
          return;
        } else {
          cov_uf9p8qv60.b[19][1]++;
        }

        var dimension = (cov_uf9p8qv60.s[77]++, this._getDimension());
        cov_uf9p8qv60.s[78]++;
        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        cov_uf9p8qv60.s[79]++;
        Util.reflow(this._element);
        cov_uf9p8qv60.s[80]++;
        $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
        var triggerArrayLength = (cov_uf9p8qv60.s[81]++, this._triggerArray.length);
        cov_uf9p8qv60.s[82]++;

        if (triggerArrayLength > 0) {
          cov_uf9p8qv60.b[20][0]++;
          cov_uf9p8qv60.s[83]++;

          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = (cov_uf9p8qv60.s[84]++, this._triggerArray[i]);
            var selector = (cov_uf9p8qv60.s[85]++, Util.getSelectorFromElement(trigger));
            cov_uf9p8qv60.s[86]++;

            if (selector !== null) {
              cov_uf9p8qv60.b[21][0]++;
              var $elem = (cov_uf9p8qv60.s[87]++, $$$1([].slice.call(document.querySelectorAll(selector))));
              cov_uf9p8qv60.s[88]++;

              if (!$elem.hasClass(ClassName.SHOW)) {
                cov_uf9p8qv60.b[22][0]++;
                cov_uf9p8qv60.s[89]++;
                $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              } else {
                cov_uf9p8qv60.b[22][1]++;
              }
            } else {
              cov_uf9p8qv60.b[21][1]++;
            }
          }
        } else {
          cov_uf9p8qv60.b[20][1]++;
        }

        cov_uf9p8qv60.s[90]++;
        this.setTransitioning(true);
        cov_uf9p8qv60.s[91]++;

        var complete = function complete() {
          cov_uf9p8qv60.f[10]++;
          cov_uf9p8qv60.s[92]++;

          _this2.setTransitioning(false);

          cov_uf9p8qv60.s[93]++;
          $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        cov_uf9p8qv60.s[94]++;
        this._element.style[dimension] = '';
        var transitionDuration = (cov_uf9p8qv60.s[95]++, Util.getTransitionDurationFromElement(this._element));
        cov_uf9p8qv60.s[96]++;
        $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        cov_uf9p8qv60.f[11]++;
        cov_uf9p8qv60.s[97]++;
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        cov_uf9p8qv60.f[12]++;
        cov_uf9p8qv60.s[98]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_uf9p8qv60.s[99]++;
        this._config = null;
        cov_uf9p8qv60.s[100]++;
        this._parent = null;
        cov_uf9p8qv60.s[101]++;
        this._element = null;
        cov_uf9p8qv60.s[102]++;
        this._triggerArray = null;
        cov_uf9p8qv60.s[103]++;
        this._isTransitioning = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        cov_uf9p8qv60.f[13]++;
        cov_uf9p8qv60.s[104]++;
        config = _objectSpread({}, Default, config);
        cov_uf9p8qv60.s[105]++;
        config.toggle = Boolean(config.toggle); // Coerce string values

        cov_uf9p8qv60.s[106]++;
        Util.typeCheckConfig(NAME, config, DefaultType);
        cov_uf9p8qv60.s[107]++;
        return config;
      };

      _proto._getDimension = function _getDimension() {
        cov_uf9p8qv60.f[14]++;
        var hasWidth = (cov_uf9p8qv60.s[108]++, $$$1(this._element).hasClass(Dimension.WIDTH));
        cov_uf9p8qv60.s[109]++;
        return hasWidth ? (cov_uf9p8qv60.b[23][0]++, Dimension.WIDTH) : (cov_uf9p8qv60.b[23][1]++, Dimension.HEIGHT);
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        cov_uf9p8qv60.f[15]++;
        var parent = (cov_uf9p8qv60.s[110]++, null);
        cov_uf9p8qv60.s[111]++;

        if (Util.isElement(this._config.parent)) {
          cov_uf9p8qv60.b[24][0]++;
          cov_uf9p8qv60.s[112]++;
          parent = this._config.parent; // It's a jQuery object

          cov_uf9p8qv60.s[113]++;

          if (typeof this._config.parent.jquery !== 'undefined') {
            cov_uf9p8qv60.b[25][0]++;
            cov_uf9p8qv60.s[114]++;
            parent = this._config.parent[0];
          } else {
            cov_uf9p8qv60.b[25][1]++;
          }
        } else {
          cov_uf9p8qv60.b[24][1]++;
          cov_uf9p8qv60.s[115]++;
          parent = document.querySelector(this._config.parent);
        }

        var selector = (cov_uf9p8qv60.s[116]++, "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]");
        var children = (cov_uf9p8qv60.s[117]++, [].slice.call(parent.querySelectorAll(selector)));
        cov_uf9p8qv60.s[118]++;
        $$$1(children).each(function (i, element) {
          cov_uf9p8qv60.f[16]++;
          cov_uf9p8qv60.s[119]++;

          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        cov_uf9p8qv60.s[120]++;
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        cov_uf9p8qv60.f[17]++;
        cov_uf9p8qv60.s[121]++;

        if (element) {
          cov_uf9p8qv60.b[26][0]++;
          var isOpen = (cov_uf9p8qv60.s[122]++, $$$1(element).hasClass(ClassName.SHOW));
          cov_uf9p8qv60.s[123]++;

          if (triggerArray.length) {
            cov_uf9p8qv60.b[27][0]++;
            cov_uf9p8qv60.s[124]++;
            $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          } else {
            cov_uf9p8qv60.b[27][1]++;
          }
        } else {
          cov_uf9p8qv60.b[26][1]++;
        }
      }; // Static


      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        cov_uf9p8qv60.f[18]++;
        var selector = (cov_uf9p8qv60.s[125]++, Util.getSelectorFromElement(element));
        cov_uf9p8qv60.s[126]++;
        return selector ? (cov_uf9p8qv60.b[28][0]++, document.querySelector(selector)) : (cov_uf9p8qv60.b[28][1]++, null);
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        cov_uf9p8qv60.f[19]++;
        cov_uf9p8qv60.s[127]++;
        return this.each(function () {
          cov_uf9p8qv60.f[20]++;
          var $this = (cov_uf9p8qv60.s[128]++, $$$1(this));
          var data = (cov_uf9p8qv60.s[129]++, $this.data(DATA_KEY));

          var _config = (cov_uf9p8qv60.s[130]++, _objectSpread({}, Default, $this.data(), (cov_uf9p8qv60.b[30][0]++, typeof config === 'object') && (cov_uf9p8qv60.b[30][1]++, config) ? (cov_uf9p8qv60.b[29][0]++, config) : (cov_uf9p8qv60.b[29][1]++, {})));

          cov_uf9p8qv60.s[131]++;

          if ((cov_uf9p8qv60.b[32][0]++, !data) && (cov_uf9p8qv60.b[32][1]++, _config.toggle) && (cov_uf9p8qv60.b[32][2]++, /show|hide/.test(config))) {
            cov_uf9p8qv60.b[31][0]++;
            cov_uf9p8qv60.s[132]++;
            _config.toggle = false;
          } else {
            cov_uf9p8qv60.b[31][1]++;
          }

          cov_uf9p8qv60.s[133]++;

          if (!data) {
            cov_uf9p8qv60.b[33][0]++;
            cov_uf9p8qv60.s[134]++;
            data = new Collapse(this, _config);
            cov_uf9p8qv60.s[135]++;
            $this.data(DATA_KEY, data);
          } else {
            cov_uf9p8qv60.b[33][1]++;
          }

          cov_uf9p8qv60.s[136]++;

          if (typeof config === 'string') {
            cov_uf9p8qv60.b[34][0]++;
            cov_uf9p8qv60.s[137]++;

            if (typeof data[config] === 'undefined') {
              cov_uf9p8qv60.b[35][0]++;
              cov_uf9p8qv60.s[138]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_uf9p8qv60.b[35][1]++;
            }

            cov_uf9p8qv60.s[139]++;
            data[config]();
          } else {
            cov_uf9p8qv60.b[34][1]++;
          }
        });
      };

      _createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          cov_uf9p8qv60.f[3]++;
          cov_uf9p8qv60.s[31]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_uf9p8qv60.f[4]++;
          cov_uf9p8qv60.s[32]++;
          return Default;
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_uf9p8qv60.s[140]++;
    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      cov_uf9p8qv60.f[21]++;
      cov_uf9p8qv60.s[141]++;

      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        cov_uf9p8qv60.b[36][0]++;
        cov_uf9p8qv60.s[142]++;
        event.preventDefault();
      } else {
        cov_uf9p8qv60.b[36][1]++;
      }

      var $trigger = (cov_uf9p8qv60.s[143]++, $$$1(this));
      var selector = (cov_uf9p8qv60.s[144]++, Util.getSelectorFromElement(this));
      var selectors = (cov_uf9p8qv60.s[145]++, [].slice.call(document.querySelectorAll(selector)));
      cov_uf9p8qv60.s[146]++;
      $$$1(selectors).each(function () {
        cov_uf9p8qv60.f[22]++;
        var $target = (cov_uf9p8qv60.s[147]++, $$$1(this));
        var data = (cov_uf9p8qv60.s[148]++, $target.data(DATA_KEY));
        var config = (cov_uf9p8qv60.s[149]++, data ? (cov_uf9p8qv60.b[37][0]++, 'toggle') : (cov_uf9p8qv60.b[37][1]++, $trigger.data()));
        cov_uf9p8qv60.s[150]++;

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_uf9p8qv60.s[151]++;
    $$$1.fn[NAME] = Collapse._jQueryInterface;
    cov_uf9p8qv60.s[152]++;
    $$$1.fn[NAME].Constructor = Collapse;
    cov_uf9p8qv60.s[153]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_uf9p8qv60.f[23]++;
      cov_uf9p8qv60.s[154]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_uf9p8qv60.s[155]++;
      return Collapse._jQueryInterface;
    };

    cov_uf9p8qv60.s[156]++;
    return Collapse;
  }($));

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map
