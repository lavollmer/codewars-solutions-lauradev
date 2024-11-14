function binary (a,b) {
    //change the string numbers to a number data type
    var numA = Number(a);
    var numB = Number(b);

    sum = numA + numB;

    //convert the sum to binary
    return sum.toString(2);
}