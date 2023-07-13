let a = 'aaabccccdee';//Output should be 3ab4cd2e
let b = '';
counter = 1;
for (i = 1; i <= a.length; i++) {
    if (a[i] === a[i - 1]) {
        counter++;
    }
    else {
        if (counter != 1) {
            b += (counter + a[i - 1]);
            counter = 1;
        }
        else {
            b += a[i - 1];
        }
    }
}

console.log(b);
