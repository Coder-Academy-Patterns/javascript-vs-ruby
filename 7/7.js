const FS = require('fs')
const Path = require('path')

console.log('Now:', new Date())
console.log('Today:', new Date().toDateString())


now = (new Date()).toISOString()
const filePath = Path.join(__dirname, 'timestamp.txt')
FS.writeFileSync(filePath, now)
