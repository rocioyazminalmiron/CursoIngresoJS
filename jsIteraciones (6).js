function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5)
	{
         contador= contador+1; //tomo variable
         numeroIngresado=prompt("Ingrese numero");
         numeroIngresado=parseInt(numeroIngresado);
         acumulador=acumulador+numeroIngresado; //variable=variable+modificador

         while(isNaN (numeroIngresado))
         {  
            contador=contador+1; //tomo variable

            numeroIngresado=prompt("error solo numero ingresado");
            numeroIngresado=parseInt(numeroIngresado);
         }

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;//fuera de funcion

}//FIN DE LA FUNCIÓN