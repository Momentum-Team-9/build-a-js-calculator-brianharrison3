const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const display = document.getElementById('display')



num1.addEventListener('click', function(event){
  
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})
num2.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)

})

num3.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})

num4.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


num5.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


num6.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


num7.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


num8.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


num9.addEventListener('click', function(event){

    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})


plus.addEventListener('click', function(event){
    console.log(display.innerText);
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})

minus.addEventListener('click', function(event){
    console.log(display.innerText);
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})
times.addEventListener('click', function(event){
    console.log(display.innerText);
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
    console.log(event)
    

})
divided.addEventListener('click', function(event){
    console.log(display.innerText);
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
    

    












