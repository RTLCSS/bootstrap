(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./tooltip.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './tooltip.js'], factory) :
  (global.Popover = factory(global.jQuery,global.Tooltip));
}(this, (function ($,Tooltip) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Tooltip = Tooltip && Tooltip.hasOwnProperty('default') ? Tooltip['default'] : Tooltip;

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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var cov_1xvm35cq46 = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/popover.js",
        hash = "c01a821420d097cadb66848c717c136d8534c863",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/popover.js",
      statementMap: {
        "0": {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 187,
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
            column: 39
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
            column: 42
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
            column: 40
          }
        },
        "6": {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 23,
            column: 42
          }
        },
        "7": {
          start: {
            line: 24,
            column: 30
          },
          end: {
            line: 24,
            column: 75
          }
        },
        "8": {
          start: {
            line: 25,
            column: 30
          },
          end: {
            line: 25,
            column: 68
          }
        },
        "9": {
          start: {
            line: 27,
            column: 18
          },
          end: {
            line: 36,
            column: 3
          }
        },
        "10": {
          start: {
            line: 38,
            column: 22
          },
          end: {
            line: 41,
            column: 3
          }
        },
        "11": {
          start: {
            line: 43,
            column: 20
          },
          end: {
            line: 46,
            column: 3
          }
        },
        "12": {
          start: {
            line: 48,
            column: 19
          },
          end: {
            line: 51,
            column: 3
          }
        },
        "13": {
          start: {
            line: 53,
            column: 16
          },
          end: {
            line: 64,
            column: 3
          }
        },
        "14": {
          start: {
            line: 76,
            column: 6
          },
          end: {
            line: 76,
            column: 20
          }
        },
        "15": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 80,
            column: 20
          }
        },
        "16": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 84,
            column: 17
          }
        },
        "17": {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 88,
            column: 21
          }
        },
        "18": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 92,
            column: 18
          }
        },
        "19": {
          start: {
            line: 96,
            column: 6
          },
          end: {
            line: 96,
            column: 22
          }
        },
        "20": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 24
          }
        },
        "21": {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 50
          }
        },
        "22": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 71
          }
        },
        "23": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 55
          }
        },
        "24": {
          start: {
            line: 115,
            column: 6
          },
          end: {
            line: 115,
            column: 21
          }
        },
        "25": {
          start: {
            line: 119,
            column: 19
          },
          end: {
            line: 119,
            column: 42
          }
        },
        "26": {
          start: {
            line: 122,
            column: 6
          },
          end: {
            line: 122,
            column: 72
          }
        },
        "27": {
          start: {
            line: 123,
            column: 20
          },
          end: {
            line: 123,
            column: 38
          }
        },
        "28": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 126,
            column: 7
          }
        },
        "29": {
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 125,
            column: 44
          }
        },
        "30": {
          start: {
            line: 127,
            column: 6
          },
          end: {
            line: 127,
            column: 66
          }
        },
        "31": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 129,
            column: 61
          }
        },
        "32": {
          start: {
            line: 135,
            column: 6
          },
          end: {
            line: 136,
            column: 27
          }
        },
        "33": {
          start: {
            line: 140,
            column: 19
          },
          end: {
            line: 140,
            column: 42
          }
        },
        "34": {
          start: {
            line: 141,
            column: 23
          },
          end: {
            line: 141,
            column: 67
          }
        },
        "35": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 144,
            column: 7
          }
        },
        "36": {
          start: {
            line: 143,
            column: 8
          },
          end: {
            line: 143,
            column: 43
          }
        },
        "37": {
          start: {
            line: 150,
            column: 6
          },
          end: {
            line: 169,
            column: 8
          }
        },
        "38": {
          start: {
            line: 151,
            column: 19
          },
          end: {
            line: 151,
            column: 41
          }
        },
        "39": {
          start: {
            line: 152,
            column: 24
          },
          end: {
            line: 152,
            column: 66
          }
        },
        "40": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 156,
            column: 9
          }
        },
        "41": {
          start: {
            line: 155,
            column: 10
          },
          end: {
            line: 155,
            column: 16
          }
        },
        "42": {
          start: {
            line: 158,
            column: 8
          },
          end: {
            line: 161,
            column: 9
          }
        },
        "43": {
          start: {
            line: 159,
            column: 10
          },
          end: {
            line: 159,
            column: 43
          }
        },
        "44": {
          start: {
            line: 160,
            column: 10
          },
          end: {
            line: 160,
            column: 38
          }
        },
        "45": {
          start: {
            line: 163,
            column: 8
          },
          end: {
            line: 168,
            column: 9
          }
        },
        "46": {
          start: {
            line: 164,
            column: 10
          },
          end: {
            line: 166,
            column: 11
          }
        },
        "47": {
          start: {
            line: 165,
            column: 12
          },
          end: {
            line: 165,
            column: 62
          }
        },
        "48": {
          start: {
            line: 167,
            column: 10
          },
          end: {
            line: 167,
            column: 24
          }
        },
        "49": {
          start: {
            line: 179,
            column: 2
          },
          end: {
            line: 179,
            column: 39
          }
        },
        "50": {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 34
          }
        },
        "51": {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 184,
            column: 3
          }
        },
        "52": {
          start: {
            line: 182,
            column: 4
          },
          end: {
            line: 182,
            column: 35
          }
        },
        "53": {
          start: {
            line: 183,
            column: 4
          },
          end: {
            line: 183,
            column: 35
          }
        },
        "54": {
          start: {
            line: 186,
            column: 2
          },
          end: {
            line: 186,
            column: 16
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 11,
              column: 17
            },
            end: {
              line: 11,
              column: 18
            }
          },
          loc: {
            start: {
              line: 11,
              column: 24
            },
            end: {
              line: 187,
              column: 1
            }
          },
          line: 11
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 75,
              column: 4
            },
            end: {
              line: 75,
              column: 5
            }
          },
          loc: {
            start: {
              line: 75,
              column: 25
            },
            end: {
              line: 77,
              column: 5
            }
          },
          line: 75
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 79,
              column: 4
            },
            end: {
              line: 79,
              column: 5
            }
          },
          loc: {
            start: {
              line: 79,
              column: 25
            },
            end: {
              line: 81,
              column: 5
            }
          },
          line: 79
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 83,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          },
          loc: {
            start: {
              line: 83,
              column: 22
            },
            end: {
              line: 85,
              column: 5
            }
          },
          line: 83
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 87,
              column: 4
            },
            end: {
              line: 87,
              column: 5
            }
          },
          loc: {
            start: {
              line: 87,
              column: 26
            },
            end: {
              line: 89,
              column: 5
            }
          },
          line: 87
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 91,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          },
          loc: {
            start: {
              line: 91,
              column: 23
            },
            end: {
              line: 93,
              column: 5
            }
          },
          line: 91
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 95,
              column: 4
            },
            end: {
              line: 95,
              column: 5
            }
          },
          loc: {
            start: {
              line: 95,
              column: 27
            },
            end: {
              line: 97,
              column: 5
            }
          },
          line: 95
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 99,
              column: 4
            },
            end: {
              line: 99,
              column: 5
            }
          },
          loc: {
            start: {
              line: 99,
              column: 29
            },
            end: {
              line: 101,
              column: 5
            }
          },
          line: 99
        },
        "8": {
          name: "(anonymous_8)",
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
              column: 20
            },
            end: {
              line: 107,
              column: 5
            }
          },
          line: 105
        },
        "9": {
          name: "(anonymous_9)",
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
              column: 35
            },
            end: {
              line: 111,
              column: 5
            }
          },
          line: 109
        },
        "10": {
          name: "(anonymous_10)",
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
              column: 20
            },
            end: {
              line: 116,
              column: 5
            }
          },
          line: 113
        },
        "11": {
          name: "(anonymous_11)",
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
              column: 17
            },
            end: {
              line: 130,
              column: 5
            }
          },
          line: 118
        },
        "12": {
          name: "(anonymous_12)",
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
              column: 18
            },
            end: {
              line: 137,
              column: 5
            }
          },
          line: 134
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 139,
              column: 4
            },
            end: {
              line: 139,
              column: 5
            }
          },
          loc: {
            start: {
              line: 139,
              column: 21
            },
            end: {
              line: 145,
              column: 5
            }
          },
          line: 139
        },
        "14": {
          name: "(anonymous_14)",
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
              column: 36
            },
            end: {
              line: 170,
              column: 5
            }
          },
          line: 149
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 150,
              column: 23
            },
            end: {
              line: 150,
              column: 24
            }
          },
          loc: {
            start: {
              line: 150,
              column: 35
            },
            end: {
              line: 169,
              column: 7
            }
          },
          line: 150
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 181,
              column: 26
            },
            end: {
              line: 181,
              column: 27
            }
          },
          loc: {
            start: {
              line: 181,
              column: 38
            },
            end: {
              line: 184,
              column: 3
            }
          },
          line: 181
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 29,
              column: 16
            },
            end: {
              line: 29,
              column: 48
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 29,
              column: 32
            },
            end: {
              line: 29,
              column: 38
            }
          }, {
            start: {
              line: 29,
              column: 41
            },
            end: {
              line: 29,
              column: 48
            }
          }],
          line: 29
        },
        "1": {
          loc: {
            start: {
              line: 106,
              column: 13
            },
            end: {
              line: 106,
              column: 50
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 106,
              column: 13
            },
            end: {
              line: 106,
              column: 28
            }
          }, {
            start: {
              line: 106,
              column: 32
            },
            end: {
              line: 106,
              column: 50
            }
          }],
          line: 106
        },
        "2": {
          loc: {
            start: {
              line: 114,
              column: 17
            },
            end: {
              line: 114,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 114,
              column: 17
            },
            end: {
              line: 114,
              column: 25
            }
          }, {
            start: {
              line: 114,
              column: 29
            },
            end: {
              line: 114,
              column: 55
            }
          }],
          line: 114
        },
        "3": {
          loc: {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }, {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }],
          line: 124
        },
        "4": {
          loc: {
            start: {
              line: 135,
              column: 13
            },
            end: {
              line: 136,
              column: 27
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 135,
              column: 13
            },
            end: {
              line: 135,
              column: 54
            }
          }, {
            start: {
              line: 136,
              column: 8
            },
            end: {
              line: 136,
              column: 27
            }
          }],
          line: 135
        },
        "5": {
          loc: {
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }, {
            start: {
              line: 142,
              column: 6
            },
            end: {
              line: 144,
              column: 7
            }
          }],
          line: 142
        },
        "6": {
          loc: {
            start: {
              line: 142,
              column: 10
            },
            end: {
              line: 142,
              column: 50
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 142,
              column: 10
            },
            end: {
              line: 142,
              column: 27
            }
          }, {
            start: {
              line: 142,
              column: 31
            },
            end: {
              line: 142,
              column: 50
            }
          }],
          line: 142
        },
        "7": {
          loc: {
            start: {
              line: 152,
              column: 24
            },
            end: {
              line: 152,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 152,
              column: 53
            },
            end: {
              line: 152,
              column: 59
            }
          }, {
            start: {
              line: 152,
              column: 62
            },
            end: {
              line: 152,
              column: 66
            }
          }],
          line: 152
        },
        "8": {
          loc: {
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          }, {
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          }],
          line: 154
        },
        "9": {
          loc: {
            start: {
              line: 154,
              column: 12
            },
            end: {
              line: 154,
              column: 48
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 154,
              column: 12
            },
            end: {
              line: 154,
              column: 17
            }
          }, {
            start: {
              line: 154,
              column: 21
            },
            end: {
              line: 154,
              column: 48
            }
          }],
          line: 154
        },
        "10": {
          loc: {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          }, {
            start: {
              line: 158,
              column: 8
            },
            end: {
              line: 161,
              column: 9
            }
          }],
          line: 158
        },
        "11": {
          loc: {
            start: {
              line: 163,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 163,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          }, {
            start: {
              line: 163,
              column: 8
            },
            end: {
              line: 168,
              column: 9
            }
          }],
          line: 163
        },
        "12": {
          loc: {
            start: {
              line: 164,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 164,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          }, {
            start: {
              line: 164,
              column: 10
            },
            end: {
              line: 166,
              column: 11
            }
          }],
          line: 164
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
        "54": 0
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
        "16": 0
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
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = (cov_1xvm35cq46.s[0]++, function ($$$1) {
    cov_1xvm35cq46.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_1xvm35cq46.s[1]++, 'popover');
    var VERSION = (cov_1xvm35cq46.s[2]++, '4.1.3');
    var DATA_KEY = (cov_1xvm35cq46.s[3]++, 'bs.popover');
    var EVENT_KEY = (cov_1xvm35cq46.s[4]++, "." + DATA_KEY);
    var JQUERY_NO_CONFLICT = (cov_1xvm35cq46.s[5]++, $$$1.fn[NAME]);
    var CLASS_PREFIX = (cov_1xvm35cq46.s[6]++, 'bs-popover');
    var BSCLS_PREFIX_REGEX = (cov_1xvm35cq46.s[7]++, new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g'));
    var RTL = (cov_1xvm35cq46.s[8]++, document.documentElement.dir === 'rtl');
    var Default = (cov_1xvm35cq46.s[9]++, _objectSpread({}, Tooltip.Default, {
      placement: RTL === 'rtl' ? (cov_1xvm35cq46.b[0][0]++, 'left') : (cov_1xvm35cq46.b[0][1]++, 'right'),
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    }));
    var DefaultType = (cov_1xvm35cq46.s[10]++, _objectSpread({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    }));
    var ClassName = (cov_1xvm35cq46.s[11]++, {
      FADE: 'fade',
      SHOW: 'show'
    });
    var Selector = (cov_1xvm35cq46.s[12]++, {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    });
    var Event = (cov_1xvm35cq46.s[13]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Popover =
    /*#__PURE__*/
    function (_ref) {
      _inheritsLoose(Popover, _ref);

      function Popover() {
        return _ref.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // Overrides
      _proto.isWithContent = function isWithContent() {
        cov_1xvm35cq46.f[8]++;
        cov_1xvm35cq46.s[21]++;
        return (cov_1xvm35cq46.b[1][0]++, this.getTitle()) || (cov_1xvm35cq46.b[1][1]++, this._getContent());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        cov_1xvm35cq46.f[9]++;
        cov_1xvm35cq46.s[22]++;
        $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        cov_1xvm35cq46.f[10]++;
        cov_1xvm35cq46.s[23]++;
        this.tip = (cov_1xvm35cq46.b[2][0]++, this.tip) || (cov_1xvm35cq46.b[2][1]++, $$$1(this.config.template)[0]);
        cov_1xvm35cq46.s[24]++;
        return this.tip;
      };

      _proto.setContent = function setContent() {
        cov_1xvm35cq46.f[11]++;
        var $tip = (cov_1xvm35cq46.s[25]++, $$$1(this.getTipElement())); // We use append for html objects to maintain js events

        cov_1xvm35cq46.s[26]++;
        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
        var content = (cov_1xvm35cq46.s[27]++, this._getContent());
        cov_1xvm35cq46.s[28]++;

        if (typeof content === 'function') {
          cov_1xvm35cq46.b[3][0]++;
          cov_1xvm35cq46.s[29]++;
          content = content.call(this.element);
        } else {
          cov_1xvm35cq46.b[3][1]++;
        }

        cov_1xvm35cq46.s[30]++;
        this.setElementContent($tip.find(Selector.CONTENT), content);
        cov_1xvm35cq46.s[31]++;
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      }; // Private


      _proto._getContent = function _getContent() {
        cov_1xvm35cq46.f[12]++;
        cov_1xvm35cq46.s[32]++;
        return (cov_1xvm35cq46.b[4][0]++, this.element.getAttribute('data-content')) || (cov_1xvm35cq46.b[4][1]++, this.config.content);
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        cov_1xvm35cq46.f[13]++;
        var $tip = (cov_1xvm35cq46.s[33]++, $$$1(this.getTipElement()));
        var tabClass = (cov_1xvm35cq46.s[34]++, $tip.attr('class').match(BSCLS_PREFIX_REGEX));
        cov_1xvm35cq46.s[35]++;

        if ((cov_1xvm35cq46.b[6][0]++, tabClass !== null) && (cov_1xvm35cq46.b[6][1]++, tabClass.length > 0)) {
          cov_1xvm35cq46.b[5][0]++;
          cov_1xvm35cq46.s[36]++;
          $tip.removeClass(tabClass.join(''));
        } else {
          cov_1xvm35cq46.b[5][1]++;
        }
      }; // Static


      Popover._jQueryInterface = function _jQueryInterface(config) {
        cov_1xvm35cq46.f[14]++;
        cov_1xvm35cq46.s[37]++;
        return this.each(function () {
          cov_1xvm35cq46.f[15]++;
          var data = (cov_1xvm35cq46.s[38]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_1xvm35cq46.s[39]++, typeof config === 'object' ? (cov_1xvm35cq46.b[7][0]++, config) : (cov_1xvm35cq46.b[7][1]++, null));

          cov_1xvm35cq46.s[40]++;

          if ((cov_1xvm35cq46.b[9][0]++, !data) && (cov_1xvm35cq46.b[9][1]++, /destroy|hide/.test(config))) {
            cov_1xvm35cq46.b[8][0]++;
            cov_1xvm35cq46.s[41]++;
            return;
          } else {
            cov_1xvm35cq46.b[8][1]++;
          }

          cov_1xvm35cq46.s[42]++;

          if (!data) {
            cov_1xvm35cq46.b[10][0]++;
            cov_1xvm35cq46.s[43]++;
            data = new Popover(this, _config);
            cov_1xvm35cq46.s[44]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_1xvm35cq46.b[10][1]++;
          }

          cov_1xvm35cq46.s[45]++;

          if (typeof config === 'string') {
            cov_1xvm35cq46.b[11][0]++;
            cov_1xvm35cq46.s[46]++;

            if (typeof data[config] === 'undefined') {
              cov_1xvm35cq46.b[12][0]++;
              cov_1xvm35cq46.s[47]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_1xvm35cq46.b[12][1]++;
            }

            cov_1xvm35cq46.s[48]++;
            data[config]();
          } else {
            cov_1xvm35cq46.b[11][1]++;
          }
        });
      };

      _createClass(Popover, null, [{
        key: "VERSION",
        // Getters
        get: function get() {
          cov_1xvm35cq46.f[1]++;
          cov_1xvm35cq46.s[14]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_1xvm35cq46.f[2]++;
          cov_1xvm35cq46.s[15]++;
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          cov_1xvm35cq46.f[3]++;
          cov_1xvm35cq46.s[16]++;
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          cov_1xvm35cq46.f[4]++;
          cov_1xvm35cq46.s[17]++;
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          cov_1xvm35cq46.f[5]++;
          cov_1xvm35cq46.s[18]++;
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          cov_1xvm35cq46.f[6]++;
          cov_1xvm35cq46.s[19]++;
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          cov_1xvm35cq46.f[7]++;
          cov_1xvm35cq46.s[20]++;
          return DefaultType;
        }
      }]);

      return Popover;
    }((Tooltip));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    cov_1xvm35cq46.s[49]++;
    $$$1.fn[NAME] = Popover._jQueryInterface;
    cov_1xvm35cq46.s[50]++;
    $$$1.fn[NAME].Constructor = Popover;
    cov_1xvm35cq46.s[51]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_1xvm35cq46.f[16]++;
      cov_1xvm35cq46.s[52]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_1xvm35cq46.s[53]++;
      return Popover._jQueryInterface;
    };

    cov_1xvm35cq46.s[54]++;
    return Popover;
  }($));

  return Popover;

})));
//# sourceMappingURL=popover.js.map
