export default function boltSelection(obtainedValues, limits) {
  console.log('[selectBolt] Checking bolt selection criteria...');
  console.log('[selectBolt] Obtained values:', obtainedValues);
  console.log('[selectBolt] Limits:', limits);

  try {
    // tensile stress check
    if (limits.tensileStress < obtainedValues.tensileStress) {
      console.log('[selectBolt] ✗ Failed: tensile stress check');
      return false;
    }

    // shear stress check
    if (limits.shearStress < obtainedValues.shearStress) {
      console.log('[selectBolt] ✗ Failed: shear stress check');
      return false;
    }

    //   plate bearing stress check
    if (limits.plateBearingStress < obtainedValues.plateBearingStress) {
      console.log('[selectBolt] ✗ Failed: plate bearing stress check');
      return false;
    }

    // thread shear stress check
    if (limits.threadShearStress < obtainedValues.threadShearStress) {
      console.log('[selectBolt] ✗ Failed: thread shear stress check');
      return false;
    }

    // pre load check
    if (limits.preLoad < obtainedValues.preLoad) {
      console.log('[selectBolt] ✗ Failed: pre load check');
      return false;
    }

    //   separation load check
    if (limits.separationLoad > obtainedValues.separationLoad) {
      console.log('[selectBolt] ✗ Failed: separation load check');
      return false;
    }

    console.log('[selectBolt] ✓ All criteria passed!');
    return true;
  } catch (error) {
    console.error('[selectBolt] Error during selection:', error);
    throw error;
  }
}

// {
//   obtainedValues: {
//     tensileStress: 357.2413793103448,
//     shearStess: 152.7887453682195,
//     plateBearingStess: 75,
//     threadShearStess: 95.935829565399,
//     separationLoad: 21250.334706364265,
//     preLoad: 20000
//   },
//   limitResults: {
//     tensileStress: 400,
//     shearStress: 192,
//     plateBearingStess: 640,
//     threadShearStress: 192,
//     preLoad: 25984,
//     separationLoad: 12000
//   }
