import * as React from "react";
import * as ReactDom from "react-dom";

const root =
ReactDom.createRoot(document.getElementById("root"));

root.render(
    <section>
        <herder>
            <h1> A Header</h1>
        </herder>
        <nav>
            <a href="item"> Nav item</a>
        </nav>
        <main>
            <p>
                The main content....
            </p>
        </main>
        <footer>
            <small>&copy; 2021</small>
        </footer>
    </section>
);