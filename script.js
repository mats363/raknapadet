let a = document.getElementById("a");
let b = document.getElementById("b");

let btn = document.getElementById("calculate")



btn.addEventListener("click", calculate);

function calculate() {
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");
    a = parseInt(a.value);
    b = parseInt(b.value);
    // console.log("a = " + a + "b =" + b);

    let sum;
    switch (operator.value) {
        case "+":
            sum = a + b;
            break;
        case "-":
            sum = a - b;
            break;
        case "/":
            sum = a / b;
            break;
        case "*":
            sum = a * b;
            break;
        default:
            console.log("börjar om");
            break;
    }

    result.innerHTML = sum;

}; 
