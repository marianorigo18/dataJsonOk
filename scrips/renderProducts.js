obtenerData()
async function obtenerData(){
    const response = await fetch("http://127.0.0.1:5500/dataJsonOk/data/data.json");
    const data = await response.json();
    console.log(data.categorias[0].title);
    capturarElements(data);
}

function capturarElements(data){
    const containerCards = document.querySelector("#container__cards");
    containerCards.innerText = data.categorias[0].title
}