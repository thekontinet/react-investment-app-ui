const fs = require('fs')
const handbars = require('handlebars')

const render = (filename, data) => {
    return new Promise(function(resolve, reject){
        fs.readFile(filename, function(err, html){
            if(err){
                return reject(err)
            } 
            const template = handbars.compile(html.toString())
            resolve(template(data))
        })
    })
}

module.exports = {render}