const total = document.querySelector(".Resultado");
const edad = document.querySelectorAll(".edad");

let resultado = 0;
for (let i = 0; i < edad.length; i++) {
    resultado += Number(edad[i].textContent);
}

total.textContent = (String(resultado));