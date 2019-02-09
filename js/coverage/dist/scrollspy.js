(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.ScrollSpy = factory(global.jQuery,global.Util));
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

  var cov_1wskdlskzd = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/scrollspy.js",
        hash = "682fc2a54e3593471f21338867e625bdfb6315ee",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/scrollspy.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 330,
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
            column: 40
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
            column: 43
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
            line: 25,
            column: 18
          },
          end: {
            line: 29,
            column: 3
          }
        },
        "8": {
          start: {
            line: 31,
            column: 22
          },
          end: {
            line: 35,
            column: 3
          }
        },
        "9": {
          start: {
            line: 37,
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
            line: 47,
            column: 3
          }
        },
        "11": {
          start: {
            line: 49,
            column: 19
          },
          end: {
            line: 59,
            column: 3
          }
        },
        "12": {
          start: {
            line: 61,
            column: 23
          },
          end: {
            line: 64,
            column: 3
          }
        },
        "13": {
          start: {
            line: 74,
            column: 6
          },
          end: {
            line: 74,
            column: 35
          }
        },
        "14": {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 73
          }
        },
        "15": {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 76,
            column: 51
          }
        },
        "16": {
          start: {
            line: 77,
            column: 6
          },
          end: {
            line: 79,
            column: 79
          }
        },
        "17": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 30
          }
        },
        "18": {
          start: {
            line: 81,
            column: 6
          },
          end: {
            line: 81,
            column: 30
          }
        },
        "19": {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 32
          }
        },
        "20": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 83,
            column: 29
          }
        },
        "21": {
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 85,
            column: 78
          }
        },
        "22": {
          start: {
            line: 85,
            column: 57
          },
          end: {
            line: 85,
            column: 77
          }
        },
        "23": {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 20
          }
        },
        "24": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 21
          }
        },
        "25": {
          start: {
            line: 94,
            column: 6
          },
          end: {
            line: 94,
            column: 20
          }
        },
        "26": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 20
          }
        },
        "27": {
          start: {
            line: 104,
            column: 25
          },
          end: {
            line: 105,
            column: 53
          }
        },
        "28": {
          start: {
            line: 107,
            column: 27
          },
          end: {
            line: 108,
            column: 42
          }
        },
        "29": {
          start: {
            line: 110,
            column: 25
          },
          end: {
            line: 111,
            column: 34
          }
        },
        "30": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 24
          }
        },
        "31": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 24
          }
        },
        "32": {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 116,
            column: 50
          }
        },
        "33": {
          start: {
            line: 118,
            column: 22
          },
          end: {
            line: 118,
            column: 78
          }
        },
        "34": {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 146,
            column: 10
          }
        },
        "35": {
          start: {
            line: 123,
            column: 33
          },
          end: {
            line: 123,
            column: 69
          }
        },
        "36": {
          start: {
            line: 125,
            column: 10
          },
          end: {
            line: 127,
            column: 11
          }
        },
        "37": {
          start: {
            line: 126,
            column: 12
          },
          end: {
            line: 126,
            column: 59
          }
        },
        "38": {
          start: {
            line: 129,
            column: 10
          },
          end: {
            line: 138,
            column: 11
          }
        },
        "39": {
          start: {
            line: 130,
            column: 30
          },
          end: {
            line: 130,
            column: 60
          }
        },
        "40": {
          start: {
            line: 131,
            column: 12
          },
          end: {
            line: 137,
            column: 13
          }
        },
        "41": {
          start: {
            line: 133,
            column: 14
          },
          end: {
            line: 136,
            column: 15
          }
        },
        "42": {
          start: {
            line: 139,
            column: 10
          },
          end: {
            line: 139,
            column: 21
          }
        },
        "43": {
          start: {
            line: 141,
            column: 26
          },
          end: {
            line: 141,
            column: 30
          }
        },
        "44": {
          start: {
            line: 142,
            column: 24
          },
          end: {
            line: 142,
            column: 35
          }
        },
        "45": {
          start: {
            line: 144,
            column: 10
          },
          end: {
            line: 144,
            column: 37
          }
        },
        "46": {
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 145,
            column: 37
          }
        },
        "47": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 150,
            column: 43
          }
        },
        "48": {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 151,
            column: 43
          }
        },
        "49": {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 32
          }
        },
        "50": {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 154,
            column: 32
          }
        },
        "51": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 155,
            column: 32
          }
        },
        "52": {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 156,
            column: 32
          }
        },
        "53": {
          start: {
            line: 157,
            column: 6
          },
          end: {
            line: 157,
            column: 32
          }
        },
        "54": {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 158,
            column: 32
          }
        },
        "55": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 32
          }
        },
        "56": {
          start: {
            line: 160,
            column: 6
          },
          end: {
            line: 160,
            column: 32
          }
        },
        "57": {
          start: {
            line: 166,
            column: 6
          },
          end: {
            line: 169,
            column: 7
          }
        },
        "58": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "59": {
          start: {
            line: 172,
            column: 17
          },
          end: {
            line: 172,
            column: 44
          }
        },
        "60": {
          start: {
            line: 173,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        },
        "61": {
          start: {
            line: 174,
            column: 10
          },
          end: {
            line: 174,
            column: 32
          }
        },
        "62": {
          start: {
            line: 175,
            column: 10
          },
          end: {
            line: 175,
            column: 41
          }
        },
        "63": {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 177,
            column: 32
          }
        },
        "64": {
          start: {
            line: 180,
            column: 6
          },
          end: {
            line: 180,
            column: 53
          }
        },
        "65": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 19
          }
        },
        "66": {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 187,
            column: 73
          }
        },
        "67": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 194,
            column: 7
          }
        },
        "68": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 199,
            column: 81
          }
        },
        "69": {
          start: {
            line: 203,
            column: 27
          },
          end: {
            line: 203,
            column: 69
          }
        },
        "70": {
          start: {
            line: 204,
            column: 27
          },
          end: {
            line: 204,
            column: 50
          }
        },
        "71": {
          start: {
            line: 205,
            column: 27
          },
          end: {
            line: 207,
            column: 31
          }
        },
        "72": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 211,
            column: 7
          }
        },
        "73": {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 210,
            column: 22
          }
        },
        "74": {
          start: {
            line: 213,
            column: 6
          },
          end: {
            line: 220,
            column: 7
          }
        },
        "75": {
          start: {
            line: 214,
            column: 23
          },
          end: {
            line: 214,
            column: 62
          }
        },
        "76": {
          start: {
            line: 216,
            column: 8
          },
          end: {
            line: 218,
            column: 9
          }
        },
        "77": {
          start: {
            line: 217,
            column: 10
          },
          end: {
            line: 217,
            column: 32
          }
        },
        "78": {
          start: {
            line: 219,
            column: 8
          },
          end: {
            line: 219,
            column: 14
          }
        },
        "79": {
          start: {
            line: 222,
            column: 6
          },
          end: {
            line: 226,
            column: 7
          }
        },
        "80": {
          start: {
            line: 223,
            column: 8
          },
          end: {
            line: 223,
            column: 33
          }
        },
        "81": {
          start: {
            line: 224,
            column: 8
          },
          end: {
            line: 224,
            column: 21
          }
        },
        "82": {
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 225,
            column: 14
          }
        },
        "83": {
          start: {
            line: 228,
            column: 27
          },
          end: {
            line: 228,
            column: 47
          }
        },
        "84": {
          start: {
            line: 229,
            column: 6
          },
          end: {
            line: 238,
            column: 7
          }
        },
        "85": {
          start: {
            line: 230,
            column: 31
          },
          end: {
            line: 233,
            column: 49
          }
        },
        "86": {
          start: {
            line: 235,
            column: 8
          },
          end: {
            line: 237,
            column: 9
          }
        },
        "87": {
          start: {
            line: 236,
            column: 10
          },
          end: {
            line: 236,
            column: 42
          }
        },
        "88": {
          start: {
            line: 242,
            column: 6
          },
          end: {
            line: 242,
            column: 33
          }
        },
        "89": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 244,
            column: 19
          }
        },
        "90": {
          start: {
            line: 246,
            column: 20
          },
          end: {
            line: 246,
            column: 45
          }
        },
        "91": {
          start: {
            line: 248,
            column: 6
          },
          end: {
            line: 251,
            column: 8
          }
        },
        "92": {
          start: {
            line: 249,
            column: 8
          },
          end: {
            line: 250,
            column: 46
          }
        },
        "93": {
          start: {
            line: 253,
            column: 20
          },
          end: {
            line: 253,
            column: 82
          }
        },
        "94": {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 266,
            column: 7
          }
        },
        "95": {
          start: {
            line: 256,
            column: 8
          },
          end: {
            line: 256,
            column: 98
          }
        },
        "96": {
          start: {
            line: 257,
            column: 8
          },
          end: {
            line: 257,
            column: 40
          }
        },
        "97": {
          start: {
            line: 260,
            column: 8
          },
          end: {
            line: 260,
            column: 40
          }
        },
        "98": {
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 263,
            column: 127
          }
        },
        "99": {
          start: {
            line: 265,
            column: 8
          },
          end: {
            line: 265,
            column: 127
          }
        },
        "100": {
          start: {
            line: 268,
            column: 6
          },
          end: {
            line: 270,
            column: 8
          }
        },
        "101": {
          start: {
            line: 274,
            column: 20
          },
          end: {
            line: 274,
            column: 76
          }
        },
        "102": {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 68
          }
        },
        "103": {
          start: {
            line: 281,
            column: 6
          },
          end: {
            line: 296,
            column: 8
          }
        },
        "104": {
          start: {
            line: 282,
            column: 19
          },
          end: {
            line: 282,
            column: 41
          }
        },
        "105": {
          start: {
            line: 283,
            column: 24
          },
          end: {
            line: 283,
            column: 60
          }
        },
        "106": {
          start: {
            line: 285,
            column: 8
          },
          end: {
            line: 288,
            column: 9
          }
        },
        "107": {
          start: {
            line: 286,
            column: 10
          },
          end: {
            line: 286,
            column: 45
          }
        },
        "108": {
          start: {
            line: 287,
            column: 10
          },
          end: {
            line: 287,
            column: 38
          }
        },
        "109": {
          start: {
            line: 290,
            column: 8
          },
          end: {
            line: 295,
            column: 9
          }
        },
        "110": {
          start: {
            line: 291,
            column: 10
          },
          end: {
            line: 293,
            column: 11
          }
        },
        "111": {
          start: {
            line: 292,
            column: 12
          },
          end: {
            line: 292,
            column: 62
          }
        },
        "112": {
          start: {
            line: 294,
            column: 10
          },
          end: {
            line: 294,
            column: 24
          }
        },
        "113": {
          start: {
            line: 306,
            column: 2
          },
          end: {
            line: 314,
            column: 4
          }
        },
        "114": {
          start: {
            line: 307,
            column: 23
          },
          end: {
            line: 307,
            column: 82
          }
        },
        "115": {
          start: {
            line: 309,
            column: 29
          },
          end: {
            line: 309,
            column: 46
          }
        },
        "116": {
          start: {
            line: 310,
            column: 4
          },
          end: {
            line: 313,
            column: 5
          }
        },
        "117": {
          start: {
            line: 311,
            column: 19
          },
          end: {
            line: 311,
            column: 35
          }
        },
        "118": {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 312,
            column: 56
          }
        },
        "119": {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 322,
            column: 41
          }
        },
        "120": {
          start: {
            line: 323,
            column: 2
          },
          end: {
            line: 323,
            column: 36
          }
        },
        "121": {
          start: {
            line: 324,
            column: 2
          },
          end: {
            line: 327,
            column: 3
          }
        },
        "122": {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 325,
            column: 35
          }
        },
        "123": {
          start: {
            line: 326,
            column: 4
          },
          end: {
            line: 326,
            column: 37
          }
        },
        "124": {
          start: {
            line: 329,
            column: 2
          },
          end: {
            line: 329,
            column: 18
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 19
            },
            end: {
              line: 11,
              column: 20
            }
          },
          loc: {
            start: {
              line: 11,
              column: 26
            },
            end: {
              line: 330,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 73,
              column: 4
            },
            end: {
              line: 73,
              column: 5
            }
          },
          loc: {
            start: {
              line: 73,
              column: 33
            },
            end: {
              line: 89,
              column: 5
            }
          },
          line: 73
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 85,
              column: 46
            },
            end: {
              line: 85,
              column: 47
            }
          },
          loc: {
            start: {
              line: 85,
              column: 57
            },
            end: {
              line: 85,
              column: 77
            }
          },
          line: 85
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 93,
              column: 4
            },
            end: {
              line: 93,
              column: 5
            }
          },
          loc: {
            start: {
              line: 93,
              column: 25
            },
            end: {
              line: 95,
              column: 5
            }
          },
          line: 93
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          },
          loc: {
            start: {
              line: 97,
              column: 25
            },
            end: {
              line: 99,
              column: 5
            }
          },
          line: 97
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 103,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          },
          loc: {
            start: {
              line: 103,
              column: 14
            },
            end: {
              line: 147,
              column: 5
            }
          },
          line: 103
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 121,
              column: 13
            },
            end: {
              line: 121,
              column: 14
            }
          },
          loc: {
            start: {
              line: 121,
              column: 26
            },
            end: {
              line: 140,
              column: 9
            }
          },
          line: 121
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 141,
              column: 16
            },
            end: {
              line: 141,
              column: 17
            }
          },
          loc: {
            start: {
              line: 141,
              column: 26
            },
            end: {
              line: 141,
              column: 30
            }
          },
          line: 141
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 142,
              column: 14
            },
            end: {
              line: 142,
              column: 15
            }
          },
          loc: {
            start: {
              line: 142,
              column: 24
            },
            end: {
              line: 142,
              column: 35
            }
          },
          line: 142
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 143,
              column: 17
            },
            end: {
              line: 143,
              column: 18
            }
          },
          loc: {
            start: {
              line: 143,
              column: 27
            },
            end: {
              line: 146,
              column: 9
            }
          },
          line: 143
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 149,
              column: 4
            },
            end: {
              line: 149,
              column: 5
            }
          },
          loc: {
            start: {
              line: 149,
              column: 14
            },
            end: {
              line: 161,
              column: 5
            }
          },
          line: 149
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 165,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          },
          loc: {
            start: {
              line: 165,
              column: 23
            },
            end: {
              line: 183,
              column: 5
            }
          },
          line: 165
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 185,
              column: 4
            },
            end: {
              line: 185,
              column: 5
            }
          },
          loc: {
            start: {
              line: 185,
              column: 20
            },
            end: {
              line: 188,
              column: 5
            }
          },
          line: 185
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 190,
              column: 4
            },
            end: {
              line: 190,
              column: 5
            }
          },
          loc: {
            start: {
              line: 190,
              column: 23
            },
            end: {
              line: 195,
              column: 5
            }
          },
          line: 190
        },
        "14": {
          name: "(anonymous_14)",
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
              column: 23
            },
            end: {
              line: 200,
              column: 5
            }
          },
          line: 197
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 202,
              column: 4
            },
            end: {
              line: 202,
              column: 5
            }
          },
          loc: {
            start: {
              line: 202,
              column: 15
            },
            end: {
              line: 239,
              column: 5
            }
          },
          line: 202
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 241,
              column: 4
            },
            end: {
              line: 241,
              column: 5
            }
          },
          loc: {
            start: {
              line: 241,
              column: 22
            },
            end: {
              line: 271,
              column: 5
            }
          },
          line: 241
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 248,
              column: 28
            },
            end: {
              line: 248,
              column: 29
            }
          },
          loc: {
            start: {
              line: 248,
              column: 42
            },
            end: {
              line: 251,
              column: 7
            }
          },
          line: 248
        },
        "18": {
          name: "(anonymous_18)",
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
              column: 13
            },
            end: {
              line: 276,
              column: 5
            }
          },
          line: 273
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 280,
              column: 4
            },
            end: {
              line: 280,
              column: 5
            }
          },
          loc: {
            start: {
              line: 280,
              column: 36
            },
            end: {
              line: 297,
              column: 5
            }
          },
          line: 280
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 281,
              column: 23
            },
            end: {
              line: 281,
              column: 24
            }
          },
          loc: {
            start: {
              line: 281,
              column: 35
            },
            end: {
              line: 296,
              column: 7
            }
          },
          line: 281
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 306,
              column: 36
            },
            end: {
              line: 306,
              column: 37
            }
          },
          loc: {
            start: {
              line: 306,
              column: 42
            },
            end: {
              line: 314,
              column: 3
            }
          },
          line: 306
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 324,
              column: 26
            },
            end: {
              line: 324,
              column: 27
            }
          },
          loc: {
            start: {
              line: 324,
              column: 38
            },
            end: {
              line: 327,
              column: 3
            }
          },
          line: 324
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 75,
              column: 28
            },
            end: {
              line: 75,
              column: 73
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 75,
              column: 57
            },
            end: {
              line: 75,
              column: 63
            }
          }, {
            start: {
              line: 75,
              column: 66
            },
            end: {
              line: 75,
              column: 73
            }
          }],
          line: 75
        },
        "1": {
          loc: {
            start: {
              line: 104,
              column: 25
            },
            end: {
              line: 105,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 105,
              column: 10
            },
            end: {
              line: 105,
              column: 29
            }
          }, {
            start: {
              line: 105,
              column: 32
            },
            end: {
              line: 105,
              column: 53
            }
          }],
          line: 104
        },
        "2": {
          loc: {
            start: {
              line: 107,
              column: 27
            },
            end: {
              line: 108,
              column: 42
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 108,
              column: 10
            },
            end: {
              line: 108,
              column: 20
            }
          }, {
            start: {
              line: 108,
              column: 23
            },
            end: {
              line: 108,
              column: 42
            }
          }],
          line: 107
        },
        "3": {
          loc: {
            start: {
              line: 110,
              column: 25
            },
            end: {
              line: 111,
              column: 34
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 111,
              column: 10
            },
            end: {
              line: 111,
              column: 30
            }
          }, {
            start: {
              line: 111,
              column: 33
            },
            end: {
              line: 111,
              column: 34
            }
          }],
          line: 110
        },
        "4": {
          loc: {
            start: {
              line: 125,
              column: 10
            },
            end: {
              line: 127,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 125,
              column: 10
            },
            end: {
              line: 127,
              column: 11
            }
          }, {
            start: {
              line: 125,
              column: 10
            },
            end: {
              line: 127,
              column: 11
            }
          }],
          line: 125
        },
        "5": {
          loc: {
            start: {
              line: 129,
              column: 10
            },
            end: {
              line: 138,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 129,
              column: 10
            },
            end: {
              line: 138,
              column: 11
            }
          }, {
            start: {
              line: 129,
              column: 10
            },
            end: {
              line: 138,
              column: 11
            }
          }],
          line: 129
        },
        "6": {
          loc: {
            start: {
              line: 131,
              column: 12
            },
            end: {
              line: 137,
              column: 13
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 12
            },
            end: {
              line: 137,
              column: 13
            }
          }, {
            start: {
              line: 131,
              column: 12
            },
            end: {
              line: 137,
              column: 13
            }
          }],
          line: 131
        },
        "7": {
          loc: {
            start: {
              line: 131,
              column: 16
            },
            end: {
              line: 131,
              column: 51
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 131,
              column: 16
            },
            end: {
              line: 131,
              column: 31
            }
          }, {
            start: {
              line: 131,
              column: 35
            },
            end: {
              line: 131,
              column: 51
            }
          }],
          line: 131
        },
        "8": {
          loc: {
            start: {
              line: 168,
              column: 11
            },
            end: {
              line: 168,
              column: 61
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 168,
              column: 50
            },
            end: {
              line: 168,
              column: 56
            }
          }, {
            start: {
              line: 168,
              column: 59
            },
            end: {
              line: 168,
              column: 61
            }
          }],
          line: 168
        },
        "9": {
          loc: {
            start: {
              line: 168,
              column: 11
            },
            end: {
              line: 168,
              column: 47
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 168,
              column: 11
            },
            end: {
              line: 168,
              column: 37
            }
          }, {
            start: {
              line: 168,
              column: 41
            },
            end: {
              line: 168,
              column: 47
            }
          }],
          line: 168
        },
        "10": {
          loc: {
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 171,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 171
        },
        "11": {
          loc: {
            start: {
              line: 173,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 173,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          }, {
            start: {
              line: 173,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          }],
          line: 173
        },
        "12": {
          loc: {
            start: {
              line: 186,
              column: 13
            },
            end: {
              line: 187,
              column: 73
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 187,
              column: 10
            },
            end: {
              line: 187,
              column: 41
            }
          }, {
            start: {
              line: 187,
              column: 44
            },
            end: {
              line: 187,
              column: 73
            }
          }],
          line: 186
        },
        "13": {
          loc: {
            start: {
              line: 191,
              column: 13
            },
            end: {
              line: 194,
              column: 7
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 191,
              column: 13
            },
            end: {
              line: 191,
              column: 45
            }
          }, {
            start: {
              line: 191,
              column: 49
            },
            end: {
              line: 194,
              column: 7
            }
          }],
          line: 191
        },
        "14": {
          loc: {
            start: {
              line: 198,
              column: 13
            },
            end: {
              line: 199,
              column: 81
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 199,
              column: 10
            },
            end: {
              line: 199,
              column: 28
            }
          }, {
            start: {
              line: 199,
              column: 31
            },
            end: {
              line: 199,
              column: 81
            }
          }],
          line: 198
        },
        "15": {
          loc: {
            start: {
              line: 209,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 209,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          }, {
            start: {
              line: 209,
              column: 6
            },
            end: {
              line: 211,
              column: 7
            }
          }],
          line: 209
        },
        "16": {
          loc: {
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          }, {
            start: {
              line: 213,
              column: 6
            },
            end: {
              line: 220,
              column: 7
            }
          }],
          line: 213
        },
        "17": {
          loc: {
            start: {
              line: 216,
              column: 8
            },
            end: {
              line: 218,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 216,
              column: 8
            },
            end: {
              line: 218,
              column: 9
            }
          }, {
            start: {
              line: 216,
              column: 8
            },
            end: {
              line: 218,
              column: 9
            }
          }],
          line: 216
        },
        "18": {
          loc: {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          }, {
            start: {
              line: 222,
              column: 6
            },
            end: {
              line: 226,
              column: 7
            }
          }],
          line: 222
        },
        "19": {
          loc: {
            start: {
              line: 222,
              column: 10
            },
            end: {
              line: 222,
              column: 84
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 222,
              column: 10
            },
            end: {
              line: 222,
              column: 28
            }
          }, {
            start: {
              line: 222,
              column: 32
            },
            end: {
              line: 222,
              column: 60
            }
          }, {
            start: {
              line: 222,
              column: 64
            },
            end: {
              line: 222,
              column: 84
            }
          }],
          line: 222
        },
        "20": {
          loc: {
            start: {
              line: 230,
              column: 31
            },
            end: {
              line: 233,
              column: 49
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 230,
              column: 31
            },
            end: {
              line: 230,
              column: 70
            }
          }, {
            start: {
              line: 231,
              column: 12
            },
            end: {
              line: 231,
              column: 41
            }
          }, {
            start: {
              line: 232,
              column: 13
            },
            end: {
              line: 232,
              column: 56
            }
          }, {
            start: {
              line: 233,
              column: 16
            },
            end: {
              line: 233,
              column: 48
            }
          }],
          line: 230
        },
        "21": {
          loc: {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          }, {
            start: {
              line: 235,
              column: 8
            },
            end: {
              line: 237,
              column: 9
            }
          }],
          line: 235
        },
        "22": {
          loc: {
            start: {
              line: 255,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 255,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          }, {
            start: {
              line: 255,
              column: 6
            },
            end: {
              line: 266,
              column: 7
            }
          }],
          line: 255
        },
        "23": {
          loc: {
            start: {
              line: 283,
              column: 24
            },
            end: {
              line: 283,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 283,
              column: 24
            },
            end: {
              line: 283,
              column: 50
            }
          }, {
            start: {
              line: 283,
              column: 54
            },
            end: {
              line: 283,
              column: 60
            }
          }],
          line: 283
        },
        "24": {
          loc: {
            start: {
              line: 285,
              column: 8
            },
            end: {
              line: 288,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 285,
              column: 8
            },
            end: {
              line: 288,
              column: 9
            }
          }, {
            start: {
              line: 285,
              column: 8
            },
            end: {
              line: 288,
              column: 9
            }
          }],
          line: 285
        },
        "25": {
          loc: {
            start: {
              line: 290,
              column: 8
            },
            end: {
              line: 295,
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
              line: 295,
              column: 9
            }
          }, {
            start: {
              line: 290,
              column: 8
            },
            end: {
              line: 295,
              column: 9
            }
          }],
          line: 290
        },
        "26": {
          loc: {
            start: {
              line: 291,
              column: 10
            },
            end: {
              line: 293,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 291,
              column: 10
            },
            end: {
              line: 293,
              column: 11
            }
          }, {
            start: {
              line: 291,
              column: 10
            },
            end: {
              line: 293,
              column: 11
            }
          }],
          line: 291
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
        "124": 0
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
        "22": 0
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
        "19": [0, 0, 0],
        "20": [0, 0, 0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0]
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
   * Bootstrap (v4.1.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = (cov_1wskdlskzd.s[0]++, function ($$$1) {
    cov_1wskdlskzd.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_1wskdlskzd.s[1]++, 'scrollspy');
    var VERSION = (cov_1wskdlskzd.s[2]++, '4.1.3');
    var DATA_KEY = (cov_1wskdlskzd.s[3]++, 'bs.scrollspy');
    var EVENT_KEY = (cov_1wskdlskzd.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_1wskdlskzd.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_1wskdlskzd.s[6]++, $$$1.fn[NAME]);
    var Default = (cov_1wskdlskzd.s[7]++, {
      offset: 10,
      method: 'auto',
      target: ''
    });
    var DefaultType = (cov_1wskdlskzd.s[8]++, {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    });
    var Event = (cov_1wskdlskzd.s[9]++, {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_1wskdlskzd.s[10]++, {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    });
    var Selector = (cov_1wskdlskzd.s[11]++, {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    });
    var OffsetMethod = (cov_1wskdlskzd.s[12]++, {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var ScrollSpy =
    /*#__PURE__*/
    function () {
      function ScrollSpy(element, config) {
        var _this = this;

        cov_1wskdlskzd.f[1]++;
        cov_1wskdlskzd.s[13]++;
        this._element = element;
        cov_1wskdlskzd.s[14]++;
        this._scrollElement = element.tagName === 'BODY' ? (cov_1wskdlskzd.b[0][0]++, window) : (cov_1wskdlskzd.b[0][1]++, element);
        cov_1wskdlskzd.s[15]++;
        this._config = this._getConfig(config);
        cov_1wskdlskzd.s[16]++;
        this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
        cov_1wskdlskzd.s[17]++;
        this._offsets = [];
        cov_1wskdlskzd.s[18]++;
        this._targets = [];
        cov_1wskdlskzd.s[19]++;
        this._activeTarget = null;
        cov_1wskdlskzd.s[20]++;
        this._scrollHeight = 0;
        cov_1wskdlskzd.s[21]++;
        $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
          cov_1wskdlskzd.f[2]++;
          cov_1wskdlskzd.s[22]++;
          return _this._process(event);
        });
        cov_1wskdlskzd.s[23]++;
        this.refresh();
        cov_1wskdlskzd.s[24]++;

        this._process();
      } // Getters


      var _proto = ScrollSpy.prototype;

      // Public
      _proto.refresh = function refresh() {
        var _this2 = this;

        cov_1wskdlskzd.f[5]++;
        var autoMethod = (cov_1wskdlskzd.s[27]++, this._scrollElement === this._scrollElement.window ? (cov_1wskdlskzd.b[1][0]++, OffsetMethod.OFFSET) : (cov_1wskdlskzd.b[1][1]++, OffsetMethod.POSITION));
        var offsetMethod = (cov_1wskdlskzd.s[28]++, this._config.method === 'auto' ? (cov_1wskdlskzd.b[2][0]++, autoMethod) : (cov_1wskdlskzd.b[2][1]++, this._config.method));
        var offsetBase = (cov_1wskdlskzd.s[29]++, offsetMethod === OffsetMethod.POSITION ? (cov_1wskdlskzd.b[3][0]++, this._getScrollTop()) : (cov_1wskdlskzd.b[3][1]++, 0));
        cov_1wskdlskzd.s[30]++;
        this._offsets = [];
        cov_1wskdlskzd.s[31]++;
        this._targets = [];
        cov_1wskdlskzd.s[32]++;
        this._scrollHeight = this._getScrollHeight();
        var targets = (cov_1wskdlskzd.s[33]++, [].slice.call(document.querySelectorAll(this._selector)));
        cov_1wskdlskzd.s[34]++;
        targets.map(function (element) {
          cov_1wskdlskzd.f[6]++;
          var target;
          var targetSelector = (cov_1wskdlskzd.s[35]++, Util.getSelectorFromElement(element));
          cov_1wskdlskzd.s[36]++;

          if (targetSelector) {
            cov_1wskdlskzd.b[4][0]++;
            cov_1wskdlskzd.s[37]++;
            target = document.querySelector(targetSelector);
          } else {
            cov_1wskdlskzd.b[4][1]++;
          }

          cov_1wskdlskzd.s[38]++;

          if (target) {
            cov_1wskdlskzd.b[5][0]++;
            var targetBCR = (cov_1wskdlskzd.s[39]++, target.getBoundingClientRect());
            cov_1wskdlskzd.s[40]++;

            if ((cov_1wskdlskzd.b[7][0]++, targetBCR.width) || (cov_1wskdlskzd.b[7][1]++, targetBCR.height)) {
              cov_1wskdlskzd.b[6][0]++;
              cov_1wskdlskzd.s[41]++;
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
            } else {
              cov_1wskdlskzd.b[6][1]++;
            }
          } else {
            cov_1wskdlskzd.b[5][1]++;
          }

          cov_1wskdlskzd.s[42]++;
          return null;
        }).filter(function (item) {
          cov_1wskdlskzd.f[7]++;
          cov_1wskdlskzd.s[43]++;
          return item;
        }).sort(function (a, b) {
          cov_1wskdlskzd.f[8]++;
          cov_1wskdlskzd.s[44]++;
          return a[0] - b[0];
        }).forEach(function (item) {
          cov_1wskdlskzd.f[9]++;
          cov_1wskdlskzd.s[45]++;

          _this2._offsets.push(item[0]);

          cov_1wskdlskzd.s[46]++;

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        cov_1wskdlskzd.f[10]++;
        cov_1wskdlskzd.s[47]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_1wskdlskzd.s[48]++;
        $$$1(this._scrollElement).off(EVENT_KEY);
        cov_1wskdlskzd.s[49]++;
        this._element = null;
        cov_1wskdlskzd.s[50]++;
        this._scrollElement = null;
        cov_1wskdlskzd.s[51]++;
        this._config = null;
        cov_1wskdlskzd.s[52]++;
        this._selector = null;
        cov_1wskdlskzd.s[53]++;
        this._offsets = null;
        cov_1wskdlskzd.s[54]++;
        this._targets = null;
        cov_1wskdlskzd.s[55]++;
        this._activeTarget = null;
        cov_1wskdlskzd.s[56]++;
        this._scrollHeight = null;
      }; // Private


      _proto._getConfig = function _getConfig(config) {
        cov_1wskdlskzd.f[11]++;
        cov_1wskdlskzd.s[57]++;
        config = _objectSpread({}, Default, (cov_1wskdlskzd.b[9][0]++, typeof config === 'object') && (cov_1wskdlskzd.b[9][1]++, config) ? (cov_1wskdlskzd.b[8][0]++, config) : (cov_1wskdlskzd.b[8][1]++, {}));
        cov_1wskdlskzd.s[58]++;

        if (typeof config.target !== 'string') {
          cov_1wskdlskzd.b[10][0]++;
          var id = (cov_1wskdlskzd.s[59]++, $$$1(config.target).attr('id'));
          cov_1wskdlskzd.s[60]++;

          if (!id) {
            cov_1wskdlskzd.b[11][0]++;
            cov_1wskdlskzd.s[61]++;
            id = Util.getUID(NAME);
            cov_1wskdlskzd.s[62]++;
            $$$1(config.target).attr('id', id);
          } else {
            cov_1wskdlskzd.b[11][1]++;
          }

          cov_1wskdlskzd.s[63]++;
          config.target = "#" + id;
        } else {
          cov_1wskdlskzd.b[10][1]++;
        }

        cov_1wskdlskzd.s[64]++;
        Util.typeCheckConfig(NAME, config, DefaultType);
        cov_1wskdlskzd.s[65]++;
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        cov_1wskdlskzd.f[12]++;
        cov_1wskdlskzd.s[66]++;
        return this._scrollElement === window ? (cov_1wskdlskzd.b[12][0]++, this._scrollElement.pageYOffset) : (cov_1wskdlskzd.b[12][1]++, this._scrollElement.scrollTop);
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        cov_1wskdlskzd.f[13]++;
        cov_1wskdlskzd.s[67]++;
        return (cov_1wskdlskzd.b[13][0]++, this._scrollElement.scrollHeight) || (cov_1wskdlskzd.b[13][1]++, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        cov_1wskdlskzd.f[14]++;
        cov_1wskdlskzd.s[68]++;
        return this._scrollElement === window ? (cov_1wskdlskzd.b[14][0]++, window.innerHeight) : (cov_1wskdlskzd.b[14][1]++, this._scrollElement.getBoundingClientRect().height);
      };

      _proto._process = function _process() {
        cov_1wskdlskzd.f[15]++;
        var scrollTop = (cov_1wskdlskzd.s[69]++, this._getScrollTop() + this._config.offset);
        var scrollHeight = (cov_1wskdlskzd.s[70]++, this._getScrollHeight());
        var maxScroll = (cov_1wskdlskzd.s[71]++, this._config.offset + scrollHeight - this._getOffsetHeight());
        cov_1wskdlskzd.s[72]++;

        if (this._scrollHeight !== scrollHeight) {
          cov_1wskdlskzd.b[15][0]++;
          cov_1wskdlskzd.s[73]++;
          this.refresh();
        } else {
          cov_1wskdlskzd.b[15][1]++;
        }

        cov_1wskdlskzd.s[74]++;

        if (scrollTop >= maxScroll) {
          cov_1wskdlskzd.b[16][0]++;
          var target = (cov_1wskdlskzd.s[75]++, this._targets[this._targets.length - 1]);
          cov_1wskdlskzd.s[76]++;

          if (this._activeTarget !== target) {
            cov_1wskdlskzd.b[17][0]++;
            cov_1wskdlskzd.s[77]++;

            this._activate(target);
          } else {
            cov_1wskdlskzd.b[17][1]++;
          }

          cov_1wskdlskzd.s[78]++;
          return;
        } else {
          cov_1wskdlskzd.b[16][1]++;
        }

        cov_1wskdlskzd.s[79]++;

        if ((cov_1wskdlskzd.b[19][0]++, this._activeTarget) && (cov_1wskdlskzd.b[19][1]++, scrollTop < this._offsets[0]) && (cov_1wskdlskzd.b[19][2]++, this._offsets[0] > 0)) {
          cov_1wskdlskzd.b[18][0]++;
          cov_1wskdlskzd.s[80]++;
          this._activeTarget = null;
          cov_1wskdlskzd.s[81]++;

          this._clear();

          cov_1wskdlskzd.s[82]++;
          return;
        } else {
          cov_1wskdlskzd.b[18][1]++;
        }

        var offsetLength = (cov_1wskdlskzd.s[83]++, this._offsets.length);
        cov_1wskdlskzd.s[84]++;

        for (var i = offsetLength; i--;) {
          var isActiveTarget = (cov_1wskdlskzd.s[85]++, (cov_1wskdlskzd.b[20][0]++, this._activeTarget !== this._targets[i]) && (cov_1wskdlskzd.b[20][1]++, scrollTop >= this._offsets[i]) && ((cov_1wskdlskzd.b[20][2]++, typeof this._offsets[i + 1] === 'undefined') || (cov_1wskdlskzd.b[20][3]++, scrollTop < this._offsets[i + 1])));
          cov_1wskdlskzd.s[86]++;

          if (isActiveTarget) {
            cov_1wskdlskzd.b[21][0]++;
            cov_1wskdlskzd.s[87]++;

            this._activate(this._targets[i]);
          } else {
            cov_1wskdlskzd.b[21][1]++;
          }
        }
      };

      _proto._activate = function _activate(target) {
        cov_1wskdlskzd.f[16]++;
        cov_1wskdlskzd.s[88]++;
        this._activeTarget = target;
        cov_1wskdlskzd.s[89]++;

        this._clear();

        var queries = (cov_1wskdlskzd.s[90]++, this._selector.split(',')); // eslint-disable-next-line arrow-body-style

        cov_1wskdlskzd.s[91]++;
        queries = queries.map(function (selector) {
          cov_1wskdlskzd.f[17]++;
          cov_1wskdlskzd.s[92]++;
          return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
        });
        var $link = (cov_1wskdlskzd.s[93]++, $$$1([].slice.call(document.querySelectorAll(queries.join(',')))));
        cov_1wskdlskzd.s[94]++;

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          cov_1wskdlskzd.b[22][0]++;
          cov_1wskdlskzd.s[95]++;
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          cov_1wskdlskzd.s[96]++;
          $link.addClass(ClassName.ACTIVE);
        } else {
          cov_1wskdlskzd.b[22][1]++;
          cov_1wskdlskzd.s[97]++;
          // Set triggered link as active
          $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          cov_1wskdlskzd.s[98]++;
          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

          cov_1wskdlskzd.s[99]++;
          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        cov_1wskdlskzd.s[100]++;
        $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        cov_1wskdlskzd.f[18]++;
        var nodes = (cov_1wskdlskzd.s[101]++, [].slice.call(document.querySelectorAll(this._selector)));
        cov_1wskdlskzd.s[102]++;
        $$$1(nodes).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }; // Static


      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        cov_1wskdlskzd.f[19]++;
        cov_1wskdlskzd.s[103]++;
        return this.each(function () {
          cov_1wskdlskzd.f[20]++;
          var data = (cov_1wskdlskzd.s[104]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_1wskdlskzd.s[105]++, (cov_1wskdlskzd.b[23][0]++, typeof config === 'object') && (cov_1wskdlskzd.b[23][1]++, config));

          cov_1wskdlskzd.s[106]++;

          if (!data) {
            cov_1wskdlskzd.b[24][0]++;
            cov_1wskdlskzd.s[107]++;
            data = new ScrollSpy(this, _config);
            cov_1wskdlskzd.s[108]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_1wskdlskzd.b[24][1]++;
          }

          cov_1wskdlskzd.s[109]++;

          if (typeof config === 'string') {
            cov_1wskdlskzd.b[25][0]++;
            cov_1wskdlskzd.s[110]++;

            if (typeof data[config] === 'undefined') {
              cov_1wskdlskzd.b[26][0]++;
              cov_1wskdlskzd.s[111]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_1wskdlskzd.b[26][1]++;
            }

            cov_1wskdlskzd.s[112]++;
            data[config]();
          } else {
            cov_1wskdlskzd.b[25][1]++;
          }
        });
      };

      _createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          cov_1wskdlskzd.f[3]++;
          cov_1wskdlskzd.s[25]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_1wskdlskzd.f[4]++;
          cov_1wskdlskzd.s[26]++;
          return Default;
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_1wskdlskzd.s[113]++;
    $$$1(window).on(Event.LOAD_DATA_API, function () {
      cov_1wskdlskzd.f[21]++;
      var scrollSpys = (cov_1wskdlskzd.s[114]++, [].slice.call(document.querySelectorAll(Selector.DATA_SPY)));
      var scrollSpysLength = (cov_1wskdlskzd.s[115]++, scrollSpys.length);
      cov_1wskdlskzd.s[116]++;

      for (var i = scrollSpysLength; i--;) {
        var $spy = (cov_1wskdlskzd.s[117]++, $$$1(scrollSpys[i]));
        cov_1wskdlskzd.s[118]++;

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_1wskdlskzd.s[119]++;
    $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
    cov_1wskdlskzd.s[120]++;
    $$$1.fn[NAME].Constructor = ScrollSpy;
    cov_1wskdlskzd.s[121]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_1wskdlskzd.f[22]++;
      cov_1wskdlskzd.s[122]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1wskdlskzd.s[123]++;
      return ScrollSpy._jQueryInterface;
    };

    cov_1wskdlskzd.s[124]++;
    return ScrollSpy;
  }($));

  return ScrollSpy;

})));
//# sourceMappingURL=scrollspy.js.map
