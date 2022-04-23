//sistema de cobro por mensualidad en una academia/gimnasio
 
const iva = 21;
const actividad = ("bjj" , "muay thai" , "mma");

//datos del socio
let tipoDeActividad;
do {
    tipoDeActividad = prompt ("ingrese su actividad (bjj/muay thai/mma)").toUpperCase();
    if ((tipoDeActividad == "BJJ") || (tipoDeActividad == "MUAY THAI") || (tipoDeActividad == "MMA")) {
        break;
    }
 } while (tipoDeActividad != "BJJ" || tipoDeActividad != "MUAY THAI" || (tipoDeActividad != "MMA"));


let cantidadDeDias = prompt ("ingrese cantidad de dias");

let formaDePago;
do {
    formaDePago = prompt ("ingrese metodo de pago (efectivo/tarjeta)").toUpperCase();
    if ((formaDePago == "EFECTIVO") || (formaDePago == "TARJETA")) {
        break ;
    }

 } while (formaDePago != "EFECTIVO" || formaDePago != "TARJETA");


console.log ("tipoDeActividad" + tipoDeActividad);
console.log ("cantidadDeDias" + cantidadDeDias);
console.log ("formaDePago" + formaDePago);