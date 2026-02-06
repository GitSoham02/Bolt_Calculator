export default function boltSelection(obtainedValues, limits) {
  // tensile stress check
  if (limits.tensileStress < obtainedValues.tensileStress) return false;

  // shear stress check
  if (limits.shearStess < obtainedValues.shearStress) return false;

  //   plate bearing stress check
  if (limits.plateBearingStess < obtainedValues.plateBearingStess) return false;

  // thread shear stress check
  if (limits.threadShearStess < obtainedValues.threadShearStess) return false;

  // pre load check
  if (limits.preLoad < obtainedValues.preLoad) return false;

  //   separation load check
  if (limits.separationLoad > obtainedValues.separationLoad) return false;

  return true;
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
