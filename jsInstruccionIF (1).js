function mostrar()
{

/*verdadero:1
falso:0*/
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

//uso el else
if (edad<18 && edad>12) 
{
    //alert("adolescente");
}else
{
	alert("no es adolescente");
}

//negado(sin else)
if (!(edad<18 && edad>12) 
{
    alert("no adolescente");
}
//o alt gr 1

if (edad>17 || edad<13) 
{
    alert("no adolescente");
}













/*
if (edad>17) 
{
	alert("mayor");
}
else    //if(edad<18)
{
	alert("menor");
}*/




//FIN DE LA FUNCIÓN
}
