const fs = require('fs');
const moment = require('moment');

const logger = (productName, action) => {
    fs.readFile('log/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const log = JSON.parse(data);
            log.push({
                date: moment().format('MMMM Do YYYY, h:mm:ss a'), 
                action: action, 
                productName: productName,
            });
            fs.writeFile('log/stats.json', JSON.stringify(log, null, 4), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        } 
    })
}  

module.exports = logger;
