function calculateBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
    
    const billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
    
    return billDetails;
  }
  const costPerDish = 500;
const numPeople = 4;

const billDetails = calculateBill(costPerDish, numPeople);

console.log(`Total bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Bill per person: Rs. ${billDetails.billPerPerson}/-`);
