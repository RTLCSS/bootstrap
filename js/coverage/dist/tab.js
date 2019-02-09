(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Tab = factory(global.jQuery,global.Util));
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

  var cov_1mu235k2on = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/tab.js",
        hash = "3d97b1cc7b36ff010c8a410329fcfa26a3843b9b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/tab.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 262,
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
            column: 34
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
            column: 37
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
            column: 16
          },
          end: {
            line: 31,
            column: 3
          }
        },
        "8": {
          start: {
            line: 33,
            column: 20
          },
          end: {
            line: 39,
            column: 3
          }
        },
        "9": {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 49,
            column: 3
          }
        },
        "10": {
          start: {
            line: 59,
            column: 6
          },
          end: {
            line: 59,
            column: 29
          }
        },
        "11": {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 65,
            column: 20
          }
        },
        "12": {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 76,
            column: 7
          }
        },
        "13": {
          start: {
            line: 75,
            column: 8
          },
          end: {
            line: 75,
            column: 14
          }
        },
        "14": {
          start: {
            line: 80,
            column: 26
          },
          end: {
            line: 80,
            column: 78
          }
        },
        "15": {
          start: {
            line: 81,
            column: 23
          },
          end: {
            line: 81,
            column: 65
          }
        },
        "16": {
          start: {
            line: 83,
            column: 6
          },
          end: {
            line: 87,
            column: 7
          }
        },
        "17": {
          start: {
            line: 84,
            column: 29
          },
          end: {
            line: 84,
            column: 97
          }
        },
        "18": {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 85,
            column: 65
          }
        },
        "19": {
          start: {
            line: 86,
            column: 8
          },
          end: {
            line: 86,
            column: 48
          }
        },
        "20": {
          start: {
            line: 89,
            column: 24
          },
          end: {
            line: 91,
            column: 8
          }
        },
        "21": {
          start: {
            line: 93,
            column: 24
          },
          end: {
            line: 95,
            column: 8
          }
        },
        "22": {
          start: {
            line: 97,
            column: 6
          },
          end: {
            line: 99,
            column: 7
          }
        },
        "23": {
          start: {
            line: 98,
            column: 8
          },
          end: {
            line: 98,
            column: 38
          }
        },
        "24": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 41
          }
        },
        "25": {
          start: {
            line: 103,
            column: 6
          },
          end: {
            line: 106,
            column: 7
          }
        },
        "26": {
          start: {
            line: 105,
            column: 8
          },
          end: {
            line: 105,
            column: 14
          }
        },
        "27": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 110,
            column: 7
          }
        },
        "28": {
          start: {
            line: 109,
            column: 8
          },
          end: {
            line: 109,
            column: 49
          }
        },
        "29": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 115,
            column: 7
          }
        },
        "30": {
          start: {
            line: 117,
            column: 23
          },
          end: {
            line: 128,
            column: 7
          }
        },
        "31": {
          start: {
            line: 118,
            column: 28
          },
          end: {
            line: 120,
            column: 10
          }
        },
        "32": {
          start: {
            line: 122,
            column: 27
          },
          end: {
            line: 124,
            column: 10
          }
        },
        "33": {
          start: {
            line: 126,
            column: 8
          },
          end: {
            line: 126,
            column: 40
          }
        },
        "34": {
          start: {
            line: 127,
            column: 8
          },
          end: {
            line: 127,
            column: 44
          }
        },
        "35": {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 134,
            column: 7
          }
        },
        "36": {
          start: {
            line: 131,
            column: 8
          },
          end: {
            line: 131,
            column: 59
          }
        },
        "37": {
          start: {
            line: 133,
            column: 8
          },
          end: {
            line: 133,
            column: 18
          }
        },
        "38": {
          start: {
            line: 138,
            column: 6
          },
          end: {
            line: 138,
            column: 43
          }
        },
        "39": {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 139,
            column: 26
          }
        },
        "40": {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        },
        "41": {
          start: {
            line: 147,
            column: 8
          },
          end: {
            line: 147,
            column: 62
          }
        },
        "42": {
          start: {
            line: 149,
            column: 8
          },
          end: {
            line: 149,
            column: 63
          }
        },
        "43": {
          start: {
            line: 152,
            column: 21
          },
          end: {
            line: 152,
            column: 38
          }
        },
        "44": {
          start: {
            line: 153,
            column: 30
          },
          end: {
            line: 154,
            column: 54
          }
        },
        "45": {
          start: {
            line: 156,
            column: 23
          },
          end: {
            line: 160,
            column: 7
          }
        },
        "46": {
          start: {
            line: 156,
            column: 29
          },
          end: {
            line: 160,
            column: 7
          }
        },
        "47": {
          start: {
            line: 162,
            column: 6
          },
          end: {
            line: 170,
            column: 7
          }
        },
        "48": {
          start: {
            line: 163,
            column: 35
          },
          end: {
            line: 163,
            column: 80
          }
        },
        "49": {
          start: {
            line: 165,
            column: 8
          },
          end: {
            line: 167,
            column: 51
          }
        },
        "50": {
          start: {
            line: 169,
            column: 8
          },
          end: {
            line: 169,
            column: 18
          }
        },
        "51": {
          start: {
            line: 174,
            column: 6
          },
          end: {
            line: 188,
            column: 7
          }
        },
        "52": {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 175,
            column: 70
          }
        },
        "53": {
          start: {
            line: 177,
            column: 30
          },
          end: {
            line: 179,
            column: 12
          }
        },
        "54": {
          start: {
            line: 181,
            column: 8
          },
          end: {
            line: 183,
            column: 9
          }
        },
        "55": {
          start: {
            line: 182,
            column: 10
          },
          end: {
            line: 182,
            column: 56
          }
        },
        "56": {
          start: {
            line: 185,
            column: 8
          },
          end: {
            line: 187,
            column: 9
          }
        },
        "57": {
          start: {
            line: 186,
            column: 10
          },
          end: {
            line: 186,
            column: 53
          }
        },
        "58": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 43
          }
        },
        "59": {
          start: {
            line: 191,
            column: 6
          },
          end: {
            line: 193,
            column: 7
          }
        },
        "60": {
          start: {
            line: 192,
            column: 8
          },
          end: {
            line: 192,
            column: 51
          }
        },
        "61": {
          start: {
            line: 195,
            column: 6
          },
          end: {
            line: 195,
            column: 26
          }
        },
        "62": {
          start: {
            line: 196,
            column: 6
          },
          end: {
            line: 196,
            column: 41
          }
        },
        "63": {
          start: {
            line: 198,
            column: 6
          },
          end: {
            line: 207,
            column: 7
          }
        },
        "64": {
          start: {
            line: 200,
            column: 32
          },
          end: {
            line: 200,
            column: 72
          }
        },
        "65": {
          start: {
            line: 201,
            column: 8
          },
          end: {
            line: 204,
            column: 9
          }
        },
        "66": {
          start: {
            line: 202,
            column: 37
          },
          end: {
            line: 202,
            column: 110
          }
        },
        "67": {
          start: {
            line: 203,
            column: 10
          },
          end: {
            line: 203,
            column: 58
          }
        },
        "68": {
          start: {
            line: 206,
            column: 8
          },
          end: {
            line: 206,
            column: 51
          }
        },
        "69": {
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 211,
            column: 7
          }
        },
        "70": {
          start: {
            line: 210,
            column: 8
          },
          end: {
            line: 210,
            column: 18
          }
        },
        "71": {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 232,
            column: 8
          }
        },
        "72": {
          start: {
            line: 218,
            column: 22
          },
          end: {
            line: 218,
            column: 29
          }
        },
        "73": {
          start: {
            line: 219,
            column: 19
          },
          end: {
            line: 219,
            column: 39
          }
        },
        "74": {
          start: {
            line: 221,
            column: 8
          },
          end: {
            line: 224,
            column: 9
          }
        },
        "75": {
          start: {
            line: 222,
            column: 10
          },
          end: {
            line: 222,
            column: 30
          }
        },
        "76": {
          start: {
            line: 223,
            column: 10
          },
          end: {
            line: 223,
            column: 36
          }
        },
        "77": {
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 231,
            column: 9
          }
        },
        "78": {
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 229,
            column: 11
          }
        },
        "79": {
          start: {
            line: 228,
            column: 12
          },
          end: {
            line: 228,
            column: 62
          }
        },
        "80": {
          start: {
            line: 230,
            column: 10
          },
          end: {
            line: 230,
            column: 24
          }
        },
        "81": {
          start: {
            line: 242,
            column: 2
          },
          end: {
            line: 246,
            column: 6
          }
        },
        "82": {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 244,
            column: 28
          }
        },
        "83": {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 245,
            column: 48
          }
        },
        "84": {
          start: {
            line: 254,
            column: 2
          },
          end: {
            line: 254,
            column: 35
          }
        },
        "85": {
          start: {
            line: 255,
            column: 2
          },
          end: {
            line: 255,
            column: 30
          }
        },
        "86": {
          start: {
            line: 256,
            column: 2
          },
          end: {
            line: 259,
            column: 3
          }
        },
        "87": {
          start: {
            line: 257,
            column: 4
          },
          end: {
            line: 257,
            column: 35
          }
        },
        "88": {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 258,
            column: 31
          }
        },
        "89": {
          start: {
            line: 261,
            column: 2
          },
          end: {
            line: 261,
            column: 12
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 13
            },
            end: {
              line: 11,
              column: 14
            }
          },
          loc: {
            start: {
              line: 11,
              column: 20
            },
            end: {
              line: 262,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 58,
              column: 4
            },
            end: {
              line: 58,
              column: 5
            }
          },
          loc: {
            start: {
              line: 58,
              column: 25
            },
            end: {
              line: 60,
              column: 5
            }
          },
          line: 58
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 64,
              column: 4
            },
            end: {
              line: 64,
              column: 5
            }
          },
          loc: {
            start: {
              line: 64,
              column: 25
            },
            end: {
              line: 66,
              column: 5
            }
          },
          line: 64
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 70,
              column: 4
            },
            end: {
              line: 70,
              column: 5
            }
          },
          loc: {
            start: {
              line: 70,
              column: 11
            },
            end: {
              line: 135,
              column: 5
            }
          },
          line: 70
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 117,
              column: 23
            },
            end: {
              line: 117,
              column: 24
            }
          },
          loc: {
            start: {
              line: 117,
              column: 29
            },
            end: {
              line: 128,
              column: 7
            }
          },
          line: 117
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 137,
              column: 4
            },
            end: {
              line: 137,
              column: 5
            }
          },
          loc: {
            start: {
              line: 137,
              column: 14
            },
            end: {
              line: 140,
              column: 5
            }
          },
          line: 137
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 144,
              column: 4
            },
            end: {
              line: 144,
              column: 5
            }
          },
          loc: {
            start: {
              line: 144,
              column: 44
            },
            end: {
              line: 171,
              column: 5
            }
          },
          line: 144
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 156,
              column: 23
            },
            end: {
              line: 156,
              column: 24
            }
          },
          loc: {
            start: {
              line: 156,
              column: 29
            },
            end: {
              line: 160,
              column: 7
            }
          },
          line: 156
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 173,
              column: 4
            },
            end: {
              line: 173,
              column: 5
            }
          },
          loc: {
            start: {
              line: 173,
              column: 51
            },
            end: {
              line: 212,
              column: 5
            }
          },
          line: 173
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 216,
              column: 4
            },
            end: {
              line: 216,
              column: 5
            }
          },
          loc: {
            start: {
              line: 216,
              column: 36
            },
            end: {
              line: 233,
              column: 5
            }
          },
          line: 216
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 217,
              column: 23
            },
            end: {
              line: 217,
              column: 24
            }
          },
          loc: {
            start: {
              line: 217,
              column: 35
            },
            end: {
              line: 232,
              column: 7
            }
          },
          line: 217
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 243,
              column: 52
            },
            end: {
              line: 243,
              column: 53
            }
          },
          loc: {
            start: {
              line: 243,
              column: 69
            },
            end: {
              line: 246,
              column: 5
            }
          },
          line: 243
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 256,
              column: 26
            },
            end: {
              line: 256,
              column: 27
            }
          },
          loc: {
            start: {
              line: 256,
              column: 38
            },
            end: {
              line: 259,
              column: 3
            }
          },
          line: 256
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 71,
              column: 6
            },
            end: {
              line: 76,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 71,
              column: 6
            },
            end: {
              line: 76,
              column: 7
            }
          }, {
            start: {
              line: 71,
              column: 6
            },
            end: {
              line: 76,
              column: 7
            }
          }],
          line: 71
        },
        "1": {
          loc: {
            start: {
              line: 71,
              column: 10
            },
            end: {
              line: 74,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 71,
              column: 10
            },
            end: {
              line: 71,
              column: 34
            }
          }, {
            start: {
              line: 72,
              column: 10
            },
            end: {
              line: 72,
              column: 65
            }
          }, {
            start: {
              line: 73,
              column: 10
            },
            end: {
              line: 73,
              column: 53
            }
          }, {
            start: {
              line: 74,
              column: 10
            },
            end: {
              line: 74,
              column: 55
            }
          }],
          line: 71
        },
        "2": {
          loc: {
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          }, {
            start: {
              line: 83,
              column: 6
            },
            end: {
              line: 87,
              column: 7
            }
          }],
          line: 83
        },
        "3": {
          loc: {
            start: {
              line: 84,
              column: 29
            },
            end: {
              line: 84,
              column: 97
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 84,
              column: 61
            },
            end: {
              line: 84,
              column: 79
            }
          }, {
            start: {
              line: 84,
              column: 82
            },
            end: {
              line: 84,
              column: 97
            }
          }],
          line: 84
        },
        "4": {
          loc: {
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          }, {
            start: {
              line: 97,
              column: 6
            },
            end: {
              line: 99,
              column: 7
            }
          }],
          line: 97
        },
        "5": {
          loc: {
            start: {
              line: 103,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 103,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          }, {
            start: {
              line: 103,
              column: 6
            },
            end: {
              line: 106,
              column: 7
            }
          }],
          line: 103
        },
        "6": {
          loc: {
            start: {
              line: 103,
              column: 10
            },
            end: {
              line: 104,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 103,
              column: 10
            },
            end: {
              line: 103,
              column: 40
            }
          }, {
            start: {
              line: 104,
              column: 9
            },
            end: {
              line: 104,
              column: 39
            }
          }],
          line: 103
        },
        "7": {
          loc: {
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }, {
            start: {
              line: 108,
              column: 6
            },
            end: {
              line: 110,
              column: 7
            }
          }],
          line: 108
        },
        "8": {
          loc: {
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          }, {
            start: {
              line: 130,
              column: 6
            },
            end: {
              line: 134,
              column: 7
            }
          }],
          line: 130
        },
        "9": {
          loc: {
            start: {
              line: 146,
              column: 6
            },
            end: {
              line: 150,
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
              line: 150,
              column: 7
            }
          }, {
            start: {
              line: 146,
              column: 6
            },
            end: {
              line: 150,
              column: 7
            }
          }],
          line: 146
        },
        "10": {
          loc: {
            start: {
              line: 153,
              column: 30
            },
            end: {
              line: 154,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 153,
              column: 30
            },
            end: {
              line: 153,
              column: 38
            }
          }, {
            start: {
              line: 154,
              column: 9
            },
            end: {
              line: 154,
              column: 15
            }
          }, {
            start: {
              line: 154,
              column: 19
            },
            end: {
              line: 154,
              column: 53
            }
          }],
          line: 153
        },
        "11": {
          loc: {
            start: {
              line: 162,
              column: 6
            },
            end: {
              line: 170,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 6
            },
            end: {
              line: 170,
              column: 7
            }
          }, {
            start: {
              line: 162,
              column: 6
            },
            end: {
              line: 170,
              column: 7
            }
          }],
          line: 162
        },
        "12": {
          loc: {
            start: {
              line: 162,
              column: 10
            },
            end: {
              line: 162,
              column: 35
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 162,
              column: 10
            },
            end: {
              line: 162,
              column: 16
            }
          }, {
            start: {
              line: 162,
              column: 20
            },
            end: {
              line: 162,
              column: 35
            }
          }],
          line: 162
        },
        "13": {
          loc: {
            start: {
              line: 174,
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
              line: 174,
              column: 6
            },
            end: {
              line: 188,
              column: 7
            }
          }, {
            start: {
              line: 174,
              column: 6
            },
            end: {
              line: 188,
              column: 7
            }
          }],
          line: 174
        },
        "14": {
          loc: {
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 183,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 183,
              column: 9
            }
          }, {
            start: {
              line: 181,
              column: 8
            },
            end: {
              line: 183,
              column: 9
            }
          }],
          line: 181
        },
        "15": {
          loc: {
            start: {
              line: 185,
              column: 8
            },
            end: {
              line: 187,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 185,
              column: 8
            },
            end: {
              line: 187,
              column: 9
            }
          }, {
            start: {
              line: 185,
              column: 8
            },
            end: {
              line: 187,
              column: 9
            }
          }],
          line: 185
        },
        "16": {
          loc: {
            start: {
              line: 191,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 191,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          }, {
            start: {
              line: 191,
              column: 6
            },
            end: {
              line: 193,
              column: 7
            }
          }],
          line: 191
        },
        "17": {
          loc: {
            start: {
              line: 198,
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
              line: 198,
              column: 6
            },
            end: {
              line: 207,
              column: 7
            }
          }, {
            start: {
              line: 198,
              column: 6
            },
            end: {
              line: 207,
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
              column: 65
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
              column: 28
            }
          }, {
            start: {
              line: 199,
              column: 10
            },
            end: {
              line: 199,
              column: 65
            }
          }],
          line: 198
        },
        "19": {
          loc: {
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 204,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 204,
              column: 9
            }
          }, {
            start: {
              line: 201,
              column: 8
            },
            end: {
              line: 204,
              column: 9
            }
          }],
          line: 201
        },
        "20": {
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
        "21": {
          loc: {
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 224,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 224,
              column: 9
            }
          }, {
            start: {
              line: 221,
              column: 8
            },
            end: {
              line: 224,
              column: 9
            }
          }],
          line: 221
        },
        "22": {
          loc: {
            start: {
              line: 226,
              column: 8
            },
            end: {
              line: 231,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 226,
              column: 8
            },
            end: {
              line: 231,
              column: 9
            }
          }, {
            start: {
              line: 226,
              column: 8
            },
            end: {
              line: 231,
              column: 9
            }
          }],
          line: 226
        },
        "23": {
          loc: {
            start: {
              line: 227,
              column: 10
            },
            end: {
              line: 229,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 227,
              column: 10
            },
            end: {
              line: 229,
              column: 11
            }
          }, {
            start: {
              line: 227,
              column: 10
            },
            end: {
              line: 229,
              column: 11
            }
          }],
          line: 227
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
        "89": 0
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
        "12": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0, 0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0, 0],
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
        "23": [0, 0]
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
   * Bootstrap (v4.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = (cov_1mu235k2on.s[0]++, function ($$$1) {
    cov_1mu235k2on.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_1mu235k2on.s[1]++, 'tab');
    var VERSION = (cov_1mu235k2on.s[2]++, '4.1.3');
    var DATA_KEY = (cov_1mu235k2on.s[3]++, 'bs.tab');
    var EVENT_KEY = (cov_1mu235k2on.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_1mu235k2on.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_1mu235k2on.s[6]++, $$$1.fn[NAME]);
    var Event = (cov_1mu235k2on.s[7]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_1mu235k2on.s[8]++, {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    });
    var Selector = (cov_1mu235k2on.s[9]++, {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        cov_1mu235k2on.f[1]++;
        cov_1mu235k2on.s[10]++;
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        cov_1mu235k2on.f[3]++;
        cov_1mu235k2on.s[12]++;

        if ((cov_1mu235k2on.b[1][0]++, this._element.parentNode) && (cov_1mu235k2on.b[1][1]++, this._element.parentNode.nodeType === Node.ELEMENT_NODE) && (cov_1mu235k2on.b[1][2]++, $$$1(this._element).hasClass(ClassName.ACTIVE)) || (cov_1mu235k2on.b[1][3]++, $$$1(this._element).hasClass(ClassName.DISABLED))) {
          cov_1mu235k2on.b[0][0]++;
          cov_1mu235k2on.s[13]++;
          return;
        } else {
          cov_1mu235k2on.b[0][1]++;
        }

        var target;
        var previous;
        var listElement = (cov_1mu235k2on.s[14]++, $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0]);
        var selector = (cov_1mu235k2on.s[15]++, Util.getSelectorFromElement(this._element));
        cov_1mu235k2on.s[16]++;

        if (listElement) {
          cov_1mu235k2on.b[2][0]++;
          var itemSelector = (cov_1mu235k2on.s[17]++, listElement.nodeName === 'UL' ? (cov_1mu235k2on.b[3][0]++, Selector.ACTIVE_UL) : (cov_1mu235k2on.b[3][1]++, Selector.ACTIVE));
          cov_1mu235k2on.s[18]++;
          previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
          cov_1mu235k2on.s[19]++;
          previous = previous[previous.length - 1];
        } else {
          cov_1mu235k2on.b[2][1]++;
        }

        var hideEvent = (cov_1mu235k2on.s[20]++, $$$1.Event(Event.HIDE, {
          relatedTarget: this._element
        }));
        var showEvent = (cov_1mu235k2on.s[21]++, $$$1.Event(Event.SHOW, {
          relatedTarget: previous
        }));
        cov_1mu235k2on.s[22]++;

        if (previous) {
          cov_1mu235k2on.b[4][0]++;
          cov_1mu235k2on.s[23]++;
          $$$1(previous).trigger(hideEvent);
        } else {
          cov_1mu235k2on.b[4][1]++;
        }

        cov_1mu235k2on.s[24]++;
        $$$1(this._element).trigger(showEvent);
        cov_1mu235k2on.s[25]++;

        if ((cov_1mu235k2on.b[6][0]++, showEvent.isDefaultPrevented()) || (cov_1mu235k2on.b[6][1]++, hideEvent.isDefaultPrevented())) {
          cov_1mu235k2on.b[5][0]++;
          cov_1mu235k2on.s[26]++;
          return;
        } else {
          cov_1mu235k2on.b[5][1]++;
        }

        cov_1mu235k2on.s[27]++;

        if (selector) {
          cov_1mu235k2on.b[7][0]++;
          cov_1mu235k2on.s[28]++;
          target = document.querySelector(selector);
        } else {
          cov_1mu235k2on.b[7][1]++;
        }

        cov_1mu235k2on.s[29]++;

        this._activate(this._element, listElement);

        cov_1mu235k2on.s[30]++;

        var complete = function complete() {
          cov_1mu235k2on.f[4]++;
          var hiddenEvent = (cov_1mu235k2on.s[31]++, $$$1.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          }));
          var shownEvent = (cov_1mu235k2on.s[32]++, $$$1.Event(Event.SHOWN, {
            relatedTarget: previous
          }));
          cov_1mu235k2on.s[33]++;
          $$$1(previous).trigger(hiddenEvent);
          cov_1mu235k2on.s[34]++;
          $$$1(_this._element).trigger(shownEvent);
        };

        cov_1mu235k2on.s[35]++;

        if (target) {
          cov_1mu235k2on.b[8][0]++;
          cov_1mu235k2on.s[36]++;

          this._activate(target, target.parentNode, complete);
        } else {
          cov_1mu235k2on.b[8][1]++;
          cov_1mu235k2on.s[37]++;
          complete();
        }
      };

      _proto.dispose = function dispose() {
        cov_1mu235k2on.f[5]++;
        cov_1mu235k2on.s[38]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_1mu235k2on.s[39]++;
        this._element = null;
      }; // Private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        cov_1mu235k2on.f[6]++;
        var activeElements;
        cov_1mu235k2on.s[40]++;

        if (container.nodeName === 'UL') {
          cov_1mu235k2on.b[9][0]++;
          cov_1mu235k2on.s[41]++;
          activeElements = $$$1(container).find(Selector.ACTIVE_UL);
        } else {
          cov_1mu235k2on.b[9][1]++;
          cov_1mu235k2on.s[42]++;
          activeElements = $$$1(container).children(Selector.ACTIVE);
        }

        var active = (cov_1mu235k2on.s[43]++, activeElements[0]);
        var isTransitioning = (cov_1mu235k2on.s[44]++, (cov_1mu235k2on.b[10][0]++, callback) && (cov_1mu235k2on.b[10][1]++, active) && (cov_1mu235k2on.b[10][2]++, $$$1(active).hasClass(ClassName.FADE)));
        cov_1mu235k2on.s[45]++;

        var complete = function complete() {
          cov_1mu235k2on.f[7]++;
          cov_1mu235k2on.s[46]++;
          return _this2._transitionComplete(element, active, callback);
        };

        cov_1mu235k2on.s[47]++;

        if ((cov_1mu235k2on.b[12][0]++, active) && (cov_1mu235k2on.b[12][1]++, isTransitioning)) {
          cov_1mu235k2on.b[11][0]++;
          var transitionDuration = (cov_1mu235k2on.s[48]++, Util.getTransitionDurationFromElement(active));
          cov_1mu235k2on.s[49]++;
          $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          cov_1mu235k2on.b[11][1]++;
          cov_1mu235k2on.s[50]++;
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        cov_1mu235k2on.f[8]++;
        cov_1mu235k2on.s[51]++;

        if (active) {
          cov_1mu235k2on.b[13][0]++;
          cov_1mu235k2on.s[52]++;
          $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
          var dropdownChild = (cov_1mu235k2on.s[53]++, $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0]);
          cov_1mu235k2on.s[54]++;

          if (dropdownChild) {
            cov_1mu235k2on.b[14][0]++;
            cov_1mu235k2on.s[55]++;
            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
          } else {
            cov_1mu235k2on.b[14][1]++;
          }

          cov_1mu235k2on.s[56]++;

          if (active.getAttribute('role') === 'tab') {
            cov_1mu235k2on.b[15][0]++;
            cov_1mu235k2on.s[57]++;
            active.setAttribute('aria-selected', false);
          } else {
            cov_1mu235k2on.b[15][1]++;
          }
        } else {
          cov_1mu235k2on.b[13][1]++;
        }

        cov_1mu235k2on.s[58]++;
        $$$1(element).addClass(ClassName.ACTIVE);
        cov_1mu235k2on.s[59]++;

        if (element.getAttribute('role') === 'tab') {
          cov_1mu235k2on.b[16][0]++;
          cov_1mu235k2on.s[60]++;
          element.setAttribute('aria-selected', true);
        } else {
          cov_1mu235k2on.b[16][1]++;
        }

        cov_1mu235k2on.s[61]++;
        Util.reflow(element);
        cov_1mu235k2on.s[62]++;
        $$$1(element).addClass(ClassName.SHOW);
        cov_1mu235k2on.s[63]++;

        if ((cov_1mu235k2on.b[18][0]++, element.parentNode) && (cov_1mu235k2on.b[18][1]++, $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU))) {
          cov_1mu235k2on.b[17][0]++;
          var dropdownElement = (cov_1mu235k2on.s[64]++, $$$1(element).closest(Selector.DROPDOWN)[0]);
          cov_1mu235k2on.s[65]++;

          if (dropdownElement) {
            cov_1mu235k2on.b[19][0]++;
            var dropdownToggleList = (cov_1mu235k2on.s[66]++, [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE)));
            cov_1mu235k2on.s[67]++;
            $$$1(dropdownToggleList).addClass(ClassName.ACTIVE);
          } else {
            cov_1mu235k2on.b[19][1]++;
          }

          cov_1mu235k2on.s[68]++;
          element.setAttribute('aria-expanded', true);
        } else {
          cov_1mu235k2on.b[17][1]++;
        }

        cov_1mu235k2on.s[69]++;

        if (callback) {
          cov_1mu235k2on.b[20][0]++;
          cov_1mu235k2on.s[70]++;
          callback();
        } else {
          cov_1mu235k2on.b[20][1]++;
        }
      }; // Static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        cov_1mu235k2on.f[9]++;
        cov_1mu235k2on.s[71]++;
        return this.each(function () {
          cov_1mu235k2on.f[10]++;
          var $this = (cov_1mu235k2on.s[72]++, $$$1(this));
          var data = (cov_1mu235k2on.s[73]++, $this.data(DATA_KEY));
          cov_1mu235k2on.s[74]++;

          if (!data) {
            cov_1mu235k2on.b[21][0]++;
            cov_1mu235k2on.s[75]++;
            data = new Tab(this);
            cov_1mu235k2on.s[76]++;
            $this.data(DATA_KEY, data);
          } else {
            cov_1mu235k2on.b[21][1]++;
          }

          cov_1mu235k2on.s[77]++;

          if (typeof config === 'string') {
            cov_1mu235k2on.b[22][0]++;
            cov_1mu235k2on.s[78]++;

            if (typeof data[config] === 'undefined') {
              cov_1mu235k2on.b[23][0]++;
              cov_1mu235k2on.s[79]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_1mu235k2on.b[23][1]++;
            }

            cov_1mu235k2on.s[80]++;
            data[config]();
          } else {
            cov_1mu235k2on.b[22][1]++;
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          cov_1mu235k2on.f[2]++;
          cov_1mu235k2on.s[11]++;
          return VERSION;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_1mu235k2on.s[81]++;
    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      cov_1mu235k2on.f[11]++;
      cov_1mu235k2on.s[82]++;
      event.preventDefault();
      cov_1mu235k2on.s[83]++;

      Tab._jQueryInterface.call($$$1(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_1mu235k2on.s[84]++;
    $$$1.fn[NAME] = Tab._jQueryInterface;
    cov_1mu235k2on.s[85]++;
    $$$1.fn[NAME].Constructor = Tab;
    cov_1mu235k2on.s[86]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_1mu235k2on.f[12]++;
      cov_1mu235k2on.s[87]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1mu235k2on.s[88]++;
      return Tab._jQueryInterface;
    };

    cov_1mu235k2on.s[89]++;
    return Tab;
  }($));

  return Tab;

})));
//# sourceMappingURL=tab.js.map
