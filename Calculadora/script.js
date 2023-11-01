
/*Línea encargada de permitir que la llamada al script este en el head del HTML y que funcione sin arrojar ningún error, ya que lo ejecuta hasta que todo lo de HTML se haya ejecutado y exista, y por lo tanto ya se puede aplicar la funcionalidad de js sin inconvenientes.*/
window.addEventListener("load", () =>{

  const screen = document.querySelector("#screen");//llamar al elemento de HTML
  const buttons = document.querySelectorAll(".btn");//llamar a TODOS los elementos de esa clase, querySelectorAll genera un array, por lo que se puede manipular con los metodos de array
  let lastResult;

  /*Con el empleo de forEach agregar un addEventListener para cada boton del arreglo que se genero con el querySelectorAll */
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


  









