import { TarjetaStrategy } from "./servicios/Tarjeta.js";
import { EfectivoStrategy } from "./servicios/Efectivo.js";
import { ProcesadorPago } from "./servicios/ProcesoPago.js";
import { TransferenciaStrategy } from "./servicios/Transferencia.js";
import { CriptomonedaStrategy } from "./servicios/Criptomoneda.js";

const pago = new ProcesadorPago();

pago.registrar("tarjeta", TarjetaStrategy);
pago.registrar("efectivo", EfectivoStrategy);
pago.procesar('tarjeta',100);
pago.procesar('criptomoneda',100);