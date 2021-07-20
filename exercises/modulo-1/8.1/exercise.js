function wakeUp() {
  return 'Acordando!!';
}

function haveBreakfast() {
  return 'Bora tomar café!!';
}

function sleep() {
  return 'Partiu dormir!!';
}

function doingThings(action) {
  console.log(action());
}

doingThings(sleep);
