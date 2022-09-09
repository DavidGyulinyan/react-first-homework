const App = () => {
    return (
        <div>
            <Header />
            <Section />
            <Section1 />
            <Footer />
        </div>  
    );
}

const Header = () => {
    return (
        <div>
            <header className="header">
            <div className="logo">
            <h1>LOGO</h1>
            </div>
            <SearchBarInput />
            <span className="menuItem"></span>
            <span className="menuItem">About</span>
            <span className="menuItem">Blog</span>
            <span className="menuItem">Contacts</span>
            <span className="menuItem">Shop</span>
            <span className="menuItem">The Map</span>
            </header>
        </div>
    );
}

const Section = () => {
    return (
        <div>
            <section className="section">
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            <div className="sectionItem"></div>
            </section>
        </div>
    );
}

const Section1 = () => {
    return (
        <div>
        <section className="section1">
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
        <div className="sectionItem"></div>
    </section>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footerParagraph">
                <span>
            
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe expedita sit nostrum temporibus quod, fuga, incidunt
                </span>
                </div>

                <div className="footerParagraph">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe expedita sit nostrum temporibus quod, fuga, incidunt
                </span>
                </div>

                <div className="footerParagraph">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe expedita sit nostrum temporibus quod, fuga, incidunt
                </span>
                </div>

                <div className="footerParagraph">
                <div className="iconSimulation"></div>
                <div className="iconSimulation"></div>
                <div className="iconSimulation"></div>
                <div className="iconSimulation"></div>
                </div>

                <div className="footerParagraph date">
                    <span>Ⓒ2022 made with React JS</span>
                    <br />
                    <span>All rights reserved</span>
                </div>
            </footer>
        </div>
    );
}



const SearchBarInput = () => {
    return(
        <div>
            <div className="searchBarWrapper">
            <div className="inputWrapper">
            <input className="searchInput" type="text" />
            <button>search</button>
            </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));