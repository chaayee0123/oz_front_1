function add(char){
    var result = document.querySelector("#result");
    result.value = result.value + char;
}

function calculate(){
    var result = document.getElementById("result");
    result = eval(result.value);
    document.getElementById("result").value = result;
}

function reset(){
    document.getElementById("result").value = "";
}