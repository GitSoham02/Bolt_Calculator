import 'dotenv/config';
import { getAllBolts } from './bolts.repo.js';
import { getAllPropertyClasses } from './property.repo.js';
import { getAllStrengthLimits } from './strength.repo.js';

const bolts = await getAllBolts();
const properties = await getAllPropertyClasses();
const strengths = await getAllStrengthLimits();

console.log('BOLTS', bolts);
console.log('PROPS', properties);
// console.log(properties);
// console.log(strengths);
