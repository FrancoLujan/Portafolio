const falsoBoton = document.querySelector(".falsoBoton");

const evento  = falsoBoton.addEventListener("click", (e) =>{
    e.preventDefault()
    const tecnologias = document.querySelector(".tecnologias");
    tecnologias.style.animationName = "despliegue"
    tecnologias.style.animationDuration = ".9s"
    tecnologias.style.animationTimingFunction = "ease-out"

   falsoBoton.style.display = "none"

   console.log(tecnologias.style)

    

})

