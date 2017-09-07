var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var result = {};

  for (var idx in salesData) {
    var sumOfSales = 0;
    var provTaxes = 0;
    var companyName = salesData[idx].name;

    for (var i = 0; i < salesData[idx].sales.length; i++) {
      sumOfSales += salesData[idx].sales[i];
    }
    for (var key in taxRates) {
      if (salesData[idx].province === key) {
        provTaxes = (sumOfSales * taxRates[key]);
      }
    }
    if (!result[companyName]) {
      result[companyName] = { totalSales: sumOfSales, totalTaxes: provTaxes };
    } else {
      result[companyName].totalSales += sumOfSales;
      result[companyName].totalTaxes += provTaxes;
    }
  }
  return result;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/