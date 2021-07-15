const num1 = document.getElementById('num1')
const display = document.getElementById('display')
const firstOperand = null


document.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})



function operator (nextOperator){
    const inputVaule = parseFloat(display)
    if (firstOperand == null && !isNaN(inputVaule))
        calculator.firstOperand = inputVaule;
    
    }
    

    












