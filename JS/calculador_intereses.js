alert ('Bienvenidos a Credito Ya!')

//montos y productos//
const productos = [
                   {Tipo: ' Vehiculos'},
                   {Tipo: ' Hogar'}]
productos.unshift ({Tipo: ' Libre destino'})
const tipos = productos.map (p => p.Tipo)                
alert ('Tenemos creditos para: '+ tipos)

function calcular() {
    let valor1 = parseInt(document.getElementById('capital').value);
    let valor2 = parseInt(document.getElementById('cuotas').value);
    //intereses//  
    
    const interes = [96]
    const limite = 2000000;
    interes.unshift(54,68,78)
    
    
    if (valor1 > limite) {
        alert('No podemos entregarte este dinero.') 
    } else {
        alert('Tu credito esta casi aprobado. En la consola encontraras el detalle.') 
        for (let i=1; i<=valor2; i++){
        let intparcial = (valor1*interes[3])/100;
        let captotal = intparcial+valor1
        let cuotafinal = captotal/valor2;
        document.getElementById("aviso").innerHTML=document.getElementById("aviso").innerHTML+
        `<h5>"Tu cuota N "${i} "es de"${cuotafinal}</h5>`
        



        } 

    } 

    
}
