const fs = require('fs')

const a = fs.readFileSync(0)
const result = parseInt(a) * 2

console.log(result)