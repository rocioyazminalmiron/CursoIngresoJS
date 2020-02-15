function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);




if (edad<13)
{
 	alert("menor");
 }
 else
 {
  	if (edad>17)
    {
 	alert("mayor");
    }
    else    	
    {
 	    alert("adolescente");
    }
    
   

}
/*
if (edad>17)
 {
 	alert("mayor");
 }
if (edad<18 && edad>12)
 {
 	alert("adolescente");
 }
 if (edad<13) 
 {
 	alert("menor");
 }*/
 
/*
 if (edad>17)
 {
 	alert("mayor");
 }
 else
 {
  	if (edad<18 && edad>12)
    {
 	alert("adolescente");
    }
    else    	
    {
 	    alert("menor");
    }
}    
   

}*/








}//FIN DE LA FUNCIÓN