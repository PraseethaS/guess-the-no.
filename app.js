
const submitButton=document.getElementById("checkButton");
console.log(submitButton);
var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);
var live=10;
var text;
const message=document.getElementById("message");
const lives=document.getElementById("attemptCount");
submitButton.onclick=()=>{
    var inputValue=document.getElementById("textBox").value;
    console.log(inputValue);
    live--;
    //wining condition
    //if my input value is equal to random number
    if(inputValue==randomNumber){
        location.href='./win.html'
    }
else if(live==0)
{location.href='./lose.html'

}
else if(inputValue>randomNumber){
    text=`GUESSED NUMBER IS BIG ${live}remaining`;
}

else if(inputValue<randomNumber)
{
    text=`GUESSED NUMBER IS SMALL ${live}remaining`;

}
//console.log(live);
//console.log(text);
message.style.display="inherit";
message.innerHTML=text;
lives.innerHTML=live;
}
