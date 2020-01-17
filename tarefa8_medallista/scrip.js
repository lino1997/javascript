

var resultado;
resultado = prompt("en que puesto quedaste? ");
//document.write(resultado);


function medalla(resultado) {

	if(resultado==1){

		document.write(resultado +" medalla de oro");
	}
	else{
		if (resultado==2){
			document.write(resultado +" medalla de plata");
		}else{
			if (resultado==3){
				document.write(resultado +" medalla de bronce");	
			}else{
				document.write(resultado +" medalla de consolacion");
			}
		}
	}

	}
 medalla(resultado);
