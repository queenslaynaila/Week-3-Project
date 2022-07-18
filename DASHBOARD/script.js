var sellingPrice = 45;
var totalProduction
var totalDailyProduction = a + b + c + d

function sum() {
    a = Number(document.calculator.a.value);
    b = Number(document.calculator.b.value);
    c = Number(document.calculator.c.value);
    d = Number(document.calculator.d.value);
    totalDailyProduction= a + b + c + d ;
    document.calculator.total.value = totalDailyProduction;
    document.calculator.daily.value = totalDailyProduction * sellingPrice
}




function weekly() {
    
    document.calculator2.week.value= totalDailyProduction * sellingPrice * 7  
}



