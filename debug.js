var fs = require('fs');

fs.readFile('context.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

fs.rmdir('testDir', function (err) {
    if (err) {
        console.error(err);
    }
});