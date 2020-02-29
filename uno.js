
function mostrar()
{/* Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
   var nombre;
   var cantidadDePersonas;
   var cantidadDeDias;
   var respuesta="Si";
   var formaDePago;
   var contador;
   var maximoCantidadePersonas;
   var contadorDeReserva;
   var contadorFete;
   var contadorQR;
   var maximoCantidadDeDias;
   var acumuladorDeDias;
   var contadorTarjeta;
   var promedio;
   var formaDePagoMasUsada;
   var acumulador;
   contadorDeReserva=0;
   contadorFete=0;
   contadorQR=0;
   contadorTarjeta=0;

   while(respuesta=="si")
{   contadorDeReserva++;

    nombre=prompt("ingrese nombre");
   	while(!(isNaN(nombre))
   	{
      nombre=prompt("ingrese nombre");
   	}

   	cantidadDePersonas=prompt("ingrse cantidad de personas");
   	cantidadDePersonas=parseInt(cantidadDePersonas);

   	while(isNaN(cantidadDePersonas) || cantidadDePersonas <0)
   	{
   		cantidadDePersonas=prompt("ingrese cantidad de personas");
   		cantidadDePersonas=parseInt(cantidadDePersonas);
   	}

   	cantidadDeDias=prompt("ingrese cantidadDeDias");
   	cantidadDeDias=parseInt(cantidadDeDias);
   	while(isNaN(cantidadDeDias) || cantidadDeDias <0)
   	{
   		cantidadDeDias=prompt("ingrese cantidadDeDias");
   		cantidadDeDias=parseInt(cantidadDeDias);
   	}

   	formaDePago=prompt("Ingrese forma de pago");
   	while(isNaN (formaDePago)|| formaDePago!= "efectivo" && formaDePago !="tarjeta" && formaDePago != "QR")
   	{
      formaDePago=prompt("Ingrese forma de pago");
   	}
   	if (contadorDeReserva==1 || maximoCantidaDePersonas < cantidadDePersonas)
   	 {
   	 	maximoCantidaDepersonas = cantidadDePersonas;
   	 	maximoCantidadDePersonas = nombre;
   	 }
   	 if (contadorDeReserva==1 || maximoCantidadDeDias < cantidadDeDias)
   	 {
   	 	maximocantidadDeDias = cantidadDeDias;
   	 	maximocantidaDeDias = cantidadDePersonas;
   	 }
   	 switch(formaDePago)
   	 {
   	 	case "QR" :
   	 	        
   	 	        contadorQR = contadorQR + 1;
   	 	        break;

   	 	        case "efectivo":
   	 	        
   	 	        contadorFete = contadorFete + 1;
   	 	        break;

   	 	        default :
   	 	        contadorTarjeta = contadorTarjeta + 1;
   	 	        break;


   	 } acumuladorDeDias= acumuladorDeDias + cantidadDeDias;

   }//Fin del while.

   promedio= acumuladorDeDias / contadorDeReserva;

   if (contadorQR > contadorFete && contadorQR  > contadorTarjeta )

   {
   	formadepagomasusada="QR";

   }else
   {
     if (contadorTarjeta > contadorFete) 
     {
     	formaDePagoMasUsada="Tarjeta";
     }

   }else
   {
   	formaDePagoMasUsada= "efectivo"
   }




}
