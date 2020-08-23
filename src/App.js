import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks =["jashim","anwar",'alomgir', "salman","anwar","shuvo","razzak"]
 const products = [
  {name:"pillow", price:"398$"},
  {name:"blancket", price:"947$"},
  {name:"burchin", price: "foolish"}
 ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>i am a react person</h1>

     <Counter></Counter>
     <GetData></GetData>

        <ul>
        {
            nayoks.map(x=><li>{x}</li>)
          }
         {
           products.map(x=><li>{x.name}</li>)
         }
        </ul>
        {
        products.map(pd=> <Product mal={pd}> </Product> )
        }
     
     
      </header>
    </div>
  );
  }

  function Counter (){
    const [count, setCount] = useState(49)

    const handleIncrease = ()=> setCount (count+1); 
    const handleDecrease = ()=> setCount(count-1);
    return(
      <div>
        <h4>count: {count} </h4>
        <button onClick={handleDecrease}>decrease</button>
        <button onClick={handleIncrease}>increase</button>
      </div>
    )
  }
   function GetData(){
     const [user, setUser] = useState([])
     useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then(res => res.json())
       .then(data => setUser(data))
     },[])
     return(
       <div>
         <h3>Dynamic data: {user.length} </h3>
         <ul>
           {
             console.log(user)
           }
           {
             user.map(x=><li>{x.title}</li>)
           }
         </ul>
    
       </div>
     )
   }

  function Product(props){
    const productStyle={
      border:"1px solid blue",
      height: "200px",
      width: "300px",
      backgroundColor: "black",
      color:"white"
    }
    const {name,price} = props.mal
  return(
   <div style={productStyle}>
     <h3>{name}</h3>
     <h6>{price}</h6>
     <button>buy now</button>
   </div>
  )
  }


  function Person(props){
 return(
   <div style={{backgroundColor:"black",color:"white",margin:"10px",border:"1px solid red",width:"400px"}}>
     <h1> Name: {props.name} </h1>
     <h3>Nayka: {props.nayka}</h3>
   </div>
 )
  }
 
export default App;
