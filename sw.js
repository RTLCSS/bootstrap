/* global workbox:false */

self.importScripts('docs/4.1/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "b8fa17478826fd5b82e7a7289028b947"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "ceb0cc3fdd7387b18042375e5b39b3fb"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "d8961af107b7f3475b0109ec093b16af"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "931fa0526800db22a083f397640c42d3"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "bf1507de1872357e1e4e7fd13919714a"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-outline.svg",
    "revision": "93998c8ffa206f4b730ef50ad20692c5"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-punchout.svg",
    "revision": "59cc410ba9e916189b9ea54f03bb4574"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-solid.svg",
    "revision": "ba23603c8668f4fe65dc2c7996053224"
  },
  {
    "url": "docs/4.1/assets/css/docs.min.css",
    "revision": "241d644e67d13ab29ea5e658051cbd6b"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "docs/4.1/assets/img/favicons/manifest.json",
    "revision": "c29cc62ce253308cabb1d2bceb023a3f"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "docs/4.1/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "426e00c049a15eb18c37bc88ca6746d9"
  },
  {
    "url": "docs/4.1/assets/js/docs.min.js",
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "docs/4.1/assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "docs/4.1/assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "docs/4.1/assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "docs/4.1/assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "docs/4.1/assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "docs/4.1/assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "docs/4.1/assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "docs/4.1/assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "docs/4.1/assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "e64859dbfe5730c18a8bffca75fd2ec1"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "693198d9dac91eb88784c4fd4e1c931e"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "fa4e01df73646d7ed60e13103244674e"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "069b0164c1d4e24381de0ecd92c9aaa8"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "f02a6d303a846f3e82f3d3775e7fe9f7"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "d6edcecf40e36dd5bbc8bae448c6f7af"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "dd0ca74900779deeccf0a2ce1f49f5d3"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "fa3523b681a7626eac19fcb1bda532d4"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "7f669c5c4a1cc52deca21a419e3f7bd3"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "8ca29fab59e052647d5c0955017e75f8"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "a27add6178ba870f3cf00cc409c7a303"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "31f66f287d5ede9159ca32a5cc61fc79"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "f2e43b5a0a6340638e9c502b4d6a7dd7"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "f5342270caf6547d97da1356ed861634"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "0f21777938487e950c9d52151ee20157"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "f0fd58eb3fc1b1f2a5deb35f3bac60ec"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "6f5e6c4f4f1b10b77744ccc9fa4a3f41"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "17d02e037899994a2a458c36b1e2b204"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "bc9e1e48474c5b40b337776fa9ec6b49"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "25c630cdf6fb006123d70c1380b92bf6"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "9c56be75cce4861f8ee30c8dc91ebde7"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "c5b97791ee300ab4b0892fc0fe6e305d"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "11cfa7ac8d041acfeb74e5e4e7f1fb0e"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "5620bb886dbf8736defbdee9d46e098e"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "e648a9b8357d60f34e6841f4eaa8f382"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "0b8ee6b73fe73d9188b0272959592f0e"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "a50f6521e801246c60d0a2de81ad78bf"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "b61d0a1bdd15214c9eeddec116529f12"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "7f0b58e8fc79680f0b3403ef6b1c3dfe"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "bdeeedfcf495bbca53849e0283a27036"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.css",
    "revision": "ff2874cf2b810904a86e75fb662dddf9"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-grid.min.css",
    "revision": "71671e5000bc7347d6080c92b0bfeeb4"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.css",
    "revision": "4706ee708910162ef3931d10be684ddc"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap-reboot.min.css",
    "revision": "d27c2a08a70eb08e7374fd22d0d70ff0"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.css",
    "revision": "7bf845a5cc605d4b2a63534105072c9f"
  },
  {
    "url": "docs/4.1/dist/css/bootstrap.min.css",
    "revision": "c5390a0f69e860a010a7fa8b2d9989e9"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap-grid.css",
    "revision": "c53347984b943557bded8c59ac229b4a"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap-grid.min.css",
    "revision": "47845c158528ca00b138d9d579e9d581"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap-reboot.css",
    "revision": "1f0731b41a5741f41e3f15b883310e42"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap-reboot.min.css",
    "revision": "38ca54dcee519b2e85e523934ab141ed"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap.css",
    "revision": "e1fe1e32f8d2bae14dbe4c222b1320cd"
  },
  {
    "url": "docs/4.1/dist/css/rtl/bootstrap.min.css",
    "revision": "1056ef0ab33c6ea286f7dc830b607190"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.js",
    "revision": "8c13718d2c25cdd92d321e1c8ed2031f"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.bundle.min.js",
    "revision": "cfefe6dd90ce42edfe6c48d0217b77f4"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.js",
    "revision": "f06206fbfe2da2347e41c51dd2886984"
  },
  {
    "url": "docs/4.1/dist/js/bootstrap.min.js",
    "revision": "7f98327071b95bfc512f2bc79cf2d559"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e4ba9fea61d86fdbef07c38ee99e31e6"
  },
  {
    "url": "docs/4.1/examples/album/album.rtl.css",
    "revision": "abb24e51c2ac83f8cfaccf7a5c056e07"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "ef0fa0258c079c7b5476cbae6877d7f6"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "84a7a42a175394cf60e45e2e738d393c"
  },
  {
    "url": "docs/4.1/examples/blog/blog.rtl.css",
    "revision": "9f0b73097bf95c4fcab5c42a671cc074"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "2b2f9578654a8ada4157ab583860f4dd"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "cb2ad8a3dbb8e8f071ccafe35a1e015e"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.rtl.css",
    "revision": "4ad961d31f30967546c9b7908f9ce5ac"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "0a86cc196d0ef98f01c285513b82760d"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "79855e4b75257b718697479f3ce4f36a"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.rtl.css",
    "revision": "2b90f853ee599ab04cf46ee463bd49b9"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "eed8371a05e86644ff1e36ca82d8791a"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "fa9f66209baaaef74f321cab19c12e58"
  },
  {
    "url": "docs/4.1/examples/cover/cover.rtl.css",
    "revision": "95d40b5b98a406df11eb4637853f3483"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "e692e3f651ecb1072e66560b55a4df20"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "67a5867e6e0bf4a0e1d9bb167d5193ef"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.rtl.css",
    "revision": "f4b75dba6b709eea7bc2ac674d144d1b"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "d6d3506f54b6e99d2117dd34716d0d93"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "4e3cfddff7b4093e597e1d18ff8417ed"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.rtl.css",
    "revision": "01a0843952e0ef7f3e34db28e03d98d2"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "45c58b8819d364c567bf8446fcdb1720"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "116f4e5077e8c68a3c61811af9339f1c"
  },
  {
    "url": "docs/4.1/examples/grid/grid.rtl.css",
    "revision": "32f1151a1bcea38915a89e08b4608141"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "39ad2a34e5bca6e02dbc67f534507c9a"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "2c54049f11bfc679b6ddcaa515a62f09"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "57948aaf747c90264fda40ce1bef9235"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "366a8d964c019c149a1048f46a331482"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.rtl.css",
    "revision": "9d066c104ab7f75300e1f175b89aa730"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "72e10a12153f5aa1d623739ea7d863c4"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "18123f7f303432a81d7f24b27a859c67"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "213565c1d5037665e1aed3e7708eacc6"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.rtl.css",
    "revision": "08d2928e5fc6a066fcb0d1163295aa47"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "2328c3bcb070594018a04a8cda81f514"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "103f263c38f2547a94f40917df9d0aca"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.rtl.css",
    "revision": "ca7ed66d17f21edb592eeb9ecf65b2e2"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "776b51ea8050836653273b122d2d4a1e"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "e093adf4070cb8eeb0821ab1f5c0e413"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.rtl.css",
    "revision": "177fe83386a70e87996293b51c445a90"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "82ea9879274e2db52a2aa4fe1fb084b5"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "d871a4514dd34f9e383e09535e49230a"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.rtl.css",
    "revision": "b693b886cf3d6960a4e7a278d07f9197"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "ea597afad591fd5010f64412c4e170ec"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "7750707739a80b13b6b353ecc7573a37"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.rtl.css",
    "revision": "0b589afacc974e969c12843e17a5612e"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "f7fc1c2781e99900e534e18b79e7a8d4"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "94870b4577df1bd13b1089ec25728e9b"
  },
  {
    "url": "docs/4.1/examples/product/product.rtl.css",
    "revision": "7c8cc6de934df84aacb9cc1751eb32b5"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "36a30f94a1b50ab31d8feda860682414"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "08aeb97c3883803e27cc7cd39ed77f83"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.rtl.css",
    "revision": "f2ab743bcdd6e820a72c7a668b092e6c"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "d6eb28aeefda0e86551eed0f93ade823"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "61fdce89357892ead162c359bdfa375f"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.rtl.css",
    "revision": "a96b3305f807e1c9480f0b6166825246"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "a4e44b6fc67e8588fd33bdf05bf937c5"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "f24999276da728c7c1f0bb906c53cd85"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.rtl.css",
    "revision": "74a5c8e4c0c768fba17c1021d76ada2b"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "97b60f944c63ecf15c19b2207e9fff43"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "f218771967a074ff407694837177e3c5"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.rtl.css",
    "revision": "b9cc6d6a6900b823ff1b826e900cc158"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "8223538d1ebcce888b63347b1ff637a7"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "31aca8b2f040bbcfa4c0f1a1ff58a50e"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.rtl.css",
    "revision": "4a48ec8037890eed8aa0139bd42a5fde"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "a0cfc949077a343b87e64f45a9640ebe"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "a474eb68a6dcdd46540f525edaf5f85e"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "cf2f1bc43f438ba8471fe731bf353b18"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "f387c2b57123a0756440a60bbf2f0e12"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "15d1cecb90a6ce96bcbecd0d5e261587"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "5469135773264b290da2554d85209485"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "4396be85c8bec676175a0a6851cddd35"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "2e8afd667ba617b9bc7547ca20fab5f1"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "6b3bac3902d92a625d68441b959df7a2"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "123cc33443fe1c6cb3853fd9838f9083"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "23bdc3548808c8f3a0f759c0b90a44fc"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "4875805e70e3acfd8546ebf150359723"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "74fc6d68548a0e81289378043375acc2"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "11bcf76c823ebadcf4c9c268aaf5b922"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "c209b1f2fd3ef0accd52f1e4ca4baaf9"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "ceb0cc3fdd7387b18042375e5b39b3fb"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "123cc33443fe1c6cb3853fd9838f9083"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "51db46efb15bcffda7f1942d9e41cd75"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "cfdf9781273912e208ddc7e01febdedb"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "b9cb5ec56ae22150d7514db398bc8e4d"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "0002b43eb845d8d96e5bad6d2ff9c66f"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "0bf73134769d47f78bb3e1b58d84225c"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "c25d318b8b784ab695556ba44f388775"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "ceb0cc3fdd7387b18042375e5b39b3fb"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "fd20095e2ca6115b5333d9bacb7f89d9"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "80de3ff5fdf6ee2078dac72b5da82354"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "a4174bc944980b737c22c7dc61375f4e"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "911608333888f4c0919de5b3337b1811"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "85af47faad0fd7a5367a952e709a3937"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "03e51b214597a9c294fa4dbe6853d1c9"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "6ab2ec75f402f457484403636e8ebe6e"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "dabfe5295b6a6662460d576b9eb5e225"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "32231ab83fa8566c0d9d0fb7a69c499d"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "332cd14b39cf628ba852679fa05a83ec"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "632091977d99d9c2f63809f766c12008"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "81eb921d2e29ce75c289436dbe108716"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "8fdc969bb6916bad6800544e183e7a8c"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "d7ac5c5f2e1c6d2cb307f334a83c3c42"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "50744d55851bc1b1e3f989946bc1f781"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "e02d83e2852b0ef476b4dbb764848a0b"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "026a4e89a2a3b97896948291b9397c17"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "bc205c22aafbd7a50661a3fc2096cee6"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "123cc33443fe1c6cb3853fd9838f9083"
  },
  {
    "url": "docs/index.html",
    "revision": "123cc33443fe1c6cb3853fd9838f9083"
  },
  {
    "url": "examples/index.html",
    "revision": "1e1b69defecfa6530a1ae7c60018f0fa"
  },
  {
    "url": "index.html",
    "revision": "24823c70ab34e7881f88ff770217a553"
  },
  {
    "url": "redirects.json",
    "revision": "4828305caeeb0746bf8db3588890b83b"
  }
])
