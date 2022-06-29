let display = document.getElementById("display");
buttons = document.querySelectorAll("button");

let displayValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      displayValue += buttonText;
      display.value = displayValue ;
    } 
    
    else if (buttonText == "C") {
      displayvalue = "";
      display.value ='';
    }
    
    else if (buttonText == "=") {
      display.value = eval(displayValue);
    }
    
    else {
      displayValue += buttonText;
      display.value = displayValue;
    }
  });
}
