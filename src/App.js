import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/header";
import {Todos} from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";
import React,{ useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("i am onDeletee",todo);
    
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"go to market",
      desc:"you need to go to market to get this job done"
    },
    {
      sno:2,
      title:"go to mall",
      desc:"you need to go to market to get this job done2"
    },
    {
      sno:3,
      title:"go to ghat",
      desc:"you need to go to market to get this job done3"
    }
  ]);
  return (
    <>
        <Header title="MyTodosList" searchBar={false}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>
  );
}

export default App;
