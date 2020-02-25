function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta =="si")
	{
           contador=contador+1; //tomo variable

            numeroIngresado=prompt("Ingrese numero");
            numeroIngresado=parseInt(numeroIngresado);
         
         while(isNaN (numeroIngresado))
         {  
            contador=contador+1; //tomo variable

            numeroIngresado=prompt("error solo numero ingresado");
            numeroIngresado=parseInt(numeroIngresado);
         }
         

        acumulador=acumulador+numeroIngresado;
         
         respuesta=prompt("Ingrese si para continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN