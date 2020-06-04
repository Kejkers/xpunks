
let condition=true;
function switchMenu(){
    if (condition){
        document.getElementById("loginpassword_block").style.display="none";
        document.getElementById("signup_block").style.display="inline";
        condition=false;
    }
    else{
        document.getElementById("loginpassword_block").style.display="inline";
        document.getElementById("signup_block").style.display="none";
        condition=true;
    }
    
}