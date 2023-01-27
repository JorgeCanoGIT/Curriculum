
document.getElementById("B_Estudios").onclick = function () {
    
    document.getElementById("Titulo_Capacitaciones").style.display = "none" ;
    document.getElementById("Titulo_Actividad").style.display = "none" ;
    document.getElementById("Titulo_Antecedentes").style.display = "none" ;
    
    document.getElementById("Tabla_Capacitaciones").style.display = "none";
    document.getElementById("Tabla_Actividad").style.display = "none";
    document.getElementById("Tabla_Antecedentes").style.display = "none";


    document.getElementById("Titulo_Estudios").style.display = "block" ;
    document.getElementById("Tabla_Estudios").style.display = "block";
    
    /** mover la pantalla **/
    window.scrollTo(0, 500);
}


document.getElementById("B_Capacitaciones").onclick = function () {
    
    document.getElementById("Titulo_Estudios").style.display = "none" ;
    document.getElementById("Titulo_Actividad").style.display = "none" ;
    document.getElementById("Titulo_Antecedentes").style.display = "none" ;
    
    document.getElementById("Tabla_Estudios").style.display = "none";
    document.getElementById("Tabla_Actividad").style.display = "none";
    document.getElementById("Tabla_Antecedentes").style.display = "none";


    document.getElementById("Titulo_Capacitaciones").style.display = "block" ;
    document.getElementById("Tabla_Capacitaciones").style.display = "block";

    /** mover la pantalla **/
    window.scrollTo(0, 500);

}


document.getElementById("B_Actividad").onclick = function () {
    
    document.getElementById("Titulo_Capacitaciones").style.display = "none" ;
    document.getElementById("Titulo_Estudios").style.display = "none" ;
    document.getElementById("Titulo_Antecedentes").style.display = "none" ;
    
    document.getElementById("Tabla_Capacitaciones").style.display = "none";
    document.getElementById("Tabla_Estudios").style.display = "none";
    document.getElementById("Tabla_Antecedentes").style.display = "none";


    document.getElementById("Titulo_Actividad").style.display = "block" ;
    document.getElementById("Tabla_Actividad").style.display = "block";

    /** mover la pantalla **/
    window.scrollTo(0, 500);
}


document.getElementById("B_Antecedentes").onclick = function () {
    
    document.getElementById("Titulo_Capacitaciones").style.display = "none" ;
    document.getElementById("Titulo_Actividad").style.display = "none" ;
    document.getElementById("Titulo_Estudios").style.display = "none" ;
    
    document.getElementById("Tabla_Capacitaciones").style.display = "none";
    document.getElementById("Tabla_Actividad").style.display = "none";
    document.getElementById("Tabla_Estudios").style.display = "none";


    document.getElementById("Titulo_Antecedentes").style.display = "block" ;
    document.getElementById("Tabla_Antecedentes").style.display = "block";

    /** mover la pantalla **/
    window.scrollTo(0, 500);

}



document.getElementById("B_Inicio").onclick = function () {
    document.getElementById("Titulo_Capacitaciones").style.display = "none" ;
    document.getElementById("Titulo_Actividad").style.display = "none" ;
    document.getElementById("Titulo_Estudios").style.display = "none" ;
    document.getElementById("Titulo_Antecedentes").style.display = "none" ;

    document.getElementById("Tabla_Capacitaciones").style.display = "none";
    document.getElementById("Tabla_Actividad").style.display = "none";
    document.getElementById("Tabla_Estudios").style.display = "none";
    document.getElementById("Tabla_Antecedentes").style.display = "none";
   
    /** mover la pantalla **/
    window.scrollTo(0, 0);

}
