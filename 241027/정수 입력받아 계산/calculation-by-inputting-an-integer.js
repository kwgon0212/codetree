const fs = require('fs')

const a = parseInt(fs.readFileSync(0))

console.log(a * 2 + 3)