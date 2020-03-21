function inicio()
{

    // Variables Para Que Hagan La Opereacion
    var Operandoa;
    var Operandob;
    var Operacion;
    // Variables
    var Resultado = document.getElementById("Resultado");
    var Cero = document.getElementById("Cero");
    var Uno = document.getElementById("Uno");
    var Dos = document.getElementById("Dos");
    var Tres = document.getElementById("Tres");
    var Cuatro = document.getElementById("Cuatro");
    var Cinco = document.getElementById("Cinco");
    var Seis = document.getElementById("Seis");
    var Siete = document.getElementById("Siete");
    var Ocho = document.getElementById("Ocho");
    var Nueve = document.getElementById("Nueve");
    var Suma = document.getElementById("Suma");
    var Resta = document.getElementById("Resta");
    var Multiplicacion = document.getElementById("Multiplicacion");
    var Division = document.getElementById("Division");
    var igual = document.getElementById("Igual");
    var Reset = document.getElementById("Reset");
   

        //Eventos

        Cero.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "0"
        }
        Uno.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "1"
        }
        Dos.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "2"
        }
        Tres.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "3"
        }
        Cuatro.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "4"
        }
        Cinco.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "5"
        }
        Seis.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "6"
        }
        Siete.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "7"
        }
        Ocho.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "8"
        }
        Nueve.onclick = function(e)
        {
            Resultado.textContent = Resultado.textContent + "9"
        }
        
        // Eventos de los demas botones

        Reset.onclick = function(e)
        {
            Resetear();
        }
        Suma.onclick = function(e)
        {
            Operandoa = Resultado.textContent;
            Operacion = "+";
            Limpiar();
        }
        Resta.onclick = function(e)
        {
            Operandoa = Resultado.textContent;
            Operacion = "-";
            Limpiar();
        }
        Multiplicacion.onclick = function(e)
        {
            Operandoa = Resultado.textContent;
            Operacion = "*";
            Limpiar();
        }
        Division .onclick = function(e)
        {
            Operandoa = Resultado.textContent;
            Operacion = "/";
            Limpiar();
        }
        igual.onclick = function(e)
        {
            Operandob = Resultado.textContent;
            Resolver();
        }

        function Limpiar()
        {
               Resultado.textContent = "";
        }
        function Resetear()
        {
            Resultado.textContent = "";
            Operandoa = 0;
            Opereandob = 0;
            Operacion  = "";
        }
        function Resolver()
        {
            var Total = 0;
            switch (Operacion)
            {
            case "+" :
            Total = parseFloat(Operandoa) + parseFloat(Operandob);
            break;

            case "-" :
            Total = parseFloat(Operandoa) - parseFloat(Operandob);
            break;
            
            case "*" :
                Total = parseFloat(Operandoa) * parseFloat(Operandob);
                break;

                case "/":
                    Total = parseFloat(Operandoa) / parseFloat(Operandob);
                    break;
            }

           Resetear();
            Resultado.textContent = Total;
        }
}