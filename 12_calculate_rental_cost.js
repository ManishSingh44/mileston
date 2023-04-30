function calculateRentalCost(numDays, carType) {
    let rentalCost;
    
    switch(carType) {
      case 'Economy':
        rentalCost = 4000;
        break;
      case 'Midsize':
        rentalCost = 15000;
        break;
      case 'Luxury':
        rentalCost = 20000;
        break;
      default:
        rentalCost = 0;
        break;
    }
    
    const totalCost = rentalCost * numDays;
    return totalCost;
  }
  const numDays = 5;
const carType = 'Midsize';
const totalCost = calculateRentalCost(numDays, carType);

console.log(`The rental cost for ${carType} car for ${numDays} days is Rs. ${totalCost}/-`);
