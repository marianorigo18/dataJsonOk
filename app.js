getData()
async function getData(){
    const response = await fetch("http://127.0.0.1:5500/data/data.json");
    const json = await response.json();
    recorrerData(json);
}

function recorrerData(data){
    data.categorias.forEach(element => {
        console.log(element.title);
    });
}

