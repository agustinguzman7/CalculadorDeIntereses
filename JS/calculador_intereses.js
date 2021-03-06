const monedaCredito = document.getElementById('moneda_A');
const monedaPagoCredito = document.getElementById('moneda_B');
const cantidadCredito = document.getElementById('inputA');
const cantidadCobro = document.getElementById('inputB');
const cambioElement = document.getElementById('cambio');


function realizarCambio() {
    const monedaA = monedaCredito.value;
    const monedaB = monedaPagoCredito.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${monedaA}`)
   .then(res => res.json() )
   .then(data => {
       const tasa = data.rates[monedaB];
       
       cambioElement.innerText = `1 ${monedaA} = ${tasa} ${monedaB}`;

       cantidadCobro.value = (cantidadCredito.value*tasa).toFixed(2);

    } );
}

monedaCredito.addEventListener('change', realizarCambio);
monedaPagoCredito.addEventListener('change', realizarCambio);
cantidadCredito.addEventListener('input', realizarCambio);
cantidadCobro.addEventListener('input', realizarCambio);






//import Json

import {dataEnJson} from './data.js';
console.log(dataEnJson);
//montos y productos//

class productos{
    constructor(tipo, maximo, adicionales, interes){
        
        this.tipo = tipo
        this.maximo = maximo
        this.adicionales = adicionales
        this.interes = interes
    }
}
const productoVehiculos = new productos('vehiculos', '900000', 'seguro automotor', '65')
const productoHogar =  new productos('hogar', '1500000', 'seguro Vida', '58');
const productoLibreDestino = new productos('libre destino','500000','seguro Vida','78');





// creditos Storage



let creditos = []

const creditosStored = JSON.parse(localStorage.getItem('Simulaciones'));

if(creditosStored) {
    creditos = creditosStored
    
    creditos.forEach(e => {
        
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
            `<tr>
              <td> ${e.Tipo} </td>
              <td> ${e.Total}</td>
              <td> ${e.Cuota}</td>
              <td> ${e.Cuotas}</td>
              
            </tr>`;
    });

    } 

    

    //calculador de credito para Vehiculos//
    const calcularVehiculos = document.getElementById("calcular1");
    
    
    
    calcularVehiculos.onclick = () => {
        
        let valor2 = parseInt(document.getElementById('CuotasVehiculos').value);
        let valor3 = parseInt(document.getElementById('ingresoVehiculos').value);
        let valor1 = parseInt(document.getElementById('capitalVehiculos').value);
        let edad = document.getElementById('edadVehiculos').value;
        let Verificacion = valor3*10;
        let edadMaxima = 65;
        let edadMinima = 18;
        
        if (valor1 > Verificacion || edad < edadMinima || edad > edadMaxima ) {
            Swal.fire({
                icon: 'error',
                title: 'No podemos otorgarte el credito',
                text: 'Puede que tus ingresos sean bajos o que uno de los campos este vacio',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            
            
        } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Calculo Exitoso',
            showConfirmButton: false,
            timer: 1500
        })    
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
        
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr>
          <td> Vehiculos </td>
          <td> ${TotalSolicitado()}</td>
          <td> ${total()}</td>
          <td> ${valor2}</td>
          
        </tr>`;
        
        
        let info = document.getElementById('info');
        info.innerText = `"El monto total a abonar es de $" ${TotalSolicitado()} "La cantidad de cuotas son" ${valor2} " Y el monto de la cuota es de $" ${total()}`;
        creditos.push ({Tipo:'Vehiculos', Total: TotalSolicitado(), Cuota: total(), Cuotas: valor2})
        console.log(...creditos);
        localStorage.setItem('Simulaciones', JSON.stringify(creditos))
        
        
        
        
        
    }
    
    
    
    
    
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
    let edadHogar = document.getElementById('edadHogar').value;
    let Hipoteca = valor3H/1.5;
    let edadMaxima = 50;
    let edadMinima = 18;
    
    if (valor1H > Hipoteca || edadHogar < edadMinima || edadHogar > edadMaxima ) {
        
        Swal.fire({
            icon: 'error',
            title: 'No podemos otorgarte el credito',
            text: 'Puede que tu hipoteca no garantice el prestamo o que uno de los campos este vacio',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
            
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Calculo Exitoso',
            showConfirmButton: false,
            timer: 1500
        })
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
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr>
          <td> Hogar </td>
          <td> ${TotalSolicitadoHogar()}</td>
          <td> ${totalHogar()}</td>
          <td> ${valor2H}</td>
        </tr>`;
            creditos.push ({Tipo:'Hogar', Total: TotalSolicitadoHogar(), Cuota: totalHogar(), Cuotas: valor2H})
            console.log(...creditos);
            localStorage.setItem('Simulaciones', JSON.stringify(creditos))
            
            
            
            
            let info = document.getElementById('info');
            info.innerText = `"El monto total a abonar es de $" ${TotalSolicitadoHogar()} "La cantidad de cuotas son" ${valor2H} " Y el monto de la cuota es de $" ${totalHogar()}`;
            
        }
        
        
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
        let edadLibre = document.getElementById('edadLibre').value;
        let Libre = valor3L*3; 
        let edadMaxima = 70;
        let edadMinima = 18;
        
        if (valor1L > Libre || edadLibre < edadMinima || edadLibre > edadMaxima ) {
            Swal.fire({
                icon: 'error',
                title: 'No podemos otorgarte el credito',
                text: 'Puede que tus ingresos sean bajos o que uno de los campos este vacio',
                footer: '<a href="">Why do I have this issue?</a>'
            })                   
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Calculo Exitoso',
                showConfirmButton: false,
                timer: 1500
            })
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
            creditos.push ({Tipo:'Libre Destino', Total: TotalSolicitadoLibre(), Cuota: totalLibre(), Cuotas: valor2L})
            console.log(...creditos);
            localStorage.setItem('Simulaciones', JSON.stringify(creditos))
            
            
            
        }
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr>
          <td> Libre Destino</td>
          <td> ${TotalSolicitadoLibre()}</td>
          <td> ${totalLibre()}</td>
          <td> ${valor2L}</td>
        </tr>`;
        
        let info = document.getElementById('info');
        info.innerText = `"El monto total a abonar es de $" ${TotalSolicitadoLibre()} "La cantidad de cuotas son" ${valor2L} " Y el monto de la cuota es de $" ${totalLibre()}`;
        
        document.getElementById('capitalLibre').value="";
        document.getElementById('cuotasLibre').value="";
        document.getElementById('ingresoLibre').value="";
        
    }
    
    
