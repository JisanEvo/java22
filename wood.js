// chair 3CFT
// table---->10 cft
// bed ----->50 cft

 function woodQuantity(chairQuantity,tableQuantity,bedQuantiy){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const allChairWood=perChairWood*chairQuantity;
    const allTableWood=perTableWood*tableQuantity;
  const  allBedWood=perBedWood*bedQuantiy;

  const total=allChairWood+allTableWood+allBedWood;
  return total;
 }

 const woodNeed=woodQuantity(10,5,20);
 console.log(woodNeed);