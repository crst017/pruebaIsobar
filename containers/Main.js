import { CardsContainer } from "../components/CardsContainer.js";
import { Aside } from "../components/Aside.js";

const Main = () => {

    const main = document.createElement('main');

    main.appendChild(CardsContainer());
    main.appendChild(Aside());

    return main;
}

export { Main }