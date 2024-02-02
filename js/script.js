const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("se hizo clic en el body")
})

div.addEventListener('click', () => {
  console.log("se hizo clic en el div")
})

span.addEventListener('click', () => {
  console.log("se hizo clic en el span")
})

button.addEventListener('click', () => {
  console.log("se hizo clic en el button")
})


/* button.addEventListener("click", (event) => {
    // hacer lo que sea con el objeto evento
  }) */

 /*  button.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("se hizo clic en el button")
  }) */


