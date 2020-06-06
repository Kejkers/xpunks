
let condition=true;
function search(){
    if (condition){
        document.getElementById("search").style.display="block";
        condition=false;
    }
    else{
        document.getElementById("search").style.display="none";
        condition=true;
    }
}

document.addEventListener("click", function(e){
    if(condition==false){
        if(e.target.id=="search"){
            document.getElementById("search").style.display="none";
            condition=true;
        }
    }
})