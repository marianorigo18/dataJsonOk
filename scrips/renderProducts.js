obtenerData()
async function obtenerData(){
    const response = await fetch("http://127.0.0.1:5500/dataJsonOk/data/data.json");
    const data = await response.json();
    capturarElements(data);
}

function capturarElements(data){
    const contenedorCards = document.querySelector('#contenedor-cards');
    let iluminacion = data.categorias[0].categorias
    iluminacion.forEach(cat => {
        const box = document.createElement('div');
        box.classList = 'box';
        box.innerHTML = `
        <a href="${cat.link}">
            <div class="card">
                <p>${cat.title}</p>
            </div>
        </a>
        `
        contenedorCards.appendChild(box)
    });
}