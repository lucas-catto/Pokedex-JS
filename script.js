
document.addEventListener("DOMContentLoaded", function(){

    fetch('Pokemons.json')

        .then(response => response.json())
        .then(data => {
            
            let pokes = '';

            data.Pokemon.forEach(poke => {

                pokes += `
                    <div class="card">
                        <div class="Image">
                            <img src="${poke.Imagem}">
                        </div>
                                              
                        <div id="Nome"      >${          poke.Nome      }</div>
                        <div id="Especie"   >Espécie: ${ poke.Especie   }</div>
                        <div id="Tipo"      >Tipo: ${    poke.Tipo      }</div>
                        <div id="Altura"    >Altura: ${  poke.Altura    }</div>
                        <div id="Peso"      >Peso: ${    poke.Peso      } Kg</div>
                        <div id="Descricao" >${          poke.Descricao }</div>
                        
                    </div>
                `;
            });
            document.getElementById('main').innerHTML = pokes;
        })
        .catch(error = console.error('Erro ao buscar pokemons:', error));
});
