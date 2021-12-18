

let btn = document.getElementById("calculate")



btn.addEventListener("click", calculate);

function calculate() {
    let operator = document.getElementById("operator");
    let result = document.getElementById("result");
    
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let sum;
    
    switch (operator.value) {
        case "+":
            sum = parseInt(a.value) + parseInt(b.value);
            break;
        case "-":
            sum = parseInt(a.value) - parseInt(b.value)
            break;
        case "/":
            sum = parseInt(a.value) / parseInt(b.value)
            break;
        case "*":
            sum = parseInt(a.value) * parseInt(b.value)
            break;
        default:
            console.log("börjar om");
            break;
    }
    
    
    result.innerHTML = sumList; 
    
    
}; 


