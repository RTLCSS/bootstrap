'use strict'

const glob = require('glob')
const pkg = require('../package.json')
const rtlcss = require('rtlcss')
const fs = require('fs')
const v = pkg.version.match(/\d+\.\d+/)[0]
// options is optional
glob(`site/docs/${v}/examples/**/*.css`, {
  ignore: `site/docs/${v}/examples/**/*.rtl.css`
}, (er, files) => {
  files.forEach((path) => {
    fs.writeFileSync(path.replace('.css', '.rtl.css'), rtlcss.process(fs.readFileSync(path)))
  })
})
