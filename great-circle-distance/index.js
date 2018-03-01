const fs = require('fs');
const text = fs.readFileSync('./customers.txt', 'utf-8');
const customers = text.split(/\n/).filter(v => v).map(c => JSON.parse(c));
const GreatCircleDistance = require('./great-circle-distance');

const customersWithin100km = new GreatCircleDistance(customers, 100);
customersWithin100km.sortByUserId().forEach(c => console.log(c));
