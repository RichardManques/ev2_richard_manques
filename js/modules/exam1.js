export default{
    valores: {
        dolar:628.68, 
        uf:26648.67, 
        euro:740.67
    },
    convertidor:`
        <h1>Richard Manques</h1>
        Valor en pesos CL </br>
            $<input id="numeros" type="text"/></br></br>
            <input id="dolar" type="radio" name="monedas">Dolar
            <input id="uf" type="radio" name="monedas">Uf
            <input id="euro" type="radio" name="monedas"checked >Euro
        <br><br>
            <button onclick="procesar()">Convertir</button>
        <div id="resp"></div>  
    `,
    procesar: function () {
        var monedas = document.getElementById("numeros").value;
        var resp = document.getElementById("resp");
        var opciones = document.getElementsByName("monedas");
        var calculo="";
        var final="";
        opciones.forEach((item) => {
            if (item.checked) { 
                calculo = item.id;
            }
        });

        
        if (monedas > 0 && monedas!=0) {
            resp.style.color = "green";
            if (calculo==dolar) {
                final = monedas/parseInt(this.valores.dolar);
            } else if(calculo == uf){
                final = monedas/this.valores.uf;
            }else{
                final = monedas/this.valores.euro;
            }
            resp.innerHTML = `Equivale a ${(final).toFixed(0)+" "+calculo+"/es"+" aproximadamente"}`;
        }
    }


}