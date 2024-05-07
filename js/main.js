
// convert dollar to L.E program 

function validate(){
    var pen = document.getElementById("gemy").value;
    var result = document.getElementById("result");
    if(isNaN(pen)){
        result.innerHTML = "Enter Number Not Text";
        return false;        
    }else if (pen<0){
        result.innerHTML = "Enter Postive Number";
        return false;
    }else if (pen==0){
        result.innerHTML = "Enter Number Rather Than 0";
        return false;
    }else{
        result.innerHTML = pen *50 +" Egyption Pound";
        return false;
    }
    

}