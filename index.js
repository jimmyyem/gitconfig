// example.js

import { add, sub, addOneDay, sleep } from './lib/functions.js';
import { Person } from './lib/person.js';
import { getNasDaqData } from './lib/nasdaq.js';
import { formatDate } from './regex.js';

console.log(add(1,2), sub(1,2));

const person = new Person("kaka", 22);
console.log(person.toString());

await sleep(1000);

const today = new Date();
console.log(today.toISOString().split('T')[0], addOneDay(today));

await sleep(1000);

const nasdaqData = await getNasDaqData(today.toISOString().split('T')[0]);
console.log(nasdaqData);

console.log('Jan, Feb 1, 2024');