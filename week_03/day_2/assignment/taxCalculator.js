var income = 1500000;
var savings = 10000;
var incomeTax=0, rebate=0;

if(income < 500000){
    rebate = 0.5 * savings;
}else if( income >= 500000 && income < 1000000){
    rebate = 0.3 * savings;
}else if (income >= 1000000){
    rebate = 0.1 * savings;
}

income = income -rebate;

if(income < 250000){
    console.log('No tax');
} else if( income >= 250000 && income < 500000){
    incomeTax = (income - 250000) * 0.1;
} else if ( income >= 500000 && income < 1000000){
    incomeTax = 0.1 * 250000 + 0.2 * (income - 500000);
} else if( income >= 1000000){
    incomeTax = 0.1 * 250000 + 0.2 * 500000 + 0.3 *(income - 1000000);
}

console.log(incomeTax)