let chessPiece = 'PaWn';

chessPiece = chessPiece.toLocaleLowerCase();

switch(chessPiece) {
  case 'king': 
    console.log('one square to any direction');
    break;
  case 'queen':
    console.log('any direction');
    break;
  case 'rook':
    console.log('vertically or horizontally');
    break;
  case 'bishop':
    console.log('diagonally');
    break;
  case 'knight':
    console.log('L shape');
    break;
  case 'pawn':
    console.log(
      'vertically forward one square, with the option to move two squares' + 
      ' if they have not yet moved');

    break;
}