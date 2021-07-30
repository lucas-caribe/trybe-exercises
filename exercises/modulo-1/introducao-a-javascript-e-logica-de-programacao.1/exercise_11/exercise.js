let sallary = 12000.0;
let inss, ir = 0, irDeduction = 0;

if(sallary > 0){
  
  if(sallary >= 5189.82) {
    inss = 570.88;
  } else if(sallary >= 2594.93) {
    inss = 0.11;
  } else if(sallary >= 1556.95) {
    inss = 0.09;
  } else {
    inss = 0.08;
  }

  if(inss > 0.11) {
    sallary -= inss
  } else {
    sallary = sallary - (sallary * inss);
  }

  console.log(inss, sallary);

  if(sallary >= 4664.68) {
    ir = 0.275;
    irDeduction = 869.36;
  } else if(sallary >= 3751.06) {
    ir = 0.225;
    irDeduction = 636.13;
  } else if(sallary >= 2826.66) {
    ir = 0.15;
    irDeduction = 354.8;
  } else if(sallary >= 1903.99) {
    ir = 0.075;
    irDeduction = 142.8;
  }

  console.log(ir, irDeduction);

  if(ir > 0.0) {
    sallary = sallary - (sallary * ir - irDeduction);
  }

  console.log(`The final sallary is ${sallary}`);

} else {
  console.log('Error! Invalid input');
}
