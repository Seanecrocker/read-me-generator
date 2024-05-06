const fs = require('fs');

function newFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created markdown!');
    });
}

module.exports = newFile;