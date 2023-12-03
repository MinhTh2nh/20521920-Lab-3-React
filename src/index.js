import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import MyButton from './MyButton';
// import MySection from './MySection';
// import MyComponent from './components/Exercise1/exercise1_1';
import MyComponent from './components/Exercise1/exercise1';

import MyList from './MyList';
import MyButton from './components/Exercise1/exercise1_3';
import MyInput from './MyInput';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    Button , Card , Avatar
} from 'antd';
// import 'antd/dist/antd.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent/>)
// root.render(<p>
//     Hello , <strong>JSX</strong>
// </p>)
root.render(
    <div>
        <button />
            <code />
        <input />
        <lable />
        <p />
        <pre />
        <select />
        <table />
        <ul />
    </div>
);
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

const array = ["First", "Second", "Third"];

const object = {
    First:1,
    Second:2,
    Third:3,
};

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
const appState = {
  text : "My Button" ,
  disabled : true ,
  items : ["First" , "Second" , "Third"],
}

function render (props){
  root.render(
    <main>
      <MyButton text = {props.text} disabled = {props.disabled}/>
      <MyList items = {props.items}/>
    </main>
  );
}

// render(appState)

// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");
//   render(appState);
// },1000);

// root.render(
//   <MySection>
//     <MyButton>My Butoon Text </MyButton>
//     <MyComponent/>
//   </MySection>
// );

// function render ({second}){
//   root.render(
//     <main>
//       <MyButton/>
//       <MyButton text = {second.text} disabled = {second.disabled}/>
//     </main>
//   );
// }

// render({
//   second : {
//     text : "Second Button" ,
//     disabled : true ,
//   }
// })

// root.render(<App/>)
const smartPeople = [
    {name : 'Minh Thanh' , age : 82 , IQ : 210} , 
    {name : 'Minh Thanh 2 ' , age : 82 , IQ : 210} , 
    {name : 'Minh Thanh 3 ' , age : 82 , IQ : 210} , 
    {name : 'Minh Thanh 4 ' , age : 82 , IQ : 210} , 
    {name : 'Minh Thanh 5' , age : 82 , IQ : 210} , 
    {name : 'Minh Thanh 6' , age : 82 , IQ : 210} , 

]
const {Meta} = Card ;
const card = {
    title : "Elon Musk" ,
    description : "Elon Musk is .sdasldasdasmdkasldaskas" ,
    avatar : "https://deadline.com/wp-content/uploads/2023/03/GettyImages-1240422158.jpg",
    cover : "https://deadline.com/wp-content/uploads/2023/03/GettyImages-1240422158.jpg"
}

const user = {
    firstName : 'Elon' , 
    lastName : 'Musk' , 
    age : 49 , 

}
//Exercise 4.1
const element = (
    //Exercise 4.1
    <div style={
        {
            fontSize: "15px",
            border: "1px solid green",
            backgroundColor: "#d0f0c0",
            textAlign: "center"
        }
    }>Green is the prime color of the world</div>
    //Exercise 4.2
    // <
    // Button style = {
    //     {
    //         margin: "10px 10px"
    //     }
    // }
    // type = "primary" >
    // < /Button>
    // //Exercise 4.3
    // < ul style = {
    //     {
    //         margin: "10px 10px"
    //     }
    // }>
    //    {smartPeople.map((person, index) => (
    //         <li key={index}>
    //             Name: {person.name}, Age: {person.age}, IQ: {person.IQ}
    //         </li>
    //     ))}
    // </ul>
    //Exercise 4.4
//      <div>
//     <Card
//     style={{ width: 700 }}
//     cover={<img alt="Elon Musk" src={card.cover} />}
//   >
//     <Meta
//       avatar={<img alt="Elon Musk Avatar" src={card.avatar} style={{width : 300}}/>}
//       title={card.title}
//       description={card.description}
//     />
//     </Card>
//      </div>
//Exercise 4.5
// <div>
 //  <h1> first name : {user.firstName}</h1>
 //  <h1> last name :{user.lastName} </h1>
 //  <h1> age : {user.age}</h1>
//</div> 
//Exercise 4.6
//* <div style={{ 
 //  fontSize: '15px',
 //  backgroundColor: '#d0f0c0',
  // border: '1px solid green',
 // padding: '10px',
//}}>
// Green is the prime color of the world
//</div>

)
// const UseForm = () => {
//     return (
//         <form>
//             <label>Enter a username :</label>
//             <input/>
//         </form>
//     )
// }
// ReactDOM.render(<App/>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();