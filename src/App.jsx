import React, { useState } from 'react';
import "./style.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';


export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };
  
  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  };
  
  
 return (
   <>
   <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
   <IncompleteTodo incompleteTodo={incompleteTodo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
   <CompleteTodo completeTodo={completeTodo} onClickBack={onClickBack} />
   </>
 );
};

