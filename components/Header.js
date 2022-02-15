const Header = () => {

    const header = document.createElement('header');

    const headerContent = `
        <div class="header-top">
            <div class="header-top-left">
                <span>Yo tengo</span>
                <span>Yo quiero</span>
            </div>
            <div class="header-top-right">
                <a href="#">Portal transaccional</a>
                <span>Consulta y paga fácil</span>
            </div>
        </div>
        <nav>
            <img src="./assets/Componente2–1.svg" alt="logo">
            <ul>
                <li>DISFRUTA</li>
                <li>DÓNDE PAGARLA</li>
                <li>NUESTROS PRODUCTOS</li>
                <li>CONÓCENOS</li>
            </ul>
        </nav>
    `
    
    header.innerHTML = headerContent;
    return header;
}

export { Header }

