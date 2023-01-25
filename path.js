const path = require('path')

console.log(path.sep)

const filePath = path.join('/Contenet','sub','Test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)