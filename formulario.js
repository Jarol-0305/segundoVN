$(document).on("click","#btn_registrar",function(){
//validar apellido
let apellido=$("#txtapellido").val();
if(apellido.trim().length==0){
alert("Debe Escribir Un Apellido");
return false;
}
//validar nombre
let nombre=$("#txtnombres").val();
if(nombre.trim().length==0){
alert("Debe Escribir Un Nombre");
return false;
}
alert("Datos Correctos");
})