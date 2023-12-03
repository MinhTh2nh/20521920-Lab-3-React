// import * as React from "react";

// class MyButoon extends React.Component {
//     render() {
//         return <button>{this.props.children}</button>;
//     }
// }
// export default MyButoon;

import * as React from "react";

class MyButton extends React.Component {
    render() {
        const {disabled , text } = this.props ;
        return <button disabled = {disabled}>{text}</button>;
    }
}
export default MyButton;