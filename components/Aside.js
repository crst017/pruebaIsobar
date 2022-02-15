const Aside = () => {
    
    const aside = document.createElement('aside');

    const asideContent = `
        <span class="arrow up"></span>
        <div class="aside-buttons">
            <img src="./assets/Grupo553.svg" alt="phone-icon">
            <span>Líneas</span>
        </div>
        <div class="aside-buttons">
            <img src="./assets/Grupo624.svg" alt="">
            <span>Chateános</span>
        </div>
        <div class="aside-buttons">
            <img src="./assets/Grupo623.svg" alt="">
            <span>Contáctanos</span>
        </div>
        <div class="aside-buttons">
            <img src="./assets/Grupo620.svg" alt="">
            <span>Encuéntranos</span>
        </div>
        <div class="aside-buttons">
            <img src="./assets/Grupo549.svg" alt="">
            <span>Buscar</span>
        </div>
        <span class="arrow down"></span>
    `;

    aside.innerHTML = asideContent;

    return aside
}

export { Aside }