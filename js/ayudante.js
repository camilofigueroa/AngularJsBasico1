/**
 * Esta funci�n se encarga simplemente de retornar algo adicional a una cadena que le ingresen.
 * Fu� concebida para comprobar que llamar una funci�n de este javascript se puede usar en el original o segmento del archivo html.
 * @param       string          Es una cadena ingresada, sin �nimo de operar sobre ella.
 * @returns     string          Cadena un resultado o texto adicional.
 */
function retornar_algo( cad )
{
    return cad + " End line.";
}

/**
 * Esta funci�n se encarga de validar un campo, o informar de las condiciones de un campo.
 * @param       string          cadena del usuario.
 * @param       array           vector que me permite desde el html enviar diferentes cosas.
 * @returns     string          informe con condiciones de la informaci�n
 */
function validar_campo( cad, vector )
{
    var resultado = "";
        
    resultado += "Longitud de la cadena: " + cad.length + " ";
    resultado += "Si la cadena requiere validar una longitud, este ser�a un buen c�digo a usar. " + ( Number( vector[ 0 ] ) );
    
    if( cad.length < vector[ 0 ] ) resultado += "La cadena no supera la longitud suministrada.  ";
    if( cad.length > vector[ 1 ] ) resultado += "La cadena supera la longitud suministrada.  ";   
    
    return resultado; 
}