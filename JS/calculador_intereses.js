//montos y productos//
const productos = [
    {Tipo: ' Vehiculos', Maximo: 900000, Adicionales: "Seguro automotor", Tasa: 65},
    {Tipo: ' Hogar', Maximo: 1500000, Adicionales: "Seguro Vida", Tasa: 58}]
productos.unshift ({Tipo: ' Libre destino', Maximo: 500000, Adicionales: "Seguro Vida", Tasa: 78})

const tipos = productos.map(p => p.productos)    



// creditos


const creditos = []

const creditosStored = localStorage.getItem('Simulaciones')




//calculador de credito para Vehiculos//
const calcularVehiculos = document.getElementById("calcular1");



calcularVehiculos.onclick = () => {
    
    let valor1 = parseInt(document.getElementById('capitalVehiculos').value);
    let valor2 = parseInt(document.getElementById('CuotasVehiculos').value);
    let valor3 = parseInt(document.getElementById('ingresoVehiculos').value);
    
    let Verificacion = valor3*10 
    
    if (valor1 > Verificacion ) {
        alert ("No podemos otorgar este credito debido a que tus ingresos son bajos")
        
    } else if (valor1 === NaN || valor2 === NaN || valor3 === NaN) {
        alert ('Verifica que todos los campos esten completos')
        
    }else {
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
        
        function total (){
            let gast = GastosAdicionalesVehiculos() + iva();
            let gastycap = gast+valor1;
            let MontoCuota = gastycap / valor2
            
            return MontoCuota
            
        }
        
        function TotalSolicitado(){
            const totalSolicitado = GastosAdicionalesVehiculos()+iva()+valor1;
            
            return totalSolicitado
        }
        creditos.push ({ Total: TotalSolicitado(), Cuota: total(), Cuotas: valor2})
        localStorage.setItem('Simulaciones', JSON.stringify(creditos))
        
        
        
        
    }
    
    
    let info = document.getElementById('info');
    info.innerText = `"El monto total a abonar es de $" ${TotalSolicitado()} "La cantidad de cuotas son" ${valor2} " Y el monto de la cuota es de $" ${total()}`;

    
    document.getElementById('capitalVehiculos').value="";
    document.getElementById('CuotasVehiculos').value="";
    document.getElementById('ingresoVehiculos').value="";
}

//calculador de credito para Hogar//


const calcularHogar = document.getElementById("calcular2")


calcularHogar.onclick = () => {

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
            
            function totalHogar (){
                let gastHogar = GastosAdicionalesHogar() + ivaCreditoHogar();
                let gastycapHogar = gastHogar+valor1H;
                let MontoCuotaHogar = gastycapHogar / valor2H
                
                return MontoCuotaHogar
            
            }

            function TotalSolicitadoHogar(){
                const totalSolicitadoHogar = GastosAdicionalesHogar()+ivaCreditoHogar()+valor1H;
                
                return totalSolicitadoHogar
            }
            creditos.push ({ Total: TotalSolicitadoHogar(), Cuota: totalHogar(), Cuotas: valor2H})
            localStorage.setItem('Simulaciones', JSON.stringify(creditos))

            


               }
           
       
     let info = document.getElementById('info');
     info.innerText = `"El monto total a abonar es de $" ${TotalSolicitadoHogar()} "La cantidad de cuotas son" ${valor2H} " Y el monto de la cuota es de $" ${totalHogar()}`;

     document.getElementById('capitalHogar').value="";
     document.getElementById('cuotasHogar').value="";
     document.getElementById('ingresoHipoteca').value="";
     
    
}

//calculador de credito para Libre destino//

const calcularLibre = document.getElementById("calcular3")

calcularLibre.onclick = () => {

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
            
            function totalLibre (){
                let gastLibre = GastosAdicionalesLibre() + ivaCreditoLibre();
                let gastycapLibre = gastLibre+valor1L;
                let MontoCuotaLibre = gastycapLibre / valor2L
                
                return MontoCuotaLibre
            
            }

            function TotalSolicitadoLibre(){
                const TotalSolicitadoLibre = GastosAdicionalesLibre()+ivaCreditoLibre()+valor1L;
                
                return TotalSolicitadoLibre
            }
            creditos.push ({ Total: TotalSolicitadoLibre(), Cuota: totalLibre(), Cuotas: valor2L})
            localStorage.setItem('Simulaciones', JSON.stringify(creditos))
            


               }
           
       
     let info = document.getElementById('info');
     info.innerText = `"El monto total a abonar es de $" ${TotalSolicitadoLibre()} "La cantidad de cuotas son" ${valor2L} " Y el monto de la cuota es de $" ${totalLibre()}`;

    document.getElementById('capitalLibre').value="";
    document.getElementById('cuotasLibre').value="";
    document.getElementById('ingresoLibre').value="";
    
}