(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.Util = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var cov_1iu9zs9cnd = function () {
    var path = "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/util.js",
        hash = "db4afe4ad6871a6adaab6c11a77a616e31f42641",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/mk/Documents/GitHub/rtlcss-org/bootstrap/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "1": {
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 40
          }
        },
        "2": {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 25
          }
        },
        "3": {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 19,
            column: 38
          }
        },
        "4": {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 70
          }
        },
        "5": {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        "6": {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 33,
            column: 9
          }
        },
        "7": {
          start: {
            line: 32,
            column: 10
          },
          end: {
            line: 32,
            column: 63
          }
        },
        "8": {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 34,
            column: 24
          }
        },
        "9": {
          start: {
            line: 40,
            column: 17
          },
          end: {
            line: 40,
            column: 22
          }
        },
        "10": {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 44,
            column: 6
          }
        },
        "11": {
          start: {
            line: 43,
            column: 6
          },
          end: {
            line: 43,
            column: 19
          }
        },
        "12": {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 50,
            column: 16
          }
        },
        "13": {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 49,
            column: 7
          }
        },
        "14": {
          start: {
            line: 48,
            column: 8
          },
          end: {
            line: 48,
            column: 39
          }
        },
        "15": {
          start: {
            line: 52,
            column: 4
          },
          end: {
            line: 52,
            column: 15
          }
        },
        "16": {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 56,
            column: 53
          }
        },
        "17": {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 57,
            column: 73
          }
        },
        "18": {
          start: {
            line: 66,
            column: 15
          },
          end: {
            line: 145,
            column: 3
          }
        },
        "19": {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 74,
            column: 47
          }
        },
        "20": {
          start: {
            line: 73,
            column: 8
          },
          end: {
            line: 73,
            column: 45
          }
        },
        "21": {
          start: {
            line: 75,
            column: 6
          },
          end: {
            line: 75,
            column: 19
          }
        },
        "22": {
          start: {
            line: 79,
            column: 21
          },
          end: {
            line: 79,
            column: 56
          }
        },
        "23": {
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 82,
            column: 7
          }
        },
        "24": {
          start: {
            line: 81,
            column: 8
          },
          end: {
            line: 81,
            column: 53
          }
        },
        "25": {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 88,
            column: 7
          }
        },
        "26": {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 85,
            column: 65
          }
        },
        "27": {
          start: {
            line: 87,
            column: 8
          },
          end: {
            line: 87,
            column: 19
          }
        },
        "28": {
          start: {
            line: 92,
            column: 6
          },
          end: {
            line: 94,
            column: 7
          }
        },
        "29": {
          start: {
            line: 93,
            column: 8
          },
          end: {
            line: 93,
            column: 16
          }
        },
        "30": {
          start: {
            line: 97,
            column: 31
          },
          end: {
            line: 97,
            column: 68
          }
        },
        "31": {
          start: {
            line: 98,
            column: 38
          },
          end: {
            line: 98,
            column: 68
          }
        },
        "32": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 103,
            column: 7
          }
        },
        "33": {
          start: {
            line: 102,
            column: 8
          },
          end: {
            line: 102,
            column: 16
          }
        },
        "34": {
          start: {
            line: 106,
            column: 6
          },
          end: {
            line: 106,
            column: 59
          }
        },
        "35": {
          start: {
            line: 108,
            column: 6
          },
          end: {
            line: 108,
            column: 69
          }
        },
        "36": {
          start: {
            line: 112,
            column: 6
          },
          end: {
            line: 112,
            column: 33
          }
        },
        "37": {
          start: {
            line: 116,
            column: 6
          },
          end: {
            line: 116,
            column: 40
          }
        },
        "38": {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 121,
            column: 36
          }
        },
        "39": {
          start: {
            line: 125,
            column: 6
          },
          end: {
            line: 125,
            column: 37
          }
        },
        "40": {
          start: {
            line: 129,
            column: 6
          },
          end: {
            line: 143,
            column: 7
          }
        },
        "41": {
          start: {
            line: 130,
            column: 8
          },
          end: {
            line: 142,
            column: 9
          }
        },
        "42": {
          start: {
            line: 131,
            column: 32
          },
          end: {
            line: 131,
            column: 53
          }
        },
        "43": {
          start: {
            line: 132,
            column: 32
          },
          end: {
            line: 132,
            column: 48
          }
        },
        "44": {
          start: {
            line: 133,
            column: 32
          },
          end: {
            line: 134,
            column: 39
          }
        },
        "45": {
          start: {
            line: 136,
            column: 10
          },
          end: {
            line: 141,
            column: 11
          }
        },
        "46": {
          start: {
            line: 137,
            column: 12
          },
          end: {
            line: 140,
            column: 54
          }
        },
        "47": {
          start: {
            line: 147,
            column: 2
          },
          end: {
            line: 147,
            column: 27
          }
        },
        "48": {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 149,
            column: 13
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 10,
              column: 14
            },
            end: {
              line: 10,
              column: 15
            }
          },
          loc: {
            start: {
              line: 10,
              column: 21
            },
            end: {
              line: 150,
              column: 1
            }
          },
          line: 10
        },
        "1": {
          name: "toType",
          decl: {
            start: {
              line: 22,
              column: 11
            },
            end: {
              line: 22,
              column: 17
            }
          },
          loc: {
            start: {
              line: 22,
              column: 23
            },
            end: {
              line: 24,
              column: 3
            }
          },
          line: 22
        },
        "2": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 26,
              column: 11
            },
            end: {
              line: 26,
              column: 39
            }
          },
          loc: {
            start: {
              line: 26,
              column: 42
            },
            end: {
              line: 37,
              column: 3
            }
          },
          line: 26
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 39,
              column: 11
            },
            end: {
              line: 39,
              column: 32
            }
          },
          loc: {
            start: {
              line: 39,
              column: 43
            },
            end: {
              line: 53,
              column: 3
            }
          },
          line: 39
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 42,
              column: 37
            },
            end: {
              line: 42,
              column: 38
            }
          },
          loc: {
            start: {
              line: 42,
              column: 43
            },
            end: {
              line: 44,
              column: 5
            }
          },
          line: 42
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 46,
              column: 15
            },
            end: {
              line: 46,
              column: 16
            }
          },
          loc: {
            start: {
              line: 46,
              column: 21
            },
            end: {
              line: 50,
              column: 5
            }
          },
          line: 46
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 55,
              column: 11
            },
            end: {
              line: 55,
              column: 34
            }
          },
          loc: {
            start: {
              line: 55,
              column: 37
            },
            end: {
              line: 58,
              column: 3
            }
          },
          line: 55
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 31,
              column: 8
            },
            end: {
              line: 33,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 31,
              column: 8
            },
            end: {
              line: 33,
              column: 9
            }
          }, {
            start: {
              line: 31,
              column: 8
            },
            end: {
              line: 33,
              column: 9
            }
          }],
          line: 31
        },
        "1": {
          loc: {
            start: {
              line: 47,
              column: 6
            },
            end: {
              line: 49,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 47,
              column: 6
            },
            end: {
              line: 49,
              column: 7
            }
          }, {
            start: {
              line: 47,
              column: 6
            },
            end: {
              line: 49,
              column: 7
            }
          }],
          line: 47
        },
        "2": {
          loc: {
            start: {
              line: 80,
              column: 6
            },
            end: {
              line: 82,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 80,
              column: 6
            },
            end: {
              line: 82,
              column: 7
            }
          }, {
            start: {
              line: 80,
              column: 6
            },
            end: {
              line: 82,
              column: 7
            }
          }],
          line: 80
        },
        "3": {
          loc: {
            start: {
              line: 80,
              column: 10
            },
            end: {
              line: 80,
              column: 39
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 80,
              column: 10
            },
            end: {
              line: 80,
              column: 19
            }
          }, {
            start: {
              line: 80,
              column: 23
            },
            end: {
              line: 80,
              column: 39
            }
          }],
          line: 80
        },
        "4": {
          loc: {
            start: {
              line: 81,
              column: 19
            },
            end: {
              line: 81,
              column: 53
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 81,
              column: 19
            },
            end: {
              line: 81,
              column: 47
            }
          }, {
            start: {
              line: 81,
              column: 51
            },
            end: {
              line: 81,
              column: 53
            }
          }],
          line: 81
        },
        "5": {
          loc: {
            start: {
              line: 85,
              column: 15
            },
            end: {
              line: 85,
              column: 65
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 85,
              column: 50
            },
            end: {
              line: 85,
              column: 58
            }
          }, {
            start: {
              line: 85,
              column: 61
            },
            end: {
              line: 85,
              column: 65
            }
          }],
          line: 85
        },
        "6": {
          loc: {
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          }, {
            start: {
              line: 92,
              column: 6
            },
            end: {
              line: 94,
              column: 7
            }
          }],
          line: 92
        },
        "7": {
          loc: {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }, {
            start: {
              line: 101,
              column: 6
            },
            end: {
              line: 103,
              column: 7
            }
          }],
          line: 101
        },
        "8": {
          loc: {
            start: {
              line: 125,
              column: 14
            },
            end: {
              line: 125,
              column: 27
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 125,
              column: 14
            },
            end: {
              line: 125,
              column: 20
            }
          }, {
            start: {
              line: 125,
              column: 24
            },
            end: {
              line: 125,
              column: 27
            }
          }],
          line: 125
        },
        "9": {
          loc: {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          }, {
            start: {
              line: 130,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          }],
          line: 130
        },
        "10": {
          loc: {
            start: {
              line: 133,
              column: 32
            },
            end: {
              line: 134,
              column: 39
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 134,
              column: 14
            },
            end: {
              line: 134,
              column: 23
            }
          }, {
            start: {
              line: 134,
              column: 26
            },
            end: {
              line: 134,
              column: 39
            }
          }],
          line: 133
        },
        "11": {
          loc: {
            start: {
              line: 133,
              column: 32
            },
            end: {
              line: 133,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 133,
              column: 32
            },
            end: {
              line: 133,
              column: 37
            }
          }, {
            start: {
              line: 133,
              column: 41
            },
            end: {
              line: 133,
              column: 62
            }
          }],
          line: 133
        },
        "12": {
          loc: {
            start: {
              line: 136,
              column: 10
            },
            end: {
              line: 141,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 136,
              column: 10
            },
            end: {
              line: 141,
              column: 11
            }
          }, {
            start: {
              line: 136,
              column: 10
            },
            end: {
              line: 141,
              column: 11
            }
          }],
          line: 136
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
        "48": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0
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
   * Bootstrap (v4.1.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = (cov_1iu9zs9cnd.s[0]++, function ($$$1) {
    cov_1iu9zs9cnd.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = (cov_1iu9zs9cnd.s[1]++, 'transitionend');
    var MAX_UID = (cov_1iu9zs9cnd.s[2]++, 1000000);
    var MILLISECONDS_MULTIPLIER = (cov_1iu9zs9cnd.s[3]++, 1000); // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      cov_1iu9zs9cnd.f[1]++;
      cov_1iu9zs9cnd.s[4]++;
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      cov_1iu9zs9cnd.f[2]++;
      cov_1iu9zs9cnd.s[5]++;
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          cov_1iu9zs9cnd.s[6]++;

          if ($$$1(event.target).is(this)) {
            cov_1iu9zs9cnd.b[0][0]++;
            cov_1iu9zs9cnd.s[7]++;
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          } else {
            cov_1iu9zs9cnd.b[0][1]++;
          }

          cov_1iu9zs9cnd.s[8]++;
          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      cov_1iu9zs9cnd.f[3]++;
      var called = (cov_1iu9zs9cnd.s[9]++, false);
      cov_1iu9zs9cnd.s[10]++;
      $$$1(this).one(Util.TRANSITION_END, function () {
        cov_1iu9zs9cnd.f[4]++;
        cov_1iu9zs9cnd.s[11]++;
        called = true;
      });
      cov_1iu9zs9cnd.s[12]++;
      setTimeout(function () {
        cov_1iu9zs9cnd.f[5]++;
        cov_1iu9zs9cnd.s[13]++;

        if (!called) {
          cov_1iu9zs9cnd.b[1][0]++;
          cov_1iu9zs9cnd.s[14]++;
          Util.triggerTransitionEnd(_this);
        } else {
          cov_1iu9zs9cnd.b[1][1]++;
        }
      }, duration);
      cov_1iu9zs9cnd.s[15]++;
      return this;
    }

    function setTransitionEndSupport() {
      cov_1iu9zs9cnd.f[6]++;
      cov_1iu9zs9cnd.s[16]++;
      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
      cov_1iu9zs9cnd.s[17]++;
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = (cov_1iu9zs9cnd.s[18]++, {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        cov_1iu9zs9cnd.s[19]++;

        do {
          cov_1iu9zs9cnd.s[20]++;
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        cov_1iu9zs9cnd.s[21]++;
        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = (cov_1iu9zs9cnd.s[22]++, element.getAttribute('data-target'));
        cov_1iu9zs9cnd.s[23]++;

        if ((cov_1iu9zs9cnd.b[3][0]++, !selector) || (cov_1iu9zs9cnd.b[3][1]++, selector === '#')) {
          cov_1iu9zs9cnd.b[2][0]++;
          cov_1iu9zs9cnd.s[24]++;
          selector = (cov_1iu9zs9cnd.b[4][0]++, element.getAttribute('href')) || (cov_1iu9zs9cnd.b[4][1]++, '');
        } else {
          cov_1iu9zs9cnd.b[2][1]++;
        }

        cov_1iu9zs9cnd.s[25]++;

        try {
          cov_1iu9zs9cnd.s[26]++;
          return document.querySelector(selector) ? (cov_1iu9zs9cnd.b[5][0]++, selector) : (cov_1iu9zs9cnd.b[5][1]++, null);
        } catch (err) {
          cov_1iu9zs9cnd.s[27]++;
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        cov_1iu9zs9cnd.s[28]++;

        if (!element) {
          cov_1iu9zs9cnd.b[6][0]++;
          cov_1iu9zs9cnd.s[29]++;
          return 0;
        } else {
          cov_1iu9zs9cnd.b[6][1]++;
        } // Get transition-duration of the element


        var transitionDuration = (cov_1iu9zs9cnd.s[30]++, $$$1(element).css('transition-duration'));
        var floatTransitionDuration = (cov_1iu9zs9cnd.s[31]++, parseFloat(transitionDuration)); // Return 0 if element or transition duration is not found

        cov_1iu9zs9cnd.s[32]++;

        if (!floatTransitionDuration) {
          cov_1iu9zs9cnd.b[7][0]++;
          cov_1iu9zs9cnd.s[33]++;
          return 0;
        } else {
          cov_1iu9zs9cnd.b[7][1]++;
        } // If multiple durations are defined, take the first


        cov_1iu9zs9cnd.s[34]++;
        transitionDuration = transitionDuration.split(',')[0];
        cov_1iu9zs9cnd.s[35]++;
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        cov_1iu9zs9cnd.s[36]++;
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        cov_1iu9zs9cnd.s[37]++;
        $$$1(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        cov_1iu9zs9cnd.s[38]++;
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        cov_1iu9zs9cnd.s[39]++;
        return ((cov_1iu9zs9cnd.b[8][0]++, obj[0]) || (cov_1iu9zs9cnd.b[8][1]++, obj)).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        cov_1iu9zs9cnd.s[40]++;

        for (var property in configTypes) {
          cov_1iu9zs9cnd.s[41]++;

          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            cov_1iu9zs9cnd.b[9][0]++;
            var expectedTypes = (cov_1iu9zs9cnd.s[42]++, configTypes[property]);
            var value = (cov_1iu9zs9cnd.s[43]++, config[property]);
            var valueType = (cov_1iu9zs9cnd.s[44]++, (cov_1iu9zs9cnd.b[11][0]++, value) && (cov_1iu9zs9cnd.b[11][1]++, Util.isElement(value)) ? (cov_1iu9zs9cnd.b[10][0]++, 'element') : (cov_1iu9zs9cnd.b[10][1]++, toType(value)));
            cov_1iu9zs9cnd.s[45]++;

            if (!new RegExp(expectedTypes).test(valueType)) {
              cov_1iu9zs9cnd.b[12][0]++;
              cov_1iu9zs9cnd.s[46]++;
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            } else {
              cov_1iu9zs9cnd.b[12][1]++;
            }
          } else {
            cov_1iu9zs9cnd.b[9][1]++;
          }
        }
      }
    });
    cov_1iu9zs9cnd.s[47]++;
    setTransitionEndSupport();
    cov_1iu9zs9cnd.s[48]++;
    return Util;
  }($));

  return Util;

})));
//# sourceMappingURL=util.js.map
