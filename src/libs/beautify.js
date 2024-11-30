const beautify = require('js-beautify').html
const fs = require('fs')

const args = process.argv.slice(2)
const path = args.shift() ?? 'index.html'
const html = fs.readFileSync(path, 'utf8')
const options = {indent_size: parseInt(args.shift()) ?? 2, space_in_empty_paren: true}
const beautifiedHtml = beautify(html, {...options})
fs.writeFile(path, beautifiedHtml, 'utf8', (err) => {
  if (err) {
    console.warn(err)
  }
  console.debug(path, 'has been beautified')
})
