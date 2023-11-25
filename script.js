let contenedor = document.querySelector
("#track-list")

contenedor.innerHTML = ""

axios.get("https://leonardoapi.onrender.com/music")

.then(

    (response) => {

        let canciones = response.data

        canciones.map( (cancion) => {


            let component = document.createElement("div")
            component.innerHTML = `
            <img src="${cancion.path.front}" alt="Im Still Standing">
             <li>${cancion.title}</li>
             <li>${cancion.author}</li>
             <li>${cancion.duration}</li>

        `

        component.addEventListener('click', () => {
            document.querySelector('#current-song-img')
            .setAttribute('src', cancion.path.front)

         document.querySelector('#current-song-audio').setAttribute('src',cancion.path.audio)

        




            console.log(`Se hizo click en ${cancion.title}`)
        })


        contenedor.appendChild(component)

        })
        document.querySelector('#pause').addEventListener('click', () => {
            let audio = document.querySelector('#current-song-audio')
            if(audio.paused) {
                audio.play()
            } else {
                audio.pause()
            }
        } )
  

    }

)
