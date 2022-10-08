

        
        var durum = false, opt = "", sonuc = 0

        var rakam = document.querySelectorAll(".rakam");
        var islem = document.querySelector("#islem");
        var opr = document.querySelectorAll(".opr");
        var gosterge = document.querySelector("#gosterge");
        var btnC = document.querySelector(".btnC");
        var btnCE = document.querySelector(".btnCE");
        var esit = document.querySelector(".esit");
        var nokta = document.querySelector(".nokta");

        rakam.forEach(function(element) {                
        
        element.onclick = function() {                    
            if(islem.textContent == "0" || durum) {     
                islem.textContent = "";               
        }
        islem.textContent += this.textContent;      
        durum = false;
    }
   })

   opr.forEach(function(element) { 
  element.onclick = function() {
 durum = true;    
 var opr = this.textContent;

 gosterge.textContent = gosterge.textContent + " " + islem.textContent + " " + opr 

 switch(opt){             
        
                case "+"  :                
                    islem.textContent = (sonuc + Number(islem.textContent));                                                         
                     break;                                                      
                case "-" :
                     islem.textContent = (sonuc - Number(islem.textContent));
                     break;                                                   

                case "*" :
                     islem.textContent = (sonuc * Number(islem.textContent)); 
                     break;

                case "/" :
                     islem.textContent = (sonuc /  Number(islem.textContent));  
                     break;

                default:     
                    break   
            }     

            sonuc = Number(islem.textContent);   
            opt = opr ;  

  }
})

btnC.onclick = function(){          
            islem.textContent = "0";

        }
        btnCE.onclick = function(){         
            islem.textContent = "0";
            gosterge.textContent = "";
            sonuc = 0;
            opt = "";
        }
        esit.onclick = function() {
                gosterge.textContent = ""; 
                durum = true; 

                switch(opt) {
                    case "+": 
                        islem.textContent = (sonuc + Number(islem.textContent)); 
                        break; 
                    case "-":
                        islem.textContent = (sonuc - Number(islem.textContent));
                        break;
                    case "*":
                        islem.textContent = (sonuc * Number(islem.textContent));
                        break;
                    case "/":
                        islem.textContent = (sonuc / Number(islem.textContent));
                        break;
                    default:
                        break
                }
                sonuc = Number(islem.textContent);
                islem.textContent = sonuc;
                sonuc = 0;      
                opt = "";      
            }

            nokta.onclick = function (){
                islem.textContent += nokta.textContent
                if(!durum && !islem.textContent.includes(".")){   
                    islem.textContent += "."
                }

                else if (durum){       
                    islem.textContent = "0"; 
                }

                else if (!islem.textContent.includes(".")){  
                    islem.textContent += "."
                }
                
                durum = false; 
            }

       




    