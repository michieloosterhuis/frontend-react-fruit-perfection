import React from 'react';
import './App.css';
import Product from "./Product";

import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import {ReactComponent as ShoppingCart} from "./assets/winkelmandje.svg";

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Ons Verhaal</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>
                    Fruit Perfection
                </h1>
                <button
                    type="button"
                    onClick={() => console.log("Lekker shoppen!")}
                >
                    Shop nu
                </button>
            </header>
            <main>
                <Product
                    image={citroenen}
                    title="Citroen"
                    description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                />
                <Product
                    image={limoenen}
                    title="Limoen"
                    description="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
                />
                <Product
                    image={ijsblokjes}
                    title="IJsblokjes"
                    description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
                />
            </main>
            <footer>
                <div className="form-container">
                    <h2>Contactformulier</h2>

                    <form>
                        <input
                            type="text"
                            placeholder="Typ hier jouw bericht"
                            name="message"
                            className={messageValue.length > 20 ? "input-error" : "input-normal"}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />

                            Ik ga akkoord met de algemene voorwaarden
                        </label>
                    </form>

                    <button
                        type="submit"
                        disabled={!checkedTerms}
                    >
                        Verstuur
                    </button>
                </div>
            </footer>
        </>
    );
}

export default App;
