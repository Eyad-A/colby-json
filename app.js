'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('events.json');
let results = JSON.parse(rawdata);

for (let key in results['events']) {
    console.log(Object.values(results['events'][key]));
}