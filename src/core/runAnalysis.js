// // The orchestrator file

// import 'dotenv/config';
// import { getAllBolts, getBoltByDesignation } from '../../lib/bolts.repo.js';
// import {
//   getAllPropertyClasses,
//   getPropertyClassByName,
// } from '../../lib/property.repo.js';
// import {
//   getAllStrengthLimits,
//   getStrengthByUltimateTensile,
// } from '../../lib/strength.repo.js';
// import centralCalculations from './calculations/centralCalc.js';
// import boltSelection from './decision/selectBolt.js';

// /*
// 1. call central calculation function
// 2. call bolt selection function
// 3. If true => return true
//       false => reiterate / move to next bolt
// */

// const boltNames = [
//   'M3',
//   'M3.5',
//   'M4',
//   'M5',
//   'M6',
//   'M7',
//   'M8',
//   'M10',
//   'M12',
//   'M14',
//   'M16',
//   'M18',
//   'M20',
//   'M22',
//   'M24',
//   'M27',
//   'M30',
//   'M33',
//   'M36',
//   'M39',
// ];

// const propertyGrades = [
//   '4.6',
//   '4.8',
//   '5.6',
//   '5.8',
//   '6.8',
//   '8.8',
//   '9.8',
//   '10.9',
//   '12.9',
// ];

// // const limits = [];
// // sample data
// // const userData = {
// //   plateThickness: 16,
// //   externalLoad: 12000,
// //   preLoad: 20000,
// //   lateralLoad: 500,
// //   engagedThreadLength: 8,
// //   // tensileStressArea: 58,
// //   // youngsModulus: 21000,
// // };

// export default async function boltAnalysis(userData) {
//   console.log('[runAnalysis] Starting bolt analysis with userData:', userData);

//   try {
//     for (let boltIndex = 0; boltIndex < boltNames.length; boltIndex++) {
//       console.log(`[runAnalysis] Checking bolt: ${boltNames[boltIndex]}`);

//       const curBolt = await getBoltByDesignation(boltNames[boltIndex]);
//       if (!curBolt) {
//         console.error(
//           `[runAnalysis] Failed to get bolt: ${boltNames[boltIndex]}`,
//         );
//         continue;
//       }

//       for (let propIndex = 0; propIndex < propertyGrades.length; propIndex++) {
//         console.log(
//           `[runAnalysis] Checking property grade: ${propertyGrades[propIndex]}`,
//         );

//         const curBoltProperty = await getPropertyClassByName(
//           propertyGrades[propIndex],
//         );
//         if (!curBoltProperty) {
//           console.error(
//             `[runAnalysis] Failed to get property class: ${propertyGrades[propIndex]}`,
//           );
//           continue;
//         }

//         console.log('[runAnalysis] Current bolt:', curBolt.designation);
//         console.log(
//           '[runAnalysis] Current property:',
//           curBoltProperty.className,
//         );

//         // call central calculation
//         console.log('[runAnalysis] Running central calculations...');
//         const result = centralCalculations(userData, curBolt, curBoltProperty);

//         const obtainedValues = result.obtainedValues;
//         const limits = result.limitResults;
//         console.log(
//           '[runAnalysis] Calculations complete. Testing selection logic...',
//         );

//         // call selection logic
//         const passResult = boltSelection(obtainedValues, limits);
//         console.log('[runAnalysis] Pass result:', passResult);
//         console.log('-------------------------');

//         if (passResult == true) {
//           console.log('[runAnalysis] ✓ Suitable bolt found!');
//           console.log('[runAnalysis] Limits:', limits);
//           console.log('[runAnalysis] Obtained values:', obtainedValues);
//           console.log('[runAnalysis] Analysis complete');

//           return { curBolt, curBoltProperty, limits, obtainedValues };
//         }
//       }
//     }

//     // If no bolt passes the criteria, return an error response
//     console.error(
//       '[runAnalysis] No suitable bolt found for the given parameters',
//     );
//     throw new Error('No suitable bolt found for the given parameters');
//   } catch (error) {
//     console.error('[runAnalysis] Error during analysis:', error);
//     console.error('[runAnalysis] Error stack:', error.stack);
//     throw error;
//   }
// }
