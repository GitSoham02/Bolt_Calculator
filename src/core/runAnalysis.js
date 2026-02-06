// The orchestrator file

import 'dotenv/config';
import { getAllBolts, getBoltByDesignation } from '../../lib/bolts.repo.js';
import {
  getAllPropertyClasses,
  getPropertyClassByName,
} from '../../lib/property.repo.js';
import {
  getAllStrengthLimits,
  getStrengthByUltimateTensile,
} from '../../lib/strength.repo.js';
import centralCalculations from './calculations/centralCalc.js';
import boltSelection from './decision/selectBolt.js';

/*
1. call central calculation function 
2. call bolt selection function 
3. If true => return true 
      false => reiterate / move to next bolt 
*/

const boltNames = [
  'M3',
  'M3.5',
  'M4',
  'M5',
  'M6',
  'M7',
  'M8',
  'M10',
  'M12',
  'M14',
  'M16',
  'M18',
  'M20',
  'M22',
  'M24',
  'M27',
  'M30',
  'M33',
  'M36',
  'M39',
];

const propertyGrades = [
  '4.6',
  '4.8',
  '5.6',
  '5.8',
  '6.8',
  '8.8',
  '9.8',
  '10.9',
  '12.9',
];

// const limits = [];

export default async function boltAnalysis() {
  for (let boltIndex = 0; boltIndex < boltNames.length; boltIndex++) {
    const curBolt = await getBoltByDesignation(boltNames[boltIndex]);

    for (let propIndex = 0; propIndex < propertyGrades.length; propIndex++) {
      const curBoltProperty = await getPropertyClassByName(
        propertyGrades[propIndex],
      );

      console.log(curBolt);
      console.log(curBoltProperty);

      // sample data
      const userData = {
        plateThickness: 16,
        externalLoad: 12000,
        preLoad: 20000,
        lateralLoad: 500,
        engagedThreadLength: 8,
        tensileStressArea: 58,
        youngsModulus: 21000,
      };

      // call central calculation
      const result = centralCalculations(userData, curBolt, curBoltProperty);
      // console.log('-------------------------');
      // console.log(result);

      const obtainedValues = result.obtainedValues;
      const limits = result.limitResults;

      // call selection logic
      const passResult = boltSelection(obtainedValues, limits);
      console.log('-------------------------');

      console.log(passResult);

      if (passResult == true) {
        console.log(limits);
        console.log(obtainedValues);
        return { curBolt, curBoltProperty, limits, obtainedValues };
        // finalBolt = curBolt;
        // finalProp = curBoltProperty;
        // break;
      }
    }
  }
  // console.log(finalBolt);
  // console.log(finalProp);
  // return { finalBolt, finalProp };
}
boltAnalysis();
