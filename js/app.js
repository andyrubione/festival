/* 
//REGISTRO

const usuarios = [
    { nombre: "jose", contraseña: 1234 },
    { nombre: "pedro", contraseña: 5678 },
]

class newUser {
    constructor(nombre, contraseña) {
        this.nombre = nombre
        this.contraseña = contraseña
    }
}

console.log(usuarios)
usuarios.push({ nombre: prompt("Ingresar nombre para tu nuevo usuario (No debe contener mayusculas): "), contraseña: prompt("Ingrese una contraseña para tu nuevo usuario: ")})
console.log(usuarios)
const mapUsuario = usuarios.map((names) => names.nombre)
console.log(mapUsuario)
const mapContraseña = usuarios.map((contra) => contra.contraseña)
console.log(mapContraseña)

//LOG IN

let nombreUsuario = "valor 1"
let accesoUsuario = "valor 2"
while (nombreUsuario !=true) {
    accesoUsuario = prompt("Ingrese su usuario ").toLocaleLowerCase()
    nombreUsuario = usuarios.some((name) => name.nombre == accesoUsuario)

    console.log(nombreUsuario)
    if (nombreUsuario !=false & nombreUsuario != undefined) {

        let passUsuario = "Valor 1"
        let accesoPass = "Valor 2"
        while (passUsuario !=true) {
            accesoPass = prompt("Ingrese su contraseña:")
            passUsuario = usuarios.some((pass) => pass.contraseña == accesoPass)
            
            console.log(passUsuario)
            if (passUsuario !=false & passUsuario != undefined) {
                alert("Bienvenido " + accesoUsuario)
            } else {
                alert("Contraseña Incorrecta")
            }
        }
    } else {
        alert("Nombre de usuario incorrecto")
    }
}
 */

//TICKETS 

//Class modelo de tickets
class newTicket {
    constructor(day, image, service, price) {
        this.day = day
        this.imgSrc = image
        this.service = service
        this.price = price

    }
}

//Genero tickets
const day1 = new newTicket("Day 1", "DAY1.png", "Standard", 180)
const day2 = new newTicket("Day 2", "DAY2.png", "Standard", 250)
const day3 = new newTicket("Day 3", "DAY3.png", "Standard", 230)

//Array de tickets
const days = [day1, day2, day3]

//Array Carrito de compras
const tickets = []

//Referencia de tickets en el HTML
const ticketsCard = document.querySelector("#ticketsCard")

//Generacion de cada producto
days.forEach((cardTicket) => {
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
    <input type="image" src="${cardTicket.imgSrc}" data-id="${cardTicket.day}" class="buttonCTA cardImg">
    <h3 class="cardTitle">${cardTicket.day} </h3>
    <p class="cardDesc">${cardTicket.service} service</p>
    <span class="cardPrice">$ ${cardTicket.price}</span>
    `

    ticketsCard.append(card)
})

//Actualizacion de array 
const carritoSection = document.querySelector("#carritoSection")

const imprimirtickets = () => {
    carritoSection.innerHTML = ``
    tickets.forEach((cardTicket) => {
        const Box = document.createElement("div")
        Box.classname = "Box"
        Box.innerHTML = `
        <div class="box">
    <div class="carritoImg">
    <img src="${cardTicket.imgSrc}">
    </div>
    <div class="carritoTitle">${cardTicket.day} </div>
    <div class="carritoDesc">${cardTicket.service} service</div>
    <div class="carritoPrice">$ ${cardTicket.price}</div>
    </div>
    `
        carritoSection.append(Box)
    })
}

//Seleccion de tickets
const agregarTicket = (e) => {
    const ticketElegido = e.target.getAttribute("data-id")
    const cardTicket = days.find((cardTicket) => cardTicket.day == ticketElegido)
    tickets.push(cardTicket)
    imprimirtickets()
    localStorage.setItem("tickets", JSON.stringify(tickets))
}

//Agregar evento 
const botonCompra = document.querySelectorAll(".buttonCTA")
botonCompra.forEach((botonC) => {
    botonC.addEventListener("click", agregarTicket)
})

//Verifiacion de carrito al recargar la pagina
if (localStorage.getItem("tickets")) {
    tickets = JSON.parse(localStorage.getItem('tickets'))
    imprimirtickets()
}

//Vaciar carrito
const vaciarcarrito = () => {
    if (localStorage.getItem("tickets")) {
        localStorage.removeItem("tickets")
    }
    tickets = []
    imprimirtickets()
}

const vaciarcarritoBtn = document.querySelector("#vaciarCarrito")
vaciarcarritoBtn.addEventListener("click", vaciarcarrito)



/* 
//COMBO TICKETS SELECTION (Esto se hara con selector y no con texto)

dayNumberA = prompt("Elija: Day 1, Day 2 or Day 3:")
const aTicketA = tickets.find(ticket => ticket.day === dayNumberA)
console.log(aTicketA)

dayNumberB = prompt("Elija: Day 1, Day 2 o Day 3:")
const aTicketB = tickets.find(ticket => ticket.day === dayNumberB)
console.log(aTicketB)

const arrayTicketsCombo2day = []

arrayTicketsCombo2day.push (aTicketA)
arrayTicketsCombo2day.push (aTicketB)
console.log(arrayTicketsCombo2day)

//MONTO A ABONAR SEGUN LA ELECCION


const totalTickets2 = arrayTicketsCombo2day.reduce((acumulador,twoDays) => acumulador + twoDays.price,0)
console.log("Total a pagar por 2 entradas: " + (totalTickets2)*85/100)

const totalTicket3day = tickets.reduce((acumulador, abono) => acumulador + abono.price, 0)
console.log("Total a pagar por el abono completo: " +(totalTicket3day) * 75 / 100) 
 */