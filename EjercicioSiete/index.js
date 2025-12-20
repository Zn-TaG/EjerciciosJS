import { Factory } from "./src/servicios/Factory.js";

const factory = new Factory();

const auto = factory.crearVehiculo('auto');
auto.descripcion();