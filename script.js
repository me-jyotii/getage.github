// alert("hey js");
function ageInDays(){
    var birthyear = prompt("Tell me your birth year");
    var days = (2022 - birthyear) * 365;
    // console.log(days);
    var final = "you are "+days+" days old" 
    document.getElementById("h3-ele").innerHTML = final;
}

function reset(){
    document.getElementById("h3-ele").remove();
}