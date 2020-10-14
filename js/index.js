import exam1 from './modules/exam1.js'
import exam2 from './modules/exam2.js'

var resp = document.getElementById('respuesta');

window.procesar = exam1.procesar.bind(exam1);
window.cargar = exam2.cargarInfo;

document.getElementById("example1").addEventListener('click',() => {
    resp.innerHTML=exam1.convertidor;
    exam1.procesar();
});

document.getElementById("example2").addEventListener('click',() => {
    resp.innerHTML= exam2.pasteles;
    exam2.cargarInfo();
});