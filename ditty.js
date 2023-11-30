let decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];
let i = 0;

while (i < decimals.length) {
    decimals[i] = Math.round(decimals[i]);
    i++;
}
console.log(decimals);