getData()
async function getData(){
    const response = await fetch("http://127.0.0.1:5500/dataJsonOk/data/data.json");
    const json = await response.json();
    recorrerData(json);
}

function recorrerData(data){
    data.categorias.forEach((element) => {
        console.log(element);
        console.log(element.title);
        console.log(element.link);
        console.log(element.categorias);
        element.categorias.forEach(element => {
            console.log(element.title);
            element.categorias.forEach(element => {
                console.log(element.title);
            })
        })
    });

}


