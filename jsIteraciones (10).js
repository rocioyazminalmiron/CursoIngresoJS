function mostrar()
{
  /*1 empezarar en 0
  2 definir la logica de while
  el contador afuera vale 5
  3 modificcar respuesta
  si es validacion es while*/

	var contador=0;//inicializar para ingresar en 0
	//declarar contadores y variables 
	var respuesta="si";
	var notaAlumno;
	var acumulador=0;
	var sexoAlumno;
	var promedioNotas;
	var mejorNota;
	var peorNota;
	var mejorNotanombre;


	//while(contador<5) //definicion de la logica 
	while(respuesta=="si")
	{
		contador=contador+1;//cambio la variable de la logica, se inicializa
        notaAlumno=prompt("ingrese el" +contador+ "º numero :");//linea de codigo destrucyiva no se inicvializa
		notaAlumno=parseInt(notaAlumno);
		
		//while(notaAlumno>0 && notaAlumno<9), esta mal se piensa al reves
		//whille(!(notaAlumno>0 && notaAlumno<9))casi esta bien
		while(notaAlumno<0 || notaAlumno>10) //bien
		{
            notaAlumno=prompt("ingrese el" +contador+ "º numero :");//linea de codigo destrucyiva no se inicvializa
		    notaAlumno=parseInt(notaAlumno);
		
		}
        sexoAlumno=prompt("ingrese f o m");
       // while(sexoAlumno=="f" || sexoAlumno== "m")//mal
        //while(!(sexoAlumno=="f" || sexoAlumno== "m")//casi bien
        while(sexoAlumno!="f" && sexoAlumno!="m")//bien
        {
        	sexoAlumno=prompt("Ingrese f o m");
        }

        //termine el ingreso
        if (sexoAlumno == "F") 
        	{
        		contadorDeMujeres= contadorDeMujeres +1;
        	}
        	else
        	{
        		
        	}

        if(contador==1)
        {
        	mejorNota=notaAlumno;
        	peorNota=notaAlumno;
        	edadPrimerAlumno=edad;
        }else
        {
        	if (notaAlumno>mejorNota) 
        	{
        		mejorNota=notaAlumno;
        		mejorNotanombre=nombre;

        	}
        	if (notaAlumno<peorNota) 
        	{
        		peorNota=notaAlumno;
        	}
        }

     acumulador=acumulador+notaAlumno;
     contador=prompt("Si para seguir");

	}//findel whil
	promedioNotas=acumulador/contador;
	console.log("contador :"+contador);
	console.log("acumulador :" +acumulador);
    

/*contador constante 
acumulador variable
acumulador=acumulador + (inicializarla)
contador=contador + (inicializarlo)*/

}//FIN DE LA FUNCIÓN