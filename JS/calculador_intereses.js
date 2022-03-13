//montos y productos//
const productos = [
    {Tipo: ' Vehiculos', Maximo: 900000, Adicionales: "Seguro automotor", Tasa: 65},
    {Tipo: ' Hogar', Maximo: 1500000, Adicionales: "Seguro Vida", Tasa: 58}]
productos.unshift ({Tipo: ' Libre destino', Maximo: 500000, Adicionales: "Seguro Vida", Tasa: 78})

const tipos = productos.map(p => p.productos)                

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
                const SeguroVehiculo = 3500*valor2;
                let SelldosVehiculos = valor1*0.01;
                let GastoFinal = SeguroVehiculo + SelldosVehiculos;
                return GastoFinal
            }
            
            for (let i=1; i<=valor2; i++){
                let gast = GastosAdicionalesVehiculos() + iva();
                let gastycap = gast+valor1;
                let MontoCuota = gastycap / valor2
                document.getElementById("aviso").innerHTML=document.getElementById("aviso").innerHTML+
                
                `<h4>"El TOTAL de tu cuota N "${i} "es de"${MontoCuota}</h4>`

            }
            


               }
           
       
               let info = document.getElementById('info');
               info.innerText = `"El presente credito incluye Gastos de Sellado y Seguros por: $" ${GastosAdicionalesVehiculos()} "Impuesto al Valor Agregado: $" ${iva()}`;
    
    document.getElementById('capitalVehiculos').value="";
    document.getElementById('CuotasVehiculos').value="";
    document.getElementById('ingresoVehiculos').value="";
}

//calculador de credito para Hogar//

function calcularHogar() {

    let valor1H = parseInt(document.getElementById('capitalHogar').value);
    let valor2H = parseInt(document.getElementById('cuotasHogar').value);
    let valor3H = parseInt(document.getElementById('ingresoHipoteca').value);
    
    let Hipoteca = valor3H/1.5;

       
    if (valor1H > Hipoteca) {
        alert ("No podemos otorgar este credito debido a no puede garantizarlo con el valor de su propiedad")
                                   
        } else {
            function ivaCreditoHogar() {
                let ivaHogar = valor1H*0.58;
                let ivaFinalHogar = ivaHogar*1.21;
                return ivaFinalHogar
            }
        
        
            function GastosAdicionalesHogar() {
                let SeguroHogar = valor1H*0.2;
                let SelldosHogar = valor1H*0.02;
                let GastoFinalHogar = SeguroHogar + SelldosHogar;
                return GastoFinalHogar
            }
            
            for (let i=1; i<=valor2H; i++){
                let gastHogar = GastosAdicionalesHogar() + ivaCreditoHogar();
                let gastycapHogar = gastHogar+valor1H;
                let MontoCuotaHogar = gastycapHogar / valor2H
                document.getElementById("aviso").innerHTML=document.getElementById("aviso").innerHTML+
                
                `<h4>"El TOTAL de tu cuota N "${i} "es de"${MontoCuotaHogar}</h4>`

            }
            


               }
           
       
     let info = document.getElementById('info');
     info.innerText = `"El presente credito incluye Gastos de Sellado y Seguros por: $" ${GastosAdicionalesHogar()} "Impuesto al Valor Agregado: $" ${ivaCreditoHogar()}`
     document.getElementById('capitalHogar').value="";
     document.getElementById('cuotasHogar').value="";
     document.getElementById('ingresoHipoteca').value="";
     
    
}

//calculador de credito para Libre destino//

function calcularLibre() {

    let valor1L = parseInt(document.getElementById('capitalLibre').value);
    let valor2L = parseInt(document.getElementById('cuotasLibre').value);
    let valor3L = parseInt(document.getElementById('ingresoLibre').value);
    
    let Libre = valor3L*3; 
    

    
       
    if (valor1L > Libre) {
        alert ("No podemos otorgar este credito debido a que tus ingresos son bajos")
                                   
        } else {
            function ivaCreditoLibre() {
                let ivaLibre = valor1L*0.78;
                let ivaFinalLibre = ivaLibre*1.21;
                return ivaFinalLibre
            }
        
        
            function GastosAdicionalesLibre() {
                let SeguroLibre = valor1L*0.12;
                let SelldosLibre= valor1L*0.02;
                let GastoFinalLibre = SeguroLibre + SelldosLibre;
                return GastoFinalLibre
            }
            
            for (let i=1; i<=valor2L; i++){
                let gastLibre = GastosAdicionalesLibre() + ivaCreditoLibre();
                let gastycapLibre = gastLibre+valor1L;
                let MontoCuotaLibre = gastycapLibre / valor2L
                document.getElementById("aviso").innerHTML=document.getElementById("aviso").innerHTML+
                
                `<h4>"El TOTAL de tu cuota N "${i} "es de"${MontoCuotaLibre}</h4>`

            }
            


               }
           
       
     let info = document.getElementById('info');
     info.innerText = `"El presente credito incluye Gastos de Sellado y Seguros por: $" ${GastosAdicionalesLibre()} "Impuesto al Valor Agregado: $" ${ivaCreditoLibre()}`
     
    document.getElementById('capitalLibre').value="";
    document.getElementById('cuotasLibre').value="";
    document.getElementById('ingresoLibre').value="";
    
}