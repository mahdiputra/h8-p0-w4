function ubahHuruf(kata) {
  var newString = ''
 for (var i = 0; i < kata.length; i++) {
    if (96 < kata.charCodeAt(i) && kata.charCodeAt(i) < 123) {
        newString += String.fromCharCode(kata.charCodeAt(i) + 1);
    }
 }return newString
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
