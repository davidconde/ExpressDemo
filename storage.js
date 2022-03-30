const fs = require("fs");

const FILE_NAME = './my-storage';

const saveKeys = async (key, value) => {
    
    let existingContent = [];

    try {
        existingContent = await readKeys();
    } catch (error) {
        console.log("error reading file: ", error);
    }

    existingContent[key] = value;
    const stringRep = JSON.stringify(existingContent);
    

    fs.writeFile(FILE_NAME, stringRep, null, (err, data) => {

    });
}

const readKeys = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err)
                reject(err);    
            
            resolve(data);
        })
    })
}

module.exports = {
    readKeys,
    saveKeys
};