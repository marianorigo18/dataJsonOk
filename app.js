getData()
async function getData(){
    const response = await fetch("http://127.0.0.1:5500/dataJsonOk/data/data.json");
    const json = await response.json();
    recorrerData(json);
}

function recorrerData(data){
    let iluminacion = data.categorias[0].categorias[0].categorias[0].categorias;
    iluminacion.forEach(element => {
        console.log(element);
    });

}


