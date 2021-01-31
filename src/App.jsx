import React, { useState } from 'react';
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodo, setIncompleteTodo] = useState(['あああ', 'いいい']);
  const [completeTodo, setCompleteTodo] = useState(['ううう']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
 return (
   <>
   <div className="input-area">
     <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
     <button>追加</button>
   </div>
   <div className="incomplete-area">
    <p className="title">未完了リスト</p>
    <ul>
      {incompleteTodo.map((todo) => {
        return (
        <div key={todo} className="list-row">
          <li>{todo}</li>
          <button>完成</button>
          <button>削除</button>
        </div>
        );
      })}
    </ul>
   </div>
   <div className="complete-area">
    <p className="title">未完了リスト</p>
      <ul>
        {completeTodo.map((todo) => {
          return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
          );
        })}
      </ul>
   </div>
   </>
 );
};

