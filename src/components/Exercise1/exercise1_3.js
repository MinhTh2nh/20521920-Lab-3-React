import * as React from "react";
const MyButton = ( {disabled , text}) => (
    <button disabled = {disabled}>{text}</button>
);

MyButton.defaultProps = {
    disabled: false,
    text: "My Button",
}
export default MyButton;