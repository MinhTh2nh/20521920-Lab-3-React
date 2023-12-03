import * as React from "react";
import * as ReactDom from "react-dom";

const array = ["First", "Second", "Third"];

const object = {
    First:1,
    Second:2,
    Third:3,
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <section>
        <h1> array</h1>
        <ul>
            {array.map((i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
        <h1>object</h1>
        <ul>
            {}
        </ul>
    </section>
);