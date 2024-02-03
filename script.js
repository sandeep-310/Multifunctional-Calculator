let modeButton = document.querySelectorAll('.mode')
let modebuttonArray = Array.from(modeButton)
modebuttonArray.forEach(element => {
    element.addEventListener("click",()=>{
        let adv = document.querySelector(".Advanced-Calcu")
        let basic = document.querySelector(".Basic-Calcu")
        if(element.innerHTML=="Basic"){
            basic.classList.add("onClickClass")
            adv.classList.remove("onClickClass")
        }
        else if(element.innerHTML =="Advance"){
            basic.classList.remove("onClickClass")
            adv.classList.add("onClickClass")
        }
    })
    
});

//CALCULATION LOGIC
let outputArray = Array.from(document.getElementsByClassName('output'))
let buttonArray = Array.from(document.querySelectorAll('.column-element'))
let string = "";
buttonArray.forEach(element => {
    element.addEventListener("click", (e)=>{
        if (element.innerHTML == "=") {
            if(string.includes("÷")){
                let num1 = string.substring(0,string.indexOf("÷"))
                let num2 = string.substring(string.indexOf("÷")+1,string.length)
                result = num1/num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("x")){
                let num1 = string.substring(0,string.indexOf("x"))
                let num2 = string.substring(string.indexOf("x")+1,string.length)
                result = num1*num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("+")){
                let num1 = Number(string.substring(0,string.indexOf("+")))
                let num2 = Number(string.substring(string.indexOf("+")+1,string.length))
                result = num1+num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("-")){
                let num1 = string.substring(0,string.indexOf("-"))
                let num2 = string.substring(string.indexOf("-")+1,string.length)
                result = num1-num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("%")){
                let num1 = string.substring(0,string.indexOf("%"))
                let num2 = string.substring(string.indexOf("%")+1,string.length)
                result = (num1/100)*num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("%x")){
                let num1 = string.substring(0,string.indexOf("%"))
                let num2 = string.substring(string.indexOf("x")+1,string.length)
                result = (num1/100)*num2;
                outputArray.forEach(element => {
                    element.value=result
                });
            }
            if(string.includes("!")) {
              let num = string.substring(0,string.indexOf("!"))
              let fact = 1;
              for (let i = num; i>1; i--){
                fact *=i;
              }
              outputArray.forEach(element => {
                element.value=fact
            });
            }
            if(string.includes("^")){
                let num1 = string.substring(0,string.indexOf("^"))
                let num2 = string.substring(string.indexOf("^")+1, string.length)
                result = Math.pow(num1,num2)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("e^")){
                let num = string.substring(string.indexOf("^")+1, string.length)
                result = Math.exp(num)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("ln(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                result = Math.log(num)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("sin(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                let numInDeg = (num*Math.PI)/180
                result = Math.sin(numInDeg)                  
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("cos(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                let numInDeg = (num*Math.PI)/180
                result = Math.cos(numInDeg)                  
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("tan(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                let numInDeg = (num*Math.PI)/180
                result = Math.tan(numInDeg)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("sinh(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                result = Math.sinh(num)                  
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("cosh(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                result = Math.cosh(num)                  
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("tanh(")){
                let num = string.substring(string.indexOf("(")+1, string.length)
                result = Math.tanh(num)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            let root = document.getElementsByClassName("column-element")[28].innerHTML;
            if(string.includes(root)){
                let num = string.substring(string.indexOf(root)+1, string.length)
                result = Math.sqrt(num)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("10^")){
                let num = string.substring(string.indexOf("^")+1, string.length)
                result = Math.pow(10,num)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("^2")){
                let num = string.substring(0,string.indexOf("^"))
                result = Math.pow(num,2)                
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            if(string.includes("log(")){
                let num = string.substring(string.indexOf("(")+1 ,string.length)
                result = Math.log10(num)              
                outputArray.forEach(element => {
                    element.value=result
                }); 
            }
            string = ""
        }
        else if(element.innerHTML == "AC"){
            string=""
            outputArray.forEach(element => {
                element.value=string
            });
        }
        else if(buttonArray[5].innerHTML == e.target.innerHTML){                 // BackSpace
                let sub = string.substring(0, string.length-1)
                outputArray.forEach(element => {
                    element.value=sub
                });
                string = sub
        }
        else{
            if (element.innerHTML == "y<sup>x</sup>") {
                string+="^"
                outputArray.forEach(element => {
                    element.value=string
                }); 
            } 
            else if(element.innerHTML == "e<sup>x</sup>"){
                string="e^"
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "ln"){
                string="ln("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "sin"){
                string="sin("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "cos"){
                string="cos("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "tan"){
                string="tan("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "sinh"){
                string="sinh("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "cosh"){
                string="cosh("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "tanh"){
                string="tanh("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "10<sup>x</sup>"){
                string="10^"
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "x<sup>2</sup>"){
                string+="^2"
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "π"){
                string+="3.14159"
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else if(element.innerHTML == "log"){
                string+="log("
                outputArray.forEach(element => {
                    element.value=string
                }); 
            }
            else {
                string+=element.innerHTML
                outputArray.forEach(element => {
                    element.value=string
                });  
            }
        }
    })
});
