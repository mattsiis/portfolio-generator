const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and snd the error
            if(err) {
                reject(err);
                // return out of the function here
                return;
            }

            // if resolve
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and snd the error
            if(err) {
                reject(err);
                // return out of the function here
                return;
            }

            // if resolve
            resolve({
                ok: true,
                message: 'File copied!'
            });
        })
    })
}

module.exports = {writeFile, copyFile}