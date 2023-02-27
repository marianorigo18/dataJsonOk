getData()
async function getData(){
    const response = await fetch("http://127.0.0.1:5500/dataJsonOk/data/data.json");
    const json = await response.json();
    // recorrerData(json);
}

function recorrerData(data){
    data.categorias.forEach(element => {
        console.log(element.title);
        element.categorias.forEach(el => {
            console.log("___"+ el.title);
            el.categorias.forEach(elet => {
                console.log("..............."+elet.title);
                elet.categorias.forEach(elett => {
                    console.log("................................."+elett.title);
                })
            })
        })
    });

}


