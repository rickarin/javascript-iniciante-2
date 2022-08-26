const container = document.querySelector('.container')
const pokeText = document.getElementById('pokemon-name')
const form = document.querySelector('form')




function pokeApi () {
    const container_infos = document.createElement('div')
    container_infos.classList.add ('container-infos')
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"
        let string = pokeText.value.replace(/ /g, "").toLowerCase()
        let urlExplore = urlForm + string
        
        fetch(urlExplore)
            .then(resposta => resposta.json())
            .catch(function(err){
                alert(err)
                return
            })
            .then(function(data){
                console.log(data)
                const pokeName = document.createElement('h2')
                pokeName.innerText = `Nome: ${data.name}`
                pokeName.classList.add('cap')
                container_infos.append(pokeName)
               

                const pokeType = document.createElement('h3')
                pokeType.innerText = `Tipo: ${data.types[0].type.name}`
                pokeType.classList.add('cap')
                container_infos.append(pokeType)
                

                container.append(container_infos)
            })


 
            
           
            

}




form.addEventListener('submit', function (e) {
        e.preventDefault()
        pokeApi()      
})


