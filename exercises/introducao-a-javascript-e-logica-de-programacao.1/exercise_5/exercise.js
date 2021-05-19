let angle1 = 35;
let angle2 = 42;
let angle3 = 120;

if(angle1 >= 0 && angle2 >= 0 && angle3 >= 0) {
  let sum = angle1 + angle2 + angle3;
  
  if(sum === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
  
} else {
  console.log('Error! Invalid angles');
}