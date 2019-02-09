/*!
  * Bootstrap toast.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Toast = factory(global.jQuery,global.Util));
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

  var cov_1nedyidj3g = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/toast.js",
        hash = "46d33103db78228fcf9b559adab5146e891f9658",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/toast.js",
      statementMap: {
        "0": {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 34
          }
        },
        "1": {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 34
          }
        },
        "2": {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 19,
            column: 37
          }
        },
        "3": {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 41
          }
        },
        "4": {
          start: {
            line: 21,
            column: 27
          },
          end: {
            line: 21,
            column: 37
          }
        },
        "5": {
          start: {
            line: 23,
            column: 14
          },
          end: {
            line: 29,
            column: 1
          }
        },
        "6": {
          start: {
            line: 31,
            column: 18
          },
          end: {
            line: 36,
            column: 1
          }
        },
        "7": {
          start: {
            line: 38,
            column: 20
          },
          end: {
            line: 42,
            column: 1
          }
        },
        "8": {
          start: {
            line: 44,
            column: 16
          },
          end: {
            line: 48,
            column: 1
          }
        },
        "9": {
          start: {
            line: 50,
            column: 17
          },
          end: {
            line: 52,
            column: 1
          }
        },
        "10": {
          start: {
            line: 62,
            column: 4
          },
          end: {
            line: 62,
            column: 27
          }
        },
        "11": {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 63,
            column: 43
          }
        },
        "12": {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 64,
            column: 24
          }
        },
        "13": {
          start: {
            line: 65,
            column: 4
          },
          end: {
            line: 65,
            column: 24
          }
        },
        "14": {
          start: {
            line: 71,
            column: 4
          },
          end: {
            line: 71,
            column: 18
          }
        },
        "15": {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 75,
            column: 22
          }
        },
        "16": {
          start: {
            line: 81,
            column: 4
          },
          end: {
            line: 81,
            column: 40
          }
        },
        "17": {
          start: {
            line: 83,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        "18": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 49
          }
        },
        "19": {
          start: {
            line: 87,
            column: 21
          },
          end: {
            line: 96,
            column: 5
          }
        },
        "20": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 55
          }
        },
        "21": {
          start: {
            line: 89,
            column: 6
          },
          end: {
            line: 89,
            column: 49
          }
        },
        "22": {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 43
          }
        },
        "23": {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 95,
            column: 7
          }
        },
        "24": {
          start: {
            line: 94,
            column: 8
          },
          end: {
            line: 94,
            column: 19
          }
        },
        "25": {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 50
          }
        },
        "26": {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 99,
            column: 50
          }
        },
        "27": {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        "28": {
          start: {
            line: 101,
            column: 33
          },
          end: {
            line: 101,
            column: 85
          }
        },
        "29": {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 105,
            column: 49
          }
        },
        "30": {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 107,
            column: 16
          }
        },
        "31": {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 114,
            column: 5
          }
        },
        "32": {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 113,
            column: 12
          }
        },
        "33": {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 116,
            column: 40
          }
        },
        "34": {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        "35": {
          start: {
            line: 119,
            column: 6
          },
          end: {
            line: 119,
            column: 19
          }
        },
        "36": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 123,
            column: 28
          }
        },
        "37": {
          start: {
            line: 122,
            column: 8
          },
          end: {
            line: 122,
            column: 21
          }
        },
        "38": {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 128,
            column: 31
          }
        },
        "39": {
          start: {
            line: 129,
            column: 4
          },
          end: {
            line: 129,
            column: 24
          }
        },
        "40": {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 133,
            column: 5
          }
        },
        "41": {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 132,
            column: 52
          }
        },
        "42": {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 45
          }
        },
        "43": {
          start: {
            line: 137,
            column: 4
          },
          end: {
            line: 137,
            column: 41
          }
        },
        "44": {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 138,
            column: 24
          }
        },
        "45": {
          start: {
            line: 139,
            column: 4
          },
          end: {
            line: 139,
            column: 24
          }
        },
        "46": {
          start: {
            line: 145,
            column: 4
          },
          end: {
            line: 149,
            column: 5
          }
        },
        "47": {
          start: {
            line: 151,
            column: 4
          },
          end: {
            line: 155,
            column: 5
          }
        },
        "48": {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 157,
            column: 17
          }
        },
        "49": {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        "50": {
          start: {
            line: 164,
            column: 12
          },
          end: {
            line: 164,
            column: 27
          }
        },
        "51": {
          start: {
            line: 169,
            column: 21
          },
          end: {
            line: 172,
            column: 5
          }
        },
        "52": {
          start: {
            line: 170,
            column: 6
          },
          end: {
            line: 170,
            column: 49
          }
        },
        "53": {
          start: {
            line: 171,
            column: 6
          },
          end: {
            line: 171,
            column: 44
          }
        },
        "54": {
          start: {
            line: 174,
            column: 4
          },
          end: {
            line: 174,
            column: 50
          }
        },
        "55": {
          start: {
            line: 175,
            column: 4
          },
          end: {
            line: 183,
            column: 5
          }
        },
        "56": {
          start: {
            line: 176,
            column: 33
          },
          end: {
            line: 176,
            column: 85
          }
        },
        "57": {
          start: {
            line: 178,
            column: 6
          },
          end: {
            line: 180,
            column: 49
          }
        },
        "58": {
          start: {
            line: 182,
            column: 6
          },
          end: {
            line: 182,
            column: 16
          }
        },
        "59": {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 206,
            column: 6
          }
        },
        "60": {
          start: {
            line: 190,
            column: 23
          },
          end: {
            line: 190,
            column: 30
          }
        },
        "61": {
          start: {
            line: 191,
            column: 23
          },
          end: {
            line: 191,
            column: 46
          }
        },
        "62": {
          start: {
            line: 192,
            column: 23
          },
          end: {
            line: 192,
            column: 59
          }
        },
        "63": {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 197,
            column: 7
          }
        },
        "64": {
          start: {
            line: 195,
            column: 8
          },
          end: {
            line: 195,
            column: 39
          }
        },
        "65": {
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 196,
            column: 37
          }
        },
        "66": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 205,
            column: 7
          }
        },
        "67": {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 202,
            column: 9
          }
        },
        "68": {
          start: {
            line: 201,
            column: 10
          },
          end: {
            line: 201,
            column: 60
          }
        },
        "69": {
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 204,
            column: 26
          }
        },
        "70": {
          start: {
            line: 216,
            column: 0
          },
          end: {
            line: 216,
            column: 47
          }
        },
        "71": {
          start: {
            line: 217,
            column: 0
          },
          end: {
            line: 217,
            column: 30
          }
        },
        "72": {
          start: {
            line: 218,
            column: 0
          },
          end: {
            line: 221,
            column: 1
          }
        },
        "73": {
          start: {
            line: 219,
            column: 2
          },
          end: {
            line: 219,
            column: 33
          }
        },
        "74": {
          start: {
            line: 220,
            column: 2
          },
          end: {
            line: 220,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 61,
              column: 2
            },
            end: {
              line: 61,
              column: 3
            }
          },
          loc: {
            start: {
              line: 61,
              column: 31
            },
            end: {
              line: 66,
              column: 3
            }
          },
          line: 61
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 70,
              column: 2
            },
            end: {
              line: 70,
              column: 3
            }
          },
          loc: {
            start: {
              line: 70,
              column: 23
            },
            end: {
              line: 72,
              column: 3
            }
          },
          line: 70
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 74,
              column: 2
            },
            end: {
              line: 74,
              column: 3
            }
          },
          loc: {
            start: {
              line: 74,
              column: 27
            },
            end: {
              line: 76,
              column: 3
            }
          },
          line: 74
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 80,
              column: 2
            },
            end: {
              line: 80,
              column: 3
            }
          },
          loc: {
            start: {
              line: 80,
              column: 9
            },
            end: {
              line: 109,
              column: 3
            }
          },
          line: 80
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 87,
              column: 21
            },
            end: {
              line: 87,
              column: 22
            }
          },
          loc: {
            start: {
              line: 87,
              column: 27
            },
            end: {
              line: 96,
              column: 5
            }
          },
          line: 87
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 111,
              column: 2
            },
            end: {
              line: 111,
              column: 3
            }
          },
          loc: {
            start: {
              line: 111,
              column: 23
            },
            end: {
              line: 125,
              column: 3
            }
          },
          line: 111
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 121,
              column: 33
            },
            end: {
              line: 121,
              column: 34
            }
          },
          loc: {
            start: {
              line: 121,
              column: 39
            },
            end: {
              line: 123,
              column: 7
            }
          },
          line: 121
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 127,
              column: 2
            },
            end: {
              line: 127,
              column: 3
            }
          },
          loc: {
            start: {
              line: 127,
              column: 12
            },
            end: {
              line: 140,
              column: 3
            }
          },
          line: 127
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 144,
              column: 2
            },
            end: {
              line: 144,
              column: 3
            }
          },
          loc: {
            start: {
              line: 144,
              column: 21
            },
            end: {
              line: 158,
              column: 3
            }
          },
          line: 144
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 160,
              column: 2
            },
            end: {
              line: 160,
              column: 3
            }
          },
          loc: {
            start: {
              line: 160,
              column: 18
            },
            end: {
              line: 166,
              column: 3
            }
          },
          line: 160
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 164,
              column: 6
            },
            end: {
              line: 164,
              column: 7
            }
          },
          loc: {
            start: {
              line: 164,
              column: 12
            },
            end: {
              line: 164,
              column: 27
            }
          },
          line: 164
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 168,
              column: 2
            },
            end: {
              line: 168,
              column: 3
            }
          },
          loc: {
            start: {
              line: 168,
              column: 11
            },
            end: {
              line: 184,
              column: 3
            }
          },
          line: 168
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 169,
              column: 21
            },
            end: {
              line: 169,
              column: 22
            }
          },
          loc: {
            start: {
              line: 169,
              column: 27
            },
            end: {
              line: 172,
              column: 5
            }
          },
          line: 169
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 188,
              column: 2
            },
            end: {
              line: 188,
              column: 3
            }
          },
          loc: {
            start: {
              line: 188,
              column: 34
            },
            end: {
              line: 207,
              column: 3
            }
          },
          line: 188
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 189,
              column: 21
            },
            end: {
              line: 189,
              column: 22
            }
          },
          loc: {
            start: {
              line: 189,
              column: 33
            },
            end: {
              line: 206,
              column: 5
            }
          },
          line: 189
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 218,
              column: 25
            },
            end: {
              line: 218,
              column: 26
            }
          },
          loc: {
            start: {
              line: 218,
              column: 31
            },
            end: {
              line: 221,
              column: 1
            }
          },
          line: 218
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          }, {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 85,
              column: 5
            }
          }],
          line: 83
        },
        "1": {
          loc: {
            start: {
              line: 93,
              column: 6
            },
            end: {
              line: 95,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 93,
              column: 6
            },
            end: {
              line: 95,
              column: 7
            }
          }, {
            start: {
              line: 93,
              column: 6
            },
            end: {
              line: 95,
              column: 7
            }
          }],
          line: 93
        },
        "2": {
          loc: {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          }, {
            start: {
              line: 100,
              column: 4
            },
            end: {
              line: 108,
              column: 5
            }
          }],
          line: 100
        },
        "3": {
          loc: {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }, {
            start: {
              line: 112,
              column: 4
            },
            end: {
              line: 114,
              column: 5
            }
          }],
          line: 112
        },
        "4": {
          loc: {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }, {
            start: {
              line: 118,
              column: 4
            },
            end: {
              line: 124,
              column: 5
            }
          }],
          line: 118
        },
        "5": {
          loc: {
            start: {
              line: 131,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }, {
            start: {
              line: 131,
              column: 4
            },
            end: {
              line: 133,
              column: 5
            }
          }],
          line: 131
        },
        "6": {
          loc: {
            start: {
              line: 148,
              column: 9
            },
            end: {
              line: 148,
              column: 59
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 148,
              column: 48
            },
            end: {
              line: 148,
              column: 54
            }
          }, {
            start: {
              line: 148,
              column: 57
            },
            end: {
              line: 148,
              column: 59
            }
          }],
          line: 148
        },
        "7": {
          loc: {
            start: {
              line: 148,
              column: 9
            },
            end: {
              line: 148,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 148,
              column: 9
            },
            end: {
              line: 148,
              column: 35
            }
          }, {
            start: {
              line: 148,
              column: 39
            },
            end: {
              line: 148,
              column: 45
            }
          }],
          line: 148
        },
        "8": {
          loc: {
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          }, {
            start: {
              line: 175,
              column: 4
            },
            end: {
              line: 183,
              column: 5
            }
          }],
          line: 175
        },
        "9": {
          loc: {
            start: {
              line: 192,
              column: 23
            },
            end: {
              line: 192,
              column: 59
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 192,
              column: 23
            },
            end: {
              line: 192,
              column: 49
            }
          }, {
            start: {
              line: 192,
              column: 53
            },
            end: {
              line: 192,
              column: 59
            }
          }],
          line: 192
        },
        "10": {
          loc: {
            start: {
              line: 194,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 194,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          }, {
            start: {
              line: 194,
              column: 6
            },
            end: {
              line: 197,
              column: 7
            }
          }],
          line: 194
        },
        "11": {
          loc: {
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 205,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 205,
              column: 7
            }
          }, {
            start: {
              line: 199,
              column: 6
            },
            end: {
              line: 205,
              column: 7
            }
          }],
          line: 199
        },
        "12": {
          loc: {
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          }, {
            start: {
              line: 200,
              column: 8
            },
            end: {
              line: 202,
              column: 9
            }
          }],
          line: 200
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
        "74": 0
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
        "15": 0
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
        "12": [0, 0]
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
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = (cov_1nedyidj3g.s[0]++, 'toast');
  var VERSION = (cov_1nedyidj3g.s[1]++, '4.2.1');
  var DATA_KEY = (cov_1nedyidj3g.s[2]++, 'bs.toast');
  var EVENT_KEY = (cov_1nedyidj3g.s[3]++, "." + DATA_KEY);
  var JQUERY_NO_CONFLICT = (cov_1nedyidj3g.s[4]++, $.fn[NAME]);
  var Event = (cov_1nedyidj3g.s[5]++, {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY
  });
  var ClassName = (cov_1nedyidj3g.s[6]++, {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  });
  var DefaultType = (cov_1nedyidj3g.s[7]++, {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  });
  var Default = (cov_1nedyidj3g.s[8]++, {
    animation: true,
    autohide: true,
    delay: 500
  });
  var Selector = (cov_1nedyidj3g.s[9]++, {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  });

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      cov_1nedyidj3g.f[0]++;
      cov_1nedyidj3g.s[10]++;
      this._element = element;
      cov_1nedyidj3g.s[11]++;
      this._config = this._getConfig(config);
      cov_1nedyidj3g.s[12]++;
      this._timeout = null;
      cov_1nedyidj3g.s[13]++;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      cov_1nedyidj3g.f[3]++;
      cov_1nedyidj3g.s[16]++;
      $(this._element).trigger(Event.SHOW);
      cov_1nedyidj3g.s[17]++;

      if (this._config.animation) {
        cov_1nedyidj3g.b[0][0]++;
        cov_1nedyidj3g.s[18]++;

        this._element.classList.add(ClassName.FADE);
      } else {
        cov_1nedyidj3g.b[0][1]++;
      }

      cov_1nedyidj3g.s[19]++;

      var complete = function complete() {
        cov_1nedyidj3g.f[4]++;
        cov_1nedyidj3g.s[20]++;

        _this._element.classList.remove(ClassName.SHOWING);

        cov_1nedyidj3g.s[21]++;

        _this._element.classList.add(ClassName.SHOW);

        cov_1nedyidj3g.s[22]++;
        $(_this._element).trigger(Event.SHOWN);
        cov_1nedyidj3g.s[23]++;

        if (_this._config.autohide) {
          cov_1nedyidj3g.b[1][0]++;
          cov_1nedyidj3g.s[24]++;

          _this.hide();
        } else {
          cov_1nedyidj3g.b[1][1]++;
        }
      };

      cov_1nedyidj3g.s[25]++;

      this._element.classList.remove(ClassName.HIDE);

      cov_1nedyidj3g.s[26]++;

      this._element.classList.add(ClassName.SHOWING);

      cov_1nedyidj3g.s[27]++;

      if (this._config.animation) {
        cov_1nedyidj3g.b[2][0]++;
        var transitionDuration = (cov_1nedyidj3g.s[28]++, Util.getTransitionDurationFromElement(this._element));
        cov_1nedyidj3g.s[29]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1nedyidj3g.b[2][1]++;
        cov_1nedyidj3g.s[30]++;
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      cov_1nedyidj3g.f[5]++;
      cov_1nedyidj3g.s[31]++;

      if (!this._element.classList.contains(ClassName.SHOW)) {
        cov_1nedyidj3g.b[3][0]++;
        cov_1nedyidj3g.s[32]++;
        return;
      } else {
        cov_1nedyidj3g.b[3][1]++;
      }

      cov_1nedyidj3g.s[33]++;
      $(this._element).trigger(Event.HIDE);
      cov_1nedyidj3g.s[34]++;

      if (withoutTimeout) {
        cov_1nedyidj3g.b[4][0]++;
        cov_1nedyidj3g.s[35]++;

        this._close();
      } else {
        cov_1nedyidj3g.b[4][1]++;
        cov_1nedyidj3g.s[36]++;
        this._timeout = setTimeout(function () {
          cov_1nedyidj3g.f[6]++;
          cov_1nedyidj3g.s[37]++;

          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      cov_1nedyidj3g.f[7]++;
      cov_1nedyidj3g.s[38]++;
      clearTimeout(this._timeout);
      cov_1nedyidj3g.s[39]++;
      this._timeout = null;
      cov_1nedyidj3g.s[40]++;

      if (this._element.classList.contains(ClassName.SHOW)) {
        cov_1nedyidj3g.b[5][0]++;
        cov_1nedyidj3g.s[41]++;

        this._element.classList.remove(ClassName.SHOW);
      } else {
        cov_1nedyidj3g.b[5][1]++;
      }

      cov_1nedyidj3g.s[42]++;
      $(this._element).off(Event.CLICK_DISMISS);
      cov_1nedyidj3g.s[43]++;
      $.removeData(this._element, DATA_KEY);
      cov_1nedyidj3g.s[44]++;
      this._element = null;
      cov_1nedyidj3g.s[45]++;
      this._config = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      cov_1nedyidj3g.f[8]++;
      cov_1nedyidj3g.s[46]++;
      config = _objectSpread({}, Default, $(this._element).data(), (cov_1nedyidj3g.b[7][0]++, typeof config === 'object') && (cov_1nedyidj3g.b[7][1]++, config) ? (cov_1nedyidj3g.b[6][0]++, config) : (cov_1nedyidj3g.b[6][1]++, {}));
      cov_1nedyidj3g.s[47]++;
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      cov_1nedyidj3g.s[48]++;
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      cov_1nedyidj3g.f[9]++;
      cov_1nedyidj3g.s[49]++;
      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function () {
        cov_1nedyidj3g.f[10]++;
        cov_1nedyidj3g.s[50]++;
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      cov_1nedyidj3g.f[11]++;
      cov_1nedyidj3g.s[51]++;

      var complete = function complete() {
        cov_1nedyidj3g.f[12]++;
        cov_1nedyidj3g.s[52]++;

        _this4._element.classList.add(ClassName.HIDE);

        cov_1nedyidj3g.s[53]++;
        $(_this4._element).trigger(Event.HIDDEN);
      };

      cov_1nedyidj3g.s[54]++;

      this._element.classList.remove(ClassName.SHOW);

      cov_1nedyidj3g.s[55]++;

      if (this._config.animation) {
        cov_1nedyidj3g.b[8][0]++;
        var transitionDuration = (cov_1nedyidj3g.s[56]++, Util.getTransitionDurationFromElement(this._element));
        cov_1nedyidj3g.s[57]++;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        cov_1nedyidj3g.b[8][1]++;
        cov_1nedyidj3g.s[58]++;
        complete();
      }
    }; // Static


    Toast._jQueryInterface = function _jQueryInterface(config) {
      cov_1nedyidj3g.f[13]++;
      cov_1nedyidj3g.s[59]++;
      return this.each(function () {
        cov_1nedyidj3g.f[14]++;
        var $element = (cov_1nedyidj3g.s[60]++, $(this));
        var data = (cov_1nedyidj3g.s[61]++, $element.data(DATA_KEY));

        var _config = (cov_1nedyidj3g.s[62]++, (cov_1nedyidj3g.b[9][0]++, typeof config === 'object') && (cov_1nedyidj3g.b[9][1]++, config));

        cov_1nedyidj3g.s[63]++;

        if (!data) {
          cov_1nedyidj3g.b[10][0]++;
          cov_1nedyidj3g.s[64]++;
          data = new Toast(this, _config);
          cov_1nedyidj3g.s[65]++;
          $element.data(DATA_KEY, data);
        } else {
          cov_1nedyidj3g.b[10][1]++;
        }

        cov_1nedyidj3g.s[66]++;

        if (typeof config === 'string') {
          cov_1nedyidj3g.b[11][0]++;
          cov_1nedyidj3g.s[67]++;

          if (typeof data[config] === 'undefined') {
            cov_1nedyidj3g.b[12][0]++;
            cov_1nedyidj3g.s[68]++;
            throw new TypeError("No method named \"" + config + "\"");
          } else {
            cov_1nedyidj3g.b[12][1]++;
          }

          cov_1nedyidj3g.s[69]++;
          data[config](this);
        } else {
          cov_1nedyidj3g.b[11][1]++;
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        cov_1nedyidj3g.f[1]++;
        cov_1nedyidj3g.s[14]++;
        return VERSION;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        cov_1nedyidj3g.f[2]++;
        cov_1nedyidj3g.s[15]++;
        return DefaultType;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  cov_1nedyidj3g.s[70]++;
  $.fn[NAME] = Toast._jQueryInterface;
  cov_1nedyidj3g.s[71]++;
  $.fn[NAME].Constructor = Toast;
  cov_1nedyidj3g.s[72]++;

  $.fn[NAME].noConflict = function () {
    cov_1nedyidj3g.f[15]++;
    cov_1nedyidj3g.s[73]++;
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    cov_1nedyidj3g.s[74]++;
    return Toast._jQueryInterface;
  };

  return Toast;

})));
//# sourceMappingURL=toast.js.map
