
//montos y productos//
const productos = [
    {Tipo: ' Vehiculos', Maximo: 900000, Adicionales: "Seguro automotor", Tasa: 65},
    {Tipo: ' Hogar', Maximo: 1500000, Adicionales: "Seguro Vida", Tasa: 58}]
productos.unshift ({Tipo: ' Libre destino', Maximo: 500000, Adicionales: "Seguro Vida", Tasa: 78})

const tipos = productos.map(p => p.productos)                
let tipoProducto = document.getElementById(header)

//calculador de credito para Vehiculos//





function calcularVehiculos() {

    let valor1 = parseInt(document.getElementById('capitalVehiculos').value);
    let valor2 = parseInt(document.getElementById('CuotasVehiculos').value);
    let valor3 = parseInt(document.getElementById('ingresoVehiculos').value);
    
    let Verificacion = valor3*10

       
    if (valor1 > Verificacion) {
        alert ("No podemos otorgar este credito debido a que tus ingresos son bajos")
                                   
        } else {
            function iva() {
                let ivaVehiculos = valor1*0.65;
                let ivaFinalVehiculos = ivaVehiculos*1.21;
                return ivaFinalVehiculos
            }
        
        
            function GastosAdicionalesVehiculos() {
                let SeguroVehiculo = valor1*0.12;
                let SelldosVehiculos = valor1*0.01;
                let GastoFinal = SeguroVehiculo + SelldosVehiculos;
                return GastoFinal
            }
            
            for (let i=1; i<=valor2; i++){
                let gast = GastosAdicionalesVehiculos() + iva();
                let gastycap = gast+valor1;
                let MontoCuota = gastycap / valor2
                document.getElementById("aviso").innerHTML=document.getElementById("aviso").innerHTML+
                
                `<h5>"El TOTAL de tu cuota N "${i} "es de"${MontoCuota}</h5>`

            }
            


               }
           
       
     let info = document.getElementById('info');
     info.innerText = `"Tu credito se compone por $"${GastosAdicionalesVehiculos()/valor2} " de Seguros y Sellados mas "${iva()/valor2} "por cuota correspondiente a gastos de IVA"`
    
    
}

















