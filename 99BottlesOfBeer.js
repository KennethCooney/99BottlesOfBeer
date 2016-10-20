var startNum = 99;
var nextNum = startNum - 1;

for (var i = 99; i > 0; i--) {
  if (startNum > 1) {
    var lyricsMultiple = startNum + ' bottles of beer on the wall.' + startNum + ' bottles of beer. Take one down, pass it around, ' + nextNum + ' bottles of beer on the wall.';
    console.log(lyricsMultiple);
  } else {
    var lyricsSingle = lyricsMultiple.replace('bottles', 'bottle');
    console.log(lyricsSingle);
  }
  startNum = startNum - 1;
  nextNum = startNum - 1;
}




//ACOUNTS FOR MULTIPLE BOTTLES AND SINGULAR BOTTLE
var startNum = 99;
var nextNum = startNum - 1;

for (var i = 99; i > 0; i--) {
  if (startNum >= 3) {
    console.log(startNum + ' bottles of beer on the wall.' + startNum + ' bottles of beer. Take one down, pass it around, ' + nextNum + ' bottles of beer on the wall.');
    console.log(lyricsMultiple);
  } else if (startNum === 2) {
    console.log(startNum + ' bottles of beer on the wall.' + startNum + ' bottles of beer. Take one down, pass it around, ' + nextNum + ' bottle of beer on the wall.');
  } else if (startNum === 1) {
    console.log(startNum + ' bottle of beer on the wall.' + startNum + ' bottle of beer. Take one down, pass it around, ZERO bottles of beer on the wall!');
  }
  startNum = startNum - 1;
  nextNum = startNum - 1;
}



// OR WITH ONLY USING ONE VARIABLE
for (var i = 99; i > 0; i--) {
  if (i >= 3) {
    console.log(i + ' bottles of beer on the wall.' + i + ' bottles of beer. Take one down, pass it around, ' + (i-1) + ' bottles of beer on the wall.');
  } else if (i === 2) {
    console.log(i + ' bottles of beer on the wall.' + i + ' bottles of beer. Take one down, pass it around, ' + (i-1) + ' bottle of beer on the wall.');
  } else if (i === 1) {
    console.log(i + ' bottle of beer on the wall.' + i + ' bottle of beer. Take one down, pass it around, ZERO bottles of beer on the wall!');
  }
}