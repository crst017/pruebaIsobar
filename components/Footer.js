const Footer = () => {
    
    const footer = document.createElement('footer');

    const footerContent = `
            <div class="logo">
                <img src="./assets/logo-tuya.svg" alt="logo">
            </div>
            <section>
                <ul class="footer-top">
                    <li><a href="#">Portal proveedores</a></li>
                    <li><a href="#">Trabaja con nosotros</a></li>
                    <li><a href="#">Puntos Colombia</a></li>
                    <li><a href="#">Información del consumidor financiero</a></li>
                    <li><a href="#">Atención a discapacitados</a></li>
                    <li><a href="#">Para tener en cuenta</a></li>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Mapa de sitio</a></li>
                </ul>
                <div class="footer-bottom">
                    <form class="subscribe">
                        <label for="input-email">¿Quieres suscribirte a nuestro boletín?</label>
                        <div>
                            <input type="email" name="email" id="input-email" placeholder="Correo electrónico" required>
                            <input type="checkbox" name="terms" id="terms" required>
                            <span>Acepto <a href="#">términos y condiciones</a></span>
                            <button>Suscribirme</button>
                        </div>
                        
                    </form>
                    <section class="social-networks">
                        <span>Siguenos:</span>
                        <a class="icon icon-li" href="https://co.linkedin.com"></a>
                        <a class="icon icon-fb" href="https://es-la.facebook.com"></a>
                        <a class="icon icon-ig" href="https://www.instagram.com"></a>
                        <a class="icon icon-yt" href="https://www.youtube.com"></a>   
                    </section>
                </div>
            </section>
    `;

    footer.innerHTML = footerContent;
    return footer;
}

export { Footer }
