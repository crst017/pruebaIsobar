import { Header } from "./components/Header.js";
import { Main } from "./containers/Main.js";
import { Footer } from "./components/Footer.js";

const app = document.querySelector('#App');

app.appendChild(Header());
app.appendChild(Main());
app.appendChild(Footer());

const form = document.querySelector('form');

form.addEventListener( "submit", (e) => {
    e.preventDefault();
    Swal.fire(
        '¡ Bien hecho !',
        'Ahora estas suscrito a nuestras novedades!',
        'success'
    );
})