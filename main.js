const utils = require('utils')

const query = 'Rollup'

utils.ajax('https://api.example.com?search=' + query).then(res => console.log(res))