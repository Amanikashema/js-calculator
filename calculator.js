function display(number){
    document.result.display.value=document.result.display.value + number;
}

function equal(){
    var x = document.result.display.value;
    document.result.display.value = eval(x);
}

function clear(){
    document.getElementsByClassName("display").value= "";
}
