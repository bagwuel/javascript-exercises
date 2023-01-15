const fibonacci = function(num) {
    if (typeof (Number(num)) !== "number")
        return ('OOPS')
    else
        num = Number(num)
    if (num < 1)
        return ('OOPS')
    if (num === 1 || num === 2) {
        return (1);
    }
    let nth_fibo = 0;
    let n1 = 1;
    let n2 = 1;
    for (let i = 0; i < num - 2; i++) {
        nth_fibo = n1 + n2;
        n1 = n2;
        n2 = nth_fibo
    }
    return (nth_fibo);
};

// Do not edit below this line
module.exports = fibonacci;
