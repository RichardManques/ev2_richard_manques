export default {
    factura:
    {
    cliente:'INFORMATICA INACAP',
    domicilio:'AV. SAN MIGUEL 445',
    ciudad:'Talca',
    telefono:'223344',
    detalle:[
        {codigo:1,cantidad:3,descripcion:'PASTEL MIL HOJAS', precioUnitario:10000},
        {codigo:2,cantidad:4,descripcion:'GALLETAS FINAS', precioUnitario:8000},
        {codigo:3,cantidad:2,descripcion:'BERLIN', precioUnitario:500},
        {codigo:4,cantidad:1,descripcion:'PIE DE LIMON', precioUnitario:10000},
        {codigo:5,cantidad:5,descripcion:'PASTEL MANJAR', precioUnitario:12000},
        {codigo:6,cantidad:3,descripcion:'PASTEL CREMA', precioUnitario:13000}
    ],
    },

    pasteles:`
        <h3>Cargar Información</h3>
        <div id="resp"></div>
    `,

    cargarInfo:function(){
        var subtotal=0;
        subtotal= parseInt(this.factura.detalle.cantidad)*parseInt(this.factura.detalle.precioUnitario);
        var respuesta = document.getElementById('resp');
        var tabla =`
            <table border="1" width="600" heigth="400">
                <tr>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>Descripcion</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                </tr>
        `;
        this.factura.detalle.forEach((item) =>{
            tabla+=`
                <tr>
                    <td>${item.codigo}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precioUnitario}</td>
                    <td>${item.cantidad*item.precioUnitario}</td>
                </tr>
            `;
        });
        tabla+='</table>';
        respuesta.innerHTML=tabla;
        respuesta.innerHTML+=subtotal;
    }
}