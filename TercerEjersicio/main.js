import { celular } from "./classCelular.js";

const application = [{ aplication :"WhatsApp", tamaño: 12}, {aplication: "Instagram", tamaño: 12}, {aplication: "Facebook", tamaño: 11}, {aplication: "Twitter", tamaño: 10}];


const retmiNote = new celular("negro", 200, "1080p", 48, "4GB");
const iphone = new celular("blanco", 180, "4K", 12, "3GB");
const samsungGalaxy = new celular("azul", 220, "1440p", 64, "6GB");

retmiNote.open();
retmiNote.appStore(application);
retmiNote.unstallApp();