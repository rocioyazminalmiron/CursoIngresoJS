/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero;
	var segundoNumero;
	var respuesta;

	primerNumero=document.getElementById('numeroUno').value;
    primerNumero=parseInt(primerNumero);
    segundoNumero=document.getElementById('numeroDos').value;
    segundoNumero=parseInt(segundoNumero);


    reultadoDeLaSuma=primerNumero-segundoNumero;

    console.log(reultadoDeLaSuma);
	
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

