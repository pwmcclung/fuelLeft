const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump<=mpg*fuelLeft){return true}return false
};
