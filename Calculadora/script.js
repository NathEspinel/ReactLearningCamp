
window.addEventListener("load", () =>{

  const screen = document.querySelector("#screen");
  const buttons = document.querySelectorAll(".btn");
  let lastResult;


  buttons.forEach(button => {
    button.addEventListener("click",() => {
      let buttonPressed = button.textContent;

      if (button.id === "c") {
        screen.textContent = "0";
        return;
      }

      if(button.id ==="del"){
        if (screen.textContent.length === 1 || screen.textContent === "Invalid"){
          screen.textContent = "0";  
        } else {
          screen.textContent = screen.textContent.slice (0, -1);
        }
        
        return;
      }

      if (button.id === "equal"){
        try {
          screen.textContent = eval(screen.textContent);
          lastResult = screen.textContent;
        } catch {
          screen.textContent = "Invalid";
          lastResult = 0;
        }
        return;
      }
      
      if(button.id === "ans"){
        if (screen.textContent === "0"){
          screen.textContent = lastResult;
        } else {
          button.id === "ans"? buttonPressed = lastResult : buttonPressed;
          screen.textContent += buttonPressed;
        }
        
        buttonPressed = lastResult;
        return
      }

      if (screen.textContent === "0" || screen.textContent === "Invalid"){
        screen.textContent = buttonPressed;
      } else {
        screen.textContent += buttonPressed;
      }

    })
  })
});


  









