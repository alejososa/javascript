//sistema de cobro por mensualidad en una academia/gimnasio
 
const iva = 21;
const actividad = ("bjj" , "muay thai" , "mma");
var precioPorTres = 3000;
var precioMasDeTres = 4000;
/*datos del socio, a futuro la idea es pedir nombre, que se pueda anotar y en caso de estar anotado que lo busque en un determinado grupo, y asi ver si esta la cuota paga o no.
si esta paga, sigue todo normal
si esta cerca de finalizar, que de un aviso y mande mail
si esta impaga, que de las opciones de pago 
*/

let nombreDelSocio = prompt ("ingrese su nombre");

  let tipoDeActividad;
do {
    tipoDeActividad = prompt ("ingrese su actividad (bjj/muay thai/mma)").toUpperCase();
    if ((tipoDeActividad == "BJJ") || (tipoDeActividad == "MUAY THAI") || (tipoDeActividad == "MMA")) {
        break;
    }
 } while (tipoDeActividad != "BJJ" || tipoDeActividad != "MUAY THAI" || (tipoDeActividad != "MMA"));


let cantidadDeClases = prompt ("ingrese cantidad de clases por semana");
let precioFinal;
if (cantidadDeClases <=3) {precioFinal = precioPorTres} 
if (cantidadDeClases >3) {precioFinal = precioMasDeTres};


let formaDePago;
do {
    formaDePago = prompt ("ingrese metodo de pago (efectivo/tarjeta)").toUpperCase();
    if ((formaDePago == "EFECTIVO") || (formaDePago == "TARJETA")) {
        break ;
    }

 } while (formaDePago != "EFECTIVO" || formaDePago != "TARJETA");


console.log ("Nombre del socio " +  nombreDelSocio);
console.log ("Tipo de actividad " +  tipoDeActividad);
console.log ("Cantidad de clases por semana " +  cantidadDeClases);
console.log ("Forma de pago " +  formaDePago);
console.log ("Precio final " + precioFinal);