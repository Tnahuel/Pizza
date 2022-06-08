let Ingredientes = ['tomate' , 'cebolla' , 'jamon', 'queso', 'oregano' , 'salsa' , 'salchica' , 'peperoni','atun', 'queso azul'];
//no logro sacar el underfine 
function Pizza(Ingredientes){
    let Par= [];
    let Impar= [];
        for(i=0;i<Ingredientes.length;i++){
            let Contador=Ingredientes[i].length;
                if(Contador%2==0){
                    Par.push(Ingredientes[i]);
                }else{
                    Impar.push(Ingredientes[i]);
                }
        } 
        console.log('son pares'+' '+Par[i]),
        console.log('son impares'+' '+Impar[i]);
}

Pizza(Ingredientes)
