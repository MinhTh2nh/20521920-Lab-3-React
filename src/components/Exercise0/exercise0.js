import * as React from "react";
import * as ReactDom from "react-dom";

const root =
ReactDom.createRoot(document.getElementById("root"));

root.render(
    <p>
        Hello, <Strong>JSX</Strong>
    </p>
);