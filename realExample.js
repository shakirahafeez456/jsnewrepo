function update(){
    console.log("updating result");
    var input = document.getElementById("myinput");
    var output = document.getElementById("output");
    //output.innerHTML = input.value
    var a = input.value
    input.value= output.innerHTML;
    output.innerHTML= a
    //swapping content of input n output when button is clicked 
}