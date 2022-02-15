const CardsContainer = () => {

    const section = document.createElement('section');
    section.classList.add('cards-container');

    const cardsContainerContent = `
        <div class="a card">
            <span>¿Qué quieres hacer hoy?</span>
        </div>
        <div class="b card">
            <span>Pagar mi tarjeta</span>
            <button>Pagar mi tarjeta</button>
        </div>
        <div class="c">
            <div class="c1 card">
                <span class="arrow arrow-left"></span>
                <button>Adquirir la oferta</button>
                <span class="arrow arrow-right"></span>
            </div>
            <div class="c2 card">
                <span>Conoce los centros de atención</span>
            </div>
            <div class="c3 card">
                <span class="arrow arrow-left"></span>
                <span class="text">Disfruta ser cliente preferencial pagando con tu tarjeta éxito!</span>
                <a>Adquirir la oferta</a>
                <span class="arrow arrow-right"></span>
            </div>
        </div>
        <div class="d card">
            <span>Nuestros peludos necesitan la mejor atención ante una adversidad</span>
            <button>Seguro para mascotas</button>
        </div>
        <div class="e">
            <div class="e1 card">
                <button>Adquirir la oferta</button>
            </div>
            <div class="e2 card">
                <button>Adquirir la oferta</button>
            </div>
        </div>
        <div class="f card">
            <span>¿Por qué nos prefieren?</span>
            <p>Somos una compañia de financiamiento para TODOS, donde puedes adquirir mucho con pocos ingresos</p>
            <button>Conocenos</button>
        </div>
        <div class="g card">
            <span>Te recomendamos</span>
        </div>
    `;

    section.innerHTML = cardsContainerContent;

    return section
}

export { CardsContainer }