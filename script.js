

let btn = document.getElementById("calculate")



btn.addEventListener("click", calculate);

function calculate() {
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");
    
    let a = document.getElementById("a");
    let b = document.getElementById("b");

    a = a.value;
    b = b.value;
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
